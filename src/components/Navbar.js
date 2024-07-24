import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToTileThree }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleJoinUsClick = () => {
    scrollToTileThree.current = true;
    navigate('/'); // Redirect to the home page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>TDX</div>
      <div className="navbar-menu">
        <a href="/faq" className="navbar-menu-item">FAQs</a>
        <a href="#about" className="navbar-menu-item">About Us</a> 
        {/* <a href="#contact" className="navbar-menu-item">Contact Us</a> */}
        <div onClick={handleJoinUsClick} className="navbar-menu-item" style={{ cursor: 'pointer' }}>Join Us</div> {/* New link */}
      </div>
    </nav>
  );
};

export default Navbar;
