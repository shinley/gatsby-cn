---
title: Gatsby 1.0版本将给我们带来什么
date: "2017-02-23"
author: "Kyle Mathews"
image: 'ui-and-code.png'
draft: true
---
想象一下什么是完美的网站框架？ 它可以让你可以让你快速建站，可以让你不用复杂的去搭建环境就可以使用最新的建站技术和浏览器新特性，它可以帮助你的团队协调开发、交付和维护。

这个框架必须具备如下特征：

* **通用的**。适用于各种网站。由小型的企业宣传网站到复杂的大型网站应用。
* **简单易用**。不需要任何的安装就可以开始使用，并且提供合理的API来扩展框架。
* **快速加载**。不要因为页面的加载慢而失去了用户了。 得益于HTTP/2、浏览器缓存、Service worker、内行关键css样式和代码切割技术，你的网站总可以非常快速地被加载，不管你要构建的是什么类型的网站。
* **JavaScript 驱动**。万维网是巨大和竞争激烈的。只有那些快速的和交互丰富的网站才能生存下来。你的框架必须支持高级的JavaScript。
* **支持团队协作**。使用行业标准化的协作工具如NPM、Git和支持持续发布，这样你的团队总可以在同一个页面上协作开发和容易增加新的功能。
* **支持模块化**。允许干净的单独的功能独立出来，这样可以便于bug的修复、增加新的功能和降低复杂。
* **互联网的规模**。你的网站要支持百万级的访问量而不崩溃（或者让你蒙受经济损失）。
* **安全性**。不要让你的用户数据有被黑客窃取的风险。

我相信 Gatsby 已经达到了这些要求。 几年来，对这项目的开发与不断完善，并看到它在很多不用类型网站上面的成功应用，我现在已经对 Gatsby 非常有信心。

自从2015年我开源 Gasby 以来，它已经在GitHub上收集到了**8000个star了**（在同类型的项目中是最多的），已经有**122个贡献者**，被**下载了13,000**次。

