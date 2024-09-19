import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Register = () => {
  const submitHandler = ()=>
  {
      alert("Registration completed successfully");
  }
  return (
    <div className='Login_Container'>
      <div className='Login_Box'>
        <h1>Register Page</h1><br/>
        <form onSubmit={submitHandler}>
          
        <input
            type="text"
            placeholder="Enter your Name"
            required
            id='email'
          /><br/>
          <input
            type="email"
            placeholder="Enter your Email Address"
            required
            id='email'
          /><br/>
          <input
            type="password"
            placeholder="Enter your Password"
            required
            id="pass"
          /><br/>
          <input
            type="password"
            placeholder="Confirm your Password"
            required
            id="pass"
          /><br/>
          <input type="submit" value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='sign'>Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
