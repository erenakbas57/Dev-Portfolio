import React from "react";
import "./1certificate.css";

function Certificate({ item }) {
  return (
    <li className="certificate-item  active">
      <a href={item.photo} target="_blank" rel="noopener noreferrer">
        <figure className="certificate-img">
          <img src={item.photo} alt="finance" loading="lazy" />
        </figure>
        <h3 className="certificate-title">{item.name}</h3>
        <p className="certificate-category">{item.category}</p>
      </a>
    </li>
  );
}

export default Certificate;
