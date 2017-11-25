---
title: Gatsby Starters
---
Gatsby CLI工具可让您安装“Starters”。 这些是部分建立的网站预先配置，以帮助您更快地创建一个特定类型的网站。

创建新网站时，您可以选择指定一个Starter作为新网站的基础，例如

`gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GITHUB_REPO]`

例如，要使用Gatsby快速创建博客，可以运行以下命令安装名为Blog的Starter：

`通过运行npm install下载文件并初始化站点`

这通过运行npm install下载文件并初始化站点

如果您未指定自定义Starter，则将从[默认Starter](https://github.com/gatsbyjs/gatsby-starter-default)创建您的站点。

有几个Starter已经创建。通过提交PR创建你的！

官方的：

* [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) [(demo)](http://gatsbyjs.github.io/gatsby-starter-default/)
* [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) [(demo)](http://gatsbyjs.github.io/gatsby-starter-blog/)
* [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) [(demo)](https://aberrant-fifth.surge.sh/)

社区的：

* [gatsby-starter-blog-no-styles](https://github.com/noahg/gatsby-starter-blog-no-styles) [(demo)](http://capricious-spring.surge.sh/)
    
    特性
    
    * 和官方的gatsby-starter-blog一样，但是所有样式都被删除了

* [gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter) [(demo)](https://vagr9k.github.io/gatsby-material-starter/)
    
    特性
    
    * React-MD for Material design
    * SASS/SCSS
    * Tags
    * Categories
    * Google Analytics
    * Disqus
    * Offline support
    * Web App Manifest
    * SEO
    * [Full list here!](https://github.com/Vagr9K/gatsby-material-starter#features)

* [gatsby-typescript-starter](https://github.com/fabien0102/gatsby-starter) [(demo)](https://fabien0102-gatsby-starter.netlify.com/)
    
    特性
    
    * Semantic-ui for styling
    * TypeScript
    * Offline support
    * Web App Manifest
    * Jest/Enzyme testing
    * Storybook
    * Markdown linting
    * [Full list here!](https://github.com/fabien0102/gatsby-starter#whats-inside)

* [gatsby-starter-bootstrap](https://github.com/jaxx2104/gatsby-starter-bootstrap) [(demo)](https://jaxx2104.github.io/gatsby-starter-bootstrap/)
    
    特性
    
    * Bootstrap CSS framework
    * Single column layout
    * Simple components: SiteNavi, SitePost, SitePage

* [gatsby-blog-starter-kit](https://github.com/dschau/gatsby-blog-starter-kit)
    
    特性
    
    * Blog post listing with previews for each blog post
    * Navigation between posts with a previous/next post button
    * Tags and tag navigation

* [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter) [(demo)](https://vagr9k.github.io/gatsby-advanced-starter/)
    
    特性
    
    * Great for learning about advanced features and their implementations
    * Does not contain any UI frameworks
    * Provides only a skeleton
    * Tags
    * Categories
    * Google Analytics
    * Disqus
    * Offline support
    * Web App Manifest
    * SEO
    * [Full list here!](https://github.com/Vagr9K/gatsby-advanced-starter#features)

* [glitch-gatsby-starter-blog](https://github.com/100ideas/glitch-gatsby-starter-blog/) ([demo](https://gatsby-starter-blog.glitch.me))
    
    特性
    
    * [live-edit](https://glitch.com/edit/#!/remix/gatsby-starter-blog) a temp, anon copy of app
    * same code as [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) (mostly)
    * free hosting & web IDE on glitch.com
    * HMR working w/ glitch IDE (see [note](https://github.com/100ideas/glitch-gatsby-starter-blog/blob/5fce8999bd952087ecdc74c9787a0cb3cb884371/README.md#enabling-hmr))
    * caution:
    * app running in **develop** mode
    * glitch serves assets over CDN, API unclear
    * virtual server container provides [**128MB** for app](https://glitch.com/faq#restrictions) (512MB for assets)
    * server can't install certain gatsby plugins (`sharp`-based; out of mem?)

* [gatsby-starter-grommet](https://github.com/alampros/gatsby-starter-grommet) [(demo)](https://alampros.github.io/gatsby-starter-grommet/)
    
    特性
    
    * Barebones configuration for using the [Grommet](https://grommet.github.io/) design system
    * Uses SASS (with CSS modules support)

* [gatsby-starter-basic](https://github.com/PrototypeInteractive/gatsby-react-boilerplate) [(demo)](https://prototypeinteractive.github.io/gatsby-react-boilerplate/)
    
    特性
    
    * Basic configuration and folder structure
    * Uses postcss and sass (with autoprefixer and pixrem)
    * Uses boostrap 4 grid
    * Leaves the styling to you
    * Uses data from local json files
    * Contains Node.js server code for easy, secure, and fast hosting

* [gatsby-starter-default-i18n](https://github.com/angeloocana/gatsby-starter-default-i18n) [(demo)](https://gatsby-starter-default-i18n.netlify.com)
    
    特性
    
    * localization (Multilanguage)

* [gatsby-starter-gatsbythemes](https://github.com/saschajullmann/gatsby-starter-gatsbythemes) [(demo)](https://themes.gatsbythemes.com/gatsby-starter/)
    
    特性
    
    * CSS-in-JS via [Emotion](https://github.com/emotion-js/emotion).
    * Jest and Enzyme for testing.
    * Eslint in dev mode with the airbnb config and prettier formatting rules.
    * React 16.
    * A basic blog, with posts under src/pages/blog. There's also a script which creates a new Blog entry (post.sh).
    * Data per JSON files.
    * A few basic components (Navigation, Footer, Layout).
    * Layout components make use of [Styled-System](https://github.com/jxnblk/styled-system).
    * Google Analytics (you just have to enter your tracking-id).
    * Gatsby-Plugin-Offline which includes Service Workers.
    * [Prettier](https://github.com/prettier/prettier) for a uniform codebase.
    * [Normalize](https://github.com/necolas/normalize.css/) css (7.0).
    * [Feather](https://feather.netlify.com/) icons.
    * Font styles taken from [Tachyons](http://tachyons.io/).

* [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms) [(demo)](https://gatsby-netlify-cms.netlify.com/)
    
    特性
    
    * A simple blog built with Netlify CMS 
    * Basic directory organization
    * Uses [Bulma](https://bulma.io/) for styling
    * Visit [the repo](https://github.com/AustinGreen/gatsby-starter-netlify-cms) to learn how to set up authentication, and begin modeling your content.

* [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma) [(demo)](https://embalmer-glues-43220.netlify.com/)
    
    特性
    
    * Perfect for designers and photographers
    * Full-width Photo Grid-Layout (Responsive Images through [gatsby-image](https://using-gatsby-image.gatsbyjs.org/))
    * Minimalistic light theme with large images
    * Create your projects in Markdown
    * Styling with SCSS and [Typography.js](https://kyleamathews.github.io/typography.js/)
    * Easily configurable
    * And other good stuff (SEO, Offline Support, WebApp Manifest Support)