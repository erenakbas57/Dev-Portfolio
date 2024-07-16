import React from "react";

function Experience({ item }) {
  return (
    <li className="timeline-item">
      <div className="item-header">
        <img src={item.image} alt={item.title} className="item-image" />
        <div className="item-info">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <h5 className="h5 timeline-item-position">{item.position}</h5>
          <span>{item.year}</span>
          
        </div>
      </div>
      <p className="timeline-text">{item.description}</p>
      <div className="spacer"></div>
    </li>
  );
}

export default Experience;
