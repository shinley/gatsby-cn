webpackJsonp([0xa6bbcc67122b],{702:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-transformer-documentationjs"><a href="#gatsby-transformer-documentationjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-transformer-documentationjs</h1>\n<p>Uses <a href="http://documentation.js.org/">Documentation.js</a> to extract\ncode metadata (JSDocs is supported currently though Flow is also supported\nby Documentation.js and can be added to this plugin as well).</p>\n<p>It’s used on gatsbyjs.org and can be seen in use on several pages\nthere e.g. <a href="https://www.gatsbyjs.org/docs/node-apis/">https://www.gatsbyjs.org/docs/node-apis/</a></p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-transformer-documentationjs</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<p>Add the plugin to your <code>gatsby-config.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-transformer-documentationjs`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Ensure that there’s an instance of <code>gatsby-source-filesystem</code> that’s\npointed at your source code e.g.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-transformer-documentationjs`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-filesystem`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`source`</span></span><span class="token punctuation">,</span>\n      path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/../src/`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Then you can write GraphQL queries pulling out JSDoc comments like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token punctuation">{</span>\n  allDocumentationJs <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        name\n        description <span class="token punctuation">{</span>\n          childMarkdownRemark <span class="token punctuation">{</span>\n            html\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        returns <span class="token punctuation">{</span>\n          title\n        <span class="token punctuation">}</span>\n        examples <span class="token punctuation">{</span>\n          raw\n          highlighted\n        <span class="token punctuation">}</span>\n        params <span class="token punctuation">{</span>\n          name\n          type <span class="token punctuation">{</span>\n            name\n          <span class="token punctuation">}</span>\n          description <span class="token punctuation">{</span>\n            childMarkdownRemark <span class="token punctuation">{</span>\n              html\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-transformer-documentationjs Uses  Documentation.js  to extract\ncode metadata (JSDocs is supported currently though Flow is also…",timeToRead:1,fields:{title:"gatsby-transformer-documentationjs"},parent:{__typename:"File",relativePath:"gatsby-transformer-documentationjs/README.md"}}},pathContext:{slug:"/packages/gatsby-transformer-documentationjs/"}}}});
//# sourceMappingURL=path---packages-gatsby-transformer-documentationjs-955761f741ac7528ebe5.js.map