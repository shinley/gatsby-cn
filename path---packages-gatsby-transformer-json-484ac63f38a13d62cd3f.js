webpackJsonp([0xaf34be2b725e],{704:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-transformer-json"><a href="#gatsby-transformer-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-transformer-json</h1>\n<p>Parses JSON files. Supports arrays of objects and single objects.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-transformer-json</code></p>\n<p>You also need to have <code>gatsby-source-filesystem</code> installed and configured so it points to your files.</p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-transformer-json`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2 id="parsing-algorithm"><a href="#parsing-algorithm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsing algorithm</h2>\n<p>You can choose to structure your data as arrays of objects in individual files\nor as single objects spread across multiple files.</p>\n<h3 id="array-of-objects"><a href="#array-of-objects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array of Objects</h3>\n<p>The algorithm for arrays is to convert each item in the array into\na node.</p>\n<p>So if your project has a <code>letters.json</code> with <code>[{ "value": "a" }, { "value": "b" }, { "value": "c" }]</code> then the following three nodes would be created.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">&apos;c&apos;</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h3 id="single-object"><a href="#single-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Single Object</h3>\n<p>The algorithm for single JSON objects is to convert the object defined at the\nroot of the file into a node. The type of the node is based on the name of the\nparent directory.</p>\n<p>For example, lets say your project has a data layout like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>data/\n    letters/\n        a.json\n        b.json\n        c.json</code></pre>\n      </div>\n<p>Where each of <code>a.json</code>, <code>b.json</code> and <code>c.json</code> look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string">&apos;value&apos;</span><span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string">&apos;value&apos;</span><span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string">&apos;value&apos;</span><span class="token punctuation">:</span> <span class="token string">&apos;c&apos;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Then the following three nodes would be created.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">&apos;c&apos;</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> <span class="token string">&apos;Letters&apos;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2 id="how-to-query"><a href="#how-to-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to query</h2>\n<p>Regardless of whether you choose to structure your data in arrays of objects or\nsingle objects, you’d be able to query your letters like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token punctuation">{</span>\n  allLettersJson <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        value\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Which would return:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span>\n  allLettersJson<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    edges<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          value<span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          value<span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          value<span class="token punctuation">:</span> <span class="token string">&apos;c&apos;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-transformer-json Parses JSON files. Supports arrays of objects and single objects. Install npm install --save gatsby-transformer-json…",timeToRead:2,fields:{title:"gatsby-transformer-json"},parent:{__typename:"File",relativePath:"gatsby-transformer-json/README.md"}}},pathContext:{slug:"/packages/gatsby-transformer-json/"}}}});
//# sourceMappingURL=path---packages-gatsby-transformer-json-484ac63f38a13d62cd3f.js.map