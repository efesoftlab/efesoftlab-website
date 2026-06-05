/* ============================================================
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   Tıp Merkezi Web Sitesi - Tüm JavaScript İşlevleri
   ============================================================ */

/* ===== Çeviri Sistemi (TR/EN) ===== */
const translations = {
  tr: {
    /* Navbar */
    'nav-home': 'Ana Sayfa',
    'nav-about': 'Hakkımızda',
    'nav-services': 'Hizmetler',
    'nav-doctors': 'Doktorlar',
    'nav-contact': 'İletişim',

    /* Hero */
    'hero-title': 'Sağlığınız <span>Bizim Önceliğimiz</span>',
    'hero-desc': 'Modern tıp merkezimizde, deneyimli kadromuz ve ileri teknolojik donanımımızla size en kaliteli sağlık hizmetini sunuyoruz. Sağlıklı bir yaşam için yanınızdayız.',
    'hero-btn-appointment': 'Randevu Al',
    'hero-btn-services': 'Hizmetlerimiz',

    /* Features */
    'features-title': 'Neden <span>Biz?</span>',
    'features-desc': 'Sağlığınızı emanet edeceğiniz merkezimizde sizi bekleyen ayrıcalıklar',
    'feature-1-title': 'Deneyim',
    'feature-1-desc': '20 yılı aşkın deneyime sahip uzman kadromuzla hizmetinizdeyiz.',
    'feature-2-title': 'Teknoloji',
    'feature-2-desc': 'Son teknoloji cihazlarla doğru teşhis ve tedavi imkanı sunuyoruz.',
    'feature-3-title': 'Hijyen',
    'feature-3-desc': 'En üst düzey hijyen standartlarında steril bir ortam sağlıyoruz.',
    'feature-4-title': 'Güven',
    'feature-4-desc': 'Hasta mahremiyeti ve güvenliği öncelikli politikamızdır.',

    /* Services */
    'services-title': 'Bölümlerimiz & <span>Hizmetlerimiz</span>',
    'services-desc': 'Her biri kendi alanında uzmanlaşmış bölümlerimizle geniş kapsamlı sağlık hizmeti',
    'service-1-title': 'Diş Hekimliği',
    'service-1-desc': 'Ağız ve diş sağlığı alanında implant, kanal tedavisi, ortodonti ve estetik diş hekimliği hizmetleri.',
    'service-2-title': 'Kardiyoloji',
    'service-2-desc': 'Kalp ve damar hastalıkları tanı ve tedavisi, EKG, ekokardiyografi, anjiyo ve ritim bozuklukları.',
    'service-3-title': 'Dermatoloji',
    'service-3-desc': 'Cilt hastalıkları, alerjik reaksiyonlar, lazer tedavisi, cilt kanseri taraması ve estetik uygulamalar.',
    'service-4-title': 'Göz Sağlığı',
    'service-4-desc': 'Göz muayenesi, katarakt, glokom, lazer göz ameliyatları ve görme kusurları tedavisi.',
    'service-5-title': 'Fizyoterapi',
    'service-5-desc': 'Kas-iskelet sistemi rahatsızlıkları, spor yaralanmaları, rehabilitasyon ve manuel terapi.',
    'service-6-title': 'Radyoloji',
    'service-6-desc': 'MR, BT, ultrasonografi, direkt grafi ve mamografi gibi ileri görüntüleme hizmetleri.',
    'service-detail': 'Detaylı Bilgi',

    /* Doctors */
    'doctors-title': 'Uzman <span>Kadromuz</span>',
    'doctors-desc': 'Alanında deneyimli ve hasta odaklı yaklaşımı benimseyen uzman doktorlarımız',

    /* Doctor Names & Titles */
    'dr-1-name': 'Dr. Ahmet Yılmaz',
    'dr-1-title': 'Başhekim - Kardiyoloji Uzmanı',
    'dr-1-desc': 'İstanbul Üniversitesi Tıp Fakültesi mezunu. 25 yıllık deneyimiyle kardiyoloji alanında uzmanlaşmıştır. 5000\'den fazla başarılı anjiyo ve kalp ameliyatı gerçekleştirmiştir.',
    'dr-2-name': 'Dr. Ayşe Kaya',
    'dr-2-title': 'Diş Hekimliği Uzmanı',
    'dr-2-desc': 'Hacettepe Üniversitesi Diş Hekimliği Fakültesi mezunu. İmplantoloji ve estetik diş hekimliği alanında 18 yıllık deneyim. Gülüş tasarımı ve dijital diş hekimliği konularında uzman.',
    'dr-3-name': 'Uzm. Dr. Mehmet Demir',
    'dr-3-title': 'Göz Hastalıkları Uzmanı',
    'dr-3-desc': 'Cerrahpaşa Tıp Fakültesi mezunu. Katarakt cerrahisi, glokom tedavisi ve lazer göz ameliyatı alanlarında 20 yıllık deneyim. 10.000\'den fazla başarılı göz ameliyatı.',
    'dr-4-name': 'Dr. Zeynep Şahin',
    'dr-4-title': 'Dermatoloji Uzmanı',
    'dr-4-desc': 'Ankara Üniversitesi Tıp Fakültesi mezunu. 15 yıllık dermatoloji deneyimi. Lazer tedavileri, cilt kanseri taraması ve estetik dermatoloji alanlarında uzmanlaşmıştır.',
    'dr-5-name': 'Fzt. Ali Öztürk',
    'dr-5-title': 'Fizyoterapi Uzmanı',
    'dr-5-desc': 'Hacettepe Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu. 12 yıllık deneyim. Manuel terapi, spor yaralanmaları rehabilitasyonu ve nörolojik rehabilitasyon alanlarında uzman.',
    'all-doctors': 'Tüm Doktorlarımız',

    /* Process */
    'process-title': 'Tedavi <span>Sürecimiz</span>',
    'process-desc': 'Adım adım sağlığınıza kavuşmanız için izlediğimiz tedavi süreci',
    'step-1-title': 'Muayene',
    'step-1-desc': 'Uzman doktorlarımızla detaylı muayene ve ön değerlendirme',
    'step-2-title': 'Tanı',
    'step-2-desc': 'Gelişmiş görüntüleme ve testlerle doğru teşhis',
    'step-3-title': 'Tedavi',
    'step-3-desc': 'Kişiye özel tedavi planı ve modern yöntemlerle uygulama',
    'step-4-title': 'Takip',
    'step-4-desc': 'Tedavi sonrası düzenli kontroller ve sürekli destek',

    /* Testimonials */
    'testimonials-title': 'Hasta <span>Görüşleri</span>',
    'testimonials-desc': 'Değerli hastalarımızın memnuniyetleri bizim için en önemli referans',
    'testimonial-1-text': '"Çok profesyonel bir ekip. Diş tedavim sırasında hiç ağrı hissetmedim ve sonuç harika oldu. Herkese tavsiye ediyorum."',
    'testimonial-1-name': 'Ayşe K.',
    'testimonial-1-dept': 'Diş Tedavisi',
    'testimonial-2-text': '"Kardiyoloji bölümünde geçirdiğim anjiyo işlemi sonrası sağlığıma kavuştum. İlgili ve güler yüzlü personel için teşekkürler."',
    'testimonial-2-name': 'Ali R.',
    'testimonial-2-dept': 'Kardiyoloji',
    'testimonial-3-text': '"Fizyoterapi sürecimde gösterdikleri özen ve profesyonellik sayesinde kısa sürede sağlığıma kavuştum. Kesinlikle öneriyorum."',
    'testimonial-3-name': 'Fatma T.',
    'testimonial-3-dept': 'Fizyoterapi',

    /* Stats */
    'stat-1': 'Mutlu Hasta',
    'stat-2': 'Uzman Doktor',
    'stat-3': "Yıllık Deneyim",
    'stat-4': 'Memnuniyet Oranı',

    /* CTA */
    'cta-title': 'Sağlıklı Bir Gelecek İçin <br>Hemen Randevu Alın',
    'cta-desc': 'Uzman kadromuzla tanışmak ve size özel tedavi planı oluşturmak için bizimle iletişime geçin.',
    'cta-btn': 'Randevu Al',

    /* FAQ */
    'faq-title': 'Sıkça Sorulan <span>Sorular</span>',
    'faq-desc': 'Merak ettiğiniz konular hakkında sıkça sorulan sorulara cevaplar',
    'faq-1-q': 'Randevu nasıl alabilirim?',
    'faq-1-a': 'Randevu almak için web sitemizdeki iletişim formunu doldurabilir, 7/24 hizmet veren çağrı merkezimizi arayabilir veya merkezimize şahsen başvurabilirsiniz. Online randevu sistemimiz sayesinde istediğiniz bölüm ve doktora hızlıca randevu oluşturabilirsiniz.',
    'faq-2-q': 'Hangi sigorta şirketleri ile anlaşmalısınız?',
    'faq-2-a': 'Başlıca anlaşmalı olduğumuz sigorta şirketleri: Anadolu Sigorta, Axa Sigorta, Allianz, Groupama, Eureko Sigorta, Ak Sigorta ve diğer özel sağlık sigortaları. Tüm anlaşmalı kurumlar listesi için bizimle iletişime geçebilirsiniz.',
    'faq-3-q': 'Acil durumlarda ne yapmalıyım?',
    'faq-3-a': 'Acil durumlarda 7/24 hizmet veren acil servisimiz bulunmaktadır. Acil durumlarda 112\'yi arayabilir veya doğrudan merkezimize başvurabilirsiniz. Acil durumlar için 7/24 açık telefon hattımız: 0212 444 0 123.',
    'faq-4-q': 'Tedavi ücretleri hakkında bilgi alabilir miyim?',
    'faq-4-a': 'Tedavi ücretlerimiz, sigorta kapsamınıza ve seçeceğiniz tedavi yöntemine göre değişiklik göstermektedir. Detaylı ücret bilgisi için web sitemizdeki fiyat listesini inceleyebilir veya bizimle iletişime geçebilirsiniz.',
    'faq-5-q': 'Muayene öncesi hazırlık yapmalı mıyım?',
    'faq-5-a': 'Bölüme göre değişmekle birlikte, genel olarak randevunuzdan önce varsa önceki tahlil ve görüntüleme sonuçlarınızı yanınızda getirmeniz önerilir. Bazı testler için aç karnına gelmeniz gerekebilir.',
    'faq-6-q': 'Merkezinizde hangi dillerde hizmet veriliyor?',
    'faq-6-a': 'Merkezimizde başta Türkçe olmak üzere İngilizce, Almanca ve Arapça dillerinde hizmet verilmektedir. Uluslararası hastalarımız için tercüman desteği de sağlamaktayız.',

    /* Footer */
    'footer-brand': 'Modern Tıp',
    'footer-desc': 'Modern Tıp Merkezi olarak 15 yılı aşkın süredir, deneyimli kadromuz ve ileri teknolojik donanımımızla hastalarımıza en kaliteli sağlık hizmetini sunmaktayız.',
    'footer-emergency': 'Acil: 0212 444 0 123',
    'footer-quick-links': 'Hızlı Linkler',
    'footer-hours-title': 'Çalışma Saatleri',
    'footer-weekdays': 'Pazartesi - Cuma',
    'footer-saturday': 'Cumartesi',
    'footer-sunday': 'Pazar',
    'footer-emergency-service': 'Acil Servis',
    'footer-contact-title': 'İletişim',
    'footer-copyright': '© 2024 Efesoftlab. Tüm hakları saklıdır.',
    'footer-design': 'Tasarım ve Geliştirme: Efesoftlab',
    'footer-policy': 'Gizlilik Politikası',

    /* About Page */
    'about-breadcrumb': 'Hakkımızda',
    'about-title': 'Hakkımızda',
    'about-desc': 'Modern Tıp Merkezi\'nin hikayesi, misyonu ve vizyonu hakkında detaylı bilgi',
    'story-title': "Modern Tıp Merkezi'nin <span>Hikayesi</span>",
    'story-p1': 'Modern Tıp Merkezi, 2010 yılında bir grup idealist doktorun hayaliyle yola çıktı. Küçük bir poliklinik olarak başlayan yolculuğumuz, bugün 50\'den fazla uzman doktor ve 200\'ü aşkın sağlık çalışanıyla hizmet veren modern bir sağlık kompleksine dönüştü.',
    'story-p2': 'Kurulduğumuz günden bu yana, hastalarımıza en kaliteli sağlık hizmetini sunmak için sürekli kendimizi yeniliyor, tıptaki son gelişmeleri yakından takip ediyoruz. Her yıl binlerce hastaya şifa olmanın gururunu yaşıyoruz.',
    'story-p3': 'Amacımız, sağlık alanında bölgenin en güvenilir ve tercih edilen merkezi olmaya devam etmek, hastalarımıza sadece tedavi değil, aynı zamanda sağlıklı bir yaşam için rehberlik etmektir.',
    'mvv-title': 'Misyon, Vizyon & <span>Değerlerimiz</span>',
    'mvv-desc': 'Sağlık hizmeti anlayışımızın temelini oluşturan ilkeler',
    'mission-title': 'Misyonumuz',
    'mission-desc': 'Hastalarımıza en güncel tıbbi bilgi ve teknolojilerle donanmış, etik değerlere bağlı, hasta odaklı ve kaliteli sağlık hizmeti sunmak; toplum sağlığının korunmasına ve geliştirilmesine katkıda bulunmak.',
    'vision-title': 'Vizyonumuz',
    'vision-desc': 'Sağlık alanında yenilikçi yaklaşımları benimseyen, ulusal ve uluslararası düzeyde tanınan, hasta memnuniyetinde öncü bir sağlık merkezi olmak.',
    'values-title': 'Değerlerimiz',
    'values-desc': 'Hasta odaklılık, etik değerlere bağlılık, sürekli gelişim ve yenilikçilik, ekip çalışması, şeffaflık, mahremiyete saygı, kalite standartlarına uygunluk.',
    'tech-title': 'Teknoloji & <span>Ekipmanlarımız</span>',
    'tech-desc': 'En son teknolojik cihazlarla donatılmış merkezimizde doğru teşhis ve tedavi',

    /* Services Page */
    'services-breadcrumb': 'Hizmetlerimiz',
    'services-page-title': 'Hizmetlerimiz',
    'services-page-desc': 'Modern tanı ve tedavi yöntemleriyle sağlığınıza kavuşmanız için yanınızdayız',
    'services-all-title': 'Tüm <span>Bölümlerimiz</span>',
    'services-all-desc': 'Her biri kendi alanında uzmanlaşmış bölümlerimizle kapsamlı sağlık hizmeti',
    'pricing-title': 'Tedavi <span>Fiyatları</span>',
    'pricing-desc': '2026 yılı güncel tedavi fiyatlarımız. Kesin fiyat bilgisi için muayene olmanız gerekmektedir.',
    'pricing-header-treatment': 'Tedavi',
    'pricing-header-price': 'Fiyat',
    'pricing-header-duration': 'Süre',
    'insurance-title': 'Anlaşmalı <span>Sigortalar</span>',
    'insurance-desc': 'Birçok özel sağlık sigortası ve kurumla anlaşmalı olarak hizmet vermekteyiz',

    /* Contact Page */
    'contact-breadcrumb': 'İletişim',
    'contact-page-title': 'İletişim',
    'contact-page-desc': 'Randevu ve bilgi almak için bizimle iletişime geçin',
    'contact-address-title': 'Adresimiz',
    'contact-address': 'Atatürk Cad. No:123<br>Şişli / İstanbul',
    'contact-phone-title': 'Telefon',
    'contact-phone': '0212 444 0 123<br>0212 555 0 123',
    'contact-email-title': 'E-Posta',
    'contact-email': 'info@moderntip.com<br>randevu@moderntip.com',
    'contact-emergency-title': 'Acil Servis 7/24',
    'contact-emergency-phone': '0212 444 0 123<br>Acil durumlarda 112',
    'appointment-title': 'Online <span>Randevu</span>',
    'appointment-desc': 'Hemen randevu alın, sağlığınıza ilk adımı atın',
    'appointment-form-title': 'Randevu Formu',
    'form-name': 'Ad Soyad',
    'form-email': 'E-Posta',
    'form-phone': 'Telefon',
    'form-date': 'Randevu Tarihi',
    'form-department': 'Bölüm',
    'form-department-placeholder': 'Bölüm seçiniz',
    'form-message': 'Mesajınız',
    'form-message-placeholder': 'Varsa eklemek istediğiniz bilgiler...',
    'form-submit': 'Randevu Talebi Gönder',
    'form-call-now': 'Şimdi Ara',
    'hours-title': 'Çalışma Saatlerimiz',
    'hours-header-day': 'Gün',
    'hours-header-time': 'Saat',
    'map-title': 'Bizi <span>Bulun</span>',
    'map-desc': "Modern Tıp Merkezi'ne nasıl ulaşabileceğinizi keşfedin",

    /* Toast Messages */
    'toast-appointment-success': 'Randevu talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.',
    'toast-appointment-error': 'Formu lütfen kontrol edin.',
    'toast-language-changed': 'Dil değiştirildi: Türkçe',
    'toast-cookie-accepted': 'Çerez tercihiniz kaydedildi.',

    /* Cookie */
    'cookie-text': 'Web sitemizde size en iyi deneyimi sunmak için çerezler kullanıyoruz. Devam ederek çerez kullanımını kabul etmiş olursunuz.',
    'cookie-accept': 'Kabul Et',

    /* Lang toggle */
    'lang-tr': 'TR',
    'lang-en': 'EN',
  },

  en: {
    /* Navbar */
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-services': 'Services',
    'nav-doctors': 'Doctors',
    'nav-contact': 'Contact',

    /* Hero */
    'hero-title': 'Your Health <span>Is Our Priority</span>',
    'hero-desc': 'In our modern medical center, we provide the highest quality healthcare services with our experienced staff and advanced technological equipment. We are here for a healthy life.',
    'hero-btn-appointment': 'Get Appointment',
    'hero-btn-services': 'Our Services',

    /* Features */
    'features-title': 'Why <span>Us?</span>',
    'features-desc': 'The privileges awaiting you at our center where you will entrust your health',
    'feature-1-title': 'Experience',
    'feature-1-desc': 'We serve you with our expert staff with over 20 years of experience.',
    'feature-2-title': 'Technology',
    'feature-2-desc': 'We offer accurate diagnosis and treatment with state-of-the-art devices.',
    'feature-3-title': 'Hygiene',
    'feature-3-desc': 'We provide a sterile environment at the highest hygiene standards.',
    'feature-4-title': 'Trust',
    'feature-4-desc': 'Patient privacy and safety are our priority policy.',

    /* Services */
    'services-title': 'Departments & <span>Services</span>',
    'services-desc': 'Comprehensive healthcare services with our specialized departments',
    'service-1-title': 'Dentistry',
    'service-1-desc': 'Dental implant, root canal treatment, orthodontics and aesthetic dentistry services.',
    'service-2-title': 'Cardiology',
    'service-2-desc': 'Diagnosis and treatment of heart diseases, ECG, echocardiography, angiography.',
    'service-3-title': 'Dermatology',
    'service-3-desc': 'Skin diseases, allergic reactions, laser treatment, skin cancer screening.',
    'service-4-title': 'Ophthalmology',
    'service-4-desc': 'Eye examination, cataract, glaucoma, laser eye surgery and vision correction.',
    'service-5-title': 'Physiotherapy',
    'service-5-desc': 'Musculoskeletal disorders, sports injuries, rehabilitation and manual therapy.',
    'service-6-title': 'Radiology',
    'service-6-desc': 'MRI, CT, ultrasonography, X-ray and mammography imaging services.',
    'service-detail': 'Learn More',

    /* Doctors */
    'doctors-title': 'Our Expert <span>Team</span>',
    'doctors-desc': 'Our specialist doctors with experience and patient-focused approach',

    /* Doctor Names & Titles */
    'dr-1-name': 'Dr. Ahmet Yılmaz',
    'dr-1-title': 'Chief Physician - Cardiology Specialist',
    'dr-1-desc': 'Graduate of Istanbul University Faculty of Medicine. Specialized in cardiology with 25 years of experience. Performed over 5,000 successful angiographies and heart surgeries.',
    'dr-2-name': 'Dr. Ayşe Kaya',
    'dr-2-title': 'Dentistry Specialist',
    'dr-2-desc': 'Graduate of Hacettepe University Faculty of Dentistry. 18 years of experience in implantology and aesthetic dentistry. Expert in smile design and digital dentistry.',
    'dr-3-name': 'Uzm. Dr. Mehmet Demir',
    'dr-3-title': 'Ophthalmology Specialist',
    'dr-3-desc': 'Graduate of Cerrahpaşa Faculty of Medicine. 20 years of experience in cataract surgery, glaucoma treatment and laser eye surgery. Over 10,000 successful eye surgeries.',
    'dr-4-name': 'Dr. Zeynep Şahin',
    'dr-4-title': 'Dermatology Specialist',
    'dr-4-desc': 'Graduate of Ankara University Faculty of Medicine. 15 years of dermatology experience. Specialized in laser treatments, skin cancer screening and aesthetic dermatology.',
    'dr-5-name': 'Fzt. Ali Öztürk',
    'dr-5-title': 'Physiotherapy Specialist',
    'dr-5-desc': 'Graduate of Hacettepe University Physiotherapy and Rehabilitation. 12 years of experience. Expert in manual therapy, sports injury rehabilitation and neurological rehabilitation.',
    'all-doctors': 'All Doctors',

    /* Process */
    'process-title': 'Treatment <span>Process</span>',
    'process-desc': 'Our treatment process for your recovery step by step',
    'step-1-title': 'Examination',
    'step-1-desc': 'Detailed examination and preliminary evaluation with our specialist doctors',
    'step-2-title': 'Diagnosis',
    'step-2-desc': 'Accurate diagnosis with advanced imaging and tests',
    'step-3-title': 'Treatment',
    'step-3-desc': 'Personalized treatment plan and application with modern methods',
    'step-4-title': 'Follow-up',
    'step-4-desc': 'Regular check-ups and continuous support after treatment',

    /* Testimonials */
    'testimonials-title': 'Patient <span>Reviews</span>',
    'testimonials-desc': 'The satisfaction of our valued patients is our most important reference',
    'testimonial-1-text': '"Very professional team. I felt no pain during my dental treatment and the result was amazing. I recommend it to everyone."',
    'testimonial-1-name': 'Ayşe K.',
    'testimonial-1-dept': 'Dental Treatment',
    'testimonial-2-text': '"I regained my health after the angiography procedure in the cardiology department. Thanks to the attentive and friendly staff."',
    'testimonial-2-name': 'Ali R.',
    'testimonial-2-dept': 'Cardiology',
    'testimonial-3-text': '"Thanks to the care and professionalism during my physiotherapy process, I recovered in a short time. I definitely recommend it."',
    'testimonial-3-name': 'Fatma T.',
    'testimonial-3-dept': 'Physiotherapy',

    /* Stats */
    'stat-1': 'Happy Patients',
    'stat-2': 'Expert Doctors',
    'stat-3': 'Years Experience',
    'stat-4': 'Satisfaction Rate',

    /* CTA */
    'cta-title': 'For a Healthy Future <br>Get an Appointment Now',
    'cta-desc': 'Contact us to meet our expert team and create a personalized treatment plan.',
    'cta-btn': 'Get Appointment',

    /* FAQ */
    'faq-title': 'Frequently Asked <span>Questions</span>',
    'faq-desc': 'Answers to frequently asked questions',
    'faq-1-q': 'How can I make an appointment?',
    'faq-1-a': 'You can fill out the contact form on our website, call our 24/7 call center, or apply in person to our center. With our online appointment system, you can quickly book an appointment with the department and doctor you want.',
    'faq-2-q': 'Which insurance companies do you work with?',
    'faq-2-a': 'Our main contracted insurance companies: Anadolu Sigorta, Axa Sigorta, Allianz, Groupama, Eureko Sigorta, Ak Sigorta and other private health insurances. Please contact us for the full list.',
    'faq-3-q': 'What should I do in emergencies?',
    'faq-3-a': 'We have a 24/7 emergency service. In emergencies, you can call 112 or apply directly to our center. Our 24/7 hotline: 0212 444 0 123.',
    'faq-4-q': 'Can I get information about treatment fees?',
    'faq-4-a': 'Our treatment fees vary according to your insurance coverage and the treatment method you choose. You can check our price list on our website or contact us for detailed information.',
    'faq-5-q': 'Should I prepare before the examination?',
    'faq-5-a': 'It varies by department, but generally it is recommended to bring your previous test and imaging results if any. Some tests may require fasting. You will be informed about this during your appointment.',
    'faq-6-q': 'What languages are spoken at your center?',
    'faq-6-a': 'Our center provides services in Turkish, English, German and Arabic. We also provide interpreter support for our international patients.',

    /* Footer */
    'footer-brand': 'Modern Medical',
    'footer-desc': 'As Modern Medical Center, we have been providing the highest quality healthcare services to our patients for over 15 years with our experienced staff and advanced technological equipment.',
    'footer-emergency': 'Emergency: 0212 444 0 123',
    'footer-quick-links': 'Quick Links',
    'footer-hours-title': 'Working Hours',
    'footer-weekdays': 'Monday - Friday',
    'footer-saturday': 'Saturday',
    'footer-sunday': 'Sunday',
    'footer-emergency-service': 'Emergency Service',
    'footer-contact-title': 'Contact',
    'footer-copyright': '© 2024 Efesoftlab. All rights reserved.',
    'footer-design': 'Design and Development: Efesoftlab',
    'footer-policy': 'Privacy Policy',

    /* About Page */
    'about-breadcrumb': 'About Us',
    'about-title': 'About Us',
    'about-desc': 'Detailed information about the story, mission and vision of Modern Medical Center',
    'story-title': 'The Story of <span>Modern Medical Center</span>',
    'story-p1': 'Modern Medical Center started in 2010 with the dream of a group of idealist doctors. Our journey that began as a small polyclinic has turned into a modern health complex serving with over 50 specialist doctors and more than 200 healthcare professionals.',
    'story-p2': 'Since our establishment, we constantly renew ourselves to provide the highest quality healthcare to our patients and closely follow the latest developments in medicine. We take pride in healing thousands of patients every year.',
    'story-p3': 'Our goal is to continue being the most reliable and preferred center in the region in the field of health, and to guide our patients not only in treatment but also in a healthy life.',
    'mvv-title': 'Mission, Vision & <span>Our Values</span>',
    'mvv-desc': 'The principles that form the basis of our healthcare approach',
    'mission-title': 'Our Mission',
    'mission-desc': 'To provide patient-oriented, quality healthcare services equipped with the most up-to-date medical knowledge and technologies, committed to ethical values; to contribute to the protection and improvement of public health.',
    'vision-title': 'Our Vision',
    'vision-desc': 'To be a leading health center in patient satisfaction, recognized nationally and internationally, adopting innovative approaches in the field of health.',
    'values-title': 'Our Values',
    'values-desc': 'Patient focus, commitment to ethical values, continuous development and innovation, teamwork, transparency, respect for privacy, compliance with quality standards.',
    'tech-title': 'Technology & <span>Equipment</span>',
    'tech-desc': 'Accurate diagnosis and treatment in our center equipped with the latest technological devices',

    /* Services Page */
    'services-breadcrumb': 'Our Services',
    'services-page-title': 'Our Services',
    'services-page-desc': 'We are here for you to regain your health with modern diagnosis and treatment methods',
    'services-all-title': 'All <span>Departments</span>',
    'services-all-desc': 'Comprehensive healthcare services with our specialized departments',
    'pricing-title': 'Treatment <span>Prices</span>',
    'pricing-desc': 'Our current treatment prices for 2026. You need to be examined for exact pricing.',
    'pricing-header-treatment': 'Treatment',
    'pricing-header-price': 'Price',
    'pricing-header-duration': 'Duration',
    'insurance-title': 'Insurances <span>We Work With</span>',
    'insurance-desc': 'We serve in agreement with many private health insurances and institutions',

    /* Contact Page */
    'contact-breadcrumb': 'Contact',
    'contact-page-title': 'Contact',
    'contact-page-desc': 'Contact us for appointments and information',
    'contact-address-title': 'Our Address',
    'contact-address': 'Atatürk Cad. No:123<br>Şişli / Istanbul',
    'contact-phone-title': 'Phone',
    'contact-phone': '0212 444 0 123<br>0212 555 0 123',
    'contact-email-title': 'E-Mail',
    'contact-email': 'info@moderntip.com<br>randevu@moderntip.com',
    'contact-emergency-title': 'Emergency 24/7',
    'contact-emergency-phone': '0212 444 0 123<br>In emergencies 112',
    'appointment-title': 'Online <span>Appointment</span>',
    'appointment-desc': 'Book an appointment now, take the first step towards your health',
    'appointment-form-title': 'Appointment Form',
    'form-name': 'Full Name',
    'form-email': 'E-Mail',
    'form-phone': 'Phone',
    'form-date': 'Appointment Date',
    'form-department': 'Department',
    'form-department-placeholder': 'Select department',
    'form-message': 'Your Message',
    'form-message-placeholder': 'Additional information you want to add...',
    'form-submit': 'Send Appointment Request',
    'form-call-now': 'Call Now',
    'hours-title': 'Working Hours',
    'hours-header-day': 'Day',
    'hours-header-time': 'Hours',
    'map-title': 'Find <span>Us</span>',
    'map-desc': 'Discover how to reach Modern Medical Center',

    /* Toast Messages */
    'toast-appointment-success': 'Your appointment request has been received successfully! We will contact you as soon as possible.',
    'toast-appointment-error': 'Please check the form.',
    'toast-language-changed': 'Language changed: English',
    'toast-cookie-accepted': 'Your cookie preference has been saved.',

    /* Cookie */
    'cookie-text': 'We use cookies to provide you with the best experience on our website. By continuing, you accept the use of cookies.',
    'cookie-accept': 'Accept',

    /* Lang toggle */
    'lang-tr': 'TR',
    'lang-en': 'EN',
  }
};

