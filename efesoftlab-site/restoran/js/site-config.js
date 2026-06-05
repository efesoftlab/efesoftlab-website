/* ============================================================
   LEZZETiN ADRESi RESTAURANT — Site Config
   Tasarim ve Gelistirme: Efesoftlab | Satis ve Dagitim: Efesoftlab
   ============================================================ */

var DEFAULT_CONFIG = {
  logo: {
    text: 'Lezzetin Adresi',
    icon: 'fas fa-utensils'
  },
  contact: {
    phone: '(0555) 123 45 67',
    email: 'info@lezzetinadresi.com',
    address: 'İstiklal Caddesi No:123, Beyoğlu, İstanbul 34421'
  },
  hero: {
    subtitle: 'Hoş Geldiniz',
    title: 'Lezzetin Adresi',
    description: 'Şefin özenle seçtiği taze malzemelerle hazırlanan eşsiz lezzetleri, sıcak ve samimi atmosferimizde keşfedin.'
  },
  about: {
    title: 'Geleneksel Lezzetler, Modern Dokunuşlar',
    story: [
      '2015 yılında küçük bir mutfakta başlayan tutku dolu yolculuğumuz, bugün şehrin en gözde restoranlarından biri olmamızı sağladı. Her tabakta taze, yerel ve mevsimsel malzemeler kullanarak size unutulmaz bir lezzet deneyimi sunuyoruz.',
      'Tecrübeli şef ekibimiz, Türk mutfağının zengin mirasını modern tekniklerle birleştirerek her damak tadına hitap eden eşsiz menüler hazırlamaktadır.',
      'Yerel üreticilerden tedarik ettiğimiz taze sebzeler, Ege\'nin zeytinyağları, Güneydoğu\'nun baharatları ve dünyanın dört bir yanından seçkin şaraplar ile zenginleşen menümüz, her damak tadına hitap edecek çeşitliliktedir.'
    ],
    philosophy: [
      { title: 'Taze Malzeme', text: 'Her gün yerel üreticilerden tedarik ettiğimiz taze sebze, meyve ve otlar ile en kaliteli malzemeleri kullanıyoruz. Mevsimsel ürünlere öncelik veriyoruz.', icon: 'fas fa-leaf' },
      { title: 'Geleneksel Lezzet', text: 'Anadolu\'nun binlerce yıllık mutfak kültürünü modern tekniklerle buluşturuyor, her yemeğimizde geçmişin izlerini geleceğe taşıyoruz.', icon: 'fas fa-fire' },
      { title: 'Tutku ve Özen', text: 'Her tabak, şeflerimizin tutkusu ve özeniyle hazırlanır. Misafirlerimizin yüzündeki gülümseme, bizim en büyük motivasyon kaynağımızdır.', icon: 'fas fa-heart' }
    ]
  },
  categories: {
    starter: { tr: 'Başlangıç', en: 'Starter' },
    main: { tr: 'Ana Yemek', en: 'Main Course' },
    grill: { tr: 'Izgara', en: 'Grill' },
    pasta: { tr: 'Makarna', en: 'Pasta' },
    salad: { tr: 'Salata', en: 'Salad' },
    dessert: { tr: 'Tatlı', en: 'Dessert' },
    soup: { tr: 'Çorba', en: 'Soup' },
    drink: { tr: 'İçecek', en: 'Drink' }
  },
  chefTeam: [
    {
      name: 'Mehmet Yılmaz',
      title: 'Yönetici Şef',
      description: '15 yıllık deneyime sahip olan Mehmet Şef, Londra ve Tokyo\'daki Michelin yıldızlı restoranlarda çalışmıştır. Türk mutfağını dünya standartlarında yorumlamaktadır.',
      experience: '15+ Yıl',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80'
    },
    {
      name: 'Ayşe Demir',
      title: 'Sous Chef & Pastacı',
      description: 'Fransız pastacılık okulu mezunu olan Ayşe Şef, tatlı ve hamur işlerindeki ustalığıyla bilinir. Özel tarifleriyle menümüze benzersiz lezzetler katmaktadır.',
      experience: '10+ Yıl',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80'
    },
    {
      name: 'Ali Kaya',
      title: 'Izgara Şefi',
      description: 'Güneydoğu mutfağının tüm inceliklerine hakim olan Ali Şef, 20 yıllık mangalbaşı tecrübesiyle et yemeklerimizin vazgeçilmez ismidir.',
      experience: '20+ Yıl',
      image: 'https://images.unsplash.com/photo-1566554273541-37e9d77f4a88?w=400&q=80'
    }
  ],
  menu: [
    { name: 'Izgara Somon', price: '185 TL', description: 'Izgara somon fileto, mevsim sebzeleri ve limonlu tereyağı sosu ile', category: 'main', badge: 'Popüler', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { name: 'Kuzu Şiş', price: '160 TL', description: 'Özel baharatlarla marine edilmiş kuzu eti, bulgur pilavı ile', category: 'grill', badge: 'Şefin Tavsiyesi', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { name: 'Mantarlı Risotto', price: '145 TL', description: 'Taze mantar ve parmesan peyniri ile kremsi risotto', category: 'pasta', badge: '', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80' },
    { name: 'Fettuccine Alfredo', price: '135 TL', description: 'Kremalı beyaz sos, parmesan ve taze fesleğen ile', category: 'pasta', badge: '', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
    { name: 'Hellim Salatası', price: '120 TL', description: 'Izgara hellim peyniri, roka, ceviz ve nar ekşisi ile', category: 'salad', badge: 'Popüler', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
    { name: 'Acılı Adana Kebap', price: '150 TL', description: 'El kıyması acılı Adana kebap, közlenmiş sebzeler ile', category: 'grill', badge: 'Popüler', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80' },
    { name: 'Antrikot Izgara', price: '220 TL', description: '300gr dana antrikot, trüf yağlı patates püresi ile', category: 'grill', badge: 'Şefin Tavsiyesi', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80' },
    { name: 'Mercimek Çorbası', price: '65 TL', description: 'Geleneksel kırmızı mercimek çorbası, nane yağı ile', category: 'soup', badge: '', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
    { name: 'Fıstıklı Baklava', price: '85 TL', description: 'Antep fıstıklı, geleneksel yufka tatlısı', category: 'dessert', badge: 'Popüler', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80' },
    { name: 'Karides Güveç', price: '195 TL', description: 'Karides, mantar ve kaşar peyniri ile graten', category: 'main', badge: '', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&q=80' },
    { name: 'Vejetaryen Pizza', price: '130 TL', description: 'Mantar, biber, mısır ve zeytinli pizza', category: 'main', badge: '', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
    { name: 'Paella Deniz Ürünlü', price: '210 TL', description: 'İspanyol pilavı, karides, midye ve kalamar ile', category: 'main', badge: 'Şefin Tavsiyesi', image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&q=80' },
    { name: 'Çoban Salata', price: '75 TL', description: 'Domates, salatalık, biber, soğan ve nar ekşisi ile', category: 'salad', badge: '', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80' },
    { name: 'Kahvaltı Tabağı', price: '95 TL', description: 'Zengin serpme kahvaltı, çeşitli peynirler ve zeytinler', category: 'main', badge: '', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&q=80' },
    { name: 'Şefin Spesiyali', price: '250 TL', description: 'Şefin günlük seçimi, sürpriz lezzetler', category: 'main', badge: 'Şefin Tavsiyesi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
    { name: 'Balık Ekmek', price: '110 TL', description: 'Izgara balık, marul, soğan ve özel sos ile', category: 'main', badge: '', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
    { name: 'Kremalı Mantar Çorbası', price: '70 TL', description: 'Taze mantar ve krema ile hazırlanmış çorba', category: 'soup', badge: '', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
    { name: 'Sufle Çikolatalı', price: '95 TL', description: 'Akışkan çikolatalı sufle, vanilya dondurmalı', category: 'dessert', badge: 'Popüler', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80' },
    { name: 'Soğuk Ayran', price: '25 TL', description: 'Geleneksel yoğurt içeceği', category: 'drink', badge: '', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80' },
    { name: 'Türk Kahvesi', price: '35 TL', description: 'Geleneksel Türk kahvesi, lokum ile', category: 'drink', badge: '', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
    { name: 'Limonata', price: '30 TL', description: 'Taze sıkılmış limonata, nane yaprakları ile', category: 'drink', badge: '', image: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=400&q=80' },
    { name: 'Şefin Tatlısı', price: '80 TL', description: 'Günün tatlısı, şefin seçimi', category: 'dessert', badge: '', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' }
  ],
  dailySpecial: [
    { name: 'Mercimek Çorbası', price: '65 TL', description: 'Kırmızı mercimek, havuç, patates ve baharatlarla hazırlanan geleneksel lezzet.', type: 'starter', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
    { name: 'Antrikot Izgara', price: '220 TL', description: 'Mermer desenli dana antrikot, sebze garnitürü ve trüf sos ile servis edilir.', type: 'main', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80' },
    { name: 'Fıstıklı Baklava', price: '85 TL', description: 'Antep fıstığı ile hazırlanmış geleneksel baklava, kaymak eşliğinde.', type: 'dessert', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80' }
  ],
  testimonials: [
    {
      name: 'Ayşe K.',
      location: 'İstanbul',
      text: 'Lezzetin Adresi\'nde yediğim en güzel yemeklerden birini deneyimledim. Kuzu şiş inanılmaz lezzetliydi. Servis çok hızlı ve personel çok güleryüzlü. Kesinlikle tekrar geleceğim!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
    },
    {
      name: 'Ahmet T.',
      location: 'Ankara',
      text: 'Özel günümüzü burada kutladık ve mükemmel bir deneyimdi. Ortam çok sıcak ve samimiydi. Şefin özel menüsü gerçekten damak çatlatan cinstendi. Herkese tavsiye ediyorum.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
    },
    {
      name: 'Zeynep A.',
      location: 'İzmir',
      text: 'İş yemeği için tercih ettik ve herkes çok memnun kaldı. Fiyat-performans açısından şehrin en iyi restoranlarından biri. Tatlıları mutlaka denemelisiniz, özellikle baklava harika!',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
    }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80'
  ],
  workingHours: {
    weekdays: '11:00 - 23:00',
    weekend: '11:00 - 01:00',
    sunday: '12:00 - 22:00',
    note: 'Mutfağımız kapanıştan 1 saat önce son siparişleri almaktadır.'
  },
  reservation: {
    phone: '(0555) 123 45 67',
    email: 'rezervasyon@lezzetinadresi.com',
    capacity: '150 kişi',
    privateHall: '50 kişi',
    terrace: '80 kişi'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80',
    about: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80',
    story: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=80',
    hours: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    pageHero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80'
  },
  footer: {
    about: '2015 yılından bu yana, en taze malzemelerle hazırladığımız eşsiz lezzetlerimizle misafirlerimize unutulmaz bir yemek deneyimi sunuyoruz. Sıcak atmosferimizde sizi de ağırlamaktan mutluluk duyarız.',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
      tripadvisor: '#',
      youtube: '#'
    }
  }
};

function mergeDeep(target, source) {
  var output = {};
  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      output[key] = target[key];
    }
  }
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}

function getConfig() {
  try {
    var saved = localStorage.getItem('restaurant_config');
    if (saved) {
      var parsed = JSON.parse(saved);
      return mergeDeep(DEFAULT_CONFIG, parsed);
    }
  } catch (e) {
    console.warn('Config okuma hatası:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

function saveConfig(config) {
  try {
    localStorage.setItem('restaurant_config', JSON.stringify(config));
    return true;
  } catch (e) {
    console.error('Config kaydetme hatası:', e);
    return false;
  }
}

function applyConfigToDOM() {
  var config = getConfig();

  document.querySelectorAll('[data-config]').forEach(function (el) {
    var path = el.getAttribute('data-config');
    var value = resolvePath(config, path);
    if (value !== undefined && value !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else if (el.tagName === 'IMG') {
        el.src = value;
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll('[data-config-src]').forEach(function (el) {
    var path = el.getAttribute('data-config-src');
    var value = resolvePath(config, path);
    if (value !== undefined && value !== null) {
      el.src = value;
    }
  });

  document.querySelectorAll('[data-config-href]').forEach(function (el) {
    var path = el.getAttribute('data-config-href');
    var value = resolvePath(config, path);
    if (value !== undefined && value !== null) {
      el.href = value;
    }
  });
}

function resolvePath(obj, path) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    var key = parts[i];
    if (Array.isArray(current)) {
      var idx = parseInt(key, 10);
      if (!isNaN(idx)) {
        current = current[idx];
      } else {
        return undefined;
      }
    } else {
      current = current[key];
    }
  }
  return current;
}
