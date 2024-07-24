// src/components/TileThree.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TileThree.css';

const TileThree = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/questionnaire');
  };

  return (
    <div className="tile-three">
      <div className="content">
        <h2>Join Our Community</h2>
        <p>Be a part of our amazing journey and explore the world with us.</p>
        <button className="join-button" onClick={handleJoinNow}>
          Join Now
        </button>
      </div>
    </div>
  );
};

export default TileThree;
