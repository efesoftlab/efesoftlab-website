/* ============================================================
   EFES HUKUK BÜROSU - YÖNETİM PANELİ
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

let adminConfig = {};
let modalContext = {};

document.addEventListener('DOMContentLoaded', () => {
  loadConfig();
  initSidebar();
  initToggle();
  renderAll();
  updatePreview();
});

function loadConfig() {
  adminConfig = getConfig();
}

function saveAllConfig() {
  collectAllFromUI();
  const saved = saveConfig(adminConfig);
  if (saved) {
    showToast('Başarılı', 'Tüm ayarlar kaydedildi.', 'success');
  } else {
    showToast('Hata', 'Kaydetme sırasında bir hata oluştu.', 'error');
  }
  updatePreview();
}

function collectAllFromUI() {
  adminConfig.logo.text = getVal('cfg_logo_text');
  adminConfig.logo.icon = getVal('cfg_logo_icon');
  adminConfig.contact.phone = getVal('cfg_phone');
  adminConfig.contact.phone2 = getVal('cfg_phone2');
  adminConfig.contact.gsm = getVal('cfg_gsm');
  adminConfig.contact.email = getVal('cfg_email');
  adminConfig.contact.address = getVal('cfg_address');
  adminConfig.workingHours.weekday = getVal('cfg_hours_weekday');
  adminConfig.workingHours.saturday = getVal('cfg_hours_saturday');

  adminConfig.hero.title = getVal('cfg_hero_title');
  adminConfig.hero.subtitle = getVal('cfg_hero_subtitle');
  adminConfig.hero.typingText = getVal('cfg_hero_typing');
  adminConfig.hero.btnConsult = getVal('cfg_hero_btn1');
  adminConfig.hero.btnServices = getVal('cfg_hero_btn2');
  adminConfig.hero.bgImage = getVal('cfg_hero_bg');

  adminConfig.about.title = getVal('cfg_about_title');
  adminConfig.about.description = getVal('cfg_about_desc');
  adminConfig.about.image = getVal('cfg_about_image');
  adminConfig.about.features = getVal('cfg_about_features').split(',').map(s => s.trim()).filter(Boolean);
  adminConfig.about.story1 = getVal('cfg_about_story1');
  adminConfig.about.story2 = getVal('cfg_about_story2');
  adminConfig.about.mission = getVal('cfg_about_mission');
  adminConfig.about.vision = getVal('cfg_about_vision');
  adminConfig.about.values = getVal('cfg_about_values');

  adminConfig.cta.title = getVal('cfg_cta_title');
  adminConfig.cta.description = getVal('cfg_cta_desc');
  adminConfig.cta.btnText = getVal('cfg_cta_btn');
  adminConfig.cta.bgImage = getVal('cfg_cta_bg');

  adminConfig.images.hero = getVal('cfg_img_hero');
  adminConfig.images.about = getVal('cfg_img_about');
  adminConfig.images.aboutPage = getVal('cfg_img_about_page');
  adminConfig.images.services = getVal('cfg_img_services');
  adminConfig.images.contact = getVal('cfg_img_contact');

  adminConfig.footer.description = getVal('cfg_footer_desc');
  adminConfig.footer.copyright = getVal('cfg_footer_copyright');
  adminConfig.footer.credit = getVal('cfg_footer_credit');

  collectArrayFromUI('practiceAreas', 'practicesContainer');
  collectArrayFromUI('lawyers', 'lawyersContainer');
  collectArrayFromUI('successStories', 'storiesContainer');
  collectArrayFromUI('stats', 'statsContainer');
  collectArrayFromUI('testimonials', 'testimonialsContainer');
  collectArrayFromUI('faq', 'faqContainer');
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function collectArrayFromUI(key, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = container.querySelectorAll('[data-item-id]');
  adminConfig[key] = [];
  items.forEach(item => {
    const id = parseInt(item.getAttribute('data-item-id'));
    const existing = adminConfig[key].find(i => i.id === id);
    if (existing) {
      adminConfig[key].push(existing);
    }
  });
}

function renderAll() {
  populateGeneral();
  populateHero();
  populateAbout();
  populatePractices();
  populateLawyers();
  populateStories();
  populateStats();
  populateTestimonials();
  populateFaq();
  populateCta();
  populateImages();
  populateFooter();
}

function populateGeneral() {
  setVal('cfg_logo_text', adminConfig.logo.text);
  setVal('cfg_logo_icon', adminConfig.logo.icon);
  setVal('cfg_phone', adminConfig.contact.phone);
  setVal('cfg_phone2', adminConfig.contact.phone2);
  setVal('cfg_gsm', adminConfig.contact.gsm);
  setVal('cfg_email', adminConfig.contact.email);
  setVal('cfg_address', adminConfig.contact.address);
  setVal('cfg_hours_weekday', adminConfig.workingHours.weekday);
  setVal('cfg_hours_saturday', adminConfig.workingHours.saturday);
}

function populateHero() {
  setVal('cfg_hero_title', adminConfig.hero.title);
  setVal('cfg_hero_subtitle', adminConfig.hero.subtitle);
  setVal('cfg_hero_typing', adminConfig.hero.typingText);
  setVal('cfg_hero_btn1', adminConfig.hero.btnConsult);
  setVal('cfg_hero_btn2', adminConfig.hero.btnServices);
  setVal('cfg_hero_bg', adminConfig.hero.bgImage);
}

function populateAbout() {
  setVal('cfg_about_title', adminConfig.about.title);
  setVal('cfg_about_desc', adminConfig.about.description);
  setVal('cfg_about_image', adminConfig.about.image);
  setVal('cfg_about_features', (adminConfig.about.features || []).join(', '));
  setVal('cfg_about_story1', adminConfig.about.story1);
  setVal('cfg_about_story2', adminConfig.about.story2);
  setVal('cfg_about_mission', adminConfig.about.mission);
  setVal('cfg_about_vision', adminConfig.about.vision);
  setVal('cfg_about_values', adminConfig.about.values);
}

function populateCta() {
  setVal('cfg_cta_title', adminConfig.cta.title);
  setVal('cfg_cta_desc', adminConfig.cta.description);
  setVal('cfg_cta_btn', adminConfig.cta.btnText);
  setVal('cfg_cta_bg', adminConfig.cta.bgImage);
}

function populateImages() {
  setVal('cfg_img_hero', adminConfig.images.hero);
  setVal('cfg_img_about', adminConfig.images.about);
  setVal('cfg_img_about_page', adminConfig.images.aboutPage);
  setVal('cfg_img_services', adminConfig.images.services);
  setVal('cfg_img_contact', adminConfig.images.contact);
}

function populateFooter() {
  setVal('cfg_footer_desc', adminConfig.footer.description);
  setVal('cfg_footer_copyright', adminConfig.footer.copyright);
  setVal('cfg_footer_credit', adminConfig.footer.credit);
}

/* =============================================================
   UZMANLIK ALANLARI
   ============================================================= */
