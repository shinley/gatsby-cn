---
title: 自定义html.js
---
Gatsby使用React组件来服务器渲染核心Gatsby应用程序之外的HTML的

<head>
  和其他部分。</p> 
  
  <p>
    大多数网站应该使用Gatsby附带的默认html.js。 但是，如果您需要自定义网站的html.js，只需运行以下命令，将默认的一个复制到您的源代码树中：
  </p>
  
  <pre><code class="shell">cp .cache/default-html.js src/html.js
</code></pre>
  
  <p>
    然后根据需要进行修改。
  </p>
  
  <h3>
    必需的属性
  </h3>
  
  <p>
    注意：被渲染成页面的各种道具是例如 headComponents，preBodyComponents，body和postBodyComponents。
  </p>
  
  <h3>
    React Helmet
  </h3>
  
  <p>
    此外，您在html.js组件中呈现的任何内容都不会像其他组件一样在客户端中“live”(实时)生成。 如果你想动态更新你的
    
    <head>
      ，我们推荐使用<a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/">React Helmet</a></p> 
      
      <h3>
        目标容器
      </h3>
      
      <p>
        如果看到以下错误：Uncaught Error：_registerComponent（...）：目标容器不是DOM元素。 这意味着你的html.js缺少所需的“目标容器”。 在你的里面你必须有一个ID为___ gatsby的div，如：</p> 
        
        <pre><code class="jsx">&lt;div
  key={`body`}
  id="___gatsby"
  dangerouslySetInnerHTML={{ __html: this.props.body }}
/&gt;
</code></pre>