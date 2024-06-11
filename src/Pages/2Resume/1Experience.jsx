import React from "react"; 


function Experience({item}) {
    return (
        <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <span>{item.year}</span>
        <p className="timeline-text">
          {item.description}
        </p>
      </li>
    );
}

export default Experience;