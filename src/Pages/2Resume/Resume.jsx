// Career.js
import React from "react";
import Experience from "./1Experience";
import Education from "./1Education";
import Skill from "./1Skill";

import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

import education from '../../Data/Education';
import skill from '../../Data/Skill';
import experience from '../../Data/Experience';

function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item, index) => (
            <Education key={index} item={item} />
          ))}
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdWork />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item, index) => (
            <Experience item={item}/>
          ))}
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <Skill />
        </ul>
      </section>
    </article>
  );
}

export default Resume;
