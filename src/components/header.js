import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Tabs from "./tabs"

const tabs = [
  {to: '/', text: 'Home'},
  {to: '/portfolio', text: 'Portfolio'},
  {to: '/resume', text: 'Resume'},
  {to: '/contact', text: 'Contact'},
];

const createTabs = () => {
  return tabs.map( element => 
      <h3 style={{ margin: 0 }}>
        <Link
          to={element.to}
          style={{
            color: `grey`,
            textDecoration: `none`,
            padding: `0px 7px`,
          }}
        >
          {element.text}  
        </Link>
      </h3>
    );
}

const Header = ({ siteTitle, tabs }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `grey`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>

    <Tabs>
      { createTabs() }
    </Tabs>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
