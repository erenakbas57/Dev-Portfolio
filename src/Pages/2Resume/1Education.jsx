import React from "react"; 


function Education({item}) {
    return (
        <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          {item.school}
        </h4>
        <span>{item.date}</span>
        <p className="timeline-text">
        {item.desc}
        </p>
      </li>
    );
}

export default Education;