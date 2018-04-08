---
title: "在开发中代理API请求"
---
人们经常将来自同一主机和端口的服务作为前端React应用程序的后端实现。

要告诉开发服务器在开发中将任何未知的请求代理到您的API服务器，请在您的gatsby-config.js中添加一个代理字段，例如：

```js
module.exports = {
  proxy: {
    prefix: '/api',
    url: 'http://dev-mysite.com/api/'
  }
}
```

这样，当您在开发中获取（'/ api / todos'）时，开发服务器将认识到它不是一个静态资源，并将您的请求代理为http://dev-mysite.com/api/todos。

请记住，代理仅在开发中有效（与gatsby开发），并且由您来确保像/api/todos这样的URL指向生产中环境中的正确位置。