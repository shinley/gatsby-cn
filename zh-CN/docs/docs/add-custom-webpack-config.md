---
title: "Add Custom webpack Config"
---
*在创建自定义webpack配置之前，请检查是否有已经构建的Gatsby插件来处理插件部分的用例。 If there's not yet one and your use case is a general one, we highly encourage you to contribute back your plugin to the Gatsby repo so it's available to others (including your future self *

要添加自定义webpack配置，请在根目录中创建（如果没有）gatsby-node.js文件。 在这个文件中，导出一个名为modifyWebpackConfig的函数。

当Gatsby创建其webpack配置时，将调用该函数，允许您使用webpack配置器修改默认[webpack-configurator](https://github.com/lewie9021/webpack-configurator)。

Gatsby做多个webpack的构建时有些不同的配置。 我们称每个构建类型为“阶段”。 有以下几个阶段：

1. 开发：运行gatsby develop命令时。 配置热重载和CSS注入页面
2. develop-html：与开发相同，但没有在babel配置中反应-hmre以呈现HTML组件。
3. build-css：CSS的生产版本
4. build-html：生成构建静态HTML页面
5. build-javascript：制作JavaScript构建。 创建路由捆绑以及公共和应用程序捆绑。

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