var defaultConfig = {
  logo: { text: 'A&A Güvenlik', icon: 'fas fa-shield-halved' },
  contact: {
    phone: '0506 092 16 14',
    email: 'info@aguvenlik.com.tr',
    address: 'Güneştepe 1. Yalıçiftlik Sk. No:46/A, Osmangazi / BURSA'
  },
  whatsapp: '90506921614',
  workingHours: 'Pazartesi - Cumartesi: 08:00 - 19:00',
  hero: {
    title: 'Siteler İçin Ücretsiz Kontroller',
    subtitle: 'Güvenlik Kamera Sistemleri, Çipli Giriş Sistemleri ve Teknik Destek',
    description: 'Site yöneticileri ve işletmeler için profesyonel güvenlik teknolojileri ve bilişim hizmetleri. Ücretsiz keşif ve kontrol ile sistemlerinizi güvence altına alıyoruz.'
  },
  about: {
    storyTitle: 'Hikayemiz',
    storyParagraphs: [
      'A&A Güvenlik Teknolojileri ve Bilişim Hizmetleri, Bursa\'da güvenlik ve bilişim alanında faaliyet göstermek üzere kurulmuştur. Kurulduğumuz günden bu yana site yönetimleri, apartmanlar, iş yerleri ve küçük-orta ölçekli işletmelere güvenlik kamera sistemleri, çipli giriş sistemleri ve teknik destek hizmetleri sunuyoruz.',
      'Uzman ekibimizle sahada edindiğimiz deneyim sayesinde her ölçekteki projede profesyonel çözümler üretiyor, müşterilerimizin güvenlik ihtiyaçlarını en üst düzeyde karşılıyoruz. Ücretsiz keşif ve kontrol hizmetimizle mevcut sistemlerinizi değerlendiriyor, eksikleri raporlayarak size özel çözüm önerileri sunuyoruz.',
      'Müşteri memnuniyeti odaklı yaklaşımımız, hızlı ve güvenilir hizmet anlayışımızla Bursa başta olmak üzere çevre bölgelerdeki site yönetimleri ve işletmeler için güvenilir bir iş ortağıyız.'
    ],
    mission: { title: 'Misyonumuz', text: 'Site yönetimleri ve işletmelere en kaliteli güvenlik teknolojileri ve bilişim hizmetlerini sunmak, ücretsiz keşif ve kontrollerle müşterilerimizin sistemlerini sürekli güncel ve güvende tutmak.' },
    vision: { title: 'Vizyonumuz', text: 'Bursa\'nın lider güvenlik teknolojileri ve bilişim hizmetleri sağlayıcısı olmak, yenilikçi çözümlerle sektöre yön vermek.' },
    values: [
      { title: 'Güvenilirlik', text: 'Verdiğimiz sözleri zamanında ve eksiksiz yerine getirir, müşterilerimizin güvenini kazanırız.', icon: 'fas fa-handshake' },
      { title: 'Uzmanlık', text: 'Alanında deneyimli ekibimizle en güncel teknolojileri kullanarak profesyonel çözümler üretiriz.', icon: 'fas fa-microchip' },
      { title: 'Müşteri Odaklılık', text: 'Her müşterimizin ihtiyacını özel olarak dinler, ona en uygun çözümü sunarız.', icon: 'fas fa-users' },
      { title: 'Hızlı Destek', text: 'Arıza durumlarında hızlı müdahale ve çözüm odaklı yaklaşımımızla her zaman yanınızdayız.', icon: 'fas fa-bolt' }
    ]
  },
  services: [
    { icon: 'fas fa-video', title: 'Güvenlik Kamera Sistemleri', description: 'Kamera kurulumu, kayıt sistemi kontrolü, görüntü kalitesi optimizasyonu, mevcut sistem revizyonu ve arıza/bakım desteği.' },
    { icon: 'fas fa-id-card', title: 'Çipli Giriş Sistemleri', description: 'Keycard sistemleri, turnike/kapı giriş çözümleri, kart okuyucu kontrolü, yetkilendirme yönetimi ve sistem revizyonu.' },
    { icon: 'fas fa-laptop', title: 'Bilgisayar Satış & Teknik Destek', description: 'Bilgisayar satış danışmanlığı, kurulum, format/bakım/yazılım desteği ve yerinde teknik destek hizmetleri.' },
    { icon: 'fas fa-tools', title: 'Profesyonel Kurulum & Bakım', description: 'Periyodik bakım, arıza tespiti, sistem performans kontrolü, kablosal ve bağlantı kontrolü hizmetleri.' }
  ],
  freeChecks: [
    { icon: 'fas fa-camera', title: 'Ücretsiz Kamera Açısı Kontrolü', desc: 'Mevcut kameralarınızın açıları, görüş alanları ve kayıt kalitelerini ücretsiz kontrol ediyor, optimizasyon önerileri sunuyoruz.' },
    { icon: 'fas fa-wifi', title: 'Ücretsiz Bağlantı Kontrolü', desc: 'Kamera ve giriş sistemlerinizin sinyal kalitesi, kayıt cihazı bağlantıları ve ağ altyapısını detaylı şekilde test ediyoruz.' },
    { icon: 'fas fa-door-open', title: 'Ücretsiz Giriş Sistemi Kontrolü', desc: 'Turnike, kapı ve kart okuyucu sistemlerinizin çalışma performansını kontrol ediyor, olası arızaları önceden tespit ediyoruz.' },
    { icon: 'fas fa-file-alt', title: 'Sistem Danışmanlığı ve Raporlama', desc: 'Tüm kontroller sonrasında detaylı bir rapor hazırlıyor, sisteminizle ilgili iyileştirme önerilerini sunuyoruz.' }
  ],
  team: [
    { name: 'Ali Yılmaz', title: 'Kurucu & Teknik Sorumlu', desc: '10+ yıl güvenlik teknolojileri ve bilişim alanında deneyim.', image: 'https://i.pravatar.cc/400?img=11' },
    { name: 'Ahmet Demir', title: 'Saha Uzmanı', desc: 'Kamera ve giriş sistemleri kurulum ve bakım uzmanı.', image: 'https://i.pravatar.cc/400?img=12' }
  ],
  stats: [
    { number: 250, suffix: '+', label: 'Başarılı Proje' },
    { number: 80, suffix: '+', label: 'Mutlu Müşteri' },
    { number: 5, suffix: '+', label: 'Yıl Deneyim' },
    { number: 7, suffix: '/24', label: 'Destek Hattı' }
  ],
  testimonials: [
    { text: 'Site güvenlik sistemlerimizi yenilediler. Profesyonel ekipleri ve uygun fiyat politikasıyla kesinlikle tavsiye ediyorum.', name: 'Mehmet K.', role: 'Site Yöneticisi, Yıldız Sitesi' },
    { text: 'Kamera sistemimizde yaşadığımız arızaya çok hızlı müdahale ettiler. Ücretsiz keşif ve kontrol hizmetleri gerçekten işe yaradı.', name: 'Ayşe T.', role: 'Apartman Yöneticisi' },
    { text: 'Giriş sistemimizi keycard sistemine dönüştürdüler. Hem güvenli hem de kullanışlı oldu. Çok memnunuz.', name: 'Can Ö.', role: 'İş Yeri Sahibi' }
  ],
  faq: [
    { question: 'Ücretsiz keşif gerçekten ücretsiz mi?', answer: 'Evet, ücretsiz keşif ve kontrol hizmetimiz tamamen ücretsizdir. Herhangi bir taahhüt veya gizli ücret söz konusu değildir. Kontrol sonrası ihtiyaç duyulması halinde size özel fiyat teklifi sunarız, kabul etme zorunluluğunuz yoktur.' },
    { question: 'Hangi bölgelerde hizmet veriyorsunuz?', answer: 'Başta Bursa Osmangazi, Nilüfer, Yıldırım olmak üzere Bursa geneli ve çevre ilçelerde hizmet vermekteyiz. Özel projeler için farklı bölgelere de çıkış yapabiliyoruz.' },
    { question: 'Mevcut sistemleri kontrol edip raporluyor musunuz?', answer: 'Evet, mevcut güvenlik kamera ve giriş sistemlerinizi detaylı olarak kontrol ediyor, eksikleri ve iyileştirme önerilerini içeren kapsamlı bir rapor sunuyoruz.' },
    { question: 'Kamera açısı kontrolü neden önemli?', answer: 'Yanlış kamera açıları güvenlik açıklarına neden olabilir. Kör noktalar, yetersiz görüş alanı veya düşük kaliteli kayıtlar güvenlik zaafiyeti yaratır. Düzenli açı kontrolü ile bu riskleri ortadan kaldırıyoruz.' },
    { question: 'Giriş sistemi bakımını ne sıklıkta yapmak gerekir?', answer: 'Çipli giriş sistemlerinizin yılda en az 2 kez periyodik bakımdan geçmesini öneriyoruz. Yoğun kullanılan sistemlerde bu süre 3 aya kadar düşebilir. Düzenli bakım, sistem ömrünü uzatır ve ani arızaları önler.' },
    { question: 'Arıza durumunda ne kadar sürede dönüş sağlanır?', answer: 'Arıza bildirimlerinize en geç 2 saat içinde dönüş sağlıyor, acil durumlarda aynı gün müdahale ediyoruz. 7/24 destek hattımız sayesinde her zaman ulaşabilirsiniz.' },
    { question: 'Hangi tip kamera sistemlerini kuruyorsunuz?', answer: 'Analog, HD-TVI, IP ve kablosuz kamera sistemleri olmak üzere her türlü çözümü sunuyoruz. İhtiyacınıza ve bütçenize en uygun sistemi belirliyor, profesyonel kurulum gerçekleştiriyoruz.' },
    { question: 'Keycard sistemi nedir ve nasıl çalışır?', answer: 'Keycard (çipli kart) sistemleri, bina girişlerinde kartlı geçiş sağlayan elektronik güvenlik sistemleridir. Yetkisiz girişleri engeller, kimin ne zaman girdiğini kayıt altına alır ve mevcut turnike/kapı sistemlerinize entegre edilebilir.' }
  ],
  cta: {
    title: 'Ücretsiz Keşif İçin Hemen Arayın',
    desc: 'Sitenizdeki güvenlik sistemlerini ücretsiz kontrol edelim, eksikleri raporlayalım. Hemen randevu alın!',
    btnText: 'Hemen Ara',
    btnLink: 'Tel:05060921614'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80',
    gallery1: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    gallery2: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80',
    gallery3: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80'
  },
  footer: {
    aboutText: 'Güvenlik teknolojileri ve bilişim hizmetleri alanında profesyonel çözümler sunuyoruz. Kamera sistemleri, çipli giriş sistemleri ve teknik destek hizmetlerimizle yanınızdayız.',
    workingHours: 'Pazartesi - Cumartesi: 08:00 - 19:00'
  }
};

