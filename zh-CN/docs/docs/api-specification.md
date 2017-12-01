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
        插件也可以依赖于其他插件。 <a href="/packages/gatsby-plugin-sharp/">Sharp插件</a>公开了一些高级API来转换其他几张Gatsby插件所依赖的图像。 <a href="/packages/gatsby-transformer-remark/">gatsby-transformer-remark</a>做了基本的markdown-> html转换，但是暴露了一个API以允许其他插件干预转换过程，例如 <a href="/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</a>增加了代码块的高亮显示。
      </p>
      
      <p>
        Transformer 插件与源插件分离。 Transformer插件只需查看由插件创建的新节点的媒体类型，以决定是否可以转换它。 这意味着一个Markdown转换插件可以轻松地从任何来源转换Markdown，没有任何其他配置，例如 来自文件，代码注释或Trello等外部服务，它在某些数据字段中支持Markdown。
      </p>
      
      <p>
        查看<a href="/docs/plugins/">完整列表（目前只有官方的 - 稍后添加对社区插件的支持）插件</a>。
      </p>
      
      <h1>
        API
      </h1>
      
      <h2>
        概念
      </h2>
      
      <ul>
        <li>
          <em>页面 </em>- 带有路径名，模板组件和可选的graphql查询和布局组件的站点页面
        </li>
        <li>
          <em>页面组件</em> - 呈现页面的React.js组件，可以选择指定一个布局组件和一个graphql查询
        </li>
        <li>
          <em>组件扩展</em> - 可作为组件解析的扩展。 .js和.jsx受核心支持。 但插件可以添加对其他编译为js语言的支持。
        </li>
        <li>
          <em>依赖</em> - Gatsby自动跟踪不同对象之间的依赖关系，例如 一个页面可以依靠某些节点。 这允许热重新加载，缓存，增量构建等。
        </li>
        <li>
          <em>节点</em> - 一个数据对象
        </li>
        <li>
          <em>节点字段</em> - 由插件添加到不受其控制的节点的字段
        </li>
        <li>
          <em>节点链接</em> - 转换为GraphQL关系的节点之间的连接。 可以以各种方式创建，也可以自动推断。 来自节点及其变换派生节点的父/子链接是第一类链接。
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