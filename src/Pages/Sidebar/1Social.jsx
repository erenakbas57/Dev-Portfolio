import React, { useState } from 'react';
import './1social.css';
import { TbCopyCheckFilled, TbCopy  } from "react-icons/tb";

import { useSocialContext } from '../../SocialContext';

function Social({ item, isActive, onClick }) {
  const [copied, setCopied] = useState(false);
  const { isEmailFlipped, setIsEmailFlipped } = useSocialContext();
  const { isPhoneFlipped, setIsPhoneFlipped } = useSocialContext();

  const handleClick = () => {
    if (item.type === 'email') {
      setIsEmailFlipped(!isEmailFlipped);
    } else if (item.type === 'phone') {
      setIsPhoneFlipped(!isPhoneFlipped);
    }
  };

  const handleCopy = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(item.link)
      .then(() => {
        setTimeout(() => {
          setCopied(false);
          if (item.type === 'email') {
            setIsEmailFlipped(false);
          } else if (item.type === 'phone') {
            setIsPhoneFlipped(false);
          }
        }, 1200);
        setCopied(true);
      })
      .catch(err => console.log('Failed to copy text: ', err));
  };

  if (item.type === 'phone' || item.type === 'email') {
    const isFlipped = item.type === 'phone' ? isPhoneFlipped : isEmailFlipped;
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