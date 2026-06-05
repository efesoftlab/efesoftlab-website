/* ============================================================
   LEZZETiN ADRESi — Admin Paneli JavaScript
   Tasarim ve Gelistirme: Efesoftlab | Satis ve Dagitim: Efesoftlab
   ============================================================ */

var currentConfig = null;

document.addEventListener('DOMContentLoaded', function () {

  currentConfig = getConfig();
  initNavigation();
  populateAllForms();
  initMenu();
  initPhilosophy();
  initChefs();
  initSpecial();
  initGallery();
  initTestimonials();

});

/* ===== NAViGASYON ===== */
function initNavigation() {
  var navItems = document.querySelectorAll('.admin-nav-item');
  var sections = document.querySelectorAll('.admin-section');
  var sectionTitle = document.getElementById('section-title');

  var titles = {
    general: 'Genel Ayarlar',
    hero: 'Hero Bölümü',
    about: 'Hakkımızda',
    chefs: 'Şef Ekibi',
    menu: 'Menü Yönetimi',
    special: 'Günün Spesiyali',
    gallery: 'Galeri Yönetimi',
    testimonials: 'Müşteri Yorumları',
    hours: 'Çalışma Saatleri',
    images: 'Görsel Yönetimi',
    footer: 'Alt Bilgi'
  };

  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var section = this.getAttribute('data-section');

      navItems.forEach(function (n) { n.classList.remove('active'); });
      this.classList.add('active');

      sections.forEach(function (s) { s.classList.remove('active'); });
      var target = document.getElementById('section-' + section);
      if (target) target.classList.add('active');

      if (sectionTitle && titles[section]) {
        sectionTitle.textContent = titles[section];
      }
    });
  });
}

/* ===== FORM POPULATE & COLLECT ===== */
function getElementValue(id) {
  var el = document.getElementById(id);
  if (!el) return '';
  return el.value;
}

function setElementValue(id, val) {
  var el = document.getElementById(id);
  if (!el) return;
  el.value = val !== undefined && val !== null ? val : '';
}

function populateAllForms() {
  var c = currentConfig;

  setElementValue('cfg-logo-text', c.logo.text);
  setElementValue('cfg-logo-icon', c.logo.icon);
  setElementValue('cfg-contact-phone', c.contact.phone);
  setElementValue('cfg-contact-email', c.contact.email);
  setElementValue('cfg-contact-address', c.contact.address);
  setElementValue('cfg-reservation-phone', c.reservation.phone);
  setElementValue('cfg-reservation-email', c.reservation.email);
  setElementValue('cfg-reservation-capacity', c.reservation.capacity);
  setElementValue('cfg-reservation-privateHall', c.reservation.privateHall);
  setElementValue('cfg-reservation-terrace', c.reservation.terrace);

  setElementValue('cfg-hero-subtitle', c.hero.subtitle);
  setElementValue('cfg-hero-title', c.hero.title);
  setElementValue('cfg-hero-description', c.hero.description);

  setElementValue('cfg-about-title', c.about.title);
  setElementValue('cfg-about-story-0', c.about.story[0]);
  setElementValue('cfg-about-story-1', c.about.story[1]);
  setElementValue('cfg-about-story-2', c.about.story[2] || '');

  setElementValue('cfg-hours-weekdays', c.workingHours.weekdays);
  setElementValue('cfg-hours-weekend', c.workingHours.weekend);
  setElementValue('cfg-hours-sunday', c.workingHours.sunday);
  setElementValue('cfg-hours-note', c.workingHours.note);

  setElementValue('cfg-images-hero', c.images.hero);
  setElementValue('cfg-images-about', c.images.about);
  setElementValue('cfg-images-story', c.images.story);
  setElementValue('cfg-images-hours', c.images.hours);
  setElementValue('cfg-images-pageHero', c.images.pageHero);

  setElementValue('cfg-footer-about', c.footer.about);
  setElementValue('cfg-footer-social-instagram', c.footer.social.instagram);
  setElementValue('cfg-footer-social-facebook', c.footer.social.facebook);
  setElementValue('cfg-footer-social-twitter', c.footer.social.twitter);
  setElementValue('cfg-footer-social-tripadvisor', c.footer.social.tripadvisor);
  setElementValue('cfg-footer-social-youtube', c.footer.social.youtube);
}

