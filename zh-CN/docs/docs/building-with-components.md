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

您可以使用“页面模板组件”以编程方式创建页面。 所有页面都是React组件，但是这些组件通常都是相当简单的包装来自文件或其他来源的数据。

src/templates/post.jsx是一个页面组件的例子。 它向GraphQL查询markdown数据，然后使用这些数据呈现页面。

有关以编程方式创建页面的详细介绍，请参阅教程的[第四部分](/tutorial/part-four/) 。

例如:

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

### 布局组件

src/layouts/index.jsx（可选）包装页面组件。 您可以将其用于跨页面共享的部分页面，如页眉和页脚。

例如:

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

### HTML 组件

src/html.jsx负责除了Gatsby在中的所有内容。

在这个文件中，您可以修改

<head>
  元数据，文档的一般结构并添加外部链接。</p> 
  
  <p>
    通常，您应该从您的网站中省略这个，因为默认的html.js文件就足够了。 如果你需要更多的控制服务器渲染，那么有一个html.js是很有价值的。
  </p>
  
  <p>
    例如:
  </p>
  
  <pre><code class="jsx">import React from 'react';
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
        &lt;style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        /&gt;
      );
    }
    return (

      &lt;html lang="en"&gt;
        &lt;head&gt;
          &lt;meta charSet="utf-8" /&gt;
          &lt;meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /&gt;
          {this.props.headComponents}
          &lt;link rel="shortcut icon" href={favicon} /&gt;
          {css}
        &lt;/head&gt;
        &lt;body&gt;
          &lt;div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          /&gt;
          {this.props.postBodyComponents}
        &lt;/body&gt;
      &lt;/html&gt;
    );
  }
}
</code></pre>
  
  <p>
    这些是React组件在Gatsby网站中使用的不同方式的示例。 要查看完整的工作示例，请查看Gatsby仓库中的示例目录。
  </p>