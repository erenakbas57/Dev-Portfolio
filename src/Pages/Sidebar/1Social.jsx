import React, { useState } from 'react';
import Copy from './1Copy';

function Social({ item, isActive, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  if (item.type === 'phone' || item.type === 'email') {
    return (
      <li className="social-item" style={{ position: 'relative' }}>
        <a href="#" className="social-link" onClick={handleClick}>
          {item.icon}
        </a>
        {isActive && <Copy item={item} />}
      </li>
    );
  }

  return (
    <li className="social-item">
      <a href={item.link} className="social-link" target="_blank" rel="noopener noreferrer">
        {item.icon}
      </a>
    </li>
  );
}

export default Social;