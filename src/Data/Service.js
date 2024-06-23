import { SiCsharp, SiCplusplus, SiC, SiFlutter, SiFirebase, SiDotnet } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa6";

const icons = {
    FaHtml5: <FaHtml5 size={40} color="#ffdb70" />,
    FaCss3: <FaCss3 size={40} color="#ffdb70" />,
    FaJs: <FaJs size={40} color="#ffdb70" />,
    SiCsharp: <SiCsharp size={40} color="#ffdb70" />,
    SiCplusplus: <SiCplusplus size={40} color="#ffdb70" />,
    SiC: <SiC size={40} color="#ffdb70" />,
    SiFlutter: <SiFlutter size={40} color="#ffdb70" />,
    SiFirebase: <SiFirebase size={40} color="#ffdb70" />,
    SiDotnet: <SiDotnet size={40} color="#ffdb70" />,
};

const service = [
    {
        name: 'Web Programlama',
        description: "'Çok oyunculu ping-pong oyunlu website' projesini takım arkadaşlarımile geliştirmek için Front-End kursu almaya başladım. HTML-CSS temellerimi tekrar ettikten sonra şuan JavaScript öğrenmekteyim.",
        icon: ['FaHtml5', 'FaCss3', 'FaJs'],
    },
    {
        name: 'Flutter',
        description: "UI/UX tasarımları geliştirip Firebase veritabanı ile projeler geliştirmekteyim.",
        icon: ['SiFlutter', 'SiFirebase'],
    },
    {
        name: 'Masaüstü Programlama',
        description: "C# .Net Framework ile eğitimime devam etmekteyim. Bu eğitimde katmanlı mimari, EF6 ve tasarım desenleri ve birçok ileri düzey konular hakkında proje örnekleri yaparak deneyim kazanmaktayım.",
        icon: ['SiCsharp', 'SiDotnet'],
    }
]

export default service;
export { icons };