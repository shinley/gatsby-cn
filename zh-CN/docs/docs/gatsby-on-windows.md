---
title: Gatsby on Windows
---
## 设置您的环境来构建本地Node.js模块。

许多Gatsby插件和主题需要构建本地Node.js模块，例如， [Sharp（用于图像处理的普通的Gatsby依赖）](/packages/gatsby-plugin-sharp/)。 为此，您需要一个功能性的构建环境（Python和Visual C ++构建工具）。

在Windows上设置构建环境的简单方法是通过在管理PowerShell控制台上运行npm install windows-build-tools -g来安装[windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)软件包。 在安装此软件包时，它会下载并安装由Microsoft免费提供的Visual C ++ Build Tools 2015。 这些工具是编译流行的本地模块所必需的。 它也将安装Python 2.7，正确地配置你的机器和npm

### 如果npm安装仍然失败...

有时windows-build-tools不能正确安装所需的库。 This is true if you already have a regular .NET development environment setup. This has been reported on Windows 10 x64 (and possibly other architectures or Windows versions).

This might be your problem if, after running `npm install` on a Gatsby site, you see compilation errors such as `node-gyp` or `sharp` or `binding.gyp not found`.

If you suspect this is your problem, download the [Visual Studio Community 2015 Package](https://www.visualstudio.com/products/visual-studio-community-vs) and install only the part of the package that interests us : `Programming languages > Visual C++ > Common tools for Visual Studio 2015`. Be sure to download the 2015 version of VS Community, not the 2017 version (see Note 1 below) ; you'll have to use the [search bar on the VS site](https://www.visualstudio.com/products/visual-studio-community-vs) to find it. You can uncheck everything else. You don't need to install the full VS2015 Express on your system and this won't mess up your existing VS201x installs.

![Common tools for Visual Studio 2015 inside the VS 2015 Community Package](https://i.stack.imgur.com/J1aet.png)

Then run the commands on Gatsby:

```powershell
npm uninstall node-gyp -g
npm config set python python2.7
npm config set msvs_version 2015
npm cache clean -f
npm install
```

You should then be all set.

If that still doesn't work, refer to the [`node-gyp` npm package homepage](https://www.npmjs.com/package/node-gyp) for further instructions and contact the `node-gyp`team on [GitHub](https://github.com/nodejs/node-gyp/issues).

Note 1 : the Visual Studio Community 2017 surely contains the package too but we weren't able to find it. If you found it, run `npm config set msvs_version 2017` instead and report it here with a screenshot!