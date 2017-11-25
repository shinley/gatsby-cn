---
title: Gatsby.js Tutorial Part Four
typora-copy-images-to: './'
---
欢迎来到教程的第四部分！ 中途！ 希望事情开始感觉很舒服 

但不要太舒服在本教程中， 我们正在走向新的领域，需要一些大脑的充分理解。 在接下来的两部分教程中，我们将深入到Gatsby数据层！ Gatsby的一个强大功能，可让您轻松地从Markdown，Wordpress，无头CMS和其他所有类型的数据源构建网站。

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

现在让我们开始查询 

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

但是，让我们恢复真实的标题。

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

他的结果是一个文件“节点”的数组（节点是“图”中的对象的花式名称）。 每个File对象都有我们查询的字段。

## 使用GraphQL查询构建一个页面

用Gatsby构建新页面通常从GraphiQL开始。 您首先通过在GraphiQL中播放查看数据查询，然后将其复制到React页面组件以开始构建UI。

我们来试试这个。

使用我们刚创建的allFile查询在src/pages/my-files.js创建一个新文件。

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

Console.log（数据）行在上面突出显示。 创建一个新组件来控制从查询中获取的数据通常会很有帮助，这样您就可以在构建UI时浏览浏览器控制台中的数据。

如果您访问/ my-files /中的新页面并打开浏览器控制台，您将看到：

![data-in-console](data-in-console.png)

数据的形状与查询的形状相匹配。

让我们添加一些代码到我们的组件打印出文件数据。

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

然后... 

![my-files-page](my-files-page.png)

## Transformer 插件

通常，我们从源码插件获得的数据格式并不是您想要用来构建您的网站的格式。 文件系统源插件可以让你查询有关文件的数据，但是如果你想查询文件中的数据呢？

为了做到这一点，Gatsby支持从源插件获取原始内容的变压器插件，并将其转换为更加实用的东西。

例如，Markdown文件。 Markdown很好写，但是当你用它建立一个页面时，你需要把markdown变成HTML。

让我们在src/ pages/sweet-pandas-eating-sweets.md（这将成为我们的第一个markdown博客文章）中添加一个降价文件到我们的网站，并学习如何使用transformer 插件和GraphQL将其转换为HTML。

```markdown
---
title: "Sweet Pandas Eating Sweets"
date: "2017-08-10"
---

Pandas are really sweet.

这是熊猫吃甜食的视频。

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>
```

一旦保存了文件，再次查看/my-files/新的Markdown文件在表格中。 这是Gatsby非常强大的特点。 像之前的siteMetadata示例一样，源插件可以重新加载数据。 gatsby-source-filesystem总是扫描新文件，并在它们出现时重新运行查询。

让我们添加一个可以转换Markdown文件的transformer(转换器) 插件。

```shell
npm install --save gatsby-transformer-remark
```

然后像正常一样将它添加到gatsby-config.js中。

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

重新启动开发服务器，然后刷新（或再次打开）GraphiQL并查看自动完成：

![markdown-autocomplete](markdown-autocomplete.png)

再次选择allMarkdownRemark并像我们为allFile一样运行它。 你会看到我们最近添加的Markdown文件。 浏览MarkdownRemark节点上可用的字段。

![markdown-query](markdown-query.png)

好了， 希望一些基础知识开始落实到位。 源代码插件将数据带入到Gatsby的数据系统中，变压器插件转换源插件带来的原始内容。 这个简单的模式可以处理您在构建Gatsby网站时可能需要的所有数据采购和数据转换。

## 在src/pages/index.js中创建我们网站的Markdown文件列表

现在让我们在头版上创建一个我们的Markdown文件列表。 像许多博客一样，我们希望最终在首页上指向每篇博文的链接列表。 使用GraphQL，我们可以查询当前的降价博客文章列表，所以我们不需要手动维护列表。

与src/pages/my-files.js页面一样，将src/pages/index.js替换为以下内容以添加具有一些初始HTML和样式的查询。

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

现在，首页应该是这样的：

![frontpage](frontpage.png)

但是我们的一篇博文看起来有点孤单。 所以让我们在src/pages/pandas-and-bananas.md上再添加一个

```markdown
---
title: Pandas and Bananas
date: "2017-08-21"
---

Do Pandas eat bananas? Check out this short video that shows that yes! pandas do seem to really enjoy bananas!

<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>
```

![two-posts](two-posts.png)

这看起来不错！ 除了... 帖子的顺序是错的。

但这很容易解决。 查询某种类型的连接时，可以将各种参数传递给查询。 您可以对节点进行排序和过滤，设置要跳过的节点数量，并选择要检索的节点数量限制。 有了这套功能强大的运算符，我们可以根据需要的格式选择我们想要的任何数据。

在我们的索引页的查询中，将allMarkdownRemark改为allMarkdownRemark（sort：{fields：[frontmatter___date]，order：DESC}）。 保存这个，排序顺序应该是固定的。

尝试打开GraphiQL并使用不同的排序选项。 您可以将allFile连接与其他连接一起排序。

## 以编程方式从数据创建页面

