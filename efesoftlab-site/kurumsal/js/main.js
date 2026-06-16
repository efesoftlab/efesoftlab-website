/**
 * ============================================
 * Corporate Business - Premium Tema JS
 * Tasarım ve Geliştirme: Efesoftlab
 * ============================================
 */

// ===== Çeviri Sistemi (TR/EN İkinci Dil Desteği) =====
const translations = {
  tr: {
    /* Navbar */
    nav-home: 'Ana Sayfa',
    nav-about: 'Hakkımızda',
    nav-services: 'Hizmetler',
    nav-contact: 'İletişim',
    nav-lang-tr: 'TR',
    nav-lang-en: 'EN',

    /* Hero */
    hero-badge: 'Kurumsal Çözümler',
    hero-title: 'Geleceği',
    hero-title-span: 'Şekillendiriyoruz',
    hero-desc: 'İşletmenizi dijital çağa taşıyor, yenilikçi çözümlerle rekabet avantajı kazanmanızı sağlıyoruz. 10+ yıllık tecrübemizle yanınızdayız.',
    hero-btn-services: 'Hizmetlerimiz',
    hero-btn-contact: 'İletişim',

    /* Özellikler */
    features-subtitle: 'Neden Biz',
    features-title: 'Neden <span class="gradient-text">Bizi</span> Seçmelisiniz?',
    features-desc: 'Müşterilerimize sunduğumuz değerlerle fark yaratıyor, her projede mükemmelliği hedefliyoruz.',
    feature1-title: 'İnovasyon',
    feature1-desc: 'Teknolojideki son gelişmeleri yakından takip ederek işletmenize en yenilikçi çözümleri sunuyor, rekabette bir adım önde olmanızı sağlıyoruz.',
    feature2-title: 'Güvenilirlik',
    feature2-desc: 'Projelerimizde şeffaflık ve hesap verebilirlik ilkeleriyle hareket ediyor, taahhütlerimizi zamanında ve eksiksiz yerine getiriyoruz.',
    feature3-title: 'Kalite',
    feature3-desc: 'Uluslararası kalite standartlarında hizmet veriyor, her aşamada titiz kalite kontrol süreçlerimizle en yüksek memnuniyeti hedefliyoruz.',

    /* Hizmetler */
    services-subtitle: 'Hizmetlerimiz',
    services-title: 'Neler <span class="gradient-text">Sunuyoruz</span>?',
    services-desc: 'İşletmenizin ihtiyaçlarına özel kapsamlı çözümler sunuyor, her aşamada yanınızda oluyoruz.',
    service1-title: 'Danışmanlık',
    service1-desc: 'Stratejik yönetim, iş süreçleri optimizasyonu ve kurumsal dönüşüm konularında uzun yıllara dayanan danışmanlık tecrübemizle işletmenizi bir üst seviyeye taşıyoruz.',
    service2-title: 'Dijital Dönüşüm',
    service2-desc: 'İş süreçlerinizi dijital platformlara taşıyor, otomasyon ve modern teknolojilerle verimliliğinizi artıracak kapsamlı dönüşüm stratejileri geliştiriyoruz.',
    service3-title: 'Yazılım Geliştirme',
    service3-desc: 'İhtiyaçlarınıza özel web ve mobil uygulamalar, kurumsal yazılım çözümleri ve API entegrasyonları ile işletmenizin dijital altyapısını güçlendiriyoruz.',
    service4-title: 'Veri Analitiği',
    service4-desc: 'Büyük veri analizi, iş zekası raporlamaları ve öngörücü analitik modelleriyle verilerinizi anlamlı içgörülere dönüştürüp stratejik kararlar almanızı sağlıyoruz.',
    service5-title: 'Bulut Çözümleri',
    service5-desc: 'Bulut mimarisi danışmanlığı, geçiş stratejileri ve yönetilen bulut hizmetleriyle altyapınızı esnek, ölçeklenebilir ve maliyet etkin bir yapıya kavuşturuyoruz.',
    service6-title: 'Güvenlik',
    service6-desc: 'Siber güvenlik değerlendirmeleri, sızma testleri, güvenlik duvarı yapılandırması ve acil durum müdahale planları ile dijital varlıklarınızı koruma altına alıyoruz.',
    service-read-more: 'Detaylı İncele',

    /* İstatistikler */
    stat1-num: '500',
    stat1-label: 'Tamamlanan Proje',
    stat2-num: '150',
    stat2-label: 'Mutlu Müşteri',
    stat3-num: '50',
    stat3-label: 'Uzman Personel',
    stat4-num: '10',
    stat4-label: 'Yıl Deneyim',

    /* Markalar */
    brands-title: 'Güvendiklerimiz',

    /* Yorumlar */
    testimonials-subtitle: 'Referanslar',
    testimonials-title: 'Müşterilerimiz <span class="gradient-text">Ne Diyor</span>?',
    testimonials-desc: 'Onlarca başarılı projede müşterilerimizin memnuniyeti bizim için en büyük referans.',
    testimonial1-text: '"Corporate Business ile çalışmak iş süreçlerimizi tamamen dönüştürdü. Profesyonel yaklaşımları ve yenilikçi çözümleri sayesinde verimliliğimiz %40 arttı. Kendilerine minnettarız."',
    testimonial1-name: 'Ayşe Yılmaz',
    testimonial1-title: 'CEO, TechInnovate',
    testimonial2-text: '"Dijital dönüşüm projemizde bize rehberlik eden ekip, beklentilerimizin çok ötesinde bir iş çıkardı. Süreç boyunca şeffaf iletişim ve güçlü teknik destek aldık."',
    testimonial2-name: 'Mehmet Demir',
    testimonial2-title: 'Genel Müdür, GlobalSoft',
    testimonial3-text: '"Yazılım geliştirme sürecinde gösterdikleri özveri ve kalite anlayışı gerçekten takdire şayan. Projemizi zamanında ve eksiksiz teslim ettiler. Kesinlikle öneriyorum."',
    testimonial3-name: 'Zeynep Kaya',
    testimonial3-title: 'IT Direktörü, FinansBank',

    /* Blog */
    blog-subtitle: 'Blog & Haberler',
    blog-title: 'Son <span class="gradient-text">Yazılar</span>',
    blog-desc: 'Sektördeki son gelişmeler, ipuçları ve başarı hikayelerimizi keşfedin.',
    blog1-category: 'Dijital Dönüşüm',
    blog1-title: 'Dijital Dönüşümde Başarıya Giden 5 Strateji',
    blog1-desc: 'Dijital dönüşüm yolculuğunda işletmenizi başarıya taşıyacak temel stratejileri ve dikkat edilmesi gereken noktaları ele alıyoruz.',
    blog1-date: '15 Mayıs 2026',
    blog2-category: 'Yapay Zeka',
    blog2-title: 'Yapay Zeka ile İş Süreçlerini Optimize Etme',
    blog2-desc: 'Yapay zeka teknolojilerinin iş süreçlerine entegrasyonu, verimlilik artışı ve rekabet avantajı sağlamak için nasıl kullanılabileceğini inceliyoruz.',
    blog2-date: '8 Mayıs 2026',
    blog3-category: 'Siber Güvenlik',
    blog3-title: '2026\'da Siber Güvenlik Trendleri ve Önlemler',
    blog3-desc: 'Yeni nesil siber tehditler, güvenlik önlemleri ve işletmenizi korumak için almanız gereken aksiyonları detaylı bir şekilde analiz ediyoruz.',
    blog3-date: '1 Mayıs 2026',
    blog-author: 'Admin',
    blog-read-more: 'Devamını Oku',

    /* CTA */
    cta-badge: 'Hadi Başlayalım',
    cta-title: 'Projenizi <span class="gradient-text">Hayata</span> Geçirelim',
    cta-desc: 'Projenizi hayata geçirmek için doğru adrestesiniz. Uzman ekibimizle ücretsiz ön görüşme için hemen bizimle iletişime geçin.',
    cta-btn: 'Bizimle İletişime Geçin',

    /* SSS */
    faq-subtitle: 'SSS',
    faq-title: 'Sıkça Sorulan <span class="gradient-text">Sorular</span>',
    faq-desc: 'Hizmetlerimiz hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz.',
    faq1-q: 'Hangi sektörlere hizmet veriyorsunuz?',
    faq1-a: 'Finans, sağlık, üretim, perakende, lojistik ve e-ticaret başta olmak üzere birçok farklı sektöre hizmet veriyoruz. Her sektörün kendine özgü dinamiklerine uygun özelleştirilmiş çözümler geliştiriyor, işletmenizin ihtiyaçlarına tam uyum sağlıyoruz.',
    faq2-q: 'Proje teslim süreleriniz ne kadar?',
    faq2-a: 'Proje teslim süresi, projenin kapsamına ve karmaşıklığına göre değişiklik göstermektedir. Küçük ölçekli projeler 2-4 hafta içerisinde tamamlanırken, büyük ölçekli kurumsal projeler 3-6 ay arasında sürebilmektedir. Keşif ve planlama aşamasında size net bir zaman çizelgesi sunuyoruz.',
    faq3-q: 'Teklif süreciniz nasıl işliyor?',
    faq3-a: 'Öncelikle ihtiyaçlarınızı anlamak için ücretsiz bir ön görüşme gerçekleştiriyoruz. Ardından proje kapsamını detaylı olarak analiz ediyor ve size özel bir teklif hazırlıyoruz. Teklifimizde proje takvimi, teslimat planı ve maliyet detayları şeffaf bir şekilde yer almaktadır.',
    faq4-q: 'Teknik destek hizmetiniz var mı?',
    faq4-a: 'Evet, tüm projelerimizde teslimat sonrası teknik destek hizmeti sunuyoruz. Standart bakım anlaşmalarımızın yanı sıra 7/7 acil destek paketlerimiz de mevcuttur. Uzman ekibimiz her türlü teknik sorununuzda yanınızda.',
    faq5-q: 'Referanslarınızı görebilir miyiz?',
    faq5-a: 'Tabii ki. 150\'den fazla mutlu müşterimiz arasından sektörünüzle ilgili referans projelerimizi ve müşteri yorumlarını sizinle paylaşmaktan memnuniyet duyarız. Gizlilik anlaşmaları çerçevesinde uygun referansları görüşme sırasında iletebiliriz.',

    /* Footer */
    footer-about-desc: '10 yılı aşkın deneyimimizle işletmenizi dijital çağa taşıyor, yenilikçi çözümlerle rekabet avantajı kazanmanızı sağlıyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla her projede fark yaratıyoruz.',
    footer-quick-links: 'Hızlı Linkler',
    footer-services-title: 'Hizmetler',
    footer-contact-title: 'İletişim Bilgileri',
    footer-home: 'Ana Sayfa',
    footer-about: 'Hakkımızda',
    footer-services-link: 'Hizmetler',
    footer-contact-link: 'İletişim',
    footer-faq: 'SSS',
    footer-service1: 'Danışmanlık',
    footer-service2: 'Dijital Dönüşüm',
    footer-service3: 'Yazılım Geliştirme',
    footer-service4: 'Veri Analitiği',
    footer-service5: 'Bulut Çözümleri',
    footer-service6: 'Güvenlik',
    footer-addr: 'Levent Mahallesi, Teknik Sokak No:42, Beşiktaş / İstanbul',
    footer-phone: '+90 (212) 444 0 123',
    footer-email: 'info@corporatebusiness.com',
    footer-hours: 'Pazartesi - Cuma: 09:00 - 18:00',
    footer-copyright: '© 2024 Efesoftlab. Tüm hakları saklıdır.',
    footer-privacy: 'Gizlilik Politikası',
    footer-terms: 'Kullanım Koşulları',

    /* Hakkımızda Sayfası */
    about-banner-title: 'Hakkımızda',
    about-banner-desc: '10 yılı aşkın tecrübemizle işletmenizi geleceğe taşıyoruz.',
    about-breadcrumb-home: 'Ana Sayfa',
    about-breadcrumb-current: 'Hakkımızda',
    about-story-title: 'Hikayemiz',
    about-story-p1: 'Corporate Business, 2016 yılında İstanbul\'da iki girişimci mühendis tarafından kuruldu. Kurulduğumuz ilk günden bu yana, işletmelerin dijital dönüşüm yolculuğunda güvenilir bir iş ortağı olmayı kendimize misyon edindik. Küçük bir ekiple başlayan yolculuğumuz, bugün 50\'den fazla uzman personelimizle Türkiye\'nin önde gelen teknoloji danışmanlık firmalarından biri haline geldi.',
    about-story-p2: 'Müşteri odaklı yaklaşımımız, yenilikçi çözümlerimiz ve kalite standartlarından ödün vermeyen anlayışımız sayesinde 150\'den fazla kurumsal müşteriye 500\'ün üzerinde başarılı proje teslim ettik. Finans, sağlık, üretim, perakende ve lojistik başta olmak üzere birçok farklı sektörde değer yaratan çözümler geliştirdik.',
    about-story-p3: 'Bugün geldiğimiz noktada, sadece Türkiye\'de değil, Avrupa ve Orta Doğu pazarlarında da projeler yürüten uluslararası bir oyuncu olma yolunda emin adımlarla ilerliyoruz. Amacımız, her geçen gün daha fazla işletmeye dokunarak onların dijital dönüşüm hikayelerine ortak olmak.',
    about-stat1-num: '500+',
    about-stat1-label: 'Proje',
    about-stat2-num: '150+',
    about-stat2-label: 'Müşteri',
    about-stat3-num: '50+',
    about-stat3-label: 'Uzman',

    /* Misyon & Vizyon */
    mission-vision-subtitle: 'Değerlerimiz',
    mission-vision-title: 'Misyon & <span class="gradient-text">Vizyon</span>',
    mission-vision-desc: 'Bizi yönlendiren değerler ve ulaşmayı hedeflediğimiz nokta.',
    mission-title: 'Misyonumuz',
    mission-desc: 'Müşterilerimizin iş süreçlerini dijital teknolojilerle dönüştürerek verimliliklerini artırmak, rekabet avantajı kazanmalarını sağlamak ve sürdürülebilir büyümelerine katkıda bulunmak. Her projede müşteri memnuniyetini en üst düzeyde tutarak, güvenilir ve yenilikçi çözümler sunmak temel önceliğimizdir.',
    vision-title: 'Vizyonumuz',
    vision-desc: 'Bölgemizin önde gelen teknoloji danışmanlık firması olmanın yanı sıra, küresel ölçekte tanınan ve tercih edilen bir marka haline gelmek. Dijital dönüşüm alanında trend belirleyici olmak, sürekli yenilikçi çözümler geliştirerek sektöre yön vermek ve topluma değer katan projelere imza atmak en büyük hedefimizdir.',

    /* Değerler */
    values-title: 'Şirket <span class="gradient-text">Değerlerimiz</span>',
    values-desc: 'Bizi biz yapan temel değerlerimizle her projede fark yaratıyoruz.',
    value1-title: 'Müşteri Odaklılık',
    value1-desc: 'Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak onlara özel çözümler sunuyor, memnuniyetlerini her şeyin üzerinde tutuyoruz.',
    value2-title: 'Yenilikçilik',
    value2-desc: 'Teknolojideki son trendleri takip ediyor, sürekli kendimizi geliştirerek en güncel çözümleri müşterilerimize sunuyoruz.',
    value3-title: 'Şeffaflık',
    value3-desc: 'Tüm süreçlerimizde açık iletişim ve şeffaflık ilkesiyle hareket ediyor, müşterilerimizi her adımda bilgilendiriyoruz.',
    value4-title: 'Sürdürülebilirlik',
    value4-desc: 'Uzun vadeli ilişkiler kuruyor, çevre dostu ve sürdürülebilir teknoloji çözümleri geliştirerek geleceğe katkı sağlıyoruz.',

    /* Ekip */
    team-subtitle: 'Ekibimiz',
    team-title: 'Yönetim <span class="gradient-text">Ekibimiz</span>',
    team-desc: 'Deneyimli ve tutkulu ekibimizle her projede fark yaratıyoruz.',
    team1-name: 'Ahmet Yıldız',
    team1-title: 'CEO & Kurucu Ortak',
    team1-desc: '15 yıllık iş danışmanlığı ve teknoloji yönetimi deneyimiyle şirketimizin vizyonunu yönlendiriyor.',
    team2-name: 'Elif Korkmaz',
    team2-title: 'CTO & Kurucu Ortak',
    team2-desc: '12 yıllık yazılım geliştirme ve teknoloji mimarisi deneyimiyle teknik ekibimizi yönetiyor.',
    team3-name: 'Can Öztürk',
    team3-title: 'COO & Operasyon Direktörü',
    team3-desc: '10 yıllık operasyon yönetimi ve süreç optimizasyonu deneyimiyle müşteri projelerimizi koordine ediyor.',
    team4-name: 'Deniz Aydın',
    team4-title: 'CMO & Pazarlama Direktörü',
    team4-desc: '8 yıllık dijital pazarlama ve marka yönetimi deneyimiyle şirketimizin büyüme stratejilerini yönetiyor.',
    team5-name: 'Selin Yavuz',
    team5-title: 'Finans Direktörü',
    team5-desc: '11 yıllık finans yönetimi ve stratejik planlama deneyimiyle mali operasyonlarımızı yönetiyor.',
    team6-name: 'Murat Kaya',
    team6-title: 'Ar-Ge Direktörü',
    team6-desc: '9 yıllık yazılım mimarisi ve Ar-Ge yönetimi deneyimiyle yenilikçi ürünler geliştiriyor.',
    team7-name: 'Büşra Çelik',
    team7-title: 'İK Direktörü',
    team7-desc: '7 yıllık insan kaynakları yönetimi deneyimiyle yetenekli ekibimizin büyümesini sağlıyor.',
    team8-name: 'Emre Aslan',
    team8-title: 'Müşteri İlişkileri Direktörü',
    team8-desc: '6 yıllık müşteri deneyimi yönetimi deneyimiyle müşteri memnuniyetini en üst düzeyde tutuyor.',

    /* Zaman Çizelgesi */
    timeline-subtitle: 'Tarihçe',
    timeline-title: 'Kurumsal <span class="gradient-text">Tarihçe</span>',
    timeline-desc: 'Kuruluşumuzdan bugüne önemli dönüm noktalarımız.',
    timeline1-year: '2016',
    timeline1-title: 'Kuruluş',
    timeline1-desc: 'Corporate Business, Ahmet Yıldız ve Elif Korkmaz tarafından İstanbul\'da kuruldu. İlk ofisimiz Levent\'te 3 kişilik bir ekiple faaliyete başladık.',
    timeline2-year: '2018',
    timeline2-title: 'İlk Büyük Proje',
    timeline2-desc: 'Finans sektöründe 500+ kullanıcılı kurumsal bir dijital dönüşüm projesini başarıyla tamamlayarak sektörde adımızı duyurduk.',
    timeline3-year: '2020',
    timeline3-title: 'Ekip Büyümesi',
    timeline3-desc: 'Ekibimiz 30 kişiye ulaştı ve yazılım geliştirme, veri analitiği ile bulut çözümleri birimlerimizi kurduk. Pandemi döneminde uzaktan çalışma modeline başarıyla geçtik.',
    timeline4-year: '2022',
    timeline4-title: 'Uluslararası Açılım',
    timeline4-desc: 'Avrupa pazarına giriş yaparak Almanya ve Hollanda\'da projeler yürütmeye başladık. Toplam tamamlanan proje sayımız 300\'ü geçti.',
    timeline5-year: '2024',
    timeline5-title: 'Yeni Ofis & Büyüme',
    timeline5-desc: 'Kadıköy\'de ikinci ofisimizi açtık ve ekibimizi 50+ uzmana çıkardık. Yapay zeka ve siber güvenlik alanlarında yeni hizmet birimlerimizi faaliyete geçirdik.',

    /* Hizmet Sayfası */
    services-banner-title: 'Hizmetlerimiz',
    services-banner-desc: 'İşletmenizin ihtiyaçlarına özel kapsamlı çözümler sunuyoruz.',
    services-breadcrumb-home: 'Ana Sayfa',
    services-breadcrumb-current: 'Hizmetler',
    services-detail-subtitle: 'Hizmetlerimiz',
    services-detail-title: 'Neler <span class="gradient-text">Sunuyoruz</span>?',
    services-detail-desc: 'Her biri alanında uzman ekiplerimizle işletmenize değer katacak çözümler geliştiriyoruz.',
    sd1-title: 'Kurumsal Danışmanlık',
    sd1-desc: 'İşletmenizin stratejik hedeflerine ulaşması için yol haritası çiziyor, iş süreçlerinizi analiz ederek verimlilik artırıcı çözümler sunuyoruz. Stratejik yönetim, organizasyonel dönüşüm, süreç optimizasyonu ve performans yönetimi alanlarında danışmanlık hizmeti veriyoruz. Deneyimli danışmanlarımız, sektörünüzün dinamiklerine uygun özelleştirilmiş stratejiler geliştirerek rekabet avantajı kazanmanızı sağlar.',
    sd2-title: 'Dijital Dönüşüm',
    sd2-desc: 'İşletmenizi dijital çağa taşıyacak kapsamlı dönüşüm stratejileri geliştiriyor ve uyguluyoruz. Dijital olgunluk değerlendirmesi, teknoloji yol haritası oluşturma, iş süreçlerinin dijitalleştirilmesi ve değişim yönetimi konularında uçtan uca hizmet sunuyoruz.',
    sd3-title: 'Yazılım Geliştirme',
    sd3-desc: 'İhtiyaçlarınıza özel web ve mobil uygulamalar, kurumsal yazılım çözümleri ve API entegrasyonları geliştiriyoruz. Modern teknolojiler kullanarak ölçeklenebilir ve güvenilir yazılımlar üretiyoruz. Agile ve DevOps metodolojileriyle çalışarak projelerinizi hızlı ve esnek bir şekilde hayata geçiriyoruz.',
    sd4-title: 'Veri Analitiği & İş Zekası',
    sd4-desc: 'Verilerinizi anlamlı içgörülere dönüştürüyor, stratejik kararlar almanızı sağlıyoruz. Büyük veri analizi, iş zekası panoları, öngörücü analitik modelleri ve veri görselleştirme çözümleri sunuyoruz. Makine öğrenmesi algoritmalarıyla geleceğe yönelik tahmin modelleri geliştiriyoruz.',
    sd5-title: 'Bulut Çözümleri',
    sd5-desc: 'Bulut mimarisi danışmanlığı, geçiş stratejileri ve yönetilen bulut hizmetleriyle altyapınızı modernize ediyoruz. AWS, Azure ve Google Cloud platformlarında uzman ekibimizle ihtiyacınıza en uygun bulut çözümlerini tasarlıyor, mevcut altyapınızı buluta taşıyor ve 7/24 yönetilen hizmetlerle operasyonlarınızı güvence altına alıyoruz.',
    sd6-title: 'Siber Güvenlik',
    sd6-desc: 'Dijital varlıklarınızı korumak için kapsamlı güvenlik çözümleri sunuyoruz. Güvenlik değerlendirmeleri, sızma testleri, güvenlik duvarı yapılandırması, olay müdahale planlaması ve uyumluluk danışmanlığı hizmetlerimizle işletmenizin siber dayanıklılığını artırıyoruz.',
    sd-link: 'Hemen Başvurun',

    /* Süreç Adımları */
    process-subtitle: 'Sürecimiz',
    process-title: 'Çalışma <span class="gradient-text">Sürecimiz</span>',
    process-desc: 'Projelerimizi 4 adımda hayata geçiriyor, her aşamada şeffaf iletişim sağlıyoruz.',
    step1-title: 'Keşif & Analiz',
    step1-desc: 'İhtiyaçlarınızı derinlemesine analiz ediyor, mevcut durumu değerlendirerek proje kapsamını ve hedeflerini netleştiriyoruz.',
    step2-title: 'Planlama & Tasarım',
    step2-desc: 'Proje yol haritasını oluşturuyor, teknoloji mimarisini tasarlıyor ve detaylı iş planını sizinle paylaşıyoruz.',
    step3-title: 'Geliştirme & Uygulama',
    step3-desc: 'Agile metodolojiyle geliştirme sürecini yürütüyor, düzenli sprint teslimatlarıyla ilerlemeyi şeffaf bir şekilde raporluyoruz.',
    step4-title: 'Test & Teslimat',
    step4-desc: 'Kapsamlı test süreçlerinin ardından projenizi canlıya alıyor ve ekibinizi kullanım konusunda eğiterek sürekli destek sağlıyoruz.',

    /* Fiyatlandırma */
    pricing-subtitle: 'Fiyatlandırma',
    pricing-title: 'Esnek <span class="gradient-text">Fiyatlandırma</span>',
    pricing-desc: 'İşletmenizin büyüklüğüne ve ihtiyaçlarına uygun esnek paketler sunuyoruz.',
    pricing1-name: 'Basic',
    pricing1-price: '9.999',
    pricing1-desc: 'Küçük işletmeler için temel çözüm paketi.',
    pricing1-feat1: '2 Danışmanlık Seansı / Ay',
    pricing1-feat2: 'Temel Dijital Değerlendirme',
    pricing1-feat3: 'E-posta Desteği',
    pricing1-feat4: 'Aylık Raporlama',
    pricing1-nofeat1: 'Öncelikli Destek',
    pricing1-nofeat2: 'Özel Yazılım Geliştirme',
    pricing-btn: 'Paketi Seç',
    pricing2-badge: 'Popüler',
    pricing2-name: 'Professional',
    pricing2-price: '24.999',
    pricing2-desc: 'Orta ölçekli işletmeler için kapsamlı paket.',
    pricing2-feat1: '6 Danışmanlık Seansı / Ay',
    pricing2-feat2: 'Kapsamlı Dijital Dönüşüm',
    pricing2-feat3: 'Öncelikli E-posta & Telefon Desteği',
    pricing2-feat4: 'Haftalık Raporlama',
    pricing2-feat5: '1 Adet Özel Yazılım Projesi',
    pricing2-nofeat1: '7/7 Acil Destek',
    pricing3-name: 'Enterprise',
    pricing3-price: '49.999',
    pricing3-desc: 'Büyük ölçekli işletmeler için kurumsal paket.',
    pricing3-feat1: 'Sınırsız Danışmanlık Seansı',
    pricing3-feat2: 'Tam Kapsamlı Dijital Dönüşüm',
    pricing3-feat3: '7/7 Öncelikli Destek',
    pricing3-feat4: 'Gerçek Zamanlı Raporlama',
    pricing3-feat5: '3 Adet Özel Yazılım Projesi',
    pricing3-feat6: 'Özel Güvenlik Danışmanlığı',

    /* İletişim Sayfası */
    contact-banner-title: 'İletişim',
    contact-banner-desc: 'Sorularınız için bizimle iletişime geçin, size en kısa sürede dönüş yapalım.',
    contact-breadcrumb-home: 'Ana Sayfa',
    contact-breadcrumb-current: 'İletişim',
    contact-form-title: 'Bize Mesaj Gönderin',
    form-name-label: 'Ad Soyad *',
    form-name-placeholder: 'Adınız ve soyadınız',
    form-email-label: 'E-posta Adresi *',
    form-email-placeholder: 'ornek@email.com',
    form-phone-label: 'Telefon Numarası *',
    form-phone-placeholder: '+90 (5__) ___ __ __',
    form-subject-label: 'Konu *',
    form-subject-placeholder: 'Konu Seçiniz',
    form-subject1: 'Danışmanlık Hizmeti',
    form-subject2: 'Dijital Dönüşüm',
    form-subject3: 'Yazılım Geliştirme',
    form-subject4: 'Veri Analitiği',
    form-subject5: 'Bulut Çözümleri',
    form-subject6: 'Siber Güvenlik',
    form-subject7: 'Diğer',
    form-message-label: 'Mesajınız *',
    form-message-placeholder: 'Mesajınızı buraya yazın...',
    form-submit: 'Mesaj Gönder',
    form-success: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    form-error-name: 'Lütfen adınızı girin.',
    form-error-email: 'Lütfen geçerli bir e-posta adresi girin.',
    form-error-phone: 'Lütfen geçerli bir telefon numarası girin.',
    form-error-subject: 'Lütfen bir konu seçin.',
    form-error-message: 'Lütfen mesajınızı girin.',

    contact-info-title: 'İletişim Bilgileri',
    contact-addr-title: 'Adresimiz',
    contact-addr: 'Levent Mahallesi, Teknik Sokak No:42, Kat:5<br>Beşiktaş / İstanbul, 34330',
    contact-phone-title: 'Telefon',
    contact-phone: '+90 (212) 444 0 123<br>+90 (212) 444 0 124',
    contact-email-title: 'E-posta',
    contact-email: 'info@corporatebusiness.com<br>destek@corporatebusiness.com',
    contact-hours-title: 'Çalışma Saatleri',
    contact-hours: 'Pazartesi - Cuma: 09:00 - 18:00<br>Cumartesi: 10:00 - 16:00',

    /* Toast Bildirimleri */
    toast-cookie-title: 'Çerez Politikası',
    toast-cookie-msg: 'Size daha iyi bir deneyim sunmak için çerezler kullanıyoruz.',
    toast-cookie-btn: 'Kabul Et',
    toast-welcome-title: 'Hoş Geldiniz!',
    toast-welcome-msg: 'Corporate Business\'e hoş geldiniz. Size nasıl yardımcı olabiliriz?',

    /* Meta */
    meta-desc: 'Kurumsal iş çözümleri, danışmanlık, dijital dönüşüm ve yazılım geliştirme hizmetleri ile işinizi geleceğe taşıyoruz.',
    meta-desc-about: 'Corporate Business olarak 10+ yıldır işletmelere danışmanlık, dijital dönüşüm ve yazılım çözümleri sunuyoruz. Hikayemizi keşfedin.',
    meta-desc-services: 'Kurumsal danışmanlık, dijital dönüşüm, yazılım geliştirme, veri analitiği, bulut çözümleri ve güvenlik hizmetlerimizi keşfedin.',
    meta-desc-contact: 'Corporate Business ile iletişime geçin. Adres, telefon, e-posta ve iletişim formumuzla size yardımcı olmaktan mutluluk duyarız.',
    meta-keywords: 'kurumsal, iş danışmanlığı, dijital dönüşüm, yazılım, teknoloji',
    meta-keywords-about: 'hakkımızda, kurumsal, şirket hikayesi, ekip',
    meta-keywords-services: 'hizmetler, danışmanlık, dijital dönüşüm, yazılım, bulut, güvenlik',
    meta-keywords-contact: 'iletişim, iletişim formu, adres, telefon, e-posta',
    about-stat1-label-short: 'Proje',
    about-stat2-label-short: 'Müşteri',
    about-stat3-label-short: 'Uzman'
  },

  en: {
    /* Navbar */
    nav-home: 'Home',
    nav-about: 'About Us',
    nav-services: 'Services',
    nav-contact: 'Contact',
    nav-lang-tr: 'TR',
    nav-lang-en: 'EN',

    /* Hero */
    hero-badge: 'Corporate Solutions',
    hero-title: 'Shaping the',
    hero-title-span: 'Future',
    hero-desc: 'We bring your business to the digital age and help you gain competitive advantage with innovative solutions. We are with you with 10+ years of experience.',
    hero-btn-services: 'Our Services',
    hero-btn-contact: 'Contact Us',

    /* Features */
    features-subtitle: 'Why Us',
    features-title: 'Why Choose <span class="gradient-text">Us</span>?',
    features-desc: 'We make a difference with the values we offer to our customers and aim for excellence in every project.',
    feature1-title: 'Innovation',
    feature1-desc: 'By closely following the latest developments in technology, we offer the most innovative solutions to your business and ensure you stay one step ahead in the competition.',
    feature2-title: 'Reliability',
    feature2-desc: 'We act with the principles of transparency and accountability in our projects, fulfilling our commitments on time and completely.',
    feature3-title: 'Quality',
    feature3-desc: 'We provide service at international quality standards, aiming for the highest satisfaction with meticulous quality control processes at every stage.',

    /* Services */
    services-subtitle: 'Our Services',
    services-title: 'What We <span class="gradient-text">Offer</span>?',
    services-desc: 'We offer comprehensive solutions tailored to the needs of your business and are with you at every stage.',
    service1-title: 'Consulting',
    service1-desc: 'We take your business to the next level with our many years of consulting experience in strategic management, business process optimization and corporate transformation.',
    service2-title: 'Digital Transformation',
    service2-desc: 'We carry your business processes to digital platforms and develop comprehensive transformation strategies that will increase your efficiency with automation and modern technologies.',
    service3-title: 'Software Development',
    service3-desc: 'We strengthen your digital infrastructure with custom web and mobile applications, enterprise software solutions and API integrations tailored to your needs.',
    service4-title: 'Data Analytics',
    service4-desc: 'We transform your data into meaningful insights with big data analysis, business intelligence reporting and predictive analytics models, enabling you to make strategic decisions.',
    service5-title: 'Cloud Solutions',
    service5-desc: 'We make your infrastructure flexible, scalable and cost-effective with cloud architecture consulting, migration strategies and managed cloud services.',
    service6-title: 'Security',
    service6-desc: 'We protect your digital assets with cybersecurity assessments, penetration tests, firewall configuration and emergency response plans.',
    service-read-more: 'Explore Details',

    /* Statistics */
    stat1-num: '500',
    stat1-label: 'Projects Completed',
    stat2-num: '150',
    stat2-label: 'Happy Clients',
    stat3-num: '50',
    stat3-label: 'Expert Staff',
    stat4-num: '10',
    stat4-label: 'Years Experience',

    /* Brands */
    brands-title: 'Our Trusted Partners',

    /* Testimonials */
    testimonials-subtitle: 'References',
    testimonials-title: 'What Our <span class="gradient-text">Clients Say</span>?',
    testimonials-desc: 'The satisfaction of our customers in dozens of successful projects is our greatest reference.',
    testimonial1-text: '"Working with Corporate Business completely transformed our business processes. Thanks to their professional approach and innovative solutions, our efficiency increased by 40%. We are grateful to them."',
    testimonial1-name: 'Ayşe Yılmaz',
    testimonial1-title: 'CEO, TechInnovate',
    testimonial2-text: '"The team that guided us in our digital transformation project did a job far beyond our expectations. We received transparent communication and strong technical support throughout the process."',
    testimonial2-name: 'Mehmet Demir',
    testimonial2-title: 'General Manager, GlobalSoft',
    testimonial3-text: '"The dedication and quality approach they showed during the software development process is truly commendable. They delivered our project on time and in full. I definitely recommend them."',
    testimonial3-name: 'Zeynep Kaya',
    testimonial3-title: 'IT Director, FinansBank',

    /* Blog */
    blog-subtitle: 'Blog & News',
    blog-title: 'Latest <span class="gradient-text">Articles</span>',
    blog-desc: 'Discover the latest developments, tips and success stories in the industry.',
    blog1-category: 'Digital Transformation',
    blog1-title: '5 Strategies for Success in Digital Transformation',
    blog1-desc: 'We discuss the key strategies and points to consider to lead your business to success in the digital transformation journey.',
    blog1-date: 'May 15, 2026',
    blog2-category: 'Artificial Intelligence',
    blog2-title: 'Optimizing Business Processes with AI',
    blog2-desc: 'We examine how AI technologies can be integrated into business processes to increase efficiency and gain competitive advantage.',
    blog2-date: 'May 8, 2026',
    blog3-category: 'Cybersecurity',
    blog3-title: 'Cybersecurity Trends and Precautions in 2026',
    blog3-desc: 'We analyze next-generation cyber threats, security measures and actions you need to take to protect your business.',
    blog3-date: 'May 1, 2026',
    blog-author: 'Admin',
    blog-read-more: 'Read More',

    /* CTA */
    cta-badge: "Let's Get Started",
    cta-title: "Let&rsquo;s Bring Your <span class='gradient-text'>Project</span> to Life",
    cta-desc: 'You are in the right place to bring your project to life. Contact us now for a free preliminary consultation with our expert team.',
    cta-btn: 'Contact Us Now',

    /* FAQ */
    faq-subtitle: 'FAQ',
    faq-title: 'Frequently Asked <span class="gradient-text">Questions</span>',
    faq-desc: 'You can find answers to the most frequently asked questions about our services here.',
    faq1-q: 'Which industries do you serve?',
    faq1-a: 'We serve many different sectors, especially finance, healthcare, manufacturing, retail, logistics and e-commerce. We develop customized solutions suitable for the unique dynamics of each sector and fully adapt to the needs of your business.',
    faq2-q: 'What are your project delivery times?',
    faq2-a: 'The project delivery time varies depending on the scope and complexity of the project. Small-scale projects can be completed within 2-4 weeks, while large-scale corporate projects can take 3-6 months. We provide you with a clear timeline during the discovery and planning phase.',
    faq3-q: 'How does your quotation process work?',
    faq3-a: 'First, we have a free preliminary meeting to understand your needs. Then we analyze the scope of the project in detail and prepare a customized quotation for you. Our quotation includes the project schedule, delivery plan and cost details transparently.',
    faq4-q: 'Do you have technical support service?',
    faq4-a: 'Yes, we provide post-delivery technical support for all our projects. In addition to our standard maintenance agreements, we also have 24/7 emergency support packages. Our expert team is with you for all kinds of technical issues.',
    faq5-q: 'Can we see your references?',
    faq5-a: 'Of course. We would be happy to share our reference projects and customer reviews related to your industry from our 150+ happy clients. Within the framework of confidentiality agreements, we can provide appropriate references during the meeting.',

    /* Footer */
    footer-about-desc: 'With over 10 years of experience, we bring your business to the digital age and help you gain competitive advantage with innovative solutions. We make a difference in every project with our customer satisfaction-oriented approach.',
    footer-quick-links: 'Quick Links',
    footer-services-title: 'Services',
    footer-contact-title: 'Contact Info',
    footer-home: 'Home',
    footer-about: 'About Us',
    footer-services-link: 'Services',
    footer-contact-link: 'Contact',
    footer-faq: 'FAQ',
    footer-service1: 'Consulting',
    footer-service2: 'Digital Transformation',
    footer-service3: 'Software Development',
    footer-service4: 'Data Analytics',
    footer-service5: 'Cloud Solutions',
    footer-service6: 'Security',
    footer-addr: 'Levent District, Teknik Street No:42, Beşiktaş / Istanbul',
    footer-phone: '+90 (212) 444 0 123',
    footer-email: 'info@corporatebusiness.com',
    footer-hours: 'Monday - Friday: 09:00 - 18:00',
    footer-copyright: '© 2024 Efesoftlab. All rights reserved.',
    footer-privacy: 'Privacy Policy',
    footer-terms: 'Terms of Use',

    /* About Page */
    about-banner-title: 'About Us',
    about-banner-desc: 'With over 10 years of experience, we carry your business into the future.',
    about-breadcrumb-home: 'Home',
    about-breadcrumb-current: 'About Us',
    about-story-title: 'Our Story',
    about-story-p1: 'Corporate Business was founded in Istanbul in 2016 by two entrepreneur engineers. Since the first day we were founded, we have made it our mission to be a reliable business partner for companies in their digital transformation journey. Our journey, which started with a small team, has today become one of the leading technology consulting firms in Turkey with more than 50 expert staff.',
    about-story-p2: 'Thanks to our customer-oriented approach, innovative solutions and uncompromising quality standards, we have delivered over 500 successful projects to more than 150 corporate clients. We have developed value-creating solutions in many different sectors, especially finance, healthcare, manufacturing, retail and logistics.',
    about-story-p3: 'Today, we are taking firm steps towards becoming an international player carrying out projects not only in Turkey but also in European and Middle Eastern markets. Our goal is to be a part of the digital transformation stories of more businesses every day.',
    about-stat1-num: '500+',
    about-stat1-label: 'Projects',
    about-stat2-num: '150+',
    about-stat2-label: 'Clients',
    about-stat3-num: '50+',
    about-stat3-label: 'Experts',

    /* Mission & Vision */
    mission-vision-subtitle: 'Our Values',
    mission-vision-title: 'Mission & <span class="gradient-text">Vision</span>',
    mission-vision-desc: 'The values that guide us and the point we aim to reach.',
    mission-title: 'Our Mission',
    mission-desc: 'To increase the efficiency of our customers by transforming their business processes with digital technologies, to help them gain competitive advantage and contribute to their sustainable growth. Our main priority is to provide reliable and innovative solutions while keeping customer satisfaction at the highest level in every project.',
    vision-title: 'Our Vision',
    vision-desc: 'To become a globally recognized and preferred brand as well as being the leading technology consulting firm in our region. Our greatest goal is to be a trendsetter in digital transformation, to direct the sector by constantly developing innovative solutions and to undertake projects that add value to society.',

    /* Values */
    values-title: 'Our <span class="gradient-text">Values</span>',
    values-desc: 'We make a difference in every project with our core values that make us who we are.',
    value1-title: 'Customer Focus',
    value1-desc: 'We understand the needs of our customers in the best way possible, offer them customized solutions and prioritize their satisfaction above everything else.',
    value2-title: 'Innovation',
    value2-desc: 'We follow the latest trends in technology, constantly improve ourselves and offer the most up-to-date solutions to our customers.',
    value3-title: 'Transparency',
    value3-desc: 'We act with the principle of open communication and transparency in all our processes and keep our customers informed at every step.',
    value4-title: 'Sustainability',
    value4-desc: 'We build long-term relationships, develop environmentally friendly and sustainable technology solutions, and contribute to the future.',

    /* Team */
    team-subtitle: 'Our Team',
    team-title: 'Our <span class="gradient-text">Management</span> Team',
    team-desc: 'We make a difference in every project with our experienced and passionate team.',
    team1-name: 'Ahmet Yıldız',
    team1-title: 'CEO & Co-Founder',
    team1-desc: 'Leads our company vision with 15 years of business consulting and technology management experience.',
    team2-name: 'Elif Korkmaz',
    team2-title: 'CTO & Co-Founder',
    team2-desc: 'Manages our technical team with 12 years of software development and technology architecture experience.',
    team3-name: 'Can Öztürk',
    team3-title: 'COO & Operations Director',
    team3-desc: 'Coordinates customer projects with 10 years of operations management and process optimization experience.',
    team4-name: 'Deniz Aydın',
    team4-title: 'CMO & Marketing Director',
    team4-desc: 'Manages our growth strategies with 8 years of digital marketing and brand management experience.',
    team5-name: 'Selin Yavuz',
    team5-title: 'Finance Director',
    team5-desc: 'Manages financial operations with 11 years of financial management and strategic planning experience.',
    team6-name: 'Murat Kaya',
    team6-title: 'R&D Director',
    team6-desc: 'Develops innovative products with 9 years of software architecture and R&D management experience.',
    team7-name: 'Büşra Çelik',
    team7-title: 'HR Director',
    team7-desc: 'Ensures the growth of our talented team with 7 years of human resources management experience.',
    team8-name: 'Emre Aslan',
    team8-title: 'Customer Relations Director',
    team8-desc: 'Maintains the highest level of customer satisfaction with 6 years of customer experience management experience.',

    /* Timeline */
    timeline-subtitle: 'History',
    timeline-title: 'Corporate <span class="gradient-text">History</span>',
    timeline-desc: 'Important milestones from our foundation to today.',
    timeline1-year: '2016',
    timeline1-title: 'Foundation',
    timeline1-desc: 'Corporate Business was founded by Ahmet Yıldız and Elif Korkmaz in Istanbul. We started operating with a team of 3 people in our first office in Levent.',
    timeline2-year: '2018',
    timeline2-title: 'First Major Project',
    timeline2-desc: 'We made our name known in the industry by successfully completing a corporate digital transformation project with 500+ users in the finance sector.',
    timeline3-year: '2020',
    timeline3-title: 'Team Growth',
    timeline3-desc: 'Our team reached 30 people and we established software development, data analytics and cloud solutions units. We successfully transitioned to the remote working model during the pandemic.',
    timeline4-year: '2022',
    timeline4-title: 'International Expansion',
    timeline4-desc: 'We entered the European market and started carrying out projects in Germany and the Netherlands. Our total number of completed projects exceeded 300.',
    timeline5-year: '2024',
    timeline5-title: 'New Office & Growth',
    timeline5-desc: 'We opened our second office in Kadıköy and increased our team to 50+ experts. We launched new service units in artificial intelligence and cybersecurity.',

    /* Services Page */
    services-banner-title: 'Our Services',
    services-banner-desc: 'We offer comprehensive solutions tailored to the needs of your business.',
    services-breadcrumb-home: 'Home',
    services-breadcrumb-current: 'Services',
    services-detail-subtitle: 'Our Services',
    services-detail-title: 'What We <span class="gradient-text">Offer</span>?',
    services-detail-desc: 'We develop solutions that will add value to your business with our expert teams in each field.',
    sd1-title: 'Corporate Consulting',
    sd1-desc: 'We draw a roadmap for your business to achieve its strategic goals, analyze your business processes and offer efficiency-enhancing solutions. We provide consulting services in strategic management, organizational transformation, process optimization and performance management.',
    sd2-title: 'Digital Transformation',
    sd2-desc: 'We develop and implement comprehensive transformation strategies that will take your business to the digital age. We offer end-to-end services in digital maturity assessment, technology roadmap creation, digitalization of business processes and change management.',
    sd3-title: 'Software Development',
    sd3-desc: 'We develop custom web and mobile applications, enterprise software solutions and API integrations tailored to your needs. We produce scalable and reliable software using modern technologies. We realize your projects quickly and flexibly by working with Agile and DevOps methodologies.',
    sd4-title: 'Data Analytics & BI',
    sd4-desc: 'We transform your data into meaningful insights and enable you to make strategic decisions. We offer big data analysis, business intelligence dashboards, predictive analytics models and data visualization solutions. We develop prediction models for the future with machine learning algorithms.',
    sd5-title: 'Cloud Solutions',
    sd5-desc: 'We modernize your infrastructure with cloud architecture consulting, migration strategies and managed cloud services. With our expert team on AWS, Azure and Google Cloud platforms, we design the most suitable cloud solutions for your needs.',
    sd6-title: 'Cybersecurity',
    sd6-desc: 'We offer comprehensive security solutions to protect your digital assets. We increase your cybersecurity resilience with security assessments, penetration tests, firewall configuration, incident response planning and compliance consulting services.',
    sd-link: 'Apply Now',

    /* Process Steps */
    process-subtitle: 'Our Process',
    process-title: 'Our Work <span class="gradient-text">Process</span>',
    process-desc: 'We bring our projects to life in 4 steps, providing transparent communication at every stage.',
    step1-title: 'Discovery & Analysis',
    step1-desc: 'We analyze your needs in depth, evaluate the current situation and clarify the scope and objectives of the project.',
    step2-title: 'Planning & Design',
    step2-desc: 'We create the project roadmap, design the technology architecture and share the detailed work plan with you.',
    step3-title: 'Development & Implementation',
    step3-desc: 'We carry out the development process with Agile methodology and transparently report progress with regular sprint deliveries.',
    step4-title: 'Testing & Delivery',
    step4-desc: 'After comprehensive testing processes, we launch your project, train your team and provide continuous support.',

    /* Pricing */
    pricing-subtitle: 'Pricing',
    pricing-title: 'Flexible <span class="gradient-text">Pricing</span>',
    pricing-desc: 'We offer flexible packages suitable for the size and needs of your business.',
    pricing1-name: 'Basic',
    pricing1-price: '9.999',
    pricing1-desc: 'Basic solution package for small businesses.',
    pricing1-feat1: '2 Consulting Sessions / Month',
    pricing1-feat2: 'Basic Digital Assessment',
    pricing1-feat3: 'Email Support',
    pricing1-feat4: 'Monthly Reporting',
    pricing1-nofeat1: 'Priority Support',
    pricing1-nofeat2: 'Custom Software Development',
    pricing-btn: 'Choose Plan',
    pricing2-badge: 'Popular',
    pricing2-name: 'Professional',
    pricing2-price: '24.999',
    pricing2-desc: 'Comprehensive package for medium-sized businesses.',
    pricing2-feat1: '6 Consulting Sessions / Month',
    pricing2-feat2: 'Comprehensive Digital Transformation',
    pricing2-feat3: 'Priority Email & Phone Support',
    pricing2-feat4: 'Weekly Reporting',
    pricing2-feat5: '1 Custom Software Project',
    pricing2-nofeat1: '24/7 Emergency Support',
    pricing3-name: 'Enterprise',
    pricing3-price: '49.999',
    pricing3-desc: 'Corporate package for large businesses.',
    pricing3-feat1: 'Unlimited Consulting Sessions',
    pricing3-feat2: 'Full Digital Transformation',
    pricing3-feat3: '24/7 Priority Support',
    pricing3-feat4: 'Real-time Reporting',
    pricing3-feat5: '3 Custom Software Projects',
    pricing3-feat6: 'Custom Security Consulting',

    /* Contact Page */
    contact-banner-title: 'Contact',
    contact-banner-desc: 'Contact us for your questions, we will get back to you as soon as possible.',
    contact-breadcrumb-home: 'Home',
    contact-breadcrumb-current: 'Contact',
    contact-form-title: 'Send Us a Message',
    form-name-label: 'Full Name *',
    form-name-placeholder: 'Your full name',
    form-email-label: 'Email Address *',
    form-email-placeholder: 'example@email.com',
    form-phone-label: 'Phone Number *',
    form-phone-placeholder: '+90 (5__) ___ __ __',
    form-subject-label: 'Subject *',
    form-subject-placeholder: 'Select a Subject',
    form-subject1: 'Consulting Service',
    form-subject2: 'Digital Transformation',
    form-subject3: 'Software Development',
    form-subject4: 'Data Analytics',
    form-subject5: 'Cloud Solutions',
    form-subject6: 'Cybersecurity',
    form-subject7: 'Other',
    form-message-label: 'Your Message *',
    form-message-placeholder: 'Type your message here...',
    form-submit: 'Send Message',
    form-success: 'Your message has been sent successfully! We will get back to you as soon as possible.',
    form-error-name: 'Please enter your name.',
    form-error-email: 'Please enter a valid email address.',
    form-error-phone: 'Please enter a valid phone number.',
    form-error-subject: 'Please select a subject.',
    form-error-message: 'Please enter your message.',

    contact-info-title: 'Contact Info',
    contact-addr-title: 'Our Address',
    contact-addr: 'Levent District, Teknik Street No:42, Floor:5<br>Beşiktaş / Istanbul, 34330',
    contact-phone-title: 'Phone',
    contact-phone: '+90 (212) 444 0 123<br>+90 (212) 444 0 124',
    contact-email-title: 'Email',
    contact-email: 'info@corporatebusiness.com<br>support@corporatebusiness.com',
    contact-hours-title: 'Working Hours',
    contact-hours: 'Monday - Friday: 09:00 - 18:00<br>Saturday: 10:00 - 16:00',

    /* Toast */
    toast-cookie-title: 'Cookie Policy',
    toast-cookie-msg: 'We use cookies to provide you with a better experience.',
    toast-cookie-btn: 'Accept',
    toast-welcome-title: 'Welcome!',
    toast-welcome-msg: 'Welcome to Corporate Business. How can we help you?',

    /* Meta */
    meta-desc: 'We carry your business to the future with corporate business solutions, consulting, digital transformation and software development services.',
    meta-desc-about: 'For over 10 years, Corporate Business has been providing consulting, digital transformation and software solutions to businesses. Discover our story.',
    meta-desc-services: 'Discover our corporate consulting, digital transformation, software development, data analytics, cloud solutions and security services.',
    meta-desc-contact: 'Contact Corporate Business. We would be happy to assist you with our address, phone, email and contact form.',
    meta-keywords: 'corporate, business consulting, digital transformation, software, technology',
    meta-keywords-about: 'about us, corporate, company story, team',
    meta-keywords-services: 'services, consulting, digital transformation, software, cloud, security',
    meta-keywords-contact: 'contact, contact form, address, phone, email',
    about-stat1-label-short: 'Projects',
    about-stat2-label-short: 'Clients',
    about-stat3-label-short: 'Experts'
  }
};

