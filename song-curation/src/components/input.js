import React from 'react';
import Error from './errorMessage';


const Input = (props) => {

  return (
    <div>
      <label 
        htmlFor={props.name}
        className={props.labelClass}
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
        className={props.class}
      />
    </div>
  )
}

export default Input;