function populatePractices() {
  const container = document.getElementById('practicesContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.practiceAreas.forEach((area, index) => {
    container.appendChild(createPracticeCard(area, index));
  });
}

function createPracticeCard(area, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', area.id || index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4><i class="${area.icon}" style="color:var(--admin-gold);margin-right:8px;"></i> ${area.title}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editPracticeArea('${area.id || index}')" title="Düzenle"><i class="fas fa-edit"></i></button>
        <button class="admin-item-delete" onclick="deletePracticeArea('${area.id || index}')" title="Sil"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field"><strong>İkon:</strong> ${area.icon}</div>
      <div class="field"><strong>Açıklama:</strong> ${area.description.substring(0, 80)}...</div>
    </div>
  `;
  return div;
}

function addPracticeArea() {
  const newArea = {
    id: 'area_' + Date.now(),
    icon: 'fas fa-gavel',
    title: 'Yeni Alan',
    description: 'Açıklama giriniz.',
    detailedDesc: 'Detaylı açıklama giriniz.'
  };
  adminConfig.practiceAreas.push(newArea);
  openModal('Uzmanlık Alanı Düzenle', 'practice', newArea);
  populatePractices();
}

function editPracticeArea(id) {
  const area = adminConfig.practiceAreas.find(a => (a.id || adminConfig.practiceAreas.indexOf(a)) == id);
  if (area) openModal('Uzmanlık Alanı Düzenle', 'practice', area);
}

function deletePracticeArea(id) {
  if (!confirm('Bu uzmanlık alanını silmek istediğinize emin misiniz?')) return;
  adminConfig.practiceAreas = adminConfig.practiceAreas.filter(a => (a.id || adminConfig.practiceAreas.indexOf(a)) != id);
  populatePractices();
}

/* =============================================================
   AVUKATLAR
   ============================================================= */
function populateLawyers() {
  const container = document.getElementById('lawyersContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.lawyers.forEach((lawyer, index) => {
    container.appendChild(createLawyerCard(lawyer, index));
  });
}

function createLawyerCard(lawyer, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', lawyer.id || index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4>${lawyer.name}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editLawyer('${lawyer.id || index}')" title="Düzenle"><i class="fas fa-edit"></i></button>
        <button class="admin-item-delete" onclick="deleteLawyer('${lawyer.id || index}')" title="Sil"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field"><strong>Ünvan:</strong> ${lawyer.title}</div>
      <div class="field"><strong>Uzmanlık:</strong> ${lawyer.spec}</div>
      <div class="field"><strong>Eğitim:</strong> ${lawyer.education}</div>
      <div class="field"><strong>Deneyim:</strong> ${lawyer.experience}</div>
    </div>
  `;
  return div;
}

