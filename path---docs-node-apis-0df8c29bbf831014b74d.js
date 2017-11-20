webpackJsonp([0xb5b20e5f85f2],{634:function(n,a){n.exports={data:{allDocumentationJs:{edges:[{node:{name:"createLayouts",description:{childMarkdownRemark:{html:'<p>Tell plugins to add layouts. This extension point is called only after the initial\nsourcing and transformation of nodes plus creation of the GraphQL schema are\ncomplete so you can query your data in order to create layouts.</p>\n<p>See also the documentation for <a href="/docs/bound-action-creators/#createLayout"><code>createLayout</code></a>.</p>'}},returns:[],examples:[{highlighted:'exports<span class="token punctuation">.</span><span class="token function-variable function">createLayouts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> boundActionCreators <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n boundActionCreators<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   component<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`src/templates/custom-layout.js`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   id<span class="token punctuation">:</span> <span class="token string">\'custom\'</span><span class="token punctuation">,</span> <span class="token comment">// optional - if not provided the filename will be used as id</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span>'}],params:[]}},{node:{name:"createPages",description:{childMarkdownRemark:{html:'<p>Tell plugins to add pages. This extension point is called only after the initial\nsourcing and transformation of nodes plus creation of the GraphQL schema are\ncomplete so you can query your data in order to create pages.</p>\n<p>See also <a href="/docs/bound-action-creators/#createPage">the documentation for the boundActionCreator <code>createPage</code></a>.</p>'}},returns:[{title:"returns"}],examples:[{highlighted:'exports<span class="token punctuation">.</span><span class="token function-variable function">createPages</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> boundActionCreators <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> blogPostTemplate <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`src/templates/blog-post.js`</span></span><span class="token punctuation">)</span>\n    <span class="token comment">// Query for markdown nodes to use in creating pages.</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span>\n      <span class="token function">graphql</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token string">`\n      {\n        allMarkdownRemark(limit: 1000) {\n          edges {\n            node {\n              fields {\n                slug\n              }\n            }\n          }\n        }\n      }\n    `</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">reject</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// Create blog post pages.</span>\n        result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>edge <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>fields<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// required</span>\n              component<span class="token punctuation">:</span> <span class="token function">slash</span><span class="token punctuation">(</span>blogPostTemplate<span class="token punctuation">)</span><span class="token punctuation">,</span>\n              context<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                slug<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>fields<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'}],params:[]}},{node:{name:"createPagesStatefully",description:{childMarkdownRemark:{html:'<p>Like <code>createPages</code> but for plugins who want to manage creating and removing\npages themselves in response to changes in data <em>not</em> managed by Gatsby.\nPlugins implementing <code>createPages</code> will get called regularly to recompute\npage information as Gatsby’s data changes but those implementing\n<code>createPagesStatefully</code> will not.</p>\n<p>An example of a plugin that uses this extension point is the internal plugin\n<a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby/src/internal-plugins/component-page-creator">component-page-creator</a>\nwhich monitors the <code>src/pages</code> directory for the adding and removal of JS\npages. As its source of truth, files in the pages directory, is not known by\nGatsby, it needs to keep its own state about its world to know when to\nadd and remove pages.</p>'}},returns:[],examples:[],params:[]}},{node:{name:"generateSideEffects",description:{childMarkdownRemark:{html:"<p>Tell plugins with expensive “side effects” from queries to start running\nthose now. This is a soon-to-be-replaced API only currently in use by\n<code>gatsby-plugin-sharp</code>.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"modifyBabelrc",description:{childMarkdownRemark:{html:"<p>Let plugins extend/mutate the site’s Babel configuration.\nThis API will change before 2.0 as it needs still to be converted to use\nRedux actions.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"modifyWebpackConfig",description:{childMarkdownRemark:{html:'<p>Let plugins extend/mutate the site’s webpack configuration.</p>\n<p>Refer to the <a href="/docs/add-custom-webpack-config/">Add custom webpack config docs\npage</a> for detailed documentation on\nmodifying webpack docs).</p>'}},returns:[],examples:[],params:[]}},{node:{name:"onCreateLayout",description:{childMarkdownRemark:{html:"<p>Called when a new layout is created. This extension API is useful\nfor programmatically manipulating layouts created by other plugins</p>"}},returns:[],examples:[],params:[]}},{node:{name:"onCreateNode",description:{childMarkdownRemark:{html:'<p>Called when a new node is created. Plugins wishing to extend or\ntransform nodes created by other plugins should implement this API.</p>\n<p>See also the documentation for <a href="/docs/bound-action-creators/#createNode"><code>createNode</code></a>\nand <a href="/docs/bound-action-creators/#createNodeField"><code>createNodeField</code></a></p>'}},returns:[],examples:[{highlighted:'exports<span class="token punctuation">.</span><span class="token function-variable function">onCreateNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> boundActionCreators <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createNode<span class="token punctuation">,</span> createNodeField <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators\n  <span class="token comment">// Transform the new node here and create a new node or</span>\n  <span class="token comment">// create a new node field.</span>\n<span class="token punctuation">}</span>'}],params:[]}},{node:{name:"onCreatePage",description:{childMarkdownRemark:{html:'<p>Called when a new page is created. This extension API is useful\nfor programmatically manipulating pages created by other plugins e.g.\nif you want paths without trailing slashes.</p>\n<p>See the guide <a href="/docs/creating-and-modifying-pages/">Creating and Modifying Pages</a>\nfor more on this API.</p>'}},returns:[],examples:[],params:[]}},{node:{name:"onPostBootstrap",description:{childMarkdownRemark:{html:"<p>Called at the end of the bootstrap process after all other extension APIs have been called.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"onPostBuild",description:{childMarkdownRemark:{html:"<p>The last extension point called after all other parts of the build process\nare complete.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"onPreBootstrap",description:{childMarkdownRemark:{html:"<p>Called at the start of the bootstrap process before any other extension APIs are called.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"onPreBuild",description:{childMarkdownRemark:{html:"<p>The first extension point called during the build process. Called after the bootstrap has completed but before the build steps start.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"onPreExtractQueries",description:{childMarkdownRemark:{html:"<p>Run before GraphQL queries/fragments are extracted from JavaScript files. Useful for plugins\nto add more JavaScript files with queries/fragments e.g. from node_modules.</p>\n<p>See gatsby-transformer-remark and gatsby-source-contentful for examples.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"preprocessSource",description:{childMarkdownRemark:{html:"<p>Ask compile-to-js plugins to process source to JavaScript so the query\nrunner can extract out GraphQL queries for running.</p>"}},returns:[],examples:[],params:[]}},{node:{name:"resolvableExtensions",description:{childMarkdownRemark:{html:"<p>Let’s plugins implementing support for other compile-to-js add to the list\nof “resolvable” file extensions. Gatsby supports <code>.js</code> and <code>.jsx</code> by default.</p>"}},returns:[{title:"returns"}],examples:[],params:[]}},{node:{name:"setFieldsOnGraphQLNodeType",description:{childMarkdownRemark:{html:'<p>Called during the creation of the GraphQL schema. Allows plugins\nto add new fields to the types created from data nodes. Many transformer\nplugins use this to add fields that take arguments.</p>\n<ul>\n<li><a href="/packages/gatsby-transformer-remark/"><code>gatsby-transformer-remark</code></a>\nadds an “excerpt” field where the user when writing their query can specify\nhow many characters to prune the markdown source to.</li>\n<li><a href="/packages/gatsby-transformer-sharp/"><code>gatsby-transformer-sharp</code></a> exposes\nmany image transformation options as GraphQL fields.</li>\n</ul>'}},returns:[],examples:[],params:[]}},{node:{name:"sourceNodes",description:{childMarkdownRemark:{html:'<p>Extension point to tell plugins to source nodes.</p>\n<p>See also the documentation for <a href="/docs/bound-action-creators/#createNode"><code>createNode</code></a>.</p>'}},returns:[],examples:[{highlighted:'exports<span class="token punctuation">.</span><span class="token function-variable function">sourceNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> boundActionCreators <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createNode <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators\n  <span class="token comment">// Create nodes here.</span>\n<span class="token punctuation">}</span>'}],params:[]}}]}},pathContext:{}}}});
//# sourceMappingURL=path---docs-node-apis-0df8c29bbf831014b74d.js.map