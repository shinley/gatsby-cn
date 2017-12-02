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

You may customize your list of supported browser versions by declaring a [`"browserslist"`](https://github.com/ai/browserslist) key within your `package.json`. Changing these values will modify your JavaScript (via [`babel-preset-env`](https://github.com/babel/babel-preset-env#targetsbrowsers)) and your CSS (via [`autoprefixer`](https://github.com/postcss/autoprefixer)) output.

This article is a good introduction to the growing community of tools around Browserslist — https://css-tricks.com/browserlist-good-idea/

By default, Gatsby emulates the following config:

    javascript
    // package.json
    {
      "browserslist": [
        "> 1%",
        "IE >= 9",
        "last 2 versions"
      ]
    }