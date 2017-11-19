import React from "react"
import Link from "gatsby-link"
import Container from "../components/container"

export default () => (
  <Container>
    <h1 css={{ marginTop: 0 }}>Gatsby.js 教程</h1>
    <p>
      嗨！ 我们很高兴你决定尝试使用盖茨比。 本教程已经有（所有部分都将被编写）五个部分，
      从开始开发和构建Gatsby站点到部署成品和优雅的高性能静态PWA，
    </p>
    <p>
    本教程适用于<em>所有人</em>！ 你不需要成为程序员或React.js专家。 我们会带你走过去的
    </p>

    <ol>
      <li>
        <Link to="/tutorial/part-one/">Gatsby的基本介绍</Link>
        {` `}— 开始新项目，开发和部署网站。
      </li>
      <li>
        <Link to="/tutorial/part-two/">
        在Gatsby中使用CSS介绍
        </Link>.  开发像Typography.js，CSS模块，Glamor，和样式化的组件的库。
      </li>
      <li>
        <Link to="/tutorial/part-three/">
          在Gatsby中开发构建内嵌的布局
        </Link>. 布局是网站的一部分，可以在多个页面（如页眉和页脚）之间重复使用。
      </li>
      <li>
        <Link to="/tutorial/part-four/">
          了解如何使用Gatsby的数据层。
        </Link>
        {` `}
        开发源代码和transformer插件。 介绍编程页面以及如何编写GraphQL查询。 
        在本教程的这一部分，我们将构建一个简单的MarkDown博客。
      </li>
      <li>
      完成并部署一个网站。 React Helmet。 我们将介绍如何在网站项目上进行最后的修改。
      </li>
    </ol>
  </Container>
)
