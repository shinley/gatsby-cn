webpackJsonp([0xdb0067052342],{608:function(e,s){e.exports={data:{markdownRemark:{html:'<p>With Webpack you can <strong><code>import</code> a file right in a JavaScript module</strong>. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the <code>src</code> attribute of an image or the <code>href</code> of a link to a PDF.</p>\n<p>To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">data URI</a> instead of a path. This applies to the following file extensions: svg, jpg, jpeg, png, gif, mp4, webm, wav, mp3, m4a, aac, and oga.</p>\n<p>Here is an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">&apos;./logo.png&apos;</span><span class="token punctuation">;</span> <span class="token comment">// Tell Webpack this JS file uses this image</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /logo.84287d09.png</span>\n\n<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Import result is the URL of your image</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">&quot;Logo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This ensures that when the project is built, Webpack will correctly move the images into the public folder, and provide us with correct paths.</p>\n<p>This works in CSS too:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.Logo</span> <span class="token punctuation">{</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(./logo.png)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Webpack finds all relative module references in CSS (they start with <code>./</code>) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.</p>\n<p>Please be advised that this is also a custom feature of Webpack.</p>\n<p>An alternative way of handling static assets is described in the next section.</p>\n<h2 id="using-the-static-folder"><a href="#using-the-static-folder" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the <code>static</code> Folder</h2>\n<h3 id="adding-assets-outside-of-the-module-system"><a href="#adding-assets-outside-of-the-module-system" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Assets Outside of the Module System</h3>\n<p>You can also add other assets to a <code>static</code> folder at the root of your project.</p>\n<p>Note that we normally encourage you to <code>import</code> assets in JavaScript files instead. This mechanism provides a number of benefits:</p>\n<ul>\n<li>Scripts and stylesheets get minified and bundled together to avoid extra network requests.</li>\n<li>Missing files cause compilation errors instead of 404 errors for your users.</li>\n<li>Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.</li>\n</ul>\n<p>However there is an <strong>escape hatch</strong> that you can use to add an asset outside of the module system.</p>\n<p>If you put a file into the <code>static</code> folder, it will <strong>not</strong> be processed by Webpack. Instead it will be copied into the public folder untouched. E.g. if you add a file named <code>sun.jpg</code> to the static folder, it’ll be copied to <code>public/sun.jpg</code>. To reference assets in the <code>static</code> folder, you need to use a special variable called <code>__PATH_PREFIX__</code>. You will need to make sure you set <code>pathPrefix</code> in your gatsby-config.js for this to work (set it to <code>/</code> if you don’t have a path prefix).</p>\n<p>In JavaScript code, you can use <code>__PATH_PREFIX__</code> for similar purposes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Note: this is an escape hatch and should be used sparingly!</span>\n  <span class="token comment">// Normally we recommend using `import` for getting asset URLs</span>\n  <span class="token comment">// as described in &#x201C;Adding Images and Fonts&#x201D; above this section.</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>__PATH_PREFIX__ <span class="token operator">+</span> <span class="token string">&apos;/img/logo.png&apos;</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">&quot;Logo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Keep in mind the downsides of this approach:</p>\n<ul>\n<li>None of the files in <code>static</code> folder get post-processed or minified.</li>\n<li>Missing files will not be called at compilation time, and will cause 404 errors for your users.</li>\n<li>Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.</li>\n</ul>\n<h3 id="when-to-use-the-static-folder"><a href="#when-to-use-the-static-folder" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When to Use the <code>static</code> Folder</h3>\n<p>Normally we recommend importing <a href="#adding-a-stylesheet">stylesheets</a>, <a href="#adding-images-and-fonts">images, and fonts</a> from JavaScript. The <code>static</code> folder is useful as a workaround for a number of less common cases:</p>\n<ul>\n<li>You need a file with a specific name in the build output, such as <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest"><code>manifest.webmanifest</code></a>.</li>\n<li>You have thousands of images and need to dynamically reference their paths.</li>\n<li>You want to include a small script like <a href="http://github.hubspot.com/pace/docs/welcome/"><code>pace.js</code></a> outside of the bundled code.</li>\n<li>Some library may be incompatible with Webpack and you have no other option but to include it as a <code>&#x3C;script></code> tag.</li>\n</ul>',excerpt:"With Webpack you can  import  a file right in a JavaScript module . This tells Webpack to include that file in the bundle. Unlike CSS…",timeToRead:4,frontmatter:{title:"Adding Images, Fonts, and Files"},parent:{__typename:"File",relativePath:"docs/adding-images-fonts-files.md"}}},pathContext:{slug:"/docs/adding-images-fonts-files/"}}}});
//# sourceMappingURL=path---docs-adding-images-fonts-files-167c143c6031008699d7.js.map