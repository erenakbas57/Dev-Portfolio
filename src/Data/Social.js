import { FaInstagram, FaGithub, FaMedium, FaLinkedin  } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const socialMedia = [
    {
      name: 'logo-github',
      type: 'github',
      link: 'https://github.com/erenakbas57',
      icon: <FaGithub size={40} color="#ffdb70"/>
    },
    {
      name: 'logo-medium',
      type: 'medium',
      link: 'https://medium.com/@erenakbas',
      icon: <FaMedium size={40} color="#ffdb70"/>
    },
    {
      name: 'logo-linkedin',
      type: 'linkedin',
      link: 'https://linkedin.com/in/erenakbas',
      icon: <FaLinkedin size={40} color="#ffdb70"/>
    },
    {
      name: 'logo-phone',
      type: 'phone',
      link: '05379234261',
      icon: <MdLocalPhone size={40} color="#ffdb70"/>
    },
    {
      name: 'logo-mail',
      type: 'email',
      link: 'erenakbas057@gmail.com',
      icon: <MdEmail size={40} color="#ffdb70"/>
    },
    {
      name: 'logo-instagram',
      type: 'instagram',
      link: 'https://instagram.com/erenakbas057',
      icon: <FaInstagram size={40} color="#ffdb70"/>
    }
  ];

  export default socialMedia;