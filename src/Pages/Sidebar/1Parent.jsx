import React, { useState } from 'react';
import Social from './Social';

function ParentTooltip({ items }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (type) => {
    setActiveTooltip((prev) => (prev === type ? null : type));
  };

  return (
    <ul className="social-list">
      {items.map((item) => (
        <Social 
          key={item.type} 
          item={item} 
          activeTooltip={activeTooltip} 
          onToggleTooltip={handleTooltipToggle} 
        />
      ))}
    </ul>
  );
}

export default ParentTooltip;
