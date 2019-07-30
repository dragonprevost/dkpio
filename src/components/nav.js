import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HomeIcon from "@material-ui/icons/home"
import PersonIcon from "@material-ui/icons/person"
import CollectionsIcon from "@material-ui/icons/collections"
import AssignmentIcon from "@material-ui/icons/assignment"
import Tabs from "./tabs"

const tabs = [
  { to: '/', text: 'Home', icon: <HomeIcon /> },
  { to: '/portfolio', text: 'Portfolio', icon: <CollectionsIcon /> },
  { to: '/resume', text: 'Resume', icon: <AssignmentIcon />},
  { to: '/contact', text: 'Contact', icon: <PersonIcon />},
];

const mobile = window.innerWidth < 600;

const createTabs = () => {
  return tabs.map( element => 
      <h3 style={{ margin: 0 }}>
        <Link
          to={element.to}
          style={{
            color: `grey`,
            fontFamily: `Raleway`,
            textDecoration: `none`,
            padding: `0px 7px`,
          }}
        >
          { element.icon }
          { !mobile && <span style={{ verticalAlign: `top` }}>{ element.text }</span> } 
        </Link>
      </h3>
    );
}

const Nav = ({ siteTitle }) => (
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
            fontFamily: `Raleway`,
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

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
