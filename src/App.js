import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Navbar from './components/Navbar';
import TileOne from './components/TileOne';
import TileTwo from './components/TileTwo';
import TileThree from './components/TileThree';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Fullpage>
        <FullpageSection>
          <TileOne />
        </FullpageSection>
        <FullpageSection>
          <TileTwo />
        </FullpageSection>
        <FullpageSection>
          <TileThree />
        </FullpageSection>
      </Fullpage>
    </div>
  );
};

export default App;
