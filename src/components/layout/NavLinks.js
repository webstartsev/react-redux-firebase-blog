import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: `/`, label: `Новая статья`, exact: false },
  { to: `/`, label: `Список`, exact: false },
  { to: `/`, label: `Войти`, exact: false },
  { to: `/`, label: `Регистрация`, exact: false }
];

const renderLinks = links => {
  return links.map((link, i) => (
    <li key={i}>
      <NavLink exact={link.exact} to={link.to}>
        {link.label}
      </NavLink>
    </li>
  ));
};

const NavLinks = () => {
  return (
    <ul className="right">
      {renderLinks(links)}
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          SA
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
