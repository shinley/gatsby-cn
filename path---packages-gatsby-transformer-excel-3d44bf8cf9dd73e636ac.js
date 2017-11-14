webpackJsonp([0xc4f7119e91a2],{702:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-transformer-excel"><a href="#gatsby-transformer-excel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-transformer-excel</h1>\n<p>Parses Excel files into JSON arrays.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p><code>npm install --save gatsby-transformer-excel</code></p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// In your gatsby-config.js</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-transformer-excel`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2 id="parsing-algorithm"><a href="#parsing-algorithm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsing algorithm</h2>\n<p>The parsing is powered by the <a href="https://git.io/xlsx">SheetJS / js-xlsx</a> library.\nEach row of each worksheet is converted into a node whose keys are determined\nby the first row and whose type is determined by the name of the worksheet.</p>\n<p>So if your project has a <code>letters.xlsx</code> with two worksheets:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>------ Sheet1 ------\n/|    A    |   B   |\n-+---------+-------+\n1| letter  | value |\n-+---------+-------+\n2|    a    |   97  |\n-+---------+-------+\n3|    b    |   98  |\n\n------ Sheet2 ------\n/|    A    |   B   |\n-+---------+-------+\n1| letter  | value |\n-+---------+-------+\n2|    A    |   65  |\n-+---------+-------+\n3|    B    |   66  |</code></pre>\n      </div>\n<p>the following nodes would be created:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> letter<span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">97</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;LettersXlsxSheet1&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> letter<span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">98</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;LettersXlsxSheet1&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> letter<span class="token punctuation">:</span> <span class="token string">&apos;A&apos;</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;LettersXlsxSheet2&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> letter<span class="token punctuation">:</span> <span class="token string">&apos;B&apos;</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">66</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&apos;LettersXlsxSheet2&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2 id="how-to-query"><a href="#how-to-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to query</h2>\n<p>You’d be able to query your letters like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token punctuation">{</span>\n  allLettersXlsxSheet1 <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        letter\n        value\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Which would return:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span>\n  allLettersXlsxSheet1<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    edges<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          letter<span class="token punctuation">:</span> <span class="token string">&apos;a&apos;</span>\n          value<span class="token punctuation">:</span> <span class="token number">97</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          letter<span class="token punctuation">:</span> <span class="token string">&apos;b&apos;</span>\n          value<span class="token punctuation">:</span> <span class="token number">98</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"gatsby-transformer-excel Parses Excel files into JSON arrays. Install npm install --save gatsby-transformer-excel How to use Parsing…",timeToRead:1,fields:{title:"gatsby-transformer-excel"},parent:{__typename:"File",relativePath:"gatsby-transformer-excel/README.md"}}},pathContext:{slug:"/packages/gatsby-transformer-excel/"}}}});
//# sourceMappingURL=path---packages-gatsby-transformer-excel-3d44bf8cf9dd73e636ac.js.map