/* ============================================================
   Site Yapılandırma Dosyası - localStorage tabanlı
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

/* Varsayılan site ayarları (JSON tabanlı) */
var defaultConfig = {
  logo: {
    text: 'Efesoft Emlak',
    icon: 'fas fa-building'
  },
  contact: {
    phone: '+90 (212) 345 67 89',
    email: 'info@efesoftemlak.com',
    address: 'Büyükdere Caddesi No:123, Levent, İstanbul 34394'
  },
  hero: {
    title: 'Hayalinizdeki',
    titleSpan: 'Evi Bulun',
    description: 'Premium gayrimenkul danışmanlığı ile lüks konut, villa ve yatırımlık gayrimenkuller'
  },
  services: [
    {
      icon: 'fas fa-home',
      title: 'Satılık Konutlar',
      description: 'Size özel seçilmiş lüks konut, daire ve rezidans seçenekleri ile hayalinizdeki eve kavuşun.'
    },
    {
      icon: 'fas fa-key',
      title: 'Kiralık İlanlar',
      description: 'Kurumsal ve bireysel kiralama ihtiyaçlarınıza özel, premium kiralık gayrimenkul portföyü.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Gayrimenkul Danışmanlığı',
      description: 'Uzman ekibimizle gayrimenkul alım-satım, yatırım ve portföy yönetimi danışmanlığı.'
    },
    {
      icon: 'fas fa-calculator',
      title: 'Ekspertiz ve Değerleme',
      description: 'Profesyonel gayrimenkul değerleme hizmeti ile gayrimenkulünüzün gerçek piyasa değerini öğrenin.'
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Proje Yönetimi',
      description: 'Gayrimenkul projelerinizin başından sonuna kadar profesyonel yönetim ve danışmanlık hizmeti.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Yatırım Danışmanlığı',
      description: 'Yüksek getirili gayrimenkul yatırım fırsatları için size özel yatırım stratejileri.'
    }
  ],
  images: {
    hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    cta: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80'
  },
  properties: [
    {
      title: 'Boğaz Manzaralı Villa',
      location: 'Sarıyer',
      price: 12500000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80'
      ],
      bed: '5+1',
      bath: 4,
      sqft: 350,
      type: 'sale',
      featured: true
    },
    {
      title: 'Merkez Ofis Dairesi',
      location: 'Levent',
      price: 4800000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-7230097a2e42?w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
      ],
      bed: '3+1',
      bath: 2,
      sqft: 140,
      type: 'sale',
      featured: false
    },
    {
      title: 'Sahil Kenarında Yazlık',
      location: 'Çeşme',
      price: 6200000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80'
      ],
      bed: '4+1',
      bath: 3,
      sqft: 200,
      type: 'sale',
      featured: false
    },
    {
      title: 'Modern Rezidans Dairesi',
      location: 'Etiler',
      price: 3950000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80'
      ],
      bed: '2+1',
      bath: 2,
      sqft: 110,
      type: 'sale',
      featured: false
    },
    {
      title: 'Müstakil Bahçeli Ev',
      location: 'Çamlıca',
      price: 8750000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
        'https://images.unsplash.com/photo-1600566753372-3c0a2b9e6b8b?w=600&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
      ],
      bed: '5+1',
      bath: 3,
      sqft: 400,
      type: 'sale',
      featured: false
    },
    {
      title: 'Prestij Ofis Alanı',
      location: 'Maslak',
      price: 15000000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-7230097a2e42?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'
      ],
      bed: '6+1',
      bath: 4,
      sqft: 500,
      type: 'sale',
      featured: false
    },
    {
      title: 'Tarihi Taş Ev',
      location: 'Büyükada',
      price: 5200000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80'
      ],
      bed: '3+1',
      bath: 2,
      sqft: 180,
      type: 'sale',
      featured: false
    },
    {
      title: 'Yalı Dairesi',
      location: 'Bebek',
      price: 11000000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80',
        'https://images.unsplash.com/photo-1600585152220-9035f2f5d2c8?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80'
      ],
      bed: '4+1',
      bath: 3,
      sqft: 250,
      type: 'sale',
      featured: false
    },
    {
      title: 'Tripleks Çatı Dairesi',
      location: 'Nişantaşı',
      price: 9800000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600585154084-7230097a2e42?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80'
      ],
      bed: '5+1',
      bath: 4,
      sqft: 320,
      type: 'sale',
      featured: false
    },
    {
      title: 'Doğa İçinde Villa',
      location: 'Polonezköy',
      price: 7500000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80'
      ],
      bed: '6+1',
      bath: 4,
      sqft: 500,
      type: 'sale',
      featured: false
    },
    {
      title: 'Kompakt Ofis',
      location: 'Kadıköy',
      price: 1850000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=80'
      ],
      bed: '2+1',
      bath: 1,
      sqft: 85,
      type: 'sale',
      featured: false
    },
    {
      title: 'Deniz Manzaralı Apartman',
      location: 'Alanya',
      price: 2900000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80'
      ],
      bed: '3+1',
      bath: 2,
      sqft: 150,
      type: 'sale',
      featured: false
    },
    {
      title: 'Köşk Konutu',
      location: 'Tarabya',
      price: 22000000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80'
      ],
      bed: '7+1',
      bath: 5,
      sqft: 600,
      type: 'sale',
      featured: false
    },
    {
      title: 'Loft Daire',
      location: 'Galata',
      price: 2200000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-7230097a2e42?w=600&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80'
      ],
      bed: '1+1',
      bath: 1,
      sqft: 65,
      type: 'sale',
      featured: false
    },
    {
      title: 'Residence Penthouse',
      location: 'Ataşehir',
      price: 7200000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600585154084-7230097a2e42?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80',
        'https://images.unsplash.com/photo-1600585152220-9035f2f5d2c8?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80'
      ],
      bed: '4+1',
      bath: 3,
      sqft: 280,
      type: 'sale',
      featured: false
    },
    {
      title: 'Havuzlu Villa',
      location: 'Bodrum',
      price: 9500000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80'
      ],
      bed: '5+1',
      bath: 4,
      sqft: 380,
      type: 'sale',
      featured: false
    },
    {
      title: 'Tarihi Konak',
      location: 'Büyükada',
      price: 14000000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80'
      ],
      bed: '6+1',
      bath: 4,
      sqft: 450,
      type: 'sale',
      featured: false
    },
    {
      title: 'Resort Apartman',
      location: 'Antalya',
      price: 2400000,
      period: '',
      images: [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80'
      ],
      bed: '2+1',
      bath: 1,
      sqft: 90,
      type: 'sale',
      featured: false
    },
    {
      title: 'Ferah Aile Dairesi',
      location: 'Üsküdar',
      price: 18000,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18f6bff2a?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80'
      ],
      bed: '3+1',
      bath: 2,
      sqft: 130,
      type: 'rent',
      featured: false
    },
    {
      title: 'Plaza Katı Ofis',
      location: 'Levent',
      price: 25000,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'
      ],
      bed: '0+1',
      bath: 1,
      sqft: 120,
      type: 'rent',
      featured: false
    },
    {
      title: 'Lüks Havuzlu Villa',
      location: 'Kemerburgaz',
      price: 45000,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80'
      ],
      bed: '5+1',
      bath: 4,
      sqft: 400,
      type: 'rent',
      featured: false
    },
    {
      title: 'Stüdyo Daire',
      location: 'Taksim',
      price: 8500,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18f6bff2a?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-cac4a5e4c5b4?w=600&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80'
      ],
      bed: '1+0',
      bath: 1,
      sqft: 45,
      type: 'rent',
      featured: false
    },
    {
      title: 'Gölet Manzaralı Daire',
      location: 'Göktürk',
      price: 12000,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        'https://images.unsplash.com/photo-1600047508004-7c6c0e0c7e5f?w=600&q=80',
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80'
      ],
      bed: '2+1',
      bath: 1,
      sqft: 100,
      type: 'rent',
      featured: false
    },
    {
      title: 'Cadde Üzeri Dükkan',
      location: 'Bağdat Caddesi',
      price: 30000,
      period: '/Ay',
      images: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80'
      ],
      bed: '0+1',
      bath: 1,
      sqft: 80,
      type: 'rent',
      featured: false
    }
  ],
  footer: {
    aboutText: 'Premium gayrimenkul danışmanlığı hizmeti ile lüks konut, villa, ofis ve yatırımlık gayrimenkullerde Türkiye\'nin lider platformu. 10 yılı aşkın deneyimimizle hayallerinize ortak oluyoruz.',
    workingHours: 'Hafta içi: 09:00 - 19:00<br>Cumartesi: 10:00 - 17:00'
  },
  agents: [
    { name: 'Ahmet Yılmaz', title: 'Kurucu & CEO', desc: '15 yıllık gayrimenkul deneyimi. Boğaziçi Üniversitesi İşletme mezunu. 3000+ satış.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Zeynep Kaya', title: 'Satış Müdürü', desc: '10+ yıl lüks konut satışı deneyimi. İTÜ İnşaat Mühendisliği mezunu. 500+ premium satış.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Mehmet Demir', title: 'Kiralama Uzmanı', desc: '8 yıl kurumsal kiralama deneyimi. Marmara Üniversitesi İktisat mezunu.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { name: 'Elif Arslan', title: 'Değerleme Uzmanı', desc: '12 yıl gayrimenkul değerleme deneyimi. SPK lisanslı değerleme uzmanı.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
  ],
  testimonials: [
    { text: 'Efesoft Emlak sayesinde hayalimdeki villaya kavuştum. Profesyonel yaklaşımları ve ilgileri gerçekten takdire değer. Kesinlikle tavsiye ediyorum.', name: 'Ali Öztürk', role: 'Villa Alıcısı' },
    { text: 'Yatırımlık gayrimenkul ararken tanıştık Efesoft Emlak ile. Bize özel hazırlanan portföy ile doğru yatırımı yapmamızı sağladılar.', name: 'Ayşe Yıldız', role: 'Yatırımcı' },
    { text: 'Ofis taşınma sürecimizde Efesoft Emlak mükemmel hizmet verdi. İhtiyaçlarımıza uygun ofisi bulmak hiç bu kadar kolay olmamıştı.', name: 'Can Özkan', role: 'Kurumsal Müşteri' }
  ],
  stats: [
    { number: 500, suffix: '+', label: 'Satılık & Kiralık İlan' },
    { number: 50, suffix: '+', label: 'Uzman Danışman' },
    { number: 1000, suffix: '+', label: 'Mutlu Müşteri' },
    { number: 10, suffix: '+', label: 'Yıllık Deneyim' }
  ],
  faq: [
    { question: 'Emlak alım-satım süreci ne kadar sürer?', answer: 'Ortalama bir emlak alım-satım işlemi, finansman durumuna ve resmi işlemlere bağlı olarak 30-60 gün arasında tamamlanmaktadır.' },
    { question: 'Gayrimenkul değerleme nasıl yapılır?', answer: 'Uzman ekibimiz, emsal karşılaştırma, bölgesel analiz ve güncel piyasa verilerini kullanarak profesyonel değerleme raporu hazırlar.' },
    { question: 'Kiralama sürecinde hangi masraflar var?', answer: 'Kiralama sürecinde genellikle depozito (1-2 kira bedeli), emlak komisyonu (1 kira bedeli + KDV) ve noter masrafları bulunmaktadır.' },
    { question: 'Yatırımlık gayrimenkul nasıl seçilir?', answer: 'Konum, bölgenin gelişim potansiyeli, ulaşım altyapısı ve kira getiri oranları gibi kriterleri analiz ederek size özel yatırım stratejisi belirliyoruz.' },
    { question: 'İlanınızda olmayan bir mülkü bulabilir misiniz?', answer: 'Evet, geniş portföyümüz ve sektör bağlantılarımız sayesinde talebinize uygun mülkleri sizin için özel olarak araştırıp buluyoruz.' }
  ],
  cta: {
    title: 'Hayalinizdeki Ev Sizi Bekliyor',
    desc: 'Premium gayrimenkul danışmanlarımız size en uygun mülkü bulmak için hazır.',
    btnText: 'Bize Ulaşın',
    btnLink: 'contact.html'
  },
  about: {
    storyTitle: 'Başarıyla Dolu Bir Yolculuk',
    storyParagraphs: [
      '2014 yılında kurulan Efesoft Emlak, kısa sürede sektörün önde gelen gayrimenkul danışmanlık firmalarından biri haline gelmiştir. Kurulduğumuz günden bu yana binlerce müşterimize hayallerindeki gayrimenkule kavuşma fırsatı sunduk.',
      'Müşteri memnuniyetini her şeyin üzerinde tutan anlayışımız, uzman ve deneyimli kadromuz ve yenilikçi yaklaşımımızla gayrimenkul sektöründe fark yaratıyoruz.',
      'Bugün İstanbul\'un en prestijli bölgelerinde ofisleri bulunan firmamız, lüks konuttan ticari gayrimenkule kadar geniş bir yelpazede hizmet vermektedir.'
    ],
    mission: { title: 'Misyonumuz', text: 'Gayrimenkul sektöründe şeffaflık, güven ve profesyonellik ilkeleriyle müşterilerimize en kaliteli hizmeti sunmak.' },
    vision: { title: 'Vizyonumuz', text: 'Türkiye\'nin en güvenilir ve yenilikçi gayrimenkul markası olmak.' },
    values: [
      { title: 'Güven', text: 'Müşterilerimizle aramızdaki güven bağını her şeyin üzerinde tutuyoruz.', icon: 'fas fa-handshake' },
      { title: 'Şeffaflık', text: 'Tüm işlemlerimizde açık ve şeffaf bir iletişim politikası izliyoruz.', icon: 'fas fa-eye' },
      { title: 'Profesyonellik', text: 'Uzman kadromuzla en yüksek hizmet standartlarını sunuyoruz.', icon: 'fas fa-award' },
      { title: 'Yenilikçilik', text: 'Teknoloji ve yenilikleri yakından takip ederek hizmet kalitemizi sürekli geliştiriyoruz.', icon: 'fas fa-lightbulb' }
    ]
  },
  workingHours: {
    weekdays: 'Hafta içi: 09:00 - 19:00',
    saturday: 'Cumartesi: 10:00 - 17:00',
    sunday: 'Pazar: Kapalı'
  },
  branches: [
    { name: 'Levent Merkez Ofis', address: 'Büyükdere Caddesi No:123, Levent, İstanbul', phone: '+90 (212) 345 67 89', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1038914131893!2d28.9865!3d41.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzU3LjAiTiAyOMKwNTknMTEuNCJF!5e0!3m2!1str!2str!4v1' },
    { name: 'Kadıköy Şubesi', address: 'Bağdat Caddesi No:456, Kadıköy, İstanbul', phone: '+90 (216) 345 67 89', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1038914131893!2d28.9865!3d41.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzU3LjAiTiAyOMKwNTknMTEuNCJF!5e0!3m2!1str!2str!4v1' }
  ]
};

/* Config okuma - localStorage varsa onu, yoksa defaultConfig döndür */
function getConfig() {
  var stored = localStorage.getItem('efsSiteConfig');
  if (stored) {
    try {
      var parsed = JSON.parse(stored);
      return mergeDeep(defaultConfig, parsed);
    } catch (e) {
      return JSON.parse(JSON.stringify(defaultConfig));
    }
  }
  return JSON.parse(JSON.stringify(defaultConfig));
}

/* Config kaydet */
function saveConfig(config) {
  localStorage.setItem('efsSiteConfig', JSON.stringify(config));
}

/* Derin birleştirme (default + kullanıcı ayarları) */
function mergeDeep(defaults, overrides) {
  var result = JSON.parse(JSON.stringify(defaults));
  for (var key in overrides) {
    if (overrides.hasOwnProperty(key)) {
      if (typeof overrides[key] === 'object' && !Array.isArray(overrides[key]) && overrides[key] !== null) {
        result[key] = mergeDeep(result[key] || {}, overrides[key]);
      } else {
        result[key] = overrides[key];
      }
    }
  }
  return result;
}

/* ===== CAROUSEL ===== */
function initCarousel(container) {
  if (!container) return;
  var slidesEl = container.querySelector('.carousel-slides');
  if (!slidesEl) return;
  var slides = slidesEl.querySelectorAll('.carousel-slide');
  var total = slides.length;
  if (total <= 1) return;

  var current = 0;
  var prevBtn = container.querySelector('.carousel-prev');
  var nextBtn = container.querySelector('.carousel-next');
  var dotsContainer = container.querySelector('.carousel-dots');
  var counter = container.querySelector('.carousel-counter');

  dotsContainer.innerHTML = '';
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('data-index', i);
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', function (e) {
      e.stopPropagation();
      goTo(parseInt(this.getAttribute('data-index'), 10));
    });
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = index;
    slidesEl.style.transform = 'translateX(-' + (current * 100) + '%)';
    var dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
    if (counter) counter.textContent = (current + 1) + '/' + total;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      goTo((current - 1 + total) % total);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      goTo((current + 1) % total);
    });
  }

  /* Touch swipe */
  var startX = 0;
  slidesEl.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; });
  slidesEl.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo((current + 1) % total);
      else goTo((current - 1 + total) % total);
    }
  });

  /* Auto-play (pause on hover) */
  var interval = setInterval(function () {
    if (!container.matches(':hover') && !container.matches(':focus-within')) {
      goTo((current + 1) % total);
    }
  }, 4000);
}

