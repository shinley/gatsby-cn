webpackJsonp([0xfffa56dc84c8],{649:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-link"><a href="#gatsby-link" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-link</h1>\n<p>A <code>&#x3C;Link></code> component for Gatsby.</p>\n<p>It’s a wrapper around <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md">React Router’s Link component</a> that adds enhancements specific to Gatsby. All props are passed through\nto React Router’s Link.</p>\n<p>You can set the <code>activeStyle</code> or <code>activeClassName</code> prop to add styling attributes to the rendered element when it matches the current URL. If either of these props are set, then <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md">React Router’s NavLink component</a> will be used instead of Link.</p>\n<p>Gatsby does per-route code splitting. This means that when navigating to a new\npage, the code chunks necessary for that page might not be loaded. This is bad.\nAny unnecessary latency when changing pages should be avoided. So to avoid that\nGatsby preloads code chunks and page data. Preloading is triggered by a link\nentering the viewport so it only prefetchs code/data chunks for pages the user\nis likely to navigate to.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-link</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<p>In JavaScript:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;gatsby-link&quot;</span>\n\n<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token operator">&lt;</span>Link\n      to<span class="token operator">=</span><span class="token string">&quot;/another-page/&quot;</span>\n      activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">&apos;red&apos;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">&gt;</span>\n    Another page\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="programmatic-navigation"><a href="#programmatic-navigation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Programmatic navigation</h2>\n<p>For cases when you can only use event handlers for navigation, you can use <code>navigateTo</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navigateTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;gatsby-link&quot;</span>\n\n<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token string">&apos;/example&apos;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="prefixed-paths-helper"><a href="#prefixed-paths-helper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prefixed paths helper</h2>\n<p>Gatsby allows you to <a href="/docs/path-prefix/">automatically prefix links</a> for sites hosted on Github Pages or other places where your site isn’t at the root of the domain.</p>\n<p>This can create problems during development as pathnames won’t be prefixed. To handle both, gatsby-link exports a helper function <code>withPrefix</code> that prepends the prefix during production but doesn’t in development.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withPrefix <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;gatsby-link&quot;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">IndexLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> location <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isHomepage <span class="token operator">=</span> location<span class="token punctuation">.</span>pathname <span class="token operator">===</span> <span class="token function">withPrefix</span><span class="token punctuation">(</span><span class="token string">&apos;/&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Welcome <span class="token punctuation">{</span>isHomepage <span class="token operator">?</span> <span class="token string">&apos;home&apos;</span> <span class="token punctuation">:</span> <span class="token string">&apos;aboard&apos;</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n      <span class="token punctuation">{</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-link A  <Link>  component for Gatsby. It’s a wrapper around  React Router’s Link component  that adds enhancements specific to Gatsby…",timeToRead:2,fields:{title:"gatsby-link"},parent:{__typename:"File",relativePath:"gatsby-link/README.md"}}},pathContext:{slug:"/packages/gatsby-link/"}}}});
//# sourceMappingURL=path---packages-gatsby-link-eea625967958f3dd8a80.js.map