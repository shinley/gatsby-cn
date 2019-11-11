---
title: "Creating and Modifying Pages"
---

Gatsby可以很容易地以编程方式控制您的网页。

页面可以通过三种方式创建：

* In your site's gatsby-node.js by implementing the API [`createPages`](/docs/node-apis/#createPages)
* Gatsby核心自动将src/pages中的React组件转换为页面
* 插件也可以实现createPages并为你创建页面

You can also implement the API [`onCreatePage`](/docs/node-apis/#onCreatePage) to modify pages created in core or plugins or to create [client-only routes](/docs/building-apps-with-gatsby/).

## 调试帮助

To see what pages are being created by your code or plugins, you can query for page information while developing in Graph*i*QL. Paste the following query in the Graph*i*QL IDE for your site. The Graph*i*QL IDE is available when running your sites development server at `HOST:PORT/___graphql` e.g. `localhost:8000/___graphql`.

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
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
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
          reject(result.errors);
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
            },
          });
        });
      })
    );
  });
};
```

## 修改由核心或插件创建的页面

Gatsby core and plugins can automatically create pages for you. Sometimes the default isn't quite what you want and you need to modify the created page objects.

### 删除尾部的斜杠

需要修改自动创建的页面的一个常见原因是删除结尾的斜线。

To do this, in your site's `gatsby-node.js` add code similar to the following:

*Note: There's also a plugin that will remove all trailing slashes from pages automatically: [gatsby-plugin-remove-trailing-slashes](/packages/gatsby-plugin-remove-trailing-slashes/)*.

```javascript
//实现Gatsby AP I“onCreatePage”。 这是
//在创建每个页面后调用。
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);
    // Remove trailing slash unless page is /
    page.path = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``));
    if (page.path !== oldPage.path) {
      // Replace new page with old page
      deletePage(oldPage);
      createPage(page);
    }
    resolve();
  });
};
```

### Choosing the page layout

默认情况下，所有页面将使用在/layouts/index.js中找到的布局。

You may wish to choose a custom layout for certain pages (such as removing header and footer for landing pages). You can choose the layout component when creating pages with the `createPage` action by adding a layout key to the page object or modify pages created elsewhere using the `onCreatePage` API. All components in the `/layouts/` directory are automatically available.

```javascript
//实现Gatsby API“onCreatePage”。 这是
//在创建每个页面后调用。
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/landing-page/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "landingPage";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};
```