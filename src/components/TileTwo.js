import React, { useState } from 'react';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import './TileTwo.css';

const TileTwo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="tile-two">
      <div
        className="image-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? image5 : image4}
          alt="Nature"
          className="slide-image"
        />
      </div>
      <div className="text-container">
        <p>
          Discover the world with our immersive nature experiences. Join us to explore the untouched beauty of our planet.
        </p>
      </div>
    </div>
  );
};

export default TileTwo;
