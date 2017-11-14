webpackJsonp([0xd77b74e8020e],{580:function(e,t){e.exports={data:{markdownRemark:{html:'<p><em>This article was originally published on <a href="https://blog.smartive.ch/smartive-ch-goes-gatsby-js-27a056b3b817">our company blog</a> on September 27, 2017.</em></p>\n<h1 id="smartivech-goes-gatsby"><a href="#smartivech-goes-gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>smartive.ch goes Gatsby</h1>\n<p>At smartive, a Swiss-based web agency, we always saw the potential of static site generators. After using Wintersmith and Next.js we recently made the switch to Gatsby for our company site. A decision we don’t regret. Here’s why.</p>\n<h2 id="back-in-the-days"><a href="#back-in-the-days" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Back in the Days..</h2>\n<p>As mentioned we already built our company website using static site generators early on. Last year, we finally made the switch from our good old custom PHP application with little to no logic, which served us for about two years, to <a href="http://wintersmith.io/">Wintersmith</a>. At that time this was one of the leading static site generators based on Node.js. Since most of our applications at that time were already JavaScript based it seemed to be the perfect fit. The fact that our company was undergoing a complete rebranding in terms of our corporate identity came in quite handy as well.</p>\n<p>After running Wintersmith for almost a year we encountered its limits. Some of the major drawbacks at that time were:</p>\n<ul>\n<li>No code splitting, resulting in the client having to load a bunch of unnecessary JavaScript and CSS files</li>\n<li>Pulling in external resources, such as blog posts, was quite unhandy and sometimes even impossible</li>\n<li>Build process optimization was almost impossible and in our case resulted in a Webpack setup on top of Wintersmith which was not really maintainable</li>\n</ul>\n<h2 id="react-to-the-rescue"><a href="#react-to-the-rescue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React to the Rescue!</h2>\n<p>Since by the time we encountered the problems described above we already had deep knowledge of React we started looking for an alternative based on that hot new thing.</p>\n<p>The first thing that caught our attention was <a href="https://github.com/zeit/next.js/">Next.js</a>, as seemingly everyone going for a server-side rendered React app was using it. After some days hacking on our app we encountered some issues, especially when it came to frontend rendering. We chose <a href="https://prismic.io/">prismic.io</a> for our backend system which served all the content. Although this felt right at first but, as all of us are developers, working around the constraints of it just didn’t feel right.</p>\n<p>Luckily at that time Gatsby version 1.0 <a href="https://www.gatsbyjs.org/blog/gatsby-v1/">just got released</a> and we decided to give it a try during one of our so-called Hackdays. We instantly fell in love with the simplicity of the system. Our first approach was to just use all the components which we already had created for Next.js and backed it by simple JSON files containing the content we wanted to serve using the amazing yet simple GraphQL-based pull-in mechanism Gatsby provides. This was accomplished by using the <a href="https://www.npmjs.com/package/gatsby-transformer-json">gatsby-transformer-json plugin</a> internally. Keep in mind that our content rarely changes, so this was always the way we wanted it to be (without knowing for some time as we had to admit to ourselves).</p>\n<p>One of our main goals all along was to show <a href="https://blog.smartive.ch">our latest blog posts</a> on Medium. Unfortunately at that time there was no plugin to achieve this so we decided to write one ourselves. By the time of writing I’m proud to say we successfully did so and even <a href="https://github.com/gatsbyjs/gatsby/pull/1907">contributed it back to the community</a>. Make sure to check it out if you’re interested in a similar solution.</p>\n<p>The only thing left was to actually rebuild and deploy our site once a new blog post gets released on Medium. We chose <a href="https://ifttt.com/">IFTTT</a> for this task, mainly because of its simplicity. Every time IFTTT picks up a newly published blog post it triggers a GitLab CI pipeline using a webhook, which then rebuilds and deploys our application onto our Docker Cloud infrastructure.</p>\n<p>The result of our work using Gatsby is an outstanding <a href="https://developers.google.com/speed/pagespeed/insights/?url=https://smartive.ch&#x26;tab=desktop">Google PageSpeed score</a> thanks to the built-in code splitting and cache handling mechanisms. If you’re interested in how <a href="https://smartive.ch/">smartive.ch</a> is built you can have a look at our code <a href="https://github.com/smartive/smartive.ch">on GitHub</a>.</p>\n<p>We are really looking forward to build other cool stuff for our customers using Gatsby!</p>\n<hr>\n<p>If you have any questions about the way we built <a href="https://smartive.ch">smartive.ch</a> feel free to contact me on <a href="https://twitter.com/luagsh_mrn">Twitter</a>.</p>\n<p><em>Special thanks goes to my co-worker <a href="https://twitter.com/_deniaz">Robert Vogt</a> who did most of the work on our website and contributed the Medium plugin mentioned above.</em></p>',excerpt:"This article was originally published on  our company blog  on September 27, 2017. smartive.ch goes Gatsby At smartive, a Swiss-based web…",timeToRead:3,fields:{slug:"/blog/2017-10-03-smartive-goes-gatsby/"},frontmatter:{excerpt:"At smartive we always saw the potential of static site generators. We recently made the switch to Gatsby.js for our company site. A decision we don’t regret. Here’s why.",image:{childImageSharp:{resize:{src:"/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-2c40b.png"},sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVQoz7XTWyhDcRwH8A0hL5IoxiYReZC2KZeRF6Kdzd05I0puTx7ESLlkiidCojZtSEm8SHlTQi7JNR4mt4lZo7yIB5ef77+22gPJg1Of/qdT32//2xGJ/vORytV+qtox8V8yXUULvt8V5cMpfMIzmCHo55L5gBbOPAz7sA47UOwu08BHTEoB5QqNlJjFU0RKCeHbVnRqmfe9Thd8zfNhzoqKkFtBCGEZhJdB7ypdbOEsTRiXoIwV7gGdXdhoY+eQ9IZh8u1bpXBVOcUouEKU2eEJnPDYrTVmIzgBq0AenHDGCt9kKDw8sZLD+Ug9A0aSpPEUqdRSlFzdiZI7IJeHds7UjOCunrM0YHx1la3BJDhY4XVCRimZZxdpffuANneP2HLdqm8EIcnG85dgg2S2VzAIJqiHF7iCOjhmhW3x6cXU1jtChgETKXMq3WUOqYILZHtm1+lCsZfh7L2jcM4fwT3MUIHR6Cqagn4wiGIzq7wQHoJ3j5mdg+KnU27VTMchvAUzYIUVHMzoeM2+t+fVkUCeVM6lypRan9/u33YviVs1k5ilJReFkn/7Ob4AN0r5HF/3tUAAAAAASUVORK5CYII=",aspectRatio:1.781021897810219,src:"/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-92508.png",srcSet:"/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-aa2b0.png 197w,\n/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-7948f.png 393w,\n/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-92508.png 786w,\n/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-a6b51.png 1179w,\n/static/smartive-loves-gatsby-16ac80ecb6e60aa51e72ba8235f72052-c83ec.png 1464w",sizes:"(max-width: 786px) 100vw, 786px"}}},date:"October 3rd 2017",rawDate:"2017-10-03T00:00:00.000Z",canonicalLink:null,publishedAt:null,title:"Why we choose Gatsby over Next.js and Wintersmith",imageAuthor:null,imageAuthorLink:null,imageTitle:null,showImageInArticle:null,author:{id:"Moreno Feltscher",bio:"Full Stack Web Engineer and Partner at https://smartive.ch",twitter:"@luagsh_mrn",avatar:{childImageSharp:{resolutions:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Crect width='100%25' height='100%25' fill='%23f6f2f8'/%3E%3Cpath d='M3.9.5C3.5 2.1 3.6 11 4 11c1-.1 4.3-3 3.3-3-1.7 0-2.2-4.8-.6-5.4C8.4 1.9 7.5 0 5.4 0 4.6 0 4 .2 4 .5m14.4 8c-.6.7-1 1.6-.6 1.9.4.3-.1.6-1 .6-1 0-1.7.7-1.7 1.5s.9 1.5 2 1.5 2 .3 2 .8c0 .4-1.5.7-3.3.6-2 0-3.4.4-3.8 1.5-.6 1.4-.8 1.3-1.5-.4-2.2-5.6-5.4-4.6-5.6 1.8l-.2 5.2-.3-4.8C4 15.2 3.5 14 2.2 14 .8 14 .5 15 .4 19c0 2.7.3 4.7.8 4.4.4-.3.8 0 .8.5s-.4 1.3-1 1.6c-.6.3-1 1.5-1 2.6 0 3.2 6.8 2.7 7.6-.6.3-1.4 1.5-3 2.5-3.6 1-.5 2-2 2-3.2 0-2 .2-1.9 1 .6 1.2 3.1 4.2 3.6 7.6 1.2 2-1.4 2.5-1.3 5.6.5 4 2.4 4.5 1.9 4.1-5.5l-.3-7.3c0-2.2-.4-2.3-4.6-1.6-3 .4-4.5.3-4.5-.5 0-1.5-1.2-1.3-2.7.3m4.4 4.7c-1.8 1-2.4 3.9-.7 3.9 1 0 3.4-3.9 2.8-4.5-.2-.2-1.1 0-2 .6' fill='%23e0d6eb' fill-rule='evenodd'/%3E%3C/svg%3E",width:63,height:63,src:"/static/moreno-feltscher-42ee6e1fd5145b57cbf1c34d893db9b7-4a2e8.jpg",srcSet:"/static/moreno-feltscher-42ee6e1fd5145b57cbf1c34d893db9b7-4a2e8.jpg 1x,\n/static/moreno-feltscher-42ee6e1fd5145b57cbf1c34d893db9b7-53944.jpg 1.5x,\n/static/moreno-feltscher-42ee6e1fd5145b57cbf1c34d893db9b7-bd4ff.jpg 2x,\n/static/moreno-feltscher-42ee6e1fd5145b57cbf1c34d893db9b7-6257f.jpg 3x"}}},fields:{slug:"/contributors/moreno-feltscher/"}}}}},pathContext:{slug:"/blog/2017-10-03-smartive-goes-gatsby/",prev:{fields:{slug:"/blog/2017-10-01-migrating-my-blog-from-hexo-to-gatsby/",package:null},frontmatter:{title:"Migrating My Blog From Hexo To Gatsby",draft:null,canonicalLink:null,publishedAt:null}},next:{fields:{slug:"/blog/2017-10-05-portfolio-site-gatsby-wordpress/",package:null},frontmatter:{title:"Rebuilding my portfolio website with the great GatsbyJS and WordPress",draft:null,canonicalLink:null,publishedAt:null}}}}}});
//# sourceMappingURL=path---blog-2017-10-03-smartive-goes-gatsby-41e6f0dceed929b01010.js.map