---
title: Gatsby.js Tutorial Part Four
typora-copy-images-to: './'
---
欢迎来到教程的第四部分！ 中途！ 希望事情开始感觉很舒服 

But don't get too comfortable 我们正在走向新的领域，需要一些大脑的充分理解。 在接下来的两部分教程中，我们将深入到Gatsby数据层！ Gatsby的一个强大功能，可让您轻松地从Markdown，Wordpress，无头CMS和其他所有类型的数据源构建网站。

## 本教程前半部分的总结

到目前为止，我们一直在学习如何使用React.js--能够创建自己的组件以充当网站的自定义构建块的能力如何。

我们还使用CSS-in-JS探索了样式组件，这使我们可以在组件中封装CSS。

## 数据在Gatsby

一个网站有四个部分，HTML，CSS，JS和数据。 本教程的前半部分集中在前三个部分。 现在我们来学习如何在Gatsby网站中使用数据。

什么是数据？

一个非常计算机科学的答案是：数据就像“字符串”，整数（42），对象（{pizza：true}）等等

然而，为了在Gatsby工作，更有用的答案是“React组件之外的所有东西”。

到目前为止，我们一直在编写文本，并直接在组件中添加图像。 这是建立多个网站的绝佳方式。 但是，通常要将数据存储在组件之外，然后根据需要将数据导入组件。

例如，如果您使用Wordpress构建网站（所以其他贡献者具有良好的添加和维护内容的界面）和Gatsby，则网站（网页和帖子）的数据在Wordpress中，并根据需要将数据提取到 你的组件。

数据也可以生活在像Markdown，CSV等文件类型，以及各种数据库和API。

Gatsby的数据层让我们可以将数据从这些（以及其他来源）中直接导入到我们的组件中 - 以我们想要的形式。

## Gatsby的数据层如何使用GraphQL将数据提取到组件中.

如果你对React世界很熟悉，有许多选项可以将数据加载到组件中。 其中最流行和最健壮的是一种名为GraphQL的技术。

GraphQL是在Facebook发明的，以帮助产品工程师将所需的数据提取到组件中。

GraphQL是一种查询语言（它的名字的QL部分）。 如果您熟悉SQL，它的工作方式非常类似。 您可以在组件中使用特殊的语法描述所需的数据，然后将数据提供给您。

Gatsby使用GraphQL让组件声明它需要的数据，然后将这些数据提供给组件。

## 我们的第一个GraphQL查询

让我们为本教程的这一部分创建另一个新的网站，就像前面的部分一样。 我们打算建立一个简单的Markdown博客, 名字叫“大熊猫吃很多”。 这是专门展示熊猫吃大量食物的最佳图片和视频。 随着我们对GraphQL的深入了解和Gatsby对Markdown的支持。

```shell
gatsby new tutorial-part-four https://github.com/gatsbyjs/gatsby-starter-hello-world
```

然后安装一些其他需要的依赖项。 我们将使用字体主题Kirkham +我们将尝试另一个CSS-in-JS库Glamorous。

```shell
npm install --save gatsby-plugin-typography gatsby-plugin-glamor glamorous typography-theme-kirkham
```

让我们设置一个类似于我们上次用布局组件和两个页面组件结束的站点。

`src/pages/index.js`

```jsx
import React from "react"

export default () =>
  <div>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <img 
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo" 
      />
    </div>
  </div>
```

`src/pages/about.js`

```jsx
import React from "react"

export default () =>
  <div>
    <h1>About Pandas Eating Lots</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
```

`src/layouts/index.js`

```jsx
import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

const linkStyle = css({ float: `right` })

export default ({ children }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        Pandas Eating Lots
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>
```

`src/utils/typography.js`

```javascript
import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)

module.exports = typography
```

gatsby-config.js（必须在你的项目的根目录下，而不是在src下）

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

添加上面的文件，然后运行gatsby develop，你应该看到以下内容：

![start](start.png)

我们有另一个布局和两个页面简单的网站。

Now let's start querying 

