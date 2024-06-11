import { MdEmail, MdLocalPhone, MdLocationOn   } from "react-icons/md";
import { FaCalendar, FaCarAlt, } from "react-icons/fa";
import { GiPistolGun  } from "react-icons/gi";

const contact = [
    {
      title: 'Email',
      value: 'erenakbas057@gmail.com',
      link: 'mailto:erenakbas057@gmail.com',
      icon: <MdEmail/>
    },  
  
    {
      title: 'İletişim',
      value: '+905379234261',
      link: 'tel:+905379234261',
      icon: <MdLocalPhone />
    },
    {
      title: 'Doğum Tarihi',
      value: 'November 2, 2001',
      dateTime: '2001-11-02',
      icon: <FaCalendar  />
    },
    {
      title: 'Adres',
      value: 'Gaziosmanpasa, Istanbul',
      icon: <MdLocationOn />
    },
    {
      title: 'Ehliyet',
      value: 'B1',
      icon: <FaCarAlt />
    },
    {
      title: 'Askerlik',
      value: '2030',
      icon: <GiPistolGun />
    }
  ];

  export default contact;