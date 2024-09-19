import React from 'react';
import { Mdata } from './Movie_Data';
import { Link } from 'react-router-dom';
import './Mdet.css';

const Movies_details = () => {
  return (
    <div className='Outer_Componenet'>
      {
        Mdata.map((data) => (
          <div key={data.id} className='inner_Compenet'>
            <Link to={`/movies/${data.id}`}>
              <img src={data.image} alt={data.title} />
            </Link>
            <p><b>{data.title}</b></p>
          </div>
        ))
      }
    </div>
  );
}

export default Movies_details;
