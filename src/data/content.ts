import { Category, Product, ShowroomEvent, Testimonial, InstagramPost } from '../types';

/**
 * MƏRKƏZİ ŞƏKİLLƏR KONFİQURASİYASI (CENTRAL IMAGES CONFIG)
 * Bütün şəkil keçidləri bu obyektdə cəmlənib. Müştərinin real fotoşəkilləri ilə
 * asanlıqla əvəz etmək mümkündür.
 */
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
  interiorService: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
  brandStory: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
  
  categories: {
    livingRoom: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    dining: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    accessories: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    classic: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80',
    contemporary: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },

  products: {
    eleganceSofa: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    auroraBed: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    marmaraTable: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80',
    bellagioConsole: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    milanoArmchair: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    palazzoCoffeeTable: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
    veneziaCabinet: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    romaCornerSofa: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
  },

  events: {
    milanDesign: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    marbleCraft: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    exclusiveOpening: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80',
  },

  instagram: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
  ]
};

export const BRAND = {
  name: 'Massimo Mebel',
  company: 'Massimo Group MMC',
  tagline: 'Dünya brendlərinin Bakıdakı ünvanı',
  city: 'Bakı, Azərbaycan',
  address: 'Babək prospekti 41A, Bakı, Azərbaycan',
  phone: '+994 50 600 23 24',
  phoneRaw: '994506002324',
  whatsappUrl: 'https://wa.me/994506002324',
  instagram: '@massimomebel.az',
  instagramUrl: 'https://instagram.com/massimomebel.az',
  email: 'info@massimomebel.az',
  workingHours: 'Bazar ertəsi – Bazar: 10:00 – 20:00',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2942407519967!2d49.88219467660232!3d40.38018617144501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0ee1e847c1%3A0x6b4fb6c91e4db957!2sBabek%20Ave%2041A%2C%20Baku!5e0!3m2!1sen!2saz!4v1711200000000!5m2!1sen!2saz',
  mapsDirectUrl: 'https://maps.google.com/?q=Babek+Avenue+41A+Baku',
};

export const STATS = [
  {
    value: '94 B+',
    label: 'Instagram izləyicisi',
    sublabel: 'Azərbaycanın lüks mebel auditoriyası',
  },
  {
    value: 'Dünya brendləri',
    label: 'İtaliya və Avropa istehsalı',
    sublabel: 'Eksklüziv distribyutor tərəfdaşlığı',
  },
  {
    value: 'Babək prospekti',
    label: 'Bakıda flaqman showroom',
    sublabel: 'Geniş ekspozisiya və VIP məsləhət',
  },
];

