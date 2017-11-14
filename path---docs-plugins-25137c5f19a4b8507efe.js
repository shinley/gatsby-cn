webpackJsonp([50355500681693],{635:function(a,e){a.exports={data:{markdownRemark:{html:'<p>Plugins are Node.js packages that implement Gatsby APIs. They enable you to easily solve common website build problems e.g. setup Sass, add markdown support, process images, etc.</p>\n<p>For larger / complex sites, they let you modularize your site customizations into site-specific plugins.</p>\n<p>Gatsby has a large and growing set of plugins. See below for the <a href="#official-plugins">list of official plugins</a>. We’ll eventually add support here for searching and browsing both official plugins and community plugins published on NPM.</p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use?</h2>\n<p>Plugins are just Node.js packages meaning you install them like anything else in node using NPM.</p>\n<p>For example, <code>gatsby-transformer-json</code> is a package which adds support for JSON files to the Gatsby data layer.</p>\n<p>To install it, in the root of your site you run:</p>\n<p><code>npm install --save gatsby-transformer-json</code></p>\n<p>Then in your site’s <code>gatsby-config.js</code> you simply add <code>gatsby-transformer-json</code> to the plugins array like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token template-string"><span class="token string">`gatsby-transformer-json`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Plugins can take options. See each plugin page below for more detailed documentation on using each plugin.</p>\n<h2 id="locally-defined-plugins"><a href="#locally-defined-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Locally defined plugins</h2>\n<p>When you want to work on a new plugin, or maybe write one that is only relevant to your specific use-case, a locally defined plugin is more convenient than having to create an NPM package for it.</p>\n<p>You can place the code in the <code>plugins</code> folder in the root of your project like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>plugins\n&#x2514;&#x2500;&#x2500; my-own-plugin\n    &#x251C;&#x2500;&#x2500; gatsby-node.js\n    &#x2514;&#x2500;&#x2500; package.json</code></pre>\n      </div>\n<p>You still need to add the plugin to your <code>gatsby-config.js</code> like for plugins installed from NPM.</p>\n<p>Each plugin requires a package.json file, but the minimum content is just an empty object <code>{}</code>. The <code>name</code> and <code>version</code> fields are read from the package file. The name is used to identify the plugin when it mutates the GraphQL data structure. The version is used to clear the cache when it changes.</p>\n<p>For local plugins it is best to leave the version field empty. Gatsby will generate an md5-hash from all gatsby-* file contents and use that as the version. This way the cache is automatically flushed when you change the code of your plugin.</p>\n<p>If the name is empty it is inferred from the plugin folder name.</p>\n<p>Like all gatsby-* files, the code is not being processed by Babel. If you want to use JavaScript syntax which isn’t supported by your version of Node.js, you can place the files in a <code>src</code> subfolder and build them to the plugin folder root.</p>\n<h2 id="official-plugins"><a href="#official-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Official plugins</h2>\n<ul>\n<li><a href="/packages/gatsby-plugin-catch-links/">gatsby-plugin-catch-links</a></li>\n<li><a href="/packages/gatsby-plugin-coffeescript/">gatsby-plugin-coffeescript</a></li>\n<li><a href="/packages/gatsby-plugin-feed/">gatsby-plugin-feed</a></li>\n<li><a href="/packages/gatsby-plugin-glamor/">gatsby-plugin-glamor</a></li>\n<li><a href="/packages/gatsby-plugin-google-analytics/">gatsby-plugin-google-analytics</a></li>\n<li><a href="/packages/gatsby-plugin-google-tagmanager/">gatsby-plugin-google-tagmanager</a></li>\n<li><a href="/packages/gatsby-plugin-jss/">gatsby-plugin-jss</a></li>\n<li><a href="/packages/gatsby-plugin-manifest/">gatsby-plugin-manifest</a></li>\n<li><a href="/packages/gatsby-plugin-netlify/">gatsby-plugin-netlify</a></li>\n<li><a href="/packages/gatsby-plugin-nprogress/">gatsby-plugin-nprogress</a></li>\n<li><a href="/packages/gatsby-plugin-offline/">gatsby-plugin-offline</a></li>\n<li><a href="/packages/gatsby-plugin-preact/">gatsby-plugin-preact</a></li>\n<li><a href="/packages/gatsby-plugin-react-helmet/">gatsby-plugin-react-helmet</a></li>\n<li><a href="/packages/gatsby-plugin-sass/">gatsby-plugin-sass</a></li>\n<li><a href="/packages/gatsby-plugin-sharp/">gatsby-plugin-sharp</a></li>\n<li><a href="/packages/gatsby-plugin-sitemap/">gatsby-plugin-sitemap</a></li>\n<li><a href="/packages/gatsby-plugin-styled-components/">gatsby-plugin-styled-components</a></li>\n<li><a href="/packages/gatsby-plugin-twitter/">gatsby-plugin-twitter</a></li>\n<li><a href="/packages/gatsby-plugin-typescript/">gatsby-plugin-typescript</a></li>\n<li><a href="/packages/gatsby-remark-autolink-headers/">gatsby-remark-autolink-headers</a></li>\n<li><a href="/packages/gatsby-remark-copy-linked-files/">gatsby-remark-copy-linked-files</a></li>\n<li><a href="/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</a></li>\n<li><a href="/packages/gatsby-remark-responsive-iframe/">gatsby-remark-responsive-iframe</a></li>\n<li><a href="/packages/gatsby-remark-images/">gatsby-remark-images</a></li>\n<li><a href="/packages/gatsby-remark-smartypants/">gatsby-remark-smartypants</a></li>\n<li><a href="/packages/gatsby-source-contentful/">gatsby-source-contentful</a></li>\n<li><a href="/packages/gatsby-source-drupal/">gatsby-source-drupal</a></li>\n<li><a href="/packages/gatsby-source-filesystem/">gatsby-source-filesystem</a></li>\n<li><a href="/packages/gatsby-source-hacker-news/">gatsby-source-hacker-news</a></li>\n<li><a href="/packages/gatsby-source-lever/">gatsby-source-lever</a></li>\n<li><a href="/packages/gatsby-source-medium/">gatsby-source-medium</a></li>\n<li><a href="/packages/gatsby-source-mongodb/">gatsby-source-mongodb</a></li>\n<li><a href="/packages/gatsby-source-wordpress/">gatsby-source-wordpress</a></li>\n<li><a href="/packages/gatsby-transformer-documentationjs/">gatsby-transformer-documentationjs</a></li>\n<li><a href="/packages/gatsby-transformer-javascript-static-exports/">gatsby-transformer-javascript-static-exports</a></li>\n<li><a href="/packages/gatsby-transformer-json/">gatsby-transformer-json</a></li>\n<li><a href="/packages/gatsby-transformer-remark/">gatsby-transformer-remark</a></li>\n<li><a href="/packages/gatsby-transformer-sharp/">gatsby-transformer-sharp</a></li>\n<li><a href="/packages/gatsby-transformer-yaml/">gatsby-transformer-yaml</a></li>\n<li><a href="/packages/gatsby-transformer-toml/">gatsby-transformer-toml</a></li>\n</ul>\n<h2 id="official-components"><a href="#official-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Official components</h2>\n<ul>\n<li><a href="/packages/gatsby-link/">gatsby-link</a></li>\n<li><a href="/packages/gatsby-image/">gatsby-image</a></li>\n</ul>\n<h2 id="community-plugins"><a href="#community-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Community Plugins</h2>\n<ul>\n<li><a href="https://github.com/bskimball/gatsby-plugin-antd">gatsby-plugin-antd</a></li>\n<li><a href="https://github.com/aquilio/gatsby-plugin-copy">gatsby-plugin-copy</a></li>\n<li><a href="https://github.com/didierfranc/gatsby-plugin-google-fonts">gatsby-plugin-google-fonts</a></li>\n<li><a href="https://github.com/angeloocana/gatsby-plugin-i18n">gatsby-plugin-i18n</a></li>\n<li><a href="https://github.com/angeloocana/gatsby-plugin-i18n-tags">gatsby-plugin-i18n-tags</a></li>\n<li><a href="https://github.com/angeloocana/gatsby-plugin-i18n-readnext">gatsby-plugin-i18n-readnext</a></li>\n<li><a href="https://github.com/toriihq/gatsby-plugin-intercom-spa">gatsby-plugin-intercom-spa</a></li>\n<li><a href="https://github.com/atrauzzi/gatsby-plugin-protoculture">gatsby-plugin-protoculture</a></li>\n<li><a href="https://github.com/rongierlach/gatsby-plugin-purify-css">gatsby-plugin-purify-css</a></li>\n<li><a href="https://github.com/viatsko/gatsby-plugin-yandex-metrika">gatsby-plugin-yandex-metrika</a></li>\n<li><a href="https://github.com/ahmedelgabri/gatsby-plugin-klipse">gatsby-plugin-klipse</a></li>\n<li><a href="https://github.com/njosefbeck/gatsby-plugin-stripe-checkout">gatsby-plugin-stripe-checkout</a></li>\n<li><a href="https://github.com/njosefbeck/gatsby-plugin-stripe-elements">gatsby-plugin-stripe-elements</a></li>\n<li><a href="https://github.com/Rulikkk/gatsby-remark-emoji">gatsby-remark-emoji</a></li>\n<li><a href="https://github.com/JLongley/gatsby-remark-external-links">gatsby-remark-external-links</a></li>\n<li><a href="https://github.com/tumblbug/gatsby-source-workable">gatsby-source-workable</a></li>\n<li><a href="https://github.com/mosch/gatsby-source-github">gatsby-source-github</a></li>\n<li><a href="https://github.com/brandonmp/gatsby-source-google-sheets">gatsby-source-google-sheets</a></li>\n<li><a href="https://github.com/njosefbeck/gatsby-source-stripe">gatsby-source-stripe</a></li>\n</ul>',excerpt:"Plugins are Node.js packages that implement Gatsby APIs. They enable you to easily solve common website build problems e.g. setup Sass, add…",timeToRead:5,frontmatter:{title:"Plugins"},parent:{__typename:"File",relativePath:"docs/plugins.md"}}},pathContext:{slug:"/docs/plugins/"}}}});
//# sourceMappingURL=path---docs-plugins-25137c5f19a4b8507efe.js.map