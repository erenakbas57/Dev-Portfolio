import React from "react";
import './1info.css';

import { MdMoreHoriz } from "react-icons/md";

function Contact({Profile, toggleSidebar}) {
    return (
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
    );
}

export default Contact;