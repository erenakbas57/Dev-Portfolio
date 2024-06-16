import React, { useState } from 'react';
import './copy.css';
import { FiCopy } from "react-icons/fi";

function Copy({ item }) {
  const [copied, setCopied] = useState(false); // Kopyalandı durumu

  const configData = item.link;

  const copyToClipboard = () => {
    const dataToCopy = item.type === 'email' ? configData : item.link;
    navigator.clipboard.writeText(dataToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error('Copy error:', err);
      });
  };

  return (
    <div className="copy-tooltip">
      <p className='copy-name'>{item.link}</p>
      <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
        <FiCopy size={15} />
      </button>
    </div>
  );
}

export default Copy;
