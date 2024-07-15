import React, { useState } from 'react';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import './TileTwo.css';

const TileTwo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="tile-two">
      <div className="tile-content">
        <div 
          className={`image-container ${isHovered ? 'hovered' : ''}`} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="image front" style={{ backgroundImage: `url(${image4})` }}></div>
          <div className="image back" style={{ backgroundImage: `url(${image5})` }}></div>
        </div>
        <div className="text-container">
          <h2>Discover the Beauty of Nature</h2>
          <p>Experience the wonders of the natural world.</p>
        </div>
      </div>
    </div>
  );
};

export default TileTwo;