所以这太棒了！ 我们有一个很好的索引页，我们正在查询我们的降价文件。 但我们不想看到摘录，我们希望我们的降价文件的实际页面。

让我们开始吧。

到目前为止，我们已经通过在src/pages中放置React组件来创建页面。 现在我们将学习如何以编程方式从数据创建页面。 Gatsby并不局限于像许多静态站点生成器一样从文件中创建页面。 Gatsby允许您使用GraphQL来查询数据并将数据映射到页面 - 所有这些都是在构建时完成的。 这是一个非常强大的想法。 我们将在本教程的其余部分探讨其含义和使用方法。

创建新页面有两个步骤，1）为页面生成“路径”或“段落”，2）创建页面。

要创建我们的Markdown页面，我们将学习使用两个Gatsby API onCreateNode和createPages。 这些是您将会看到在许多网站和插件中使用的两个主力API。

API很容易实现。 要实现一个API，只需从gatsby-node.js中导出一个带有API名称的函数。

所以让我们来做。 在您的网站的根目录中，创建一个名为gatsby-node.js的文件。 然后添加以下内容。 无论何时创建（或更新）新节点，此功能都将由盖茨比（Gatsby）调用。

```javascript
exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}
```

停止并重新启动开发服务器。 和你一样，你会看到不少新创建的节点被记录到终端控制台。

让我们使用这个API来为MarkdownRemark节点添加我们的Markdown页面的slugs.

改变我们的功能，所以现在只查看MarkdownRemark节点。

```javascript{2-4}
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
}
```

我们要使用每个Markdown文件名来创建页面slug。 所以pandas-and-bananas.md“将成为/pandas-and-bananas /。 但是，我们如何从MarkdownRemark节点获取文件名？ 为了做到这一点，我们需要遍历“节点图”到它的父节点，因为文件节点包含我们需要的有关磁盘上文件的数据。 要做到这一点，请再次修改我们的功能：

```javascript{1,3-4}
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
```

在你的终端你应该可以看到我们两个markdown文件的相对路径。

![markdown-relative-path](markdown-relative-path.png)

现在让我们创建slugs。 由于从文件名创建slug的逻辑可能会变得棘手，gatsby-source-filesystem插件附带一个创建slug的函数。 让我们使用它。

```javascript{1,5}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
```

该函数处理查找父文件节点以及创建slugs。 再次运行开发服务器，你应该看到登录到终端两个slug，每个Markdown文件一个。

现在让我们直接在MarkdownRemark节点上添加新的slug。 这是非常强大的，因为我们添加到节点的任何数据都可以在稍后用GraphQL查询。 所以当创建页面时，很容易得到slugs。

为此，我们将使用传递给我们的API实现的函数createNodeField。 这个函数允许我们在其他插件创建的节点上创建额外的字段。 只有节点的原始创建者才能直接修改节点 - 所有其他插件（包括我们的gatsby-node.js）都必须使用此功能来创建附加字段。

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

重新启动开发服务器并打开或刷新GraphiQL。 然后运行这个查询来看看我们的新slugs>。

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

现在创建了slugs，我们可以创建页面。

在相同的gatsby-node.js文件中，添加以下内容。 在这里，我们告诉Gatsby关于我们的页面 - 他们的路径是什么，他们使用什么模板组件等等。

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

我们添加了一个Gatsby调用来添加页面的createPages API的实现。 我们使用传入的graphql函数来查询我们刚刚创建的markdown slug。 然后我们注销查询的结果应该是这样的：

![query-markdown-slugs](query-markdown-slugs.png)

我们还需要另外一件事来创建页面：一个页面模板组件。 像Gatsby中的所有内容一样，编程页面由React组件支持。 创建页面时，我们需要指定使用哪个组件。

在src/templates创建一个目录，然后在一个名为src/templates/blog-post.js的文件中添加以下内容。

```jsx
import React from "react"

export default () => {
  return <div>Hello blog post</div>
}
```

然后更新gatsby-node.js

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

重新启动开发服务器，我们的页面将被创建！ 在开发过程中找到新的页面的一个简单的方法是去一个随机的路径，在那里Gatsby会帮助你在网站上显示一个页面列表。 如果你转到http://localhost:8000/sdf，你会看到我们创建的新页面。

![new-pages](new-pages.png)

访问其中一个，我们看到：

![hello-world-blog-post](hello-world-blog-post.png)

这有点无聊。 让我们从我们的Markdown帖子中提取数据。 将src/templates/blog-post.js更改为：

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

然后...

![blog-post](blog-post.png)

好极了

最后一步是从索引页面链接到我们的新页面。

返回到src/pages/index.js，让我们查询我们的markdown slugs并创建链接。

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

好了！ 一个正常工作（尽管很简单）博客！

尝试玩更多的网站。 尝试添加更多的Markdown文件。 浏览从MarkdownRemark节点查询其他数据并将其添加到首页或博客文章页面。

在本教程的这一部分，我们学习了使用Gatsby数据层构建基础。 你已经学会了如何使用插件来获取和转换数据。 如何使用GraphQL将数据映射到页面。 然后，如何构建页面模板组件，以查询每个页面的数据