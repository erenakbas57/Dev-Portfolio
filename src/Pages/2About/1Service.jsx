import React from "react";
import { skillsImage } from "../../Data/SkillImage";

import './1service.css';

function Service({ item }) {
  return (
    <li className="service-item">
      <div className="container">
        <div className="icon-row">
          {item.icon.map((iconName, index) => (
            <img src={skillsImage(iconName)} alt={item} key={index} />
          ))}
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{item.name}</h4>
          <p className="service-item-text">{item.description}</p>
        </div>
      </div>
    </li>
  );
}

export default Service;