在构建站点时，通常要重复使用站点中常见的数据位。 像网站标题例如。 看看/about/页面。 您会注意到我们在布局组件（站点标题）以及关于页面的标题中都有站点标题。 但是如果我们想在未来的某个时候改变网站的标题呢？ 我们必须使用网站标题搜索我们所有的组件。 这既麻烦又容易出错，尤其是在网站变得更大，更复杂的情况下。 将标题存储在一个地方，然后在需要的时候把这个标题放到组件中会更好。

为了解决这个问题，盖茨比支持添加网站“元数据”的简单模式，比如标题。

我们将这些数据添加到gatsby-config.js文件中。 让我们将我们的网站标题添加到gatsby-config.js，然后从我们的布局和关于页面查询它！

编辑你的gatsby-config.js：

```javascript{2-4}
module.exports = {
  siteMetadata: {
    title: `Blah Blah Fake Title`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

重新启动开发服务器。

然后编辑这两个组件：

`src/pages/about.js`

```jsx{3,5-7,14-23}
import React from "react"

export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

`src/layouts/index.js`

```jsx{10,19,28-33}
import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

好了！！！ 

![fake-title-graphql](fake-title-graphql.png)

But let's restore the real title.

Gatsby的核心原则之一是创造者需要立即联系他们正在创造的东西（帽子提示给布雷特·维克多）。 换句话说，当你对代码进行修改时，你应该立即看到这个改变的效果。 你操纵Gatsby的输入，你看到在屏幕上显示新的输出。

所以几乎在任何地方，你所做的改变都会立即生效。

尝试在siteMetadata中编辑标题 - 将标题改回“大熊猫吃很多”。 浏览器中的变化应该会很快显示出来。

## 介绍GraphiQL

GraphiQL是GraphQL IDE。 这是一个在构建Gatsby网站时经常使用的功能强大的（全能的）工具。

您可以在网站的开发服务器正常运行时访问它（通常位于http://localhost:8000/___ graphql）。

<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/graphiql-explore.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

在这里，我们围绕内置的Site“type”进行探究，看看有哪些可用的字段，包括我们之前查询过的siteMetadata对象。 尝试打开GraphiQL并显示你的数据！ 按Ctrl +空格键弹出自动填充窗口，按Ctrl + Enter键运行查询。 本教程的其余部分将更多地使用GraphiQL。

## 源插件

Gatsby网站的数据可以来自任何地方：API，数据库，CMS，本地文件等。

源插件从他们的源获取数据。 例如。 文件系统源插件知道如何从文件系统中获取数据。 Wordpress插件知道如何从Wordpress API获取数据。

让我们添加gatsby-source-filesystem并探索它是如何工作的。

首先安装插件：

```sh
npm install --save gatsby-source-filesystem
```

然后把它添加到你的gatsby-config.js中：

```javascript{6-12}
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

保存并重新启动gatsby开发服务器。 然后再次打开GraphiQL。

如果你弹出自动填充窗口，你会看到：

![graphiql-filesystem](graphiql-filesystem.png)

在allFile上输入Enter，然后按Ctrl + Enter运行查询。

![filesystem-query](filesystem-query.png)

从查询中删除标识并重新启动自动完成（Ctrl +空格键）。

![filesystem-autocomplete](filesystem-autocomplete.png)

尝试添加一些字段到您的查询，每次按Ctrl + Enter重新运行查询。 你会看到这样的东西：

![allfile-query](allfile-query.png)

The result is an array of File "nodes" (node is a fancy name for an object in a "graph"). Each File object has the fields we queried for.

## Build a page with a GraphQL query

Building new pages with Gatsby often starts in Graph*i*QL. You first sketch out the data query by playing in Graph*i*QL then copy this to a React page component to start building the UI.

Let's try this.

Create a new file at `src/pages/my-files.js` with the `allFile` query we just created.

```jsx{4}
import React from "react"

export default ({ data }) => {
  console.log(data)
  return <div>Hello world</div>
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```

The `console.log(data)` line is highlighted above. It's often helpful when creating a new component to console out the data you're getting from the query so you can explore the data in your browser console while building the UI.

If you visit the new page at `/my-files/` and open up your browser console you will see:

![data-in-console](data-in-console.png)

The shape of the data matches the shape of the query.

Let's add some code to our component to print out the File data.

```jsx{5-37}
import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```

And… 

