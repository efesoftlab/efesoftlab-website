/* ============================================================
   EFESOFT EMLAK - Ana JavaScript Dosyası
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

/* ===== ÇEVİRİ SÖZLÜĞÜ (TR / EN) ===== */
const translations = {
  tr: {
    /* Navbar */
    'nav-home': 'Ana Sayfa',
    'nav-about': 'Hakkımızda',
    'nav-services': 'Hizmetler',
    'nav-listings': 'İlanlar',
    'nav-contact': 'İletişim',

    /* Hero */
    'hero-title': 'Hayalinizdeki',
    'hero-title-span': 'Evi Bulun',
    'hero-desc': 'Premium gayrimenkul danışmanlığı ile lüks konut, villa ve yatırımlık gayrimenkuller',
    'search-placeholder-type': 'Tümü',
    'search-placeholder-location': 'Tüm Lokasyonlar',
    'search-min-price': 'Min. Fiyat (TL)',
    'search-max-price': 'Max. Fiyat (TL)',
    'search-btn': 'Ara',

    /* Filtreler */
    'filter-all': 'Tümü',
    'filter-sale': 'Satılık',
    'filter-rent': 'Kiralık',

    /* Featured */
    'featured-subtitle': 'Öne Çıkanlar',
    'featured-title': 'Öne Çıkan İlanlar',
    'featured-desc': 'Size özel seçtiğimiz en lüks gayrimenkuller',

    /* Satılık */
    'forsale-subtitle': 'Satılık',
    'forsale-title': 'Satılık Gayrimenkuller',
    'forsale-desc': 'Yatırımlık ve oturumluk satılık seçenekler',
    'forsale-all': 'Tüm Satılık İlanları',

    /* Kiralık */
    'forrent-subtitle': 'Kiralık',
    'forrent-title': 'Kiralık Gayrimenkuller',
    'forrent-desc': 'Özenle seçilmiş kiralık konut ve ofis seçenekleri',
    'forrent-all': 'Tüm Kiralık İlanları',

    /* Danışmanlar */
    'agents-subtitle': 'Uzman Kadro',
    'agents-title': 'Danışmanlarımız',
    'agents-desc': 'Sektörün deneyimli ve güvenilir gayrimenkul danışmanları',

    /* Yorumlar */
    'testimonials-subtitle': 'Müşteri Yorumları',
    'testimonials-title': 'Mutlu Müşterilerimiz',
    'testimonials-desc': 'Binlerce memnun müşterimizin görüşleri',

    /* İstatistikler */
    'stat-listings': 'Satılık & Kiralık İlan',
    'stat-agents': 'Uzman Danışman',
    'stat-clients': 'Mutlu Müşteri',
    'stat-years': 'Yıllık Deneyim',

    /* CTA */
    'cta-title': 'Hayalinizdeki Ev Sizi Bekliyor',
    'cta-desc': 'Premium gayrimenkul danışmanlarımız size en uygun mülkü bulmak için hazır.',
    'cta-btn': 'Bize Ulaşın',

    /* Footer */
    'footer-about': 'Premium gayrimenkul danışmanlığı hizmeti ile lüks konut, villa, ofis ve yatırımlık gayrimenkullerde Türkiye\'nin lider platformu. 10 yılı aşkın deneyimimizle hayallerinize ortak oluyoruz.',
    'footer-quick-links': 'Hızlı Linkler',
    'footer-listing-types': 'İlan Türleri',
    'footer-contact': 'İletişim',
    'footer-copyright': '© 2024 Efesoftlab. Tüm hakları saklıdır.',

    /* About */
    'about-hero-subtitle': 'Kurumsal',
    'about-hero-title': 'Hakkımızda',
    'about-hero-desc': '10 yılı aşkın deneyim, binlerce mutlu müşteri',
    'about-breadcrumb': 'Hakkımızda',
    'about-story-subtitle': 'Hikayemiz',
    'about-story-title': 'Başarıyla Dolu Bir Yolculuk',
    'about-story-p1': 'Efesoft Emlak, 2014 yılında İstanbul\'un kalbinde, lüks gayrimenkul sektöründe bir boşluğu doldurmak amacıyla kuruldu. Kurucumuz Ahmet Yılmaz\'ın vizyonu ile bugün Türkiye\'nin önde gelen premium gayrimenkul danışmanlık firmalarından biri haline geldik.',
    'about-story-p2': 'Müşterilerimize sadece bir mülk satmak değil, onların hayallerini ve gelecek yatırımlarını şekillendirmek için çalışıyoruz. Her bir danışmanımız, sektörün en iyi eğitimlerini almış, müşteri memnuniyetini her şeyin üzerinde tutan profesyonellerdir.',
    'about-story-p3': 'Bugün 50\'den fazla uzman danışmanımız, 3 ofisimiz ve 500\'ün üzerinde aktif ilanımızla hizmet vermekteyiz.',
    'about-story-btn': 'Bize Ulaşın',
    'about-mv-subtitle': 'İlkelerimiz',
    'about-mv-title': 'Misyon & Vizyon',
    'about-mission-title': 'Misyonumuz',
    'about-mission-p': 'Müşterilerimize en yüksek kalitede gayrimenkul danışmanlığı hizmeti sunarak, onların hayallerindeki yaşam alanına kavuşmalarını sağlamak. Etik değerlerden ödün vermeden, şeffaf ve güvenilir bir hizmet anlayışıyla sektörde fark yaratmak.',
    'about-vision-title': 'Vizyonumuz',
    'about-vision-p': 'Türkiye\'nin en güvenilir ve tercih edilen premium gayrimenkul markası olmak. Yenilikçi teknolojileri ve uzman kadromuzu birleştirerek gayrimenkul sektöründe yeni standartlar belirlemek ve uluslararası arenada da söz sahibi olmak.',
    'about-why-subtitle': 'Neden Biz',
    'about-why-title': 'Bizi Farklı Kılan Değerler',
    'about-why-1-title': 'Premium Hizmet',
    'about-why-1-p': 'Her müşterimize özel, birebir ilgi ile en üst düzey gayrimenkul danışmanlığı sunuyoruz.',
    'about-why-2-title': 'Güvenilirlik',
    'about-why-2-p': 'Tamamen şeffaf ve etik iş anlayışı ile tüm işlemlerde müşterilerimizin yanındayız.',
    'about-why-3-title': 'Piyasa Bilgisi',
    'about-why-3-p': 'Anlık piyasa verileri ve derin sektör analizleri ile en doğru yatırım kararlarını almanızı sağlıyoruz.',
    'about-why-4-title': '7/24 Destek',
    'about-why-4-p': 'Haftanın her günü profesyonel ekibimizle sorularınızı yanıtlamaya hazırız.',
    'about-team-subtitle': 'Ekibimiz',
    'about-team-title': 'Uzman Danışmanlarımız',
    'about-team-desc': 'Size en iyi hizmeti sunmak için çalışan profesyonel ekibimiz',
    'about-cta-title': 'Profesyonel Destek İçin Buradayız',
    'about-cta-desc': 'Gayrimenkul danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.',
    'about-cta-btn': 'Randevu Alın',

    /* Services */
    'services-hero-subtitle': 'Hizmetlerimiz',
    'services-hero-title': 'Size Özel Çözümler',
    'services-hero-desc': 'Premium gayrimenkul danışmanlığının her alanında yanınızdayız',
    'services-breadcrumb': 'Hizmetler',
    'services-section-subtitle': 'Neler Sunuyoruz',
    'services-section-title': 'Tüm Gayrimenkul Hizmetlerimiz',
    'services-section-desc': 'İhtiyacınıza yönelik kapsamlı gayrimenkul çözümleri',
    'services-1-title': 'Satılık Gayrimenkuller',
    'services-1-p': 'Geniş portföyümüzle size en uygun satılık konut, villa, ofis ve arsaları sunuyoruz. Her bütçeye ve zevke uygun seçenekler.',
    'services-2-title': 'Kiralık Gayrimenkuller',
    'services-2-p': 'Kiralık daire, ofis, dükkan ve villa seçeneklerimizle size en uygun yaşam ve çalışma alanlarını buluyoruz.',
    'services-3-title': 'Gayrimenkul Danışmanlığı',
    'services-3-p': 'Uzman ekibimizle alım-satım, kiralama, yatırım ve portföy yönetimi konularında profesyonel danışmanlık hizmeti.',
    'services-4-title': 'Değerleme Hizmeti',
    'services-4-p': 'SPK lisanslı değerleme uzmanlarımızla gayrimenkullerinizin güncel piyasa değerini profesyonel olarak belirliyoruz.',
    'services-5-title': 'Proje Yönetimi',
    'services-5-p': 'Gayrimenkul projelerinizin başından sonuna kadar tüm süreçlerini profesyonel ekibimizle yönetiyoruz.',
    'services-6-title': 'Yatırım Danışmanlığı',
    'services-6-p': 'Size özel hazırladığımız yatırım portföyleri ile gayrimenkul yatırımlarınızda maksimum getiriyi hedefliyoruz.',
    'services-process-subtitle': 'Süreç',
    'services-process-title': 'Gayrimenkul Alım Süreci',
    'services-process-desc': '5 adımda hayalinizdeki eve kavuşun',
    'services-step-1-title': 'İhtiyaç Analizi',
    'services-step-1-p': 'Size en uygun mülkü bulmak için ihtiyaçlarınızı ve bütçenizi belirliyoruz.',
    'services-step-2-title': 'Portföy Sunumu',
    'services-step-2-p': 'Kriterlerinize uygun gayrimenkulleri özenle seçip size sunuyoruz.',
    'services-step-3-title': 'Gezinti & İnceleme',
    'services-step-3-p': 'Beğendiğiniz mülkleri yerinde gezdiriyor ve tüm detayları gösteriyoruz.',
    'services-step-4-title': 'Pazarlık & Anlaşma',
    'services-step-4-p': 'Sizin adınıza profesyonel pazarlık yaparak en iyi fiyatı almanızı sağlıyoruz.',
    'services-step-5-title': 'Tapu & Teslimat',
    'services-step-5-p': 'Tapu işlemlerinden teslimata kadar tüm resmi süreçlerde yanınızdayız.',
    'services-cta-title': 'Hizmetlerimiz Hakkında Detaylı Bilgi Alın',
    'services-cta-desc': 'Uzman danışmanlarımız size en uygun hizmeti sunmak için hazır.',
    'services-cta-btn': 'İletişime Geçin',

    /* Contact */
    'contact-hero-subtitle': 'İletişim',
    'contact-hero-title': 'Bize Ulaşın',
    'contact-hero-desc': 'Sorularınızı yanıtlamaktan mutluluk duyarız',
    'contact-breadcrumb': 'İletişim',
    'contact-section-subtitle': 'İletişim',
    'contact-section-title': 'Bizimle İletişime Geçin',
    'contact-section-desc': 'Her türlü soru ve görüşleriniz için bize ulaşabilirsiniz',
    'contact-form-title': 'Mesaj Gönderin',
    'contact-form-name': 'Adınız Soyadınız',
    'contact-form-email': 'E-posta Adresiniz',
    'contact-form-phone': 'Telefon Numaranız',
    'contact-form-interest': 'İlgilendiğiniz Gayrimenkul Türü',
    'contact-form-message': 'Mesajınız',
    'contact-form-submit': 'Mesajı Gönder',
    'contact-form-select': 'Seçiniz',
    'contact-info-title': 'İletişim Bilgileri',
    'contact-info-desc': 'Aşağıdaki kanallardan bize ulaşabilirsiniz.',
    'contact-office-title': 'Merkez Ofis',
    'contact-phone-title': 'Telefon',
    'contact-email-title': 'E-posta',
    'contact-hours-title': 'Çalışma Saatleri',
    'contact-whatsapp-title': 'WhatsApp',
    'contact-branches-subtitle': 'Şubelerimiz',
    'contact-branches-title': 'Ofislerimiz',
    'contact-branches-desc': 'Sizlere daha iyi hizmet verebilmek için 3 noktadayız',
    'contact-map-subtitle': 'Konum',
    'contact-map-title': 'Bizi Haritada Bulun',
    'contact-cta-title': 'Sorularınız mı Var?',
    'contact-cta-desc': 'Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.',
    'contact-cta-btn': 'Hemen Arayın',

    /* Toast mesajları */
    'no-results-title': 'İlan Bulunamadı',
    'no-results-text': 'Arama kriterlerinize uygun ilan bulunamadı. Lütfen farklı kriterler deneyin.',

    'toast-search': 'İlanlar filtreleniyor...',
    'toast-contact-success': 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    'toast-contact-error': 'Lütfen zorunlu alanları doldurun.',
    'toast-language': 'Dil Türkçe olarak değiştirildi',
    'toast-cookie': 'Çerez tercihiniz kaydedildi.',
    'toast-lightbox': 'Resim görüntüleniyor',

    /* Çerez */
    'cookie-text': 'Web sitemizde size en iyi deneyimi sunmak için çerezler kullanıyoruz. Devam ederek çerez kullanımını kabul etmiş olursunuz.',
    'cookie-btn': 'Kabul Et',

    /* Üyelik */
    'bedrooms': 'yatak odası',
    'bathrooms': 'banyo',
    'area': 'm²',
    'month': 'Ay',

    /* Emlak başlıkları (24 adet) */
    'property-1-title': 'Boğaz Manzaralı Villa',
    'property-2-title': 'Merkez Ofis Dairesi',
    'property-3-title': 'Sahil Kenarında Yazlık',
    'property-4-title': 'Modern Rezidans Dairesi',
    'property-5-title': 'Müstakil Bahçeli Ev',
    'property-6-title': 'Prestij Ofis Alanı',
    'property-7-title': 'Tarihi Taş Ev',
    'property-8-title': 'Yalı Dairesi',
    'property-9-title': 'Tripleks Çatı Dairesi',
    'property-10-title': 'Doğa İçinde Villa',
    'property-11-title': 'Kompakt Ofis',
    'property-12-title': 'Deniz Manzaralı Apartman',
    'property-13-title': 'Köşk Konutu',
    'property-14-title': 'Loft Daire',
    'property-15-title': 'Residence Penthouse',
    'property-16-title': 'Havuzlu Villa',
    'property-17-title': 'Tarihi Konak',
    'property-18-title': 'Resort Apartman',
    'property-19-title': 'Ferah Aile Dairesi',
    'property-20-title': 'Plaza Katı Ofis',
    'property-21-title': 'Lüks Havuzlu Villa',
    'property-22-title': 'Stüdyo Daire',
    'property-23-title': 'Gölet Manzaralı Daire',
    'property-24-title': 'Cadde Üzeri Dükkan',

    /* Emlak kartı badge'leri için */
    'badge-sale': 'Satılık',
    'badge-rent': 'Kiralık',
    'badge-featured': 'Öne Çıkan',

    /* Agent roles */
    'agent-1-name': 'Ahmet Yılmaz',
    'agent-1-title': 'Kurucu & CEO',
    'agent-1-desc': '15 yıllık gayrimenkul deneyimi. Boğaziçi Üniversitesi İşletme mezunu. 3000+ satış.',
    'agent-2-name': 'Zeynep Kaya',
    'agent-2-title': 'Satış Müdürü',
    'agent-2-desc': '10+ yıl lüks konut satışı deneyimi. İTÜ İnşaat Mühendisliği mezunu. 500+ premium satış.',
    'agent-3-name': 'Mehmet Demir',
    'agent-3-title': 'Kiralama Uzmanı',
    'agent-3-desc': '8 yıl kurumsal kiralama deneyimi. Marmara Üniversitesi İktisat mezunu.',
    'agent-4-name': 'Elif Arslan',
    'agent-4-title': 'Değerleme Uzmanı',
    'agent-4-desc': '12 yıl gayrimenkul değerleme deneyimi. SPK lisanslı değerleme uzmanı.',

    /* Testimonials */
    'testimonial-1-text': 'Efesoft Emlak sayesinde hayalimdeki villaya kavuştum. Profesyonel yaklaşımları ve ilgileri gerçekten takdire değer. Kesinlikle tavsiye ediyorum.',
    'testimonial-1-name': 'Ali Öztürk',
    'testimonial-1-role': 'Villa Alıcısı',
    'testimonial-2-text': 'Yatırımlık gayrimenkul ararken tanıştık Efesoft Emlak ile. Bize özel hazırlanan portföy ile doğru yatırımı yapmamızı sağladılar.',
    'testimonial-2-name': 'Ayşe Yıldız',
    'testimonial-2-role': 'Yatırımcı',
    'testimonial-3-text': 'Ofis taşınma sürecimizde Efesoft Emlak mükemmel hizmet verdi. İhtiyaçlarımıza uygun ofisi bulmak hiç bu kadar kolay olmamıştı.',
    'testimonial-3-name': 'Can Özkan',
    'testimonial-3-role': 'Kurumsal Müşteri',

    'sqm': 'm²',
    'bed': 'Yatak Odası',
    'bath': 'Banyo',

    'branch-1-name': 'Levent Merkez Ofis',
    'branch-2-name': 'Kadıköy Şubesi',
    'branch-3-name': 'Çeşme Ofisi',

    'form-interest-options': {
      '': 'Seçiniz',
      'sale': 'Satılık Daire',
      'sale-villa': 'Satılık Villa',
      'sale-office': 'Satılık Ofis',
      'rent': 'Kiralık Daire',
      'rent-villa': 'Kiralık Villa',
      'rent-office': 'Kiralık Ofis',
      'investment': 'Yatırımlık Gayrimenkul',
      'other': 'Diğer'
    }
  },
  en: {
    /* Navbar */
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-listings': 'Listings',
    'nav-contact': 'Contact',

    /* Hero */
    'hero-title': 'Find Your',
    'hero-title-span': 'Dream Home',
    'hero-desc': 'Premium real estate consultancy for luxury residences, villas and investment properties',
    'search-placeholder-type': 'All Types',
    'search-placeholder-location': 'All Locations',
    'search-min-price': 'Min. Price (TL)',
    'search-max-price': 'Max. Price (TL)',
    'search-btn': 'Search',

    /* Filters */
    'filter-all': 'All',
    'filter-sale': 'For Sale',
    'filter-rent': 'For Rent',

    /* Featured section */
    'featured-title': 'Featured Properties',
    'featured-subtitle': 'Discover our exclusive selection of premium properties',
    'featured-view-all': 'View All',
    'featured-cta': 'View Details',

    /* Sale section */
    'sale-title': 'Properties for Sale',
    'sale-subtitle': 'Find your dream home among our exclusive listings',
    'sale-cta': 'View Details',

    /* Rent section */
    'rent-title': 'Properties for Rent',
    'rent-subtitle': 'Premium rental options for every lifestyle',
    'rent-cta': 'View Details',

    /* Agents section */
    'agents-title': 'Our Expert Agents',
    'agents-subtitle': 'Meet our professional real estate consultants',

    /* Stats */
    'stat-projects': 'Properties Listed',
    'stat-agents': 'Expert Agents',
    'stat-clients': 'Happy Clients',
    'stat-years': 'Years of Experience',

    /* Testimonials section */
    'testimonials-title': 'What Our Clients Say',
    'testimonials-subtitle': 'Real stories from our happy customers',

    /* CTA section */
    'cta-title': 'Find Your Dream Property',
    'cta-subtitle': 'Contact us today and let our expert team help you find the perfect property.',
    'cta-btn': 'Contact Us',

    /* About page */
    'about-hero-title': 'About Us',
    'about-hero-subtitle': 'Learn more about our journey and values',
    'about-story-title': 'Our Story',
    'about-story-p1': 'Founded in 2014, Efesoft Real Estate has grown from a small local agency to one of the region\'s most respected real estate companies. Our journey began with a simple mission: to provide transparent, professional, and results-driven real estate services.',
    'about-story-p2': 'Over the years, we have successfully closed thousands of transactions, helping families find their dream homes, investors make profitable investments, and businesses secure the perfect commercial spaces.',
    'about-mission-title': 'Our Mission',
    'about-mission-text': 'To provide the highest quality real estate services with transparency, integrity and professionalism.',
    'about-vision-title': 'Our Vision',
    'about-vision-text': 'To be the most trusted and innovative real estate brand in the region.',
    'about-why-title': 'Why Choose Us',
    'about-why-subtitle': 'What sets us apart from other agencies',
    'about-team-title': 'Our Team',
    'about-team-subtitle': 'Meet our experienced real estate professionals',

    /* Services page */
    'services-hero-title': 'Our Services',
    'services-hero-subtitle': 'Comprehensive real estate solutions for every need',
    'services-section-title': 'All Real Estate Services',
    'services-section-subtitle': 'Professional solutions tailored to your needs',
    'services-cta-title': 'Get Detailed Information',
    'services-cta-text': 'Contact us for detailed information about our services and personalized solutions.',
    'services-cta-btn': 'Contact Now',

    /* Contact page */
    'contact-hero-title': 'Contact Us',
    'contact-hero-subtitle': 'We are here to help you',
    'contact-form-title': 'Send Us a Message',
    'contact-form-name': 'Full Name',
    'contact-form-email': 'Email Address',
    'contact-form-phone': 'Phone Number',
    'contact-form-interest': 'Property Interest',
    'contact-form-message': 'Your Message',
    'contact-form-submit': 'Send Message',
    'contact-form-success': 'Your message has been sent successfully. We will contact you as soon as possible.',
    'contact-form-error': 'Please fill in all required fields correctly.',
    'contact-info-title': 'Contact Information',
    'contact-address-title': 'Our Address',
    'contact-address': 'Büyükdere Street No:123, Levent, Istanbul 34394',
    'contact-phone-title': 'Phone',
    'contact-phone': '+90 (212) 345 67 89',
    'contact-email-title': 'Email',
    'contact-email': 'info@efesoftemlak.com',
    'contact-hours-title': 'Working Hours',
    'contact-hours-weekdays': 'Weekdays: 09:00 - 19:00',
    'contact-hours-saturday': 'Saturday: 10:00 - 17:00',
    'contact-hours-sunday': 'Sunday: Closed',
    'contact-branches-title': 'Our Offices',

    /* Footer */
    'footer-about': 'Turkey\'s leading real estate agency. We offer the best properties with our expert team.',
    'footer-quick': 'Quick Links',
    'footer-services': 'Our Services',
    'footer-contact': 'Contact',
    'footer-listing-types': 'Listing Types',
    'footer-copyright': '© 2024 Efesoftlab. All rights reserved.',
    'footer-newsletter-title': 'Newsletter',
    'footer-newsletter-text': 'Subscribe to receive new listings and opportunities.',
    'footer-newsletter-btn': 'Subscribe',
    'footer-newsletter-placeholder': 'Your email address',

    /* Page titles */
    'page-title-home': 'Efesoft Real Estate | Premium Properties',
    'page-title-about': 'About Us | Efesoft Real Estate',
    'page-title-services': 'Our Services | Efesoft Real Estate',
    'page-title-contact': 'Contact | Efesoft Real Estate',

    /* Property data */
    'property-1-title': 'Bosphorus View Villa',
    'property-2-title': 'Central Office Apartment',
    'property-3-title': 'Summer Beach House',
    'property-4-title': 'Luxury Villa with Pool',
    'property-5-title': 'Modern Residence Apartment',
    'property-6-title': 'Detached Garden House',
    'property-7-title': 'Prestigious Office Space',
    'property-8-title': 'Historical Stone House',
    'property-9-title': 'Mansion Apartment',
    'property-10-title': 'Triplex Penthouse',
    'property-11-title': 'Nature Villa',
    'property-12-title': 'Compact Office',
    'property-13-title': 'Mansion Residence',
    'property-14-title': 'Loft Apartment',
    'property-15-title': 'Residence Penthouse',
    'property-16-title': 'Villa with Pool',
    'property-17-title': 'Historical Mansion',
    'property-18-title': 'Resort Apartment',
    'property-19-title': 'Spacious Family Apartment',
    'property-20-title': 'Plaza Floor Office',
    'property-21-title': 'Luxury Villa with Pool',
    'property-22-title': 'Studio Apartment',
    'property-23-title': 'Pond View Apartment',
    'property-24-title': 'Streetfront Shop',

    /* Property badges */
    'badge-sale': 'For Sale',
    'badge-rent': 'For Rent',
    'badge-featured': 'Featured',

    /* Agent roles */
    'agent-1-name': 'Ahmet Yılmaz',
    'agent-1-title': 'Founder & CEO',
    'agent-1-desc': '15 years of real estate experience. Boğaziçi University Business graduate. 3000+ sales.',
    'agent-2-name': 'Zeynep Kaya',
    'agent-2-title': 'Sales Manager',
    'agent-2-desc': '10+ years of luxury residence sales experience. ITU Civil Engineering graduate. 500+ premium sales.',
    'agent-3-name': 'Mehmet Demir',
    'agent-3-title': 'Rental Specialist',
    'agent-3-desc': '8 years of corporate rental experience. Marmara University Economics graduate.',
    'agent-4-name': 'Elif Arslan',
    'agent-4-title': 'Valuation Expert',
    'agent-4-desc': '12 years of real estate valuation experience. CMB licensed valuation expert.',

    /* Testimonials */
    'testimonial-1-text': 'Thanks to Efesoft Real Estate, I found my dream villa. Their professional approach and attention are truly commendable. Highly recommended.',
    'testimonial-1-name': 'Ali Öztürk',
    'testimonial-1-role': 'Villa Buyer',
    'testimonial-2-text': 'We met Efesoft Real Estate while looking for investment properties. They helped us make the right investment with a customized portfolio.',
    'testimonial-2-name': 'Ayşe Yıldız',
    'testimonial-2-role': 'Investor',
    'testimonial-3-text': 'Efesoft Real Estate provided excellent service during our office relocation. Finding the right office for our needs has never been this easy.',
    'testimonial-3-name': 'Can Özkan',
    'testimonial-3-role': 'Corporate Client',

    'no-results-title': 'No Properties Found',
    'no-results-text': 'No properties match your search criteria. Please try different criteria.',

    'toast-search': 'Filtering properties...',
    'toast-contact-success': 'Your message has been sent successfully! We will get back to you as soon as possible.',
    'toast-contact-error': 'Please fill in all required fields.',
    'toast-language': 'Language changed to English',
    'toast-cookie': 'Your cookie preference has been saved.',
    'toast-lightbox': 'Image is being viewed',

    'cookie-text': 'We use cookies to provide you with the best experience on our website. By continuing, you accept our cookie policy.',
    'cookie-btn': 'Accept',

    'sqm': 'sqm',
    'bed': 'Bedroom',
    'bath': 'Bathroom',

    'branch-1-name': 'Levent Head Office',
    'branch-2-name': 'Kadıköy Branch',
    'branch-3-name': 'Çeşme Office',

    'form-interest-options': {
      '': 'Select',
      'sale': 'Apartment for Sale',
      'sale-villa': 'Villa for Sale',
      'sale-office': 'Office for Sale',
      'rent': 'Apartment for Rent',
      'rent-villa': 'Villa for Rent',
      'rent-office': 'Office for Rent',
      'investment': 'Investment Property',
      'other': 'Other'
    }
  }
};

