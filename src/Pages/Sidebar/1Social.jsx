import React, { useState } from 'react';
import Copy from './1Copy';

function Social({ item }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowTooltip(!showTooltip);
  };

  if (item.type === 'phone' || item.type === 'email') {
    return (
      <li className="social-item" style={{ position: 'relative' }}>
        <a href="#" className="social-link" onClick={handleClick}>
        {item.icon}
        </a>
        {showTooltip && (
          <Copy item={item}/>
        )}
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