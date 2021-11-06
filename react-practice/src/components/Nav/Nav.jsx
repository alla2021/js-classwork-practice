import React from 'react';

const Nav = ({ list }) => {
  return (
    <nav>
      <ul>
        {list.map((item) => (
          <li key={item}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
