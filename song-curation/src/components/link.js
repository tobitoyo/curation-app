import React from "react";

const Link = (props) => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'cornflowerblue'
  }

  return(
    <a href={props.link} style={linkStyle} >{props.text}</a>
  )
}

export default Link