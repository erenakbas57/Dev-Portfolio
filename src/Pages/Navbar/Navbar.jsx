import React from "react";

function Navbar({ setActiveComponent, activeComponent }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "about" ? "active" : ""}`}
            onClick={() => setActiveComponent("about")}
          >
            Hakkımda
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "resume" ? "active" : ""}`}
            onClick={() => setActiveComponent("resume")}
          >
            Kariyer
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "certificate" ? "active" : ""}`}
            onClick={() => setActiveComponent("certificate")}
          >
            Sertifikalar
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "project" ? "active" : ""}`}
            onClick={() => setActiveComponent("project")}
          >
            Projeler
          </button>
        </li>
        {/* <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "contact" ? "active" : ""}`}
            onClick={() => setActiveComponent("contact")}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
