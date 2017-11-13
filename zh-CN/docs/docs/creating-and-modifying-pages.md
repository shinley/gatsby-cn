---
title: Creating and modifying pages
---
Gatsby makes it easy to programmatically control your pages.

Pages can be created in three ways:

* In your site's gatsby-node.js by implementing the API [`createPages`](/docs/node-apis/#createPages)
* Gatsby core automatically turns React components in `src/pages` into pages
* Plugins can also implement `createPages` and create pages for you

You can also implement the API [`onCreatePage`](/docs/node-apis/#onCreatePage) to modify pages created in core or plugins or to create client-only pages.

## Debugging help

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

You can also query for any `context` data you or plugins added to pages.

## Creating pages in gatsby-node.js

Often you will need to programmatically create pages. For example, you have markdown files where each should be a page.

This example assumes that each markdown page has a "path" set in the frontmatter of the markdown file.

```javascript
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
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

## Modifying pages created by core or plugins

Gatsby core and plugins can automatically create pages for you. Sometimes the default isn't quite what you want and you need to modify the created page objects.

### Removing trailing slashes

A common reason for needing to modify automatically created pages is to remove trailing slashes.

To do this, in your site's `gatsby-node.js` add code similar to the following:

```javascript
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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

### Creating client-only routes

If you're creating a "hybrid" Gatsby app with both statically rendered pages as well as client-only routes e.g. an app that combines marketing pages and your app that lives under `/app/*`, you want to add code to your `gatsby-node.js` like the following:

```javascript
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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

### Choosing the page layout

By default, all pages will use the layout found at `/layouts/index.js`.

You may wish to choose a custom layout for certain pages (such as removing header and footer for landing pages). You can choose the layout component when creating pages with the `createPage` action by adding a layout key to the page object or modify pages created elsewhere using the `onCreatePage` API. All components in the `/layouts/` directory are automatically available.

```javascript
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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