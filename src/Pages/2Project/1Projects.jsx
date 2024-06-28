import React, { useState, useEffect } from "react";
import Modal from "./1Modal";
import project from "../../Data/Project";
import { skillsImage } from "../../Data/SkillImage";

import "./1project.css";

function Projects() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    photo: "",
    category: "",
    text: "",
    tech: [],
    property: [],
    date: "",
    link: "",
    learn: [],
  });

  useEffect(() => {
    if (modalActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalActive]);

  const openModal = (project) => {
    setModalData({
      name: project.name,
      photo: project.photo,
      category: project.category,
      text: project.text,
      tech: project.tech,
      property: project.property,
      date: project.date,
      link: project.link,
      learn: project.learn,
    });
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <section className="projects">
      <ul className="projects-list">
        {project.map((project, index) => (
          <li
            key={index}
            className="projects-item"
            onClick={() => openModal(project)}
          >
              <figure className="projects-avatar-box">
                {project.tech.map((iconName, index) => (
                  <img src={skillsImage(iconName)} alt={project} key={index} />
                ))}
  {/* {project.tech.map((iconName, index) => (
    <img key={index} src={icons[iconName]} alt={iconName} />
  ))} */}
              </figure>
              <h4 className="projects-item-title">{project.name}</h4>
              <div className="projects-text">
                <p>{project.text}</p>
              </div>
              <div className="project-detail-info">
                <p>Detaylar ve uygulama bağlantısı için tıklayın</p>
              </div>
          </li>
        ))}
      </ul>

      <Modal active={modalActive} data={modalData} onClose={closeModal} />
    </section>
  );
}

export default Projects;
