import React from "react";
import { useState } from 'react';
import "./copy.css";

function Copy({item}) {
  const [buttonText, setButtonText] = useState("Copy Email");
  
  const configData = item.link;

  const copyToClipboard = () => {
    const email = configData; // Kopyalanacak e-posta adresi
    navigator.clipboard.writeText(email)
      .then(() => {
        setButtonText('Copied');
      })
      .catch((err) => {
        console.error('Copy error:', err);
      });
  };

  return (
    <div className="custom-tooltip">
      <button
      onClick={copyToClipboard}
      className="copy-button"
    >
      {buttonText}
    </button>
    </div>
  );
}

export default Copy;
