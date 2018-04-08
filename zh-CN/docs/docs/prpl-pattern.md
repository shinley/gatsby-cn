---
title: PRPL Pattern
---
PRPL是由Google开发的网站架构，用于构建在智能手机和其他具有不可靠网络连接的设备上运行得非常好的网站和应用程序。

https://developers.google.com/web/fundamentals/performance/prpl-pattern/

PRPL代表：

* **Push** critical resources for the initial URL route using `<link preload>` and http/2.
* 渲染初始路由。
* **Pre-cache** remaining routes.
* **Lazy-load** and create remaining routes on demand.

***Note** http/2 push is a developing server technology and not available on most hosts just yet.*

Gatsby follows the PRPL architectural pattern. Gatsby sites *render* a static HTML version of the initial route and then load the code bundle for the page. Then immediately starts *pre-caching* resources for pages linked to from the initial route. When a user clicks on a link, Gatsby creates the new page *on demand* on the client.

This issue written at the start of Gatsby's 1.0 work provides further background on how Gatsby works to guarantee high performance.

https://github.com/gatsbyjs/gatsby/issues/431

This blog post also covers how we think about performance — ["Web Performance 101—also, why is Gatsby so fast?"](/blog/2017-09-13-why-is-gatsby-so-fast/)