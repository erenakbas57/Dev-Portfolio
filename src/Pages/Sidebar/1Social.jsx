import React from 'react';
import Copy from './1Copy';
import './1social.css';

function Social({ item, isActive, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  if (item.type === 'phone' || item.type === 'email') {
    return (
      <li className="social-item" style={{ position: 'relative' }}>
        <a href="0" className="social-link" onClick={handleClick}>
          <img src={item.icon}></img>
        </a>
        {isActive && <Copy item={item} />}
      </li>
    );
  }

  return (
    <li className="social-item">
      <a href={item.link} className="social-link" target="_blank" rel="noopener noreferrer">
        <img src={item.icon}></img>
      </a>
    </li>
  );
}

export default Social;