import React from "react"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

const imgStyle = {
  width: `10%`,
  minWidth: `25px`,
  maxWidth: `100px`,
  marginLeft: `7.5%`,
  marginRight: `7.5%`,
};

const media = [
  {
    icon: github,
    name: `GitHub`,
    to: "https://github.com/dragonprevost"
  },
  {
    icon: linkedin,
    name: `LinkedIn`,
    to: "https://www.linkedin.com/in/dragonprevost/"
  },
  {
    icon: email,
    name: `Mail`,
    to: "mailto:dragon@dkp.io"
  },
];

const MediaBar = () => {
  return(
    <div>
      { media.map( ( item, i ) => {
        return(
          <span>
            <a href={ item.to }>
              <img
                src={ item.icon }
                style={ imgStyle }
                alt={ item.name }
                key={ i }
              />
            </a>
          </span>
        )
      } ) }
    </div>
  )
}

export default MediaBar
