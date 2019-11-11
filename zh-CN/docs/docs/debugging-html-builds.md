---
title: 调试HTML构建
---

构建静态HTML文件时出现错误通常有两个原因。

1. 一些代码引用“browser globals”，如窗口或文档。 如果这是你的问题，你应该看到上面的错误，如“window is not defined”. To fix this, find the offending code and either a) check before calling the code if window is defined so the code doesn't run while gatsby is building (see code sample below) or b) if the code is in the render function of a React.js component, move that code into "componentDidMount" which ensures the code doesn't run unless it's in the browser.

2. Check that each of your JS files listed in your `pages` directory (and any sub-directories) are exporting either a React component or string. Gatsby treats any JS file listed under the pages dir as a page component, so it must have a default export that's a component or string.

3. 其他一些原因:-)＃1是构建静态文件失败的最常见原因。 如果这是另外一个原因，那么在解决问题时就必须更有创意。

## 如何检查窗口是否被定义

```javascript
// Requiring function causes error during builds
// as the code tries to reference window
const module = require("module"); // Error

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require("module");
}
```

## 解决第三方模块问题

So, the worst has happened and you're using an NPM module that expects `window` to be defined. You may be able to file an issue and get the module patched, but what to do in the mean time?

One solution is to [customize](/docs/add-custom-webpack-config) your webpack configuration to replace the offending module with a dummy module during server rendering.

项目根目录下的gatsby-node.js：

```js
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /bad-module/,
      loader: "null-loader",
    });
  }
};
```