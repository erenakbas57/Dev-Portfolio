// About.js
import React from "react";
import Testimonial from "./1Testimonial";
import Service from "./1Service";
import Text from "./1Text";

import text from "../../Data/Text";
import service from '../../Data/Service';


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

      {/*
        - service
      */}
      <section className="service">
        <h3 className="h3 service-title">Neler Yapıyorum?</h3>
        <ul className="service-list">
          {service.map((item, index) => (
            <Service key={index} item={item} />
          
          ))}
        </ul>
      </section>

      <Testimonial />

      {/*
    - clients
  */}

      <section className="clients">
        <h3 className="h3 clients-title">Müşteriler</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="a">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
