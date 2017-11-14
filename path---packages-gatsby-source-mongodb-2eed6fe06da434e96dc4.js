webpackJsonp([0x92fe22aa3c08],{696:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-source-mongodb"><a href="#gatsby-source-mongodb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-source-mongodb</h1>\n<p>Source plugin for pulling data into Gatsby from MongoDB collections.</p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">/*\n     * Gatsby&apos;s data processing layer begins with &#x201C;source&#x201D; plugins. Here we\n     * setup the site to pull data from the &quot;documents&quot; collection in a local\n     * MongoDB instance\n     */</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-mongodb`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span> dbName<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`local`</span></span><span class="token punctuation">,</span> collection<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`documents`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="multiple-collections"><a href="#multiple-collections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>multiple collections</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-mongodb`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span> dbName<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`local`</span></span><span class="token punctuation">,</span> collection<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`documents`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`vehicles`</span></span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="plugin-options"><a href="#plugin-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugin options</h2>\n<ul>\n<li><strong>dbName</strong>: indicates the database name that you want to use</li>\n<li><strong>collection</strong>: the collection name within Mongodb, this can also be an array for multiple collections</li>\n<li><strong>server</strong>: contains the server info, with sub properties address and port\nex. server: { address: <code>ds143532.mlab.com</code>, port: 43532 }. Defaults to a server running locally on the default port.</li>\n<li><strong>auth</strong>: the authentication data to login a Mongodb collection, with sub properties user and password.\nex. auth: { user: <code>admin</code>, password: <code>12345</code> } </li>\n</ul>\n<h3 id="mapping-mediatype-feature"><a href="#mapping-mediatype-feature" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mapping mediatype feature</h3>\n<p>Gatsby supports transformer plugins that know how to transform one data type to another e.g. markdown to html. In the plugin options you can setup\n“mappings” for fields in your collections. You can tell Gatsby that a certain field is a given media type and with the correct transformer plugins installed, your data will be transformed automatically.</p>\n<p>Let’s say we have a markdown field named <code>body</code> in our mongoDB collection <code>documents</code>. We want to author our content in markdown but want to transform the markdown to HTML for including in our React components.</p>\n<p>To do this, we modify the plugin configuration in <code>gatsby-config.js</code> like follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-mongodb`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        dbName<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`local`</span></span><span class="token punctuation">,</span>\n        collection<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`documents`</span></span>\n<span class="gatsby-highlight-code-line">        map<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token punctuation">{</span>documents<span class="token punctuation">:</span> <span class="token punctuation">{</span>body<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`text/markdown`</span></span><span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span>      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The GraphQL query to get the transformed markdown would look something like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token keyword">query</span> ItemQuery<span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    mongodbCloudDocuments<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token attr-name">eq</span><span class="token punctuation">:</span> <span class="token variable">$id</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      id\n      name\n      url\n      body <span class="token punctuation">{</span>\n          childMarkdownRemark <span class="token punctuation">{</span>\n              id\n              html\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="how-to-query-your-mongodb-data-using-graphql"><a href="#how-to-query-your-mongodb-data-using-graphql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to query your MongoDB data using GraphQL</h2>\n<p>Below is a sample query for fetching all MongoDB document nodes from a db named <strong>‘Cloud’</strong> and a collection named <strong>‘documents’</strong>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token keyword">query</span> PageQuery <span class="token punctuation">{</span>\n    allMongodbCloudDocuments <span class="token punctuation">{</span>\n      edges <span class="token punctuation">{</span>\n        node <span class="token punctuation">{</span>\n           id\n           url\n           name\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-source-mongodb Source plugin for pulling data into Gatsby from MongoDB collections. How to use multiple collections Plugin options…",timeToRead:2,fields:{title:"gatsby-source-mongodb"},parent:{__typename:"File",relativePath:"gatsby-source-mongodb/README.md"}}},pathContext:{slug:"/packages/gatsby-source-mongodb/"}}}});
//# sourceMappingURL=path---packages-gatsby-source-mongodb-2eed6fe06da434e96dc4.js.map