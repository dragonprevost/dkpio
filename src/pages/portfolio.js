import React, { Component } from "react"

import Project from "../components/project"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    title: `On Board Computer - UVic Aero`,
    description: `This micro-framework runs on a raspberry pi and operates several applications simultaneously. Designed for drone usage, this program serves live images and telemetry captured on a raspberry pi.`,
    imgSrc: `https://i.imgur.com/oFGynw3.png`,
    link: `https://github.com/uvic-aero/onboard-computer`,
    bullets: [ `Python`, `IoT`, `Raspberry Pi`],
  },
  {
    title: `MangOH Motion Service`,
    description: `This application is designed to operate on a MongOH 
      Red WP85 board. Using general input output this project uses pthreads 
      to probe the onboard bmi160 chip intermittently in order to detect a 
      significant motion on the board.`,
    imgSrc: `https://camo.githubusercontent.com/adb4b9535a9937bf4863047c2892434928c472af/68747470733a2f2f7777772e696e746d6174682e636f6d2f766563746f72732f696d672f3233352d33442d766563746f722e706e67`,
    link: `https://github.com/brnkl/motion-service`,
    bullets: [`Legato`, `C`, `Embedded`, `IoT`, ],
  },
  {
    title: `Portfolio`,
    description: `A webpage to ardvertise my skills and experience. Constructed using Gatsby and Github pages for fast performance and easy deployment.`, 
    imgSrc: `https://i.imgur.com/x5gkuG2.png`,
    link: `https://github.com/dragonprevost/portfolio`,
    bullets: [`Django`, `React`, `Python`, `JavaScript`, ],
  },
  {
    title: `Jimi`,
    description: `A web application that utilizes the Spotify API in order to structure a regional based collaborative playlist generator. All through an elegant web interface built on react.`, 
    link: `https://github.com/JoshuaCalder/jimi`,
    bullets: [`Django`, `React`, `Python`, `JavaScript`, ],
  },
];

class IndexPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      mobile: window.innerWidth < 805, 
    }
  }

  render(){
    return(
      <Layout>
        <SEO title="Home" />
        { projects.map( element => {
          return(
            <Project
              title={ element.title }
              description={ element.description }
              imgSrc={ !this.state.mobile? element.imgSrc : `` }
              link={ element.link }
              bullets={ element.bullets }
            />
          )
        }) }
      </Layout>
    )  
  }
}

export default IndexPage