function populateCarouselSlides(slidesContainer, images, title) {
  if (!slidesContainer) return;
  slidesContainer.innerHTML = '';
  images.forEach(function (imgUrl) {
    var slide = document.createElement('div');
    slide.className = 'carousel-slide';
    var img = document.createElement('img');
    img.src = imgUrl;
    img.alt = title || '';
    img.loading = 'lazy';
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  });
}

/* Config değerlerini DOM'a uygula */
function applyConfigToDOM() {
  var config = getConfig();

  /* Logo */
  var logoTextEls = document.querySelectorAll('[data-config="logo.text"]');
  logoTextEls.forEach(function (el) { el.textContent = config.logo.text; });

  var logoIconEls = document.querySelectorAll('[data-config="logo.icon"]');
  logoIconEls.forEach(function (el) { el.className = config.logo.icon; });

  /* Telefon */
  var phoneEls = document.querySelectorAll('[data-config="contact.phone"]');
  phoneEls.forEach(function (el) { el.textContent = config.contact.phone; });

  /* E-posta */
  var emailEls = document.querySelectorAll('[data-config="contact.email"]');
  emailEls.forEach(function (el) { el.textContent = config.contact.email; });

  /* Adres */
  var addressEls = document.querySelectorAll('[data-config="contact.address"]');
  addressEls.forEach(function (el) { el.textContent = config.contact.address; });

  /* Hero başlık */
  var heroTitleEls = document.querySelectorAll('[data-config="hero.title"]');
  heroTitleEls.forEach(function (el) { el.textContent = config.hero.title; });

  var heroTitleSpanEls = document.querySelectorAll('[data-config="hero.titleSpan"]');
  heroTitleSpanEls.forEach(function (el) { el.textContent = config.hero.titleSpan; });

  var heroDescEls = document.querySelectorAll('[data-config="hero.description"]');
  heroDescEls.forEach(function (el) { el.textContent = config.hero.description; });

  /* Servis kartları (data-config-service="0" vb.) */
  var serviceCards = document.querySelectorAll('[data-config-service]');
  serviceCards.forEach(function (card) {
    var index = parseInt(card.getAttribute('data-config-service'), 10);
    if (config.services[index]) {
      var titleEl = card.querySelector('.service-title');
      var descEl = card.querySelector('.service-desc');
      var iconEl = card.querySelector('.card-icon');
      if (titleEl) titleEl.textContent = config.services[index].title;
      if (descEl) descEl.textContent = config.services[index].description;
      if (iconEl) iconEl.className = 'card-icon ' + config.services[index].icon;
    }
  });

  /* Bireysel servis alanları (data-config="service-0-title" vb.) */
  for (var i = 0; i < config.services.length; i++) {
    var titleEls = document.querySelectorAll('[data-config="service-' + i + '-title"]');
    var descEls = document.querySelectorAll('[data-config="service-' + i + '-desc"]');
    var iconEls = document.querySelectorAll('[data-config="service-' + i + '-icon"]');
    titleEls.forEach(function (el) { el.textContent = config.services[i].title; });
    descEls.forEach(function (el) { el.textContent = config.services[i].description; });
    iconEls.forEach(function (el) { el.className = config.services[i].icon; });
  }

  /* Property kartları (data-config-property="INDEX") */
  var propCards = document.querySelectorAll('[data-config-property]');
  propCards.forEach(function (card) {
    var idx = parseInt(card.getAttribute('data-config-property'), 10);
    if (config.properties && config.properties[idx]) {
      var p = config.properties[idx];
      card.setAttribute('data-type', p.type);
      card.setAttribute('data-location', p.location);
      card.setAttribute('data-price', p.price);

      /* Resim - carousel */
      var slidesContainer = card.querySelector('.carousel-slides');
      if (slidesContainer && p.images && p.images.length > 0) {
        populateCarouselSlides(slidesContainer, p.images, p.title);
        initCarousel(card.querySelector('.property-carousel'));
      } else {
        var img = card.querySelector('img');
        if (img) { img.src = p.images ? p.images[0] : ''; img.alt = p.title; }
      }

      /* Fiyat */
      var priceEl = card.querySelector('.card-price');
      if (priceEl) {
        var formatted = Number(p.price).toLocaleString('tr-TR') + ' TL';
        if (p.period) formatted += ' ' + p.period;
        priceEl.innerHTML = formatted;
      }
      /* Başlık */
      var titleEl = card.querySelector('.card-title');
      if (titleEl) titleEl.textContent = p.title;
      /* Lokasyon */
      var locEl = card.querySelector('.card-location span') || card.querySelector('.card-location');
      if (locEl && locEl.tagName === 'SPAN') locEl.textContent = p.location + ', İstanbul';
      else if (locEl && locEl.tagName !== 'SPAN') {
        var sp = locEl.querySelector('span');
        if (sp) sp.textContent = p.location + ', İstanbul';
      }
      /* Özellikler */
      var featSpans = card.querySelectorAll('.card-features span');
      if (featSpans.length >= 3) {
        featSpans[0].innerHTML = '<i class="fas fa-bed"></i> ' + p.bed;
        featSpans[1].innerHTML = '<i class="fas fa-bath"></i> ' + p.bath;
        featSpans[2].innerHTML = '<i class="fas fa-vector-square"></i> ' + p.sqft + ' m²';
      }
      /* Rozet */
      var badge = card.querySelector('.card-badge');
      if (badge) {
        badge.className = 'card-badge ' + p.type;
        badge.textContent = p.type === 'sale' ? 'Satılık' : 'Kiralık';
      }
    }
  });

  /* Bireysel property alanları (data-config="property.INDEX.field") */
  if (config.properties) {
    for (var pi = 0; pi < config.properties.length; pi++) {
      (function (propIdx) {
        var p = config.properties[propIdx];
        /* images - carousel slides container */
        var slidesEls = document.querySelectorAll('[data-config="property.' + propIdx + '.images"]');
        slidesEls.forEach(function (el) {
          if (el.classList.contains('carousel-slides')) {
            populateCarouselSlides(el, p.images || [], p.title);
            initCarousel(el.closest('.property-carousel'));
          }
        });
        /* price */
        var priceEls = document.querySelectorAll('[data-config="property.' + propIdx + '.price"]');
        priceEls.forEach(function (el) {
          var formatted = Number(p.price).toLocaleString('tr-TR') + ' TL';
          if (p.period) formatted += ' ' + p.period;
          el.textContent = formatted;
        });
        /* title */
        var titleEls = document.querySelectorAll('[data-config="property.' + propIdx + '.title"]');
        titleEls.forEach(function (el) { el.textContent = p.title; });
        /* location */
        var locEls = document.querySelectorAll('[data-config="property.' + propIdx + '.location"]');
        locEls.forEach(function (el) { el.textContent = p.location + ', İstanbul'; });
        /* bed */
        var bedEls = document.querySelectorAll('[data-config="property.' + propIdx + '.bed"]');
        bedEls.forEach(function (el) { el.innerHTML = '<i class="fas fa-bed"></i> ' + p.bed; });
        /* bath */
        var bathEls = document.querySelectorAll('[data-config="property.' + propIdx + '.bath"]');
        bathEls.forEach(function (el) { el.innerHTML = '<i class="fas fa-bath"></i> ' + p.bath; });
        /* sqft */
        var sqftEls = document.querySelectorAll('[data-config="property.' + propIdx + '.sqft"]');
        sqftEls.forEach(function (el) { el.innerHTML = '<i class="fas fa-vector-square"></i> ' + p.sqft + ' m²'; });
      })(pi);
    }
  }

  /* Arkaplan resimleri */
  if (config.images) {
    var heroEl = document.querySelector('.hero');
    if (heroEl && config.images.hero) heroEl.style.backgroundImage = 'url(' + config.images.hero + ')';
    var ctaEl = document.querySelector('.cta-section');
    if (ctaEl && config.images.cta) ctaEl.style.backgroundImage = 'url(' + config.images.cta + ')';
    var imgHeroEls = document.querySelectorAll('[data-config="images.hero"]');
    imgHeroEls.forEach(function (el) { if (config.images.hero) el.style.backgroundImage = 'url(' + config.images.hero + ')'; });
    var imgAboutEls = document.querySelectorAll('[data-config="images.about"]');
    imgAboutEls.forEach(function (el) { if (config.images.about) el.style.backgroundImage = 'url(' + config.images.about + ')'; });
    var imgCtaEls = document.querySelectorAll('[data-config="images.cta"]');
    imgCtaEls.forEach(function (el) { if (config.images.cta) el.style.backgroundImage = 'url(' + config.images.cta + ')'; });
  }

  /* ===== GENEL data-config ÇÖZÜMLEYİCİ ===== */
  function resolveConfigPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      if (acc && typeof acc === 'object' && key in acc) return acc[key];
      return undefined;
    }, obj);
  }

  document.querySelectorAll('[data-config]').forEach(function (el) {
    var path = el.getAttribute('data-config');
    if (path.indexOf('logo.') === 0 || path.indexOf('contact.') === 0 ||
        path.indexOf('hero.') === 0 || path.indexOf('images.') === 0 ||
        path.indexOf('property.') === 0 || path.indexOf('service-') === 0 ||
        path.indexOf('agent.') === 0 || path.indexOf('testimonial.') === 0 ||
        path.indexOf('stat.') === 0 || path.indexOf('faq.') === 0 ||
        path.indexOf('cta.') === 0 || path.indexOf('about.') === 0 ||
        path.indexOf('workingHours.') === 0 || path.indexOf('branch.') === 0 ||
        path.indexOf('footer.') === 0) {
      return;
    }
    var value = resolveConfigPath(config, path);
    if (value !== undefined) {
      if (el.tagName === 'IMG') {
        el.src = value;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  /* ===== FOOTER ===== */
  var footerAboutEls = document.querySelectorAll('[data-config="footer.aboutText"]');
  footerAboutEls.forEach(function (el) { el.innerHTML = config.footer.aboutText; });

  var footerHoursEls = document.querySelectorAll('[data-config="footer.workingHours"]');
  footerHoursEls.forEach(function (el) { el.innerHTML = config.footer.workingHours; });

  /* ===== DANIŞMANLAR (data-config-agent="INDEX") ===== */
  var agentCards = document.querySelectorAll('[data-config-agent]');
  agentCards.forEach(function (card) {
    var idx = parseInt(card.getAttribute('data-config-agent'), 10);
    if (config.agents && config.agents[idx]) {
      var a = config.agents[idx];
      var img = card.querySelector('img');
      if (img) { img.src = a.image; img.alt = a.name; }
      var nameEl = card.querySelector('[data-config="agent.' + idx + '.name"]');
      if (nameEl) nameEl.textContent = a.name;
      var titleEl = card.querySelector('[data-config="agent.' + idx + '.title"]');
      if (titleEl) titleEl.textContent = a.title;
      var descEl = card.querySelector('[data-config="agent.' + idx + '.desc"]');
      if (descEl) descEl.textContent = a.desc;
    }
  });

  /* ===== MÜŞTERİ YORUMLARI (data-config-testimonial="INDEX") ===== */
  var testimonialCards = document.querySelectorAll('[data-config-testimonial]');
  testimonialCards.forEach(function (card) {
    var idx = parseInt(card.getAttribute('data-config-testimonial'), 10);
    if (config.testimonials && config.testimonials[idx]) {
      var t = config.testimonials[idx];
      var textEl = card.querySelector('[data-config="testimonial.' + idx + '.text"]');
      if (textEl) textEl.textContent = t.text;
      var nameEl = card.querySelector('[data-config="testimonial.' + idx + '.name"]');
      if (nameEl) nameEl.textContent = t.name;
      var roleEl = card.querySelector('[data-config="testimonial.' + idx + '.role"]');
      if (roleEl) roleEl.textContent = t.role;
    }
  });

  /* ===== İSTATİSTİKLER (data-config-stat="INDEX") ===== */
  var statItems = document.querySelectorAll('[data-config-stat]');
  statItems.forEach(function (item) {
    var idx = parseInt(item.getAttribute('data-config-stat'), 10);
    if (config.stats && config.stats[idx]) {
      var s = config.stats[idx];
      var numberEl = item.querySelector('[data-config="stat.' + idx + '.number"]');
      if (numberEl) {
        numberEl.textContent = s.number + (s.suffix || '');
        numberEl.setAttribute('data-target', s.number);
      }
      var labelEl = item.querySelector('[data-config="stat.' + idx + '.label"]');
      if (labelEl) labelEl.textContent = s.label;
    }
  });

  /* ===== SSS (data-config-faq="INDEX") ===== */
  var faqItems = document.querySelectorAll('[data-config-faq]');
  faqItems.forEach(function (item) {
    var idx = parseInt(item.getAttribute('data-config-faq'), 10);
    if (config.faq && config.faq[idx]) {
      var f = config.faq[idx];
      var qEl = item.querySelector('[data-config="faq.' + idx + '.question"]');
      if (qEl) qEl.textContent = f.question;
      var aEl = item.querySelector('[data-config="faq.' + idx + '.answer"]');
      if (aEl) aEl.textContent = f.answer;
    }
  });

  /* ===== CTA ===== */
  var ctaTitleEls = document.querySelectorAll('[data-config="cta.title"]');
  ctaTitleEls.forEach(function (el) { el.textContent = config.cta.title; });

  var ctaDescEls = document.querySelectorAll('[data-config="cta.desc"]');
  ctaDescEls.forEach(function (el) { el.textContent = config.cta.desc; });

  var ctaBtnTextEls = document.querySelectorAll('[data-config="cta.btnText"]');
  ctaBtnTextEls.forEach(function (el) { el.textContent = config.cta.btnText; });

  var ctaBtnLinkEls = document.querySelectorAll('[data-config="cta.btnLink"]');
  ctaBtnLinkEls.forEach(function (el) { el.href = config.cta.btnLink; });

  /* ===== ABOUT ===== */
  var aboutStoryTitleEls = document.querySelectorAll('[data-config="about.storyTitle"]');
  aboutStoryTitleEls.forEach(function (el) { el.textContent = config.about.storyTitle; });

  if (config.about && config.about.storyParagraphs) {
    config.about.storyParagraphs.forEach(function (p, i) {
      var pEls = document.querySelectorAll('[data-config="about.storyParagraphs.' + i + '"]');
      pEls.forEach(function (el) { el.textContent = p; });
    });
  }

  var missionTitleEls = document.querySelectorAll('[data-config="about.mission.title"]');
  missionTitleEls.forEach(function (el) { el.textContent = config.about.mission.title; });
  var missionTextEls = document.querySelectorAll('[data-config="about.mission.text"]');
  missionTextEls.forEach(function (el) { el.textContent = config.about.mission.text; });

  var visionTitleEls = document.querySelectorAll('[data-config="about.vision.title"]');
  visionTitleEls.forEach(function (el) { el.textContent = config.about.vision.title; });
  var visionTextEls = document.querySelectorAll('[data-config="about.vision.text"]');
  visionTextEls.forEach(function (el) { el.textContent = config.about.vision.text; });

  /* Values */
  if (config.about && config.about.values) {
    config.about.values.forEach(function (v, i) {
      var titleEls = document.querySelectorAll('[data-config="about.values.' + i + '.title"]');
      titleEls.forEach(function (el) { el.textContent = v.title; });
      var textEls = document.querySelectorAll('[data-config="about.values.' + i + '.text"]');
      textEls.forEach(function (el) { el.textContent = v.text; });
      var iconEls = document.querySelectorAll('[data-config="about.values.' + i + '.icon"]');
      iconEls.forEach(function (el) { el.className = v.icon; });
    });
  }

  /* ===== ÇALIŞMA SAATLERİ ===== */
  var whWeekdaysEls = document.querySelectorAll('[data-config="workingHours.weekdays"]');
  whWeekdaysEls.forEach(function (el) { el.textContent = config.workingHours.weekdays; });
  var whSaturdayEls = document.querySelectorAll('[data-config="workingHours.saturday"]');
  whSaturdayEls.forEach(function (el) { el.textContent = config.workingHours.saturday; });
  var whSundayEls = document.querySelectorAll('[data-config="workingHours.sunday"]');
  whSundayEls.forEach(function (el) { el.textContent = config.workingHours.sunday; });

  /* ===== ŞUBELER (data-config-branch="INDEX") ===== */
  var branchCards = document.querySelectorAll('[data-config-branch]');
  branchCards.forEach(function (card) {
    var idx = parseInt(card.getAttribute('data-config-branch'), 10);
    if (config.branches && config.branches[idx]) {
      var b = config.branches[idx];
      var nameEl = card.querySelector('[data-config="branch.' + idx + '.name"]');
      if (nameEl) nameEl.textContent = b.name;
      var addrEl = card.querySelector('[data-config="branch.' + idx + '.address"]');
      if (addrEl) addrEl.textContent = b.address;
      var phoneEl = card.querySelector('[data-config="branch.' + idx + '.phone"]');
      if (phoneEl) phoneEl.textContent = b.phone;
      var mapEl = card.querySelector('[data-config="branch.' + idx + '.map"]');
      if (mapEl) mapEl.src = b.map;
    }
  });

  /* ===== Çeviri sözlüğünü de güncelle (varsa) ===== */
  if (typeof translations !== 'undefined') {
    function updateTranslations(lang, cfg) {
      translations[lang]['hero-title'] = cfg.hero.title;
      translations[lang]['hero-title-span'] = cfg.hero.titleSpan;
      translations[lang]['hero-desc'] = cfg.hero.description;

      cfg.services.forEach(function (s, i) {
        var num = i + 1;
        translations[lang]['service-' + num + '-title'] = s.title;
        translations[lang]['service-' + num + '-desc'] = s.description;
      });

      cfg.agents.forEach(function (a, i) {
        var num = i + 1;
        translations[lang]['agent-' + num + '-name'] = a.name;
        translations[lang]['agent-' + num + '-title'] = a.title;
        translations[lang]['agent-' + num + '-desc'] = a.desc;
      });

      cfg.testimonials.forEach(function (t, i) {
        var num = i + 1;
        translations[lang]['testimonial-' + num + '-text'] = t.text;
        translations[lang]['testimonial-' + num + '-name'] = t.name;
        translations[lang]['testimonial-' + num + '-role'] = t.role;
      });

      cfg.stats.forEach(function (s, i) {
        var key = ['listings', 'agents', 'clients', 'years'][i] || ('stat' + i);
        translations[lang]['stat-' + key] = s.label;
      });

      translations[lang]['cta-title'] = cfg.cta.title;
      translations[lang]['cta-desc'] = cfg.cta.desc;
      translations[lang]['cta-btn'] = cfg.cta.btnText;

      translations[lang]['about-story-subtitle'] = 'Hikayemiz';
      translations[lang]['about-story-title'] = cfg.about.storyTitle;
      cfg.about.storyParagraphs.forEach(function (p, i) {
        translations[lang]['about-story-p' + (i + 1)] = p;
      });
      translations[lang]['about-mission-title'] = cfg.about.mission.title;
      translations[lang]['about-vision-title'] = cfg.about.vision.title;

      translations[lang]['footer-about'] = cfg.footer.aboutText;
    }

    if (translations.tr) updateTranslations('tr', config);
    if (translations.en) updateTranslations('en', config);
  }
}

/* Admin panel yönlendirme işlevi */
function isAdminMode() {
  return window.location.pathname.indexOf('admin') !== -1;
}

/* DOM hazır olduğunda config uygula */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyConfigToDOM);
} else {
  applyConfigToDOM();
}
