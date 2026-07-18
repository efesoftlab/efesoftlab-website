/* ============================================================
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   Site Yapılandırma Dosyası - Tıp Merkezi Admin Paneli
   ============================================================ */

const DEFAULT_CONFIG = {
  logo: {
    text: 'Modern',
    highlighted: 'Tıp',
    icon: 'fa-heartbeat'
  },
  contact: {
    phone: '0212 XXX XX XX',
    email: 'ornek@moderntipdemo.com',
    address: 'Örnek Mah. Demo Cad. No:XX<br>Şişli / İstanbul'
  },
  hero: {
    title: 'Sağlığınız <span>Bizim Önceliğimiz</span>',
    subtitle: '',
    description: 'Modern tıp merkezimizde, deneyimli kadromuz ve ileri teknolojik donanımımızla size en kaliteli sağlık hizmetini sunuyoruz. Sağlıklı bir yaşam için yanınızdayız.'
  },
  about: {
    story: '[Demo] Modern Tıp Merkezi, bir grup idealist doktorun hayaliyle yola çıktı. Küçük bir poliklinik olarak başlayan yolculuğumuz, bugün birçok uzman doktor ve sağlık çalışanıyla hizmet veren modern bir sağlık kompleksine dönüştü.',
    story2: 'Kurulduğumuz günden bu yana, hastalarımıza en kaliteli sağlık hizmetini sunmak için sürekli kendimizi yeniliyor, tıptaki son gelişmeleri yakından takip ediyoruz. Her yıl binlerce hastaya şifa olmanın gururunu yaşıyoruz.',
    story3: 'Amacımız, sağlık alanında bölgenin en güvenilir ve tercih edilen merkezi olmaya devam etmek, hastalarımıza sadece tedavi değil, aynı zamanda sağlıklı bir yaşam için rehberlik etmektir.',
    mission: 'Hastalarımıza en güncel tıbbi bilgi ve teknolojilerle donanmış, etik değerlere bağlı, hasta odaklı ve kaliteli sağlık hizmeti sunmak; toplum sağlığının korunmasına ve geliştirilmesine katkıda bulunmak.',
    vision: 'Sağlık alanında yenilikçi yaklaşımları benimseyen, ulusal ve uluslararası düzeyde tanınan, hasta memnuniyetinde öncü bir sağlık merkezi olmak ve sağlık turizminde tercih edilen bir marka haline gelmek.',
    values: 'Hasta odaklılık, etik değerlere bağlılık, sürekli gelişim ve yenilikçilik, ekip çalışması, şeffaflık, mahremiyete saygı, kalite standartlarına uygunluk, toplumsal sorumluluk bilinci.'
  },
  doctors: [
    {
      name: 'Kardiyoloji Uzmanı',
      title: 'Başhekim - Kardiyoloji Uzmanı',
      department: 'Kalp Damar Cerrahisi',
      experience: 'XX yıl',
      education: '[Demo] Tıp Fakültesi',
      description: '[Demo] Tıp Fakültesi mezunu. Kardiyoloji alanında uzmanlaşmıştır. Kalp yetmezliği ve hipertansiyon tedavisinde deneyimlidir.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Diş Hekimliği Uzmanı',
      title: 'Diş Hekimliği Uzmanı',
      department: 'Diş Hekimliği',
      experience: 'XX yıl',
      education: '[Demo] Diş Hekimliği Fakültesi',
      description: '[Demo] Diş Hekimliği Fakültesi mezunu. İmplantoloji ve estetik diş hekimliği alanında deneyimlidir.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Göz Hastalıkları Uzmanı',
      title: 'Göz Hastalıkları Uzmanı',
      department: 'Göz Sağlığı',
      experience: 'XX yıl',
      education: '[Demo] Tıp Fakültesi',
      description: '[Demo] Tıp Fakültesi mezunu. Göz hastalıkları deneyimi. Katarakt cerrahisi ve refraktif cerrahi alanlarında uzmanlaşmıştır.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Dermatoloji Uzmanı',
      title: 'Dermatoloji Uzmanı',
      department: 'Dermatoloji',
      experience: 'XX yıl',
      education: '[Demo] Tıp Fakültesi',
      description: '[Demo] Tıp Fakültesi mezunu. Dermatoloji deneyimi. Lazer tedavileri ve estetik dermatoloji alanlarında uzmanlaşmıştır.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Fizyoterapi Uzmanı',
      title: 'Fizyoterapi Uzmanı',
      department: 'Fizyoterapi',
      experience: 'XX yıl',
      education: '[Demo] Fizyoterapi ve Rehabilitasyon',
      description: '[Demo] Fizyoterapi ve Rehabilitasyon bölümü mezunu. Manuel terapi, spor yaralanmaları rehabilitasyonu alanlarında uzmanlaşmıştır.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face'
    }
  ],
  departments: [
    {
      icon: 'fa-tooth',
      title: 'Diş Hekimliği',
      description: 'Ağız ve diş sağlığı alanında implant, kanal tedavisi, ortodonti ve estetik diş hekimliği hizmetleri.'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Kardiyoloji',
      description: 'Kalp ve damar hastalıkları tanı ve tedavisi, EKG, ekokardiyografi, anjiyo ve ritim bozuklukları.'
    },
    {
      icon: 'fa-hand',
      title: 'Dermatoloji',
      description: 'Cilt hastalıkları, alerjik reaksiyonlar, lazer tedavisi, cilt kanseri taraması ve estetik uygulamalar.'
    },
    {
      icon: 'fa-eye',
      title: 'Göz Sağlığı',
      description: 'Göz muayenesi, katarakt, glokom, lazer göz ameliyatları ve görme kusurları tedavisi.'
    },
    {
      icon: 'fa-bone',
      title: 'Fizyoterapi',
      description: 'Kas-iskelet sistemi rahatsızlıkları, spor yaralanmaları, rehabilitasyon ve manuel terapi.'
    },
    {
      icon: 'fa-x-ray',
      title: 'Radyoloji',
      description: 'MR, BT, ultrasonografi, direkt grafi ve mamografi gibi ileri görüntüleme hizmetleri.'
    }
  ],
  stats: [
    { icon: 'fa-user-injured', value: 1000, suffix: '+', label: 'Mutlu Hasta (Demo)' },
    { icon: 'fa-user-md', value: 20, suffix: '+', label: 'Uzman Doktor (Demo)' },
    { icon: 'fa-award', value: 5, suffix: '+', label: 'Yıllık Deneyim (Demo)' },
    { icon: 'fa-smile', value: 90, suffix: '%', label: 'Memnuniyet Oranı (Demo)' }
  ],
  testimonials: [
    {
      text: '"[Demo] Profesyonel bir ekip. Tedavi sırasında konforlu bir deneyim yaşadım ve sonuçtan memnun kaldım."',
      name: '[Demo Hasta]',
      department: 'Diş Tedavisi',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 5
    },
    {
      text: '"[Demo] Sağlık hizmetinden memnun kaldım. İlgili ve güler yüzlü personel için teşekkürler."',
      name: '[Demo Hasta]',
      department: 'Kardiyoloji',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      text: '"[Demo] Tedavi sürecimde gösterdikleri özen ve profesyonellik sayesinde kısa sürede sağlığıma kavuştum."',
      name: '[Demo Hasta]',
      department: 'Fizyoterapi',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4.5
    }
  ],
  faq: [
    { question: 'Randevu nasıl alabilirim?', answer: 'Randevu almak için web sitemizdeki iletişim formunu doldurabilir, 7/24 hizmet veren çağrı merkezimizi arayabilir veya merkezimize şahsen başvurabilirsiniz. Online randevu sistemimiz sayesinde istediğiniz bölüm ve doktora hızlıca randevu oluşturabilirsiniz.' },
    { question: 'Hangi sigorta şirketleri ile anlaşmalısınız?', answer: 'Başlıca anlaşmalı olduğumuz sigorta şirketleri: Anadolu Sigorta, Axa Sigorta, Allianz, Groupama, Eureko Sigorta, Ak Sigorta ve diğer özel sağlık sigortaları. Tüm anlaşmalı kurumlar listesi için bizimle iletişime geçebilirsiniz.' },
    { question: 'Acil durumlarda ne yapmalıyım?', answer: 'Acil durumlarda 7/24 hizmet veren acil servisimiz bulunmaktadır. Acil durumlarda 112\'yi arayabilir veya doğrudan merkezimize başvurabilirsiniz. Acil durumlar için 7/24 açık telefon hattımız: 0212 XXX XX XX.' },
    { question: 'Tedavi ücretleri hakkında bilgi alabilir miyim?', answer: 'Tedavi ücretlerimiz, sigorta kapsamınıza ve seçeceğiniz tedavi yöntemine göre değişiklik göstermektedir. Detaylı ücret bilgisi için web sitemizdeki fiyat listesini inceleyebilir veya bizimle iletişime geçebilirsiniz.' },
    { question: 'Muayene öncesi hazırlık yapmalı mıyım?', answer: 'Bölüme göre değişmekle birlikte, genel olarak randevunuzdan önce varsa önceki tahlil ve görüntüleme sonuçlarınızı yanınızda getirmeniz önerilir. Bazı testler için aç karnına gelmeniz gerekebilir. Randevu sırasında bu konuda bilgilendirileceksiniz.' },
    { question: 'Merkezinizde hangi dillerde hizmet veriliyor?', answer: 'Merkezimizde başta Türkçe olmak üzere İngilizce, Almanca ve Arapça dillerinde hizmet verilmektedir. Uluslararası hastalarımız için tercüman desteği de sağlamaktayız.' }
  ],
  treatmentSteps: [
    { number: 1, title: 'Muayene', description: 'Uzman doktorlarımızla detaylı muayene ve ön değerlendirme' },
    { number: 2, title: 'Tanı', description: 'Gelişmiş görüntüleme ve testlerle doğru teşhis' },
    { number: 3, title: 'Tedavi', description: 'Kişiye özel tedavi planı ve modern yöntemlerle uygulama' },
    { number: 4, title: 'Takip', description: 'Tedavi sonrası düzenli kontroller ve sürekli destek' }
  ],
  workingHours: {
    weekdays: '08:00 - 19:00',
    saturday: '09:00 - 17:00',
    sunday: '10:00 - 14:00',
    emergency: '7/24'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
    about: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80'
  },
  footer: {
    aboutText: '[Demo] Modern Tıp Merkezi olarak deneyimli kadromuz ve ileri teknolojik donanımımızla hastalarımıza en kaliteli sağlık hizmetini sunmaktayız.',
    emergency: 'Acil: 0212 XXX XX XX',
    copyright: '© 2024 Efesoftlab. Tüm hakları saklıdır.'
  }
};