function addLawyer() {
  const newLawyer = {
    id: Date.now(),
    name: 'Av. Yeni Avukat',
    title: 'Avukat',
    spec: 'Hukuk',
    education: 'Üniversite',
    experience: '1 yıl',
    description: 'Açıklama giriniz.',
    image: 'https://picsum.photos/400/300?random=' + Date.now()
  };
  adminConfig.lawyers.push(newLawyer);
  openModal('Avukat Düzenle', 'lawyer', newLawyer);
  populateLawyers();
}

function editLawyer(id) {
  const lawyer = adminConfig.lawyers.find(l => (l.id || adminConfig.lawyers.indexOf(l)) == id);
  if (lawyer) openModal('Avukat Düzenle', 'lawyer', lawyer);
}

function deleteLawyer(id) {
  if (!confirm('Bu avukatı silmek istediğinize emin misiniz?')) return;
  adminConfig.lawyers = adminConfig.lawyers.filter(l => (l.id || adminConfig.lawyers.indexOf(l)) != id);
  populateLawyers();
}

/* =============================================================
   BAŞARI HİKAYELERİ
   ============================================================= */
function populateStories() {
  const container = document.getElementById('storiesContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.successStories.forEach((story, index) => {
    container.appendChild(createStoryCard(story, index));
  });
}

function createStoryCard(story, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', story.id || index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4>${story.title}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editStory('${story.id || index}')" title="Düzenle"><i class="fas fa-edit"></i></button>
        <button class="admin-item-delete" onclick="deleteStory('${story.id || index}')" title="Sil"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field"><strong>Kategori:</strong> ${story.badge}</div>
      <div class="field"><strong>Sonuç:</strong> ${story.result}</div>
      <div class="field">${story.description.substring(0, 80)}...</div>
    </div>
  `;
  return div;
}

function addStory() {
  const newStory = {
    id: Date.now(),
    badge: 'Hukuk',
    title: 'Yeni Hikaye',
    description: 'Açıklama giriniz.',
    result: 'Başarılı Sonuç'
  };
  adminConfig.successStories.push(newStory);
  openModal('Başarı Hikayesi Düzenle', 'story', newStory);
  populateStories();
}

function editStory(id) {
  const story = adminConfig.successStories.find(s => (s.id || adminConfig.successStories.indexOf(s)) == id);
  if (story) openModal('Başarı Hikayesi Düzenle', 'story', story);
}

function deleteStory(id) {
  if (!confirm('Bu başarı hikayesini silmek istediğinize emin misiniz?')) return;
  adminConfig.successStories = adminConfig.successStories.filter(s => (s.id || adminConfig.successStories.indexOf(s)) != id);
  populateStories();
}

/* =============================================================
   İSTATİSTİKLER
   ============================================================= */
function populateStats() {
  const container = document.getElementById('statsContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.stats.forEach((stat, index) => {
    container.appendChild(createStatCard(stat, index));
  });
}

function createStatCard(stat, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', 'stat_' + index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4><i class="${stat.icon}" style="color:var(--admin-gold);margin-right:8px;"></i> ${stat.label}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editStat(${index})" title="Düzenle"><i class="fas fa-edit"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field"><strong>Değer:</strong> ${stat.target}${stat.suffix}</div>
    </div>
  `;
  return div;
}

function editStat(index) {
  const stat = adminConfig.stats[index];
  if (stat) openModal('İstatistik Düzenle', 'stat', stat, index);
}

/* =============================================================
   MÜVEKKİL YORUMLARI
   ============================================================= */
function populateTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.testimonials.forEach((t, index) => {
    container.appendChild(createTestimonialCard(t, index));
  });
}

function createTestimonialCard(t, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', t.id || index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4>${t.author} - ${t.location}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editTestimonial('${t.id || index}')" title="Düzenle"><i class="fas fa-edit"></i></button>
        <button class="admin-item-delete" onclick="deleteTestimonial('${t.id || index}')" title="Sil"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field"><strong>Puan:</strong> ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <div class="field">${t.text.substring(0, 80)}...</div>
    </div>
  `;
  return div;
}

function addTestimonial() {
  const newT = {
    id: Date.now(),
    text: 'Yorum metni giriniz.',
    author: 'Yeni Müvekkil',
    location: 'İstanbul',
    rating: 5,
    image: 'https://picsum.photos/100/100?random=' + Date.now()
  };
  adminConfig.testimonials.push(newT);
  openModal('Müvekkil Yorumu Düzenle', 'testimonial', newT);
  populateTestimonials();
}

function editTestimonial(id) {
  const t = adminConfig.testimonials.find(item => (item.id || adminConfig.testimonials.indexOf(item)) == id);
  if (t) openModal('Müvekkil Yorumu Düzenle', 'testimonial', t);
}

function deleteTestimonial(id) {
  if (!confirm('Bu yorumu silmek istediğinize emin misiniz?')) return;
  adminConfig.testimonials = adminConfig.testimonials.filter(item => (item.id || adminConfig.testimonials.indexOf(item)) != id);
  populateTestimonials();
}

/* =============================================================
   SSS
   ============================================================= */
function populateFaq() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  container.innerHTML = '';
  adminConfig.faq.forEach((item, index) => {
    container.appendChild(createFaqCard(item, index));
  });
}

function createFaqCard(item, index) {
  const div = document.createElement('div');
  div.className = 'admin-item-card';
  div.setAttribute('data-item-id', item.id || index);
  div.innerHTML = `
    <div class="admin-item-card-header">
      <h4>${item.question.substring(0, 60)}${item.question.length > 60 ? '...' : ''}</h4>
      <div class="admin-item-actions">
        <button class="admin-item-edit" onclick="editFaq('${item.id || index}')" title="Düzenle"><i class="fas fa-edit"></i></button>
        <button class="admin-item-delete" onclick="deleteFaq('${item.id || index}')" title="Sil"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="admin-item-body">
      <div class="field">${item.answer.substring(0, 80)}...</div>
    </div>
  `;
  return div;
}

function addFaq() {
  const newFaq = {
    id: Date.now(),
    question: 'Yeni soru?',
    answer: 'Cevap giriniz.'
  };
  adminConfig.faq.push(newFaq);
  openModal('SSS Düzenle', 'faq', newFaq);
  populateFaq();
}

function editFaq(id) {
  const item = adminConfig.faq.find(f => (f.id || adminConfig.faq.indexOf(f)) == id);
  if (item) openModal('SSS Düzenle', 'faq', item);
}

function deleteFaq(id) {
  if (!confirm('Bu soruyu silmek istediğinize emin misiniz?')) return;
  adminConfig.faq = adminConfig.faq.filter(f => (f.id || adminConfig.faq.indexOf(f)) != id);
  populateFaq();
}

/* =============================================================
   MODAL YÖNETİMİ
   ============================================================= */
function openModal(title, type, data, extraIndex) {
  modalContext = { type, data, extraIndex };
  document.getElementById('modalTitle').textContent = title;
  const body = document.getElementById('modalBody');

  let html = '';
  switch (type) {
    case 'practice':
      html = `
        <div class="admin-form-group">
          <label>İkon Sınıfı</label>
          <input type="text" class="admin-form-control modal-field" data-field="icon" value="${data.icon}">
          <div class="admin-form-hint">Örn: fas fa-gavel, fas fa-heart, fas fa-chart-bar</div>
        </div>
        <div class="admin-form-group">
          <label>Başlık</label>
          <input type="text" class="admin-form-control modal-field" data-field="title" value="${escapeHtml(data.title)}">
        </div>
        <div class="admin-form-group">
          <label>Kısa Açıklama</label>
          <textarea class="admin-form-control modal-field" data-field="description">${escapeHtml(data.description)}</textarea>
        </div>
        <div class="admin-form-group">
          <label>Detaylı Açıklama</label>
          <textarea class="admin-form-control modal-field" data-field="detailedDesc" style="min-height:120px;">${escapeHtml(data.detailedDesc || '')}</textarea>
        </div>
      `;
      break;

    case 'lawyer':
      html = `
        <div class="admin-form-group">
          <label>Ad Soyad</label>
          <input type="text" class="admin-form-control modal-field" data-field="name" value="${escapeHtml(data.name)}">
        </div>
        <div class="admin-form-group">
          <label>Ünvan</label>
          <input type="text" class="admin-form-control modal-field" data-field="title" value="${escapeHtml(data.title)}">
        </div>
        <div class="admin-form-group">
          <label>Uzmanlık Alanı</label>
          <input type="text" class="admin-form-control modal-field" data-field="spec" value="${escapeHtml(data.spec)}">
        </div>
        <div class="admin-form-group">
          <label>Eğitim</label>
          <input type="text" class="admin-form-control modal-field" data-field="education" value="${escapeHtml(data.education)}">
        </div>
        <div class="admin-form-group">
          <label>Deneyim</label>
          <input type="text" class="admin-form-control modal-field" data-field="experience" value="${escapeHtml(data.experience)}">
        </div>
        <div class="admin-form-group">
          <label>Kısa Açıklama</label>
          <textarea class="admin-form-control modal-field" data-field="description">${escapeHtml(data.description)}</textarea>
        </div>
        <div class="admin-form-group">
          <label>Görsel URL</label>
          <input type="url" class="admin-form-control modal-field" data-field="image" value="${data.image || ''}">
          ${data.image ? `<img src="${data.image}" class="modal-image-preview">` : ''}
        </div>
      `;
      break;

    case 'story':
      html = `
        <div class="admin-form-group">
          <label>Kategori (Badge)</label>
          <input type="text" class="admin-form-control modal-field" data-field="badge" value="${escapeHtml(data.badge)}">
        </div>
        <div class="admin-form-group">
          <label>Başlık</label>
          <input type="text" class="admin-form-control modal-field" data-field="title" value="${escapeHtml(data.title)}">
        </div>
        <div class="admin-form-group">
          <label>Açıklama</label>
          <textarea class="admin-form-control modal-field" data-field="description">${escapeHtml(data.description)}</textarea>
        </div>
        <div class="admin-form-group">
          <label>Sonuç</label>
          <input type="text" class="admin-form-control modal-field" data-field="result" value="${escapeHtml(data.result)}">
        </div>
      `;
      break;

    case 'stat':
      html = `
        <div class="admin-form-group">
          <label>İkon</label>
          <input type="text" class="admin-form-control modal-field" data-field="icon" value="${data.icon}">
        </div>
        <div class="admin-form-group">
          <label>Hedef Değer</label>
          <input type="number" class="admin-form-control modal-field" data-field="target" value="${data.target}">
        </div>
        <div class="admin-form-group">
          <label>Sonek (+, %, vb.)</label>
          <input type="text" class="admin-form-control modal-field" data-field="suffix" value="${escapeHtml(data.suffix)}">
        </div>
        <div class="admin-form-group">
          <label>Etiket</label>
          <input type="text" class="admin-form-control modal-field" data-field="label" value="${escapeHtml(data.label)}">
        </div>
      `;
      break;

    case 'testimonial':
      html = `
        <div class="admin-form-group">
          <label>Yorum Metni</label>
          <textarea class="admin-form-control modal-field" data-field="text" style="min-height:100px;">${escapeHtml(data.text)}</textarea>
        </div>
        <div class="admin-form-group">
          <label>Yazar Adı</label>
          <input type="text" class="admin-form-control modal-field" data-field="author" value="${escapeHtml(data.author)}">
        </div>
        <div class="admin-form-group">
          <label>Lokasyon</label>
          <input type="text" class="admin-form-control modal-field" data-field="location" value="${escapeHtml(data.location)}">
        </div>
        <div class="admin-form-group">
          <label>Puan (1-5)</label>
          <input type="number" class="admin-form-control modal-field" data-field="rating" value="${data.rating}" min="1" max="5">
        </div>
        <div class="admin-form-group">
          <label>Görsel URL</label>
          <input type="url" class="admin-form-control modal-field" data-field="image" value="${data.image || ''}">
          ${data.image ? `<img src="${data.image}" class="modal-image-preview">` : ''}
        </div>
      `;
      break;

    case 'faq':
      html = `
        <div class="admin-form-group">
          <label>Soru</label>
          <input type="text" class="admin-form-control modal-field" data-field="question" value="${escapeHtml(data.question)}">
        </div>
        <div class="admin-form-group">
          <label>Cevap</label>
          <textarea class="admin-form-control modal-field" data-field="answer" style="min-height:120px;">${escapeHtml(data.answer)}</textarea>
        </div>
      `;
      break;
  }

  body.innerHTML = html;
  document.getElementById('adminModal').classList.add('show');
}

function closeModal() {
  document.getElementById('adminModal').classList.remove('show');
  modalContext = {};
}

function saveModalItem() {
  const fields = document.querySelectorAll('#modalBody .modal-field');
  fields.forEach(f => {
    const field = f.getAttribute('data-field');
    modalContext.data[field] = f.value;
  });

  closeModal();

  switch (modalContext.type) {
    case 'practice': populatePractices(); break;
    case 'lawyer': populateLawyers(); break;
    case 'story': populateStories(); break;
    case 'stat': populateStats(); break;
    case 'testimonial': populateTestimonials(); break;
    case 'faq': populateFaq(); break;
  }

  showToast('Başarılı', 'Öğe güncellendi.', 'success');
}

/* =============================================================
   JSON İÇE / DIŞA AKTARIM
   ============================================================= */
function exportConfig() {
  collectAllFromUI();
  const json = JSON.stringify(adminConfig, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'efes-hukuk-config.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Başarılı', 'JSON dosyası indiriliyor.', 'success');
}

function importConfig(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      adminConfig = mergeDeep(cloneDeep(DEFAULT_CONFIG), imported);
      saveConfig(adminConfig);
      renderAll();
      updatePreview();
      showToast('Başarılı', 'Yapılandırma içe aktarıldı.', 'success');
    } catch (err) {
      showToast('Hata', 'Geçersiz JSON dosyası: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function resetAllConfig() {
  if (!confirm('Tüm ayarları sıfırlamak istediğinize emin misiniz? Bu işlem geri alınamaz!')) return;
  if (!confirm('Son kez: Tüm özelleştirmeler silinecek. Devam etmek istiyor musunuz?')) return;
  adminConfig = resetConfig();
  renderAll();
  updatePreview();
  showToast('Başarılı', 'Tüm ayarlar varsayılana döndürüldü.', 'success');
}

/* =============================================================
   ÖNİZLEME
   ============================================================= */
function updatePreview() {
  const preview = document.getElementById('configPreview');
  if (preview) {
    preview.value = JSON.stringify(adminConfig, null, 2);
  }
}

/* =============================================================
   SİDEBAR GEZİNTİ
   ============================================================= */
function initSidebar() {
  document.querySelectorAll('.admin-nav a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');

      document.querySelectorAll('.admin-nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');

      document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById('section-' + section);
      if (target) target.classList.add('active');

      const titles = {
        general: 'Genel Ayarlar',
        hero: 'Hero Bölümü',
        about: 'Hakkımızda',
        practices: 'Uzmanlık Alanları',
        lawyers: 'Avukatlar',
        stories: 'Başarı Hikayeleri',
        stats: 'İstatistikler',
        testimonials: 'Müvekkil Yorumları',
        faq: 'SSS',
        cta: 'CTA Bölümü',
        images: 'Görsel Yönetimi',
        footer: 'Alt Bilgi',
        tools: 'Araçlar'
      };
      document.getElementById('pageTitle').textContent = titles[section] || 'Yönetim Paneli';

      if (window.innerWidth <= 991) {
        document.getElementById('adminSidebar').classList.remove('open');
      }
    });
  });
}

function initToggle() {
  document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('adminSidebar').classList.toggle('open');
  });
}

/* =============================================================
   BİLDİRİM SİSTEMİ
   ============================================================= */
function showToast(title, msg, type) {
  const container = document.getElementById('adminToastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'admin-toast ' + (type || 'info');
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  toast.innerHTML = `
    <div class="admin-toast-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
    <div class="admin-toast-content">
      <div class="admin-toast-title">${title}</div>
      <div class="admin-toast-msg">${msg}</div>
    </div>
    <button class="admin-toast-close" onclick="this.parentElement.classList.add('hiding');setTimeout(()=>this.parentElement.remove(),300)"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}

/* =============================================================
   YARDIMCI FONKSİYONLAR
   ============================================================= */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
