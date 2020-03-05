import React from 'react';
import { Link } from 'react-router-dom';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';
import { connect } from 'react-redux';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Super Blog
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log('state: ', state);
  return {};
};

export default connect(mapStateToProps)(NavBar);
