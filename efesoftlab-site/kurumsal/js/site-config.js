/**
 * ============================================
 * Corporate Business - Site Yapılandırma
 * Tasarım ve Geliştirme: Efesoftlab
 * ============================================
 */

var defaultConfig = {
  logo: { text: 'Efesoftlab', icon: 'fas fa-briefcase' },
  contact: {
    phone: '+90 (212) 345 67 89',
    email: 'info@efesoftlab.com',
    address: 'Büyükdere Caddesi No:123, Levent, İstanbul 34394'
  },
  hero: {
    title: 'Geleceği Şekillendiriyoruz',
    subtitle: 'Premium kurumsal çözümlerle işinizi bir adım öteye taşıyın',
    description: 'Danışmanlık, dijital dönüşüm ve yazılım geliştirme alanlarında 10+ yıllık deneyimimizle işletmenize değer katıyoruz.'
  },
  about: {
    storyTitle: 'Hikayemiz',
    storyParagraphs: [
      '2015 yılında kurulan Efesoftlab, teknoloji ve danışmanlık alanında yenilikçi çözümler sunmak amacıyla yola çıktı. Bugün 50+ uzman kadromuzla yüzlerce kurumsal müşteriye hizmet veriyoruz.',
      'Müşteri odaklı yaklaşımımız, deneyimli ekibimiz ve teknolojik altyapımızla işletmelerin dijital dönüşüm yolculuğunda güvenilir bir iş ortağıyız.',
      'İstanbul, Ankara ve Londra ofislerimizle global ölçekte hizmet vermekteyiz.'
    ],
    mission: { title: 'Misyonumuz', text: 'İşletmelere yenilikçi teknoloji çözümleri sunarak dijital dönüşümlerinde liderlik etmek.' },
    vision: { title: 'Vizyonumuz', text: '2028 yılına kadar Avrupa\'nın en saygın teknoloji danışmanlık firmaları arasında yer almak.' },
    values: [
      { title: 'Yenilikçilik', text: 'Sürekli öğrenme ve gelişim kültürüyle sektörde fark yaratıyoruz.', icon: 'fas fa-lightbulb' },
      { title: 'Güvenilirlik', text: 'Müşterilerimizle uzun vadeli ve güvene dayalı iş ilişkileri kuruyoruz.', icon: 'fas fa-handshake' },
      { title: 'Kalite', text: 'Her projede en yüksek kalite standartlarını hedefliyoruz.', icon: 'fas fa-award' },
      { title: 'Takım Ruhu', text: 'Güçlü ekip çalışmamızla karmaşık problemlere yaratıcı çözümler üretiyoruz.', icon: 'fas fa-users' }
    ]
  },
  services: [
    { icon: 'fas fa-chart-line', title: 'Kurumsal Danışmanlık', description: 'İş süreçlerinizi optimize edecek stratejik danışmanlık hizmetleri.' },
    { icon: 'fas fa-digital-ticking', title: 'Dijital Dönüşüm', description: 'İşletmenizi geleceğe taşıyacak dijital dönüşüm çözümleri.' },
    { icon: 'fas fa-code', title: 'Yazılım Geliştirme', description: 'Özel yazılım çözümleriyle rekabet avantajı elde edin.' },
    { icon: 'fas fa-database', title: 'Veri Analitiği', description: 'Verilerinizi anlamlı içgörülere dönüştürün.' },
    { icon: 'fas fa-cloud', title: 'Bulut Çözümleri', description: 'Güvenli ve ölçeklenebilir bulut altyapı çözümleri.' },
    { icon: 'fas fa-shield-alt', title: 'Siber Güvenlik', description: 'Kurumsal güvenlik ihtiyaçlarınıza özel çözümler.' }
  ],
  team: [
    { name: 'Ahmet Yılmaz', title: 'CEO & Kurucu Ortak', desc: '20+ yıllık teknoloji ve yönetim danışmanlığı deneyimi.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Ayşe Kaya', title: 'CTO', desc: 'Yapay zeka ve büyük veri alanında uzman.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Mehmet Demir', title: 'Proje Yöneticisi', desc: 'PMP sertifikalı, 50+ başarılı proje yöneticisi.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { name: 'Zeynep Şahin', title: 'UX Direktörü', desc: 'Kullanıcı deneyimi ve arayüz tasarımı uzmanı.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
  ],
  stats: [
    { number: 500, suffix: '+', label: 'Başarılı Proje' },
    { number: 150, suffix: '+', label: 'Mutlu Müşteri' },
    { number: 50, suffix: '+', label: 'Uzman Kadro' },
    { number: 10, suffix: '+', label: 'Yıllık Deneyim' }
  ],
  testimonials: [
    { text: 'Efesoftlab ile çalışmak iş süreçlerimizi tamamen dönüştürdü. Profesyonel yaklaşımları ve teknik yeterlilikleri takdire şayan.', name: 'Ali Öztürk', role: 'CEO, TechCorp' },
    { text: 'Dijital dönüşüm yolculuğumuzda bize rehberlik eden Efesoftlab ekibine minnettarız. Süreç boyunca gösterdikleri özveri mükemmeldi.', name: 'Ayşe Yıldız', role: 'CTO, FinansBank' },
    { text: 'Yazılım geliştirme projemizde gösterdikleri profesyonellik ve kalite beklentilerimizin çok üzerindeydi.', name: 'Can Özkan', role: 'Genel Müdür, SağlıkGrubu' }
  ],
  faq: [
    { question: 'Proje süreciniz nasıl işliyor?', answer: 'Projelerimiz 4 aşamadan oluşur: Keşif ve analiz, tasarım ve planlama, geliştirme ve uygulama, test ve dağıtım. Her aşamada müşterilerimizle düzenli iletişim halinde oluruz.' },
    { question: 'Hangi sektörlere hizmet veriyorsunuz?', answer: 'Finans, sağlık, perakende, üretim ve lojistik başta olmak üzere birçok sektöre hizmet vermekteyiz.' },
    { question: 'Teklif süreci ne kadar sürer?', answer: 'İhtiyaç analizi sonrasında ortalama 3-5 iş günü içerisinde detaylı teklifimizi sunarız.' },
    { question: 'Proje sonrası destek sağlıyor musunuz?', answer: 'Evet, proje teslimi sonrasında düzenli bakım ve destek hizmeti sunuyoruz. Ayrıca 7/24 acil destek hattımız bulunmaktadır.' },
    { question: 'Referanslarınızı görebilir miyiz?', answer: 'Elbette, tam referans listemizi ve müşteri yorumlarımızı web sitemizden inceleyebilir, dilerseniz size özel referans sunumu hazırlayabiliriz.' }
  ],
  cta: {
    title: 'Hadi Başlayalım',
    desc: 'İşletmenizi geleceğe taşıyacak çözümler için bizimle iletişime geçin.',
    btnText: 'Ücretsiz Danışmanlık Alın',
    btnLink: 'contact.html'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    blog1: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    blog2: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    blog3: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80'
  },
  footer: {
    aboutText: 'Premium kurumsal çözümlerle işletmenizin dijital dönüşüm yolculuğunda güvenilir iş ortağınız.',
    workingHours: 'Hafta içi: 09:00 - 18:00'
  }
};

var siteConfig = {};

function mergeDeep(target, source) {
  var output = {};
  for (var key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      output[key] = target[key];
    }
  }
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && !(source[key] instanceof HTMLElement)) {
        output[key] = mergeDeep(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}

function getConfig() {
  var saved = localStorage.getItem('efesoftlab-config');
  if (saved) {
    try {
      return mergeDeep(defaultConfig, JSON.parse(saved));
    } catch (e) {
      return JSON.parse(JSON.stringify(defaultConfig));
    }
  }
  return JSON.parse(JSON.stringify(defaultConfig));
}

function saveConfig(config) {
  localStorage.setItem('efesoftlab-config', JSON.stringify(config));
  siteConfig = config;
}

function applyConfigToDOM(config) {
  if (!config) config = getConfig();

  var elements = document.querySelectorAll('[data-config]');
  elements.forEach(function (el) {
    var path = el.getAttribute('data-config').split('.');
    var value = config;
    for (var i = 0; i < path.length; i++) {
      if (value && typeof value === 'object') {
        value = value[path[i]];
      } else {
        value = undefined;
        break;
      }
    }
    if (value !== undefined && value !== null) {
      if (typeof value === 'string') {
        el.textContent = value;
      } else if (typeof value === 'number') {
        el.textContent = value;
      }
    }
  });

  if (typeof translations !== 'undefined') {
    if (config.hero) {
      translations.tr['hero-title'] = 'Geleceği';
      translations.tr['hero-title-span'] = config.hero.title || 'Şekillendiriyoruz';
      translations.tr['hero-desc'] = config.hero.description || translations.tr['hero-desc'];
      translations.en['hero-title'] = 'Shaping the';
      translations.en['hero-title-span'] = config.hero.title || 'Future';
      translations.en['hero-desc'] = config.hero.description || translations.en['hero-desc'];
    }
    if (config.contact) {
      translations.tr['footer-phone'] = config.contact.phone || translations.tr['footer-phone'];
      translations.tr['footer-email'] = config.contact.email || translations.tr['footer-email'];
      translations.tr['footer-addr'] = config.contact.address || translations.tr['footer-addr'];
      translations.en['footer-phone'] = config.contact.phone || translations.en['footer-phone'];
      translations.en['footer-email'] = config.contact.email || translations.en['footer-email'];
      translations.en['footer-addr'] = config.contact.address || translations.en['footer-addr'];
    }
    if (config.footer) {
      translations.tr['footer-about-desc'] = config.footer.aboutText || translations.tr['footer-about-desc'];
      translations.tr['footer-hours'] = config.footer.workingHours || translations.tr['footer-hours'];
      translations.en['footer-about-desc'] = config.footer.aboutText || translations.en['footer-about-desc'];
      translations.en['footer-hours'] = config.footer.workingHours || translations.en['footer-hours'];
    }
    if (config.cta) {
      translations.tr['cta-badge'] = config.cta.title || translations.tr['cta-badge'];
      translations.tr['cta-desc'] = config.cta.desc || translations.tr['cta-desc'];
      translations.tr['cta-btn'] = config.cta.btnText || translations.tr['cta-btn'];
      translations.en['cta-badge'] = config.cta.title || translations.en['cta-badge'];
      translations.en['cta-desc'] = config.cta.desc || translations.en['cta-desc'];
      translations.en['cta-btn'] = config.cta.btnText || translations.en['cta-btn'];
    }
    if (config.logo) {
      translations.tr['logo-text'] = config.logo.text || translations.tr['logo-text'];
      translations.en['logo-text'] = config.logo.text || translations.en['logo-text'];
    }
  }

  var heroBg = document.querySelector('.hero-bg');
  if (heroBg && config.images && config.images.hero) {
    heroBg.style.backgroundImage = 'url(\'' + config.images.hero + '\')';
  }

  var aboutImg = document.querySelector('.about-story .image img');
  if (aboutImg && config.images && config.images.about) {
    aboutImg.src = config.images.about;
  }

  var blogImgs = document.querySelectorAll('.blog-card .image img');
  if (blogImgs.length > 0 && config.images) {
    if (config.images.blog1 && blogImgs[0]) blogImgs[0].src = config.images.blog1;
    if (config.images.blog2 && blogImgs[1]) blogImgs[1].src = config.images.blog2;
    if (config.images.blog3 && blogImgs[2]) blogImgs[2].src = config.images.blog3;
  }

  var logoIcon = document.querySelector('.logo i');
  if (logoIcon && config.logo && config.logo.icon) {
    logoIcon.className = config.logo.icon;
  }
}

siteConfig = getConfig();
