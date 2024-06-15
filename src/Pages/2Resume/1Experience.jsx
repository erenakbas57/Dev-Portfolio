import React from "react"; 


function Experience({item}) {
    return (
        <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <h5 className="h5 timeline-item-position">{item.position}</h5>
        <span>{item.year}</span>
        <p className="timeline-text">
          {item.description}
        </p>
      </li>
    );
}

export default Experience;