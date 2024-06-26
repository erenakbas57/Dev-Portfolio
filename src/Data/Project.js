import Minishell from '../assets/images/projects/minishell.png';
import Library from '../assets/images/projects/kihmed.png';
import Cub3d from '../assets/images/projects/cub3d.png';

import {  SiC, SiCplusplus, SiCsharp, SiDotnet   } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";

const icons = {
    C: <SiC size={32} color='#6295cc'/>,
    CSharp: <SiCsharp size={32} color='#9669cf'/>,
    Bash: <BsFillTerminalFill size={40} color='#f0f0f0'/>,
    DotNet: <SiDotnet size={48} color='white'/>,
    Game: <IoGameController size={40} color='#28A745'/>,
    CPlusPlus: <SiCplusplus size={32} color='#6295cc'/>,
};

const project = [
    {
      name: 'MiniShell',
      photo: Minishell,
      category: 'C',
      text: 'MiniShell, temel bash kabuğu komutlarını C dilinde yeniden uygulayan bir komut satırı arayüzüdür. Bu proje, Unix tabanlı işletim sistemlerinde kullanılan shell (kabuk) programlarının çalışma prensiplerini anlamak ve uygulamalı deneyim kazanmak amacıyla geliştirilmiştir.',
      tech: ['C', 'Bash'],
      property: ['Temel dosya ve dizin işlemleri (cd, ls, pwd, mkdir, rmdir, touch, rm vb.)',
        'Çocuk süreçlerin oluşturulması ve yönetimi (fork ve exec ile)',
        'Girdi ve çıktı yönlendirme (redirection)',
        'Komut zincirleme ve arka planda çalıştırma (pipe ve background execution)'
      ],
      date: '2023 Kasım',
      link: 'https://github.com/erenakbas57/Minishell',
      learn: [ 'Sistem programlamada ileri düzeyde bilgi ve tecrübe', 
        'Süreç yönetimi, bellek yönetimi ve dosya sistemi işlemleri konularında pratik deneyim', 
        'Hata ayıklama ve performans optimizasyonu yeteneklerinin geliştirilmesi']
    },
    {
      name: 'Library Management System',
      photo: Library,
      category: 'C#',
      text: 'C# dilinde geliştirilen bu proje, kapsamlı bir kütüphane ve market yönetim sistemidir. Proje, kütüphane işlemleri, üyelik yönetimi ve market satışlarının entegre bir şekilde yönetilmesini sağlar. Kullanıcı dostu arayüzü ile kullanıcıların ihtiyaçlarına yönelik kapsamlı çözümler sunar.',
      tech: ['CSharp', 'DotNet', 'Sql'],
      property: ['Üyelik Sistemi: Üye ekleme, çıkarma, güncelleme ve silme işlemleri',
        'Kütüphane Yönetimi: Kitap rafları ekleme, kitap ekleme, güncelleme ve silme işlemleri',
        'Ödünç Alma Sistemi: Kitapların ödünç alınması ve iade edilmesi süreçleri',
        'Market Yönetimi: Çay, kahve gibi ürünlerin stok takibi ve satış işlemleri',
        'Satış İstatistikleri: Aylık ve günlük satış istatistiklerinin filtrelenmesi ve görüntülenmesi',
        'Veri Filtreleme: İstenilen tarih aralıklarında satışların filtrelenmesi ve analiz edilmesi'
      ],
      date: '2023 Kasım',
      link: 'https://github.com/erenakbas57/LibraryManagementApp',
      learn: [ 'Veritabanı yönetimi ve SQL sorgulama konularında ileri düzeyde bilgi ve tecrübe', 
        'Nesne yönelimli programlama (OOP) prensiplerinin etkin kullanımı', 
        'Entity Framework ve LINQ teknolojilerinin kullanımı ve veri tabanı işlemlerinde pratik deneyim']
    },
    {
      name: 'Cub3d',
      photo: Cub3d,
      category: 'C',
      text: 'Cub3d, C dilinde yazılmış ve MiniLibX kütüphanesi kullanılarak raycasting yöntemiyle görüntü işleme yapılan bir projedir. Bu proje, klasik Wolfenstein 3D oyununun bir benzerini oluşturmayı amaçlamaktadır. Oyuncuların 3D bir ortamda gezinmelerini ve etkileşimde bulunmalarını sağlar.',
      tech: ['C', 'Game'],
      property: ['Raycasting Görüntü İşleme: 2D haritayı kullanarak 3D perspektif ile görüntü oluşturma',
        'MiniLibX Kütüphanesi Kullanımı: Grafik ve pencere yönetimi için MiniLibX kütüphanesinin entegrasyonu',
        'Oyun Mekanikleri: Oyuncu hareketi, çarpışma algılama ve basit etkileşimler',
        'Doku (Texture) Yönetimi: Duvar ve zemin gibi yüzeylerin dokularının işlenmesi',
        'Performans Optimizasyonu: Verimli raycasting algoritması ile gerçek zamanlı görüntü işleme'
      ],
      date: '2023 Kasım',
      link: 'https://github.com/erenakbas57/cub3d',
      learn: [ '2D ve 3D matematiksel kavramların uygulamalı kullanımı', 
        'Oyun geliştirme süreçlerinde kullanılan temel algoritmalar ve veri yapıları hakkında derinlemesine anlayış', 
        'Grafik programlama ve görüntü işleme teknikleri konusunda ileri düzey bilgi ve deneyim']
    }

  ]

  export default project;
  export { icons };