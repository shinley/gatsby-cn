var plugins = [{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#9D7CBF","showSpinner":false},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-glamor/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-react-next/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"navigateFallback":null,"navigateFallbackWhitelist":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-93349937-1"},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks
// basically like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-browser.js'),
//   require('/path/to/plugin2/gatsby-browser.js'),
// ]

export function apiRunner(api, args, defaultReturn) {
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else if (defaultReturn) {
    return [defaultReturn]
  } else {
    return []
  }
}

export function apiRunnerAsync(api, args, defaultReturn) {
  return plugins.reduce(
    (previous, next) =>
      next.plugin[api]
        ? previous.then(() => next.plugin[api](args, next.options))
        : previous,
    Promise.resolve()
  )
}
