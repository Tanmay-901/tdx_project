import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TileOne from './components/TileOne';
import TileTwo from './components/TileTwo';
import TileThree from './components/TileThree';
import FAQPage from './components/FAQPage'; // Import the FAQPage component
import './App.css';

const App = () => {
  const scrollToTileThree = useRef(false);

  useEffect(() => {
    if (scrollToTileThree.current) {
      const tileThreeElement = document.getElementById('tile-three');
      if (tileThreeElement) {
        window.scrollTo({
          top: tileThreeElement.offsetTop,
          behavior: 'smooth',
        });
      }
      scrollToTileThree.current = false; // Reset after scrolling
    }
  });

  return (
    <Router>
      <div className="app">
        <Navbar scrollToTileThree={scrollToTileThree} />
        <Routes>
          <Route path="/" element={
            <div>
              <TileOne />
              <TileTwo />
              <TileThree id="tile-three" />
            </div>
          } />
          <Route path="/faq" element={<FAQPage />} /> {/* Add the FAQPage route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
