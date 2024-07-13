import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">Company Name</div>
      <div className="navbar-right">
        <a href="#about">About Us</a>
        <a href="#join">Join Us</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
