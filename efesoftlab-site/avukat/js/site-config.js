/* ============================================================
   EFES HUKUK BÜROSU - SİTE YAPILANDIRMA DOSYASI
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

const DEFAULT_CONFIG = {
  logo: {
    text: 'EfesHukuk',
    icon: 'fas fa-balance-scale'
  },
  contact: {
    phone: '(0212) 234 56 78',
    phone2: '(0555) 123 45 67',
    gsm: '905551234567',
    email: 'info@efeshukuk.com',
    email2: 'danisma@efeshukuk.com',
    address: 'Levent Mah. Büyükdere Cad. No:100 K:15 Şişli / İstanbul',
    address2: 'Caferağa Mah. Bahariye Cad. No:45 K:3 Kadıköy / İstanbul'
  },
  hero: {
    title: 'Adaletin Güvencesi',
    subtitle: '45 yıllık tecrübemizle, hukuki sorunlarınızda yanınızdayız. Profesyonel avukat kadromuz ile size en uygun çözümü sunuyoruz.',
    typingText: 'Adaletin Güvencesi',
    btnConsult: 'Danışmanlık Al',
    btnServices: 'Uzmanlıklarımız',
    bgImage: 'https://picsum.photos/1920/1080?random=1'
  },
  about: {
    title: 'Kurumsal Hukuk Geleneği',
    description: 'Efes Hukuk Bürosu, 1978 yılından bu yana Türk yargı sisteminde güvenilir bir çınar olarak hizmet vermektedir. Kurulduğu günden bugüne, adalete olan inancımız ve mesleki etik değerlerimizden ödün vermeden çalışıyoruz.',
    features: [
      '45+ yıllık deneyim ve güven',
      '50+ uzman avukat kadrosu',
      '5000\'den fazla başarılı dava',
      '6 farklı hukuk dalında uzmanlık'
    ],
    image: 'https://picsum.photos/600/450?random=2',
    story1: 'Efes Hukuk Bürosu, 1978 yılında Av. Ahmet Yılmaz tarafından İstanbul Levent\'te kuruldu. Küçük bir avukatlık ofisi olarak başlayan yolculuğumuz, bugün 50\'den fazla avukatın görev yaptığı köklü bir hukuk bürosuna dönüştü.',
    story2: 'Kurulduğumuz günden bu yana, etik değerlerimizden ve mesleki ilkelerimizden ödün vermeden, müvekkillerimize en kaliteli hukuki hizmeti sunmayı kendimize görev bildik. Her geçen yıl artan dava başarımız ve memnun müvekkil portföyümüzle Türkiye\'nin saygın hukuk bürolarından biri olmayı başardık.',
    mission: 'Müvekkillerimizin hukuki sorunlarına yenilikçi, etkili ve sürdürülebilir çözümler üreterek adalete erişimlerini kolaylaştırmak. Hukukun üstünlüğü ilkesine bağlı kalarak, her bireyin adil yargılanma hakkını korumak.',
    vision: 'Türkiye\'nin en güvenilir ve saygın hukuk bürolarından biri olarak, uluslararası standartlarda hukuki hizmet sunmak. Teknolojiyi ve güncel hukuki gelişmeleri yakından takip eden bir kurum kültürü oluşturmak.',
    values: 'Dürüstlük ve şeffaflık, mesleki etik kurallara bağlılık, müvekkil odaklı hizmet anlayışı, sürekli gelişim ve yenilikçilik, takım çalışması ve dayanışma, toplumsal sorumluluk bilinci.'
  },
  practiceAreas: [
    { id: 'criminal', icon: 'fas fa-gavel', title: 'Ceza Hukuku', description: 'Ceza davalarında savunma ve müdafilik, ceza soruşturmaları, icra ceza mahkemeleri ve istinaf süreçlerinde uzman kadro.', detailedDesc: 'Ceza hukuku departmanımız, bireysel ve kurumsal müvekkillere ceza yargılamasının her aşamasında profesyonel destek sağlamaktadır. Soruşturma evresinden istinaf ve temyiz süreçlerine kadar kapsamlı hukuki hizmet sunuyoruz. Hizmetlerimiz arasında; bilişim suçları, malvarlığına karşı suçlar, kişilere karşı suçlar, trafik ceza davaları, icra ceza davaları ve vergi ceza hukuku alanlarında savunma ve müdafilik yer almaktadır.' },
    { id: 'family', icon: 'fas fa-heart', title: 'Aile Hukuku', description: 'Boşanma, velayet, nafaka, mal rejimi, soybağı kurulması ve aile içi uyuşmazlıklarda arabuluculuk hizmetleri.', detailedDesc: 'Aile hukuku ekibimiz, boşanma ve aile içi uyuşmazlıklarda hassas ve etkili çözümler üretmektedir. Müvekkillerimizin duygusal ve hukuki ihtiyaçlarını dengeli bir şekilde karşılamayı hedefliyoruz. Anlaşmalı ve çekişmeli boşanma, velayet ve kişisel ilişki kurulması, nafaka, mal rejimlerinin tasfiyesi, soybağı davaları, aile içi şiddet ve tedbir kararları alanlarında hizmet veriyoruz.' },
    { id: 'commercial', icon: 'fas fa-chart-bar', title: 'Ticaret Hukuku', description: 'Şirket kuruluşu, birleşme ve devralma, ticari sözleşmeler, iflas ve konkordato, ticari alacak davaları.', detailedDesc: 'Ticaret hukuku departmanımız, şirketlerin kuruluşundan tasfiyesine kadar tüm ticari süreçlerde hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. Şirket kuruluşu ve esas sözleşme hazırlığı, birleşme ve devralma (M&A), ticari sözleşmelerin hazırlanması ve incelenmesi, iflas ve konkordato, ticari alacak davaları, limited ve anonim şirket ortaklık uyuşmazlıkları ve haksız rekabet davaları başlıca hizmet alanlarımızdır.' },
    { id: 'property', icon: 'fas fa-building', title: 'Gayrimenkul Hukuku', description: 'Tapu iptali ve tescil, kamulaştırma, kira uyuşmazlıkları, kat mülkiyeti, imar hukuku ve inşaat sözleşmeleri.', detailedDesc: 'Gayrimenkul hukuku ekibimiz, taşınmaz mülkiyeti ve kullanımına ilişkin her türlü hukuki uyuşmazlıkta müvekkillerine destek olmaktadır. Emlak sektörünün dinamik yapısına uygun çözümler üretiyoruz. Tapu iptali ve tescil davaları, kamulaştırma ve kamulaştırmasız el atma, kira uyuşmazlıkları ve tahliye davaları, kat mülkiyeti ve kat irtifakı uyuşmazlıkları, imar barışı ve imar hukuku, inşaat sözleşmeleri alanlarında hizmet veriyoruz.' },
    { id: 'labor', icon: 'fas fa-briefcase', title: 'İş Hukuku', description: 'İşe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı, toplu iş sözleşmeleri ve sendikal haklar.', detailedDesc: 'İş hukuku departmanımız, işçi ve işveren arasındaki uyuşmazlıklarda kapsamlı hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. İş barışının korunması ve tarafların haklarının gözetilmesi öncelikli hedefimizdir. İşe iade davaları, kıdem ve ihbar tazminatı davaları, iş kazası ve meslek hastalığı tazminat davaları, fazla mesai alacağı ve diğer işçilik alacakları, iş sözleşmesinin feshi, toplu iş sözleşmeleri başlıca hizmet alanlarımızdır.' },
    { id: 'ip', icon: 'fas fa-copyright', title: 'Fikri Mülkiyet Hukuku', description: 'Patent, marka, endüstriyel tasarım tescili, fikir ve sanat eserleri, haksız rekabet ve lisans sözleşmeleri.', detailedDesc: 'Fikri mülkiyet hukuku ekibimiz, yenilikçi fikirlerin ve yaratıcı çalışmaların hukuki korunması konusunda uzmanlaşmıştır. Marka, patent ve endüstriyel tasarım tescili ve korunması, fikir ve sanat eserleri (FSEK) kapsamında telif hakkı ihlalleri, coğrafi işaret tescili, haksız rekabet davaları, lisans ve franchise sözleşmeleri, dijital içerik ve yazılım hukuku alanlarında danışmanlık ve dava takibi yapmaktayız.' }
  ],
  lawyers: [
    { id: 1, name: 'Av. Ahmet Yılmaz', title: 'Kurucu Ortak', spec: 'Ceza Hukuku', education: 'İstanbul Üniversitesi Hukuk Fakültesi', experience: '30 yıl', description: 'Ceza Hukuku uzmanı. İstanbul Üniversitesi Hukuk Fakültesi mezunu, 30 yıllık deneyim.', image: 'https://picsum.photos/400/300?random=3' },
    { id: 2, name: 'Av. Ayşe Kaya', title: 'Ortak Avukat', spec: 'Aile Hukuku', education: 'Ankara Üniversitesi Hukuk Fakültesi', experience: '25 yıl', description: 'Aile Hukuku uzmanı. Ankara Üniversitesi Hukuk Fakültesi mezunu, 25 yıllık deneyim.', image: 'https://picsum.photos/400/300?random=4' },
    { id: 3, name: 'Av. Mehmet Demir', title: 'Kıdemli Avukat', spec: 'Ticaret Hukuku', education: 'Marmara Üniversitesi Hukuk Fakültesi', experience: '20 yıl', description: 'Ticaret Hukuku uzmanı. Marmara Üniversitesi Hukuk Fakültesi mezunu, 20 yıllık deneyim.', image: 'https://picsum.photos/400/300?random=5' },
    { id: 4, name: 'Av. Zeynep Şahin', title: 'Avukat', spec: 'Gayrimenkul Hukuku', education: 'İstanbul Üniversitesi Hukuk Fakültesi', experience: '15 yıl', description: 'Gayrimenkul Hukuku uzmanı. İstanbul Üniversitesi Hukuk Fakültesi mezunu, 15 yıllık deneyim.', image: 'https://picsum.photos/400/300?random=6' },
    { id: 5, name: 'Av. Ali Öztürk', title: 'Avukat', spec: 'İş Hukuku', education: 'Koç Üniversitesi Hukuk Fakültesi', experience: '12 yıl', description: 'İş Hukuku uzmanı. Koç Üniversitesi Hukuk Fakültesi mezunu, 12 yıllık deneyim.', image: 'https://picsum.photos/400/300?random=7' }
  ],
  successStories: [
    { id: 1, badge: 'Ticaret Hukuku', title: 'Tazminat Davası', description: 'Sanayi devi şirketimize 50 milyon TL\'lik tazminat davasında %100 başarı sağlandı.', result: '%100 Başarı & Tazminat' },
    { id: 2, badge: 'Ticaret Hukuku', title: 'Uluslararası Tahkim', description: 'Uluslararası tahkim sürecinde müvekkilimizin hakları başarıyla korundu.', result: 'Başarılı Tahkim Süreci' },
    { id: 3, badge: 'Aile Hukuku', title: 'Velayet Davası', description: 'Aile hukuku davasında çocuk velayeti ve nafaka konusunda olumlu sonuç.', result: 'Velayet & Nafaka Kazanımı' }
  ],
  stats: [
    { icon: 'fas fa-file-alt', target: 500, suffix: '+', label: 'Başarılı Dava' },
    { icon: 'fas fa-user-tie', target: 50, suffix: '+', label: 'Uzman Avukat' },
    { icon: 'fas fa-chart-line', target: 95, suffix: '%', label: 'Başarı Oranı' },
    { icon: 'fas fa-calendar-alt', target: 45, suffix: '+', label: 'Yıllık Deneyim' }
  ],
  testimonials: [
    { id: 1, text: 'Boşanma sürecimde Av. Ayşe Kaya\'nın profesyonel yaklaşımı ve hukuki desteği sayesinde hak ettiğim sonucu aldım. Herkese tavsiye ederim.', author: 'Zeynep A.', location: 'İstanbul', rating: 5, image: 'https://picsum.photos/100/100?random=8' },
    { id: 2, text: 'Ticari alacak davamda Efes Hukuk\'un deneyimi sayesinde 2 yıl süren hukuki süreci lehimize çevirdik. Profesyonel ekibe teşekkürler.', author: 'Ahmet K.', location: 'Ankara', rating: 5, image: 'https://picsum.photos/100/100?random=9' },
    { id: 3, text: 'İşe iade davamda gösterdikleri özveri ve hukuki başarı sayesinde işime geri döndüm. Her aşamada yanımda oldular.', author: 'Elif Y.', location: 'İzmir', rating: 5, image: 'https://picsum.photos/100/100?random=10' }
  ],
  faq: [
    { id: 1, question: 'İlk danışmanlık görüşmesi ücretli mi?', answer: 'Evet, ilk danışmanlık görüşmemiz ücretlidir. Ancak bu görüşme sonrasında avukatlık sözleşmesi imzalamanız durumunda danışmanlık ücreti sözleşme bedelinden düşülmektedir. İlk görüşmede davanızı detaylıca analiz ediyor ve size en uygun hukuki stratejiyi belirliyoruz.' },
    { id: 2, question: 'Bir davada avukatlık ücreti nasıl belirlenir?', answer: 'Avukatlık ücretimiz, davanın niteliği, karmaşıklığı, süresi ve avukatlık asgari ücret tarifesi dikkate alınarak belirlenmektedir. Kural olarak sabit ücret veya dava sonucuna göre nispi ücret şeklinde iki farklı model sunuyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.' },
    { id: 3, question: 'Boşanma davası ne kadar sürer?', answer: 'Anlaşmalı boşanma davaları genellikle 2-4 ay içerisinde sonuçlanmaktadır. Çekişmeli boşanma davaları ise davanın karmaşıklığına bağlı olarak 1-3 yıl arasında sürebilmektedir. Süreç hakkında detaylı bilgiyi ilk danışmanlık görüşmesinde paylaşıyoruz.' },
    { id: 4, question: 'Arabuluculuk zorunlu mu?', answer: 'İş hukuku ve ticari davaların bir kısmında arabuluculuk dava şartı olarak zorunludur. Dava açmadan önce arabulucuya başvurulması gerekmektedir. Arabuluculuk sürecinde de profesyonel hukuki destek almanız, hak kaybı yaşamamanız açısından önemlidir.' },
    { id: 5, question: 'Hangi durumlarda adli yardım talep edebilirim?', answer: 'Maddi durumu yetersiz olan kişiler, hukuki yardım alabilmek için adli yardım talebinde bulunabilir. Bu kapsamda devlet tarafından avukat atanması ve yargılama giderlerinden muafiyet sağlanabilir. Başvuru koşulları ve gerekli belgeler hakkında ofisimizden bilgi alabilirsiniz.' }
  ],
  cta: {
    title: 'Hukuki Destek İçin Bize Ulaşın',
    description: 'Profesyonel ekibimiz, hukuki sorunlarınıza en kısa sürede çözüm bulmak için hazır. Hemen randevu alın.',
    btnText: 'Randevu Al',
    bgImage: 'https://picsum.photos/1920/600?random=11'
  },
  workingHours: {
    weekday: '09:00 - 18:00',
    saturday: '10:00 - 14:00 (Randevulu)',
    sunday: 'Kapalı'
  },
  images: {
    hero: 'https://picsum.photos/1920/1080?random=1',
    about: 'https://picsum.photos/600/450?random=2',
    aboutPage: 'https://picsum.photos/600/400?random=11',
    services: 'https://picsum.photos/1920/600?random=20',
    contact: 'https://picsum.photos/1920/600?random=30'
  },
  footer: {
    description: '1978 yılından bu yana İstanbul merkezli olarak hukukun her alanında profesyonel danışmanlık ve dava takibi hizmeti sunmaktayız. Adalete olan inancımızla çalışıyoruz.',
    copyright: '© 2024 Efesoftlab. Tüm hakları saklıdır.',
    credit: 'Satış: Efesoftlab'
  },
  timeline: [
    { year: '1978', text: 'Efes Hukuk Bürosu\'nun İstanbul\'da kuruluşu' },
    { year: '1990', text: 'Ticaret hukuku departmanının kurulması' },
    { year: '2005', text: 'Levent ofisine taşınma ve ekibin genişlemesi' },
    { year: '2024', text: '50+ avukat ve 5000+ başarılı dava ile yolumuza devam' }
  ],
  aboutBanner: {
    title: 'Hakkımızda',
    description: '45 yılı aşkın tecrübe, güven ve adalet anlayışı'
  },
  servicesBanner: {
    title: 'Uzmanlık Alanlarımız',
    description: 'Hukukun her alanında profesyonel çözüm ortağınız'
  },
  contactBanner: {
    title: 'İletişim',
    description: 'Hukuki sorunlarınız için bize ulaşın'
  }
};

function getConfig() {
  try {
    const stored = localStorage.getItem('efesoftlab-config');
    if (stored) {
      const parsed = JSON.parse(stored);
      return mergeDeep(cloneDeep(DEFAULT_CONFIG), parsed);
    }
  } catch (e) {
    console.warn('Yapılandırma yüklenemedi, varsayılan kullanılıyor.');
  }
  return cloneDeep(DEFAULT_CONFIG);
}

function saveConfig(config) {
  try {
    const merged = mergeDeep(cloneDeep(DEFAULT_CONFIG), config);
    localStorage.setItem('efesoftlab-config', JSON.stringify(merged));
    return true;
  } catch (e) {
    console.error('Yapılandırma kaydedilemedi:', e);
    return false;
  }
}

function resetConfig() {
  localStorage.removeItem('efesoftlab-config');
  return cloneDeep(DEFAULT_CONFIG);
}

function applyConfigToDOM(config) {
  if (!config) config = getConfig();

  document.querySelectorAll('[data-config]').forEach(el => {
    const path = el.getAttribute('data-config').split('.');
    let value = config;
    for (const key of path) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return;
      }
    }
    if (value !== undefined && value !== null) {
      const tag = el.tagName.toLowerCase();
      if (tag === 'img') {
        el.src = value;
      } else if (tag === 'input' || tag === 'textarea') {
        if (el.type === 'text' || el.tagName === 'TEXTAREA') {
          el.value = value;
        }
      } else if (tag === 'meta') {
        el.content = value;
      } else if (tag === 'i') {
        el.className = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

function mergeDeep(target, source) {
  const result = cloneDeep(target);
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!result[key]) result[key] = {};
      result[key] = mergeDeep(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function cloneDeep(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(cloneDeep);
  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = cloneDeep(obj[key]);
    }
  }
  return cloned;
}

document.addEventListener('DOMContentLoaded', () => {
  applyConfigToDOM();
});
