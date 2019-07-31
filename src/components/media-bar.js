import React from "react"


const imgStyle = {
  width: `10%`,
  minWidth: `25px`,
  marginLeft: `7.5%`,
  marginRight: `7.5%`,
};

const media = [
  {icon: "https://image.flaticon.com/icons/svg/25/25231.svg", name: `GitHub`, to: "https://github.com/dragonprevost"},
  {icon: "https://image.flaticon.com/icons/svg/25/25320.svg", name: `LinkedIn`, to: "https://www.linkedin.com/in/dragonprevost/" },
  {icon: "https://image.flaticon.com/icons/svg/25/25660.svg", name: `Twitter`, to: "https://twitter.com/DragonPrevost" },
  {icon: "https://image.flaticon.com/icons/svg/25/25236.svg", name: `Mail`, to: "mailto:dragon@dkp.io" },
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
