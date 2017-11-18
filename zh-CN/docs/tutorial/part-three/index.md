---
title: Gatsby.js教程第三部分
typora-copy-images-to: './'
---
盖茨比让你轻松创建“布局组件”。 布局组件是您要在多个页面上共享的网站部分。 例如，Gatsby网站通常会有一个共享页眉和页脚的布局组件。 其他常见的东西添加到布局是侧边栏和导航菜单。

在这个页面上，左边的边栏（假设你在一个更大的设备上）和顶部的头部是gatsbyjs.org布局组件的一部分。

让我们深入探索盖茨比的布局。

首先，为本教程的这一部分创建一个新的站点。 我们将再次使用“hello world”启动器(Starter)。

```shell
gatsby new tutorial-part-three https://github.com/gatsbyjs/gatsby-starter-hello-world
```

一旦网站完成安装，请安装gatsby-plugin-typography。 对于Typography.js主题，我们来试试这个“童话门”的排版主题吧。

```shell
npm install --save gatsby-plugin-typography typography-theme-fairy-gates
```

在src/utils/typography.js中创建排版配置文件

```javascript
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

module.exports = typography
```

那么我们的网站的gatsby-config.js

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
```

现在，我们添加几个不同的页面：一个首页，一个关于页面和一个联系页面。

`src/pages/index.js`

```jsx
import React from "react"

export default () =>
  <div>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
```

`src/pages/about.js`

```jsx
import React from "react"

export default () =>
  <div>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
```

`src/pages/contact.js`

```jsx
import React from "react"

export default () =>
  <div>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </div>
```

![no-layout](no-layout.png)

We now have the start of a nice personal site!

But there are a few problems. First, it'd be nice if the page content was centered on the screen like in part two of the tutorial. And second, we should really have some sort of global navigation so it's easy for visitors to find and visit each of the sub-pages.

Let's tackle these problems by creating our first layout component.

## Our first layout component

First, create a new directory at `src/layouts`. All layout components have to be in this directory.

Let's create a very simple layout component at `src/layouts/index.js`

```jsx
import React from "react"

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children()}
  </div>
```

Stop `gatsby develop` and start it again for the new layout to take effect.

![with-layout2](with-layout2.png)

Sweet, the layout is working as now our text is centered and constrained to a column 650 pixels wide as we specified.

Let's now add our site title.

```jsx{5}
import React from "react"

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h3>MySweetSite</h3>
    {children()}
  </div>
```

If we go to any of our three pages we'll see the same title added e.g. the `/about/` page:

![with-title](with-title.png)

Let's add navigation links to each of our three pages.

```jsx{2-9,12-22}
import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
```

![with-navigation](with-navigation.png)

And there we have it! A three page site with a simple global navigation.

With your new "layout component" powers, you can easily add headers, footers, global navigation, sidebars, etc. to your Gatsby sites.

Continue on to [part four of the tutorial where we'll start learning about Gatsby's data layer and programmatic pages!](/tutorial/part-four/)