/* ============================================================
   Ana JavaScript - DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ===== Site Yapılandırmasını Uygula ===== */
  if (typeof applyConfigToDOM === 'function') {
    applyConfigToDOM(getConfig());
  }

  /* ===== Sayfa Ön Yükleyici ===== */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
      }, 800);
    });
    // 3 saniye sonra yüklenmezse zaten kaldır
    setTimeout(function () {
      if (!preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
      }
    }, 3000);
  }

  /* ===== Dil Değiştirme Sistemi ===== */
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('lang') || 'tr';

  // Mevcut dili uygula
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

    // data-i18n ile tüm öğeleri güncelle
    document.querySelectorAll('[data-i18n]:not([data-config])').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // placeholder içeren alanları güncelle
    document.querySelectorAll('[data-i18n-placeholder]:not([data-config])').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Dil düğmesi metnini güncelle
    if (langToggle) {
      const otherLang = lang === 'tr' ? 'EN' : 'TR';
      langToggle.innerHTML = '<i class="fas fa-globe"></i> ' + otherLang;
    }
  }

  // İlk dil uygulaması
  applyLanguage(currentLang);

  // Dil değiştirme düğmesi
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const newLang = currentLang === 'tr' ? 'en' : 'tr';
      applyLanguage(newLang);
      showToast('info', translations[newLang]['toast-language-changed']);
    });
  }

  /* ===== Koyu Mod ===== */
  const darkModeToggle = document.getElementById('darkModeToggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });
  }

  /* ===== Mobil Menü ===== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ===== Sabit Navbar ===== */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ===== Aktif Nav Link Vurgulama ===== */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }
  setActiveNavLink();

  /* ===== Scroll'da Aktif Nav Linki Vurgula ===== */
  function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-links a').forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll);

  /* ===== Düzgün Scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===== Sayaç Animasyonu ===== */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    if (!counters.length) return;

    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'));
      if (isNaN(target)) return;

      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      function updateCounter() {
        current += step;
        if (current >= target) {
          counter.textContent = target.toLocaleString() + '+';
          return;
        }
        counter.textContent = current.toLocaleString() + '+';
        requestAnimationFrame(updateCounter);
      }

      updateCounter();
    });
  }

  /* ===== Intersection Observer ===== */
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (entry.target.classList.contains('stat-item')) {
          animateCounters();
        }
      }
    });
  }, observerOptions);

  animateElements.forEach(function (el) { observer.observe(el); });

  /* ===== SSS Akordiyon ===== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      accordionHeaders.forEach(function (h) {
        h.classList.remove('active');
      });

      if (!isActive) {
        this.classList.add('active');
      }
    });
  });

  /* ===== Form Doğrulama ===== */
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const departmentInput = document.getElementById('department');
    const messageInput = document.getElementById('message');

    function showError(input, message) {
      const errorEl = input.parentElement.querySelector('.error-message');
      input.classList.add('error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
      }
    }

    function clearError(input) {
      const errorEl = input.parentElement.querySelector('.error-message');
      input.classList.remove('error');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('show');
      }
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
      return /^[0-9+\-\s()]{7,20}$/.test(phone);
    }

    function validateDate(dateStr) {
      if (!dateStr) return false;
      const selected = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      return selected >= today && selected <= maxDate;
    }

    function validateField(input) {
      clearError(input);
      const value = input.value.trim();

      if (input.hasAttribute('required') && !value) {
        const key = currentLang === 'tr' ? 'Bu alan zorunludur.' : 'This field is required.';
        showError(input, key);
        return false;
      }

      if (input === emailInput && value && !validateEmail(value)) {
        const msg = currentLang === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email address.';
        showError(input, msg);
        return false;
      }

      if (input === phoneInput && value && !validatePhone(value)) {
        const msg = currentLang === 'tr' ? 'Geçerli bir telefon numarası giriniz.' : 'Please enter a valid phone number.';
        showError(input, msg);
        return false;
      }

      if (input === dateInput && value && !validateDate(value)) {
        const msg = currentLang === 'tr' ? 'Lütfen bugün ile 3 ay arasında bir tarih seçiniz.' : 'Please select a date between today and 3 months.';
        showError(input, msg);
        return false;
      }

      return true;
    }

    [nameInput, emailInput, phoneInput, dateInput, departmentInput, messageInput].forEach(function (input) {
      if (input) {
        input.addEventListener('blur', function () { validateField(this); });
        input.addEventListener('input', function () {
          if (this.classList.contains('error')) validateField(this);
        });
      }
    });

    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fields = [nameInput, emailInput, phoneInput, dateInput, departmentInput, messageInput].filter(Boolean);
      let isValid = true;

      fields.forEach(function (input) {
        if (!validateField(input)) isValid = false;
      });

      if (isValid) {
        const btn = appointmentForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        const sendingText = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
        const successText = currentLang === 'tr' ? 'Randevu Talebiniz Alındı!' : 'Appointment Request Received!';

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + sendingText;
        btn.disabled = true;

        setTimeout(function () {
          btn.innerHTML = '<i class="fas fa-check"></i> ' + successText;
          btn.style.backgroundColor = '#10b981';

          showToast('success', translations[currentLang]['toast-appointment-success']);

          setTimeout(function () {
            appointmentForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
          }, 3000);
        }, 1500);
      } else {
        const errMsg = currentLang === 'tr' ? 'Formu lütfen kontrol edin.' : 'Please check the form.';
        showToast('error', errMsg);
      }
    });

    // Tarih alanı min/max
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);

      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      const maxYyyy = maxDate.getFullYear();
      const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
      const maxDd = String(maxDate.getDate()).padStart(2, '0');
      dateInput.setAttribute('max', maxYyyy + '-' + maxMm + '-' + maxDd);
    }
  }

  /* ===== WhatsApp Düğmesi ===== */
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      const phone = this.getAttribute('data-phone') || '905551234567';
      const message = encodeURIComponent(
        currentLang === 'tr'
          ? 'Merhaba, sağlık randevusu hakkında bilgi almak istiyorum.'
          : 'Hello, I would like to get information about a health appointment.'
      );
      window.open('https://wa.me/' + phone + '?text=' + message, '_blank');
    });
  }

  /* ===== Toast Bildirim Sistemi ===== */
  function showToast(type, message) {
    const container = document.querySelector('.toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;

    const iconMap = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    const icon = iconMap[type] || 'fa-info-circle';

    toast.innerHTML =
      '<i class="fas ' + icon + '"></i>' +
      '<span class="toast-text">' + message + '</span>' +
      '<button class="toast-close">&times;</button>';

    container.appendChild(toast);

    // Otomatik kapatma
    var autoClose = setTimeout(function () {
      removeToast(toast);
    }, 4000);

    // Kapat düğmesi
    toast.querySelector('.toast-close').addEventListener('click', function () {
      clearTimeout(autoClose);
      removeToast(toast);
    });
  }

  function removeToast(toast) {
    toast.classList.add('removing');
    setTimeout(function () {
      if (toast.parentElement) toast.remove();
    }, 300);
  }

  // Toast container yoksa oluştur
  if (!document.querySelector('.toast-container')) {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  /* ===== Çerez Onayı ===== */
  (function cookieConsent() {
    const cookieBar = document.getElementById('cookieConsent');
    if (!cookieBar) return;

    if (localStorage.getItem('cookieAccepted')) {
      return;
    }

    setTimeout(function () {
      cookieBar.classList.add('show');
    }, 1000);

    const acceptBtn = cookieBar.querySelector('.cookie-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBar.classList.remove('show');
        showToast('info', translations[currentLang]['toast-cookie-accepted']);
      });
    }
  })();

  /* ===== Yukarı Çık Düğmesi ===== */
  (function backToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    const circle = btn.querySelector('circle');
    const dashArray = 125.6;

    window.addEventListener('scroll', function () {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.scrollY / scrollTotal;
      const dashOffset = dashArray - (scrollProgress * dashArray);

      if (circle) {
        circle.style.strokeDashoffset = dashOffset;
      }

      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ===== Yazma Animasyonu (Hero) ===== */
  (function typeAnimation() {
    const typeElement = document.querySelector('.typing-animation');
    if (!typeElement) return;

    const phrases = currentLang === 'tr'
      ? ['Sağlıklı bir yaşam', 'Güvenli tedavi', 'Uzman kadro', 'Modern teknoloji']
      : ['Healthy life', 'Safe treatment', 'Expert team', 'Modern technology'];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        currentText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      typeElement.textContent = currentText;

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
  })();

  /* ===== Doktor Carousel ===== */
  (function doctorCarousel() {
    const wrapper = document.querySelector('.doctor-carousel-wrapper');
    if (!wrapper) return;

    const carousel = wrapper.querySelector('.doctor-carousel');
    const prevBtn = wrapper.querySelector('.doctor-carousel-btn.prev');
    const nextBtn = wrapper.querySelector('.doctor-carousel-btn.next');
    const dotsContainer = wrapper.querySelector('.doctor-carousel-dots');
    if (!carousel) return;

    const cards = carousel.querySelectorAll('.doctor-card');
    if (cards.length <= 1) return;

    let currentIndex = 0;
    let cardsPerView = 3;
    const totalCards = cards.length;

    function getCardsPerView() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    function updateCarousel() {
      cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, totalCards - cardsPerView);

      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const cardWidth = 100 / cardsPerView;
      carousel.style.transform = 'translateX(-' + (currentIndex * cardWidth) + '%)';

      // Noktaları güncelle
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach(function (dot, i) {
          dot.classList.toggle('active', i === currentIndex);
        });
      }

      // Düğmeleri güncelle
      if (prevBtn) prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
      if (nextBtn) nextBtn.style.display = currentIndex >= maxIndex ? 'none' : 'flex';
    }

    // Noktaları oluştur
    if (dotsContainer) {
      const maxIndex = Math.max(0, totalCards - 1);
      for (var i = 0; i <= maxIndex; i++) {
        var dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', function () {
          const idx = parseInt(this.dataset.index);
          currentIndex = idx;
          updateCarousel();
        });
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel();
        }
      });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  })();

  /* ===== Testimonial Carousel ===== */
  (function testimonialCarousel() {
    const container = document.querySelector('.testimonials-grid');
    const dotsContainer = document.querySelector('.testimonial-dots');
    if (!container || !dotsContainer) return;

    const cards = container.querySelectorAll('.testimonial-card');
    if (cards.length <= 1) return;

    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
      cards.forEach(function (card, i) {
        card.style.display = i === index ? 'block' : 'none';
        card.classList.add('fade-in');
      });

      dotsContainer.querySelectorAll('span').forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % cards.length;
      showSlide(currentSlide);
    }

    // Noktalar
    cards.forEach(function (_, i) {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () {
        showSlide(i);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    // Sadece mobilde carousel olsun, masaüstünde hepsi görünsün
    function checkWidth() {
      if (window.innerWidth <= 992) {
        showSlide(0);
        if (!autoPlayInterval) autoPlayInterval = setInterval(nextSlide, 5000);
      } else {
        cards.forEach(function (card) { card.style.display = 'block'; });
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        if (dotsContainer) dotsContainer.style.display = 'none';
        return;
      }
      if (dotsContainer) dotsContainer.style.display = 'flex';
    }

    window.addEventListener('resize', checkWidth);
    checkWidth();
  })();

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
      var carousels = document.querySelectorAll('.doctor-carousel-btn.next, .carousel-next');
      carousels.forEach(function(btn) {
        var container = btn.closest('.doctor-carousel-wrapper, .testimonials-grid');
        if (isElementInViewport(container)) {
          if (diff > 0) btn.click();
          else {
            var prevBtn = container.querySelector('.doctor-carousel-btn.prev, .carousel-prev');
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

}); // DOMContentLoaded sonu
