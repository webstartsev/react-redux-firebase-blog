import React from 'react';
import { Link } from 'react-router-dom';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';
import { connect } from 'react-redux';

const NavBar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Super Blog
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
