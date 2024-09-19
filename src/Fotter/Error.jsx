import React, { useEffect, useRef } from 'react';
import './Error_Page.css';
import { Link } from 'react-router-dom';
import errorVideo from './PageNotFound.mp4';

const Error = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setTimeout(() => {
        video.play();
      }, 5000); 
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="Error_Outer">
      <div className="Video_Container">
        <video
          className="Error_Video"
          autoPlay
          muted
          ref={videoRef} 
        >
          <source src={errorVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="Error_Content">
        <Link to="/">
          <button className="Home_Button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
