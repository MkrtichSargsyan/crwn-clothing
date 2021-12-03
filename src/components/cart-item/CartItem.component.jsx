import React from 'react';
import './cart-item.styles.scss';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="price">{quantity} x ${price}</div>
      </div>
    </div>
  );
}

export default CartItem;
