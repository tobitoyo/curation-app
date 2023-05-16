import React, { useState } from 'react';
import userService from '../services/userAccount'
import Input from './input';
import Button from './button';
import Error from './errorMessage';
import Link from './link';

const Register = () => {

  // fill form
  // validate form
  // submit form
  // redirect to login after successful submission

  const [states, setStates] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    displayError: false
  })

  const [errors, setErrors] = useState({
    email:'',
    lowercase:'',
    uppercase:'',
    length: '',
    confirmPassword:''
  })


  const handleInputChange = (e) => {
    const {name, value} = e.target

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );


    const lowercaseRegex = RegExp(/(?=.*[a-z])/)

    const uppercaseRegex = RegExp(/(?=.*[A-Z])/)

    const lengthRegex = RegExp(/[A-Za-z\d@$!%*?&]{8,32}/)

    switch(name) {
      case "email" :
        errors.email = validEmailRegex.test(value)
                        ? ""
                        :"Invalid email";
        break

      // I NEED TO DO THE REGEX FOR A STRONG PASSWORD
      case "password" :
        errors.lowercase = lowercaseRegex.test(value)
                        ? ""
                        : "Password must contain a lowercase letter";
        errors.uppercase = uppercaseRegex.test(value)
                        ? ""
                        : "Password must contain an uppercase letter";
        errors.length = lengthRegex.test(value)
                        ? ""
                        : "Password must have at least 8 characters";                        
        break
      
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

  const validation = (err) => {

    const value = Object.values(err)
                    .map(error => error.length)
                    .reduce((sum, length) => sum + length)
    return value
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: states.username,
      email: states.email,
      password: states.password
    }

    if (validation(errors) !== 0){
      setStates({...states, displayError: true})
    }
    else{
      setStates({...states, displayError: false})

      userService
        .create(newUser)
        .then( res => {
          console.log(res.data)
        })
    }

    
  }

  return (
    <div className='form'>
      <h2>Register</h2>

        <Input
            title='Username'
            name='username'
            inputType='text'
            value={states.username}
            placeholder='Enter your username'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />
      
        <Input
            title='email'
            name='email'
            inputType='email'
            value={states.email}
            placeholder='Enter your email'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />

        {states.displayError && errors.email.length > 0 && <Error message={errors.email} />}
        
        <Input
            title='password'
            name='password'
            inputType='password'
            value={states.password}
            placeholder='Enter your password'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />
          {states.displayError && errors.lowercase.length > 0 && <Error message={errors.lowercase} />}
          {states.displayError && errors.uppercase.length > 0  && <Error message={errors.uppercase} />}
          {states.displayError && errors.length.length > 0  && <Error message={errors.length} />}

        <Input
            title='confirm password'
            name='confirmPassword'
            inputType='password'
            value={states.confirmPassword}
            placeholder='Confirm your password'
            inputChange={handleInputChange}
            class="input"
            labelClass="input-label"
          />
          {states.displayError && errors.confirmPassword.length > 0 && <Error message={errors.confirmPassword} />}
          

        <Button 
            title="Create Your Account" 
            btnClick={handleSubmit}
            className="btn-class"
          />
      
        <Link 
          link='/login'
          text='Already have an account? Log In'
        />
    </div>
  );
};

export default Register