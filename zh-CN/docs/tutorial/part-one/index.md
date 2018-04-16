---
title: Introduction to Gatsby basics
typora-copy-images-to: ./
---
你好， 学习Gatsby的小伙伴们！ 欢迎来到我们社区的第一部分Gatsby.js教程。

## 本教程中的内容是什么？

在本教程中，您将轻松介绍Gatsby开发环境，如何创建组件页面以及如何构建和部署Gatsby网站。

坐好了， 系上安全带，我们出发了！

## 检查你的开发环境

我们首先检查你是否已经开始创建与Gatsby一起创建的所有东西。 您将需要安装最新版本的Node.js。

Node.js是用于在服务器和计算机终端上运行JavaScript的编程工具。 Gatsby使用Node.js构建。

打开一个终端窗口。 有关Mac用户的终端说明和适用于Windows用户的终端说明。 在你的终端窗口中，输入node --version并点击ENTER，然后npm --version并点击ENTER（提示：要运行指定的命令，必须在终端中输入命令，然后按ENTER键。 然后该命令将运行）。</p> 

你会看到以下信息：

![检查是否安装了node.js / npm](check-versions.png)

Gatsby支持将版本节点恢复为v6和npm至v3。

如果您没有安装Node.js，请转到https://nodejs.org/并安装操作系统的推荐版本。

## 安装 "Hello World" starter

Gatsby使用“Starters”开始新项目。 Starters 部分建立了预先配置的Gatsby网站，以帮助您更快地移动。 有一些官方的的“starters”和许多其他从Gatsby社区贡献的“starters”！ [详细信息请查看 Starters页面](/docs/gatsby-starters/)。

要安装starter，首先通过运行以下命令来安装Gatsby的命令行程序：

```sh
npm install --global gatsby-cli
```

安装完成后，打开一个新的终端窗口并运行以下命令，在名为tutorial-part-1的目录中创建一个新的Gatsby站点，然后移至此新目录：

```sh
gatsby new tutorial-part-one https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-one
```

该命令下载启动程序的文件，然后安装所需的npm软件包。 它应该需要大约1.5-3分钟才能完成。 起初可能看起来没有任何事情发生; 耐心一点！

现在我们来试试运行Gatsby！

Gatsby有一个内置的开发服务器。 让我们通过运行以下命令启动它：

```sh
gatsby develop
```

您应该很快会看到一些接近底部的文字，表示开发服务器正在侦听：http：// localhost：8000。 Open that address in your browser and...

![Gatsby.js hello world](hello-world.png)

这样，它就开始工作了！

太酷了 

Gatsby的开发服务器是一个“热重新加载”服务器，这意味着您对React.js页面组件（以及稍后我们将了解的，您的数据文件）所做的任何更改都将立即在浏览器中可见和/或加载。

这是它最大的优点，因为它使开发更快更有趣。

让我们试一下!

本教程的下一部分需要使用代码编辑软件。 VS Code是一个不错的选择。 使用您的代码编辑器，打开计算机上名为“tutorial-part-one”的文件夹，该文件夹会在您运行上述gatsby new terminal命令时选择的位置自动创建。

一旦您在代码编辑软件中打开了“tutorial-part-one”文件夹，就可以编辑您的网站了。 你会看到一组目录和文件; 在这个位置找到该文件：src/pages/index.js。 一旦你打开该文件，请尝试更改“Hello world！” 在页面组件中“Hello Gatsby！”。 保存更改后，浏览器中的文本应该在一秒内更改（小技巧：在更改显示在浏览器中之前，您始终需要保存更改）。

尝试一些其他的技巧，如下所示：

1. Gatsby允许您通过JavaScript风格的“道具”添加“内联样式”（我们将在后面了解其他样式选项）。
    
    尝试用这个替换你的页面组件：

```jsx
import React from "react";

export default () => <div style={{ color: `blue` }}>Hello Gatsby!</div>;
```

将颜色更改为“粉红色”。 然后去“番茄色”。

1. 添加一些段落文字。

```jsx{5-6}
import React from "react";

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
 </div>
```

1. Add an image (in this case, a random one from Unsplash)

```jsx{7}
import React from "react";

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
   <img src="https://source.unsplash.com/random/400x200" alt="" />
 </div>
```

现在你的屏幕应该是这样的：

![Screen Shot 2017-06-03 at 11.57.10 AM](moving-along.png)

## 链接页面

网站是页面和页面之间的链接。 虽然我们现在已经有了一个非常可爱的第一页 - 一页，并且没有任何链接感觉不到webby。 所以让我们创建一个新页面。

首先创建到新页面的链接。

为此，请从与启动器一起安装的gatsby-link软件包中导入<Link>组件。

与普通的HTML <a>元素不同，Gatsby的链接组件用于指定要链接的页面。 让我们链接到路径名为/page-2/的页面。 尝试添加。 完成后，页面组件应如下所示：</p> 

<pre><code class="jsx{2,9-12}">import React from "react";
import Link from "gatsby-link";

export default () =&gt;
  &lt;div style={{ color: `tomato` }}&gt;
    &lt;h1&gt;Hello Gatsby!&lt;/h1&gt;
    &lt;p&gt;What a world.&lt;/p&gt;
    &lt;img src="https://source.unsplash.com/random/400x200" alt="" /&gt;
    &lt;br /&gt;
    &lt;div&gt;
      &lt;Link to="/page-2/"&gt;Link&lt;/Link&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>

<p>
  如果您在浏览器中点击该链接，您应该看到：
</p>

<p>
  <img src="dev-404.png" alt="Gatsby.js 开发404页面" />
</p>

