import React from 'react';
import './menu-item.styles.scss';

export default function MenuItem({ title, imageUrl, size}) {
  return (
   
      <div
      style={{
        background: `url(${imageUrl})`
      }}
       className={`${size} menu-item`}>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

  );
}
