import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = ({ list }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {list.map((item) => (
          <li key={item.name} className="nav__list--item">
            <NavLink to={item.path} className="nav__link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