var siteConfig = {};

function mergeDeep(target, source) {
  var output = {};
  for (var key in target) { if (Object.prototype.hasOwnProperty.call(target, key)) { output[key] = target[key]; } }
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && !(source[key] instanceof HTMLElement)) {
        output[key] = mergeDeep(target[key] || {}, source[key]);
      } else { output[key] = source[key]; }
    }
  }
  return output;
}

function getConfig() {
  var saved;
  try { saved = localStorage.getItem('aaguvenlik-config'); } catch (e) {}
  if (saved) {
    try { return mergeDeep(defaultConfig, JSON.parse(saved)); } catch (e) { return JSON.parse(JSON.stringify(defaultConfig)); }
  }
  return JSON.parse(JSON.stringify(defaultConfig));
}

function saveConfig(config) {
  localStorage.setItem('aaguvenlik-config', JSON.stringify(config));
  siteConfig = config;
}

function applyConfigToDOM(config) {
  if (!config) config = getConfig();
  var elements = document.querySelectorAll('[data-config]');
  elements.forEach(function (el) {
    var path = el.getAttribute('data-config').split('.');
    var value = config;
    for (var i = 0; i < path.length; i++) {
      if (value && typeof value === 'object') { value = value[path[i]]; } else { value = undefined; break; }
    }
    if (value !== undefined && value !== null) {
      if (typeof value === 'string' || typeof value === 'number') { el.textContent = value; }
    }
  });
  if (typeof translations !== 'undefined') {
    if (config.hero) {
      translations.tr['hero-title'] = 'Siteler İçin';
      translations.tr['hero-title-span'] = 'Ücretsiz Kontroller';
      translations.tr['hero-desc'] = config.hero.description || translations.tr['hero-desc'];
    }
    if (config.contact) {
      translations.tr['footer-phone'] = config.contact.phone || translations.tr['footer-phone'];
      translations.tr['footer-email'] = config.contact.email || translations.tr['footer-email'];
      translations.tr['footer-addr'] = config.contact.address || translations.tr['footer-addr'];
      translations.tr['contact-phone'] = config.contact.phone || translations.tr['contact-phone'];
      translations.tr['contact-addr'] = config.contact.address || translations.tr['contact-addr'];
    }
    if (config.footer) {
      translations.tr['footer-about-desc'] = config.footer.aboutText || translations.tr['footer-about-desc'];
      translations.tr['footer-hours'] = config.footer.workingHours || translations.tr['footer-hours'];
      translations.tr['contact-hours'] = config.footer.workingHours || translations.tr['contact-hours'];
    }
    if (config.cta) {
      translations.tr['cta-badge'] = config.cta.title || translations.tr['cta-badge'];
      translations.tr['cta-desc'] = config.cta.desc || translations.tr['cta-desc'];
      translations.tr['cta-btn'] = config.cta.btnText || translations.tr['cta-btn'];
    }
    if (config.logo) {
      translations.tr['logo-text'] = config.logo.text || translations.tr['logo-text'];
    }
    if (config.whatsapp) {
      var waLink = document.querySelector('.whatsapp-btn');
      if (waLink) waLink.href = 'https://wa.me/' + config.whatsapp;
    }
  }
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg && config.images && config.images.hero) { heroBg.style.backgroundImage = 'url(\'' + config.images.hero + '\')'; }
  var aboutImg = document.querySelector('.about-story .image img');
  if (aboutImg && config.images && config.images.about) { aboutImg.src = config.images.about; }
  var logoIcon = document.querySelector('.logo i');
  if (logoIcon && config.logo && config.logo.icon) { logoIcon.className = config.logo.icon; }
}

siteConfig = getConfig();
