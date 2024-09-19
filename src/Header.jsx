import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';
import './index.css';
import LogRegsterNav from './Nav_Bar/LogRegsterNav';
const Header = () => {
  return (
    <div className="header_Comp">
      <div className='Img_comp'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      
      <div className="NavBar">
            
            <Link to="/" className='link'>Home</Link>
            <Link to="/movies" className='link'>Movies</Link>
            <Link to="/about" className='link'>About</Link>
           
      </div>
      <div className='search_bar'> 
            <form className='search_bar123'>
                <input type="text" placeholder="Enter....." className='search'/>
                <button type="submit" className='search_fun'>Search</button>
            </form>
      </div>
      <div>
        <LogRegsterNav/>
      </div>
    </div>
  );
};

export default Header;
