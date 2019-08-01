import React from "react"

const Entry = ( props ) => {
  return(
    <div>
      {/* Header */}
      <h3>{ props.header }</h3>
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
