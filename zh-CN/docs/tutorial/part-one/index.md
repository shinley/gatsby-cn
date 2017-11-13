---
title: Gatsby.js 教程 第一部分
typora-copy-images-to: './'
---
使用Gatsby的朋友们，大家好！ 欢迎来到我们社区的第一部分Gatsby.js教程。

在本教程中，我们将给你介绍Gatsby的开发环境，如何创建组件页面以及如何构建和部署Gatsby网站。

坐好了， 系上安全带，我们出发了！

## 检查你的开发环境

首先检查一下你是否已经设置了好了一切，然后Gatsby创建。 你需要安装最新版本的Node.js。

Node.js是在服务器和终端上运行JavaScript的编程工具。 盖茨比是用Node.js构建的。

打开一个终端窗口。 Mac用户请参阅这些说明，Windows用户请参阅其它说明。 在你的终端窗口中，输入node --version，然后输入npm --version。

你会看到以下信息：

![Check if node.js/npm is installed](check-versions.png)

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

<p>Try some other tricks, like the ones below:</p>

<ol>
<li><p>Gatsby lets you add "inline styles" via a JavaScript style "prop" (we'll learn about other styling options later).</p>

<p>Try making your page component look like this:</p></li>
</ol>

<pre><code class="jsx">import React from "react"

export default () => <div style={{ color: `blue` }}>Hello Gatsby!</div>
``</pre> 

Change the color to "pink". Then to "tomato".

1. Add some paragraph text.

```jsx{5-6}
import React from "react"

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
 </div>
```

1. Add an image

```jsx{7}
import React from "react"

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
   <img src="http://lorempixel.com/400/200/" alt="" />
 </div>
```

Now your screen should look something like this.

![Screen Shot 2017-06-03 at 11.57.10 AM](moving-along.png)

## Linking between pages

Websites are pages and links between pages. While we've now got a pretty sweet first page—one page and no links doesn't feel very webby. So let's create a new page.

First create the link to the new page.

To do that, import the `<Link>` component from the `gatsby-link` package that was installed along with the starter.

Unlike the normal HTML `<a>` element, our `Link` component uses `to` for specifying the page you want to link to. Let's link to a page with the pathname of `/page-2/`. Try adding that. Once you're done, the page component should look like:

```jsx{2,9-12}
import React from "react"
import Link from "gatsby-link"

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
  </div>
```

Click on that link and you should see:

![Gatsby.js development 404 page](dev-404.png)

What you're seeing is the Gatsby.js development 404 page. Let's do what it says and create a React.js page component at `src/pages/page-2.js`.

Make the second page component look something like:

```jsx
import React from "react"
import Link from "gatsby-link"

export default () =>
  <div>
    <p>Hello world from my second Gatsby page</p>
    <Link to="/">back home</Link>
  </div>
```

Save that and now you should be able to click back and forth between the two pages!

<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/images/clicking-2.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

## Interactive page

One nice thing about using Gatsby for building websites vs other tools is it's so easy to add interactivity to your pages. React.js was designed for Facebook.com and is used on many other world-class web applications.

Let's see how easy it is to add interactive elements to our pages.

We'll start by creating a new link to a page at `/counter`/ from our original `index.js` page component `<Link to="/counter/">Counter</Link>`.

```jsx{13-15}
import React from "react"
import Link from "gatsby-link"

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
```

Add that link, click on it, and then we'll create a "Hello World" page component for `/counter/` as before. But instead of using the "functional component" form as we did before, we'll create a "class" component.

```jsx
import React from "react"

class Counter extends React.Component {
  render() {
    return <div>Hello Class Component</div>
  }
}

export default Counter
```

The class form of React allows us to have component state. We'll need that for our counter.

Let's continue to flesh out our counter. Let's add two buttons. One to increment and one to decrement the count of the counter.

```jsx{5-12}
import React from "react"

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: 0</p>
        <button>plus</button>
        <button>minus</button>
      </div>
    )
  }
}

export default Counter
```

So now we have everything we need to make a nice counter. Let's make it live.

First we'll setup the component state.

```jsx{4-7,13}
import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button>plus</button>
        <button>minus</button>
      </div>
    )
  }
}

export default Counter
```

We're now rendering the current count from the component state.

Let's now change the state when we click on our buttons.

```jsx{14-19}
import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
      </div>
    )
  }
}

export default Counter
```

There you go! A working React.js counter inside your static website 

One fun thing too is that hot reloading isn't just for content and styles but it works on code as well. Try changing the amount by which clicking on the buttons changes the count.

## Deploying Gatsby.js websites on the web

Gatsby.js is a *static site generator* which makes deploying Gatsby sites to the web really easy. There are no servers to setup or complicated databases to deploy. Instead, the Gatsby `build` command produces a directory of static HTML and JavaScript files which you can deploy to a static site hosting service.

Let's try using [Surge](http://surge.sh/) for deploying our first Gatsby website. Surge is one of many "static site hosts" which make it really easy to deploy Gatsby sites.

First install their terminal tool:

```bash
npm install --global surge
```

Then build your site by running in the terminal at the root of your site:

```bash
gatsby build
```

Building should take 15-30 seconds. Take a look at the generated files by looking at the `public` directory:

```bash
ls public
```

Then finally deploy your site by publishing the generated files to surge.sh. You'll first need to create a (free) account by typing `surge`. Then run:

```bash
surge public/
```

Once this finishes running, you should see in your terminal something like:

![Screenshot of publishing Gatsby site with Surge](surge-deployment.png)

Open the web address listed on the bottom line (`lowly-pain.surge.sh` in this case) and you'll see your newly published site!

## Good work!

In this tutorial, you've installed Gatsby, played in the development environment, and deployed your first site! Awesome! We hope you're enjoying yourself so far. Feel free to continue now to [the second part of the tutorial](/tutorial/part-two/) or go exploring around the rest of the site.