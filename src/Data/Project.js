import Minishell from '../assets/images/projects/minishell.png';
import Library from '../assets/images/projects/kihmed.png';
import Cub3d from '../assets/images/projects/cub3d.png';
import Solong from '../assets/images/projects/solong.png';

const project = [
  {
    name: 'Ping Pong Game',
    photo: Minishell,
    category: 'python',
    text: 'Okulumun son projesi olarak yaptığım bu projede Python ve Django kullanarak bir web tabanlı ping-pong oyunu geliştirdim. Bu proje, kullanıcıların ister normal şekilde kayıt olup ya da 42API ile giriş yaparak birbirleriyle ping-pong ve taş-kağıt-makas oynayabileceği ve arkadaşlık ilişkileri kurabileceği bir platform sundum. Yapay zekaya karşı oynanan oyunlarda istatistik tutularak kullanıcıların oyun geçmişi ve oyun istatistiklerine grafiksel olarak yer verildi. ',
    tech: ['python', 'django', 'bootstrap', 'html', 'css', 'javascript', 'postgresql', 'docker'],
    property: [ 'Giriş & Kayıt: Giriş ve kayıt olma yönetimi ve 42API ile entegrasyon',
      'Profil Yönetimi: Kullanıcı profili oluşturma, güncelleme işlemleri',
      'Oyun Oynama: Ping-Pong ve klasik taş-kâğıt-makas oyununun Matrix temalı versiyonu',
      'Arkadaşlık Sistemi: Başka oyuncuları takip edip detaylı istatistiklerini görme',
      'Oyuncu Arama: Kullanıcı adı, email ya da adla oyuncu arama ve takip etme',
      'Tasarım: Bootstrap ve CSS ile modern ve kullanıcı dostu UI/UX tasarımı',
      'SPA yapı: Vanilla JavaScript ile sağlanan SPA yapı ile daha hızlı bir kullanıcı deneyimi',
    ],
    date: '2024 Aralık',
    link: 'https://github.com/erenakbas57/ft_transcendence',
    learn: [ 'Web tabanlı uygulama geliştirme süreçlerinde ileri düzeyde bilgi ve tecrübe', 
      'Django ve Django REST Framework kullanarak web uygulamaları geliştirme', 
      'Docker ve Postgresql kullanarak uygulama dağıtımı ve veritabanı yönetimi', 
      'Frontend ve Backend teknolojileri ile entegrasyon ve veri akışı yönetimi',
      'Kullanıcı deneyimi (UX) ve kullanıcı arayüzü (UI) tasarımı konularında pratik deneyim',
      'Vanilla JavaScript ile SPA yapıları geliştirme ve uygulama performansını arttırma']
  },
    {
    name: 'Yapay Zeka Araçları',
    photo: '/path/to/your/image.jpg', // Buraya proje ile ilgili görselin yolunu ekleyin
    category: 'Web Geliştirme',
    text: ' https://ai-archive.vercel.app :  “Yapay Zeka Araçları” adlı projem, kullanıcıların farklı yapay zeka sitelerini keşfedebileceği bir platform sunuyor. Bu site, kullanıcıların en güncel ve faydalı yapay zeka araçlarına erişimini kolaylaştırmayı hedefliyor.',
    tech: ['Next js', 'TypeScript', 'tailwind', 'shadcnui', 'mongodb', 'prisma', 'Zustand'],
    property: [
      'Kullanıcıların farklı yapay zeka sitelerini keşfedebilmesi',
      'Modern ve duyarlı tasarım',
      'Veritabanı yönetimi için MongoDB ve Prisma kullanımı',
      'Durum yönetimi için Zustand entegrasyonu',
      'Kullanıcı dostu arayüz bileşenleri ile etkileşimli deneyim',
    ],
    date: '2025 Şubat',
    link: 'https://github.com/Ai-Archive', // Buraya projenizin GitHub linkini ekleyin
    learn: [
      'Next.js ile dinamik web uygulamaları geliştirme',
      'TypeScript ile daha güvenli ve hatasız kod yazma',
      'TailwindCSS ile modern ve duyarlı tasarım uygulama',
      'MongoDB ve Prisma ile veritabanı yönetimi konularında tecrübe',
      'Zustand ile etkili durum yönetimi gerçekleştirme',
    ]
  },
  {
      name: 'MiniShell',
      photo: Minishell,
      category: 'C',
      text: 'MiniShell, temel bash kabuğu komutlarını C dilinde yeniden uygulayan bir komut satırı arayüzüdür. Bu proje, Unix tabanlı işletim sistemlerinde kullanılan shell (kabuk) programlarının çalışma prensiplerini anlamak ve uygulamalı deneyim kazanmak amacıyla geliştirilmiştir.',
      tech: ['C', 'Shell'],
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
      tech: ['C#', '.Net Framework', 'MySql'],
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
    },
    {
      name: 'SoLong',
      photo: Solong,
      category: 'C',
      text: 'C dilinde yazdığım bu projede MiniLibX kütüphanesini kullanarak basit bir 2D oyun geliştirdim. Pacman benzeri bu oyunda verilen harita dosyasını okuduktan sonra çeşitli algoritmalar geliştirerek harita kontrolleri sağladım. MiniLibX kütüphanesi ile görsellerin işlenmesi ve pencere yönetimini sağladım',
      tech: ['C', 'Game'],
      property: ['Harita Okuma: Verilen harita dosyasını okuyarak oyun alanını oluşturma',
        'Oyuncu Kontrolleri: Oyuncunun hareketini sağlayan kontrollerin geliştirilmesi',
        'Harita Kontrolleri: Duvarlar, kapılar ve objelerin çarpışma kontrollerinin yapılması',
        'Grafik İşleme: MiniLibX kütüphanesi ile görsellerin işlenmesi ve pencere yönetimi',
      ],
      date: '2023 Kasım',
      link: 'https://github.com/erenakbas57/so_long',
      learn: [
        'Harita kontrollerini sağlamak için algoritma geliştirme ve uygulama yeteneklerinin geliştirilmesi',
        'Grafik programlama ve görüntü işleme teknikleri konusunda bilgi ve deneyim',
        'Performans optimizasyonu ve hata ayıklama yeteneklerinin geliştirilmesi',        
      ]
    },

  ]

  export default project;