在2016年年中，我决定[全职开发Gatsby](https://www.bricolage.io/gatsby-open-source-work/)和开始研究把原始的创意和想法汇总到Gatsby 1.0版本。

## 什么是 Gatsby？

Gatsby 汇聚了网站应用世界中的最快性能的静态网站技术、强大的抽象化能力、优秀的工具和客户端能力。

它是一个通用的以数据为中心的 web 框架, 被[广泛用于各种站点](https://github.com/gatsbyjs/gatsby#sites-built-with-gatsby)的开发, 包括博客、营销网站、文档站点和电子商务。

它是由三个最流行的 web 应用工具整理而成的一个综合性的网站框架:

* [React](https://facebook.github.io/react/) facebook的ui构建工具
* [webpack](https://webpack.js.org/) 用于打包 javascript 和 css
* [graphql](http://graphql.org/) facebook 的声明式数据查询工具

在设计 gatsby 时, 我想要实现同时支持我最喜欢的两种开发体验。 通过markdown和静态网站生成器的简洁性， 以及React相关的超级方便的热加载能力。

![Gatsby development
experience](https://camo.githubusercontent.com/0506699aaaae2f9772cc381b92f2aa5e14eba296/687474703a2f2f7a697070792e6766796361742e636f6d2f556c74696d6174655765656b6c7942617265626972646261742e676966)

在 gatsby 网站中加载页面时, 浏览器首先加载该页面的预构建html 文件, 然后加载该页面交互性所需的最小 javascript代码。

由于 gatsby 站点只是静态文件, 因此您可以 更加*自由部署*。 不需要关心 *复杂数据库* 安装和维护、*网络服务器*的考量以及黑客攻击的预防。

运行静态文件可始终确保 *超快加载时间*。 网站加载后, gatsby 会自动*预加载* 相邻的页面。 这意味着站内导航可以 *瞬时*切换, 因为下一页所有的内容和脚本已经提前加载完成。 既然您正在Gatsby网站上阅读这篇文章, 请尝试单击标题中的链接, 然后单击 "后退" (请注意, 目前我们还在向1.0版本前进，这个网站仍然有效)。 是不是比你当前开发的网站要快一些呢？ 

## Apps vs sites

几乎从网站开发开始时， 对于web作为app平台还是一系列的“文档”一直存在很大的争议。

近年来, 随着数十种 javascript框架和其他 javascript 工具的发布, "app" 的概念越来越深得人心，也激发了许多的想法和交流。

世界上最大的公司投资了1000万美元在这些 javascript 框架和它们越来越大的生态工具系统中。

这些进步十分巨大并且振奋人心，我清楚地记得在2010-2013年间许多东西的开发需要我冥思苦想数周，当我学会React后只需要几天甚至几小时就完成了。

React 给web开发的世界带来了诸多好处。 它的三大观点, 可复用组件、生命周期 api 和单向数据流极大的 *简化* web的ui开发。 在其他框架中很难解决的问题，React几乎都可以轻松应对。

## Time for a JavaScript web framework?

最初，互联网在开源 cms 上运行--主要是 wordpress 和 drupal。 我大学花了大部分的时间建设 drupal 网站, 和编写 [开源 drupal 模块](https://www.bricolage.io/first-beta-release-drupal-native-mailinglist-module/)。 我的第一份工作是在 [Pantheon](https://pantheon.io)-在那里我为 团队建设 drupal & wordpress 网站 [设计和构建开发人员工具](https://www.bricolage.io/new-beginnings/) 。

这些开源 cms 拥有者*很棒的工具, 和强大的生态系统*。他们真正地统治着网站。仅 wordpress 就在互联网所有网站中的占比超过25%！

然而，似乎以客户端为中心的web框架的时代已经到来。

随着越来越多的网站希望变得像应用程序一样, 人们*渴望在我们的网站添加更多的 javascript* ，这也导致了工具复杂性的爆发, 同时也导致网站性能的下降， 因为在错误的时间加载太多javascript。

但其实并不需要这样。 We use web frameworks because they *embed smart ideas about how to organize our code* so we're guided towards building fast sites that are simple to build and maintain.

Gatsby aims to be a *modern web framework* that's designed with the assumption that you need a rich client. Gatsby bakes in modern JavaScript compiler and bundling tools along with a full asset pipeline so you can just start writing your website and *be confident things will work*.

## Gatsby 1.0: Setting the foundation for a modern JavaScript website framework

I started working on the [1.0 branch](https://github.com/gatsbyjs/gatsby/tree/1.0) in August and after months of hard work, our first beta release is in sight.

The changes for 1.0 can be organized into a few areas.

### Add service worker and offline support

Service workers are perhaps the most exciting technology that's come to the web in the past several years. It makes possible (finally!) sophisticated client caching plus true offline support. I've added excellent on-by-default support to Gatsby for Service Workers and a great offline experience. If you're using Chrome or Firefox, this site loads offline! *Service workers make your site much more resilient against bad networks*. If someone loads your site on a train and goes through a tunnel, you won't lose them as they'll still be able to keep clicking around.

### Route-based code splitting

Many sites generate one JavaScript bundle for the *entire* site. Which means someone loading your frontpage loads far more code than is necessary.

Gatsby 1.0 only loads the scripts necessary for the page you're on. As you navigate around, Gatsby loads the JavaScript needed for each route.

This means that one page with heavy imports:

```javascript
import d3 from "d3";
import threejs from "react-threejs";
```

...won't affect the performance of the rest of the site.

This is particularly helpful for teams of people collaborating on a site with pages with very different technical and business requirements. Different parts of the site can evolve independently of each other.

One client I'm working with on Gatsby 1.0 (a stealth startup in San Francisco) is using Gatsby to build both their marketing site *and* SaaS app within the *same Gatsby codebase*.

The marketing pages of their site are built using markdown and React components along with a modern css-in-js library [Glamor](https://github.com/threepointone/glamor) for styling. The SaaS portion uses [Redux](http://redux.js.org/) to communicate with their Django API.

The marketing portion of the site loads quickly with minimal JavaScript. When a potential customer goes to sign-up for the app, there's no *awkward jump from the marketing website to the web app*—just a simple page change which seamlessly loads in the needed JavaScript. The *team is sharing components and styles across the site* without stepping on each others shoes as they rapidly iterate on features.

### Plugin and Theme systems

Wordpress & Jekyll are both great examples of open source communities with robust theme & plugins ecosystems.

Themes and plugins help accelerate building as you can build on what others have done and help collaborate with others on basic building blocks

Gatsby 1.0 will be adding plugin and theme support.

The plugin system will let you hook into lifecycle APIs from events during the bootstrap and build processes and in the browser.

There are a [number of official Gatsby plugins](/docs/plugins/) already built—all distributed as separate NPM packages. It'll be easy to create your own plugins for internal projects and as open source projects published on NPM.

Plugins can:

* add support for webpack loaders such as Sass, Less
* add drop-in support for lightweight React-compatible frameworks [Preact](https://preactjs.com/) and [Inferno](https://infernojs.org/)
* add a sitemap or RSS feed
* add [Google Analytics](/packages/gatsby-plugin-google-analytics/)
* ...and many more!

Plugins also drive the new GraphQL data processing layer.

The final pieces for theme support are coming soon. Gatsby's theme system will have some unique properties. You'll be able to add multiple themes to a site. So you could start a site with a "blog" theme and later add on a "portfolio" theme. Themes will also be able to *compose* other themes. So a large organization could have a standard "base" theme and then individual departments could extend the base theme to meet their specific requirements.

Themes (like plugins) will be published on NPM. So soon, starting a new Gatsby blog will be as simple as:

```bash
npm install --save gatsby-super-cool-theme
gatsby build --theme gatsby-super-cool-theme
```

### GraphQL data layer

Currently data in Gatsby (like pretty much every static site generator) is processed then *pushed* into templates to be rendered into HTML. This is a simple pattern and works great for many use cases. But when you start working on more complex sites, you really start to miss the flexibility of building a database-driven site. With a database, all your data is available to query against in any fashion you'd like. Whatever bits of data you need to assemble a page, you can *pull* in. You want to create author pages showing their bio and last 5 posts? It's just a query away.

I wanted this same flexibility for Gatsby. So for 1.0, I've built a new data processing layer which converts your static data files (or any other data source) into a *GraphQL schema* which you can query against like a database.

Every Gatsby page or page template can have a GraphQL query which tells Gatsby what data is required for that page. The data layer runs the GraphQL queries during development and at build time and writes out a JSON file with the result of the query. This JSON file is then injected into the React component as props.

Because we know at build-time what data is needed for every page, we can easily pre-fetch page data meaning even very complex, data-heavy pages load almost instantly.

This pattern of *colocating* your queries next to your views is copied from the [Relay data framework from Facebook](https://facebook.github.io/relay/). Colocaton makes it easy to fully understand your views as everything necessary for that view is fully described there.

A simple example of how this works in practice.

Say we had a markdown file that looked like:

```markdown
---
title: A sweet post
date: "2017-02-23"
---

This is my sweet blog post. **Cool!**
```

In our site, we would write a React component which acts as a template for all the blog posts. Included with the component is an exported `pageQuery`.

```javascript
// A simple React component for rendering a blog page.
import React from "react";

class BlogPostTemplate extends React.Component {
  render() {
    <div>
      <h1>{this.props.data.markdown.frontmatter.title}</h1>
      <small>{this.props.data.markdown.frontmatter.date}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: this.props.data.markdown.html,
        }}
      />
    </div>;
  }
}

export default BlogPostTemplate;

export const pageQuery = `
  query BlogPost($slug: String!) {
    markdown(slug: { eq: $slug }) {
      // Get the markdown body compiled to HTML.
      html
      frontmatter {
        title
        // Transform the date at build time!
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;
```

All data parsing and processing is plugin-driven. So in time, any imaginable data format and source and potential way of processing its data will be an npm install away.

So far I've focused on building out the markdown ecosystem. So there are plugins to [parse markdown](/packages/gatsby-parser-remark/) and process it in a variety of ways (including [adding syntax highlighting with PrismJS](/packages/gatsby-typegen-remark-prismjs/) and [resizing images referenced in markdown files](/packages/gatsby-typegen-remark-images/) so they're mobile ready). I've also added parsers for [YAML](/packages/gatsby-parser-yaml/), [JSON](/packages/gatsby-parser-json/), and [images](/packages/gatsby-parser-sharp/).

These plugins are easy to write (somewhat similar to webpack loaders) so I expect to see the list of plugins grow rapidly.

The GraphQL layer can also connect to external data sources like databases, APIs, or 3rd party services e.g. the various hosted CMSs such as [Contentful](https://www.contentful.com/) and [DataCMS](https://www.datocms.com/).

## Getting started with Gatsby 1.0

Gatsby 1.0 is still in alpha so I don't recommend it yet for casual use. If you don't mind some growth pains and diving it to fix bugs and add features, Gatsby 1.0 is mostly feature-complete now and can be used to build real sites.

The first beta will be released in the coming weeks along with more documentation and a getting started tutorial. Subscribe to the [1.0 meta issue](https://github.com/gatsbyjs/gatsby/issues/419) on GitHub to get updates.

This has been a super fun project to work on. I'm really interested to hear your reactions and what kind of problems you face that you think Gatsby will help with.

If you're interested in contributing, please join the [#gatsby channel](https://discord.gg/0ZcbPKXt5bVoxkfV) on Discord, check out the [issues](https://github.com/gatsbyjs/gatsby/issues), and help bikeshed on names and APIs and other ideas.