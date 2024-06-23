import React, { useState } from 'react';
import './1social.css';
import { TbCopyCheckFilled, TbCopy  } from "react-icons/tb";

function Social({ item, isActive, onClick }) {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCopy = (event) => {
    event.stopPropagation(); // This will prevent the card from flipping back immediately
    navigator.clipboard.writeText(item.link)
      .then(() => {
        setTimeout(() => {
          setCopied(false);
          setIsFlipped(false); 
        }, 1200); 
        setCopied(true);
        
      })
      .catch(err => console.log('Failed to copy text: ', err));
  };

  if (item.type === 'phone' || item.type === 'email') {
    return (
      <li className="social-item-h">
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={item.icon} alt="icon" />
            </div>
            <div className={`flip-card-back ${copied ? 'copied' : ''}`}>
              <button className="card-button" onClick={handleCopy}>
                {copied ? <TbCopyCheckFilled size={35} color='white'/> : <TbCopy size={35} color='white'/>}
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="social-item">
      <a href={item.link} className="social-link" target="_blank" rel="noopener noreferrer">
        <img src={item.icon} alt="icon" />
      </a>
    </li>
  );
}

export default Social;
