/* ============================================================
   EFES HUKUK BÜROSU - PREMIUM TEMA JAVASCRIPT
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     ÇEVİRİ SÖZLÜĞÜ (Translation Dictionary)
     ========================================================== */
  const translations = {
    tr: {
      /* Navigasyon */
      'nav-home': 'Ana Sayfa',
      'nav-about': 'Hakkımızda',
      'nav-services': 'Uzmanlıklar',
      'nav-attorneys': 'Avukatlar',
      'nav-contact': 'İletişim',

      /* Hero */
      'hero-title': 'Adaletin Güvencesi',
      'hero-subtitle': '45 yıllık tecrübemizle, hukuki sorunlarınızda yanınızdayız.',
      'hero-btn-consult': 'Danışmanlık Al',
      'hero-btn-services': 'Uzmanlıklarımız',
      'hero-typing': 'Adaletin Güvencesi',

      /* Hakkımızda Önizleme */
      'about-title': 'Kurumsal Hukuk Geleneği',
      'about-desc': 'Efes Hukuk Bürosu, 1978 yılından bu yana Türk yargı sisteminde güvenilir bir çınar olarak hizmet vermektedir. Kurulduğu günden bugüne, adalete olan inancımız ve mesleki etik değerlerimizden ödün vermeden çalışıyoruz.',
      'about-feature-1': '45+ yıllık deneyim ve güven',
      'about-feature-2': '50+ uzman avukat kadrosu',
      'about-feature-3': '5000\'den fazla başarılı dava',
      'about-feature-4': '6 farklı hukuk dalında uzmanlık',
      'about-read-more': 'Devamını Oku',

      /* Uzmanlık Alanları */
      'practice-title': 'Uzmanlık Alanlarımız',
      'practice-subtitle': 'Size en yakın hukuk dalında, deneyimli avukatlarımızla profesyonel destek sağlıyoruz.',
      'practice-detail': 'Detaylı Bilgi',

      /* Ceza Hukuku */
      'area-criminal-title': 'Ceza Hukuku',
      'area-criminal-desc': 'Ceza davalarında savunma ve müdafilik, ceza soruşturmaları, icra ceza mahkemeleri ve istinaf süreçlerinde uzman kadro.',
      /* Aile Hukuku */
      'area-family-title': 'Aile Hukuku',
      'area-family-desc': 'Boşanma, velayet, nafaka, mal rejimi, soybağı kurulması ve aile içi uyuşmazlıklarda arabuluculuk hizmetleri.',
      /* Ticaret Hukuku */
      'area-commercial-title': 'Ticaret Hukuku',
      'area-commercial-desc': 'Şirket kuruluşu, birleşme ve devralma, ticari sözleşmeler, iflas ve konkordato, ticari alacak davaları.',
      /* Gayrimenkul Hukuku */
      'area-property-title': 'Gayrimenkul Hukuku',
      'area-property-desc': 'Tapu iptali ve tescil, kamulaştırma, kira uyuşmazlıkları, kat mülkiyeti, imar hukuku ve inşaat sözleşmeleri.',
      /* İş Hukuku */
      'area-labor-title': 'İş Hukuku',
      'area-labor-desc': 'İşe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı, toplu iş sözleşmeleri ve sendikal haklar.',
      /* Fikri Mülkiyet */
      'area-ip-title': 'Fikri Mülkiyet Hukuku',
      'area-ip-desc': 'Patent, marka, endüstriyel tasarım tescili, fikir ve sanat eserleri, haksız rekabet ve lisans sözleşmeleri.',

      /* İstatistikler */
      'stats-title': 'Rakamlarla Biz',
      'stats-subtitle': '45 yılı aşkın süredir adalete hizmet ediyoruz.',
      'stats-cases': 'Başarılı Dava',
      'stats-lawyers': 'Uzman Avukat',
      'stats-rate': 'Başarı Oranı',
      'stats-years': 'Yıllık Deneyim',

      /* Avukatlar */
      'attorneys-title': 'Ekibimiz',
      'attorneys-subtitle': 'Her biri alanında uzman avukatlarımızla hukuki sorunlarınıza çözüm üretiyoruz.',

      /* Avukat 1 */
      'attorney-1-name': 'Av. Ahmet Yılmaz',
      'attorney-1-title': 'Kurucu Ortak',
      'attorney-1-desc': 'Ceza Hukuku uzmanı. İstanbul Üniversitesi Hukuk Fakültesi mezunu, 30 yıllık deneyim.',
      'attorney-1-spec': 'Ceza Hukuku',

      /* Avukat 2 */
      'attorney-2-name': 'Av. Ayşe Kaya',
      'attorney-2-title': 'Ortak Avukat',
      'attorney-2-desc': 'Aile Hukuku uzmanı. Ankara Üniversitesi Hukuk Fakültesi mezunu, 25 yıllık deneyim.',
      'attorney-2-spec': 'Aile Hukuku',

      /* Avukat 3 */
      'attorney-3-name': 'Av. Mehmet Demir',
      'attorney-3-title': 'Kıdemli Avukat',
      'attorney-3-desc': 'Ticaret Hukuku uzmanı. Marmara Üniversitesi Hukuk Fakültesi mezunu, 20 yıllık deneyim.',
      'attorney-3-spec': 'Ticaret Hukuku',

      /* Avukat 4 */
      'attorney-4-name': 'Av. Zeynep Şahin',
      'attorney-4-title': 'Avukat',
      'attorney-4-desc': 'Gayrimenkul Hukuku uzmanı. İstanbul Üniversitesi Hukuk Fakültesi mezunu, 15 yıllık deneyim.',
      'attorney-4-spec': 'Gayrimenkul Hukuku',

      /* Avukat 5 */
      'attorney-5-name': 'Av. Ali Öztürk',
      'attorney-5-title': 'Avukat',
      'attorney-5-desc': 'İş Hukuku uzmanı. Koç Üniversitesi Hukuk Fakültesi mezunu, 12 yıllık deneyim.',
      'attorney-5-spec': 'İş Hukuku',

      /* Başarı Hikayeleri */
      'success-title': 'Başarı Hikayelerimiz',
      'success-subtitle': 'Kazandığımız davalarla adalete olan inancımızı pekiştiriyoruz.',

      'story-1-badge': 'Ticaret Hukuku',
      'story-1-title': 'Tazminat Davası',
      'story-1-desc': 'Sanayi devi şirketimize 50 milyon TL\'lik tazminat davasında %100 başarı sağlandı.',
      'story-1-result': '%100 Başarı & Tazminat',

      'story-2-badge': 'Ticaret Hukuku',
      'story-2-title': 'Uluslararası Tahkim',
      'story-2-desc': 'Uluslararası tahkim sürecinde müvekkilimizin hakları başarıyla korundu.',
      'story-2-result': 'Başarılı Tahkim Süreci',

      'story-3-badge': 'Aile Hukuku',
      'story-3-title': 'Velayet Davası',
      'story-3-desc': 'Aile hukuku davasında çocuk velayeti ve nafaka konusunda olumlu sonuç.',
      'story-3-result': 'Velayet & Nafaka Kazanımı',

      /* Müvekkil Yorumları */
      'testimonials-title': 'Müvekkillerimiz Ne Diyor?',
      'testimonials-subtitle': 'Memnuniyetiniz bizim en büyük referansımızdır.',

      /* CTA */
      'cta-title': 'Hukuki Destek İçin Bize Ulaşın',
      'cta-desc': 'Profesyonel ekibimiz, hukuki sorunlarınıza en kısa sürede çözüm bulmak için hazır.',
      'cta-btn-appointment': 'Randevu Al',

      /* FAQ */
      'faq-title': 'Sıkça Sorulan Sorular',
      'faq-subtitle': 'Hukuki süreçler hakkında merak ettikleriniz.',

      /* Footer */
      'footer-desc': '1978 yılından bu yana İstanbul merkezli olarak hukukun her alanında profesyonel danışmanlık ve dava takibi hizmeti sunmaktayız.',
      'footer-practices': 'Uzmanlıklar',
      'footer-links': 'Hızlı Linkler',
      'footer-contact': 'İletişim',
      'footer-copyright': '© 2024 Efesoftlab. Tüm hakları saklıdır.',
      'footer-credit': 'Satış: Efesoftlab',

      /* Sayfa Banner */
      'page-banner-about-title': 'Hakkımızda',
      'page-banner-about-desc': '45 yılı aşkın tecrübe, güven ve adalet anlayışı',
      'page-banner-services-title': 'Uzmanlık Alanlarımız',
      'page-banner-services-desc': 'Hukukun her alanında profesyonel çözüm ortağınız',
      'page-banner-contact-title': 'İletişim',
      'page-banner-contact-desc': 'Hukuki sorunlarınız için bize ulaşın',

      /* Hakkımızda Sayfası */
      'history-title': 'Tarihçemiz',
      'history-desc-1': 'Efes Hukuk Bürosu, 1978 yılında Av. Ahmet Yılmaz tarafından İstanbul Levent\'te kuruldu. Küçük bir avukatlık ofisi olarak başlayan yolculuğumuz, bugün 50\'den fazla avukatın görev yaptığı köklü bir hukuk bürosuna dönüştü.',
      'history-desc-2': 'Kurulduğumuz günden bu yana, etik değerlerimizden ve mesleki ilkelerimizden ödün vermeden, müvekkillerimize en kaliteli hukuki hizmeti sunmayı kendimize görev bildik.',
      'mvv-title': 'Misyon, Vizyon & Değerler',
      'mvv-subtitle': 'Hukuk anlayışımızın temel taşları.',
      'mission-title': 'Misyonumuz',
      'mission-desc': 'Müvekkillerimizin hukuki sorunlarına yenilikçi, etkili ve sürdürülebilir çözümler üreterek adalete erişimlerini kolaylaştırmak.',
      'vision-title': 'Vizyonumuz',
      'vision-desc': 'Türkiye\'nin en güvenilir ve saygın hukuk bürolarından biri olarak, uluslararası standartlarda hukuki hizmet sunmak.',
      'values-title': 'Değerlerimiz',
      'values-desc': 'Dürüstlük ve şeffaflık, mesleki etik kurallara bağlılık, müvekkil odaklı hizmet anlayışı, sürekli gelişim ve yenilikçilik.',
      'team-title': 'Avukat Kadromuz',
      'team-subtitle': 'Her biri alanında uzman, deneyimli avukatlarımızla hizmetinizdeyiz.',

      /* Hizmetler Sayfası */
      'services-page-title': 'Hukuki Danışmanlık Hizmetlerimiz',
      'services-page-subtitle': 'Her biri alanında uzman avukatlarımızla size özel hukuki çözümler sunuyoruz.',
      'process-title': 'Hukuki Danışmanlık Sürecimiz',
      'process-subtitle': 'Müvekkillerimize şeffaf ve sistematik bir hukuki süreç sunuyoruz.',
      'process-1-title': 'Ön Görüşme',
      'process-1-desc': 'Ücretsiz ön görüşme ile hukuki durumunuzu dinliyor ve değerlendiriyoruz.',
      'process-2-title': 'Detaylı Analiz',
      'process-2-desc': 'Dava dosyanızı ve belgelerinizi detaylıca inceleyerek hukuki strateji belirliyoruz.',
      'process-3-title': 'Sözleşme & Vekalet',
      'process-3-desc': 'Şeffaf ücretlendirme ile avukatlık sözleşmesi imzalayarak süreci başlatıyoruz.',
      'process-4-title': 'Dava & Takip',
      'process-4-desc': 'Dava sürecini düzenli olarak raporluyor, müvekkillerimizi her adımda bilgilendiriyoruz.',
      'fee-title': 'Ücretlendirme Bilgisi',
      'fee-desc': 'Hukuki hizmet ücretlerimiz, Avukatlık Asgari Ücret Tarifesi\'ne uygun olarak belirlenmektedir.',
      'fee-1-title': 'Sabit Ücret',
      'fee-1-desc': 'Belirli hukuki danışmanlık hizmetleri için önceden belirlenmiş sabit ücret tarifesi.',
      'fee-2-title': 'Nispi Ücret',
      'fee-2-desc': 'Dava sonucunda elde edilecek maddi kazanç üzerinden belirlenen ücret modeli.',
      'fee-3-title': 'Saatlik Ücret',
      'fee-3-desc': 'Uzun süreli kurumsal danışmanlık hizmetlerinde saat başı ücretlendirme.',

      /* Servis Sayfası CTA */
      'cta-services-title': 'Hukuki Sorununuz Mu Var?',
      'cta-services-desc': 'Uzman avukatlarımızla ücretsiz ön danışmanlık için hemen iletişime geçin.',

      /* İletişim Sayfası */
      'contact-form-title': 'Hukuki Danışmanlık Formu',
      'contact-form-desc': 'Size en kısa sürede dönüş yapabilmemiz için formu doldurun.',
      'contact-name-label': 'Adınız Soyadınız',
      'contact-email-label': 'E-posta Adresiniz',
      'contact-phone-label': 'Telefon Numaranız',
      'contact-practice-label': 'Hukuk Alanı',
      'contact-practice-placeholder': 'Hukuk alanı seçiniz',
      'contact-time-label': 'Tercih Edilen İletişim Zamanı',
      'contact-time-placeholder': 'Zaman seçiniz',
      'contact-message-label': 'Mesajınız',
      'contact-message-placeholder': 'Hukuki durumunuzu kısaca açıklayınız...',
      'contact-submit': 'Gönder',
      'contact-name-placeholder': 'Adınız ve soyadınız',
      'contact-email-placeholder': 'ornek@mail.com',
      'contact-phone-placeholder': '(05XX) XXX XX XX',

      /* Harita */
      'map-title': 'Ofis Lokasyonlarımız',
      'map-subtitle': 'İstanbul\'un iki yakasında hizmetinizdeyiz.',

      /* Acil Durum */
      'emergency-title': 'Acil Hukuki Destek',
      'emergency-desc': '7/24 acil hukuki destek hattımızla, tutuklama, gözaltı veya acil hukuki müdahale gerektiren durumlarda yanınızdayız.',

      /* Çerez */
      'cookie-text': 'Size daha iyi hizmet verebilmek için çerezleri kullanıyoruz.',
      'cookie-accept': 'Kabul Et',
      'cookie-decline': 'Reddet',

      /* Toast mesajları */
      'toast-success-title': 'Mesajınız Alındı!',
      'toast-success-msg': 'En kısa sürede size dönüş yapacağız.',
      'toast-error-title': 'Hata!',
      'toast-error-msg': 'Lütfen tüm alanları doğru doldurun.',
    },

    en: {
      /* Navigation */
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-services': 'Services',
      'nav-attorneys': 'Attorneys',
      'nav-contact': 'Contact',

      /* Hero */
      'hero-title': 'Guarantee of Justice',
      'hero-subtitle': 'With 45 years of experience, we are with you in your legal issues.',
      'hero-btn-consult': 'Get Consultation',
      'hero-btn-services': 'Our Expertise',
      'hero-typing': 'Guarantee of Justice',

      /* About Preview */
      'about-title': 'Corporate Legal Tradition',
      'about-desc': 'Efes Law Firm has been serving as a reliable pillar in the Turkish judiciary since 1978. Since our establishment, we work without compromising our belief in justice and professional ethical values.',
      'about-feature-1': '45+ years of experience and trust',
      'about-feature-2': '50+ expert attorney staff',
      'about-feature-3': 'Over 5,000 successful cases',
      'about-feature-4': 'Expertise in 6 different branches of law',
      'about-read-more': 'Read More',

      /* Practice Areas */
      'practice-title': 'Our Practice Areas',
      'practice-subtitle': 'We provide professional support with our experienced attorneys in the legal field closest to you.',
      'practice-detail': 'Learn More',

      /* Criminal Law */
      'area-criminal-title': 'Criminal Law',
      'area-criminal-desc': 'Expert team in criminal defense, criminal investigations, enforcement criminal courts and appeal processes.',
      /* Family Law */
      'area-family-title': 'Family Law',
      'area-family-desc': 'Divorce, custody, alimony, property regime, paternity establishment and mediation services in family disputes.',
      /* Commercial Law */
      'area-commercial-title': 'Commercial Law',
      'area-commercial-desc': 'Company formation, mergers and acquisitions, commercial contracts, bankruptcy and concordatum, commercial receivables cases.',
      /* Property Law */
      'area-property-title': 'Property Law',
      'area-property-desc': 'Title deed cancellation and registration, expropriation, rental disputes, condominium, zoning law and construction contracts.',
      /* Labor Law */
      'area-labor-title': 'Labor Law',
      'area-labor-desc': 'Reinstatement cases, severance and notice compensation, work accident compensation, collective labor agreements and union rights.',
      /* IP Law */
      'area-ip-title': 'Intellectual Property Law',
      'area-ip-desc': 'Patent, trademark, industrial design registration, literary and artistic works, unfair competition and license agreements.',

      /* Stats */
      'stats-title': 'By the Numbers',
      'stats-subtitle': 'Serving justice for over 45 years.',
      'stats-cases': 'Won Cases',
      'stats-lawyers': 'Expert Lawyers',
      'stats-rate': 'Success Rate',
      'stats-years': 'Years of Experience',

      /* Attorneys */
      'attorneys-title': 'Our Team',
      'attorneys-subtitle': 'We produce solutions to your legal problems with our expert attorneys in their fields.',

      /* Attorney 1 */
      'attorney-1-name': 'Ahmet Yılmaz, Esq.',
      'attorney-1-title': 'Founding Partner',
      'attorney-1-desc': 'Criminal Law expert. Istanbul University Faculty of Law graduate, 30 years of experience.',
      'attorney-1-spec': 'Criminal Law',

      /* Attorney 2 */
      'attorney-2-name': 'Ayşe Kaya, Esq.',
      'attorney-2-title': 'Partner Attorney',
      'attorney-2-desc': 'Family Law expert. Ankara University Faculty of Law graduate, 25 years of experience.',
      'attorney-2-spec': 'Family Law',

      /* Attorney 3 */
      'attorney-3-name': 'Mehmet Demir, Esq.',
      'attorney-3-title': 'Senior Attorney',
      'attorney-3-desc': 'Commercial Law expert. Marmara University Faculty of Law graduate, 20 years of experience.',
      'attorney-3-spec': 'Commercial Law',

      /* Attorney 4 */
      'attorney-4-name': 'Zeynep Şahin, Esq.',
      'attorney-4-title': 'Attorney',
      'attorney-4-desc': 'Property Law expert. Istanbul University Faculty of Law graduate, 15 years of experience.',
      'attorney-4-spec': 'Property Law',

      /* Attorney 5 */
      'attorney-5-name': 'Ali Öztürk, Esq.',
      'attorney-5-title': 'Attorney',
      'attorney-5-desc': 'Labor Law expert. Koç University Faculty of Law graduate, 12 years of experience.',
      'attorney-5-spec': 'Labor Law',

      /* Success Stories */
      'success-title': 'Our Success Stories',
      'success-subtitle': 'We reinforce our belief in justice with the cases we win.',
      'story-1-badge': 'Commercial Law',
      'story-1-title': 'Compensation Case',
      'story-1-desc': '100% success achieved in a 50 million TL compensation case for our industrial giant client.',
      'story-1-result': '100% Success & Compensation',
      'story-2-badge': 'Commercial Law',
      'story-2-title': 'International Arbitration',
      'story-2-desc': 'Our client\'s rights were successfully protected in the international arbitration process.',
      'story-2-result': 'Successful Arbitration Process',
      'story-3-badge': 'Family Law',
      'story-3-title': 'Custody Case',
      'story-3-desc': 'Positive outcome regarding child custody and alimony in a family law case.',
      'story-3-result': 'Custody & Alimony Victory',

      /* Testimonials */
      'testimonials-title': 'What Our Clients Say?',
      'testimonials-subtitle': 'Your satisfaction is our greatest reference.',

      /* CTA */
      'cta-title': 'Contact Us for Legal Support',
      'cta-desc': 'Our professional team is ready to find solutions to your legal issues as soon as possible.',
      'cta-btn-appointment': 'Make Appointment',

      /* FAQ */
      'faq-title': 'Frequently Asked Questions',
      'faq-subtitle': 'What you wonder about legal processes.',

      /* Footer */
      'footer-desc': 'Since 1978, we have been providing professional consultancy and case tracking services in all areas of law, based in Istanbul.',
      'footer-practices': 'Practices',
      'footer-links': 'Quick Links',
      'footer-contact': 'Contact',
      'footer-copyright': '© 2024 Efesoftlab. All rights reserved.',
      'footer-credit': 'Sales: Efesoftlab',

      /* Page Banner */
      'page-banner-about-title': 'About Us',
      'page-banner-about-desc': 'Over 45 years of experience, trust and understanding of justice',
      'page-banner-services-title': 'Our Practice Areas',
      'page-banner-services-desc': 'Your professional solution partner in all areas of law',
      'page-banner-contact-title': 'Contact',
      'page-banner-contact-desc': 'Contact us for your legal issues',

      /* About Page */
      'history-title': 'Our History',
      'history-desc-1': 'Efes Law Firm was founded in 1978 by Av. Ahmet Yılmaz in Levent, Istanbul. Starting as a small law office, our journey has turned into a well-established law firm with over 50 attorneys.',
      'history-desc-2': 'Since our establishment, we have made it our duty to provide the highest quality legal service to our clients without compromising our ethical values and professional principles.',
      'mvv-title': 'Mission, Vision & Values',
      'mvv-subtitle': 'The cornerstones of our understanding of law.',
      'mission-title': 'Our Mission',
      'mission-desc': 'To facilitate access to justice by producing innovative, effective and sustainable solutions to our clients\' legal problems.',
      'vision-title': 'Our Vision',
      'vision-desc': 'To provide international standard legal services as one of Turkey\'s most reliable and respected law firms.',
      'values-title': 'Our Values',
      'values-desc': 'Honesty and transparency, commitment to professional ethical rules, client-oriented service approach, continuous development and innovation.',
      'team-title': 'Our Attorney Staff',
      'team-subtitle': 'We are at your service with our experienced attorneys, each an expert in their field.',

      /* Services Page */
      'services-page-title': 'Our Legal Consultancy Services',
      'services-page-subtitle': 'We offer tailor-made legal solutions with our attorneys expert in their fields.',
      'process-title': 'Our Legal Consultancy Process',
      'process-subtitle': 'We offer our clients a transparent and systematic legal process.',
      'process-1-title': 'Preliminary Interview',
      'process-1-desc': 'We listen and evaluate your legal situation with a free preliminary interview.',
      'process-2-title': 'Detailed Analysis',
      'process-2-desc': 'We determine the legal strategy by examining your case file and documents in detail.',
      'process-3-title': 'Contract & Power of Attorney',
      'process-3-desc': 'We start the process by signing the attorney agreement with transparent pricing.',
      'process-4-title': 'Case & Follow-up',
      'process-4-desc': 'We report the case process regularly and inform our clients at every step.',
      'fee-title': 'Fee Information',
      'fee-desc': 'Our legal service fees are determined in accordance with the Attorneys\' Minimum Fee Tariff.',
      'fee-1-title': 'Fixed Fee',
      'fee-1-desc': 'Pre-determined fixed fee tariff for certain legal consultancy services.',
      'fee-2-title': 'Contingency Fee',
      'fee-2-desc': 'Fee model determined based on the financial gain to be obtained as a result of the case.',
      'fee-3-title': 'Hourly Fee',
      'fee-3-desc': 'Per-hour fee model for long-term corporate consultancy services.',

      /* Services CTA */
      'cta-services-title': 'Do You Have a Legal Problem?',
      'cta-services-desc': 'Contact us immediately for a free preliminary consultation with our expert attorneys.',

      /* Contact Page */
      'contact-form-title': 'Legal Consultation Form',
      'contact-form-desc': 'Fill out the form so we can get back to you as soon as possible.',
      'contact-name-label': 'Your Full Name',
      'contact-email-label': 'Your Email Address',
      'contact-phone-label': 'Your Phone Number',
      'contact-practice-label': 'Legal Area',
      'contact-practice-placeholder': 'Select legal area',
      'contact-time-label': 'Preferred Contact Time',
      'contact-time-placeholder': 'Select time',
      'contact-message-label': 'Your Message',
      'contact-message-placeholder': 'Briefly describe your legal situation...',
      'contact-submit': 'Send',
      'contact-name-placeholder': 'Your full name',
      'contact-email-placeholder': 'example@mail.com',
      'contact-phone-placeholder': '(05XX) XXX XX XX',

      /* Map */
      'map-title': 'Our Office Locations',
      'map-subtitle': 'At your service on both sides of Istanbul.',

      /* Emergency */
      'emergency-title': 'Emergency Legal Support',
      'emergency-desc': 'We are with you in cases of arrest, detention or situations requiring urgent legal intervention with our 24/7 emergency legal support line.',

      /* Cookie */
      'cookie-text': 'We use cookies to provide you with a better service.',
      'cookie-accept': 'Accept',
      'cookie-decline': 'Decline',

      /* Toast messages */
      'toast-success-title': 'Message Received!',
      'toast-success-msg': 'We will get back to you as soon as possible.',
      'toast-error-title': 'Error!',
      'toast-error-msg': 'Please fill all fields correctly.',
    }
  };

  /* ==========================================================
     DİL DEĞİŞTİRME (Language Switch)
     ========================================================== */
  let currentLang = localStorage.getItem('efes-lang') || 'tr';

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('efes-lang', lang);

    /* Dil düğmesi metnini güncelle */
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.innerHTML = lang === 'tr'
        ? '<i class="fas fa-globe"></i> EN'
        : '<i class="fas fa-globe"></i> TR';
      langToggle.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    }

    /* data-i18n ile tüm metinleri güncelle */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        /* Placeholder, value veya text içeriğini güncelle */
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translations[lang][key]);
          }
        } else if (el.tagName === 'SELECT') {
          /* Select placeholder option */
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    /* data-i18n-placeholder ile placeholderları güncelle */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    /* data-i18n-aria-label ile aria-label'leri güncelle */
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    /* data-i18n-value ile value'ları güncelle */
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.getAttribute('data-i18n-value');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('value', translations[lang][key]);
      }
    });

    /* HTML dil etiketini güncelle */
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

    /* Belge başlığını güncelle (sayfaya özel) */
    updatePageTitle(lang);
  }

  function updatePageTitle(lang) {
    const titleEl = document.querySelector('title');
    if (!titleEl) return;
    const page = document.body.getAttribute('data-page') || 'home';
    const titles = {
      tr: { home: 'Ana Sayfa', about: 'Hakkımızda', services: 'Uzmanlıklar', contact: 'İletişim' },
      en: { home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact' }
    };
    const siteName = 'Efes Hukuk Bürosu';
    const siteNameEn = 'Efes Law Firm';
    const pageTitle = titles[lang][page] || '';
    titleEl.textContent = pageTitle ? `${pageTitle} - ${lang === 'tr' ? siteName : siteNameEn}` : (lang === 'tr' ? siteName : siteNameEn);
  }

  /* Dil düğmesi olayı */
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      switchLanguage(currentLang === 'tr' ? 'en' : 'tr');
    });
  }

  /* Başlangıç dilini uygula */
  switchLanguage(currentLang);

  /* ==========================================================
     SAYFA ÖN YÜKLEYİCİ (Preloader)
     ========================================================== */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        /* Preloader gizlendikten sonra scroll animasyonlarını başlat */
        setTimeout(() => {
          initScrollAnimations();
        }, 300);
      }, 800);
    });
    /* Fallback: 3 saniye sonra zorla gizle */
    setTimeout(() => {
      if (!preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
      }
    }, 3000);
  } else {
    /* Preloader yoksa hemen animasyonları başlat */
    setTimeout(() => {
      initScrollAnimations();
    }, 300);
  }

  /* ==========================================================
     KARANLIK MOD (Dark Mode)
     ========================================================== */
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  function setTheme(theme) {
    if (theme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      darkModeToggle.setAttribute('aria-label', currentLang === 'tr' ? 'Aydınlık moda geç' : 'Switch to light mode');
    } else {
      body.removeAttribute('data-theme');
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      darkModeToggle.setAttribute('aria-label', currentLang === 'tr' ? 'Karanlık moda geç' : 'Switch to dark mode');
    }
    localStorage.setItem('efes-theme', theme);
  }

  /* Kayıtlı temayı veya sistem tercihini yükle */
  const savedTheme = localStorage.getItem('efes-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  darkModeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current);
  });

  /* ==========================================================
     MOBİL MENÜ
     ========================================================== */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    /* Dışarı tıklama ile kapatma */
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================
     YAPIŞKAN NAVBAR (Sticky Navbar)
     ========================================================== */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================
     DÜZGÜN KAYDIRMA (Smooth Scroll)
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================================
     SAYAÇ ANİMASYONU (Counter Animation)
     ========================================================== */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      if (isNaN(target)) return;

      const duration = 2000;
      const startTime = performance.now();
      const startValue = 0;

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        /* Ease-out cubic */
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (target - startValue) * eased);

        counter.textContent = currentValue + (counter.getAttribute('data-suffix') || '');

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.getAttribute('data-suffix') || '');
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  /* İstatistikler görünür olduğunda sayaçları başlat */
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================
     KAYDIRMA ANİMASYONLARI (Scroll Animations with IntersectionObserver)
     ========================================================== */
  function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');

    if (animateElements.length > 0) {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      animateElements.forEach(el => scrollObserver.observe(el));
    }
  }

  /* ==========================================================
     SSS AKORDEON (FAQ Accordion)
     ========================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      /* Tümünü kapat */
      faqItems.forEach(other => other.classList.remove('active'));

      /* Aktif olanı aç */
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================
     FORM DOĞRULAMA (Form Validation)
     ========================================================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const formControls = contactForm.querySelectorAll('.form-control');

    formControls.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });

    function validateField(field) {
      const errorEl = field.parentElement.querySelector('.form-error');
      if (!errorEl) return true;

      let isValid = true;

      /* Zorunlu alan kontrolü */
      if (field.hasAttribute('required') && !field.value.trim()) {
        errorEl.textContent = currentLang === 'tr' ? 'Bu alan zorunludur.' : 'This field is required.';
        errorEl.style.display = 'block';
        field.classList.add('error');
        field.classList.remove('success');
        return false;
      }

      /* E-posta formatı kontrolü */
      if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          errorEl.textContent = currentLang === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email address.';
          errorEl.style.display = 'block';
          field.classList.add('error');
          field.classList.remove('success');
          return false;
        }
      }

      /* Telefon formatı kontrolü */
      if (field.type === 'tel' && field.value.trim()) {
        const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/;
        if (!phoneRegex.test(field.value.trim())) {
          errorEl.textContent = currentLang === 'tr' ? 'Geçerli bir telefon numarası giriniz.' : 'Please enter a valid phone number.';
          errorEl.style.display = 'block';
          field.classList.add('error');
          field.classList.remove('success');
          return false;
        }
      }

      errorEl.style.display = 'none';
      field.classList.remove('error');
      field.classList.add('success');
      return true;
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let allValid = true;
      formControls.forEach(input => {
        if (!validateField(input)) {
          allValid = false;
        }
      });

      if (allValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...');
        submitBtn.disabled = true;

        setTimeout(() => {
          /* Başarılı toast bildirimi */
          showToast(
            currentLang === 'tr' ? 'Başarılı!' : 'Success!',
            currentLang === 'tr' ? 'Mesajınız başarıyla gönderildi.' : 'Your message has been sent successfully.',
            'success'
          );

          submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + (currentLang === 'tr' ? 'Mesajınız Alındı!' : 'Message Received!');
          submitBtn.style.background = '#10b981';

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
            formControls.forEach(input => {
              input.classList.remove('success', 'error');
            });
          }, 2500);
        }, 1500);
      } else {
        showToast(
          currentLang === 'tr' ? 'Hata!' : 'Error!',
          currentLang === 'tr' ? 'Lütfen tüm alanları doğru doldurun.' : 'Please fill all fields correctly.',
          'error'
        );
      }
    });
  }

  /* ==========================================================
     BİLDİRİM SİSTEMİ (Toast Notification System)
     ========================================================== */
  function showToast(title, message, type = 'info') {
    const container = document.querySelector('.toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      info: 'fa-info-circle'
    };

    toast.innerHTML = `
      <div class="toast-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="${currentLang === 'tr' ? 'Kapat' : 'Close'}"><i class="fas fa-times"></i></button>
    `;

    container.appendChild(toast);

    /* Kapatma düğmesi */
    toast.querySelector('.toast-close').addEventListener('click', () => {
      removeToast(toast);
    });

    /* Otomatik kapatma */
    setTimeout(() => {
      removeToast(toast);
    }, 4000);
  }

  function removeToast(toast) {
    toast.classList.add('toast-hiding');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 400);
  }

  /* ==========================================================
     AKTİF NAV LİNKİ (Active Nav Link Highlighting)
     ========================================================== */
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current || (href && href.includes('#') && href.split('#')[1] === current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink);

  /* ==========================================================
     WHATSAPP BUTONU
     ========================================================== */
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const phone = whatsappBtn.getAttribute('data-phone') || '905551234567';
      const message = encodeURIComponent(
        currentLang === 'tr'
          ? 'Merhaba, hukuki danışmanlık almak istiyorum.'
          : 'Hello, I would like to get legal consultation.'
      );
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
  }

  /* ==========================================================
     YUKARI ÇIK (Back to Top with Gold Progress Ring)
     ========================================================== */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const progressCircle = backToTop.querySelector('svg circle');
    const totalLength = 126; /* 2 * PI * 20 (radius) */

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const offset = totalLength - (progress * totalLength);

      if (scrollTop > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     TİP YAZMA ANİMASYONU (Typing Animation in Hero)
     ========================================================== */
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    /* CSS ile zaten animasyonlu, tekrar başlatmak için */
    setTimeout(() => {
      typingEl.style.animation = 'none';
      typingEl.offsetHeight; /* Reflow */
      typingEl.style.animation = '';
    }, 100);
  }

  /* ==========================================================
     AVUKAT KARTI CAROUSEL (Attorney Card Slider)
     ========================================================== */
  function initAttorneyCarousel() {
    const track = document.querySelector('.attorney-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const cards = track.querySelectorAll('.attorney-card');
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 30 : 0; /* width + gap */
    const visibleCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
    const maxIndex = Math.max(0, cards.length - visibleCount);

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });

      prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if (i <= maxIndex) {
          currentIndex = i;
          updateCarousel();
        }
      });
    });

    /* Pencere yeniden boyutlandığında yeniden hesapla */
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newVisibleCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
        const newMaxIndex = Math.max(0, cards.length - newVisibleCount);
        if (currentIndex > newMaxIndex) {
          currentIndex = newMaxIndex;
        }
        updateCarousel();
      }, 200);
    });

    updateCarousel();
  }

  initAttorneyCarousel();

  /* ==========================================================
     MÜVEKKİL YORUMLARI CAROUSEL (Testimonial Carousel with Auto-play)
     ========================================================== */
  function initTestimonialCarousel() {
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dot');

    if (!track || dots.length === 0) return;

    let currentIndex = 0;
    const cards = track.querySelectorAll('.testimonial-card');
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 30 : 0;
    const visibleCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
    const maxIndex = Math.max(0, cards.length - visibleCount);
    let autoPlayInterval;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function nextSlide() {
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if (i <= maxIndex) {
          currentIndex = i;
          updateCarousel();
          startAutoPlay(); /* Otomatik oynatmayı sıfırla */
        }
      });
    });

    /* Pencere yeniden boyutlandırma */
    let resizeTimer2;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer2);
      resizeTimer2 = setTimeout(() => {
        const newVisibleCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
        const newMaxIndex = Math.max(0, cards.length - newVisibleCount);
        if (currentIndex > newMaxIndex) {
          currentIndex = newMaxIndex;
        }
        updateCarousel();
      }, 200);
    });

    /* Fare ile üzerine gelince durdur */
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  }

  initTestimonialCarousel();

  /* ==========================================================
      ÇEREZ ONAY BANNERI (Cookie Consent Banner)
      ========================================================== */
  const cookieConsent = document.querySelector('.cookie-consent');
  if (cookieConsent) {
    if (!localStorage.getItem('efes-cookie-consent')) {
      setTimeout(() => {
        cookieConsent.classList.add('show');
      }, 1000);
    }

    const acceptBtn = cookieConsent.querySelector('.cookie-btn-accept');
    const declineBtn = cookieConsent.querySelector('.cookie-btn-decline');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('efes-cookie-consent', 'accepted');
        cookieConsent.classList.remove('show');
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        localStorage.setItem('efes-cookie-consent', 'declined');
        cookieConsent.classList.remove('show');
      });
    }
  }

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
      var carousels = document.querySelectorAll('.carousel-next');
      carousels.forEach(function(btn) {
        if (isElementInViewport(btn.closest('.attorney-carousel, .testimonial-carousel'))) {
          if (diff > 0) btn.click();
          else {
            var prevBtn = btn.closest('.attorney-carousel, .testimonial-carousel').querySelector('.carousel-prev');
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
