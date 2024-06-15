import { SiCsharp, SiCplusplus, SiC, SiFlutter, SiFirebase, SiDotnet, SiGnubash } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs} from "react-icons/fa6";

const icons = {
  Html5: <FaHtml5 size={24} color="#ffdb70" />,
  Css3: <FaCss3 size={24} color="#ffdb70" />,
  Js: <FaJs size={24} color="#ffdb70" />,
  Csharp: <SiCsharp size={24} color="#ffdb70" />,
  Cplusplus: <SiCplusplus size={24} color="#ffdb70" />,
  C: <SiC size={24} color="#ffdb70" />,
  Flutter: <SiFlutter size={24} color="#ffdb70" />,
  Firebase: <SiFirebase size={24} color="#ffdb70" />,
  Dotnet: <SiDotnet size={24} color="#ffdb70" />,
  Bash: <SiGnubash size={24} color="#ffdb70" />
};

const skill = [
    {
      name: 'Flutter',
      value: 35,
      icon: ['Flutter', 'Firebase']
    },
    {
      name: 'C',
      value: 70,
      icon: ['C']
    },
    {
      name: 'C++',
      value: 90,
      icon: ['Cplusplus']
    },
    {
      name: 'C#',
      value: 70,
      icon: ['Csharp', 'Dotnet']
    },
    {
      name: 'HTML & CSS',
      value: 40,
      icon: ['Html5', 'Css3']
    },
  ]

  export default skill;
  export { icons };