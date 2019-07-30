import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
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

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      mobile: false,
    };
  } 

  componentDidMount(){
    console.log(window.innerWidth);
    this.setState({ mobile: window.innerWidth < 700 });
  }

  createTabs = () => {
    return tabs.map( (element, i) => 
        <h3 key={ i } style={{ margin: 0 }}>
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
            { !this.state.mobile && <span style={{ verticalAlign: `top` }}>{ element.text }</span> } 
          </Link>
        </h3>
      );
  }


  render(){
    return (
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
              {this.props.siteTitle}
            </Link>
          </h3>
        </div>

        <Tabs>
          { this.createTabs() }
        </Tabs>
      </header>
    )
  }
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: `Default Title`,
}

export default Nav
