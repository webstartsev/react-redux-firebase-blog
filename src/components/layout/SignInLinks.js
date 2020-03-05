import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignOutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Новая статья</NavLink>
      </li>
      <li>
        <a href="#" onClick={props.signOut}>
          Выйти
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          SA
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