![my-files-page](my-files-page.png)

## Transformer plugins

Often, the format of the data we get from source plugins isn't what you want to use to build your website. The filesystem source plugin lets you query data *about* files but what if you want to query data *inside* files?

To make this possible, Gatsby supports transformer plugins which take raw content from source plugins and *transform* it into something more usable.

For example, markdown files. Markdown is nice to write in but when you build a page with it, you need the markdown to be HTML.

Let's add a markdown file to our site at `src/pages/sweet-pandas-eating-sweets.md` (This will become our first markdown blog post) and learn how to *transform* it to HTML using transformer plugins and GraphQL.

```markdown
---
title: "Sweet Pandas Eating Sweets"
date: "2017-08-10"
---

Pandas are really sweet.

Here's a video of a panda eating sweets.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>
```

Once you save the file, look at `/my-files/` again—the new markdown file is in the table. This is a very powerful feature of Gatsby. Like the earlier `siteMetadata` example, source plugins can live reload data. `gatsby-source-filesystem` is always scanning for new files to be added and when they are, re-runs your queries.

Let's add a transformer plugin that can transform markdown files.

```shell
npm install --save gatsby-transformer-remark
```

Then add it to the `gatsby-config.js` like normal.

```javascript{13}
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

Restart the development server then refresh (or open again) Graph*i*QL and look at the autocomplete:

![markdown-autocomplete](markdown-autocomplete.png)

Select `allMarkdownRemark` again and run it like we did for `allFile`. You'll see there the markdown file we recently added. Explore the fields that are available on the `MarkdownRemark` node.

![markdown-query](markdown-query.png)

Ok! Hopefully some basics are starting to fall into place. Source plugins bring data *into* Gatsby's data system and *transformer* plugins transform raw content brought by source plugins. This simple pattern can handle all data sourcing and data transformation you might need when building a Gatsby site.

## Create a list of our site's markdown files in `src/pages/index.js`

Let's now create a list of our markdown files on the front page. Like many blogs, we want to end up with a list of links on the front page pointing to each blog post. With GraphQL we can *query* for the current list of markdown blog posts so we won't need to maintain the list manually.

Like with the `src/pages/my-files.js` page, replace `src/pages/index.js` with the following to add a query with some initial HTML and styling.

```jsx
import React from "react"
import g from "glamorous"

import { rhythm } from "../utils/typography"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </g.H1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>
            {node.excerpt}
          </p>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
```

Now the frontpage should look like:

![frontpage](frontpage.png)

But our one blog post looks a bit lonely. So let's add another one at `src/pages/pandas-and-bananas.md`

```markdown
---
title: Pandas and Bananas
date: "2017-08-21"
---

Do Pandas eat bananas? Check out this short video that shows that yes! pandas do seem to really enjoy bananas!

<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>
```

![two-posts](two-posts.png)

Which looks great! Except…the order of the posts is wrong.

But this is easy to fix. When querying a connection of some type, you can pass a variety of arguments to the query. You can `sort` and `filter` nodes, set how many nodes to `skip`, and choose the `limit` of how many nodes to retrieve. With this powerful set of operators, we can select any data we want—in the format we need.

In our index page's query, change `allMarkdownRemark` to `allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC})`. Save this and the sort order should be fixed.

Try opening Graph*i*QL and playing with different sort options. You can sort the `allFile` connection along with other connections.

## Programmatically creating pages from data

So this is great! We have a nice index page where we're querying our markdown files. But we don't want to just see excerpts, we want actual pages for our markdown files.

Let's get started.

So far, we've created pages by placing React components in `src/pages`. We'll now learn how to *programmatically* create pages from *data*. Gatsby is *not* limited to making pages from files like many static site generators. Gatsby lets you use GraphQL to query your *data* and *map* the data to *pages*—all at build time. This is a really powerful idea. We'll be exploring its implications and ways to use it for the remainder of the tutorial.

Creating new pages has two steps, 1) generate the "path" or "slug" for the page and 2) create the page.

To create our markdown pages, we'll learn to use two Gatsby APIs [`onCreateNode`](/docs/node-apis/#onCreateNode) and [`createPages`](/docs/node-apis/#createPages). These are two workhorse APIs you'll see used in many sites and plugins.

APIs are simple to implement. To implement an API, you simply export a function with the name of the API from `gatsby-node.js`.

So let's do that. In the root of your site, create a file named `gatsby-node.js`. Then add to it the following. This function will be called by Gatsby whenever a new node is created (or updated).

```javascript
exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}
```

Stop and restart the development server. As you do, you'll see quite a few newly created nodes get logged to the terminal console.

Let's use this API to add the slugs for our markdown pages to `MarkdownRemark` nodes.

Change our function so it now is only looking at `MarkdownRemark` nodes.

```javascript{2-4}
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
}
```

We want to use each markdown file name to create the page slug. So `pandas-and-bananas.md"` will become `/pandas-and-bananas/`. But how do we get the file name from the `MarkdownRemark` node? To get it, we need to *traverse* the "node graph" to its *parent* `File` node, as `File` nodes contain data we need about files on disk. To do that, modify our function again:

