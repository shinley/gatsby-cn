---
title: 添加自定义webpack配置
---
*在创建自定义webpack配置之前，请检查是否有已经构建的Gatsby插件来处理插件部分的用例。 如果还没有一个，你的用例是一个普通的用例，我们强烈建议你把你的插件提交给Gatsby仓库，这样它可以提供给其他人（包括你未来的自己 *

要添加自定义webpack配置，请在根目录中创建（如果没有的话）gatsby-node.js文件。 在这个文件里面，导出一个名为modifyWebpackConfig的函数。

当Gatsby创建它的webpack配置时，这个函数将被调用，允许你使用webpack-configurator修改默认的webpack配置。

Gatsby做多个webpack的构建时有些不同的配置。 我们称每个构建类型为“阶段”。 有以下几个阶段：

1. develop：运行gatsby develop命令时。 配置热加载和CSS注入页面
2. develop-html：与开发相同，但是没有在babel配置文件中react-hmre来渲染HTML组件。
3. build-css：CSS的生产版本
4. build-html：生成构建静态HTML页面
5. build-javascript：制作JavaScript构建。 创建路由捆绑以及公共和应用程序捆绑。

检查源的webpack.config.js。

There are many plugins in the Gatsby repo using this API to look to for examples e.g. [Sass](/packages/gatsby-plugin-sass/), [Typescript](/packages/gatsby-plugin-typescript/), [Glamor](/packages/gatsby-plugin-glamor/), and many more!

## Example

Here is an example adding support for **flexboxgrid** when processing css files.

```js
exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.loader('css', {
        include: /flexboxgrid/,
      });

      break;

    case 'build-css':
      config.loader('css', {
        include: /flexboxgrid/,
      });

      break;

    case 'build-html':
      config.loader('css', {
        include: /flexboxgrid/,
      });

      break;

    case 'build-javascript':
      config.loader('css', {
        include: /flexboxgrid/,
      });

      break;
  }

  return config;
};
```