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

Gatsby使用“Starters”开始新项目。 Starters 部分建立了预先配置的Gatsby网站，以帮助您更快地移动。 有一些官方的的“starters”和许多其他从Gatsby社区贡献的“starters”！ 详细信息请查看 Starters页面

To install a starter, first install Gatsby's command line program by running the following:

```sh
npm install --global gatsby-cli
```

Once that's installed, open a new terminal window and run the following commands to create a new Gatsby site in a directory called `tutorial-part-one` and then move to this new directory:

```sh
gatsby new tutorial-part-one https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-one
```

This command downloads the files for the starter and then installs the needed npm packages. It should take around 1.5-3 minutes to finish. It may look like nothing is happening at first; be patient!

现在我们来试试运行Gatsby！

Gatsby has a built-in development server. Let's start it up by running the following command:

```sh
gatsby develop
```

You should shortly see some text, close to the bottom, that says `The development server is listening at:` <http://localhost:8000>. Open that address in your browser and...

![Gatsby.js hello world](hello-world.png)

这样，它就开始工作了！

Too cool 

Gatsby's development server is a "hot reloading" server, meaning any change you make to your React.js page components (and later we'll learn, your data files) will be immediately visible and/or loaded in the browser.

这是它最大的优点，因为它使开发更快更有趣。

让我们试一下!

本教程的下一部分需要使用代码编辑软件。 VS Code是一个不错的选择。 With your code editor, open the folder on your computer called "tutorial-part-one," which was automatically created in the location you chose when you ran the `gatsby new` terminal command above.

Once you've opened the "tutorial-part-one" folder in your code editing software, it's time to edit your website. You'll see groups of directories and files; find the file in this location: `src/pages/index.js`. Once you open that file, try changing "Hello world!" in the page component to "Hello Gatsby!". Once you save that change, the text in your browser should change within a second (tip: you will always need to save changes before they appear in your browser).

尝试一些其他的技巧，如下所示：

1. Gatsby lets you add "inline styles" via a JavaScript style "prop" (we'll learn about other styling options later).
    
    Try replacing your page component with this:

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

Now your screen should look something like this:

![Screen Shot 2017-06-03 at 11.57.10 AM](moving-along.png)

## Linking between pages

Websites are pages and links between pages. While we've now got a pretty sweet first page—one page and no links doesn't feel very webby. So let's create a new page.

首先创建到新页面的链接。

To do that, import the `<Link>` component from the `gatsby-link` package that was installed along with the starter.

Unlike the normal HTML `<a>` element, Gatsby's `Link` component uses `to` for specifying the page you want to link to. Let's link to a page with the pathname of `/page-2/`. 尝试添加。 Once you're done, the page component should look like:

```jsx{2,9-12}
import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
  </div>
```

If you click on that link in the browser you should see:

![Gatsby.js 开发404页面](dev-404.png)

What you're seeing is the Gatsby.js development 404 page. Let's do what it says and create a React.js page component at `src/pages/page-2.js`.

使第二个页面组件如下所示：

```jsx
import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <p>Hello world from my second Gatsby page</p>
    <Link to="/">back home</Link>
  </div>
);
```

Save that and now you should be able to click back and forth between the two pages!

<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/images/clicking-2.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

*Challenge*: Using the instructions above as hints, see if you can create a third page and link to it from the home page.

## Interactive page

One nice thing about using Gatsby for building websites vs. other tools is that itʼs easier to add interactivity to your pages. React.js was designed for Facebook.com and is used on many other world-class web applications.

Let's see how to add interactive elements to our pages. Let's start with a counter.

We'll start by creating a new link to a page at `/counter`/ from our original `index.js` page component `<Link to="/counter/">Counter</Link>`.

```jsx{13-15}
import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
```

Add that link, click on it, and then we'll create a "Hello World" page component for `/counter/` as before. But instead of using the "functional component" form as we did before, this time we'll create a "class" component at `src/pages/counter.js`.

```jsx
import React from "react";

class Counter extends React.Component {
  render() {
    return <div>Hello Class Component</div>;
  }
}

export default Counter;
```

The class form of React allows us to have component state. We'll need that for our counter.

Let's continue to flesh out our counter. Let's add two buttons. One to increment and one to decrement the count of the counter.

```jsx{5-12}
import React from "react";

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

Now we have everything we need to make a nice counter. Let's make it live.

First we'll set up the component state.

```jsx{4-7,13}
import React from "react";

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
import React from "react";

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
        <button onClick={() => this.setState({ count: this.state.count +
          1 })}>plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count -
          1 })}>minus
        </button>
      </div>
    )
  }
}

export default Counter
```

There you go! A working React.js counter inside your static website 

*Bonus challenge*: One fun thing is that hot reloading isn't just for content and styles; it works on code as well. Currently, when you click the buttons on the counter, the numbers go up and down in increments of 1. Try to make the counter go up and down in a different increments (for example, 5).

## Deploying Gatsby.js websites

Gatsby.js is a *static site generator*, which means there are no servers to setup or complicated databases to deploy. Instead, the Gatsby `build` command produces a directory of static HTML and JavaScript files which you can deploy to a static site hosting service.

Let's try using [Surge](http://surge.sh/) for deploying our first Gatsby website. Surge is one of many "static site hosts" which make it possible to deploy Gatsby sites.

If you haven't previously installed & setup Surge, open a new terminal window and install their terminal tool:

```bash
npm install --global surge

# Then create a (free) account with them
surge
```

Next, build your site by running the following command in the terminal at the root of your site (tip: make sure you're running this command at the root of your site, in this case in the tutorial-part-one folder, which you can do by opening a new tab in the same window you used to run `gatsby develop`):

```bash
gatsby build
```

Building should take 15-30 seconds. At this point, it's useful to take a look at the files that the `gatsby build` command just prepared to deploy. Take a look at a list of the generated files by typing in the following terminal command into the root of your site, which will let you look at the `public` directory:

```bash
ls public
```

Then finally deploy your site by publishing the generated files to surge.sh.

```bash
surge public/
```

Once this finishes running, you should see in your terminal something like:

![Screenshot of publishing Gatsby site with Surge](surge-deployment.png)

Open the web address listed on the bottom line (`lowly-pain.surge.sh` in this case) and you'll see your newly published site! Good work!

## What's coming next?

In this tutorial, you've installed Gatsby, played in the development environment, and deployed your first site! Awesome! We hope you're enjoying yourself so far. Feel free to continue now to part two of the tutorial, ["Introduction to using CSS in Gatsby"](/tutorial/part-two/), or go exploring around the rest of the site.