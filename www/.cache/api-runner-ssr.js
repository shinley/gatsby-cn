var plugins = [{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-typography/gatsby-ssr.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr.js'),
      options: {"plugins":[],"siteUrl":"https://www.gatsbyjs.org"},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-glamor/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","background_color":"#f7f0eb","theme_color":"#5c2965","display":"minimal-ui","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-twitter/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-93349937-1"},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shinley/Downloads/gatsby-master/www/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                  filter: {\n                    frontmatter: { draft: { ne: true } }\n                    fileAbsolutePath: { regex: \"/docs.blog/\" }\n                  }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      frontmatter {\n                        title\n                        date\n                        excerpt\n                        author {\n                          id\n                        }\n                      }\n                      fields {\n                        slug\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/blog/rss.xml"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
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
  } else {
    return [defaultReturn]
  }
}
