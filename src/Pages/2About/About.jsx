// About.js
import React from "react";
import Service from "./1Service";
import Text from "./1Text";
import Skill from "../2About/1Skill";

import text from "../../Data/Text";
import service from '../../Data/Service';
import skill from '../../Data/Skill';

function About() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">Hakkımda</h2>
      </header>
      <section className="about-text">
        {text.map((item, index) => (
          <Text key={index} item={item} />
        ))}
      </section>
      <section className="service">
        <h3 className="h3 service-title">Neler Yapıyorum?</h3>
        <ul className="service-list">
          {service.map((item, index) => (
            <Service key={index} item={item} />
          
          ))}
        </ul>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">Yetenekler</h3>
        <ul className="skills-list content-card">
          {skill.map((item, index) => (
            <Skill  item={item}/>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default About;
