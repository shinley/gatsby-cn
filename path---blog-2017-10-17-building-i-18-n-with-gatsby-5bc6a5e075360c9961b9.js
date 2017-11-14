webpackJsonp([0xb7527f3cd4e6],{583:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Languages are a key part of who we are; they are an expression of our identity. Serving users content in their own language is a powerful thing, and it allows you to include nuances and specific cultural references in a way Google Translate just wouldn’t allow.</p>\n<p>When we were looking for a new framework for the new <a href="https://doopoll.co">doopoll</a> marketing site, we knew we’d want to support i18n from the start.</p>\n<p>We were wowed with Gatsby’s simplicity and speed, but couldn’t find any clear process for supporting i18n. With a little bit of digging and experimenting, we’ve found that it’s just as easy as the rest of the process.</p>\n<p>Here is how we set up i18n for our Gatsby marketing site, and a few tips along the way.</p>\n<hr>\n<h2 id="quick-intro-to-i18n"><a href="#quick-intro-to-i18n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick intro to i18n</h2>\n<p>Just in case you’re new to i18n, don’t worry, it’s pretty simple! All we do is take hard-coded strings like “Hello” and replace them with a variable so that when the language changes, so does the string.</p>\n<p>So for example rather than write <code>&#x3C;h1>Hello&#x3C;/h1></code>. I might write <code>&#x3C;h1>{t(hello)}</code> (more on this later), and the user would see ‘Hello’, ‘Bonjour’, or ‘Hola’ depending on what language they had switched to, and whether we’d added a translation for it.</p>\n<h3 id="tip-a-quick-note-on-language-codes"><a href="#tip-a-quick-note-on-language-codes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TIP: A quick note on language codes</h3>\n<p><a href="https://www.science.co.il/language/Codes.php">Each language has a unique code</a>. We use this code to reference a language in our code. If you see a hyphen and then some letters after it, they refer to the locale. So for example:</p>\n<p>en = English cy = Welsh es = Spanish en-GB = British English en-US = American English</p>\n<p>The locale allows us to make changes to spelling (for example, “colour” vs. “color”), but can also be used for other functions such as currency.</p>\n<h2 id="working-with-translators"><a href="#working-with-translators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with translators</h2>\n<p>At doopoll we speak multiple languages, but just like design, development, and copywriting, translation requires time and skill to get it right. That’s why we work with our awesome friends at <a href="https://applingua.com/">Applingua</a> who handle all of our translation, and push new strings straight to our Git Repo </p>\n<p>There are other options out there. You can even crowd source your translations! However, in our experience, if you’re going to be updating your site regularly it pays to build a good working relationship with a translator. They will understand your brand, and how to effectively communicate your tone of voice in a different language.</p>\n<h2 id="choosing-a-package"><a href="#choosing-a-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Choosing a package</h2>\n<p>There are a few React i18n packages out there. We considered <a href="https://github.com/yahoo/react-intl">react-intl</a> and the community <a href="https://www.npmjs.com/package/gatsby-plugin-i18n">Gatsby plugin</a>. However, we opted for <a href="https://github.com/i18next/react-i18next/">react-i18next</a> because we use a version of i18next in our core Meteor app, and our translators are familiar with the system. <a href="https://react.i18next.com/">It’s well documented too</a>.</p>\n<p>We also wanted to use a non-specific Gatsby solution so we can use a similar implementation in other projects.</p>\n<p>To get started, you’ll need to install a few packages:</p>\n<p><code>npm i -S i18next i18next-xhr-backend i18next-browser-languagedetector react-i18next</code></p>\n<h2 id="setting-up"><a href="#setting-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting up</h2>\n<p>This is straight from the <a href="https://react.i18next.com/components/i18next-instance.html">i18n code examples</a>, but copied here for convenience. You’ll need to create an i18n component and import it somewhere (we did it in our index layout):</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&apos;i18next&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Backend <span class="token keyword">from</span> <span class="token string">&apos;i18next-xhr-backend&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> LanguageDetector <span class="token keyword">from</span> <span class="token string">&apos;i18next-browser-languagedetector&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactI18nextModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react-i18next&apos;</span><span class="token punctuation">;</span>\n\ni18n\n  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Backend<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LanguageDetector<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>reactI18nextModule<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    fallbackLng<span class="token punctuation">:</span> <span class="token string">&apos;en&apos;</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// have a common namespace used around the full app</span>\n    ns<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&apos;translations&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    defaultNS<span class="token punctuation">:</span> <span class="token string">&apos;translations&apos;</span><span class="token punctuation">,</span>\n\n    debug<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    interpolation<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      escapeValue<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// not needed for react!!</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    react<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      wait<span class="token punctuation">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> i18n<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="locales"><a href="#locales" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Locales</h2>\n<p>Next we’ll create a folder for our translation strings. We used a folder called locales in our src folder (react-i18next likes that!). Within the locales folder we create a folder for each language using the language code. Then within that we create a JSON file for each component we want to translate.</p>\n<p>For our site we’re currently supporting English and Welsh, so our locales folder looks like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- src\n    - locales\n        - en\n            - PageHeader.json\n            - PricingPlan.json\n        ...\n        - cy\n            - PageHeader.json\n            - PricingPlan.json\n        ...</code></pre>\n      </div>\n<p>The <code>PageHeader</code> component in the <code>en</code> folder might look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span><span class="token string">&quot;Shwmae, bonjour, and hola!&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;Available in English, Welsh, French, and Spanish, with more translations coming soon. doopoll is great for local, multi-lingual, and global organisations.&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>And the <code>cy</code> component would look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span><span class="token string">&quot;Shwmae, bonjour, a hola!&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;Ar gael yn Saesneg, Cymraeg, Ffrangeg a Sbaeneg, gyda rhagor o gyfieithiadau&apos;n dod yn fuan. Mae doopoll yn wych ar gyfer sefydliadau lleol, amlieithog a byd-eang.&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="tip-using-the-locales-folder-with-gatsby"><a href="#tip-using-the-locales-folder-with-gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TIP: Using the locales folder with Gatsby</h3>\n<p>To get the locales folder into the right place for Gatsby we just need to add a little hook to our <code>gatsby-node.js</code> file. It copies the locales folder post build and gets everything in the right place:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;fs-extra&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;path&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span><span class="token function-variable function">onPostBuild</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&apos;Copying locales&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  fs<span class="token punctuation">.</span><span class="token function">copySync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&apos;/src/locales&apos;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&apos;/public/locales&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="using-with-a-component"><a href="#using-with-a-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using with a component</h2>\n<p>With the packages installed and locales setup, we’re ready to wire up a component!</p>\n<p>React-i18next uses a HOC to wrap your component and provide some props to handle language switching. Here’s our <code>PageHeader</code> component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> translate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react-i18next&apos;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PageHeader</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>PageHeader<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&apos;heading&apos;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&apos;description&apos;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&apos;PageHeader&apos;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>PageHeader<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Pretty simple! The string provided to <code>translate</code> is the corresponding JSON file name for the translation, and the second instance is the component itself. We keep these names the same to make it easier to match up translation files and components.</p>\n<h3 id="tip-react-helmet"><a href="#tip-react-helmet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TIP: React Helmet</h3>\n<p>You can also use translation strings for page titles! Here’s an example with React Helmet:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>Pricing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Helmet</span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&apos;heading&apos;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  \n</code></pre>\n      </div>\n<h2 id="switching-languages"><a href="#switching-languages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Switching Languages</h2>\n<p>Finally, to make it easy for our users to switch language we need to create a little component. Here’s an example from our site:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">&apos;classnames&apos;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> translate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react-i18next&apos;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">LanguageSwitcher</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> i18n <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> language<span class="token punctuation">:</span> i18n<span class="token punctuation">.</span>language <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeLanguage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeLanguage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> language<span class="token punctuation">:</span> nextProps<span class="token punctuation">.</span>i18n<span class="token punctuation">.</span>language <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleChangeLanguage</span><span class="token punctuation">(</span>lng<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> i18n <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    i18n<span class="token punctuation">.</span><span class="token function">changeLanguage</span><span class="token punctuation">(</span>lng<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">renderLanguageChoice</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token punctuation">,</span> label <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">const</span> buttonClass <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">&apos;LanguageSwitcher__button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token string">&apos;LanguageSwitcher__button--selected&apos;</span><span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>language <span class="token operator">===</span> code\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span></span>\n        <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>buttonClass<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChangeLanguage</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> languages <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">&apos;en&apos;</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">&apos;English&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">&apos;cy&apos;</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">&apos;Cymraeg&apos;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>LanguageSwitcher<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token punctuation">{</span>languages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderLanguageChoice</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&apos;LanguageSwitcher&apos;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>LanguageSwitcher<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is a pretty simple component. We’re setting the <code>language</code> state based on the i18n prop so that we can check which language is currently active and show that in our menu.</p>\n<p>The <code>handleLanguageChange</code> function just wraps the <code>react-i18n</code> function passed in as a prop through <code>translate</code>. Pretty much everything is handled for us. Hooray! </p>\n<h2 id="finishing-up"><a href="#finishing-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Finishing up</h2>\n<p>As you can see, i18n in Gatsby is actually pretty simple when you know how! We had to work a few things out for ourselves (the locales folder being one of them!), so hopefully reading this will allow you to get started serving international users even quicker.</p>',
excerpt:"Languages are a key part of who we are; they are an expression of our identity. Serving users content in their own language is a powerful…",timeToRead:6,fields:{slug:"/blog/2017-10-17-building-i18n-with-gatsby/"},frontmatter:{excerpt:null,image:null,date:"October 17th 2017",rawDate:"2017-10-17T00:00:00.000Z",canonicalLink:null,publishedAt:null,title:"Building i18n with Gatsby",imageAuthor:null,imageAuthorLink:null,imageTitle:null,showImageInArticle:null,author:{id:"Samuel Goudie",bio:"Cofounder & Head of Product at https://doopoll.co",twitter:"@sgoudie",avatar:{childImageSharp:{resolutions:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Crect width='100%25' height='100%25' fill='%23f6f2f8'/%3E%3Cpath d='M10 5c-2.2 2.2-2.5 3.7-1 6 .8 1.2 1 1 1-.7 0-2.6 3.5-3.9 7.6-2.9 2.2.6 2.5.4 2.2-1.6-.4-3.3-6.8-3.8-9.7-.9m1.4 12c-1.2 2 1.3 3.8 4.5 3.3 2.2-.3 3-1 2.8-2-.4-2-6.2-2.9-7.3-1.2m7.2 4.3c-.3.9 0 1.8.6 2 1 .3.9.8 0 1.8-3.2 3.3-1.6 4.9 4.6 4.9 7.4 0 8.5-1.3 2.8-3.5-2.4-.9-5-2.8-5.9-4.2-1.2-2-1.6-2.2-2.1-1m-10.3 2c.4 1.6 0 1.8-2 1.3-1.7-.5-2.4-.2-2.4.8 0 .8-.7 1.6-1.5 2C-.9 28.7 1.3 30 7 30c5.3 0 6-.2 6-2 0-1.1.5-2 1-2 .7 0 1.8-.7 2.6-1.5 1.4-1.3 1.2-1.5-1.5-1.5-1.7 0-3.1-.4-3.1-1 0-.5-1-.8-2-.7-1.6 0-2 .7-1.6 2' fill='%23e0d6eb' fill-rule='evenodd'/%3E%3C/svg%3E",width:63,height:63,src:"/static/samuel-goudie-dc6e5869628527325f591d179bce7bc7-4a2e8.jpg",srcSet:"/static/samuel-goudie-dc6e5869628527325f591d179bce7bc7-4a2e8.jpg 1x,\n/static/samuel-goudie-dc6e5869628527325f591d179bce7bc7-53944.jpg 1.5x,\n/static/samuel-goudie-dc6e5869628527325f591d179bce7bc7-bd4ff.jpg 2x,\n/static/samuel-goudie-dc6e5869628527325f591d179bce7bc7-6257f.jpg 3x"}}},fields:{slug:"/contributors/samuel-goudie/"}}}}},pathContext:{slug:"/blog/2017-10-17-building-i18n-with-gatsby/",prev:{fields:{slug:"/blog/2017-10-16-making-website-building-fun/",package:null},frontmatter:{title:"Making website building fun",draft:null,canonicalLink:null,publishedAt:null}},next:{fields:{slug:"/blog/2017-10-20-from-wordpress-to-developing-in-react-starting-to-see-it/",package:null},frontmatter:{title:"From WordPress to Developing in React — Starting to See It",draft:null,canonicalLink:null,publishedAt:null}}}}}});
//# sourceMappingURL=path---blog-2017-10-17-building-i-18-n-with-gatsby-5bc6a5e075360c9961b9.js.map