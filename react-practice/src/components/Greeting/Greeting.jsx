import React from 'react';

const Greeting = ({ name }) => {
  const time = new Date().getHours();
  let greeting = '';

  if (time >= 22 && time <= 3) {
    greeting = 'Good Night';
  } else if (time >= 3 && time <= 12) {
    greeting = 'Good morning';
  } else {
    greeting = 'Hello';
  }

  return (
    <div>
      {greeting}, {name}!
    </div>
  );
};

export default Greeting;
