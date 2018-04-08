const MongoClient = require(`mongodb`).MongoClient
const crypto = require(`crypto`)
const prepareMappingChildNode = require(`./mapping`)
const _ = require(`lodash`)

exports.sourceNodes = (
  { boundActionCreators, getNode, hasNodeChanged },
  pluginOptions,
  done
) => {
  const { createNode } = boundActionCreators

  let serverOptions = pluginOptions.server || {
    address: `localhost`,
    port: 27017,
  }
  let dbName = pluginOptions.dbName || `local`,
    authUrlPart = ``
  if (pluginOptions.auth)
    authUrlPart = `${pluginOptions.auth.user}:${pluginOptions.auth.password}@`

  MongoClient.connect(
    `mongodb://${authUrlPart}${serverOptions.address}:${
      serverOptions.port
    }/${dbName}`,
    function(err, db) {
      // Establish connection to db
      if (err) {
        console.warn(err)
        return
      }
      let collection = pluginOptions.collection || `documents`
      if (_.isArray(collection)) {
        for (const col of collection) {
          createNodes(db, pluginOptions, dbName, createNode, col, done)
        }
      } else {
        createNodes(db, pluginOptions, dbName, createNode, collection, done)
      }
    }
  )
}

function createNodes(
  db,
  pluginOptions,
  dbName,
  createNode,
  collectionName,
  done
) {
  let collection = db.collection(collectionName)
  let cursor = collection.find()

  // Execute the each command, triggers for each document
  cursor.each(function(err, item) {
    // If the item is null then the cursor is exhausted/empty and closed
    if (item == null) {
      // Let's close the db
      db.close()
      done()
    } else {
      var id = item._id.toString()
      delete item._id

      var node = {
        // Data for the node.
        ...item,
        id: `${id}`,
        parent: `__${collectionName}__`,
        children: [],
        internal: {
          type: `mongodb${caps(dbName)}${caps(collectionName)}`,
          content: JSON.stringify(item),
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(item))
            .digest(`hex`),
        },
      }
      const childrenNodes = []
      if (pluginOptions.map) {
        let mapObj = pluginOptions.map
        if (pluginOptions.map[collectionName]) {
          mapObj = pluginOptions.map[collectionName]
        }
        // We need to map certain fields to a contenttype.
        Object.keys(mapObj).forEach(mediaItemFieldKey => {
          if (
            node[mediaItemFieldKey] &&
            (typeof mapObj[mediaItemFieldKey] === `string` ||
              mapObj[mediaItemFieldKey] instanceof String)
          ) {
            const mappingChildNode = prepareMappingChildNode(
              node,
              mediaItemFieldKey,
              node[mediaItemFieldKey],
              mapObj[mediaItemFieldKey],
              createNode
            )

            node[`${mediaItemFieldKey}___NODE`] = mappingChildNode.id
            childrenNodes.push(mappingChildNode)

            delete node[mediaItemFieldKey]
          }
        })
      }
      createNode(node)
      childrenNodes.forEach(node => {
        createNode(node)
      })
    }
  })
}

function caps(s) {
  return s.replace(/\b\w/g, l => l.toUpperCase())
}
