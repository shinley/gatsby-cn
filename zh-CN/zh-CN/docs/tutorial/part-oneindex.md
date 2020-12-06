---
title: Gatsby.js 教程 第一部分
typora-copy-images-to: ./
---
使用Gatsby的朋友们，大家好！ 欢迎来到我们社区的第一部分Gatsby.js教程。

在本教程中，我们将给你介绍Gatsby的开发环境，如何创建组件页面以及如何构建和部署Gatsby网站。

坐好了， 系上安全带，我们出发了！

## 检查你的开发环境

首先检查一下你是否已经设置了好了一切，然后Gatsby创建。 你需要安装最新版本的Node.js。

Node.js是在服务器和终端上运行JavaScript的编程工具。 盖茨比是用Node.js构建的。

打开一个终端窗口。 Mac用户请参阅这些说明，Windows用户请参阅其它说明。 在你的终端窗口中，输入node --version，然后输入npm --version。

你会看到以下信息：

![检查是否安装了node.js / npm](check-versions.png)

Gatsby支持的Node的最小版本是v4, NPM的版本是V3.

如果您没有安装Node.js，请到https://nodejs.org/并安装适用于您的操作系统的推荐版本。

## 安装“Hello World”启动器(Starter)

Gatsby使用“Starters”开始新项目 顾名思义，“starters”部分建立了预先配置的Gatsby网站，以帮助您更快地开始。 有一些官方的的“starters”和许多其他从Gatsby社区贡献的“starters”！ 详细信息请查看 Starters页面

要安装starter，首先在终端窗口中输入以下命令来安装Gatsby的终端程序，然后按下ENTER键。

```sh
npm install --global gatsby-cli
```

安装完成后，在中输入以下命令并按Enter键：

```sh
gatsby new tutorial-part-one https://github.com/gatsbyjs/gatsby-starter-hello-world
```

该命令下载启动程序的文件，然后安装所需的NPM软件包。 完成大约需要1.5-3分钟。 一开始可能看起来没有任何事情发生， 耐心一点！

现在我们来试试运行Gatsby！

Gatsby有一个内置的开发服务器。 让我们通过在本教程中使用的终端窗口中输入以下命令来启动它。

```sh
cd tutorial-part-one
gatsby develop
```

您应该很快会看到一些文字说明开发服务器正在监听：http://localhost:8000。 在您的浏览器中打开该地址，然后...

![Gatsby.js hello world](hello-world.png)

这样，它就开始工作了！

是不是很酷？

Gatsby的开发服务器是一个“热加载”服务器，这意味着您对React.js页面组件（以及后来我们将了解的，您的数据文件）所做的任何更改都将在浏览器中重新加载。

这是它最大的优点，因为它使开发更快更有趣。

让我们试一下!

本教程的下一部分需要使用代码编辑软件。 VS Code是一个不错的选择。 使用代码编辑器，在计算机上打开一个名为“tutorial-part-one”的文件夹。 当你在本教程的第一部分中运行先前的终端命令时，该文件夹是自动创建的。

现在，您已经在代码编辑软件中打开了“tutorial-part-one”文件夹，现在可以编辑您的网站了。 在代码编辑软件中，您需要找到`` src/pages/index.js</ code>。 一旦你发现，尝试在页面组件中把“Hello World！”修改为 “Hello Gatsby！”。 浏览器中的文本会随着改变。</p>

<p>尝试一些其他的技巧，如下所示：</p>

<ol>
<li><p>Gatsby允许您通过JavaScript风格的“prop”属性添加“内联风格”（稍后我们将了解其他样式选项）。</p>

<p>尝试使您的页面组件如下所示：</p></li>
</ol>

<pre><code class="jsx">import React from "react"

export default () => &lt;div style={{ color: `blue` }}>Hello Gatsby!&lt;/div>
``&lt;/pre>

&lt;p>将颜色更改为“粉红色”。 然后去“番茄色”。&lt;/p>

