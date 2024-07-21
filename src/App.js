import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TileOne from './components/TileOne';
import TileTwo from './components/TileTwo';
import TileThree from './components/TileThree';
import FAQPage from './components/FAQPage'; // Import the FAQPage component
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
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
