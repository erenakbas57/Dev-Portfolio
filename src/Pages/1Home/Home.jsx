import React, { useState, useEffect } from "react";
import About from '../2About/About';
import Resume from '../2Resume/Resume';
import Certificates from '../2Certificate/Certificate';
import Project from '../2Project/Project';
import Contact from '../2Contact/Contact';
import Navbar from '../Navbar/Navbar';

import { useSocialContext } from '../../SocialContext';

function Home({ setIsSidebarActive }) {
  const [activeComponent, setActiveComponent] = useState("about");

  const { setIsEmailFlipped } = useSocialContext();
  const { setIsPhoneFlipped } = useSocialContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsEmailFlipped(false); // activeComponent değişince kartı ön yüze çevir
    setIsPhoneFlipped(false); // activeComponent değişince kartı ön yüze çevir
  }, [activeComponent, setIsEmailFlipped, setIsPhoneFlipped]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "certificate":
        return <Certificates />;
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setIsSidebarActive(false); // Close sidebar when component changes
  };

  return (
    <div className="main-content">
      <Navbar setActiveComponent={handleComponentChange} activeComponent={activeComponent} />
      <div className="content has-scrollbar">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Home;
