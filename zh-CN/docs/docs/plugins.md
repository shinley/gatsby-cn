---
title: Plugins
---
Plugins are Node.js packages that implement Gatsby APIs. They enable you to easily solve common website build problems e.g. setup Sass, add markdown support, process images, etc.

For larger / complex sites, they let you modularize your site customizations into site-specific plugins.

Gatsby has a large and growing set of plugins. See below for the [list of official plugins](#official-plugins). We'll eventually add support here for searching and browsing both official plugins and community plugins published on NPM.

## How to use?

Plugins are just Node.js packages meaning you install them like anything else in node using NPM.

For example, `gatsby-transformer-json` is a package which adds support for JSON files to the Gatsby data layer.

To install it, in the root of your site you run:

`npm install --save gatsby-transformer-json`

Then in your site's `gatsby-config.js` you simply add `gatsby-transformer-json` to the plugins array like:

```javascript
module.exports = {
  plugins: [
    `gatsby-transformer-json`,
  ],
}
```

Plugins can take options. See each plugin page below for more detailed documentation on using each plugin.

## Locally defined plugins

When you want to work on a new plugin, or maybe write one that is only relevant to your specific use-case, a locally defined plugin is more convenient than having to create an NPM package for it.

You can place the code in the `plugins` folder in the root of your project like this:

    plugins
    └── my-own-plugin
        ├── gatsby-node.js
        └── package.json
    

You still need to add the plugin to your `gatsby-config.js` like for plugins installed from NPM.

Each plugin requires a package.json file, but the minimum content is just an empty object `{}`. The `name` and `version` fields are read from the package file. The name is used to identify the plugin when it mutates the GraphQL data structure. The version is used to clear the cache when it changes.

For local plugins it is best to leave the version field empty. Gatsby will generate an md5-hash from all gatsby-* file contents and use that as the version. This way the cache is automatically flushed when you change the code of your plugin.

If the name is empty it is inferred from the plugin folder name.

Like all gatsby-* files, the code is not being processed by Babel. If you want to use JavaScript syntax which isn't supported by your version of Node.js, you can place the files in a `src` subfolder and build them to the plugin folder root.

## Official plugins

* [gatsby-plugin-catch-links](/packages/gatsby-plugin-catch-links/)
* [gatsby-plugin-coffeescript](/packages/gatsby-plugin-coffeescript/)
* [gatsby-plugin-feed](/packages/gatsby-plugin-feed/)
* [gatsby-plugin-glamor](/packages/gatsby-plugin-glamor/)
* [gatsby-plugin-google-analytics](/packages/gatsby-plugin-google-analytics/)
* [gatsby-plugin-google-tagmanager](/packages/gatsby-plugin-google-tagmanager/)
* [gatsby-plugin-jss](/packages/gatsby-plugin-jss/)
* [gatsby-plugin-manifest](/packages/gatsby-plugin-manifest/)
* [gatsby-plugin-netlify](/packages/gatsby-plugin-netlify/)
* [gatsby-plugin-nprogress](/packages/gatsby-plugin-nprogress/)
* [gatsby-plugin-offline](/packages/gatsby-plugin-offline/)
* [gatsby-plugin-preact](/packages/gatsby-plugin-preact/)
* [gatsby-plugin-react-helmet](/packages/gatsby-plugin-react-helmet/)
* [gatsby-plugin-sass](/packages/gatsby-plugin-sass/)
* [gatsby-plugin-sharp](/packages/gatsby-plugin-sharp/)
* [gatsby-plugin-sitemap](/packages/gatsby-plugin-sitemap/)
* [gatsby-plugin-styled-components](/packages/gatsby-plugin-styled-components/)
* [gatsby-plugin-twitter](/packages/gatsby-plugin-twitter/)
* [gatsby-plugin-typescript](/packages/gatsby-plugin-typescript/)
* [gatsby-remark-autolink-headers](/packages/gatsby-remark-autolink-headers/)
* [gatsby-remark-copy-linked-files](/packages/gatsby-remark-copy-linked-files/)
* [gatsby-remark-prismjs](/packages/gatsby-remark-prismjs/)
* [gatsby-remark-responsive-iframe](/packages/gatsby-remark-responsive-iframe/)
* [gatsby-remark-images](/packages/gatsby-remark-images/)
* [gatsby-remark-smartypants](/packages/gatsby-remark-smartypants/)
* [gatsby-source-contentful](/packages/gatsby-source-contentful/)
* [gatsby-source-drupal](/packages/gatsby-source-drupal/)
* [gatsby-source-filesystem](/packages/gatsby-source-filesystem/)
* [gatsby-source-hacker-news](/packages/gatsby-source-hacker-news/)
* [gatsby-source-lever](/packages/gatsby-source-lever/)
* [gatsby-source-medium](/packages/gatsby-source-medium/)
* [gatsby-source-mongodb](/packages/gatsby-source-mongodb/)
* [gatsby-source-wordpress](/packages/gatsby-source-wordpress/)
* [gatsby-transformer-documentationjs](/packages/gatsby-transformer-documentationjs/)
* [gatsby-transformer-javascript-static-exports](/packages/gatsby-transformer-javascript-static-exports/)
* [gatsby-transformer-json](/packages/gatsby-transformer-json/)
* [gatsby-transformer-remark](/packages/gatsby-transformer-remark/)
* [gatsby-transformer-sharp](/packages/gatsby-transformer-sharp/)
* [gatsby-transformer-yaml](/packages/gatsby-transformer-yaml/)
* [gatsby-transformer-toml](/packages/gatsby-transformer-toml/)

## Official components

* [gatsby-link](/packages/gatsby-link/)
* [gatsby-image](/packages/gatsby-image/)

## Community Plugins

* [gatsby-plugin-antd](https://github.com/bskimball/gatsby-plugin-antd)
* [gatsby-plugin-copy](https://github.com/aquilio/gatsby-plugin-copy)
* [gatsby-plugin-google-fonts](https://github.com/didierfranc/gatsby-plugin-google-fonts)
* [gatsby-plugin-i18n](https://github.com/angeloocana/gatsby-plugin-i18n)
* [gatsby-plugin-i18n-tags](https://github.com/angeloocana/gatsby-plugin-i18n-tags)
* [gatsby-plugin-i18n-readnext](https://github.com/angeloocana/gatsby-plugin-i18n-readnext)
* [gatsby-plugin-intercom-spa](https://github.com/toriihq/gatsby-plugin-intercom-spa)
* [gatsby-plugin-protoculture](https://github.com/atrauzzi/gatsby-plugin-protoculture)
* [gatsby-plugin-purify-css](https://github.com/rongierlach/gatsby-plugin-purify-css)
* [gatsby-plugin-yandex-metrika](https://github.com/viatsko/gatsby-plugin-yandex-metrika)
* [gatsby-plugin-klipse](https://github.com/ahmedelgabri/gatsby-plugin-klipse)
* [gatsby-plugin-stripe-checkout](https://github.com/njosefbeck/gatsby-plugin-stripe-checkout)
* [gatsby-plugin-stripe-elements](https://github.com/njosefbeck/gatsby-plugin-stripe-elements)
* [gatsby-remark-emoji](https://github.com/Rulikkk/gatsby-remark-emoji)
* [gatsby-remark-external-links](https://github.com/JLongley/gatsby-remark-external-links)
* [gatsby-source-workable](https://github.com/tumblbug/gatsby-source-workable)
* [gatsby-source-github](https://github.com/mosch/gatsby-source-github)
* [gatsby-source-google-sheets](https://github.com/brandonmp/gatsby-source-google-sheets)
* [gatsby-source-stripe](https://github.com/njosefbeck/gatsby-source-stripe)