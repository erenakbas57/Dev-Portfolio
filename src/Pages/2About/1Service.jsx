import React from "react";
import {icons} from "../../Data/Service";


function Service({ item }) {
  return (
    <li className="service-item">
      <div className="container">
        <div className="icon-row">
        {item.icon.map((iconName, index) => (
            <span>{icons[iconName]}</span>
          ))}
        </div>
        <div className="row mt-3">
          <div className="service-content-box">
            <h4 className="h4 service-item-title">{item.name}</h4>
            <p className="service-item-text">{item.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Service;
