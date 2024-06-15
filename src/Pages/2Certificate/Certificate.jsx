// Portfolio.js
import React from "react";
import Certificate from "./1Certificate";
import certificate from '../../Data/Certificate';

function Certificates() {
  return (
    <article className="certificate active" data-page="certificate">
      <header>
        <h2 className="h2 article-title">Sertifikalar</h2>
      </header>
      <section className="certificates">
        <ul className="certificate-list">
          {certificate.map((item, index) => (
            <Certificate item={item}/>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Certificates;
