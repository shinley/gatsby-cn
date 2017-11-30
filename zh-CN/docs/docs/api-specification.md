---
title: API规范
---
Gatsby's APIs are tailored conceptually to some extent after React.js to improve the coherence between the two systems.

API的两个最重要的优先事项是a）实现广泛和强大的插件生态系统，b）基于广泛而强大的主题生态系统之上（主题在v1后出现）。

## 插件

插件可以用很多方式扩展Gatsby：

* 数据源（例如来自文件系统或API或数据库）
* 将数据从一种类型转换为另一种类型（例如将Markdown文件转换为HTML）
* 创建页面（例如，一个markdown文件的目录都会被转换成页面，而URL是从它们的文件名派生的）。
* 修改webpack配置（例如，样式选项，添加对其他编译为js语言的支持）
* 将东西添加到渲染的HTML（例如元标记，Google Analytics等分析JS 片断）
* 写出基于站点数据构建目录的东西（例如服务工作者，站点地图，RSS提要）

一个插件可以使用多个API来实现其目的。 例如。 css-in-js库[Glamor](/packages/gatsby-plugin-glamor/)插件

1. 修改webpack配置添加它的插件
2. 添加一个Babel插件来替换React的默认createElement
3. 修改服务器渲染，为每个呈现的页面提取出关键的CSS，并将HTML内联到HTML页面的<head>
      中。</li> </ol> 
      
      <p>
        Plugins can also depend on other plugins. <a href="/packages/gatsby-plugin-sharp/">The Sharp plugin</a> exposes a number of high-level APIs for transforming images that several other Gatsby image plugins depend on. <a href="/packages/gatsby-transformer-remark/">gatsby-transformer-remark</a> does basic markdown->html transformation but exposes an API to allow other plugins to intervene in the conversion process e.g. <a href="/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</a> which adds highlighting to code blocks.
      </p>
      
      <p>
        Transformer plugins are decoupled from source plugins. Transformer plugins simply look at the media type of new nodes created by source plugins to decide if they can transform it or not. Which means that a markdown transformer plugin can easily transform markdown from any source without any other configuration e.g. from file, a code comment, or external service like Trello which supports markdown in some of its data fields.
      </p>
      
      <p>
        See <a href="/docs/plugins/">the full list of (official only for now — adding support for community plugins later) plugins</a>.
      </p>
      
      <h1>
        API
      </h1>
      
      <h2>
        Concepts
      </h2>
      
      <ul>
        <li>
          <em>Page</em> — a site page with a pathname, a template component, and optional graphql query and layout component
        </li>
        <li>
          <em>Page Component</em> — React.js component that renders a page and can optionally specify a layout component and a graphql query
        </li>
        <li>
          <em>Component extensions</em> — extensions that are resolvable as components. <code>.js</code> and <code>.jsx</code> are supported by core. But plugins can add support for other compile-to-js languages.
        </li>
        <li>
          <em>Dependency</em> — Gatsby tracks automatically dependencies between different objects e.g. a page can depend on certain nodes. This allows for hot reloading, caching, incremental rebuilds, etc.
        </li>
        <li>
          <em>Node</em> — a data object
        </li>
        <li>
          <em>Node Field</em> — a field added by a plugin to a node that it doesn't control
        </li>
        <li>
          <em>Node Link</em> — a connection between nodes that gets converted to GraphQL relationships. Can be created in a variety of ways as well as automatically inferred. Parent/child links from nodes and their transformed derivative nodes are first class links.
        </li>
      </ul>
      
      <h2>
        Operators
      </h2>
      
      <ul>
        <li>
          <em>Create</em> — make a new thing
        </li>
        <li>
          <em>Get</em> — get an existing thing
        </li>
        <li>
          <em>Delete</em> — remove an existing thing
        </li>
        <li>
          <em>Replace</em> — replace an existing thing
        </li>
        <li>
          <em>Set</em> — merge into an existing thing
        </li>
      </ul>
      
      <h2>
        Extension APIs
      </h2>
      
      <p>
        Gatsby has multiple processes. The most prominent is the "bootstrap" process. It has several subprocesses. One tricky part to their design is that they run both once during the initial bootstrap but also stay alive during development to continue to respond to changes. This is what drives hot reloading that all Gatsby data is "alive" and reacts to changes in the environment.
      </p>
      
      <p>
        The bootstrap process is as follows:
      </p>
      
      <p>
        load site config -> load plugins -> source nodes -> transform nodes -> create graphql schema -> create pages -> compile component queries -> run queries -> fin
      </p>
      
      <p>
        Once the initial bootstrap is finished, for the development server we start <code>webpack-dev-server</code> and a simple express server for serving files and for a production build, we start building the CSS then JavaScript then HTML with webpack.
      </p>
      
      <p>
        During these processes there are various extension points where plugins can intervene. All major processes have a <code>onPre</code> and <code>onPost</code> e.g. <code>onPreBootstrap</code> and <code>onPostBootstrap</code> or <code>onPreBuild</code> or <code>onPostBuild</code>. During bootstrap, plugins can respond at various stages to APIs like <code>onCreatePages</code>, <code>onCreateBabelConfig</code>, and <code>onSourceNodes</code>.
      </p>
      
      <p>
        At each extension point, Gatsby identifies the plugins which implement the API and calls them in serial following their order in the site's <code>gatsby-config.js</code>.
      </p>
      
      <p>
        In addition to extension APIs in node, plugins can also implement extension APIs in the server rendering process and the browser e.g. <code>onClientEntry</code> or <code>onRouteUpdate</code>
      </p>
      
      <p>
        The three main inspirations for this API and spec are React.js' API specifically <a href="https://gist.github.com/vjeux/f2b015d230cc1ab18ed1df30550495ed">@leebyron's email on the React API</a>, this talk <a href="https://www.youtube.com/watch?v=heh4OeB9A-c&app=desktop">"How to Design a Good API and Why it Matters" by Joshua Bloch</a> who designed many parts of Java, and <a href="https://hapijs.com/api">Hapi.js</a>' plugin design.
      </p>