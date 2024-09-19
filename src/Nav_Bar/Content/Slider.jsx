import React, { useState, useEffect } from 'react';
import './Slider.css';
import img1 from '../../Banner_images/img1.jpg';
import img2 from '../../Banner_images/img2.jpg';
import img3 from '../../Banner_images/img3.jpg';
import img4 from '../../Banner_images/img4.jpg';
import img5 from '../../Banner_images/img5.jpg';
import img6 from '../../Banner_images/img6.jpg';
import img7 from '../../Banner_images/img7.jpg';
import img8 from '../../Banner_images/img8.jpg';
import img9 from '../../Banner_images/img9.jpg';
import img10 from '../../Banner_images/img10.jpg';
import img11 from '../../Banner_images/img11.jpg';
import img12 from '../../Banner_images/img12.jpg';
import img13 from '../../Banner_images/img13.jpg';


const Slider = () => {
 const [index, setIndex] = useState(0);

  const images = [img9,img12,img13, img11, img10, img2, img3, img4, img5, img6, img7, img8, img1];

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="slider">
      <button id="button" className="arrow-button prev" onClick={prevSlide}>
        <span className="arrow-icon">←</span>
      </button>
      <div className="slider-wrapper">
        <div className="slider-images" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Slide ${idx}`} />
          ))}
        </div>
      </div>
      <button id="button" className="arrow-button next" onClick={nextSlide}>
        <span className="arrow-icon">→</span>
      </button>
    </div>
  );
};

export default Slider;
