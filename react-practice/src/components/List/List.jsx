import React from 'react';

const List = ({ data, children }) => {
  return (
    data.lenght !== 0 && (
      <>
        <ul>
          {data.map(({ name, year }) => (
            <li key={name}>
              Name: {name}; Year: {year}
            </li>
          ))}
        </ul>
        {children}
      </>
    )
  );
};

export default List;
