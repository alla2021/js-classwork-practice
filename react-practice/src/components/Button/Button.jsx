import React from 'react';
import './button.scss';

const Button = ({ isActive, isDisabled, type, text, ...props }) => {
  console.log('props :>> ', props);
  return (
    <button
      disabled={isDisabled}
      type={type ? type : 'button'}
      className={`${isActive ? 'is--active' : ''} main-btn`}
      {...props}
    >
      {text || 'Default text'}
    </button>
  );
};

export default Button;
