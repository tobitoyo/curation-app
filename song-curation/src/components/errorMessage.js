import React from "react";

const Error = (props) => {

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'solid .15rem red',
    borderRadius: '.8rem',
    padding: '.5rem',
    marginBottom: '1rem'
  }


    
  return(
    <div style={errorStyle}>{props.message}</div>
  )
   
}

export default Error;