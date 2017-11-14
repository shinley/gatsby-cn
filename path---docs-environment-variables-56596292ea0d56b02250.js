webpackJsonp([0xa12927138ff9],{625:function(n,a){n.exports={data:{markdownRemark:{html:'<p>You can easily provide environment variables to your site.</p>\n<p>For JavaScript loaded into the browser, just add a <code>.env.development</code> and/or <code>.env.production</code> file in your root folder for development or production builds respectively. The environment variables are embedded during build time using Webpack’s <a href="https://webpack.js.org/plugins/define-plugin/">DefinePlugin</a>. Because these variables are provided at build time, you will need restart your dev server or rebuild your site after changing them.</p>\n<p>In addition to <code>.env.*</code> files, any variable in the environment prefixed with <code>GATSBY_</code> will be made available in browser JavaScript.</p>\n<p>To add environment variables for the JavaScript run in node.js, e.g. in <code>gatsby-config.js</code> or <code>gatsby-node.js</code>, you can add environment variables the normal ways e.g. when calling gatsby on the command line or by adding environment variables through your hosting/build tool.</p>\n<p>If you want to access variables in <code>.env.*</code> files in your node.js code, use the NPM package <a href="https://www.npmjs.com/package/dotenv">dotenv</a>. Once you’ve installed dotenv and followed their setup instructions, you can use your environment variables in the same way as shown in the example below.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># Example .env.development file\n\nAPI_URL=https://dev.example.com/api\n\n\n# Example .env.production file\n\nAPI_URL=https://example.com/api</code></pre>\n      </div>\n<p>These variables will be available to your site as <code>process.env.API_URL</code>.</p>\n<h2 id="example-1"><a href="#example-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GATSBY_ASSETS_URL=http://s3.amazonaws.com/bucketname</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// usage</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>GATSBY_ASSETS_URL<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/logo.png`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>Logo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>You can not override certain environment variables as some are used internally for optimizations during build</p>\n</blockquote>\n<p>Reserved environment variables:</p>\n<ul>\n<li><code>NODE_ENV</code></li>\n<li><code>PUBLIC_DIR</code></li>\n</ul>',excerpt:"You can easily provide environment variables to your site. For JavaScript loaded into the browser, just add a  .env.development  and/or…",timeToRead:1,frontmatter:{title:"Environment Variables"},parent:{__typename:"File",relativePath:"docs/environment-variables.md"}}},pathContext:{slug:"/docs/environment-variables/"}}}});
//# sourceMappingURL=path---docs-environment-variables-56596292ea0d56b02250.js.map