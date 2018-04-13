---
title: "Add Custom webpack Config"
---
*在创建自定义webpack配置之前，请检查是否有已经构建的Gatsby插件来处理插件部分的用例。 If there's not yet one and your use case is a general one, we highly encourage you to contribute back your plugin to the Gatsby repo so it's available to others (including your future self *

To add custom webpack configurations, create (if there's not one already) a `gatsby-node.js` file in your root directory. Inside this file, export a function called `modifyWebpackConfig`.

When Gatsby creates its webpack config, this function will be called allowing you to modify the default webpack config using [webpack-configurator](https://github.com/lewie9021/webpack-configurator).

Gatsby做多个webpack的构建时有些不同的配置。 我们称每个构建类型为“阶段”。 有以下几个阶段：

1. develop: when running the `gatsby develop` command. Has configuration for hot reloading and CSS injection into page
2. develop-html: same as develop but without react-hmre in the babel config for rendering the HTML component.
3. build-css：CSS的生产版本
4. build-html：生成构建静态HTML页面
5. build-javascript: production JavaScript build. Creates route bundles as well as a `commons` and `app bundle`.

Check [webpack.config.js](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/webpack.config.js) for the source.

There are many plugins in the Gatsby repo using this API to look to for examples e.g. [Sass](/packages/gatsby-plugin-sass/), [Typescript](/packages/gatsby-plugin-typescript/), [Glamor](/packages/gatsby-plugin-glamor/), and many more!

## Modifying the babel loader

Manually allow tweaking of include + exclude of babel loader.

```javascript
const generateBabelConfig = require("gatsby/dist/utils/babel-config");

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ["> 1%", "last 2 versions", "IE >= 9"],
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader("js").loader("js", {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/(swiper|dom7)/.test(modulePath)
        );
      },
      loader: "babel",
      query: babelConfig,
    });
  });
};
```

## Example

Here is an example that configures **flexboxgrid** when processing css files. Add this in `gatsby-node.js`:

```js
exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-css":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-html":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-javascript":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;
  }

  return config;
};
```