function collectFormData() {
  var c = currentConfig;

  c.logo.text = getElementValue('cfg-logo-text');
  c.logo.icon = getElementValue('cfg-logo-icon');
  c.contact.phone = getElementValue('cfg-contact-phone');
  c.contact.email = getElementValue('cfg-contact-email');
  c.contact.address = getElementValue('cfg-contact-address');
  c.reservation.phone = getElementValue('cfg-reservation-phone');
  c.reservation.email = getElementValue('cfg-reservation-email');
  c.reservation.capacity = getElementValue('cfg-reservation-capacity');
  c.reservation.privateHall = getElementValue('cfg-reservation-privateHall');
  c.reservation.terrace = getElementValue('cfg-reservation-terrace');

  c.hero.subtitle = getElementValue('cfg-hero-subtitle');
  c.hero.title = getElementValue('cfg-hero-title');
  c.hero.description = getElementValue('cfg-hero-description');

  c.about.title = getElementValue('cfg-about-title');
  c.about.story[0] = getElementValue('cfg-about-story-0');
  c.about.story[1] = getElementValue('cfg-about-story-1');
  c.about.story[2] = getElementValue('cfg-about-story-2');

  c.workingHours.weekdays = getElementValue('cfg-hours-weekdays');
  c.workingHours.weekend = getElementValue('cfg-hours-weekend');
  c.workingHours.sunday = getElementValue('cfg-hours-sunday');
  c.workingHours.note = getElementValue('cfg-hours-note');

  c.images.hero = getElementValue('cfg-images-hero');
  c.images.about = getElementValue('cfg-images-about');
  c.images.story = getElementValue('cfg-images-story');
  c.images.hours = getElementValue('cfg-images-hours');
  c.images.pageHero = getElementValue('cfg-images-pageHero');

  c.footer.about = getElementValue('cfg-footer-about');
  c.footer.social.instagram = getElementValue('cfg-footer-social-instagram');
  c.footer.social.facebook = getElementValue('cfg-footer-social-facebook');
  c.footer.social.twitter = getElementValue('cfg-footer-social-twitter');
  c.footer.social.tripadvisor = getElementValue('cfg-footer-social-tripadvisor');
  c.footer.social.youtube = getElementValue('cfg-footer-social-youtube');

  collectPhilosophy(c);
  collectChefs(c);
  collectSpecial(c);
  collectGallery(c);
  collectTestimonials(c);

  return c;
}

/* ===== KAYDET ===== */
function saveAllConfig() {
  collectFormData();
  var saved = saveConfig(currentConfig);
  if (saved) {
    showAdminToast('Tüm ayarlar başarıyla kaydedildi!', 'success');
  } else {
    showAdminToast('Kaydetme hatası!', 'error');
  }
}

/* ===== MENÜ YÖNETiMi ===== */
function initMenu() {
  renderMenuFilterButtons();
  renderMenuTable();
}

function renderMenuFilterButtons() {
  var container = document.getElementById('menu-filter-container');
  if (!container) return;
  var html = '<button class="filter-btn active" data-filter="all">Tümü</button>';
  var cats = currentConfig.categories;
  for (var key in cats) {
    if (cats.hasOwnProperty(key)) {
      html += '<button class="filter-btn" data-filter="' + key + '">' + cats[key].tr + '</button>';
    }
  }
  container.innerHTML = html;

  container.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      renderMenuTable(this.getAttribute('data-filter'));
    });
  });
}