export const COLLECTIONS: Category[] = [
  {
    id: 'living-room',
    name: 'Qonaq otağı',
    nameEn: 'Living Room',
    nameRu: 'Гостиная',
    subtitle: 'Zəriflik və komfortun vəhdəti',
    description: 'İtalyan dəri və parçalarının incə toxunuşu ilə hazırlanmış divanlar, erqonomik kreslolar və zərif orta masalar.',
    image: IMAGES.categories.livingRoom,
    itemCount: '24 model',
    highlights: ['Premium İtalyan tekstili', 'Massiv fıstıq və qoz karkası', 'Erqonomik modulyar dizayn'],
  },
  {
    id: 'bedroom',
    name: 'Yataq otağı',
    nameEn: 'Bedroom',
    nameRu: 'Спальня',
    subtitle: 'Hüzur və aristokratik rahatlıq',
    description: 'Gecənin sakitliyini lükslə qovuşduran yataq dəstləri, funksional qarderoblar və zərif tualet masaları.',
    image: IMAGES.categories.bedroom,
    itemCount: '18 model',
    highlights: ['Ortopedik yataq bazaları', 'Dəri və velür başlıqlar', 'İnteqrasiya olunmuş gizli işıqlandırma'],
  },
  {
    id: 'dining',
    name: 'Yemək otağı',
    nameEn: 'Dining Room',
    nameRu: 'Столовая',
    subtitle: 'Ziyafət süfrələrinin təntənəsi',
    description: 'Təbii İtalyan mərməri, qiymətli ağac növləri və xüsusi dizaynlı stullarla ailə və qonaq görüşləriniz unudulmaz olacaq.',
    image: IMAGES.categories.dining,
    itemCount: '16 model',
    highlights: ['Calacatta və Nero Marquina mərməri', 'Pirinç və xrom aksentlər', 'Böyüyən innovativ mexanizmlər'],
  },
  {
    id: 'accessories',
    name: 'Aksesuarlar',
    nameEn: 'Accessories & Lighting',
    nameRu: 'Аксессуары и свет',
    subtitle: 'İnteryeri tamamlayan incə sənət',
    description: 'Eksklüziv büllur və pirinç çılçıraqlar, əl toxuması xalçalar, heykəltəraşlıq elementləri və dekorativ vazalar.',
    image: IMAGES.categories.accessories,
    itemCount: '40+ məhsul',
    highlights: ['Əl işi Murano şüşəsi', 'Təbii ipək və yun xalçalar', 'Memarlıq torşer və bra sistemləri'],
  },
  {
    id: 'classic',
    name: 'Klassik kolleksiya',
    nameEn: 'Classic Collection',
    nameRu: 'Классическая коллекция',
    subtitle: 'Zamansız aristokratik dəyər',
    description: 'Qızıl suyuna çəkilmiş oyma detallar, kral saraylarının möhtəşəmliyini müasir villalara gətirən sənətkarlıq ənənəsi.',
    image: IMAGES.categories.classic,
    itemCount: '12 komplekt',
    highlights: ['Əl oyması ağac detallar', '24K qızıl yarpaq tətbiqi', 'Klassik İtalyan damask parçaları'],
  },
  {
    id: 'contemporary',
    name: 'Müasir kolleksiya',
    nameEn: 'Contemporary Collection',
    nameRu: 'Современная коллекция',
    subtitle: 'Gələcəyin minimalist estetizmi',
    description: 'Düz xətlər, açıq məkan fəlsəfəsi, mat lak, qara metal və təbii teksturaların ahəngdar harmoniyası.',
    image: IMAGES.categories.contemporary,
    itemCount: '20 komplekt',
    highlights: ['Minimalist arxitektura', 'Gizli qulp və yumşaq bağlanış sistemləri', 'Antrasit və qum bej tonları'],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'elegance-sofa',
    name: 'Elegance Divan Dəsti',
    category: 'Qonaq otağı',
    categoryId: 'living-room',
    image: IMAGES.products.eleganceSofa,
    description: 'Zərif xətlərə və maksimum komforta malik dəbdəbəli üç yerlik divan və qoşa kreslo komplekti. Yüksək sıxlıqlı anatomik süngər və xüsusi nəfəs alan İtalyan kətan parça ilə təchiz edilib.',
    material: 'Premium kətan tekstil, massiv fıstıq karkas, fırçalanmış pirinç ayaqlar',
    dimensions: '280 x 105 x 78 sm',
    origin: 'İtaliya',
  },
  {
    id: 'aurora-bed',
    name: 'Aurora Yataq Dəsti',
    category: 'Yataq otağı',
    categoryId: 'bedroom',
    image: IMAGES.products.auroraBed,
    description: 'Geniş yumşaq başlıqlı, dəri haşiyəli və daxili gizli işıqlandırmalı lüks yataq. Qarderob və iki ədəd mərmər örtüklü komod ilə tamamlanır.',
    material: 'Təbii nubuk dəri, qoz ağacı, Calacatta mərmər detallar',
    dimensions: '220 x 210 x 135 sm (Döşək: 180 x 200 sm)',
    origin: 'İtaliya',
  },
  {
    id: 'marmara-table',
    name: 'Marmara Yemək Masası',
    category: 'Yemək otağı',
    categoryId: 'dining',
    image: IMAGES.products.marmaraTable,
    description: 'Monolit təbii mərmər üst lövhə və heykəltəraşlıq nümunəsi olan əyri metal əsas. 8-10 nəfərlik komfortlu ziyafət üçün idealdır.',
    material: 'Cilalanmış təbii mərmər, elektrostatik qara metal və qızıl halqa',
    dimensions: '260 x 115 x 76 sm',
    origin: 'Avropa',
  },
  {
    id: 'bellagio-console',
    name: 'Bellagio Konsol və Güzgü',
    category: 'Dəhliz & Qonaq',
    categoryId: 'accessories',
    image: IMAGES.products.bellagioConsole,
    description: 'Giriş və ya qonaq otağı üçün nəzərdə tutulmuş incə profilli konsol masa və arxadan işıqlanan dekorativ oval güzgü.',
    material: 'Tünd qoz ağacı finişi, şampan qızılı karkas, füme güzgü',
    dimensions: '160 x 42 x 85 sm',
    origin: 'İtaliya',
  },
  {
    id: 'milano-armchair',
    name: 'Milano İstirahət Kreslosu',
    category: 'Lounge & Qonaq',
    categoryId: 'living-room',
    image: IMAGES.products.milanoArmchair,
    description: '360 dərəcə fırlanan mexanizmə və yüksək arxalığa malik fərdi istirahət kreslosu. Oxu küncləri və zərif interyerlər üçün vurğu parçası.',
    material: 'İtalyan konyak rəngli dəri, mat qara polad baza',
    dimensions: '88 x 92 x 95 sm',
    origin: 'İtaliya',
  },
  {
    id: 'palazzo-coffee-table',
    name: 'Palazzo Mərmər Orta Masa',
    category: 'Aksesuarlar & Qonaq',
    categoryId: 'living-room',
    image: IMAGES.products.palazzoCoffeeTable,
    description: 'İki pilləli asimmetrik kompozisiya: biri mat mərmər, digəri tünd tonlaşdırılmış şüşə və qızılı çərçivə.',
    material: 'Nero Marquina mərmər, temperli şüşə, bürünc örtük',
    dimensions: '120 x 80 x 40 sm & 60 x 60 x 48 sm',
    origin: 'İtaliya',
  },
  {
    id: 'venezia-cabinet',
    name: 'Venezia Vitrin Şkafı',
    category: 'Yemək otağı',
    categoryId: 'dining',
    image: IMAGES.products.veneziaCabinet,
    description: 'Daxili isti LED xətləri ilə qiymətli qab-qacaq və kolleksiya əşyalarınızı nümayiş etdirən ultra-şəffaf temperli şüşə vitrin.',
    material: 'Tünd tonlu alüminium profil, şəffaf şüşə, daxili dəri panellər',
    dimensions: '110 x 48 x 210 sm',
    origin: 'Avropa',
  },
  {
    id: 'roma-corner-sofa',
    name: 'Roma Yumşaq Künc Divanı',
    category: 'Qonaq otağı',
    categoryId: 'contemporary',
    image: IMAGES.products.romaCornerSofa,
    description: 'Geniş ailəvi məkanlar üçün dərindən oturma zonası təklif edən modulyar lüks künc divanı. Su itələyici tekstura ilə örtülmüşdür.',
    material: 'Premium bukle parça, gizli polad birləşmələr, qaz tükü qatı',
    dimensions: '340 x 220 x 72 sm',
    origin: 'İtaliya',
  },
];

