import React from 'react';
import './content.scss';

const Content = ({ children }) => {
  // console.log('props :>> ', props);
  return <section>Content here {children}</section>;
};

export default Content;
