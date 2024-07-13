import React, { useState, useEffect } from 'react';
import './Home.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-tile">
      <div className="image-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active-slide' : ''}`}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
