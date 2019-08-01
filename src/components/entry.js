import React from "react"

const Entry = ( props ) => {
  return(
    <div>
      {/* Header */}
      <h4>{ props.header }</h4>
      {/* Duration */}
      <h6>{ props.duration }</h6>
      {/* Text */}
      <p>{ props.body }</p>
      {/* Bullets */}
      <ul>
        { props.bullets.map( (element, i) => <li>{element}</li> ) }
      </ul>
    </div>
  )
}

export default Entry
