import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TDX</div>
      <div className="navbar-menu">
        <a href="/faq" className="navbar-menu-item">FAQs</a>
        <a href="#about" className="navbar-menu-item">About Us</a>
        <a href="#contact" className="navbar-menu-item">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
