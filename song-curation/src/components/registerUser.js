import React, { useState } from 'react';
import userService from '../services/userAccount'
import Input from './input';
import Button from './button';

const Register = () => {

  const [states, setStates] = useState({
    email:'',
    password:'',
    confirmPassword:''
  })

  const [errors, setErrors] = useState({
    email:'',
    password:'',
    confirmPassword:''
  })


  const handleInputChange = (e) => {
    const {name, value} = e.target

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    // const validPasswordRegex = 

    switch(name) {
      case "email" :
        errors.email = validEmailRegex.test(value)
                        ? ""
                        :"Invalid email";
        break

      // I NEED TO DO THE REGEX FOR A STRONG PASSWORD
      // case "password" :
      //   errors.password = validPasswordRegex.test(value)
      //                   ? ""
      //                   : ;
      //   break
      
      case "confirmPassword" :
        errors.confirmPassword = value === states.password
                        ? ""
                        : "Passwords do not match";
        break
      default:
        break
    }

    setStates({...states, [name]: value})
  }

  const validation = () => {}

  const handleSubmit = (e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:5000/register', {
    //   email: states.email,
    //   password: states.password,
    //   confirmPassword: states.confirmPassword
    // });
    // console.log(response.data);
  }

  return (
    <div className='form'>
      <h2>Register</h2>
      
        <Input
            title='EMAIL'
            name='email'
            inputType='email'
            value={states.email}
            placeholder='Enter your email'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />
        <Input
            title='PASSWORD'
            name='password'
            inputType='password'
            value={states.password}
            placeholder='Enter your password'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />

        <Input
            title='CONFIRM PASSWORD'
            name='confirmPassword'
            inputType='password'
            value={states.confirmPassword}
            placeholder='Confirm your password'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />

        <Button 
            title="Create Your Account" 
            btnClick={handleSubmit}
            className="btn-class"
          />
      
    </div>
  );
};

export default Register