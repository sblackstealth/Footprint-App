import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Navbar__brand">FootPrints</h1>

      <div>
        <Link className="Navbar__link" to="/">Home</Link>
        <Link className="Navbar__link" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
