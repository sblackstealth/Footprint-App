import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__brand">FootPrints</div>

      <div>
        <Link classname="Navbar__link" to="/">Home</Link>
        <Link classname="Navbar__link" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
