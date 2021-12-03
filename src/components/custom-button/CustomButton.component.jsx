import React from 'react';

import './custom-button.styles.scss';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
