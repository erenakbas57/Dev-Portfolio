import React, {useState} from 'react';
import Info from './1Info';
import Contact from './1Contact';
import Social from './1Social';
import contact from '../../Data/Contact';
import socialMedia from '../../Data/Social';
import Profile from '../../Data/Profile';

function Sidebar({ isActive, setIsActive }) {
  const [activeSocialIndex, setActiveSocialIndex] = useState(null);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const handleSocialClick = (index) => {
    if (activeSocialIndex === index) {
      setActiveSocialIndex(null); // Aynı social item tekrar tıklandıysa kapat
    } else {
      setActiveSocialIndex(index); // Yeni bir social item tıklandıysa aç
    }
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
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
            <Social
              key={index}
              item={item}
              onClick={() => handleSocialClick(index)}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
