const React = require(`react`)
const Styletron = require(`styletron-server`)
const { StyletronProvider } = require(`styletron-react`)
const { renderToString } = require(`react-dom/server`)

exports.replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const styletron = new Styletron()

  const app = (
    <StyletronProvider styletron={styletron}>{bodyComponent}</StyletronProvider>
  )

  replaceBodyHTMLString(renderToString(app))

  const stylesheets = styletron.getStylesheets()
  const headComponents = stylesheets.map((sheet, index) => (
    <style media={sheet.media || `all`} key={index}>
      {sheet.css}
    </style>
  ))

  setHeadComponents(headComponents)
}
