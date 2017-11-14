webpackJsonp([0x86a154a4fcd6],{612:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Gatsby’s APIs are tailored conceptually to some extent after React.js to improve\nthe coherence between the two systems.</p>\n<p>The two top priorities of the API are a) enable a broad and robust plugin\necosystem and b) on top of that a broad and robust theme ecosystem (themes\nare on the back burner btw until after v1 comes out).</p>\n<h2 id="plugins"><a href="#plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugins</h2>\n<p>Plugins can extend Gatsby in many ways:</p>\n<ul>\n<li>Sourcing data (e.g. from the filesystem or an API or a database)</li>\n<li>Transforming data from one type to another (e.g. a markdown file to HTML)</li>\n<li>Creating pages (e.g. a directory of markdown files all gets turned into pages with URLs derived from their file names).</li>\n<li>Modifying webpack config (e.g. for styling options, adding support for other compile-to-js languages)</li>\n<li>Adding things to the rendered HTML (e.g. meta tags, analytics JS snippits like Google Analytics)</li>\n<li>Writing out things to build directory based on site data (e.g. service worker, sitemap, RSS feed)</li>\n</ul>\n<p>A single plugin can use multiple APIs to accomplish its purpose. E.g. the\nplugin for the css-in-js library <a href="/packages/gatsby-plugin-glamor/">Glamor\n</a></p>\n<ol>\n<li>modifies the webpack config to add its plugin</li>\n<li>adds a Babel plugin to replace React’s default createElement</li>\n<li>modifies server rendering to extract\nout the critical CSS for each rendered page and inline the CSS in the\n<code>&#x3C;head></code> of that HTML page.</li>\n</ol>\n<p>Plugins can also depend on other plugins.\n<a href="/packages/gatsby-plugin-sharp/">The Sharp plugin</a>\nexposes a number of high-level APIs for transforming images that several\nother Gatsby image plugins depend on.\n<a href="/packages/gatsby-transformer-remark/">gatsby-transformer-remark</a>\ndoes basic markdown->html transformation but exposes an API to allow other\nplugins to intervene in the conversion process e.g.\n<a href="/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</a>\nwhich adds highlighting to code blocks.</p>\n<p>Transformer plugins are decoupled from source plugins. Transformer plugins\nsimply look at the media type of new nodes created by source plugins to\ndecide if they can transform it or not. Which means that a markdown\ntransformer plugin can easily transform markdown from any source without any\nother configuration e.g. from file, a code comment, or external service like\nTrello which supports markdown in some of its data fields.</p>\n<p>See <a href="/docs/plugins/">the full list of (official only for now — adding support for community\nplugins later) plugins</a>. </p>\n<h1 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h1>\n<h2 id="concepts"><a href="#concepts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Concepts</h2>\n<ul>\n<li><em>Page</em> — a site page with a pathname, a template component, and optional graphql query and layout component</li>\n<li><em>Page Component</em> — React.js component that renders a page and can optionally specify a layout component and a graphql query</li>\n<li><em>Component extensions</em> — extensions that are resolvable as components. <code>.js</code> and <code>.jsx</code> are supported by core. But plugins can add support for other compile-to-js languages.</li>\n<li><em>Dependency</em> — Gatsby tracks automatically dependencies between different objects e.g. a page can depend on certain nodes. This allows for hot reloading, caching, incremental rebuilds, etc.</li>\n<li><em>Node</em> — a data object</li>\n<li><em>Node Field</em> — a field added by a plugin to a node that it doesn’t control</li>\n<li><em>Node Link</em> — a connection between nodes that gets converted to GraphQL relationships. Can be created in a variety of ways as well as automatically inferred. Parent/child links from nodes and their transformed derivative nodes are first class links.</li>\n</ul>\n<h2 id="operators"><a href="#operators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Operators</h2>\n<ul>\n<li><em>Create</em> — make a new thing</li>\n<li><em>Get</em> — get an existing thing</li>\n<li><em>Delete</em> — remove an existing thing</li>\n<li><em>Replace</em> — replace an existing thing</li>\n<li><em>Set</em> — merge into an existing thing</li>\n</ul>\n<h2 id="extension-apis"><a href="#extension-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extension APIs</h2>\n<p>Gatsby has multiple processes. The most prominent is the “bootstrap” process.\nIt has several subprocesses. One tricky part to their design is that they run\nboth once during the initial bootstrap but also stay alive during development\nto continue to respond to changes. This is what drives hot reloading that all\nGatsby data is “alive” and reacts to changes in the environment.</p>\n<p>The bootstrap process is as follows:</p>\n<p>load site config -> load plugins -> source nodes -> transform nodes -> create\ngraphql schema -> create pages -> compile component queries -> run queries ->\nfin</p>\n<p>Once the initial bootstrap is finished, for the development server we start\n<code>webpack-dev-server</code> and a simple express server for serving files and for a\nproduction build, we start building the CSS then JavaScript then HTML with\nwebpack.</p>\n<p>During these processes there are various extension points where plugins can\nintervene. All major processes have a <code>onPre</code> and <code>onPost</code> e.g.\n<code>onPreBootstrap</code> and <code>onPostBootstrap</code> or <code>onPreBuild</code> or <code>onPostBuild</code>.\nDuring bootstrap, plugins can respond at various stages to APIs like\n<code>onCreatePages</code>, <code>onCreateBabelConfig</code>, and <code>onSourceNodes</code>.</p>\n<p>At each extension point, Gatsby identifies the plugins which implement the\nAPI and calls them in serial following their order in the site’s\n<code>gatsby-config.js</code>.</p>\n<p>In addition to extension APIs in node, plugins can also implement extension\nAPIs in the server rendering process and the browser e.g. <code>onClientEntry</code> or\n<code>onRouteUpdate</code></p>\n<p>The three main inspirations for this API and spec are React.js’ API\nspecifically <a href="https://gist.github.com/vjeux/f2b015d230cc1ab18ed1df30550495ed">@leebyron’s email on the React API</a>, this talk\n<a href="https://www.youtube.com/watch?v=heh4OeB9A-c&#x26;app=desktop">“How to Design a Good API and Why it Matters” by Joshua Bloch</a> who designed\nmany parts of Java, and <a href="https://hapijs.com/api">Hapi.js</a>’ plugin design.</p>',excerpt:"Gatsby’s APIs are tailored conceptually to some extent after React.js to improve\nthe coherence between the two systems. The two top…",timeToRead:4,frontmatter:{title:"API specification"},parent:{__typename:"File",relativePath:"docs/api-specification.md"}}},pathContext:{slug:"/docs/api-specification/"}}}});
//# sourceMappingURL=path---docs-api-specification-c5f7378f1782f2383a53.js.map