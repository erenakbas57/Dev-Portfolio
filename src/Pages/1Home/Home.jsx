import React , { useState }  from "react";
import About from '../2About/About';
import Resume from '../2Resume/Resume';
import Certificates from '../2Certificate/Certificate';
import Project from '../2Project/Project';
import Contact from '../2Contact/Contact';
import Navbar from '../Navbar/Navbar';

function Home() {
  const [activeComponent, setActiveComponent] = useState("");

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
        return <About/>;
    }
  };

  return (
    <div className="main-content">
      <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Home;
