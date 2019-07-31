import React from "react"

import MediaBar from "../components/media-bar"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const bodyStyle = {
  textAlign: `center`,
  top: `50%`,
};

const imgStyle = {
  borderRadius: `50%`,
  width: `30%`,
  minWidth: `200px`,
};

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={ bodyStyle }>
      <h1>{`Dragon Prevost`}</h1>
      <p>{ `Computer Science - Embedded Development - Web Development` }</p>
      <img src={"https://avatars2.githubusercontent.com/u/22180881?s=460&v=4"} alt="display" style={ imgStyle } />
      <MediaBar />
    </div> 
  </Layout>
)

/*
export const query = graphql`
  query{
    github {
      viewer {
        name
        repositories(last: 5) {
          nodes {
            name
            description
            url
          }
        }
      } 
    }
  }
`
*/
export default IndexPage 