function renderMenuTable(filter) {
  filter = filter || 'all';
  var tbody = document.getElementById('menu-table-body');
  if (!tbody) return;
  var items = currentConfig.menu;
  var cats = currentConfig.categories;
  var html = '';

  items.forEach(function (item, index) {
    if (filter !== 'all' && item.category !== filter) return;
    var catName = cats[item.category] ? cats[item.category].tr : item.category;
    html += '<tr data-index="' + index + '">';
    html += '<td><img class="menu-thumb" src="' + escapeHtml(item.image) + '" alt=""></td>';
    html += '<td><input class="form-control menu-name" value="' + escapeHtml(item.name) + '"></td>';
    html += '<td><input class="form-control menu-price" value="' + escapeHtml(item.price) + '" style="width:80px"></td>';
    html += '<td><input class="form-control menu-desc" value="' + escapeHtml(item.description) + '"></td>';
    html += '<td><select class="form-control menu-category">';
    for (var k in cats) {
      if (cats.hasOwnProperty(k)) {
        html += '<option value="' + k + '"' + (item.category === k ? ' selected' : '') + '>' + cats[k].tr + '</option>';
      }
    }
    html += '</select></td>';
    html += '<td><input class="form-control menu-badge" value="' + escapeHtml(item.badge || '') + '" style="width:90px"></td>';
    html += '<td><div class="menu-actions">';
    html += '<button class="admin-btn admin-btn-secondary admin-btn-sm menu-img-btn" onclick="editMenuImage(' + index + ')"><i class="fas fa-image"></i></button>';
    html += '<button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteMenuItem(' + index + ')"><i class="fas fa-trash"></i></button>';
    html += '</div></td>';
    html += '</tr>';
  });

  if (items.length === 0) {
    html = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--admin-text-muted)">Henüz menü öğesi eklenmemiş.</td></tr>';
  }

  tbody.innerHTML = html;
}

function collectMenuFromTable() {
  var items = [];
  var rows = document.querySelectorAll('#menu-table-body tr');
  rows.forEach(function (row) {
    var index = parseInt(row.getAttribute('data-index'), 10);
    if (isNaN(index)) return;
    var nameEl = row.querySelector('.menu-name');
    var priceEl = row.querySelector('.menu-price');
    var descEl = row.querySelector('.menu-desc');
    var catEl = row.querySelector('.menu-category');
    var badgeEl = row.querySelector('.menu-badge');
    if (nameEl && priceEl) {
      var existing = currentConfig.menu[index] || { image: '' };
      items.push({
        name: nameEl.value,
        price: priceEl.value,
        description: descEl ? descEl.value : '',
        category: catEl ? catEl.value : 'main',
        badge: badgeEl ? badgeEl.value : '',
        image: existing.image || ''
      });
    }
  });
  return items;
}

function addMenuItem() {
  currentConfig.menu.push({
    name: 'Yeni Ürün',
    price: '0 TL',
    description: 'Ürün açıklaması',
    category: 'main',
    badge: '',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
  });
  renderMenuTable(getActiveMenuFilter());
  showAdminToast('Yeni menü öğesi eklendi.', 'info');
}

function deleteMenuItem(index) {
  if (!confirm('Bu öğeyi silmek istediğinize emin misiniz?')) return;
  currentConfig.menu.splice(index, 1);
  renderMenuTable(getActiveMenuFilter());
  showAdminToast('Menü öğesi silindi.', 'info');
}

function editMenuImage(index) {
  var url = prompt('Görsel URL\'sini girin:', currentConfig.menu[index].image);
  if (url && url.trim() !== '') {
    currentConfig.menu[index].image = url.trim();
    renderMenuTable(getActiveMenuFilter());
  }
}

function getActiveMenuFilter() {
  var active = document.querySelector('#menu-filter-container .filter-btn.active');
  return active ? active.getAttribute('data-filter') : 'all';
}

/* ===== FELSEFE ===== */
function initPhilosophy() {
  var container = document.getElementById('philosophy-admin-container');
  if (!container) return;
  var items = currentConfig.about.philosophy;
  var html = '';
  for (var i = 0; i < items.length; i++) {
    html += '<div class="chef-admin-card" style="margin-bottom:16px">';
    html += '<h4><i class="' + items[i].icon + '"></i> Kategori ' + (i + 1) + '</h4>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>Başlık</label><input class="form-control philosophy-title" data-idx="' + i + '" value="' + escapeHtml(items[i].title) + '"></div>';
    html += '<div class="form-group"><label>İkon</label><input class="form-control philosophy-icon" data-idx="' + i + '" value="' + escapeHtml(items[i].icon) + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>Açıklama</label><textarea class="form-control philosophy-text" data-idx="' + i + '" rows="2">' + escapeHtml(items[i].text) + '</textarea></div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function collectPhilosophy(c) {
  document.querySelectorAll('.philosophy-title').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.about.philosophy[idx]) {
      c.about.philosophy[idx].title = el.value;
    }
  });
  document.querySelectorAll('.philosophy-text').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.about.philosophy[idx]) {
      c.about.philosophy[idx].text = el.value;
    }
  });
  document.querySelectorAll('.philosophy-icon').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.about.philosophy[idx]) {
      c.about.philosophy[idx].icon = el.value;
    }
  });
}

