import React, { useState } from 'react';
import './TileTwo.css';
import image1 from '../assets/image1.png';

const TileTwo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'Detailed text description for slide 1.',
    'Detailed text description for slide 2.',
    // Add more slides as needed
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`tile-two-container ${isExpanded ? 'expanded' : ''}`} onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
      <div className="tile-two-content">
        <div className="tile-two-text">
          <h1>Essence of TDX</h1>
        </div>
        {isExpanded && (
          <div className="tile-two-carousel">
            <div className="carousel-content">{slides[currentSlide]}</div>
            <button className="carousel-button left" onClick={handlePrevSlide}>‹</button>
            <button className="carousel-button right" onClick={handleNextSlide}>›</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileTwo;