&lt;ol>
&lt;li>添加一些段落文字。&lt;/li>
&lt;/ol>

&lt;pre>&lt;code class="jsx{5-6}">import React from "react"

export default () =&gt;
 &lt;div style={{ color: `tomato` }}&gt;
   &lt;h1&gt;Hello Gatsby!&lt;/h1&gt;
   &lt;p&gt;What a world.&lt;/p&gt;
 &lt;/div&gt;
</code></pre>

1. 添加一张图片。

```jsx{7}
import React from "react"

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
   <img src="http://lorempixel.com/400/200/" alt="" />
 </div>
```

现在你的屏幕应该看起来像这样。

![Screen Shot 2017-06-03 at 11.57.10 AM](moving-along.png)

## 链接页面

网站是页面和页面之间的链接。 虽然我们现在已经有了一个非常甜蜜的第一页，一个页面，没有任何联系不感觉很webby。 所以让我们创建一个新的页面。

首先创建到新页面的链接。

因此，请从与启动器一起安装的gatsby-link软件包中导入

<link />
组件。

与普通的HTML <a>元素不同，我们的链接组件用于指定要链接的页面。 让我们链接到一个路径名为/page-2 /的页面。 尝试添加。 完成之后，页面组件应如下所示：</p></p> 

<pre><code class="jsx{2,9-12}">import React from "react"
import Link from "gatsby-link"

export default () =&gt;
  &lt;div style={{ color: `tomato` }}&gt;
    &lt;h1&gt;Hello Gatsby!&lt;/h1&gt;
    &lt;p&gt;What a world.&lt;/p&gt;
    &lt;img src="http://lorempixel.com/400/200/" alt="" /&gt;
    &lt;br /&gt;
    &lt;div&gt;
      &lt;Link to="/page-2/"&gt;Link&lt;/Link&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>

<p>
  点击该链接，你应该看到：
</p>

<p>
  <img src="dev-404.png" alt="Gatsby.js 开发404页面" />
</p>

<p>
  你看到的是Gatsby.js开发404页面。 让我们按照自己的说法在src/pages/page-2.js创建一个React.js页面组件。
</p>

<p>
  使第二个页面组件如下所示：
</p>

<pre><code class="jsx">import React from "react"
import Link from "gatsby-link"

export default () =&gt;
  &lt;div&gt;
    &lt;p&gt;Hello world from my second Gatsby page&lt;/p&gt;
    &lt;Link to="/"&gt;back home&lt;/Link&gt;
  &lt;/div&gt;
</code></pre>

<p>
  保存之后，现在你应该能够在两个页面之间来回点击！
</p>

<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/images/clicking-2.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

<h2>
  交互式页面
</h2>

<p>
  使用Gatsby构建网站vs其他工具的一个好处是可以很容易地为您的页面添加交互性。 React.js是为Facebook.com设计的，在许多其他世界级的Web应用程序上使用
</p>

<p>
  让我们看看添加交互式元素到我们的页面是多么容易。
</p>

<p>
  我们首先创建一个新的链接到我们原来的index.js页面组件中的/counter/的页面
  
  <link to ="/counter/" />
  Counter </>。
</p>

<pre><code class="jsx{13-15}">import React from "react"
import Link from "gatsby-link"

export default () =&gt;
  &lt;div style={{ color: `tomato` }}&gt;
    &lt;h1&gt;Hello Gatsby!&lt;/h1&gt;
    &lt;p&gt;What a world.&lt;/p&gt;
    &lt;img src="http://lorempixel.com/400/200/" alt="" /&gt;
    &lt;br /&gt;
    &lt;div&gt;
      &lt;Link to="/page-2/"&gt;Link&lt;/Link&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;Link to="/counter/"&gt;Counter&lt;/Link&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>

<p>
  添加该链接，点击它，然后我们将像以前一样为/counter/创建一个“Hello World”页面组件。 但是，我们不是像以前那样使用“功能组件”表单，而是创建一个“类”组件。
