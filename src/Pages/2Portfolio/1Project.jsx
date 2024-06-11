import React from "react";

function Project() {
    return (
        <li
        className="project-item  active"
        data-filter-item=""
        data-category="web development"
      >
        <a href="a">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src="./assets/images/project-1.jpg"
              alt="finance"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Finance</h3>
          <p className="project-category">Web development</p>
        </a>
      </li>
    );
}

export default Project;