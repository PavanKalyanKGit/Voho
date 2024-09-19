import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
const LogRegsterNav = () => {
  return (
    <div className='logReg' >
        <Link to="/login" className='link'>Login</Link>
        <Link to="/register" className='link'>Register</Link>
    </div>

  )
}

export default LogRegsterNav