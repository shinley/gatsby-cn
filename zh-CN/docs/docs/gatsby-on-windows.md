---
title: Gatsby on Windows
---
## 设置您的环境来构建本地Node.js模块。

许多Gatsby插件和主题需要构建本地Node.js模块，例如， [Sharp（用于图像处理的普通的Gatsby依赖）](/packages/gatsby-plugin-sharp/)。 为此，您需要一个功能性的构建环境（Python和Visual C ++构建工具）。

在Windows上设置构建环境的简单方法是通过在管理PowerShell控制台上运行npm install windows-build-tools -g来安装[windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)软件包。 在安装此软件包时，它会下载并安装由Microsoft免费提供的Visual C ++ Build Tools 2015。 这些工具是编译流行的本地模块所必需的。 它也将安装Python 2.7，正确地配置你的机器和npm

### 如果npm安装仍然失败...

有时windows-build-tools不能正确安装所需的库。 当你已经正确的安装.NET开发环境的话。 这个问题已在Windows 10 x64（可能还有其他体系结构或Windows版本）中报告过。

如果在Gatsby站点上运行npm install之后，您可能会看到编译错误，例如node-gyp或sharp或binding.gyp未找到。

如果您怀疑这是您的问题，请下载Visual Studio Community 2015 Package，并只安装我们感兴趣的软件包部分：编程语言> Visual C ++> Visual Studio 2015的常用工具。 请务必下载2015版的VS社区，而不是2017版（请参阅下面的注1）; 你将不得不使用VS[网站上的搜索栏](https://www.visualstudio.com/products/visual-studio-community-vs)来找到它。 你可以取消选中其他的。 您不需要在系统上安装完整的VS2015 Express，这不会影响您现有的VS201x安装。

![VS 2015社区包内Visual Studio 2015的常用工具](然后在Gatsby上运行命令：)

然后在Gatsby上运行命令：

```powershell
npm uninstall node-gyp -g
npm config set python python2.7
npm config set msvs_version 2015
npm cache clean -f
npm install
```

你应该全部设置。

如果仍然不起作用，请参阅[node-gyp](https://www.npmjs.com/package/node-gyp) npm软件包主页以获取更多说明，并联系[GitHub](https://github.com/nodejs/node-gyp/issues)上的node-gypteam。

注1：Visual Studio Community 2017肯定也包含了这个包，但是我们无法找到它。 如果你找到了，请运行npm config set msvs_version 2017，并在屏幕上用截图报告。