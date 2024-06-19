import React, { useState } from 'react';
import { FiCopy, FiCheck } from "react-icons/fi";

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
      <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
        <div>
          {copied ? <FiCheck size={25} /> : <FiCopy size={25} />}
        </div>
      </button>
  );
}

export default Copy;
