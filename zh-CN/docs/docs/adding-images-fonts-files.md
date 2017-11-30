---
title: '添加图像，字体和文件'
---
使用Webpack，您可以直接在JavaScript模块中Import(导入) 文件。 这告诉Webpack将该文件包含在该包中。 与CSS导入不同，导入文件会为您提供一个字符串值。 此值是您可以在代码中引用的最终路径，例如 作为图像的src属性或链接到PDF的href。

为了减少对服务器的请求数量，导入小于10,000字节的图像将返回[数据URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)而不是路径。 这适用于以下文件扩展名：svg，jpg，jpeg，png，gif，mp4，webm，wav，mp3，m4a，aac和oga。

下面是一个示例：

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

这确保了当项目建成时，Webpack将正确地将图像移动到公共文件夹中，并为我们提供正确的路径。

这也适用于CSS：

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack在CSS中查找所有相关的模块引用（以./开头），并用编译后的包中的最终路径替换它们。 如果您输入错误或者意外删除了一个重要的文件，就会看到一个编译错误，就像导入一个不存在的JavaScript模块一样。 编译包中的最终文件名是由Webpack从内容哈希生成的。 如果将来文件内容发生变化，Webpack会在生产中给它一个不同的名称，所以你不必担心内容被长期缓存。

请注意，这也是Webpack的自定义功能。

下一节将介绍处理静态资产的另一种方法。

## 使用静态文件夹

### 在模块系统之外添加资源

您也可以将其他资源添加到项目根目录的静态文件夹中。

请注意，我们通常鼓励您使用JavaScript文件导入资源。 这种机制提供了许多好处：

* 脚本和样式表被缩小并捆绑在一起以避免额外的网络请求。
* 缺少文件会导致编译错误，而不是404用户的错误。
* 结果文件名会被散列成新值，因此您不必担心浏览器缓存旧版本。

但是，您可以使用escape hatch在模块系统之外添加资产。

如果你把一个文件放到静态文件夹中，它不会被Webpack处理。 相反，它将被复制到公用文件夹中。 例如。 如果将一个名为sun.jpg的文件添加到静态文件夹中，它将被复制到public / sun.jpg。 要引用静态文件夹中的资源，您需要使用一个名为__PATH_PREFIX__的特殊变量。 你将需要确保你在你的gatsby-config.js中设置了pathPrefix来使其工作（如果你没有路径前缀，就把它设置为/）。

在JavaScript代码中，您可以使用__PATH_PREFIX__用于类似的目的：

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={__PATH_PREFIX__ + '/img/logo.png'} alt="Logo" />;
}
```

请记住这种方法的缺点：

* 静态文件夹中的文件都不会被后处理或缩小。
* 缺少的文件将不会在编译时被调用，并会导致您的用户产生404错误。
* 结果文件名将不会被散列，因此您需要添加查询参数或每次更改时重命名它们。

### 什么时候使用静态文件夹

通常我们建议从JavaScript导入样式表，图片和字体。 静态文件夹可用于解决一些不常见的情况：

* 您需要在构建输出中使用具有特定名称的文件，例如[manifest.webmanifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)。
* 你有成千上万的图像，需要动态引用他们的路径。
* 你想在包装代码之外加入一个像[pace.js](http://github.hubspot.com/pace/docs/welcome/)这样的小脚本。
* 有些库可能与Webpack不兼容，除此之外，您没有别的选择，只能将其作为<script>标签包含在内。</li>
</ul>