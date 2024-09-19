import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
  const submitHandler = ()=>
    {
        alert("you have successfully Login");
    }
  return (
    <div className='Login_Container'>
      <div className='Login_Box'>
        <h1>Login Page</h1><br/>
        <form onSubmit={submitHandler}>
          
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
          <input type="submit" value="Login" />
        </form>
        <p>Don't have an account? <Link to="/register" className='sign'>Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
