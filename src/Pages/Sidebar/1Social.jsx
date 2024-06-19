import React, { useState } from 'react';
import './1social.css';
import { TbCopyCheckFilled, TbCopy  } from "react-icons/tb";

function Social({ item, isActive, onClick }) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    setCopied(true);
    try {
      navigator.clipboard.writeText("erenakbas");
      setCopied(true);
      setTimeout(() => {
      setCopied(false);
      }, 1500);
      } catch (error) {
      console.error('Metin kopyalanamadı:', error);
      }
  };

  if (item.type === 'phone' || item.type === 'email') {
    return (
      <li className="social-item-h">
        <div className="social-link-h">
          <a href="0" onClick={handleClick}>
            <img src={item.icon} alt="icon" />
            <div className={`social-back ${copied ? 'copied' : ''}`}>
              <button>
                {copied ? <TbCopyCheckFilled size={35} color='white'/> : <TbCopy size={35} color='white'/>}
              </button>
            </div>
          </a>
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
