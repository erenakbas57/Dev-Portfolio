import React, { useState } from "react";
import Experience from "./1Experience";
import Education from "./1Education";
import Volunteering from "./1.Volunteering";
import "./resume.css";

import { FaGraduationCap } from "react-icons/fa6";
import { MdWork, MdVolunteerActivism } from "react-icons/md";


import education from "../../Data/Education";
import experience from "../../Data/Experience";
import volunteering from "../../Data/Volunteering";

function Resume() {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isVolunteeringOpen, setIsVolunteeringOpen] = useState(false);

  const toggleVolunteering = () => {
    setIsVolunteeringOpen(!isVolunteeringOpen);
  }

  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Kariyer</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper" onClick={toggleExperience}>
          <div className="icon-box">
            <MdWork size={24} />
          </div>
          <h3 className="h3">İş</h3>
        </div>
        <ol className={`timeline-list exp ${isExperienceOpen ? 'open' : ''}`}>
          {experience.map((item, index) => (
            <Experience item={item} key={index} />
          ))}
        </ol>
      </section>
      <div className="separator" />
      <section className="timeline">
        <div className="title-wrapper" onClick={toggleEducation}>
          <div className="icon-box">
            <FaGraduationCap size={24} />
          </div>
          <h3 className="h3">Eğitim</h3>
        </div>
        <div className={`timeline-list ${isEducationOpen ? 'open' : ''}`}>
          {education.map((item, index) => (
            <Education key={index} item={item} />
          ))}
        </div>
      </section>
      <div className="separator" />
      <section className="timeline">
        <div className="title-wrapper" onClick={toggleVolunteering}>
          <div className="icon-box">
            <MdVolunteerActivism size={24} />
          </div>
          <h3 className="h3">Gönüllülük</h3>
        </div>
        <div className={`timeline-list ${isVolunteeringOpen ? 'open' : ''}`}>
          {volunteering.map((item, index) => (
            <Volunteering key={index} item={item} />
          ))}
        </div>
      </section>
    </article>
  );
}

export default Resume;
