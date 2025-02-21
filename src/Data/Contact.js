import {  MdLocationOn   } from "react-icons/md";
import { FaCalendar, FaCarAlt } from "react-icons/fa";
import { GiPistolGun  } from "react-icons/gi";


const contact = [
    {
      title: 'Doğum Tarihi',
      value: '2 Kasım 2001',
      dateTime: '2001-11-02',
      icon: <FaCalendar  size={25}/>
    },
    {
      title: 'Adres',
      value: 'Gaziosmanpasa, Istanbul',
      icon: <MdLocationOn size={25}/>
    },
    {
      title: 'Ehliyet',
      value: 'B1',
      icon: <FaCarAlt size={25}/>
    },
    {
      title: 'Askerlik',
      value: 'Muaf',
      icon: <GiPistolGun size={25}/>
    }
  ];

  export default contact;