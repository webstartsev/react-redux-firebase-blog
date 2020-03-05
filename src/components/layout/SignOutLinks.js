import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signup">Регистрация</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Войти</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
