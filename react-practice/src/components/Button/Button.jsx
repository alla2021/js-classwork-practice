import React from 'react';
import './button.scss';

const Button = ({ isActive, isDisabled, type, text, children, ...props }) => {
  console.log('props :>> ', props);
  return (
    <button
      disabled={isDisabled}
      type={type ? type : 'button'}
      className={`${isActive ? 'is--active' : ''} main-btn`}
      {...props}
    >
      {children || 'Default text'}
    </button>
  );
};

export default Button;
