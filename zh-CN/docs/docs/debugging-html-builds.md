---
title: 调试HTML构建
---
构建静态HTML文件时出现错误通常有两个原因。

1. 一些代码引用“browser globals”，如窗口或文档。 如果这是你的问题，你应该看到上面的错误，如“window is not defined”. 为了解决这个问题，找到有问题的代码，然后： a）在调用代码之前检查是否定义了窗口，这样在构建gatsby时代码不会运行（参见下面的代码示例）或者 b）如果代码在 一个React.js组件，将代码移动到“componentDidMount”中，确保代码不会运行，除非它在浏览器中。

2. 检查您的网页目录（和任何子目录）中列出的每个JS文件是否正在导出React组件或字符串。 Gatsby将页面目录下列出的任何JS文件视为页面组件，因此它必须具有默认的导出组件或字符串。

3. 其他一些原因:-)＃1是构建静态文件失败的最常见原因。 如果这是另外一个原因，那么在解决问题时就必须更有创意。

## 如何检查窗口是否被定义

```javascript
// Requiring function causes error during builds
// as the code tries to reference window
const module = require('module') // Error

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require('module') // Error
}
```

## 解决第三方模块问题

所以，最糟糕的事情发生了，你正在使用一个NPM模块，期望窗口被定义。 您可能能够提交问题并获取模块修补程序，但是同时要执行哪些操作？

一个解决方案是定制你的[webpack](../add-custom-webpack-config)配置，以在服务器渲染期间用伪模块替换违规模块。

项目根目录下的gatsby-node.js：

```js
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /bad-module/,
      loader: 'null-loader'
    })
  }
}
```