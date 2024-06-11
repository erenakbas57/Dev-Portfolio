import React, { useState } from 'react';
import { MdMoreHoriz } from "react-icons/md";



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
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Profile.image} alt={Profile.image} width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title={Profile.name}>
            {Profile.name}
          </h1>
          <h1 className="name" title={Profile.name}>
            {Profile.surname}
          </h1>
          <p className="title">{Profile.title}</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn="" onClick={toggleSidebar}>
        <span>Kişisel Bilgiler</span>
        <MdMoreHoriz className='icon' size={20}/>
        </button>
      </div>
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
