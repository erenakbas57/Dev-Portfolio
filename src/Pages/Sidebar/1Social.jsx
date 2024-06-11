import React from "react";

function Social({item}) {
    return (
        <li className="social-item">
        <a href={item.link} className="social-link" target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a>
      </li>
    );
}

export default Social;