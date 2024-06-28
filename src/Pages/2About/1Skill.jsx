import './1skill.css';
import { skillsImage } from "../../Data/SkillImage";
import { skillsData } from "../../Data/Skill";

import React from 'react';


function SkillsCarousel() {
  const repeatedSkillsData = [...skillsData, ...skillsData];

  return (
    <div className="skills-container">
      <div className="skills-content">
        {repeatedSkillsData.map((item, index) => (
          <div className="skill-box" key={index}>
            <img src={skillsImage(item)} alt={item} />
            <div className="skill-name">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
