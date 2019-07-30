import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{`Welcome`}</h1>
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
