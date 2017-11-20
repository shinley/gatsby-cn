webpackJsonp([73924303836528],{582:function(e,t){e.exports={data:{markdownRemark:{html:'<p><em>This article was originally published on <a href="http://dfjames.com/blog/site-generating-with-the-great-gatsbyjs">my portfolio site</a> on October 1, 2017.</em></p>\n<h1 id="site-generating-with-the-great-gatsbyjs"><a href="#site-generating-with-the-great-gatsbyjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Site generating with the great GatsbyJS</h1>\n<p>When someone mentions static site generation, many people think of <a href="https://jekyllrb.com/">Jekyll</a>. I had heard some good things about it and noticed it would allow me to build a blog quite easily. I was eager to learn something new and get something up and running that was more than just my usual WordPress theme. I was on the verge of rebuilding my portfolio site until a certain <a href="https://www.youtube.com/user/LevelUpTuts">Scott Tolinski</a> released a video on <a href="https://www.youtube.com/watch?v=b2H7fWhQcdE&#x26;feature=youtu.be">GatsbyJS</a>.</p>\n<p><a href="/">GatsbyJS</a> is a static site generator, similar to Jekyll, however it is written using <a href="https://reactjs.org/">React</a> and allows you to write your pages as React components! It is somewhat similar to create-react-app where almost all the scary Webpack config has been abstracted away from you and everything is setup ready to go, so you can get to the important stuff like…building the site! (If you are a fan of React and not convinced, the <a href="https://reactjs.org/">React website/docs</a> were just released using Gatsby!)</p>\n<p>I currently work for a <a href="http://chromatix.com.au">digital agency</a> where we create custom built <a href="https://wordpress.org/">WordPress</a> sites from scratch. I have been working here for almost 2 years and have only got to use React a few times, and never with WordPress unfortunately. The Gatsby project caught my eye because I wanted to create a site that was modern, fast, had blog capabilities, and gave me the opportunity to learn some more React and JavaScript. Another reason I ended up going with Gatsby was the promise that your project could be connected to various APIs or even a CMS of your choice.</p>\n<h2 id="the-magic-of-graphql-and-gatsby-plugins"><a href="#the-magic-of-graphql-and-gatsby-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The magic of GraphQL and Gatsby Plugins</h2>\n<p>Originally, following Scott’s and the official Gatsby tutorial, I had it pulling my content from good ol’ Markdown files. Then I saw it… too good to be true, the mention of connecting it to WordPress… I have been writing WordPress themes for almost 2 years now, so naturally this got me super excited. To have my back-end as WordPress (including <a href="https://www.advancedcustomfields.com/">ACF</a>) and the front-end in React… I had found the perfect place to test my front-end abilities.</p>\n<p>I was skeptical at first: would I have to parse large amounts of JSON to get the data I needed? I have never even interacted with the WordPress REST API, how will I query it?</p>\n<p>The answer… <a href="http://graphql.org/">GraphQL</a>. Gatsby ships with it and through an npm install of a <a href="https://www.gatsbyjs.org/docs/plugins/">gatsby-source plugin</a> of your choice and a tiny bit of a config, you can start querying in no time. I was amazed with how simple queries are using GraphQL. You look at them and you go “Huh, that’s it? Really?“. Gatsby even ships with an in-browser query tester so you can see exactly what data you are getting from your GraphQL queries. Wanna sort those blog posts by date? No problem, just add a flag.</p>\n<p>With very little configuration and the installation of a single plugin on my WordPress site, I began creating pages and pulling data from them using a simple GraphQL schema. Here is an example of my Projects page which includes pulling some ACF fields which were originally defined in my Projects page template:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// Pull the project page content from Wordpress</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> projectsPageQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\nquery projectsPageQuery {\n  wordpressPage(slug: {eq: &quot;projects&quot;}) {\n    id\n    title\n    content\n    childWordpressAcfField {\n      internal {\n        content\n      }\n    }\n  }\n}\n`</span></span>\n</code></pre>\n      </div>\n<p>Pulling blog posts was even easier! If you’d like to sort them by date, ID, title etc. you just add a simple flag to the query like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// Sort WordPress posts by date</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> postQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query getPostQuery {\n    allWordpressPost(sort: { fields: [date] }) {\n      edges {\n        node {\n          id\n          title\n          excerpt\n          slug\n          date\n        }\n      }\n    }\n  }\n`</span></span>\n</code></pre>\n      </div>\n<h2 id="wrap-up-and-future"><a href="#wrap-up-and-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wrap up and future</h2>\n<p>In just a few weekends I managed to rebuild my portfolio site with the blog I wanted. I’d highly recommend <a href="https://www.gatsbyjs.org/tutorial/">Gatsby</a> for anyone who has started getting acquainted with React. Before I started this project I didn’t know a lot about: * Static site generation/JAMstack * Creating a Progressive Web App (PWA) and what qualifies as one * React Router * GraphQL * WordPress REST API</p>\n<p>Moving forward with Gatsby, I’d like to extend my site to include pagination within the blog, use <a href="https://www.styled-components.com/">Styled Components</a> and ensure the site scores a 90+ overall on <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>, Google’s performance auditing tool.</p>\n<p>Another goal is for my team to start using it with client sites, as the sheer performance out of the box is amazing. My original WordPress (PHP based theme) was scoring around 70 for Performance, however without any optimizations, my Gatsby based site scored 94. Later it scored 99 with some minor optimizations. We have recently had many clients ask for highly performant websites and Progressive Web App’s. Gatsby will be perfect to bridge the gaps between WordPress and React and allow my team to achieve these goals with ease.</p>',excerpt:"This article was originally published on  my portfolio site  on October 1, 2017. Site generating with the great GatsbyJS When someone…",timeToRead:4,fields:{slug:"/blog/2017-10-05-portfolio-site-gatsby-wordpress/"},frontmatter:{excerpt:"Recreating my WordPress portfolio site using GatsbyJS, React and the WordPress REST API",image:{childImageSharp:{resize:{src:"/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-57c0c.jpg"},sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABjs5VKRwJP//EABsQAAICAwEAAAAAAAAAAAAAAAECAAMEERIi/9oACAEBAAEFAuSzXBdjHDy3y0V2A//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAZEAADAAMAAAAAAAAAAAAAAAAAARECEDH/2gAIAQEABj8CiEVZQU10/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEhMRH/2gAIAQEAAT8hg/WQrsWaL52YO8EbfdJBj//aAAwDAQACAAMAAAAQbD//xAAXEQADAQAAAAAAAAAAAAAAAAAAASER/9oACAEDAQE/EHIYj//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCVp//EABwQAQEAAwEAAwAAAAAAAAAAAAERACExUUFhof/aAAgBAQABPxAvlVhy4tWNw0Bx36fWPwVQW846+ZMd3qITFAVCw8uLAxb+Gf/Z",aspectRatio:1.7928994082840237,src:"/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-dade8.jpg",srcSet:"/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-a1caf.jpg 197w,\n/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-a92bb.jpg 393w,\n/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-dade8.jpg 786w,\n/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-73a49.jpg 1179w,\n/static/gatsby-article-cover-image-44162ebbe1f2344727c6ce74bbffc052-61bbc.jpg 1212w",sizes:"(max-width: 786px) 100vw, 786px"}}},date:"October 5th 2017",rawDate:"2017-10-05T00:00:00.000Z",canonicalLink:null,publishedAt:null,title:"Rebuilding my portfolio website with the great GatsbyJS and WordPress",imageAuthor:null,imageAuthorLink:null,imageTitle:null,showImageInArticle:null,author:{id:"David James",bio:"Front End Developer at https://chromatix.com.au",twitter:"@daviddeejjames",avatar:{childImageSharp:{resolutions:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='63' height='63' viewBox='0 0 63 63'%3E%3Crect width='100%25' height='100%25' fill='%23f6f2f8'/%3E%3Cpath d='M28 11.3c-4.7 2.4-2.8 4.7 4.1 4.7 1.9 0 2.8.6 3.2 2.2 1 3.7-.8 4.6-8.3 4.2-6.9-.4-9.4.8-4.5 2 1.4.4 2.5 1 2.5 1.6 0 .5.6.7 1.4.4.7-.3 1.6.2 2 1 .8 2.3 2.5 2 2-.3-.5-1.6-.2-1.9 1.5-1.4 1.2.3 2.1 1 2.1 1.5s.5.6 1 .3c1.4-.9 1.3-.5-1 4.4a12.8 12.8 0 0 1-4.5 5.3c-1.4.6-2.5 1.5-2.5 2 0 1.4 6.7.9 8-.7 1.6-1.9 3-1 3 1.8 0 1.5.3 1.8 1 1 .9-.8.9-1.7 0-3.3-1-1.8-.7-3 1.4-7.4 4.3-8.9 3.2-16.6-2.9-19.1-4.2-1.8-6.3-1.9-9.4-.2m-6.3 34.4c-5.5 2.6-6.3 3.9-7.2 11.5L14 63h44v-2.8c0-6.4-1.9-9.6-8-13.5l-6-3.9-4.2 3.1c-5.7 4.2-11.4 4.4-12.5.3l-.8-2.8-4.7 2.3' fill='%23e0d6eb' fill-rule='evenodd'/%3E%3C/svg%3E",width:63,height:63,src:"/static/david-james-130275af15a4d8b8e285dca11abfcf32-4a2e8.jpg",srcSet:"/static/david-james-130275af15a4d8b8e285dca11abfcf32-4a2e8.jpg 1x,\n/static/david-james-130275af15a4d8b8e285dca11abfcf32-53944.jpg 1.5x,\n/static/david-james-130275af15a4d8b8e285dca11abfcf32-bd4ff.jpg 2x,\n/static/david-james-130275af15a4d8b8e285dca11abfcf32-6257f.jpg 3x"}}},fields:{slug:"/contributors/david-james/"}}}}},pathContext:{slug:"/blog/2017-10-05-portfolio-site-gatsby-wordpress/",prev:{fields:{slug:"/blog/2017-10-03-smartive-goes-gatsby/",package:null},frontmatter:{title:"Why we choose Gatsby over Next.js and Wintersmith",draft:null,canonicalLink:null,publishedAt:null}},next:{fields:{slug:"/blog/2017-10-16-making-website-building-fun/",package:null},frontmatter:{title:"Making website building fun",draft:null,canonicalLink:null,publishedAt:null}}}}}});
//# sourceMappingURL=path---blog-2017-10-05-portfolio-site-gatsby-wordpress-862b96759998206cce14.js.map