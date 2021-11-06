import React from 'react';

const Numbers = ({ from, to, odd, even }) => {
  let numbers = [];

  for (let i = from; i <= to; i++) {
    numbers.push(i);
  }

  if (odd) {
    numbers = numbers.filter((num) => num % 2 !== 0);
  } else if (even) {
    numbers = numbers.filter((num) => num % 2 === 0);
  } else {
    numbers = numbers;
  }

  return (
    <ul>
      {numbers.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Numbers;
