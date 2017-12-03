---
title: 创建和修改页面
---
Gatsby可以很容易地以编程方式控制您的网页。

页面可以通过三种方式创建：

* 在你的网站的gatsby-node.js中通过实现API [createPages](/docs/node-apis/#createPages)
* Gatsby核心自动将src/pages中的React组件转换为页面
* 插件也可以实现createPages并为你创建页面

您也可以实现API onCreatePage来修改在核心或插件中创建的页面或创建仅客户端页面。

## 调试帮助

要查看代码或插件正在创建哪些页面，可以在GraphiQL中开发时查询页面信息。 将以下查询粘贴到您的站点的GraphiQL IDE中。 在HOST:PORT/___ graphql上运行站点开发服务器时，可以使用GraphiQL IDE。localhost:8000/___ graphql。

```graphql
{
  allSitePage {
    edges {
      node {
        path
        component
        pluginCreator {
          name
          pluginFilepath
        }
      }
    }
  }
}
```

您还可以查询上下文数据或插件添加到页面的数据。

## 在gatsby-node.js中创建页面

通常您需要以编程方式创建页面。 例如，你有markdown 文件，每个文件应该是一个页面。

此示例假定每个markdown 页面都有一个在markdown 文件的前端设置的“路径”。

```javascript
//实现Gatsby API 的“createPages”。 这被称为一次
//数据层被引导，让插件从数据中创建页面。
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            // If you have a layout component at src/layouts/blog-layout.js
            layout: `blog-layout`,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
            }
          })
        })
      })
    )
  })
}
```

## 修改由核心或插件创建的页面

Gatsby核心和插件可以自动为您创建页面。 有时默认不是你想要的，你需要修改创建的页面对象。

### 删除尾部的斜杠

需要修改自动创建的页面的一个常见原因是删除结尾的斜线。

要做到这一点，在您的网站的gatsby-node.js添加代码类似于以下内容：

```javascript
//实现Gatsby AP I“onCreatePage”。 这是
//在创建每个页面后调用。
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
    })

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page)
      // Add the new page
      createPage(newPage)
    }

    resolve()
  })

}
```

### 创建client-only （仅客户端）路由

如果你正在创建一个“hybrid”的Gatsby应用程序，包括静态渲染的页面以及客户端路线， 一个结合了营销页面和你的应用程序，在/app/*下的应用程序，你想添加代码到你的gatsby-node.js，如下所示：

```javascript
//实现Gatsby API“onCreatePage”。 这是
//在创建每个页面后调用。
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/:path"

    // Update the page.
    createPage(page)
  }
}
```

### 选择页面布局

默认情况下，所有页面将使用在/layouts/index.js中找到的布局。

您可能希望为某些页面选择自定义布局（例如删除登录页面的页眉和页脚）。 在使用createPage操作创建页面时，可以通过向页面对象添加布局键或使用onCreatePage API修改其他位置创建的页面来选择布局组件。 /layouts/目录中的所有组件都是自动可用的。

```javascript
//实现Gatsby API“onCreatePage”。 这是
//在创建每个页面后调用。
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/landing-page/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "landingPage"

      // Update the page.
      createPage(page)
    }

    resolve()
  })
}
```