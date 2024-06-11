import React , { useState }  from "react";
import About from '../2About/About';
import Resume from '../2Resume/Resume';
import Portfolio from '../2Portfolio/Portfolio';
import Blog from '../2Blog/Blog';
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
      case "portfolio":
        return <Portfolio />;
      case "blog":
        return <Blog />;
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
