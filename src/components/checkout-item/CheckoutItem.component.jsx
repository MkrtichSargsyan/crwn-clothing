import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

function CheckoutItem({ cartItem, clearItemFromCart }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  );
}

export default connect(null, { clearItemFromCart })(CheckoutItem);
