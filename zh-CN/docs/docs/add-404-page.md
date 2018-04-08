---
title: "Adding a 404 Page"
---
To create a 404 page create a page whose path matches the regex `/404*`. Most often you'll want to create a React component page at `src/pages/404.js`.

Gatsby ensures that your 404 page is built as `404.html` as many static hosting platforms default to using this as your 404 error page. If you're hosting your site another way, you'll need to setup a custom rule to serve this file for 404 errors.

开发时，Gatsby添加一个覆盖自定义404页面的默认404页面。 但是，您仍然可以访问您的404页面的确切网址，以验证其正常工作。