import React, { useState } from 'react';


import Info from './1Info';
import Contact from './1Contact';
import Social from './1Social';

import contact from '../../Data/Contact';
import socialMedia from '../../Data/Social';
import Profile from '../../Data/Profile';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar="">
      <Info Profile={Profile} toggleSidebar={toggleSidebar} />
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
        {contact.map((item, index) => (
            <Contact key={index} item={item} />
            ))}
        </ul>
        <div className="separator" />
        <ul className="social-list">
        {socialMedia.map((item, index) => (
            <Social key={index} item={item} />
            ))}
        </ul>
      </div>
      
    </aside>
  );
}

export default Sidebar;
