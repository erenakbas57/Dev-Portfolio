// About.js
import "./about.css";
import React from "react";
import Service from "./1Service";
import Text from "./1Text";
import SkillsCarousel from "../2About/1Skill";
import text from "../../Data/Text";
import service from "../../Data/Service";

function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Hakkımda</h2>
      </header>
      <div className="new-project">
        <h3>Yeni Projem: "Yapay Zeka Araçları"</h3>
        <a href="https://ai-archive.vercel.app" rel="noreferrer" target="_blank" className="project-link">
          Siteye Git
        </a>
      </div>
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
        <div>
          <SkillsCarousel />
        </div>
      </section>
    </article>
  );
}

export default About;
