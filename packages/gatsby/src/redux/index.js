const Redux = require(`redux`)
const Promise = require(`bluebird`)
const _ = require(`lodash`)
const { composeWithDevTools } = require(`remote-redux-devtools`)
const fs = require(`fs`)
const mitt = require(`mitt`)
const stringify = require(`json-stringify-safe`)

// Create event emitter for actions
const emitter = mitt()

// Reducers
const reducers = require(`./reducers`)

// Read from cache the old node data.
let initialState = {}
const rootNodeMap = new WeakMap()
try {
  initialState = JSON.parse(
    fs.readFileSync(`${process.cwd()}/.cache/redux-state.json`)
  )

  _.each(initialState.nodes, (id, node) => {
    trackSubObjectsToRootNodeId(node)
  })
} catch (e) {
  // ignore errors.
}

let store
// Only setup the Redux devtools if explicitly enabled.
if (process.env.REDUX_DEVTOOLS === `true`) {
  const sitePackageJSON = require(`${process.cwd()}/package.json`)
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 19999,
    name: sitePackageJSON.name,
  })
  store = Redux.createStore(
    Redux.combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(Redux.applyMiddleware())
  )
} else {
  store = Redux.createStore(
    Redux.combineReducers({ ...reducers }),
    initialState
  )
}

// Persist state.
const saveState = _.debounce(state => {
  const pickedState = _.pick(state, [
    `nodes`,
    `status`,
    `componentDataDependencies`,
  ])
  fs.writeFile(
    `${process.cwd()}/.cache/redux-state.json`,
    stringify(pickedState, null, 2),
    () => {}
  )
}, 1000)

store.subscribe(() => {
  const lastAction = store.getState().lastAction
  emitter.emit(lastAction.type, lastAction)
})

emitter.on(`*`, () => {
  saveState(store.getState())
})

exports.emitter = emitter
exports.store = store
exports.getNodes = () => {
  let nodes = _.values(store.getState().nodes)
  return nodes ? nodes : []
}
const getNode = id => store.getState().nodes[id]
exports.getNode = getNode
exports.hasNodeChanged = (id, digest) => {
  const node = store.getState().nodes[id]
  if (!node) {
    return true
  } else {
    return node.internal.contentDigest !== digest
  }
}

exports.loadNodeContent = node => {
  if (node.internal.content) {
    return Promise.resolve(node.internal.content)
  } else {
    return new Promise(resolve => {
      // Load plugin's loader function
      const plugin = store
        .getState()
        .flattenedPlugins.find(plug => plug.name === node.internal.owner)
      const { loadNodeContent } = require(plugin.resolve)
      if (!loadNodeContent) {
        throw new Error(
          `Could not find function loadNodeContent for plugin ${plugin.name}`
        )
      }

      return loadNodeContent(node).then(content => {
        // TODO update node's content field here.
        resolve(content)
      })
    })
  }
}

exports.getNodeAndSavePathDependency = (id, path) => {
  const { createPageDependency } = require(`./actions/add-page-dependency`)
  const node = getNode(id)
  createPageDependency({ path, nodeId: id })
  return node
}

exports.getRootNodeId = node => rootNodeMap.get(node)

const addParentToSubObjects = (data, parentId) => {
  _.each(data, (v, k) => {
    if (_.isArray(v) && _.isObject(v[0])) {
      _.each(v, o => addParentToSubObjects(o, parentId))
    } else if (_.isObject(v)) {
      addParentToSubObjects(v, parentId)
    }
  })
  rootNodeMap.set(data, parentId)
}

const trackSubObjectsToRootNodeId = node => {
  _.each(node, (v, k) => {
    // Ignore the node internal object.
    if (k === `internal`) {
      return
    }
    if (_.isArray(v) && _.isObject(v[0])) {
      _.each(v, o => addParentToSubObjects(o, node.parent))
    } else if (_.isObject(v)) {
      addParentToSubObjects(v, node.parent)
    }
  })
}
exports.trackSubObjectsToRootNodeId = trackSubObjectsToRootNodeId

// Start plugin runner which listens to the store
// and invokes Gatsby API based on actions.
require(`./plugin-runner`)
