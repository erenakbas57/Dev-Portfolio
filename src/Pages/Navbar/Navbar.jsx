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
            className={`navbar-link ${activeComponent === "portfolio" ? "active" : ""}`}
            onClick={() => setActiveComponent("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "blog" ? "active" : ""}`}
            onClick={() => setActiveComponent("blog")}
          >
            Blog
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "contact" ? "active" : ""}`}
            onClick={() => setActiveComponent("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
