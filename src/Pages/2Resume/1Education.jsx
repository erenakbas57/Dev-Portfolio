import React from "react"; 


function Education({item}) {
    return (
        <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          {item.school}
        </h4>
        <h5 className="h5 timeline-item-position">
          {item.department}
        </h5>
        <span>{item.date}</span>
        <p className="timeline-text">
        {item.desc}
        </p>
      </li>
    );
}

export default Education;