<p>
  你看到的是Gatsby.js开发404页面。 让我们按照它的说法在src/pages/page-2.js创建一个React.js页面组件。
</p>

<p>
  使第二个页面组件如下所示：
</p>

<pre><code class="jsx">import React from "react";
import Link from "gatsby-link";

export default () =&gt; (
  &lt;div&gt;
    &lt;p&gt;Hello world from my second Gatsby page&lt;/p&gt;
    &lt;Link to="/"&gt;back home&lt;/Link&gt;
  &lt;/div&gt;
);
</code></pre>

<p>
  保存之后，现在你应该能够在两页之间来回点击！
</p>

<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/images/clicking-2.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

<p>
  <em>挑战：</em>使用上述说明作为提示，看看您是否可以创建第三页并从主页链接到它。
</p>

<h2>
  交互式页面
</h2>

<p>
  One nice thing about using Gatsby for building websites vs. other tools is that itʼs easier to add interactivity to your pages. React.js was designed for Facebook.com and is used on many other world-class web applications.
</p>

<p>
  Let's see how to add interactive elements to our pages. Let's start with a counter.
</p>

<p>
  We'll start by creating a new link to a page at <code>/counter</code>/ from our original <code>index.js</code> page component <code>&lt;Link to="/counter/"&gt;Counter&lt;/Link&gt;</code>.
</p>

<pre><code class="jsx{13-15}">import React from "react";
import Link from "gatsby-link";

export default () =&gt;
  &lt;div style={{ color: `tomato` }}&gt;
    &lt;h1&gt;Hello Gatsby!&lt;/h1&gt;
    &lt;p&gt;What a world.&lt;/p&gt;
    &lt;img src="https://source.unsplash.com/random/400x200" alt="" /&gt;
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
  Add that link, click on it, and then we'll create a "Hello World" page component for <code>/counter/</code> as before. But instead of using the "functional component" form as we did before, this time we'll create a "class" component at <code>src/pages/counter.js</code>.
</p>

<pre><code class="jsx">import React from "react";

class Counter extends React.Component {
  render() {
    return &lt;div&gt;Hello Class Component&lt;/div&gt;;
  }
}

export default Counter;
</code></pre>

<p>
  The class form of React allows us to have component state. We'll need that for our counter.
</p>

<p>
  Let's continue to flesh out our counter. Let's add two buttons. One to increment and one to decrement the count of the counter.
</p>

<pre><code class="jsx{5-12}">import React from "react";

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
  Now we have everything we need to make a nice counter. Let's make it live.
</p>

<p>
  First we'll set up the component state.
</p>

<pre><code class="jsx{4-7,13}">import React from "react";

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
  We're now rendering the current count from the component state.
</p>

<p>
  Let's now change the state when we click on our buttons.
</p>

<pre><code class="jsx{14-19}">import React from "react";

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
        &lt;button onClick={() =&gt; this.setState({ count: this.state.count +
          1 })}&gt;plus
        &lt;/button&gt;
        &lt;button onClick={() =&gt; this.setState({ count: this.state.count -
          1 })}&gt;minus
        &lt;/button&gt;
      &lt;/div&gt;
    )
  }
}

export default Counter
</code></pre>

<p>
  There you go! A working React.js counter inside your static website 
</p>

<p>
  <em>Bonus challenge</em>: One fun thing is that hot reloading isn't just for content and styles; it works on code as well. Currently, when you click the buttons on the counter, the numbers go up and down in increments of 1. Try to make the counter go up and down in a different increments (for example, 5).
</p>

<h2>
  Deploying Gatsby.js websites
</h2>

<p>
  Gatsby.js is a <em>static site generator</em>, which means there are no servers to setup or complicated databases to deploy. Instead, the Gatsby <code>build</code> command produces a directory of static HTML and JavaScript files which you can deploy to a static site hosting service.
</p>

<p>
  Let's try using <a href="http://surge.sh/">Surge</a> for deploying our first Gatsby website. Surge is one of many "static site hosts" which make it possible to deploy Gatsby sites.
</p>

<p>
  If you haven't previously installed & setup Surge, open a new terminal window and install their terminal tool:
</p>

<pre><code class="bash">npm install --global surge

# Then create a (free) account with them
surge
</code></pre>

<p>
  Next, build your site by running the following command in the terminal at the root of your site (tip: make sure you're running this command at the root of your site, in this case in the tutorial-part-one folder, which you can do by opening a new tab in the same window you used to run <code>gatsby develop</code>):
</p>

<pre><code class="bash">gatsby build
</code></pre>

<p>
  Building should take 15-30 seconds. At this point, it's useful to take a look at the files that the <code>gatsby build</code> command just prepared to deploy. Take a look at a list of the generated files by typing in the following terminal command into the root of your site, which will let you look at the <code>public</code> directory:
</p>

<pre><code class="bash">ls public
</code></pre>

<p>
  Then finally deploy your site by publishing the generated files to surge.sh.
</p>

<pre><code class="bash">surge public/
</code></pre>

<p>
  Once this finishes running, you should see in your terminal something like:
</p>

<p>
  <img src="surge-deployment.png" alt="Screenshot of publishing Gatsby site with Surge" />
</p>

<p>
  Open the web address listed on the bottom line (<code>lowly-pain.surge.sh</code> in this case) and you'll see your newly published site! Good work!
</p>

<h2>
  What's coming next?
</h2>

<p>
  In this tutorial, you've installed Gatsby, played in the development environment, and deployed your first site! Awesome! We hope you're enjoying yourself so far. Feel free to continue now to part two of the tutorial, <a href="/tutorial/part-two/">"Introduction to using CSS in Gatsby"</a>, or go exploring around the rest of the site.
</p>