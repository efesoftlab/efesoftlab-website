/* ============================================================
   LEZZETiN ADRESi RESTAURANT — Premium JavaScript
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ==========================================================
     DIL SISTEMI (TR/EN)
     ========================================================== */
  var translations = {
    tr: {
      'nav-home': 'Ana Sayfa',
      'nav-menu': 'Menü',
      'nav-about': 'Hakkımızda',
      'nav-services': 'Özel Etkinlikler',
      'nav-gallery': 'Galeri',
      'nav-contact': 'İletişim',
      'hero-subtitle': 'Hoş Geldiniz',
      'hero-title': 'Lezzetin Adresi',
      'hero-text': 'Şefin özenle seçtiği taze malzemelerle hazırlanan eşsiz lezzetleri, sıcak ve samimi atmosferimizde keşfedin.',
      'hero-btn-menu': 'Menüyü İncele',
      'hero-btn-reservation': 'Rezervasyon Yap',
      'about-label': 'Hikayemiz',
      'about-title': 'Geleneksel Lezzetler, Modern Dokunuşlar',
      'about-text-1': '2015 yılında küçük bir mutfakta başlayan tutku dolu yolculuğumuz, bugün şehrin en gözde restoranlarından biri olmamızı sağladı. Her tabakta taze, yerel ve mevsimsel malzemeler kullanarak size unutulmaz bir lezzet deneyimi sunuyoruz.',
      'about-text-2': 'Tecrübeli şef ekibimiz, Türk mutfağının zengin mirasını modern tekniklerle birleştirerek her damak tadına hitap eden eşsiz menüler hazırlamaktadır.',
      'about-btn': 'Daha Fazla',
      'menu-title': 'Lezzetli Menümüz',
      'menu-subtitle': 'Şefin özel tarifleriyle hazırlanan seçkin yemeklerimizi keşfedin',
      'menu-all': 'Tümü',
      'menu-appetizer': 'Başlangıç',
      'menu-main': 'Ana Yemek',
      'menu-grill': 'Izgara',
      'menu-pasta': 'Makarna',
      'menu-salad': 'Salata',
      'menu-dessert': 'Tatlı',
      'menu-drink': 'İçecek',
      'menu-soup': 'Çorba',
      'special-title': 'Günün Spesiyali',
      'special-subtitle': 'Şefimizin bugün sizin için özel olarak hazırladığı lezzetler',
      'chef-title': 'Şef Mehmet Yılmaz',
      'chef-role': 'Yönetici Şef',
      'chef-text-1': '15 yıllık mesleki tecrübesiyle mutfağımızın başında yer alan Şef Mehmet Yılmaz, dünyanın önde gelen restoranlarında edindiği deneyimi Türk mutfağının zengin lezzetleriyle birleştiriyor.',
      'chef-text-2': 'Her bir tabakta taze, yerel ve mevsimsel malzemeler kullanarak misafirlerimize unutulmaz bir gastronomi deneyimi sunmayı hedefliyor.',
      'chef-stat-1': 'Yıllık Deneyim',
      'chef-stat-2': 'Ödül',
      'chef-stat-3': 'Özel Tarif',
      'gallery-title': 'Galeri',
      'gallery-subtitle': 'Restoranımızdan ve lezzetlerimizden kareler',
      'testimonials-title': 'Misafirlerimizin Yorumları',
      'testimonials-subtitle': 'Onların sözleri bizim için en değerli ödül',
      'reservation-cta-title': 'Unutulmaz Bir Akşam Yemeği İçin',
      'reservation-cta-text': 'Rezervasyon yapın, size özel hazırlanmış lezzetlerle dolu bir akşamın keyfini çıkarın.',
      'reservation-cta-btn': 'Rezervasyon Yap',
      'hours-title': 'Çalışma Saatlerimiz',
      'hours-note': 'Mutfağımız kapanıştan 1 saat önce son siparişleri almaktadır.',
      'hours-mon-thu': 'Pazartesi - Perşembe',
      'hours-fri-sat': 'Cuma - Cumartesi',
      'hours-sun': 'Pazar',
      'footer-about': '2015 yılından bu yana, en taze malzemelerle hazırladığımız eşsiz lezzetlerimizle misafirlerimize unutulmaz bir yemek deneyimi sunuyoruz.',
      'footer-quick': 'Hızlı Linkler',
      'footer-hours': 'Çalışma Saatleri',
      'footer-contact': 'İletişim',
      'footer-copyright': 'Tüm hakları saklıdır.',
      'page-hero-about-title': 'Hakkımızda',
      'page-hero-about-text': 'Geleneksel lezzetlerin modern yorumlarla buluştuğu mutfağımızın hikayesi',
      'about-story-title': 'Bizim Hikayemiz',
      'about-story-1': '2015 yılının sıcak bir yaz akşamında, küçük bir dükkanda başlayan bu yolculuk, bugün İstanbul\'un kalbinde, üç katlı tarihi bir binada devam ediyor. Kurucumuz Mehmet Yılmaz\'ın çocukluk hayali olan kendi restoranını açma fikri, ailesinin destekleriyle gerçeğe dönüştü.',
      'about-story-2': 'İlk günden beri en taze, en kaliteli malzemeleri kullanma prensibiyle hareket eden ekibimiz, her geçen gün daha da büyüyerek bugün 50 kişilik profesyonel bir kadroya ulaştı.',
      'about-story-3': 'Yerel üreticilerden tedarik ettiğimiz taze sebzeler, Ege\'nin zeytinyağları, Güneydoğu\'nun baharatları ve dünyanın dört bir yanından seçkin şaraplar ile zenginleşen menümüz, her damak tadına hitap edecek çeşitliliktedir.',
      'team-title': 'Şef Ekibimiz',
      'team-subtitle': 'Lezzetlerimizin ardındaki yetenekli eller',
      'philosophy-title': 'Felsefemiz',
      'philosophy-subtitle': 'Lezzete olan tutkumuzun temel taşları',
      'phil-1-title': 'Taze Malzeme',
      'phil-1-text': 'Her gün yerel üreticilerden tedarik ettiğimiz taze sebze, meyve ve otlar ile en kaliteli malzemeleri kullanıyoruz.',
      'phil-2-title': 'Geleneksel Lezzet',
      'phil-2-text': 'Anadolu\'nun binlerce yıllık mutfak kültürünü modern tekniklerle buluşturuyor, her yemeğimizde geçmişin izlerini geleceğe taşıyoruz.',
      'phil-3-title': 'Tutku ve Özen',
      'phil-3-text': 'Her tabak, şeflerimizin tutkusu ve özeniyle hazırlanır. Misafirlerimizin yüzündeki gülümseme, en büyük motivasyon kaynağımızdır.',
      'services-hero-title': 'Özel Etkinlikler',
      'services-hero-text': 'Hayalinizdeki organizasyonu bizimle gerçeğe dönüştürün',
      'services-title': 'Etkinlik Seçeneklerimiz',
      'services-subtitle': 'Her türlü özel gününüz için size özel çözümler sunuyoruz',
      'catering-title': 'Catering Hizmetimiz',
      'catering-text-1': 'Restoranımızın eşsiz lezzetlerini, dilediğiniz mekana taşıyoruz. Profesyonel catering ekibimizle, evinizde, ofisinizde veya açık hava etkinliklerinizde size özel menüler hazırlıyoruz.',
      'catering-text-2': 'Her etkinliğin büyüklüğüne ve konseptine göre özelleştirilmiş catering paketlerimizle, misafirlerinize unutulmaz bir lezzet deneyimi yaşatın.',
      'catering-cta': 'İletişime Geçin',
      'reservation-info-title': 'Rezervasyon ve Organizasyon',
      'reservation-info-subtitle': 'Etkinliğinizi planlamak için ihtiyacınız olan her şey',
      'contact-hero-title': 'İletişim',
      'contact-hero-text': 'Rezervasyon ve tüm sorularınız için bizimle iletişime geçin',
      'contact-form-title': 'Rezervasyon Formu',
      'form-name': 'Ad Soyad',
      'form-email': 'E-posta',
      'form-phone': 'Telefon',
      'form-date': 'Tarih',
      'form-time': 'Saat',
      'form-guests': 'Kişi Sayısı',
      'form-requests': 'Özel İstekler',
      'form-placeholder-name': 'Adınız ve soyadınız',
      'form-placeholder-email': 'ornek@email.com',
      'form-placeholder-phone': '0555 123 45 67',
      'form-placeholder-requests': 'Varsa özel isteklerinizi (diyet, alerji, özel gün vb.) belirtiniz.',
      'form-submit': 'Rezervasyon Talebi Gönder',
      'form-select-guests': 'Kişi sayısı seçiniz',
      'form-error-name': 'Lütfen adınızı ve soyadınızı giriniz.',
      'form-error-email': 'Geçerli bir e-posta adresi giriniz.',
      'form-error-phone': 'Geçerli bir telefon numarası giriniz.',
      'form-error-date': 'Geçerli bir tarih seçiniz (bugün veya sonrası).',
      'form-error-time': 'Lütfen 10:00 - 23:00 arası bir saat seçiniz.',
      'form-error-guests': 'Lütfen kişi sayısını seçiniz.',
      'contact-address-title': 'Adresimiz',
      'contact-phone-title': 'Telefon',
      'contact-email-title': 'E-posta',
      'contact-hours-title': 'Çalışma Saatleri',
      'contact-address': 'İstiklal Caddesi No:123, Beyoğlu, İstanbul 34421',
      'contact-phone': '(0555) 123 45 67',
      'contact-email': 'info@lezzetinadresi.com',
      'toast-booking-success': 'Rezervasyon talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.',
      'toast-booking-error': 'Lütfen tüm alanları doğru şekilde doldurunuz.',
      'cookie-text': 'Size daha iyi bir deneyim sunmak için çerezler kullanıyoruz. Devam ederek çerez politikamızı kabul etmiş olursunuz.',
      'cookie-accept': 'Kabul Et',
      'cookie-decline': 'Reddet',
      'preloader-text': 'Lezzetin Adresi',
      'special-starter': 'Başlangıç',
      'special-main': 'Ana Yemek',
      'special-dessert': 'Tatlı',
      'about-badge': 'Hakkımızda',
    },
    en: {
      'nav-home': 'Home',
      'nav-menu': 'Menu',
      'nav-about': 'About',
      'nav-services': 'Events',
      'nav-gallery': 'Gallery',
      'nav-contact': 'Contact',
      'hero-subtitle': 'Welcome',
      'hero-title': 'The Taste',
      'hero-text': 'Discover unique flavors prepared with fresh ingredients carefully selected by our chef, in our warm and friendly atmosphere.',
      'hero-btn-menu': 'View Menu',
      'hero-btn-reservation': 'Make Reservation',
      'about-label': 'Our Story',
      'about-title': 'Traditional Flavors, Modern Touches',
      'about-text-1': 'Our passionate journey that started in a small kitchen in 2015 has made us one of the city\'s most popular restaurants. We use fresh, local and seasonal ingredients in every plate to offer you an unforgettable dining experience.',
      'about-text-2': 'Our experienced chef team combines the rich heritage of Turkish cuisine with modern techniques to create unique menus that appeal to every taste.',
      'about-btn': 'Learn More',
      'menu-title': 'Our Delicious Menu',
      'menu-subtitle': 'Discover our select dishes prepared with the chef\'s special recipes',
      'menu-all': 'All',
      'menu-appetizer': 'Appetizer',
      'menu-main': 'Main Course',
      'menu-grill': 'Grill',
      'menu-pasta': 'Pasta',
      'menu-salad': 'Salad',
      'menu-dessert': 'Dessert',
      'menu-drink': 'Drink',
      'menu-soup': 'Soup',
      'special-title': 'Today\'s Special',
      'special-subtitle': 'Flavors our chef has specially prepared for you today',
      'chef-title': 'Chef Mehmet Yılmaz',
      'chef-role': 'Executive Chef',
      'chef-text-1': 'With 15 years of professional experience, Chef Mehmet Yılmaz combines his experience from world-renowned restaurants with the rich flavors of Turkish cuisine.',
      'chef-text-2': 'He aims to offer our guests an unforgettable gastronomic experience using fresh, local and seasonal ingredients in every plate.',
      'chef-stat-1': 'Years Experience',
      'chef-stat-2': 'Awards',
      'chef-stat-3': 'Recipes',
      'gallery-title': 'Gallery',
      'gallery-subtitle': 'Moments from our restaurant and flavors',
      'testimonials-title': 'Guest Reviews',
      'testimonials-subtitle': 'Their words are our most valuable reward',
      'reservation-cta-title': 'For an Unforgettable Dinner',
      'reservation-cta-text': 'Make a reservation and enjoy an evening full of specially prepared flavors.',
      'reservation-cta-btn': 'Book Now',
      'hours-title': 'Opening Hours',
      'hours-note': 'Our kitchen accepts last orders 1 hour before closing.',
      'hours-mon-thu': 'Monday - Thursday',
      'hours-fri-sat': 'Friday - Saturday',
      'hours-sun': 'Sunday',
      'footer-about': 'Since 2015, we have been offering our guests an unforgettable dining experience with our unique flavors prepared with the freshest ingredients.',
      'footer-quick': 'Quick Links',
      'footer-hours': 'Opening Hours',
      'footer-contact': 'Contact',
      'footer-copyright': 'All rights reserved.',
      'page-hero-about-title': 'About Us',
      'page-hero-about-text': 'The story of our kitchen where traditional flavors meet modern interpretations',
      'about-story-title': 'Our Story',
      'about-story-1': 'This journey, which started in a small shop on a warm summer evening in 2015, continues today in a three-story historical building in the heart of Istanbul.',
      'about-story-2': 'Our team, guided by the principle of using the freshest and highest quality ingredients from day one, has grown to a professional staff of 50.',
      'about-story-3': 'Our menu, enriched with fresh vegetables from local producers, olive oils from the Aegean, spices from Southeast Anatolia and select wines from around the world, offers diversity to suit every taste.',
      'team-title': 'Our Chef Team',
      'team-subtitle': 'The talented hands behind our flavors',
      'philosophy-title': 'Our Philosophy',
      'philosophy-subtitle': 'The cornerstones of our passion for taste',
      'phil-1-title': 'Fresh Ingredients',
      'phil-1-text': 'We use the highest quality ingredients including fresh vegetables, fruits and herbs sourced daily from local producers.',
      'phil-2-title': 'Traditional Taste',
      'phil-2-text': 'We combine Anatolia\'s thousand-year-old culinary culture with modern techniques, carrying traces of the past into the future.',
      'phil-3-title': 'Passion & Care',
      'phil-3-text': 'Every plate is prepared with the passion and care of our chefs. The smile on our guests\' faces is our greatest motivation.',
      'services-hero-title': 'Special Events',
      'services-hero-text': 'Turn your dream event into reality with us',
      'services-title': 'Event Options',
      'services-subtitle': 'We offer special solutions for all your special occasions',
      'catering-title': 'Our Catering Service',
      'catering-text-1': 'We bring our restaurant\'s unique flavors to any location you desire. With our professional catering team, we prepare custom menus for your home, office or outdoor events.',
      'catering-text-2': 'With our catering packages customized according to the size and concept of each event, give your guests an unforgettable taste experience.',
      'catering-cta': 'Get in Touch',
      'reservation-info-title': 'Reservation & Organization',
      'reservation-info-subtitle': 'Everything you need to plan your event',
      'contact-hero-title': 'Contact',
      'contact-hero-text': 'Contact us for reservations and all your questions',
      'contact-form-title': 'Reservation Form',
      'form-name': 'Full Name',
      'form-email': 'Email',
      'form-phone': 'Phone',
      'form-date': 'Date',
      'form-time': 'Time',
      'form-guests': 'Number of Guests',
      'form-requests': 'Special Requests',
      'form-placeholder-name': 'Your full name',
      'form-placeholder-email': 'example@email.com',
      'form-placeholder-phone': '+90 555 123 45 67',
      'form-placeholder-requests': 'Please specify any special requests (diet, allergy, special occasion etc.)',
      'form-submit': 'Send Reservation Request',
      'form-select-guests': 'Select number of guests',
      'form-error-name': 'Please enter your full name.',
      'form-error-email': 'Please enter a valid email address.',
      'form-error-phone': 'Please enter a valid phone number.',
      'form-error-date': 'Please select a valid date (today or later).',
      'form-error-time': 'Please select a time between 10:00 - 23:00.',
      'form-error-guests': 'Please select the number of guests.',
      'contact-address-title': 'Our Address',
      'contact-phone-title': 'Phone',
      'contact-email-title': 'Email',
      'contact-hours-title': 'Working Hours',
      'contact-address': 'İstiklal Street No:123, Beyoğlu, Istanbul 34421',
      'contact-phone': '+90 (555) 123 45 67',
      'contact-email': 'info@lezzetinadresi.com',
      'toast-booking-success': 'Your reservation request has been received! We will contact you as soon as possible.',
      'toast-booking-error': 'Please fill all fields correctly.',
      'cookie-text': 'We use cookies to provide you with a better experience. By continuing, you accept our cookie policy.',
      'cookie-accept': 'Accept',
      'cookie-decline': 'Decline',
      'preloader-text': 'The Taste Address',
      'special-starter': 'Starter',
      'special-main': 'Main Course',
      'special-dessert': 'Dessert',
      'about-badge': 'About Us',
    }
  };

  /* ===== Dili Uygula ===== */
  function setLanguage(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      if (t[key]) {
        el.value = t[key];
      }
    });

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem('efesoftlab-lang', lang);
    window.currentLang = lang;
  }

  /* ===== Dile Gecis ===== */
  window.switchLanguage = function (lang) {
    setLanguage(lang);
  };

  /* Varsayilan dil */
  var savedLang = localStorage.getItem('efesoftlab-lang') || 'tr';
  setLanguage(savedLang);

  /* Dil dugmelerine tiklanma */
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  /* ==========================================================
     KARANLIK/ACIK MOD
     ========================================================== */
  var themeIcon = document.querySelector('.theme-toggle i');
  var currentTheme = localStorage.getItem('efesoftlab-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (themeIcon) {
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = document.documentElement.getAttribute('data-theme');
      var newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('efesoftlab-theme', newTheme);
      if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
      }
    });
  });

  /* ==========================================================
     SAYFA YUKLENIYOR (PRELOADER)
     ========================================================== */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
      }, 600);
    });
    setTimeout(function () {
      if (!preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
      }
    }, 3000);
  }

  /* ==========================================================
     MOBIL MENU
     ========================================================== */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  /* ==========================================================
     YAPISKAN NAVBAR
     ========================================================== */
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================
     DUZGUN KAYDIRMA
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  /* ==========================================================
     KAYDIRMA ANIMASYONLARI (Intersection Observer)
     ========================================================== */
  var animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ==========================================================
     YAZI ANIMASYONU (Typing Effect)
     ========================================================== */
  var typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    var phrases = window.currentLang === 'en' ?
      ['The Taste Address', 'Gourmet Experience', 'Unique Flavors'] :
      ['Lezzetin Adresi', 'Gurme Deneyimi', 'Eşsiz Lezzetler'];
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function typeEffect() {
      var currentPhrase = phrases[phraseIndex];
      var speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex <= currentPhrase.length) {
        typingEl.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
      } else if (isDeleting && charIndex >= 0) {
        typingEl.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
      }

      if (!isDeleting && charIndex > currentPhrase.length) {
        isDeleting = true;
        speed = 1500;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }

      setTimeout(typeEffect, speed);
    }

    setTimeout(typeEffect, 1000);
  }

  /* ==========================================================
     MENU FILTRELEME
     ========================================================== */
  var filterBtns = document.querySelectorAll('.menu-filter-btn');
  var menuCards = document.querySelectorAll('.menu-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        menuCards.forEach(function (card) {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            var category = card.getAttribute('data-category');
            if (category === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  /* ==========================================================
     YORUM KARUSELI
     ========================================================== */
  var track = document.querySelector('.testimonial-track');
  var dots = document.querySelectorAll('.carousel-dot');
  if (track && dots.length > 0) {
    var currentSlide = 0;
    var totalSlides = track.children.length;
    var autoPlayInterval;

    function goToSlide(index) {
      currentSlide = index;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      dots.forEach(function (d) { d.classList.remove('active'); });
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        goToSlide(index);
        clearInterval(autoPlayInterval);
        startAutoPlay();
      });
    });

    function startAutoPlay() {
      autoPlayInterval = setInterval(function () {
        var next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
      }, 5000);
    }

    startAutoPlay();
  }

  /* ==========================================================
     GALERI LIGHTBOX
     ========================================================== */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var img = this.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================
     WHATSAPP BUTONU
     ========================================================== */
  var whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var phone = '905551234567';
      var message = encodeURIComponent(
        window.currentLang === 'en'
          ? 'Hello, I would like to make a reservation.'
          : 'Merhaba, rezervasyon yapmak istiyorum.'
      );
      window.open('https://wa.me/' + phone + '?text=' + message, '_blank');
    });
  }

  /* ==========================================================
     YUKARI CIK (Back to Top with Progress)
     ========================================================== */
  var backToTopBtn = document.getElementById('back-to-top');
  var progressCircle = document.querySelector('.back-to-top svg circle');

  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      var scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      var scrollProgress = window.pageYOffset / scrollTotal;
      var circumference = 138.23;

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = circumference - (scrollProgress * circumference);
      }

      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     REZERVASYON FORM DOGRULAMA
     ========================================================== */
  var reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    var nameInput = document.getElementById('res-name');
    var emailInput = document.getElementById('res-email');
    var phoneInput = document.getElementById('res-phone');
    var dateInput = document.getElementById('res-date');
    var timeInput = document.getElementById('res-time');
    var guestsInput = document.getElementById('res-guests');

    function showError(input) {
      input.classList.add('error');
      input.classList.remove('success');
    }

    function showSuccess(input) {
      input.classList.remove('error');
      input.classList.add('success');
    }

    function validateName() {
      if (!nameInput) return true;
      var val = nameInput.value.trim();
      if (val.length < 2) { showError(nameInput); return false; }
      showSuccess(nameInput); return true;
    }

    function validateEmail() {
      if (!emailInput) return true;
      var val = emailInput.value.trim();
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(val)) { showError(emailInput); return false; }
      showSuccess(emailInput); return true;
    }

    function validatePhone() {
      if (!phoneInput) return true;
      var val = phoneInput.value.trim();
      var re = /^[+]?[\d\s()-]{7,20}$/;
      if (!re.test(val)) { showError(phoneInput); return false; }
      showSuccess(phoneInput); return true;
    }

    function validateDate() {
      if (!dateInput) return true;
      var val = dateInput.value;
      if (!val) { showError(dateInput); return false; }
      var selected = new Date(val);
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) { showError(dateInput); return false; }
      showSuccess(dateInput); return true;
    }

    function validateTime() {
      if (!timeInput) return true;
      var val = timeInput.value;
      if (!val) { showError(timeInput); return false; }
      var parts = val.split(':').map(Number);
      if (parts[0] < 10 || parts[0] > 23) { showError(timeInput); return false; }
      showSuccess(timeInput); return true;
    }

    function validateGuests() {
      if (!guestsInput) return true;
      var val = guestsInput.value;
      if (!val || val === '') { showError(guestsInput); return false; }
      showSuccess(guestsInput); return true;
    }

    if (nameInput) nameInput.addEventListener('blur', validateName);
    if (emailInput) emailInput.addEventListener('blur', validateEmail);
    if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
    if (dateInput) dateInput.addEventListener('blur', validateDate);
    if (timeInput) timeInput.addEventListener('blur', validateTime);
    if (guestsInput) guestsInput.addEventListener('change', validateGuests);

    /* Tarih minimum = bugun */
    if (dateInput) {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var dd = String(today.getDate()).padStart(2, '0');
      dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
    }

    reservationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var validName = validateName();
      var validEmail = validateEmail();
      var validPhone = validatePhone();
      var validDate = validateDate();
      var validTime = validateTime();
      var validGuests = validateGuests();

      if (validName && validEmail && validPhone && validDate && validTime && validGuests) {
        var formData = {
          name: nameInput ? nameInput.value.trim() : '',
          email: emailInput ? emailInput.value.trim() : '',
          phone: phoneInput ? phoneInput.value.trim() : '',
          date: dateInput ? dateInput.value : '',
          time: timeInput ? timeInput.value : '',
          guests: guestsInput ? guestsInput.value : '',
          requests: document.getElementById('res-requests') ? document.getElementById('res-requests').value.trim() : ''
        };

        showToast(
          window.currentLang === 'en'
            ? 'Your reservation request has been received! We will contact you as soon as possible.'
            : 'Rezervasyon talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.',
          'success'
        );

        reservationForm.reset();
        document.querySelectorAll('.form-control, .floating-group input, .floating-group select, .floating-group textarea').forEach(function (el) {
          el.classList.remove('success', 'error');
        });
      } else {
        showToast(
          window.currentLang === 'en'
            ? 'Please fill all fields correctly.'
            : 'Lütfen tüm alanları doğru şekilde doldurunuz.',
          'error'
        );
        var firstError = reservationForm.querySelector('.error');
        if (firstError) firstError.focus();
      }
    });
  }

  /* ==========================================================
     TOAST BILDIRIMI
     ========================================================== */
  function showToast(message, type) {
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'toast ' + (type || 'info');
    var iconMap = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
    toast.innerHTML = '<i class="fas ' + (iconMap[type] || iconMap.info) + '"></i> ' + message;
    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('toast-out');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 4000);
  }

  /* ==========================================================
     COOKIE ONAY
     ========================================================== */
  var cookieConsent = document.getElementById('cookie-consent');
  if (cookieConsent && !localStorage.getItem('efesoftlab-cookie')) {
    setTimeout(function () {
      cookieConsent.classList.add('show');
    }, 1500);
  }

  document.querySelectorAll('.cookie-accept').forEach(function (btn) {
    btn.addEventListener('click', function () {
      localStorage.setItem('efesoftlab-cookie', 'true');
      var el = document.getElementById('cookie-consent');
      if (el) el.classList.remove('show');
    });
  });

  document.querySelectorAll('.cookie-decline').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById('cookie-consent');
      if (el) el.classList.remove('show');
    });
  });

  /* ==========================================================
     AKTIF NAV LINK
     ========================================================== */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.classList.add('active');
    }
  });

  /* ==========================================================
     MOBIL DOKUNMATIK KAYDIRMA DESTEGI
     ========================================================== */
  var touchStartX = 0;
  var touchEndX = 0;
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  function handleSwipe() {
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      var carousels = document.querySelectorAll('.carousel-dot');
      var track = document.querySelector('.testimonial-track');
      if (track && isElementInViewport(track.closest('.testimonials-section'))) {
        var dots = document.querySelectorAll('.carousel-dot');
        var currentActive = document.querySelector('.carousel-dot.active');
        var activeIndex = -1;
        dots.forEach(function(d, i) { if (d === currentActive) activeIndex = i; });
        if (diff > 0 && activeIndex < dots.length - 1) dots[activeIndex + 1].click();
        else if (diff < 0 && activeIndex > 0) dots[activeIndex - 1].click();
      }
    }
  }
  function isElementInViewport(el) {
    if (!el) return false;
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

});