/* ===== DOM HAZIR ===== */
document.addEventListener('DOMContentLoaded', function () {

  /* ===== ELEMANLAR ===== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const themeToggle = document.querySelector('.nav-theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  const langToggle = document.querySelector('.lang-toggle');
  const whatsappBtn = document.querySelector('.whatsapp-float');
  const contactForm = document.getElementById('contactForm');
  const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  const preloader = document.getElementById('preloader');
  const backToTop = document.getElementById('backToTop');
  const scrollProgress = document.getElementById('scrollProgress');
  const toastContainer = document.getElementById('toastContainer');
  const cookieConsent = document.getElementById('cookieConsent');
  const cookieBtn = document.getElementById('cookieAccept');

  /* ===== SAYFA YÜKLEYİCİ ===== */
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2000);
    document.body.style.overflow = 'hidden';
  }

  /* ===== DİL SİSTEMİ ===== */
  let currentLang = localStorage.getItem('efsLang') || 'tr';

  function updateLangDisplay() {
    if (langToggle) {
      langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    }
  }

  function t(key) {
    const keys = key.split('.');
    let val = translations[currentLang];
    for (let k of keys) {
      if (val && val[k] !== undefined) {
        val = val[k];
      } else {
        /* Fallback: TR */
        let fallback = translations['tr'];
        for (let k2 of keys) {
          if (fallback && fallback[k2] !== undefined) {
            fallback = fallback[k2];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return val;
  }

  function applyLanguage() {
    /* data-i18n ile tüm metinleri güncelle */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation !== undefined && translation !== key) {
        /* Eğer HTML içeriyorsa innerHTML, değilse textContent */
        if (translation.includes('<')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    /* data-i18n-placeholder ile placeholderları güncelle */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation !== undefined && translation !== key) {
        el.placeholder = translation;
      }
    });

    /* data-i18n-aria ile aria-label'leri güncelle */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      const translation = t(key);
      if (translation !== undefined && translation !== key) {
        el.setAttribute('aria-label', translation);
      }
    });

    /* data-i18n-value ile select option değerlerini güncelle */
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-value');
      const translation = t(key);
      if (translation !== undefined && translation !== key) {
        el.textContent = translation;
      }
    });

    /* data-i18n-option ile select option metinlerini güncelle */
    document.querySelectorAll('[data-i18n-option]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-option');
      const translation = t(key);
      if (translation !== undefined && translation !== key) {
        el.textContent = translation;
      }
    });

    /* Select optionları için özel işlem */
    const contactInterest = document.getElementById('contactInterest');
    if (contactInterest) {
      const options = translations[currentLang]['form-interest-options'] || translations['tr']['form-interest-options'];
      Array.from(contactInterest.options).forEach(function (opt) {
        if (options[opt.value] !== undefined) {
          opt.textContent = options[opt.value];
        }
      });
    }

    /* RTL desteği yok, TR/EN için gerekli değil */

    /* Sayfa başlığını güncelle - lang attribute */
    document.documentElement.lang = currentLang === 'tr' ? 'tr' : 'en';
  }

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('efsLang', lang);
    applyLanguage();
    updateLangDisplay();

    /* Dil değiştirme bildirimi */
    showToast(t('toast-language'), 'success');
  }

  if (langToggle) {
    updateLangDisplay();
    langToggle.addEventListener('click', function () {
      const newLang = currentLang === 'tr' ? 'en' : 'tr';
      switchLanguage(newLang);
    });
  }

  /* İlk dil uygulaması */
  applyLanguage();

  /* ===== TEMA SİSTEMİ ===== */
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
    localStorage.setItem('efsTheme', theme);
  }

  if (themeToggle) {
    const savedTheme = localStorage.getItem('efsTheme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ===== MOBİL MENÜ ===== */
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }

  /* Menü bağlantısına tıklandığında kapat */
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== YAPIŞKAN NAVBAR ===== */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ===== DÜZGÜN KAYDIRMA ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ===== KAYDIRMA İLERLEME ÇUBUĞU ===== */
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = progress + '%';

      /* Yukarı çık butonu */
      if (backToTop) {
        if (scrollTop > 400) {
          backToTop.classList.add('visible');
          /* Progress halkası */
          const circle = backToTop.querySelector('circle');
          if (circle) {
            const dashOffset = 157 - (157 * progress / 100);
            circle.style.strokeDashoffset = dashOffset;
          }
        } else {
          backToTop.classList.remove('visible');
        }
      }
    });
  }

  /* ===== YUKARI ÇIK ===== */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== WHATSAPP BUTONU ===== */
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const phone = '905551234567';
      const message = encodeURIComponent(
        currentLang === 'tr'
          ? 'Merhaba, emlak ilanlarınız hakkında bilgi almak istiyorum.'
          : 'Hello, I would like to get information about your property listings.'
      );
      window.open('https://wa.me/' + phone + '?text=' + message, '_blank');
    });
  }

  /* ===== AKTİF NAV LİNK ===== */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });
    }
  }
  setActiveNavLink();

  /* ===== TÜRKÇE KARAKTER NORMALİZASYON ===== */
  function normalizeText(text) {
    var trMap = {
      'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c',
      'İ': 'i', 'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'Ö': 'o', 'Ç': 'c'
    };
    return text.replace(/[ığüşöçİĞÜŞÖÇ]/g, function (ch) { return trMap[ch] || ch; }).toLowerCase();
  }

  /* ===== ORTAK FİLTRELEME FONKSİYONU ===== */
  var activeFilterType = 'all';
  var searchCriteria = { type: '', location: '', minPrice: '', maxPrice: '' };
  const filterButtons = document.querySelectorAll('.filter-btn');
  const propertyCards = document.querySelectorAll('.property-card');
  var noResultsEl = document.getElementById('noResults');

  function applyFilters() {
    var visibleCount = 0;

    propertyCards.forEach(function (card) {
      var show = true;

      /* Filtre butonu kontrolü (tür) */
      if (activeFilterType !== 'all') {
        var cardType = card.getAttribute('data-type');
        if (cardType !== activeFilterType) show = false;
      }

      /* Arama formu kontrolleri */
      if (show && searchCriteria.type) {
        var cardType = card.getAttribute('data-type');
        if (cardType !== searchCriteria.type) show = false;
      }

      if (show && searchCriteria.location) {
        var cardLocation = normalizeText(card.getAttribute('data-location') || '');
        var searchLocation = normalizeText(searchCriteria.location);
        if (cardLocation !== searchLocation) show = false;
      }

      if (show && searchCriteria.minPrice) {
        var priceStr = (card.getAttribute('data-price') || '0').replace(/\./g, '').replace(/\D/g, '');
        var price = parseInt(priceStr) || 0;
        if (price < parseInt(searchCriteria.minPrice)) show = false;
      }

      if (show && searchCriteria.maxPrice) {
        var priceStr = (card.getAttribute('data-price') || '0').replace(/\./g, '').replace(/\D/g, '');
        var price = parseInt(priceStr) || 0;
        if (price > parseInt(searchCriteria.maxPrice)) show = false;
      }

      card.style.display = show ? 'block' : 'none';
      if (show) {
        card.style.animation = 'fadeInUp 0.5s ease forwards';
        visibleCount++;
      }
    });

    /* Sonuç bulunamadı mesajını göster/gizle */
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  /* ===== FİLTRE BUTONLARI ===== */
  if (filterButtons.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeFilterType = this.getAttribute('data-filter');

        /* Aktif buton stilini güncelle */
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        applyFilters();
      });
    });
  }

  /* ===== ARAMA FORMU ===== */
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();

      searchCriteria = {
        type: document.getElementById('searchType').value,
        location: document.getElementById('searchLocation').value,
        minPrice: document.getElementById('searchMinPrice').value,
        maxPrice: document.getElementById('searchMaxPrice').value
      };

      applyFilters();
      showToast(t('toast-search'), 'success');
    });
  }

  /* ===== SAYAÇ ANİMASYONU ===== */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = Math.max(1, Math.floor(target / 60));
      let current = 0;

      function update() {
        current += step;
        if (current >= target) {
          counter.textContent = target.toLocaleString() + '+';
          return;
        }
        counter.textContent = current.toLocaleString() + '+';
        requestAnimationFrame(update);
      }

      update();
    });
  }

  /* ===== KESİŞİM GÖZLEMCİSİ (Scroll Animasyonları) ===== */
  function setupScrollAnimations() {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          /* İstatistik bölümü göründüğünde sayaçları çalıştır */
          if (entry.target.classList.contains('stats-section')) {
            animateCounters();
          }
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }
  setupScrollAnimations();

  /* ===== YORUM KARUSELİ ===== */
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const arrows = document.querySelectorAll('.carousel-arrow');

  if (testimonialTrack && testimonialSlides.length > 0) {
    let currentSlide = 0;
    let autoSlideInterval;

    function goToSlide(index) {
      if (index < 0) index = testimonialSlides.length - 1;
      if (index >= testimonialSlides.length) index = 0;
      currentSlide = index;
      testimonialTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    /* Dot tıklama */
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () { goToSlide(index); });
    });

    /* Ok tıklama */
    if (arrows.length === 2) {
      arrows[0].addEventListener('click', prevSlide);
      arrows[1].addEventListener('click', nextSlide);
    }

    /* Otomatik oynatma */
    function startAutoPlay() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      clearInterval(autoSlideInterval);
    }

    startAutoPlay();

    /* Fare ile üzerine gelince durdur */
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);
    }

    /* İlk slide'ı aktif yap */
    goToSlide(0);
  }

  /* ===== İLETİŞİM FORMU ===== */
  if (contactForm) {
    const formGroups = contactForm.querySelectorAll('.form-group');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      formGroups.forEach(function (group) {
        const input = group.querySelector('input, select, textarea');
        const errorEl = group.querySelector('.error-message');

        group.classList.remove('error');

        if (input && input.hasAttribute('required') && !input.value.trim()) {
          group.classList.add('error');
          if (errorEl) {
            errorEl.textContent = currentLang === 'tr' ? 'Bu alan zorunludur.' : 'This field is required.';
          }
          isValid = false;
        }

        if (input && input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            group.classList.add('error');
            if (errorEl) {
              errorEl.textContent = currentLang === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email address.';
            }
            isValid = false;
          }
        }

        if (input && input.id === 'contactPhone' && input.value.trim()) {
          const phoneRegex = /^[0-9\s\+\-\(\)]{7,}$/;
          if (!phoneRegex.test(input.value.trim())) {
            group.classList.add('error');
            if (errorEl) {
              errorEl.textContent = currentLang === 'tr' ? 'Geçerli bir telefon numarası giriniz.' : 'Please enter a valid phone number.';
            }
            isValid = false;
          }
        }
      });

      if (isValid) {
        showToast(t('toast-contact-success'), 'success');
        contactForm.reset();
      } else {
        showToast(t('toast-contact-error'), 'error');
      }
    });

    /* Hata mesajlarını giriş sırasında kaldır */
    contactForm.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        const group = this.closest('.form-group');
        if (group) group.classList.remove('error');
      });
    });
  }

  /* ===== BİLDİRİM (TOAST) ===== */
  function showToast(message, type) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast' + (type === 'error' ? ' error' : type === 'success' ? ' success' : '');
    const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + message;
    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.style.animation = 'toastOut 0.4s ease forwards';
      setTimeout(function () { toast.remove(); }, 500);
    }, 3000);
  }

  /* ===== ÇEREZ İZNİ ===== */
  if (cookieConsent && cookieBtn) {
    if (!localStorage.getItem('efsCookie')) {
      setTimeout(function () { cookieConsent.classList.add('show'); }, 1500);
    }

    cookieBtn.addEventListener('click', function () {
      localStorage.setItem('efsCookie', 'accepted');
      cookieConsent.classList.remove('show');
      showToast(t('toast-cookie'), 'success');
    });
  }

  /* ===== RESİM GÖRÜNTÜLEYİCİ (LIGHTBOX) ===== */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-lightbox');

    /* Tüm emlak kartlarındaki resimlere tıklama ekle */
    propertyCards.forEach(function (card) {
      const img = card.querySelector('.card-image img');
      if (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function (e) {
          e.stopPropagation();
          lightboxImg.src = this.src;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ===== YAZI ANİMASYONU (HERO) ===== */
  const typingElement = document.getElementById('typingText');
  if (typingElement) {
    const phrases = currentLang === 'tr'
      ? ['Lüks Konutlar', 'Deniz Manzaralı Villalar', 'Yatırımlık Ofisler', 'Size Özel Çözümler']
      : ['Luxury Residences', 'Sea View Villas', 'Investment Offices', 'Custom Solutions'];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      setTimeout(typeEffect, typeSpeed);
    }

    /* Dili değiştirince cümleleri de değiştir - basit bir yaklaşım */
    setTimeout(typeEffect, 1000);
  }

  /* ===== PARALLAX ETKİSİ ===== */
  window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrolled = window.pageYOffset;
      hero.style.backgroundPositionY = (scrolled * 0.3) + 'px';
    }
  });

  /* ===== FLOATING LABEL ===== */
  document.querySelectorAll('.form-group.floating input, .form-group.floating textarea').forEach(function (input) {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      if (!this.value) this.parentElement.classList.remove('focused');
    });
  });

  /* ===== AKTİF NAV LİNK - Scroll Takibi ===== */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && navLinks) {
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + current) {
          link.classList.add('active');
        }
      });
    });
  }

  /* ===== Mobil Dokunmatik Kaydırma Desteği ===== */
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
      var carousels = document.querySelectorAll('.carousel-next');
      carousels.forEach(function(btn) {
        if (isElementInViewport(btn.closest('.testimonial-carousel, .property-carousel'))) {
          if (diff > 0) btn.click();
          else {
            var prevBtn = btn.closest('.testimonial-carousel, .property-carousel').querySelector('.carousel-arrow:first-of-type, .carousel-prev');
            if (prevBtn) prevBtn.click();
          }
        }
      });
    }
  }
  function isElementInViewport(el) {
    if (!el) return false;
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

});