</p>

<pre><code class="jsx">import React from "react"

class Counter extends React.Component {
  render() {
    return &lt;div&gt;Hello Class Component&lt;/div&gt;
  }
}

export default Counter
</code></pre>

<p>
  React的类形式允许我们有组件状态。 我们需要这个为我们的计数器。
</p>

<p>
  让我们继续完善我们的计数器。 我们添加两个按钮。 一个递增，一个递减计数器的计数。
</p>

<pre><code class="jsx{5-12}">import React from "react"

class Counter extends React.Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;p&gt;current count: 0&lt;/p&gt;
        &lt;button&gt;plus&lt;/button&gt;
        &lt;button&gt;minus&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}

export default Counter
</code></pre>

<p>
  所以现在我们有我们需要的一切来做一个很好的计数器。 让我们做起来吧。
</p>

<p>
  首先，我们将设置组件状态。
</p>

<pre><code class="jsx{4-7,13}">import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;p&gt;current count: {this.state.count}&lt;/p&gt;
        &lt;button&gt;plus&lt;/button&gt;
        &lt;button&gt;minus&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}

export default Counter
</code></pre>

<p>
  我们现在从组件状态呈现当前计数。
</p>

<p>
  现在让我们改变状态，当我们点击我们的按钮。
</p>

<pre><code class="jsx{14-19}">import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;p&gt;current count: {this.state.count}&lt;/p&gt;
        &lt;button onClick={() =&gt; this.setState({ count: this.state.count + 1 })}&gt;
          plus
        &lt;/button&gt;
        &lt;button onClick={() =&gt; this.setState({ count: this.state.count - 1 })}&gt;
          minus
        &lt;/button&gt;
      &lt;/div&gt;
    )
  }
}

export default Counter
</code></pre>

<p>
  好了！ 一个在你的静态网站里面工作的React.js计数器
</p>

<p>
  一个有趣的事情是，热加载不仅仅是内容和风格，而且它也适用于代码。 尝试更改点击按钮更改计数的数量。
</p>

<h2>
  在网络上部署Gatsby.js网站
</h2>

<p>
  Gatsby.js是一个静态站点生成器，使得部署Gatsby网站非常容易。 没有服务器来设置或复杂的数据库部署。 相反，Gatsby build命令会生成一个静态HTML和JavaScript文件的目录，您可以将其部署到静态网站托管服务。
</p>

<p>
  让我们尝试使用Surge来部署我们的第一个Gatsby网站。 Surge是许多“静态站点主机”之一，这使得部署Gatsby站点非常容易。
</p>

<p>
  首先安装他们的终端工具：
</p>

<pre><code class="bash">npm install --global surge
</code></pre>

<p>
  然后通过在您的网站的根目录中运行终端来建立您的网站：
</p>

<pre><code class="bash">gatsby build
</code></pre>

<p>
  构建应该需要15-30秒。 通过查看public目录来查看生成的文件：
</p>

<pre><code class="bash">ls public
</code></pre>

<p>
  然后通过将生成的文件发布到surge.sh来最终部署您的网站。 您首先需要输入surge来创建一个（免费）帐户。 然后运行：
</p>

<pre><code class="bash">surge public/
</code></pre>

<p>
  一旦这个运行完成，你应该在你的终端看到像这样的：
</p>

<p>
  <img src="surge-deployment.png" alt="用Surge发布Gatsby网站" />
</p>

<p>
  打开底线列出的网址（在这种情况下，lowly-pain.surge.sh），你会看到你的新发布的网站！
</p>

<h2>
  干的好！
</h2>

<p>
  在本教程中，您已经安装了Gatsby，在开发环境中显示，并部署了您的第一个站点！ 非常好！ 希望你能享受目前的这一切。 随时可以继续到本教程的第二部分，或者去探索网站的其他部分。
</p>
