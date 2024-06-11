import React from "react"; 


function Skill() {
    return (
        <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Web design</h5>
          <data value={80}>80%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "80%" }} />
        </div>
      </li>
    );
}

export default Skill;