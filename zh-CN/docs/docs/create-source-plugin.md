---
title: "Create a Source Plugin"
---

There are two types of plugins that work within Gatsby's data system, "source" and "transformer" plugins.

* **Source** plugins "source" data from remote or local locations into what Gatsby calls [nodes](/docs/node-interface/).
* **Transformer** plugins "transform" data provided by source plugins into new nodes and/or node fields.

例如:

The [`gatsby-source-filesystem`](/packages/gatsby-source-filesystem/) plugin "sources" data about files from the file system. It creates nodes with a type `File`, each File node corresponding to a file on the filesystem. On each node are fields like the `absolutePath`, `extension`, `modifiedTime`, etc.

重要的是，由文件系统源插件创建的每个节点都包括文件的原始内容和媒体类型。

[A **media type**](https://en.wikipedia.org/wiki/Media_type) (also **MIME type** and **content type**) are an official way to identify the format of files/content that is transmitted on the internet e.g. over HTTP or through email. You're probably familiar with many media types such as `application/javascript`, `application/pdf`, `audio/mpeg`, `text/html`, `text/plain`, `image/jpeg`, etc.

每个source插件负责为它们创建的节点设置媒体类型。 这样，源代码和transformer(转换) 插件可以轻松地一起工作。

这不是必需的字段，但它是source 插件向transformers 指示存在仍然可以进一步处理的“raw”数据的方式。 它允许插件保持小而专注。 Source 插件不必对如何转换他们的数据有意见。 他们可以设置mediaType并将这个责任推到transformer 插件上。

For example, it's quite common for services to allow you to add content as markdown. If you pull that markdown into Gatsby and create a new node, what then? How would a user of your source plugin convert that markdown into HTML they can use in their site? 幸运的是，你不必做任何事情。 Just create a node for the markdown content and set its mediaType as `text/markdown` and the various Gatsby markdown transformer plugins will see your node and transform it into HTML.

This loose coupling between data source and transformer plugins allow Gatsby site builders to quickly assemble complex data transformation pipelines with little work on their (and your (the source plugin author)) part.

代码是什么样的？

Source 插件是一个普通的NPM软件包。 它有一个可选的依赖关系的package.json，以及一个实现Gatsby的Node.js API的gatsby-node.js。 Gatsby supports node versions back to Node 4 and as it's common to want to use more modern node.js and JavaScript syntax, many plugins write code in a `src` directory and compile the code. All plugins maintained in the Gatsby repo follow this pattern.

你的gatsby-node.js应该是这样的：

```javascript
exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(REMOTE_API);

  // Process data into nodes.
  data.forEach(datum => createNode(processDatum(datum)));

  // We're done, return.
  return;
};
```

Peruse the [`sourceNodes`](/docs/node-apis/#sourceNodes) and [`createNode`](/docs/bound-action-creators/#createNode) docs for detailed documentation on implementing those APIs.

但是在高层次上，这些是source 插件的工作：

* 确保本地数据与源代码同步并且100％准确。 If your source allows you to add an `updatedSince` query (or something similar) you can store the last time you fetched data using [`setPluginStatus`](/docs/bound-action-creators/#setPluginStatus).
* Create nodes with accurate media types, human meaningful types, and accurate contentDigests.
* "Link" nodes types you create as appropriate (see [*Node Link*](/docs/api-specification/) in the API specification concepts section.
* Return either a promise or use the callback (3rd parameter) to report back to Gatsby when you're done sourcing nodes. Otherwise either Gatsby will continue on before you're done sourcing or hang while waiting for you to indicate you're finished.

[`gatsby-node-helpers`](https://github.com/angeloashmore/gatsby-node-helpers), a community-made NPM package, can help when writing source plugins. This package provides a set of helper functions to generate Node objects with the required fields. This includes automatically generating fields like node IDs and the `contentDigest` MD5 hash, keeping your code focused on data gathering, not boilerplate.