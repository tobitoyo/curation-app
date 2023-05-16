import React from 'react';
import Error from './errorMessage';


const Input = (props) => {
  

  const labelStyle = {
    fontSize: '1rem',
    lineHeight: '1.6rem',
    fontWeight: '500',
    letterSpacing: '.02em',
    textTransform: 'capitalize'
  }

  const inputStyle = {
    backgroundColor: 'transparent',
    margin: '.5rem 0 1.3rem',
    border: '.1rem solid white',
    borderRadius: '.2rem',
    color: 'white',
    fontSize: '1rem',
    padding: '.7rem',
    width: '100%',
    lineHeight: '1rem',
    textTransform: 'lowercase'
  }

  return (
    <div>
      <label 
        htmlFor={props.name}
        style={labelStyle}
      > 
        {props.title}
      </label >
      <br />
      <input 
        name={props.name} 
        type={props.inputType} 
        value={props.value} 
        onChange={props.inputChange}
        placeholder={props.placeholder} 
        style={inputStyle}
      />
    </div>
  )
}

export default Input;