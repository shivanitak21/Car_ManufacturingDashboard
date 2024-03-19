// Navbar.js

import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Car Manufacturer Planning</h1>
      <div className="navbar-buttons">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">About</button>
      </div>
    </nav>
  );
};

export default Navbar;
