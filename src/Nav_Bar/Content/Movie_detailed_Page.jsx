import React from 'react';
import { useParams } from 'react-router-dom';
import { Mdata } from './Movie_Data';
import './DMdetail.css';  // Correct the name
import Voho_Fotter from '../../Fotter/Voho_Fotter';
const MovieDetailPage = () => {
  const { id } = useParams(); 
  const movie = Mdata.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
    <div className="movie-detail">
      <h1>{movie.title}</h1>
        
      <div className="video-wrapper">
        <iframe
         
          src={movie.link.replace('youtu.be/', 'youtube.com/embed/')} 
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

        <div className='poster_details'>
        <div className=''>
      <img className="large-image" src={movie.image} alt={movie.title} />
      </div>
        
      <div className="movie-details">
      
        <h2>Directed By</h2>
        <p>{movie.cast[0]}</p> 

        
        <h2>Hero</h2>
        <p>{movie.cast[1]}</p> 

        <h2>Heroine</h2>
        <p>{movie.cast[3]}</p>

        <h2>Lead Actors</h2>
        <p>{movie.cast[2]}</p>

        <h2>Synopsis</h2>
        <p>{movie.synopsis}</p> 
      </div>
    </div>
    </div>
    <Voho_Fotter/>
    </div>
  );
}

export default MovieDetailPage;
