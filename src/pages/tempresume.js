import React, { Component } from "react"
import GoogleDocsViewer from "react-google-docs-viewer"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Resume extends Component{
  constructor(props){
    super(props);
    this.state = {
      file: '',
      loading: true,
    }
  }
  
  doneLoading = () => {
    this.setState({ loading: false });
  }

  render(){
    return(
      <Layout>
        <SEO title="Resume" />
        <h1>Resume</h1>
        <GoogleDocsViewer
          width={ "80%" }
          height={ "80%" }
          fileUrl={ "https://drive.google.com/file/d/1-9YayIWedxxTRSH3ubOCRNdVA-34pffO/view?usp=sharing" }
        />
      </Layout>
    )
  }
}

export default Resume
