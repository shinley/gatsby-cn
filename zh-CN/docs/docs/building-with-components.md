---
title: Building with Components
---
## Requirements

要使用Gatsby，您需要对React组件有一个基本的了解。

The [official tutorial](https://facebook.github.io/react/tutorial/tutorial.html) is a good place to start.

## 为什么使用React组件？

React组件架构通过鼓励模块化，可重用性和清晰的抽象来简化构建大型网站。 React是拥有开源组件，教程和工具的大型生态系统，可以无缝地与Gatsby一起构建网站。 Gatsby构建成几乎完全像一个正常的React应用程序。

[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) 是学习如何使用React构建应用程序的好资源。

## Gatsby如何使用React组件？

Gatsby的一切都是使用组件构建的。

项目的基本目录结构可能如下所示：

```sh
.
├── gatsby-config.js
├── package.json
└── src
    ├── html.jsx
    ├── pages
    │   ├── index.jsx
    │   └── posts
    │       ├── 01-01-2017
    │       │   └── index.md
    │       ├── 01-02-2017
    │       │   └── index.md
    │       └── 01-03-2017
    │           └── index.md
    ├── templates
    │   └── post.jsx
    │
    └── layouts
        └── index.jsx
```

### Page components

Src /pages下的组件会根据文件名自动生成路径。 例如src/pages/index.jsx映射到yoursite.com，src/pages/about.jsx变成yoursite.com/about/。

例如:

`src/pages/about.jsx`

```jsx
import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    return (
        <div className="about-container">
          <p>About me.</p>
        </div>
    );
  }
}

export default AboutPage;
```

### 页面模板组件

You can programmatically create pages using "page template components". All pages are React components but very often these components are fairly simple wrappers around data from files or other sources.

`src/templates/post.jsx` is an example of a page component. It queries GraphQL for markdown data and then renders the page using this data.

See [part four](/tutorial/part-four/) of the tutorial for a detailed introduction to programmatically creating pages.

Example:

```jsx
import React from "react"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }
}
`
```

### Layout components

`src/layouts/index.jsx` (optional) wraps page components. You can use it for portions of pages that are shared across pages like headers and footers.

Example:

```jsx
import React from 'react';
import Navigation from '../components/Navigation/Navigation.jsx';

export default class Template extends React.Component {

  render() {
    return (
      <Navigation>
        {this.props.children()}
      </Navigation>
    );
  }
}
```

### HTML component

`src/html.jsx` is responsible for everything other than where Gatsby lives in the `<body />`.

In this file you can modify the `<head>` metadata, general structure of the document and add external links.

Typically you should omit this from your site as the default html.js file will suffice. If you need more control over server rendering, then it's valuable to have an html.js.

Example:

```jsx
import React from 'react';
import favicon from './favicon.png';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
  try {
    inlinedStyles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (

      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
```

These are examples of the different ways React components are used in Gatsby sites. To see full working examples, check out the [examples directory](https://github.com/gatsbyjs/gatsby/tree/master/examples) in the Gatsby repo.