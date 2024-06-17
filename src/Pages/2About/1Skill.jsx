import React from "react"; 
import {icons} from "../../Data/Skill";
import './1skill.css';


function Skill({item}) {
    return (
        <li className="skills-item">
        <div className="title-wrapper">
        {item.icon.map((iconName, index) => (
            <span>{icons[iconName]}</span>
          ))}
          <h5 className="h5">{item.name}</h5>
          <data value={item.value}>{item.value}%</data>

        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: `${item.value}%` }} />
        </div>
      </li>
    );
}

export default Skill;