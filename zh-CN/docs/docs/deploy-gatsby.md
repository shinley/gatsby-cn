---
title: 部署Gatsby
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

Unlike project pages, user/organization sites on Github live in a special repository dedicated to files for the site. The sites must be published from the `master` branch of the repository which means the site source files should be kept in a branch named `source` or something similar. We also don't need to prefix links like we do with project sites.

The repository for these sites requires a special name. See https://help.github.com/articles/user-organization-and-project-pages/ for documentation on naming your site's repository.

Like with project sites, add `gh-pages` as a `devDependency` and add a `deploy` script to your site's `package.json` file:

    "scripts": {
      "deploy": "gatsby build && gh-pages -d public --branch master",
    }
    

## Debugging tips

### Don't minify HTML

If you see the following error:

    Unable to find element with ID ##
    

or alternatively

    Uncaught Error: Minified React error #32; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=32&args[]=## for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    

This is a new problem when dealing with static sites built with React. React uses HTML comments to help identify locations of components that do not render anything. If you are using a CDN that minifies your HTML, it will eliminate the HTML comments used by react to take control of the page on the client.