import React, { useState, useEffect } from 'react';
import userService from '../services/userAccount'
import Input from './input';
import Button from './button';
import '../styles/login.css'

const Login = () => {

  const [states, setStates] = useState({
    email:'',
    password:'',
    users: []
  })

  useEffect(() => {
    userService
      .read()
      .then(res => setStates({...states, users:res.data}))
  }, [])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setStates({...states, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // filter users based on the email
    const user = states.users.filter( u => u.email === states.email)
    // ought to filter based on email and password
    console.log(...user)
  }



  return (
    <div>
      <div className='form'>
        <div className='form-header-div'>
          <h1 className='form-header-item-one'>Welcome Back!</h1>
          <p >Securely login to your account</p>
        </div>

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

            <a href='#'>Forgot your password?</a>

            <Button 
              title="Login" 
              btnClick={handleSubmit}
              className="btn-class"
            />

          <p>Need an account? <a href="/signup">Register</a> </p>

      </div>
    </div>
  );
};


export default Login;
