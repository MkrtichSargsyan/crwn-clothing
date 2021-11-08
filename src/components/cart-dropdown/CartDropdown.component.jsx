import './cart-dropdown.styles.scss';

import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