let currentLang = localStorage.getItem('efesoftlab-lang') || 'tr';

// ===== Dil Değiştirme Fonksiyonu =====
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('efesoftlab-lang', lang);

  // data-i18n ile işaretlenmiş tüm elemanları güncelle
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const text = translations[lang][key];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', text);
      } else if (el.tagName === 'META') {
        el.setAttribute('content', text);
      } else if (el.tagName === 'SELECT') {
        const optKey = key.replace('-label', '');
        // Seçenekler ayrı ayrı güncellenir
      } else {
        el.innerHTML = text;
      }
    }
  });

  // Select seçeneklerini güncelle
  document.querySelectorAll('select[data-i18n-options]').forEach(select => {
    const baseKey = select.getAttribute('data-i18n-options');
    select.querySelectorAll('option').forEach((opt, i) => {
      if (i === 0) {
        opt.textContent = translations[lang][baseKey + '-placeholder'] || opt.textContent;
      } else {
        const optKey = baseKey + (i);
        if (translations[lang] && translations[lang][optKey]) {
          opt.textContent = translations[lang][optKey];
        }
      }
    });
  });

  // Spesifik select seçeneklerini güncelle
  const subjectSelect = document.getElementById('subject');
  if (subjectSelect) {
    const opts = subjectSelect.querySelectorAll('option');
    const keys = ['form-subject-placeholder', 'form-subject1', 'form-subject2', 'form-subject3', 'form-subject4', 'form-subject5', 'form-subject6', 'form-subject7'];
    opts.forEach((opt, i) => {
      if (translations[lang] && translations[lang][keys[i]]) {
        opt.textContent = translations[lang][keys[i]];
      }
    });
  }

  // Dil düğmelerini güncelle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active-lang', btnLang === lang);
  });

  // Html lang özelliğini güncelle
  document.documentElement.setAttribute('lang', lang === 'tr' ? 'tr' : 'en');

  // Sayfa başlığını güncelle
  const pageKey = document.body.getAttribute('data-page');
  if (pageKey && translations[lang] && translations[lang][pageKey]) {
    document.title = translations[lang][pageKey] + ' | Efesoftlab';
  }

  // Meta açıklamayı güncelle
  const metaKey = document.body.getAttribute('data-meta-desc');
  const metaKeywordsKey = document.body.getAttribute('data-meta-keywords');
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaDesc && metaKey && translations[lang][metaKey]) {
    metaDesc.setAttribute('content', translations[lang][metaKey]);
  }
  if (metaKeywords && metaKeywordsKey && translations[lang][metaKeywordsKey]) {
    metaKeywords.setAttribute('content', translations[lang][metaKeywordsKey]);
  }
}