function mergeDeep(target, source) {
  var output = {};
  if (typeof target === 'object' && target !== null) {
    output = JSON.parse(JSON.stringify(target));
  }
  if (typeof source === 'object' && source !== null) {
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof output[key] === 'object' && output[key] !== null && !Array.isArray(output[key])) {
          output[key] = mergeDeep(output[key], source[key]);
        } else {
          output[key] = JSON.parse(JSON.stringify(source[key]));
        }
      }
    }
  }
  return output;
}

function getConfig() {
  try {
    var saved = localStorage.getItem('efesoftlab-config');
    if (saved) {
      var parsed = JSON.parse(saved);
      return mergeDeep(DEFAULT_CONFIG, parsed);
    }
  } catch (e) {
    console.warn('Config yüklenemedi, varsayılan kullanılıyor.', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

function saveConfig(config) {
  try {
    localStorage.setItem('efesoftlab-config', JSON.stringify(config));
    return true;
  } catch (e) {
    console.error('Config kaydedilemedi.', e);
    return false;
  }
}

function getNestedValue(obj, path) {
  var keys = path.split('.');
  var current = obj;
  for (var i = 0; i < keys.length; i++) {
    if (current === null || current === undefined || typeof current !== 'object') return undefined;
    current = current[keys[i]];
  }
  return current;
}

function setNestedValue(obj, path, value) {
  var keys = path.split('.');
  var current = obj;
  for (var i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]] || typeof current[keys[i]] !== 'object') current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

function applyConfigToDOM(config) {
  if (!config) config = getConfig();

  document.querySelectorAll('[data-config]').forEach(function(el) {
    var path = el.getAttribute('data-config');
    var value = getNestedValue(config, path);
    if (value !== undefined && value !== null) {
      if (el.tagName === 'IMG' || el.tagName === 'SOURCE') {
        el.src = value;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.type !== 'submit' && el.type !== 'button') el.value = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  document.querySelectorAll('[data-config-src]').forEach(function(el) {
    var path = el.getAttribute('data-config-src');
    var value = getNestedValue(config, path);
    if (value !== undefined && value !== null) {
      el.src = value;
    }
  });

  document.querySelectorAll('[data-config-target]').forEach(function(el) {
    var path = el.getAttribute('data-config-target');
    var value = getNestedValue(config, path);
    if (value !== undefined && value !== null) {
      el.setAttribute('data-target', value);
    }
  });

  document.querySelectorAll('[data-config-icon]').forEach(function(el) {
    var path = el.getAttribute('data-config-icon');
    var value = getNestedValue(config, path);
    if (value !== undefined && value !== null) {
      el.className = 'fas ' + value;
    }
  });

  document.querySelectorAll('[data-config-placeholder]').forEach(function(el) {
    var path = el.getAttribute('data-config-placeholder');
    var value = getNestedValue(config, path);
    if (value !== undefined && value !== null) {
      el.placeholder = value;
    }
  });
}
