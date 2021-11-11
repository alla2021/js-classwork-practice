import React from 'react';
import Navigation from '../Nav/Nav';
import './header.scss';

const nav = [
  { path: '/', name: 'Home' },
  { path: '/movies', name: 'Movies' },
  { path: '/series', name: 'Series' },
  { path: '/shows', name: 'Shows' },
];

const Header = () => {
  return (
    <header className="header">
      <Navigation list={nav} />
    </header>
  );
};

export default Header;