```javascript{1,3-4}
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
```

There in your terminal you should see the relative paths for our two markdown files.

![markdown-relative-path](markdown-relative-path.png)

Now let's create slugs. As the logic for creating slugs from file names can get tricky, the `gatsby-source-filesystem` plugin ships with a function for creating slugs. Let's use that.

```javascript{1,5}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
```

The function handles finding the parent `File` node along with creating the slug. Run the development server again and you should see logged to the terminal two slugs, one for each markdown file.

Now lets add our new slugs directly onto the `MarkdownRemark` nodes. This is powerful, as any data we add to nodes is available to query later with GraphQL. So it'll be easy to get the slug when it comes time to create the pages.

To do so, we'll use a function passed to our API implementation called [`createNodeField`](/docs/bound-action-creators/#createNodeField). This function allows us to create additional fields on nodes created by other plugins. Only the original creator of a node can directly modify the node—all other plugins (including our `gatsby-node.js`) must use this function to create additional fields.

```javascript{3,4,6-11}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

Restart the development server and open or refresh Graph*i*QL. Then run this query to see our new slugs.

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
```

Now that the slugs are created, we can create the pages.

In the same `gatsby-node.js` file, add the following. Here we tell Gatsby about our pages—what are their paths, what template component do they use, etc.

```javascript{15-35}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(JSON.stringify(result, null, 4))
      resolve()
    })
  })
}
```

We've added an implementation of the [`createPages`](/docs/node-apis/#createPages) API which Gatsby calls to add pages. We're using the passed in `graphql` function to query for the markdown slugs we just created. Then we're logging out the result of the query which should look like:

![query-markdown-slugs](query-markdown-slugs.png)

We need one other thing to create pages: a page template component. Like everything in Gatsby, programmatic pages are powered by React components. When creating a page, we need to specify which component to use.

Create a directory at `src/templates` and then add the following in a file named `src/templates/blog-post.js`.

```jsx
import React from "react"

export default () => {
  return <div>Hello blog post</div>
}
```

Then update `gatsby-node.js`

```javascript{1,32-41}
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
```

Restart the development server and our pages will be created! An easy way to find new pages you create while developing is to go to a random path where Gatsby will helpfully show you a list of pages on the site. If you go to <http://localhost:8000/sdf> you'll see the new pages we created.

![new-pages](new-pages.png)

Visit one of them and we see:

![hello-world-blog-post](hello-world-blog-post.png)

Which is a bit boring. Let's pull in data from our markdown post. Change `src/templates/blog-post.js` to:

```jsx
import React from "react"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
```

And…

![blog-post](blog-post.png)

Sweet!

The last step is to link to our new pages from the index page.

Return to `src/pages/index.js` and let's query for our markdown slugs and create links.

```jsx{3,18-19,29,46-48}
import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </g.H1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
```

And there we go! A working (albeit quite simple still) blog!

Try playing more with the site. Try adding some more markdown files. Explore querying other data from the `MarkdownRemark` nodes and adding them to the frontpage or blog posts pages.

In this part of the tutorial, we've learned the foundations of building with Gatsby's data layer. You've learned how to *source* and *transform* data using plugins. How to use GraphQL to *map* data to pages. Then how to build *page template components* where you query for data for each page.