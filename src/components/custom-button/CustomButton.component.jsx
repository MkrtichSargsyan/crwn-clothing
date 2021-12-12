import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
