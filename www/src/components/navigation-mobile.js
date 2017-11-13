import React from "react"
import Link from "gatsby-link"

import {
  BlogIcon,
  CommunityIcon,
  DocsIcon,
  TutorialIcon,
} from "../assets/mobile-nav-icons"
import colors from "../utils/colors"
import presets from "../utils/presets"
import typography, { rhythm, scale, options } from "../utils/typography"

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link
    to={linkTo}
    css={{
      color: presets.brand,
      fontSize: scale(-1 / 2).fontSize,
      letterSpacing: `0.0075rem`,
      lineHeight: 1,
      padding: `${rhythm(options.blockMarginBottom / 4)} ${rhythm(
        options.blockMarginBottom
      )} ${rhythm(options.blockMarginBottom / 2)} `,
      textDecoration: `none`,
      textAlign: `center`,
    }}
  >
    <img src={icon} css={{ height: 32, display: `block`, margin: `0 auto` }} />
    <div>{label}</div>
  </Link>
)

export default () => (
  <div
    css={{
      position: `fixed`,
      display: `flex`,
      justifyContent: `space-around`,
      alignItems: `center`,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      borderTop: `1px solid ${presets.veryLightPurple}`,
      background: presets.sidebar,
      fontFamily: typography.options.headerFontFamily.join(`,`),
      [presets.Tablet]: {
        display: `none`,
      },
    }}
  >
    <MobileNavItem linkTo="/docs/" label="文档" icon={DocsIcon} />
    <MobileNavItem linkTo="/tutorial/" label="教程" icon={TutorialIcon} />
    <MobileNavItem
      linkTo="/community/"
      label="社区"
      icon={CommunityIcon}
    />
    <MobileNavItem linkTo="/blog/" label="博客" icon={BlogIcon} />
  </div>
)
