webpackJsonp([0xf8f8e7a21ceb],{617:function(n,a){n.exports={data:{markdownRemark:{html:'<p>在Gatsby的数据系统中有两种类型的插件，“Source”和“transformer”插件。</p>\n<ul>\n<li>Source插件将来自远程或本地位置的“Source”数据转换为Gatsby调用的节点。</li>\n<li>Transformer插件将source插件提供的数据“transform”(转换) 为新的节点和/或节点字段。</li>\n</ul>\n<p>例如:</p>\n<p>Gatsby-source-filesystem插件从文件系统有关文件作为“sources”的数据。 它使用File类型创建节点，每个File节点对应于文件系统上的文件。 在每个节点上都有像absolutePath，extension，modifiedTime等的字段</p>\n<p>重要的是，由文件系统源插件创建的每个节点都包括文件的原始内容和媒体类型。</p>\n<p>媒体类型（也是MIME类型和内容类型）是识别在因特网上传输的文件/内容的格式的标准方式，例如 通过HTTP或通过电子邮件。 您可能熟悉诸如application/javascript，application/pdf，audio/mpeg，text/html，text/plain，image/jpeg等多种媒体类型。</p>\n<p>每个source插件负责为它们创建的节点设置媒体类型。 这样，源代码和transformer(转换) 插件可以轻松地一起工作。</p>\n<p>这不是必需的字段，但它是source 插件向transformers 指示存在仍然可以进一步处理的“raw”数据的方式。 它允许插件保持小而专注。 Source 插件不必对如何转换他们的数据有意见。 他们可以设置mediaType并将这个责任推到transformer 插件上。</p>\n<p>例如，服务通常允许您将内容添加为markdown。 如果你把这个标记放进Gatsby ，并创建一个新的节点，那么呢？ 你的源代码插件的用户如何将这种markdown 转换成他们可以在他们的网站中使用的HTML？ 幸运的是，你不必做任何事情。 只需为markdown内容创建一个节点，并将其mediaType设置为文本/标记，各种Gatsby markdown 的转换插件将会感知到您的节点并将其转换为HTML。</p>\n<p>数据源和转换插件之间的松散耦合使得Gatsby站点构建者能够快速地组装复杂的数据转换管道，而他们（和您的（源插件作者））的工作量很少。</p>\n<p>代码是什么样的？</p>\n<p>Source 插件是一个普通的NPM软件包。 它有一个可选的依赖关系的package.json，以及一个实现Gatsby的Node.js API的gatsby-node.js。 Gatsby支持将节点版本返回到 Node 4，并且由于通常需要使用更现代的node.js和JavaScript语法，所以许多插件都将代码写入src目录并编译代码。 所有在Gatsby仓库中维护的插件都遵循这种模式。</p>\n<p>你的gatsby-node.js应该是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>exports<span class="token punctuation">.</span>sourceNodes <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> boundActionCreators <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createNode <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators\n  <span class="token comment">// Create nodes here, generally by downloading data</span>\n  <span class="token comment">// from a remote API.</span>\n  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>REMOTE_API<span class="token punctuation">)</span>\n\n  <span class="token comment">// Process data into nodes.</span>\n  <span class="token comment">// data.forEach(datum =&gt; createNode(processDatum(datum)))</span>\n\n  <span class="token comment">// We&apos;re done, return.</span>\n  <span class="token keyword">return</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>请查看sourceNodes和createNode文档以获取有关实现这些API的详细文档。</p>\n<p>但是在高层次上，这些是source 插件的工作：</p>\n<ul>\n<li>确保本地数据与源代码同步并且100％准确。 如果你的源代码允许你添加一个updatedSince查询（或类似的东西），你可以存储上一次使用setPluginStatus获取数据的时间。</li>\n<li>使用精确的媒体类型，容易理解的有意义的类型和准确的contentDigest来创建节点。</li>\n<li>根据需要创建“Link”节点类型（请参阅API规范概念部分中的节点链接。</li>\n<li>返回promise或使用回调（第三参数）在完成Sourcing（采集）nodes时向Gatsby报告。 在您完成sourcing 或挂起之前，Gatsby 会继续等待您的指示完成。</li>\n</ul>',excerpt:"在Gatsby的数据系统中有两种类型的插件，“Source”和“transformer”插件。 Source插件将来自远程或本地位置的“Source”数据转换为Gatsby调用的节点。 Transformer插件将source插件提供的数据“transform…",timeToRead:1,frontmatter:{title:"创建一个Source插件"},parent:{__typename:"File",relativePath:"docs/create-source-plugin.md"}}},pathContext:{slug:"/docs/create-source-plugin/"}}}});
//# sourceMappingURL=path---docs-create-source-plugin-4f01625c97eb50734c89.js.map