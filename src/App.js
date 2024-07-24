// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TileOne from './components/TileOne';
import TileTwo from './components/TileTwo';
import TileThree from './components/TileThree';
import FAQPage from './components/FAQPage'; // Import the FAQPage component
import Questionnaire from './components/Questionnaire'; // Import the Questionnaire component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <TileOne />
              <TileTwo />
              <TileThree />
            </div>
          } />
          <Route path="/faq" element={<FAQPage />} /> {/* Add the FAQPage route */}
          <Route path="/questionnaire" element={<Questionnaire />} /> {/* Add the Questionnaire route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
