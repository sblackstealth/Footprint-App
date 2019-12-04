import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-white.png';

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Navbar__brand">FootPrints</h1>

      <img src={logo} alt="Footprints logo" style={{ width: '30px'}} />

      <div>
        <Link className="Navbar__link" to="/">Home</Link>
        <Link className="Navbar__link" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
