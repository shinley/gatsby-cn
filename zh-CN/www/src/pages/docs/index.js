import React from "react"
import Link from "gatsby-link"

import SidebarBody from "../../components/sidebar-body"
import docsSidebar from "./doc-links.yaml"
import Container from "../../components/container"
import presets from "../../utils/presets"

class IndexRoute extends React.Component {
  render() {
    return (
      <Container>
        <h1 css={{ marginTop: 0 }}>开始</h1>
        <p>Gatsby is a blazing-fast static site generator for React.</p>
        <h2>安装 Gatsby{`'`}s 命令行工具</h2>
        <p>
          <code>npm install --global gatsby-cli</code>
        </p>
        <h2>使用Gatsby命令行工具</h2>
        <ol>
          <li>
            创建一个新站点.
            {` `}
            <code>gatsby new gatsby-site</code>
          </li>
          <li>
            <code>cd gatsby-site</code>
          </li>
          <li>
            <code>gatsby develop</code> —Gatsby会启动一个热加载的开发环境，可以通过地址 <code>localhost:8000</code>访部
          </li>
          <li>
            尝试编辑<code>src/pages</code>目录下的javascript页面。保存修改后浏览器会实时加载修改。
          </li>
          <li>
            <code>gatsby build</code> — Gatsby将执行优化
            为您的网站生成静态HTML和按路由生成JavaScript代码绑定。
          </li>
          <li>
            <code>gatsby serve</code> — Gatsby启动一个本地的HTML服务器测试你的网站。
          </li>
        </ol>
        <h2>使用其它 starters</h2>
        <p>
          运行 <code>gatsby new</code> 安装默认的 Gatsby starter.
          有{` `}
          <Link to="/docs/gatsby-starters/">
            很多其它的官方的或者社区提供的starters
          </Link>
          {` `}
          你可以使用来构建你的Gatsby站点。
        </p>
        <h2>Work through the tutorial</h2>
        <p>
          它带着你从头开始建造一个Gatsby漂亮的网站。
          {` `}
          <Link to="/tutorial/">查看教程</Link>.
        </p>
        <div
          css={{
            display: `block`,
            [presets.Tablet]: {
              display: `none`,
            },
          }}
        >
          <h2>文档</h2>
          <SidebarBody inline yaml={docsSidebar} />
        </div>
      </Container>
    )
  }
}

export default IndexRoute
