webpackJsonp([0x9ad623712a82],{660:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-plugin-glamor"><a href="#gatsby-plugin-glamor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-plugin-glamor</h1>\n<p>Provide drop-in support for using the css-in-js library\n<a href="https://github.com/threepointone/glamor">Glamor</a> including optimized\nserver rendering.</p>\n<p>In addition, you can also use this plugin to make <a href="https://github.com/paypal/glamorous"><code>glamorous</code></a> 💄 work with server side rendering and start writing React components that carry their styles with them.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-plugin-glamor</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<p>First add the plugin to your <code>gatsby-config.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-plugin-glamor`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Glamor <a href="https://github.com/threepointone/glamor/blob/master/docs/howto.md">provides many convenient ways to style your\ncomponents</a>.\nOne particularly convenient (and suggested) way is to use its <code>css</code> prop. It\nworks exactly the same as the <a href="https://facebook.github.io/react/docs/dom-elements.html#style">default <code>style</code>\nprop</a> except it\nsupports the entire CSS language. So things not supported by inline styles are\nsupported with Glamor like pseudo-classes/-elements, <code>@media</code> queries,\nparent/child/contextual selectors, etc.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div\n      css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        margin<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`0 auto`</span></span><span class="token punctuation">,</span>\n        border<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`1px solid gray`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>h1\n        css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          color<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`red`</span></span><span class="token punctuation">,</span>\n          <span class="token comment">// Psuedo styles are supported!</span>\n          <span class="token string">&apos;:hover&apos;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            textDecoration<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`underline`</span></span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token comment">// As are media queries!</span>\n          <span class="token string">&apos;@media (min-width: 400px)&apos;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            color<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`blue`</span></span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">&gt;</span>\n        This is the title<span class="token operator">!</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        The body<span class="token operator">!</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The <code>css</code> prop works on both the default DOM components as well as most\ncustom components. Under the hood, Glamor converts the <code>css</code> prop to a\n<code>className</code> prop so the <code>css</code> prop will work as long as your or the 3rd\nparty component you’re using uses <code>className</code>.</p>',excerpt:"gatsby-plugin-glamor Provide drop-in support for using the css-in-js library\n Glamor  including optimized\nserver rendering. In addition, you…",timeToRead:1,fields:{title:"gatsby-plugin-glamor"},parent:{__typename:"File",relativePath:"gatsby-plugin-glamor/README.md"}}},pathContext:{slug:"/packages/gatsby-plugin-glamor/"}}}});
//# sourceMappingURL=path---packages-gatsby-plugin-glamor-0c55e97d2ec584c33d09.js.map