/* ===== SEFLER ===== */
function initChefs() {
  var container = document.getElementById('chef-admin-container');
  if (!container) return;
  var chefs = currentConfig.chefTeam;
  var html = '<div class="chef-admin-grid">';
  chefs.forEach(function (chef, i) {
    html += '<div class="chef-admin-card">';
    html += '<h4>' + chef.name + '</h4>';
    html += '<div class="form-group"><label>Ad</label><input class="form-control chef-name" data-idx="' + i + '" value="' + escapeHtml(chef.name) + '"></div>';
    html += '<div class="form-group"><label>Unvan</label><input class="form-control chef-title" data-idx="' + i + '" value="' + escapeHtml(chef.title) + '"></div>';
    html += '<div class="form-group"><label>Açıklama</label><textarea class="form-control chef-desc" data-idx="' + i + '" rows="3">' + escapeHtml(chef.description) + '</textarea></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>Deneyim</label><input class="form-control chef-exp" data-idx="' + i + '" value="' + escapeHtml(chef.experience) + '"></div>';
    html += '<div class="form-group"><label>Görsel URL</label><input class="form-control chef-image" data-idx="' + i + '" value="' + escapeHtml(chef.image) + '"></div>';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function collectChefs(c) {
  document.querySelectorAll('.chef-name').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.chefTeam[idx]) c.chefTeam[idx].name = el.value;
  });
  document.querySelectorAll('.chef-title').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.chefTeam[idx]) c.chefTeam[idx].title = el.value;
  });
  document.querySelectorAll('.chef-desc').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.chefTeam[idx]) c.chefTeam[idx].description = el.value;
  });
  document.querySelectorAll('.chef-exp').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.chefTeam[idx]) c.chefTeam[idx].experience = el.value;
  });
  document.querySelectorAll('.chef-image').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.chefTeam[idx]) c.chefTeam[idx].image = el.value;
  });
}

/* ===== SPESiYAL ===== */
function initSpecial() {
  var container = document.getElementById('special-admin-container');
  if (!container) return;
  var items = currentConfig.dailySpecial;
  var typeLabels = { starter: 'Başlangıç', main: 'Ana Yemek', dessert: 'Tatlı' };
  var html = '<div class="special-admin-grid">';
  items.forEach(function (item, i) {
    html += '<div class="special-admin-card">';
    html += '<h4>' + (typeLabels[item.type] || item.type) + '</h4>';
    html += '<div class="form-group"><label>Ad</label><input class="form-control special-name" data-idx="' + i + '" value="' + escapeHtml(item.name) + '"></div>';
    html += '<div class="form-group"><label>Fiyat</label><input class="form-control special-price" data-idx="' + i + '" value="' + escapeHtml(item.price) + '"></div>';
    html += '<div class="form-group"><label>Açıklama</label><textarea class="form-control special-desc" data-idx="' + i + '" rows="3">' + escapeHtml(item.description) + '</textarea></div>';
    html += '<div class="form-group"><label>Görsel URL</label><input class="form-control special-image" data-idx="' + i + '" value="' + escapeHtml(item.image) + '"></div>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function collectSpecial(c) {
  document.querySelectorAll('.special-name').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.dailySpecial[idx]) c.dailySpecial[idx].name = el.value;
  });
  document.querySelectorAll('.special-price').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.dailySpecial[idx]) c.dailySpecial[idx].price = el.value;
  });
  document.querySelectorAll('.special-desc').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.dailySpecial[idx]) c.dailySpecial[idx].description = el.value;
  });
  document.querySelectorAll('.special-image').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.dailySpecial[idx]) c.dailySpecial[idx].image = el.value;
  });
}

