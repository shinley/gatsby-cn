---
title: 浏览器支持
---
Gatsby支持与当前稳定版本的React.js相同的浏览器，也就是目前IE9 +以及其他流行浏览器的最新版本。

## Polyfills

Gatsbuy使用ES6 Promise API。 由于一些旧的浏览器不支持这个，Gatsby默认包含一个Promise的polyfill。 如果您想提供自己的Promise填充，可以在gatsby-config.js中将polyfill设置为false：

    module.exports = {
      polyfill: false,
      // ...
    }
    

## 使用“Browserslist”指定您的项目支持哪些浏览器

您可以通过在package.json中声明一个[“browserslist”](https://github.com/ai/browserslist)键来自定义支持的浏览器版本列表。 更改这些值将修改您的JavaScript（通过[babel-preset-env](https://github.com/babel/babel-preset-env#targetsbrowsers)）和您的CSS（通过[autoprefixer](https://github.com/postcss/autoprefixer)）输出。

这篇文章是一个很好的介绍周围浏览器列表的工具日益增长的社区 - https://css-tricks.com/browserlist-good-idea/

默认情况下，Gatsby模拟下面的配置：

    javascript
    // package.json
    {
      "browserslist": [
        "> 1%",
        "IE >= 9",
        "last 2 versions"
      ]
    }