export const INTERIOR_STEPS = [
  {
    number: '01',
    title: 'Konsultasiya və Məkan Təhlili',
    description: 'Flaqman showroom-umuzda və ya bilavasitə obyektinizdə görüşərək memarlıq layihəniz, istəkləriniz və həyat tərziniz ətraflı dinlənilir.',
  },
  {
    number: '02',
    title: 'Fərdi Dizayn və 3D Yerləşdirmə',
    description: 'Təcrübəli interyer memarlarımız tərəfindən məkanın ölçülərinə uyğun mebel düzülüşü, parça, dəri və mərmər nümunələri seçilərək vizual təqdimat hazırlanır.',
  },
  {
    number: '03',
    title: 'Eksklüziv Seçim və Sifariş',
    description: 'İtaliya və Avropanın aparıcı brendlərindən birbaşa zavod sifarişi rəsmiləşdirilir, istehsal və çatdırılma prosesi hər mərhələdə izlənilir.',
  },
  {
    number: '04',
    title: 'VIP Çatdırılma və Quraşdırma',
    description: 'Xüsusi təlim keçmiş texniki heyətimiz tərəfindən ağ əlcək xidməti ilə səliqəli çatdırılma, dəqiq montaj və uzunmüddətli zəmanət təmin olunur.',
  },
];