/* ===== GALERi ===== */
function initGallery() {
  var container = document.getElementById('gallery-admin-container');
  if (!container) return;
  var items = currentConfig.gallery;
  var html = '<div class="gallery-admin-grid">';
  items.forEach(function (url, i) {
    html += '<div class="gallery-admin-item">';
    html += '<img src="' + escapeHtml(url) + '" alt="" onerror="this.style.display=\'none\'">';
    html += '<div class="form-group" style="margin:0"><textarea class="form-control gallery-url" data-idx="' + i + '" rows="2" style="font-size:0.75rem">' + escapeHtml(url) + '</textarea></div>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function collectGallery(c) {
  document.querySelectorAll('.gallery-url').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.gallery[idx] !== undefined) c.gallery[idx] = el.value;
  });
}

/* ===== YORUMLAR ===== */
function initTestimonials() {
  var container = document.getElementById('testimonial-admin-container');
  if (!container) return;
  var items = currentConfig.testimonials;
  var html = '<div class="testimonial-admin-grid">';
  items.forEach(function (item, i) {
    html += '<div class="testimonial-admin-card">';
    html += '<h4>#' + (i + 1) + '</h4>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>Ad</label><input class="form-control testimonial-name" data-idx="' + i + '" value="' + escapeHtml(item.name) + '"></div>';
    html += '<div class="form-group"><label>Lokasyon</label><input class="form-control testimonial-location" data-idx="' + i + '" value="' + escapeHtml(item.location) + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>Yorum</label><textarea class="form-control testimonial-text" data-idx="' + i + '" rows="4">' + escapeHtml(item.text) + '</textarea></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>Puan (1-5)</label><input class="form-control testimonial-rating" data-idx="' + i + '" type="number" min="1" max="5" step="0.5" value="' + item.rating + '"></div>';
    html += '<div class="form-group"><label>Görsel URL</label><input class="form-control testimonial-image" data-idx="' + i + '" value="' + escapeHtml(item.image) + '"></div>';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function collectTestimonials(c) {
  document.querySelectorAll('.testimonial-name').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.testimonials[idx]) c.testimonials[idx].name = el.value;
  });
  document.querySelectorAll('.testimonial-location').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.testimonials[idx]) c.testimonials[idx].location = el.value;
  });
  document.querySelectorAll('.testimonial-text').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.testimonials[idx]) c.testimonials[idx].text = el.value;
  });
  document.querySelectorAll('.testimonial-rating').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.testimonials[idx]) c.testimonials[idx].rating = parseFloat(el.value) || 5;
  });
  document.querySelectorAll('.testimonial-image').forEach(function (el) {
    var idx = parseInt(el.getAttribute('data-idx'), 10);
    if (!isNaN(idx) && c.testimonials[idx]) c.testimonials[idx].image = el.value;
  });
}

/* ===== JSON DIŞA/İÇE AKTAR ===== */
function exportConfig() {
  collectFormData();
  var data = JSON.stringify(currentConfig, null, 2);
  var blob = new Blob([data], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'lezzetinadresi-config.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showAdminToast('JSON dosyası dışa aktarıldı.', 'success');
}

function importConfig(event) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    try {
      var imported = JSON.parse(e.target.result);
      currentConfig = mergeDeep(DEFAULT_CONFIG, imported);
      saveConfig(currentConfig);
      location.reload();
    } catch (err) {
      showAdminToast('Geçersiz JSON dosyası!', 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

/* ===== SIFIRLA ===== */
function confirmReset() {
  document.getElementById('reset-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('reset-modal').classList.remove('active');
}

function resetConfig() {
  currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  saveConfig(currentConfig);
  closeModal();
  location.reload();
}

/* ===== TOAST ===== */
function showAdminToast(message, type) {
  var container = document.getElementById('admin-toast-container');
  if (!container) return;

  var toast = document.createElement('div');
  toast.className = 'admin-toast ' + (type || 'info');
  var iconMap = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
  toast.innerHTML = '<i class="fas ' + (iconMap[type] || iconMap.info) + '"></i> ' + message;
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add('toast-out');
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 350);
  }, 3000);
}

/* ===== YARDIMCI ===== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
