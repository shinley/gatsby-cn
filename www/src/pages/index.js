import React from "react"
import Link from "gatsby-link"

import presets from "../utils/presets"
import colors from "../utils/colors"
import { rhythm, scale, options } from "../utils/typography"
import { JSIcon, WebpackIcon, ReactJSIcon, GraphQLIcon } from "../assets/logos"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import Container from "../components/container"
import MastheadContent from "../components/masthead"
import MastheadBg from "../components/masthead-bg"
import UsedBy from "../components/used-by"
import Cards from "../components/cards"
import Card from "../components/card"
import CardHeadline from "../components/card-headline"
import Diagram from "../components/diagram"
import BlogPostPreviewItem from "../components/blog-post-preview-item"
import FuturaParagraph from "../components/futura-paragraph"
import CtaButton from "../components/cta-button"
import TechWithIcon from "../components/tech-with-icon"

class IndexRoute extends React.Component {
  render() {
    const blogPosts = this.props.data.allMarkdownRemark
    return (
      <div css={{ position: `relative` }}>
        <MastheadBg />
        <div
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
          }}
        >
          <MastheadContent />
          <UsedBy />
          <div
            css={{
              padding: rhythm(presets.gutters.default / 2),
              flex: `0 0 100%`,
              [presets.Hd]: {
                padding: vP,
                paddingTop: 0,
              },
            }}
          >
            <Cards>
              <Card>
                <CardHeadline>
                  Modern web tech without the headache
                </CardHeadline>
                <FuturaParagraph>
                  享受最新网络技术的强大功能 –{` `}
                  <TechWithIcon icon={ReactJSIcon}>React.js</TechWithIcon>,{` `}
                  <TechWithIcon icon={WebpackIcon}>Webpack</TechWithIcon>,{` `}
                  现代JavaScript和CSS等等，所有这一切都将启动并等待您的开始。
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>Bring your own data</CardHeadline>
                <FuturaParagraph>
                  Gatsby丰富的数据插件生态系统允许您使用您想要的数据构建网站- 来自一个或多个来源：
                  使用 {` `}<TechWithIcon icon={GraphQLIcon}>GraphQL</TechWithIcon>将数据从无头CMS，
                  SaaS服务，API，数据库，文件系统等更直接地导入您的页面。
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>Scale to the entire internet</CardHeadline>
                <FuturaParagraph>
                Gatsby.js是互联网规模。 忘记复杂的部署数据库和服务器及其昂贵，
                耗时安装成本，维护和缩放恐惧。 Gatsby.js建立您的网站作为“静态”文件，
                可以轻松部署数十项服务。
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline css={{ color: presets.brandDark }}>
                  Future-proof your website
                </CardHeadline>
                <FuturaParagraph>
                  不要用过去十年的技术建立一个网站。 网络的未来是移动的，JavaScript和API - {` `}
                  <a href="https://jamstack.org/">JAMstack</a>.
                  每个网站是一个Web应用程序，每个Web应用程序是一个网站。 Gatsby.js是你一直在等待的通用JavaScript框架。
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>
                  <em css={{ color: presets.brand, fontStyle: `normal` }}>
                    Static
                  </em>
                  {` `}
                  Progressive Web Apps
                </CardHeadline>
                <FuturaParagraph>
                Gatsby.js是一个静态PWA（Progressive Web App）生成器。
                 您可以将代码和数据分开。 盖茨比只加载关键的HTML，CSS，
                数据和JavaScript，以便您的网站加载尽可能快。 一旦加载，
                盖茨比预取其他网页的资源，所以点击网站感觉非常快。
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>Speed past the competition</CardHeadline>
                <FuturaParagraph>
                Gatsby.js建立最快的网站。 不需要等待请求时生成页面，而是预先生成页面，
                并将其提升到全球服务器云端 - 随时随地传送给用户，无论他们身在何处。
                </FuturaParagraph>
              </Card>

              <Diagram
                containerCSS={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  flex: `1 1 100%`,
                  borderTop: `1px solid ${presets.veryLightPurple}`,
                }}
              />

              <div css={{ flex: `1 1 100%` }}>
                <Container hasSideBar={false}>
                  <div
                    css={{
                      textAlign: `center`,
                      padding: `${rhythm(1)} 0 ${rhythm(2)}`,
                    }}
                  >
                    <h1 css={{ marginTop: 0 }}>Curious yet?</h1>
                    <FuturaParagraph>
                      It only takes a few minutes to get up and running!
                    </FuturaParagraph>
                    <CtaButton to="/docs/" overrideCSS={{ marginTop: `1rem` }}>
                      Get Started
                    </CtaButton>
                  </div>
                </Container>
              </div>

              <div
                css={{
                  borderTop: `1px solid ${presets.veryLightPurple}`,
                  flex: `1 1 100%`,
                  [presets.Tablet]: {
                    paddingTop: rhythm(1),
                  },
                }}
              >
                <Container
                  hasSideBar={false}
                  css={{ maxWidth: rhythm(30), paddingBottom: `0 !important` }}
                >
                  <h2
                    css={{
                      textAlign: `left`,
                      marginTop: 0,
                      color: presets.brand,
                      [presets.Tablet]: {
                        paddingBottom: rhythm(1),
                      },
                    }}
                  >
                    Latest from the Gatsby blog
                  </h2>
                  {blogPosts.edges.map(({ node }) => (
                    <BlogPostPreviewItem
                      post={node}
                      key={node.fields.slug}
                      css={{ marginBottom: rhythm(2) }}
                    />
                  ))}
                  <CtaButton
                    to="/blog/"
                    overrideCSS={{ marginBottom: rhythm(2) }}
                  >
                    Read More
                  </CtaButton>
                </Container>
              </div>
            </Cards>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "gatsby-explanation.png" }) {
      childImageSharp {
        sizes(maxWidth: 870) {
          src
          srcSet
          sizes
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/docs.blog/" }
      }
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`
