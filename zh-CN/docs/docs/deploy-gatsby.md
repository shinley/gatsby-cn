---
title: "部署Gatsby"
---
## 在不同的静态站点主机上部署的教程

* [S3/Cloudfront](/docs/deploy-gatsby/#amazon-s3-and-cloudfront)
* [Github Pages](/docs/deploy-gatsby/#github-pages)

## Amazon S3和Cloudfront

如果您决定使用Cloudfront作为CDN在S3上托管您的Gatsby站点，则应该使用S3存储桶的实际URL更改Cloudfront面板上的“源域名”：examplewebsite.com.s3-website-eu-west-1.amazonaws.com替换Amazon examplewebsite.com.s3.amazonaws.com建议的默认URL。

Without this change, [S3 doesn't look for index.html files when serving "clean urls"](https://forums.aws.amazon.com/message.jspa?messageID=314454).

## Github Pages

### 发布项目页面

您可以在Github上部署网站，可以使用或不使用自定义域名。 如果您选择使用默认设置（没有自定义域），则需要使用路径前缀来设置您的站点。

### 使用NPM包gh-pages进行部署

首先添加gh-pages作为你站点的devDependency，并通过运行npm install gh-pages --save-dev或者yarn add gh-pages --dev（如果你已经安装了yarn）创建一个npm脚本来部署你的项目。

然后在你的package.json文件中添加一个部署脚本。

    "scripts": {
      "deploy": "gatsby build --prefix-paths && gh-pages -d public",
    }
    

在gatsby-config.js中，将pathPrefix设置为添加到您网站的链接路径。 AthPrefix应该是存储库中的项目名称。 (例如: https://github.com/username/project-name - 你的pathPrefix应该是/ project-name）。 有关更多信息，请参阅路径前缀上的[文档](/docs/path-prefix/)页面。

    module.exports = {
      pathPrefix: `/project-name`,
    }
    

现在运行yarn deploy或npm run deploy。 在你的github页面预览更改https://username.github.io/project-name/。 您也可以在设置> Github页面下的Github上找到您的网站的链接。

### 署用户/组织站点

与项目页面不同，Github上的用户/组织站点位于专用于该站点文件的专用存储库中。 这些站点必须从存储库的主分支发布，这意味着站点源文件应该保存在一个名为源或类似的分支中。 我们也不需要在项目网站上加上前缀链接。

这些网站的存储库需要一个特殊的名称。 请参阅https://help.github.com/articles/user-organization-and-project-pages/以获取有关命名您的网站存储库的文档。

与项目站点一样，将gh-pages添加为devDependency并将部署脚本添加到站点的package.json文件中：

    "scripts": {
      "deploy": "gatsby build && gh-pages -d public --branch master",
    }
    

## 调试技巧

### 不要最小化HTML

如果您看到以下错误：

    Unable to find element with ID ##
    

or alternatively

    Uncaught Error: Minified React error #32; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=32&args[]=## for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    

This is a new problem when dealing with static sites built with React. React uses HTML comments to help identify locations of components that do not render anything. If you are using a CDN that minifies your HTML, it will eliminate the HTML comments used by react to take control of the page on the client.