// ===== Sayfa Yüklendiğinde =====
document.addEventListener('DOMContentLoaded', () => {

  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 600);
    });
    // Fallback: en geç 3 saniye sonra kaldır
    setTimeout(() => {
      if (!preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
      }
    }, 3000);
  }

  // ===== Dil Değiştirme =====
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      changeLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Mevcut dili uygula
  changeLanguage(currentLang);

  // ===== Karanlık Mod =====
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('i');
  const currentTheme = localStorage.getItem('efesoftlab-theme');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('efesoftlab-theme', 'light');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('efesoftlab-theme', 'dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }
  });

  // ===== Mobil Menü =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks?.classList.toggle('open');
  });

  // Mobil menü link tıklamasında kapat
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('open');
    });
  });

  // ===== Sabit Navbar (Scroll) =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // ===== Sade Kaydırma =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // ===== Sayaç Animasyonu =====
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    let current = 0;

    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        return;
      }
      counter.textContent = current;
      requestAnimationFrame(() => setTimeout(update, 30));
    };

    update();
  };

  // IntersectionObserver ile sayaçları başlat
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ===== SSS Akordeon =====
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      faqQuestions.forEach(q => q.parentElement.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ===== Form Validasyonu =====
  const contactForm = document.getElementById('contactForm');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const fields = [
      { id: 'name', errorId: 'nameError', messageKey: 'form-error-name', validation: (v) => v.length > 0 },
      { id: 'email', errorId: 'emailError', messageKey: 'form-error-email', validation: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'phone', errorId: 'phoneError', messageKey: 'form-error-phone', validation: (v) => /^[\d\s\+\-\(\)]{7,20}$/.test(v) },
      { id: 'subject', errorId: 'subjectError', messageKey: 'form-error-subject', validation: (v) => v !== '' },
      { id: 'message', errorId: 'messageError', messageKey: 'form-error-message', validation: (v) => v.length > 0 }
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const formGroup = input?.closest('.form-group');
      const errorEl = document.getElementById(field.errorId);

      if (input && formGroup && errorEl) {
        const value = input.value.trim();

        if (!value || !field.validation(value)) {
          formGroup.classList.add('error');
          errorEl.textContent = translations[currentLang][field.messageKey] || field.messageKey;
          isValid = false;
        } else {
          formGroup.classList.remove('error');
        }
      }
    });

    if (isValid) {
      const btn = contactForm.querySelector('.btn-primary');
      if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...');
        btn.disabled = true;
      }
      setTimeout(() => {
        // Başarılı bildirimi göster
        showToast(
          currentLang === 'tr' ? 'Başarılı!' : 'Success!',
          translations[currentLang]['form-success'],
          'success'
        );
        contactForm.reset();
        if (btn) {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + translations[currentLang]['form-submit'];
          btn.disabled = false;
        }
      }, 1500);
    }
  });

  // Gerçek zamanlı validasyon
  document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(el => {
    el.addEventListener('input', () => {
      const formGroup = el.closest('.form-group');
      if (formGroup?.classList.contains('error')) {
        formGroup.classList.remove('error');
      }
    });
  });

  // ===== Scroll Animasyonları =====
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        animateObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animateElements.forEach(el => animateObserver.observe(el));

  // ===== Aktif Nav Linki =====
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const setActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', setActiveLink);

  // ===== Yorum Kaydırıcısı =====
  const carousel = document.querySelector('.testimonials-carousel');
  if (carousel) {
    const track = carousel.querySelector('.testimonials-track');
    const cards = carousel.querySelectorAll('.testimonial-card');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentSlide = 0;
    let autoPlayInterval;
    const slideCount = cards.length;

    // Dotları oluştur
    if (dotsContainer) {
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(index) {
      currentSlide = index;
      const cardWidth = cards[0].offsetWidth + 24; // gap dahil
      track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
      document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide((currentSlide + 1) % slideCount);
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    startAutoPlay();

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  }

  // ===== Yukarı Çık Butonu =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // SVG progress ring
    const progressRing = backToTop.querySelector('circle');
    if (progressRing) {
      const circumference = 2 * Math.PI * 24; // r=24
      progressRing.style.strokeDasharray = circumference;

      window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = window.pageYOffset / scrollTotal;
        const offset = circumference - (scrollProgress * circumference);
        progressRing.style.strokeDashoffset = offset;
      });
    }
  }

  // ===== Toast Bildirim Sistemi =====
  function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-times-circle',
      info: 'fas fa-info-circle'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-icon"><i class="${icons[type] || icons.info}"></i></div>
      <div class="toast-body">
        <h4>${title}</h4>
        <p>${message}</p>
      </div>
      <button class="toast-close"><i class="fas fa-times"></i></button>
    `;

    container.appendChild(toast);

    // Kapatma butonu
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    });

    // Otomatik kapat (5 sn)
    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
      }
    }, 5000);
  }

  // Toast container oluştur (eğer yoksa)
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // ===== Çerez Onayı =====
  const cookieConsent = document.getElementById('cookieConsent');
  const cookieAcceptBtn = document.getElementById('cookieAccept');

  if (cookieConsent && !localStorage.getItem('efesoftlab-cookie')) {
    setTimeout(() => {
      cookieConsent.classList.add('show');
    }, 1000);
  }

  cookieAcceptBtn?.addEventListener('click', () => {
    localStorage.setItem('efesoftlab-cookie', 'true');
    cookieConsent.classList.remove('show');
    setTimeout(() => { cookieConsent.style.display = 'none'; }, 500);
  });

  // ===== Hoş Geldin Bildirimi =====
  const welcomeShown = sessionStorage.getItem('efesoftlab-welcome');
  if (!welcomeShown) {
    setTimeout(() => {
      showToast(
        translations[currentLang]['toast-welcome-title'],
        translations[currentLang]['toast-welcome-msg'],
        'info'
      );
      sessionStorage.setItem('efesoftlab-welcome', 'true');
    }, 2000);
  }

  // ===== Yazan Animasyonu (Typewriter) =====
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const texts = currentLang === 'tr'
      ? ['Geleceği Şekillendiriyoruz', 'Dijital Dönüşüm Sağlıyoruz', 'İnovasyonu Yakalıyoruz']
      : ['Shaping the Future', 'Driving Digital Transformation', 'Embracing Innovation'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
      const currentText = texts[textIndex];
      if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;

        if (charIndex === currentText.length) {
          isDeleting = true;
          typeSpeed = 2000; // Bekleme süresi
        }
      } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typeSpeed = 500;
        }
      }

      setTimeout(typeEffect, typeSpeed);
    }

    setTimeout(typeEffect, 1000);
  }

  // ===== Paralaks Efekti (Hero) =====
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset;
      heroBg.style.transform = `translateY(${scrollPos * 0.4}px) scale(1.1)`;
    });
  }

  // ===== Sayfa Geçişi (Giriş Animasyonu) =====
  document.body.classList.add('page-enter');
  setTimeout(() => {
    document.body.classList.remove('page-enter');
    document.body.classList.add('page-enter-active');
  }, 100);

  // ===== Lightbox Galeri =====
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src || img.getAttribute('data-src') || img.querySelector('img')?.src;
        lightbox.classList.add('open');
      }
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
    }
  });

  // ===== Canlı Ziyaretçi Sayacı =====
  const visitorCount = document.getElementById('visitorCount');
  if (visitorCount) {
    // Statik rastgele sayı
    const baseCount = 847;
    const randomAdd = Math.floor(Math.random() * 153);
    visitorCount.textContent = baseCount + randomAdd;

    // Her 30 saniyede bir güncelle
    setInterval(() => {
      const current = parseInt(visitorCount.textContent);
      visitorCount.textContent = current + Math.floor(Math.random() * 3) + 1;
    }, 30000);
  }

  // ===== Sayfa Altı Duyuru Çubuğu =====
  const announcementTrack = document.querySelector('.announcement-track');
  if (announcementTrack) {
    // Duyuru metnini iki kez kopyala (kesintisiz scroll için)
    const clone = announcementTrack.cloneNode(true);
    announcementTrack.parentElement.appendChild(clone);
  }

  // ===== WhatsApp Tık Takibi =====
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  whatsappBtn?.addEventListener('click', () => {
    // WhatsApp iletişim takibi
  });

  // ===== Kenarlık Animasyonu =====
  // CSS ile zaten animasyonlu

});

  // ===== Mobil Dokunmatik Kaydırma Desteği =====
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
        if (isElementInViewport(btn.closest('.property-carousel, .testimonials-carousel, .testimonial-carousel'))) {
          if (diff > 0) btn.click();
          else {
            var prevBtn = btn.closest('.property-carousel, .testimonials-carousel, .testimonial-carousel').querySelector('.carousel-prev');
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

// Sayfa değişiminde tepeye git
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
