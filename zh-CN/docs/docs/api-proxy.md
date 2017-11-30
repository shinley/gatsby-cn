---
title: '在开发中代理API请求'
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

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://dev-mysite.com/api/todos` as a fallback.

Keep in mind that `proxy` only has effect in development (with `gatsby develop`), and it is up to you to ensure that URLs like `/api/todos` point to the right place in production.