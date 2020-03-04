import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Super Blog
        </Link>
        <NavLink />
      </div>
    </nav>
  );
};

export default NavBar;
