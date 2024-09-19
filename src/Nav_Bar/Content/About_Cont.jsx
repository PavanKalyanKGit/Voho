import React from 'react';
import './About_Content.css';
import { Link } from 'react-router-dom';
import Voho_Fotter from '../../Fotter/Voho_Fotter';

const About_Cont = () => {
  return (
    <div className="Outer_com">
      <div className="background-overlay"></div>
      <div className="content">
       <div>
        <h2> Welcome to Voho!</h2>
        <p> your premier destination for all things entertainment! At Voho, we believe in
           bringing the best of movies and shows right to your screen. Whether you're a fan 
           of blockbuster hits, indie gems,
           or the latest in TV series, we have something for everyone.
        </p>
        <p>
       <b> Voho </b> is designed with you in mind. Our intuitive interface and robust features ensure 
        that you have an exceptional viewing experience. From personalized recommendations to 
        an extensive library of content,
         we’re dedicated to providing you with high-quality entertainment anytime, anywhere.
        </p>
        <p>
        Explore our diverse selection, create your watchlist, and dive into a world of endless 
        possibilities. Join us on this exciting 
        journey and discover why Voho is the ultimate choice for movie and TV enthusiasts.
        </p>
        <p className='Final'>Thank you for choosing <b>Voho </b>where entertainment meets excellence!</p>
       </div>
       </div>


       <div className="About_Me">
       <div>
        <h2> About Me</h2>
        <p>
        Hi, I'm <b>Pavan Kalyan K</b>, and welcome to my first <b>React.js project, Voho!</b> I recently graduated 
        with a B.Tech in Computer Science in 2024, and I'm actively seeking opportunities as a 
        Junior Software Engineer. With a passion for building web applications, I'm eager to grow my skills and 
        contribute to exciting projects.
        </p>
        <p className='Final'>For more details about my journey and skills, click the button below.</p>
        <div className='portfolio_Link'>
        <Link to= 'https://pavankalyankgit.github.io/Pavan-s-Portfolio/'  target="_blank" 
          rel="noopener noreferrer" className='port'>Discover More About Me</Link>
        </div>
       </div>
       </div>

       
       <Voho_Fotter/>
      </div>
      
    
    
  );
};

export default About_Cont;
