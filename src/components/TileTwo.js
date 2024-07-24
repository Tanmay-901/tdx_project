// src/components/TileTwo.js

import React, { useState } from 'react';
import './TileTwo.css';
import image1 from '../assets/image1.png';

const TileTwo = () => {
  const [hover, setHover] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(0);

  const details = [
    "Detail section 1: Something interesting about TDX.",
    "Detail section 2: Another fascinating aspect of TDX.",
    "Detail section 3: More details on TDX."
  ];

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleNext = () => {
    setCurrentDetail((prevDetail) => (prevDetail + 1) % details.length);
  };

  const handlePrev = () => {
    setCurrentDetail((prevDetail) => (prevDetail - 1 + details.length) % details.length);
  };

  return (
    <div className={`carousel-tile-two ${hover ? 'expanded' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel-container">
        <div className="carousel-left">
          <h1>Essence of TDX</h1>
        </div>
        {hover && (
          <div className="carousel-right">
            <div className="carousel-details">
              <p>{details[currentDetail]}</p>
              <div className="carousel-controls">
                <button onClick={handlePrev} className="carousel-button">‹</button>
                <button onClick={handleNext} className="carousel-button">›</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileTwo;
