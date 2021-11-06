import React from 'react';
import './content.scss';

const Content = ({ children }) => {
  // console.log('props :>> ', props);

  const time = new Date().getHours();
  let greeting = '';

  console.log('time :>> ', time);
  switch (time) {
    case 22:
      greeting = 'good night ';
      break;
    default:
      greeting = 'hello';
  }

  return (
    <section>
      Content here {children} {greeting}
    </section>
  );
};

export default Content;
