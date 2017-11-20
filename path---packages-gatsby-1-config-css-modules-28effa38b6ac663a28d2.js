webpackJsonp([1552110863937],{647:function(s,n){s.exports={data:{markdownRemark:{html:'<h1 id="gatsby-1-config-css-modules"><a href="#gatsby-1-config-css-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-1-config-css-modules</h1>\n<p>CSS Modules configuration for Gatsby v1 plugins</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>yarn add --dev gatsby-plugin-sass</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<p>Example from <a href="../gatsby-plugin-sass/"><code>gatsby-plugin-sass</code></a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// in gatsby-node.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> cssModulesConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gatsby-1-config-css-modules&quot;</span><span class="token punctuation">)</span>\n\nexports<span class="token punctuation">.</span><span class="token function-variable function">modifyWebpackConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> stage <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> precision <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> sassFiles <span class="token operator">=</span> <span class="token regex">/\\.s[ac]ss$/</span>\n  <span class="token keyword">const</span> sassModulesFiles <span class="token operator">=</span> <span class="token regex">/\\.module\\.s[ac]ss$/</span>\n  <span class="token keyword">const</span> sassLoader <span class="token operator">=</span> precision <span class="token operator">?</span> <span class="token template-string"><span class="token string">`sass?precision=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>precision<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`sass`</span></span>\n\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>stage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token template-string"><span class="token string">`develop`</span></span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      config<span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`sass`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> sassFiles<span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> sassModulesFiles<span class="token punctuation">,</span>\n        loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`style`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`css`</span></span><span class="token punctuation">,</span> sassLoader<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n      config<span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`sassModules`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> sassModulesFiles<span class="token punctuation">,</span>\n        loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`style`</span></span><span class="token punctuation">,</span> <span class="token function">cssModulesConfig</span><span class="token punctuation">(</span>stage<span class="token punctuation">)</span><span class="token punctuation">,</span> sassLoader<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> config\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// etc.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-1-config-css-modules CSS Modules configuration for Gatsby v1 plugins Install yarn add --dev gatsby-plugin-sass How to use Example…",timeToRead:1,fields:{title:"gatsby-1-config-css-modules"},parent:{__typename:"File",relativePath:"gatsby-1-config-css-modules/README.md"}}},pathContext:{slug:"/packages/gatsby-1-config-css-modules/"}}}});
//# sourceMappingURL=path---packages-gatsby-1-config-css-modules-28effa38b6ac663a28d2.js.map