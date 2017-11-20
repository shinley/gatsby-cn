webpackJsonp([0x65c7095d84a2],{659:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-plugin-feed"><a href="#gatsby-plugin-feed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-plugin-feed</h1>\n<p>Create an RSS feed (or multiple feeds) for your Gatsby site.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-plugin-feed</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to Use</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nsiteMetadata <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`GatsbyJS`</span></span><span class="token punctuation">,</span>\n  description<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A fantastic new static site generator.`</span></span><span class="token punctuation">,</span>\n  siteUrl<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`https://www.gatsbyjs.org`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-plugin-feed`</span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Above is the minimal configuration required to begin working. If you wish to\ncustomize the query being executed to retrieve nodes, try this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-plugin-feed`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      query<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n        {\n          site {\n            siteMetadata {\n              title\n              description\n              siteUrl\n              site_url: siteUrl\n            }\n          }\n        }\n      `</span></span><span class="token punctuation">,</span>\n      feeds<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          serialize<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> query<span class="token punctuation">:</span> <span class="token punctuation">{</span> site<span class="token punctuation">,</span> allMarkdownRemark <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>edge <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                description<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>excerpt<span class="token punctuation">,</span>\n                url<span class="token punctuation">:</span> site<span class="token punctuation">.</span>siteMetadata<span class="token punctuation">.</span>siteUrl <span class="token operator">+</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>fields<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n                guid<span class="token punctuation">:</span> site<span class="token punctuation">.</span>siteMetadata<span class="token punctuation">.</span>siteUrl <span class="token operator">+</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>fields<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n                custom_elements<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">&apos;content:encoded&apos;</span><span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>html <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          query<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n                filter: {frontmatter: { draft: { ne: true } }}\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    fields { slug }\n                    frontmatter {\n                      title\n                      date\n                    }\n                  }\n                }\n              }\n            }\n          `</span></span><span class="token punctuation">,</span>\n          output<span class="token punctuation">:</span> <span class="token string">&apos;/rss.xml&apos;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>',excerpt:"gatsby-plugin-feed Create an RSS feed (or multiple feeds) for your Gatsby site. Install npm install --save gatsby-plugin-feed How to Use…",timeToRead:1,fields:{title:"gatsby-plugin-feed"},parent:{__typename:"File",relativePath:"gatsby-plugin-feed/README.md"}}},pathContext:{slug:"/packages/gatsby-plugin-feed/"}}}});
//# sourceMappingURL=path---packages-gatsby-plugin-feed-2711a0b08f5ad4c6dcc5.js.map