---
title: 创建一个Source插件
---
在Gatsby的数据系统中有两种类型的插件，“Source”和“transformer”插件。

* Source插件将来自远程或本地位置的“Source”数据转换为Gatsby调用的节点。
* Transformer插件将source插件提供的数据“transform”(转换) 为新的节点和/或节点字段。

例如:

Gatsby-source-filesystem插件从文件系统有关文件作为“sources”的数据。 它使用File类型创建节点，每个File节点对应于文件系统上的文件。 在每个节点上都有像absolutePath，extension，modifiedTime等的字段

重要的是，由文件系统源插件创建的每个节点都包括文件的原始内容和媒体类型。

媒体类型（也是MIME类型和内容类型）是识别在因特网上传输的文件/内容的格式的标准方式，例如 通过HTTP或通过电子邮件。 您可能熟悉诸如application/javascript，application/pdf，audio/mpeg，text/html，text/plain，image/jpeg等多种媒体类型。

Each source plugin is responsible for setting the media type for the nodes they create. This way, source and transformer plugins can work together easily.

This is not a required field but it's the way for source plugins to indicate to transformers that there is "raw" data that can still be further processed. It allows plugins to remain small and focused. Source plugins don't have to have opinions on how to transform their data. They can just set the `mediaType` and push that responsibility to transformer plugins.

For example, it's quite common for services to allow you to add content as markdown. If you pull that markdown into Gatsby and create a new node, what then? How would a user of your source plugin convert that markdown into HTML they can use in their site? Luckily you don't have to do anything. Just create a node for the markdown content and set its mediaType as `text/markdown` and the various Gatsby markdown transformer plugins will see your node and transform it into HTML.

This loose coupling between data source and transformer plugins allow Gatsby site builders to quickly assemble complex data transformation pipelines with little work on their (and your (the source plugin author)) part.

What does the code look like?

A source plugin is a normal NPM package. It has a package.json with optional dependencies as well as a `gatsby-node.js` where you implement Gatsby's Node.js APIs. Gatsby supports back node versions back to Node 4 and as it's common to want to use more modern node.js and JavaScript syntax, many plugins write code in a `src` directory and compile the code. All plugins maintained in the Gatsby repo follow this pattern.

Your `gatsby-node.js` should look something like:

```javascript
exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(REMOTE_API)

  // Process data into nodes.
  // data.forEach(datum => createNode(processDatum(datum)))

  // We're done, return.
  return
}
```

Puruse the [`sourceNodes`](/docs/node-apis/#sourceNodes) and [`createNode`](/docs/bound-action-creators/#createNode) docs for detailed documentation on implementing those APIs.

But at a high-level, these are the jobs of a source plugin:

* Ensure local data is synced with its source and 100% accurate. If your source allows you to add an `updatedSince` query (or something similar) you can store the last time you fetched data using [`setPluginStatus`](/docs/bound-action-creators/#setPluginStatus).
* Create nodes with accurate media types, human meaningful types, and accurate contentDigests.
* "Link" nodes types you create as appropriate (see [*Node Link*](/docs/api-specification/) in the API specification concepts section.
* Return either a promise or use the callback (3rd parameter) to report back to Gatsby when you're done sourcing nodes. Otherwise either Gatsby will continue on before you're done sourcing or hang while waiting for you to indicate you're finished.