export const EVENTS: ShowroomEvent[] = [
  {
    id: 'event-1',
    title: 'Milano Design Week Rezonansı — 2026 Yeni Mövsüm',
    date: '15 May 2026 · 18:30',
    location: 'Flaqman Showroom, Babək pr. 41A',
    image: IMAGES.events.milanDesign,
    description: 'Milan Dizayn Həftəsində təqdim olunan ən son trendlərin Bakı premyerası. Məşhur İtalyan dizaynerlərin yeni kolleksiyaları ilə tanışlıq axşamı.',
    tag: 'Nümunəvi tədbir / Arxiv',
  },
  {
    id: 'event-2',
    title: 'İtalyan Mərməri və Ağac Sənətkarlığı: Memarlarla Görüş',
    date: '24 İyun 2026 · 19:00',
    location: 'VIP Lounge, Massimo Mebel',
    image: IMAGES.events.marbleCraft,
    description: 'Aparıcı yerli memarlar və interyer dizaynerləri üçün xüsusi ustad dərsi: təbii daşların mebellə vəhdəti və fərdi layihələndirmə sirləri.',
    tag: 'Nümunəvi tədbir / Arxiv',
  },
  {
    id: 'event-3',
    title: 'Özəl Qonaq Otağı Kolleksiyasının Eksklüziv Açılışı',
    date: '18 İyul 2026 · 17:00',
    location: 'Əsas Ekspozisiya Zalı',
    image: IMAGES.events.exclusiveOpening,
    description: 'Yalnız dəvətnamə ilə: Avropadan gətirilmiş limitli sayda istehsal olunan premium mebel seriyasının qapalı təqdimatı və furşet.',
    tag: 'Nümunəvi tədbir / Arxiv',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Massimo Mebel-dən seçdiyimiz qonaq otağı dəsti evimizin bütün abu-havasını dəyişdi. Hər detalda İtalyan zərifliyi və yüksək keyfiyyət hiss olunur. Qonaqlarımızın heyranlığı bitmir.',
    author: 'Leyla Məmmədova',
    district: 'Bakı Ağ Şəhər (White City)',
    project: 'Qonaq və Yemək otağı mebeli',
  },
  {
    id: 't-2',
    quote: 'Mənzilin interyer dizaynı üçün verdikləri məsləhətlər və seçilən mebellərin uyğunluğu heyranedicidir. Çatdırılma və montaj xidməti isə sözün əsl mənasında qüsursuz idi.',
    author: 'Elmir Qasımov',
    district: 'Nəsimi rayonu',
    project: 'Bütöv mənzil mebel təchizatı',
  },
  {
    id: 't-3',
    quote: 'Bakıda bu səviyyədə dünya brendlərini, peşəkar yanaşmanı və lüks estetikanı bir arada tapmaq həqiqətən nadirdir. Massimo komandasına təşəkkür edirik.',
    author: 'Nərgiz Əliyeva',
    district: 'Badamdar qəsəbəsi',
    project: 'Villa yataq və istirahət zonası',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: IMAGES.instagram[0],
    caption: 'Müasir memarlıqda zərif formalar və təbii teksturalar.',
    likes: '1,420 bəyənmə',
  },
  {
    id: 'ig-2',
    image: IMAGES.instagram[1],
    caption: 'Hüzurlu yataq otağı üçün qüsursuz işıqlandırma və İtalyan dərisi.',
    likes: '2,180 bəyənmə',
  },
  {
    id: 'ig-3',
    image: IMAGES.instagram[2],
    caption: 'Mərmər masanın ətrafında toplanan unudulmaz axşamlar.',
    likes: '1,890 bəyənmə',
  },
  {
    id: 'ig-4',
    image: IMAGES.instagram[3],
    caption: 'Showroom-umuzda yeni mövsüm ekspozisiyası sizi gözləyir.',
    likes: '3,110 bəyənmə',
  },
  {
    id: 'ig-5',
    image: IMAGES.instagram[4],
    caption: 'Hər detalında sənətkarlıq: eksklüziv işıqlandırma aksesuarları.',
    likes: '1,640 bəyənmə',
  },
  {
    id: 'ig-6',
    image: IMAGES.instagram[5],
    caption: 'Lüks lounge kresloları ilə evinizdə şəxsi istirahət guşəsi.',
    likes: '2,040 bəyənmə',
  },
  {
    id: 'ig-7',
    image: IMAGES.instagram[6],
    caption: 'İtalyan zövqü ilə işlənmiş qonaq otağı kompozisiyası.',
    likes: '2,570 bəyənmə',
  },
  {
    id: 'ig-8',
    image: IMAGES.instagram[7],
    caption: 'Massimo Mebel — Babək prospekti 41A ünvanında.',
    likes: '3,840 bəyənmə',
  },
];
