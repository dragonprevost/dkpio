import React from "react"

const linkStyle={
  color: `grey`,
  textDecoration: `none`,
}

const imgStyle={
  width:`300px`, 
  float: `right`
}

const Project = ( props ) => (
  <div>
    <div style={{
      float:`left`, 
      width: props.imgSrc? `60%`: `100%`, 
      minWidth: `300px`
      }}>
      <a style={ linkStyle } href={ props.link }>
        <span><h3>{ props.title }</h3></span>
      </a>
      <p>{ props.description }</p>
      <ul>
        { props.bullets.map( (element, i) => <li key={ i }>{ element }</li> ) }
      </ul>
    </div>
    { props.imgSrc && <div style={{ float: `right` }}>
      <a href={ props.imgSrc }>
        <img style={ imgStyle } src={ props.imgSrc } alt={ `project` }/>
      </a>
    </div> }
  </div>
)

export default Project;
