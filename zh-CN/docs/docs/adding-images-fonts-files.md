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

You can also add other assets to a `static` folder at the root of your project.

Note that we normally encourage you to `import` assets in JavaScript files instead. This mechanism provides a number of benefits:

* Scripts and stylesheets get minified and bundled together to avoid extra network requests.
* Missing files cause compilation errors instead of 404 errors for your users.
* Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `static` folder, it will **not** be processed by Webpack. Instead it will be copied into the public folder untouched. E.g. if you add a file named `sun.jpg` to the static folder, it'll be copied to `public/sun.jpg`. To reference assets in the `static` folder, you need to use a special variable called `__PATH_PREFIX__`. You will need to make sure you set `pathPrefix` in your gatsby-config.js for this to work (set it to `/` if you don't have a path prefix).

In JavaScript code, you can use `__PATH_PREFIX__` for similar purposes:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={__PATH_PREFIX__ + '/img/logo.png'} alt="Logo" />;
}
```

Keep in mind the downsides of this approach:

* None of the files in `static` folder get post-processed or minified.
* Missing files will not be called at compilation time, and will cause 404 errors for your users.
* Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

### When to Use the `static` Folder

Normally we recommend importing [stylesheets](#adding-a-stylesheet), [images, and fonts](#adding-images-and-fonts) from JavaScript. The `static` folder is useful as a workaround for a number of less common cases:

* You need a file with a specific name in the build output, such as [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
* You have thousands of images and need to dynamically reference their paths.
* You want to include a small script like [`pace.js`](http://github.hubspot.com/pace/docs/welcome/) outside of the bundled code.
* Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>` tag.