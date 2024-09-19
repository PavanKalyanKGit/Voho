import React from 'react';
import Header from './Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Nav_Bar/Home';
import Movies from './Nav_Bar/Movies';
import About from './Nav_Bar/About';
import Login from './Nav_Bar/Login';  
import Register from './Nav_Bar/Register';
import MovieDetailPage from './Nav_Bar/Content/Movie_detailed_Page';  
import Error from './Fotter/Error';

const AllHeader = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  
          <Route path="*" element={<Error />} />  
          </Routes>
          
        </div>
      </HashRouter>
    </div>
  );
};

export default AllHeader;
