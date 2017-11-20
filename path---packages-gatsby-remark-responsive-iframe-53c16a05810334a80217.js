webpackJsonp([0x863f5e8cfcc9],{690:function(a,e){a.exports={data:{markdownRemark:{html:'<h1 id="gatsby-remark-responsive-iframe"><a href="#gatsby-remark-responsive-iframe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-remark-responsive-iframe</h1>\n<p>Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a responsive elastic container with a fixed aspect ratio. This ensures that the iframe or object will scale proportionally and to the full width of its container. </p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-remark-responsive-iframe</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-transformer-remark`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token template-string"><span class="token string">`gatsby-remark-responsive-iframe`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h3 id="usage-in-markdown"><a href="#usage-in-markdown" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage in Markdown</h3>\n<p>This plugin requires both <code>width</code> and <code>height</code> attributes to be set on the iframe or object tag so that the correct aspect ratio can be calculated. Both unitless and pixel values are supported. If any other value is detected (for example a percentage width), the wrapper will not be applied.</p>\n<p>Example usage: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>This is a beautiful iframe:\n\n&lt;iframe url=&quot;http://www.example.com/&quot; width=&quot;600&quot; height=&quot;400&quot;&gt;&lt;/iframe&gt;</code></pre>\n      </div>',excerpt:"gatsby-remark-responsive-iframe Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a responsive elastic…",timeToRead:1,fields:{title:"gatsby-remark-responsive-iframe"},parent:{__typename:"File",relativePath:"gatsby-remark-responsive-iframe/README.md"}}},pathContext:{slug:"/packages/gatsby-remark-responsive-iframe/"}}}});
//# sourceMappingURL=path---packages-gatsby-remark-responsive-iframe-53c16a05810334a80217.js.map