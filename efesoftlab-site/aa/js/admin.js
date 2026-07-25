var adminState = {
  currentSection: 'genel',
  serviceCount: 4,
  config: {}
};

function showAdminToast(title, message, type) {
  type = type || 'info';
  var container = document.getElementById('adminToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'adminToastContainer';
    container.className = 'admin-toast-container';
    document.body.appendChild(container);
  }
  var icons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', warning: 'fas fa-exclamation-triangle', info: 'fas fa-info-circle' };
  var toast = document.createElement('div');
  toast.className = 'admin-toast ' + type;
  toast.innerHTML = '<div class="toast-icon"><i class="' + (icons[type] || icons.info) + '"></i></div><div class="toast-body"><h4>' + title + '</h4><p>' + message + '</p></div><button class="toast-close" onclick="this.parentElement.classList.add(\'removing\');setTimeout(function(){this.parentElement.remove()}.bind(this),300)"><i class="fas fa-times"></i></button>';
  container.appendChild(toast);
  setTimeout(function () {
    if (toast.parentElement) {
      toast.classList.add('removing');
      setTimeout(function () { toast.remove(); }, 300);
    }
  }, 4000);
}

function switchSection(sectionId) {
  adminState.currentSection = sectionId;
  document.querySelectorAll('.admin-section').forEach(function (s) { s.classList.remove('active'); });
  var section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  document.querySelectorAll('.menu-item').forEach(function (m) {
    m.classList.toggle('active', m.getAttribute('data-section') === sectionId);
  });
  document.getElementById('sectionTitle').textContent = section ? section.getAttribute('data-title') || sectionId : sectionId;
}

function loadConfigToForm() {
  var c = adminState.config;

  document.getElementById('logoText').value = c.logo.text || '';
  document.getElementById('logoIcon').value = c.logo.icon || '';

  document.getElementById('contactPhone').value = c.contact.phone || '';
  document.getElementById('contactEmail').value = c.contact.email || '';
  document.getElementById('contactAddress').value = c.contact.address || '';

  document.getElementById('whatsappNumber').value = c.whatsapp || '';
  document.getElementById('workingHours').value = c.workingHours || '';

  document.getElementById('heroTitle').value = c.hero.title || '';
  document.getElementById('heroSubtitle').value = c.hero.subtitle || '';
  document.getElementById('heroDescription').value = c.hero.description || '';

  document.getElementById('storyTitle').value = c.about.storyTitle || '';
  document.getElementById('storyP1').value = c.about.storyParagraphs[0] || '';
  document.getElementById('storyP2').value = c.about.storyParagraphs[1] || '';
  document.getElementById('storyP3').value = c.about.storyParagraphs[2] || '';

  document.getElementById('missionTitle').value = c.about.mission.title || '';
  document.getElementById('missionText').value = c.about.mission.text || '';
  document.getElementById('visionTitle').value = c.about.vision.title || '';
  document.getElementById('visionText').value = c.about.vision.text || '';

  for (var v = 0; v < 4; v++) {
    var valEl = document.getElementById('value' + (v + 1) + 'Title');
    var valDesc = document.getElementById('value' + (v + 1) + 'Text');
    var valIcon = document.getElementById('value' + (v + 1) + 'Icon');
    if (c.about.values[v]) {
      if (valEl) valEl.value = c.about.values[v].title || '';
      if (valDesc) valDesc.value = c.about.values[v].text || '';
      if (valIcon) valIcon.value = c.about.values[v].icon || '';
    }
  }

  renderServiceItems();
  renderTeamItems();
  renderStatItems();
  renderTestimonialItems();
  renderFaqItems();

  document.getElementById('ctaTitle').value = c.cta.title || '';
  document.getElementById('ctaDesc').value = c.cta.desc || '';
  document.getElementById('ctaBtnText').value = c.cta.btnText || '';
  document.getElementById('ctaBtnLink').value = c.cta.btnLink || '';

  document.getElementById('imgHero').value = c.images.hero || '';
  document.getElementById('imgAbout').value = c.images.about || '';
  document.getElementById('imgGallery1').value = c.images.gallery1 || '';
  document.getElementById('imgGallery2').value = c.images.gallery2 || '';
  document.getElementById('imgGallery3').value = c.images.gallery3 || '';

  document.getElementById('footerAboutText').value = c.footer.aboutText || '';
  document.getElementById('footerWorkingHours').value = c.footer.workingHours || '';
}

function syncFormToConfig() {
  var c = adminState.config;

  c.logo.text = document.getElementById('logoText').value;
  c.logo.icon = document.getElementById('logoIcon').value;

  c.contact.phone = document.getElementById('contactPhone').value;
  c.contact.email = document.getElementById('contactEmail').value;
  c.contact.address = document.getElementById('contactAddress').value;

  c.whatsapp = document.getElementById('whatsappNumber').value;
  c.workingHours = document.getElementById('workingHours').value;

  c.hero.title = document.getElementById('heroTitle').value;
  c.hero.subtitle = document.getElementById('heroSubtitle').value;
  c.hero.description = document.getElementById('heroDescription').value;

  c.about.storyTitle = document.getElementById('storyTitle').value;
  c.about.storyParagraphs = [
    document.getElementById('storyP1').value,
    document.getElementById('storyP2').value,
    document.getElementById('storyP3').value
  ];

  c.about.mission.title = document.getElementById('missionTitle').value;
  c.about.mission.text = document.getElementById('missionText').value;
  c.about.vision.title = document.getElementById('visionTitle').value;
  c.about.vision.text = document.getElementById('visionText').value;

  for (var v = 0; v < 4; v++) {
    var valEl = document.getElementById('value' + (v + 1) + 'Title');
    var valDesc = document.getElementById('value' + (v + 1) + 'Text');
    var valIcon = document.getElementById('value' + (v + 1) + 'Icon');
    if (c.about.values[v]) {
      c.about.values[v].title = valEl ? valEl.value : '';
      c.about.values[v].text = valDesc ? valDesc.value : '';
      c.about.values[v].icon = valIcon ? valIcon.value : '';
    }
  }

  var serviceItems = document.querySelectorAll('.service-admin-item');
  c.services = [];
  serviceItems.forEach(function (item) {
    c.services.push({
      icon: item.querySelector('.srv-icon').value,
      title: item.querySelector('.srv-title').value,
      description: item.querySelector('.srv-desc').value
    });
  });

  var teamItems = document.querySelectorAll('.team-admin-item');
  c.team = [];
  teamItems.forEach(function (item) {
    c.team.push({
      name: item.querySelector('.team-name').value,
      title: item.querySelector('.team-title').value,
      desc: item.querySelector('.team-desc').value,
      image: item.querySelector('.team-image').value
    });
  });

  var statItems = document.querySelectorAll('.stat-admin-item');
  c.stats = [];
  statItems.forEach(function (item) {
    c.stats.push({
      number: parseInt(item.querySelector('.stat-number').value) || 0,
      suffix: item.querySelector('.stat-suffix').value,
      label: item.querySelector('.stat-label').value
    });
  });

  var testimonialItems = document.querySelectorAll('.testimonial-admin-item');
  c.testimonials = [];
  testimonialItems.forEach(function (item) {
    c.testimonials.push({
      text: item.querySelector('.test-text').value,
      name: item.querySelector('.test-name').value,
      role: item.querySelector('.test-role').value
    });
  });

  var faqItems = document.querySelectorAll('.faq-admin-item');
  c.faq = [];
  faqItems.forEach(function (item) {
    c.faq.push({
      question: item.querySelector('.faq-q').value,
      answer: item.querySelector('.faq-a').value
    });
  });

  c.cta.title = document.getElementById('ctaTitle').value;
  c.cta.desc = document.getElementById('ctaDesc').value;
  c.cta.btnText = document.getElementById('ctaBtnText').value;
  c.cta.btnLink = document.getElementById('ctaBtnLink').value;

  c.images.hero = document.getElementById('imgHero').value;
  c.images.about = document.getElementById('imgAbout').value;
  c.images.gallery1 = document.getElementById('imgGallery1').value;
  c.images.gallery2 = document.getElementById('imgGallery2').value;
  c.images.gallery3 = document.getElementById('imgGallery3').value;

  c.footer.aboutText = document.getElementById('footerAboutText').value;
  c.footer.workingHours = document.getElementById('footerWorkingHours').value;

  return c;
}

function saveAdminConfig() {
  var c = syncFormToConfig();
  saveConfig(c);
  showAdminToast('Başarılı', 'Tüm değişiklikler kaydedildi.', 'success');
}

// ===== Servis Yönetimi =====
function renderServiceItems() {
  var container = document.getElementById('serviceList');
  container.innerHTML = '';
  adminState.config.services.forEach(function (svc, i) {
    var item = document.createElement('div');
    item.className = 'service-admin-item';
    item.setAttribute('data-index', i);
    item.innerHTML =
      '<div class="service-admin-header">' +
        '<div class="handle"><i class="fas fa-grip-vertical"></i></div>' +
        '<span class="service-title-display">' + svc.title + '</span>' +
        '<div class="service-actions">' +
          '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
          '<button class="btn-icon danger delete-service" title="Sil"><i class="fas fa-trash"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="service-admin-body">' +
        '<div class="form-group-admin"><label>İkon (Font Awesome sınıfı)</label><input type="text" class="form-control-admin srv-icon" value="' + (svc.icon || '') + '"></div>' +
        '<div class="form-group-admin"><label>Başlık</label><input type="text" class="form-control-admin srv-title" value="' + htmlEncode(svc.title || '') + '"></div>' +
        '<div class="form-group-admin" style="grid-column:1/-1"><label>Açıklama</label><textarea class="form-control-admin srv-desc">' + htmlEncode(svc.description || '') + '</textarea></div>' +
      '</div>';
    container.appendChild(item);

    item.querySelector('.toggle-service').addEventListener('click', function () {
      item.querySelector('.service-admin-body').classList.toggle('open');
      var icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });

    item.querySelector('.delete-service').addEventListener('click', function () {
      if (confirm('Bu hizmeti silmek istediğinize emin misiniz?')) {
        item.remove();
        updateServiceDisplayTitles();
      }
    });
  });
  updateServiceDisplayTitles();
  enableDragSort('serviceList');
}

function addServiceItem() {
  var container = document.getElementById('serviceList');
  var i = container.children.length;
  var item = document.createElement('div');
  item.className = 'service-admin-item';
  item.setAttribute('data-index', i);
  item.innerHTML =
    '<div class="service-admin-header">' +
      '<div class="handle"><i class="fas fa-grip-vertical"></i></div>' +
      '<span class="service-title-display">Yeni Hizmet</span>' +
      '<div class="service-actions">' +
        '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
        '<button class="btn-icon danger delete-service" title="Sil"><i class="fas fa-trash"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="service-admin-body open">' +
      '<div class="form-group-admin"><label>İkon (Font Awesome sınıfı)</label><input type="text" class="form-control-admin srv-icon" value="fas fa-cog"></div>' +
      '<div class="form-group-admin"><label>Başlık</label><input type="text" class="form-control-admin srv-title" value="Yeni Hizmet"></div>' +
      '<div class="form-group-admin" style="grid-column:1/-1"><label>Açıklama</label><textarea class="form-control-admin srv-desc">Hizmet açıklaması...</textarea></div>' +
    '</div>';
  container.appendChild(item);

  item.querySelector('.toggle-service').addEventListener('click', function () {
    item.querySelector('.service-admin-body').classList.toggle('open');
    var icon = this.querySelector('i');
    icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  });

  item.querySelector('.delete-service').addEventListener('click', function () {
    if (confirm('Bu hizmeti silmek istediğinize emin misiniz?')) {
      item.remove();
      updateServiceDisplayTitles();
    }
  });

  updateServiceDisplayTitles();
  enableDragSort('serviceList');
  showAdminToast('Eklendi', 'Yeni hizmet kartı eklendi.', 'success');
}

function updateServiceDisplayTitles() {
  var items = document.querySelectorAll('.service-admin-item');
  items.forEach(function (item) {
    var title = item.querySelector('.srv-title');
    var display = item.querySelector('.service-title-display');
    if (title && display) {
      display.textContent = title.value || 'Yeni Hizmet';
    }
    title.addEventListener('input', function () {
      display.textContent = this.value || 'Yeni Hizmet';
    });
  });
}

// ===== Takım Yönetimi =====
function renderTeamItems() {
  var container = document.getElementById('teamList');
  container.innerHTML = '';
  adminState.config.team.forEach(function (m, i) {
    var item = document.createElement('div');
    item.className = 'service-admin-item team-admin-item';
    item.innerHTML =
      '<div class="service-admin-header">' +
        '<span class="service-title-display">' + htmlEncode(m.name) + '</span>' +
        '<div class="service-actions">' +
          '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="service-admin-body">' +
        '<div class="form-group-admin"><label>Ad Soyad</label><input type="text" class="form-control-admin team-name" value="' + htmlEncode(m.name || '') + '"></div>' +
        '<div class="form-group-admin"><label>Ünvan</label><input type="text" class="form-control-admin team-title" value="' + htmlEncode(m.title || '') + '"></div>' +
        '<div class="form-group-admin"><label>Açıklama</label><textarea class="form-control-admin team-desc">' + htmlEncode(m.desc || '') + '</textarea></div>' +
        '<div class="form-group-admin"><label>Görsel URL</label><input type="text" class="form-control-admin team-image" value="' + htmlEncode(m.image || '') + '"></div>' +
      '</div>';
    container.appendChild(item);

    item.querySelector('.toggle-service').addEventListener('click', function () {
      item.querySelector('.service-admin-body').classList.toggle('open');
      var icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });
  });
}

// ===== İstatistik Yönetimi =====
function renderStatItems() {
  var container = document.getElementById('statList');
  container.innerHTML = '';
  adminState.config.stats.forEach(function (s, i) {
    var item = document.createElement('div');
    item.className = 'service-admin-item stat-admin-item';
    item.innerHTML =
      '<div class="service-admin-header">' +
        '<span class="service-title-display">' + htmlEncode(s.label) + '</span>' +
        '<div class="service-actions">' +
          '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="service-admin-body">' +
        '<div class="form-group-admin"><label>Sayı</label><input type="number" class="form-control-admin stat-number" value="' + (s.number || 0) + '"></div>' +
        '<div class="form-group-admin"><label>Son Ek</label><input type="text" class="form-control-admin stat-suffix" value="' + htmlEncode(s.suffix || '') + '"></div>' +
        '<div class="form-group-admin" style="grid-column:1/-1"><label>Etiket</label><input type="text" class="form-control-admin stat-label" value="' + htmlEncode(s.label || '') + '"></div>' +
      '</div>';
    container.appendChild(item);

    item.querySelector('.toggle-service').addEventListener('click', function () {
      item.querySelector('.service-admin-body').classList.toggle('open');
      var icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });
  });
}

// ===== Müşteri Yorumları Yönetimi =====
function renderTestimonialItems() {
  var container = document.getElementById('testimonialList');
  container.innerHTML = '';
  adminState.config.testimonials.forEach(function (t, i) {
    var item = document.createElement('div');
    item.className = 'service-admin-item testimonial-admin-item';
    item.innerHTML =
      '<div class="service-admin-header">' +
        '<span class="service-title-display">' + htmlEncode(t.name) + '</span>' +
        '<div class="service-actions">' +
          '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
          '<button class="btn-icon danger delete-testimonial" title="Sil"><i class="fas fa-trash"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="service-admin-body">' +
        '<div class="form-group-admin" style="grid-column:1/-1"><label>Yorum Metni</label><textarea class="form-control-admin test-text">' + htmlEncode(t.text || '') + '</textarea></div>' +
        '<div class="form-group-admin"><label>Ad Soyad</label><input type="text" class="form-control-admin test-name" value="' + htmlEncode(t.name || '') + '"></div>' +
        '<div class="form-group-admin"><label>Ünvan</label><input type="text" class="form-control-admin test-role" value="' + htmlEncode(t.role || '') + '"></div>' +
      '</div>';
    container.appendChild(item);

    item.querySelector('.toggle-service').addEventListener('click', function () {
      item.querySelector('.service-admin-body').classList.toggle('open');
      var icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });

    item.querySelector('.delete-testimonial').addEventListener('click', function () {
      if (confirm('Bu yorumu silmek istediğinize emin misiniz?')) {
        item.remove();
      }
    });
  });
}

function addTestimonialItem() {
  var container = document.getElementById('testimonialList');
  var item = document.createElement('div');
  item.className = 'service-admin-item testimonial-admin-item';
  item.innerHTML =
    '<div class="service-admin-header">' +
      '<span class="service-title-display">Yeni Yorum</span>' +
      '<div class="service-actions">' +
        '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
        '<button class="btn-icon danger delete-testimonial" title="Sil"><i class="fas fa-trash"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="service-admin-body open">' +
      '<div class="form-group-admin" style="grid-column:1/-1"><label>Yorum Metni</label><textarea class="form-control-admin test-text">Yorum metni...</textarea></div>' +
      '<div class="form-group-admin"><label>Ad Soyad</label><input type="text" class="form-control-admin test-name" value="Yeni Müşteri"></div>' +
      '<div class="form-group-admin"><label>Ünvan</label><input type="text" class="form-control-admin test-role" value="Ünvan"></div>' +
    '</div>';
  container.appendChild(item);

  item.querySelector('.toggle-service').addEventListener('click', function () {
    item.querySelector('.service-admin-body').classList.toggle('open');
    var icon = this.querySelector('i');
    icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  });

  item.querySelector('.delete-testimonial').addEventListener('click', function () {
    if (confirm('Bu yorumu silmek istediğinize emin misiniz?')) {
      item.remove();
    }
  });

  showAdminToast('Eklendi', 'Yeni müşteri yorumu eklendi.', 'success');
}

// ===== SSS Yönetimi =====
function renderFaqItems() {
  var container = document.getElementById('faqList');
  container.innerHTML = '';
  adminState.config.faq.forEach(function (f, i) {
    var item = document.createElement('div');
    item.className = 'service-admin-item faq-admin-item';
    item.innerHTML =
      '<div class="service-admin-header">' +
        '<span class="service-title-display">' + htmlEncode(f.question) + '</span>' +
        '<div class="service-actions">' +
          '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
          '<button class="btn-icon danger delete-faq" title="Sil"><i class="fas fa-trash"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="service-admin-body">' +
        '<div class="form-group-admin" style="grid-column:1/-1"><label>Soru</label><input type="text" class="form-control-admin faq-q" value="' + htmlEncode(f.question || '') + '"></div>' +
        '<div class="form-group-admin" style="grid-column:1/-1"><label>Cevap</label><textarea class="form-control-admin faq-a">' + htmlEncode(f.answer || '') + '</textarea></div>' +
      '</div>';
    container.appendChild(item);

    item.querySelector('.toggle-service').addEventListener('click', function () {
      item.querySelector('.service-admin-body').classList.toggle('open');
      var icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });

    item.querySelector('.delete-faq').addEventListener('click', function () {
      if (confirm('Bu SSS kaydını silmek istediğinize emin misiniz?')) {
        item.remove();
      }
    });
  });
}

function addFaqItem() {
  var container = document.getElementById('faqList');
  var item = document.createElement('div');
  item.className = 'service-admin-item faq-admin-item';
  item.innerHTML =
    '<div class="service-admin-header">' +
      '<span class="service-title-display">Yeni Soru</span>' +
      '<div class="service-actions">' +
        '<button class="btn-icon toggle-service" title="Düzenle"><i class="fas fa-chevron-down"></i></button>' +
        '<button class="btn-icon danger delete-faq" title="Sil"><i class="fas fa-trash"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="service-admin-body open">' +
      '<div class="form-group-admin" style="grid-column:1/-1"><label>Soru</label><input type="text" class="form-control-admin faq-q" value="Yeni soru..."></div>' +
      '<div class="form-group-admin" style="grid-column:1/-1"><label>Cevap</label><textarea class="form-control-admin faq-a">Cevap...</textarea></div>' +
    '</div>';
  container.appendChild(item);

  item.querySelector('.toggle-service').addEventListener('click', function () {
    item.querySelector('.service-admin-body').classList.toggle('open');
    var icon = this.querySelector('i');
    icon.className = icon.className === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  });

  item.querySelector('.delete-faq').addEventListener('click', function () {
    if (confirm('Bu SSS kaydını silmek istediğinize emin misiniz?')) {
      item.remove();
    }
  });

  showAdminToast('Eklendi', 'Yeni SSS kaydı eklendi.', 'success');
}

// ===== Sürükle-Bırak Sıralama =====
function enableDragSort(listId) {
  var list = document.getElementById(listId);
  if (!list) return;
  var items = list.querySelectorAll('.service-admin-item');
  var dragSrcEl = null;

  items.forEach(function (item) {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', function (e) {
      dragSrcEl = this;
      this.style.opacity = '0.4';
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', function () {
      this.style.opacity = '1';
    });
    item.addEventListener('dragover', function (e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    item.addEventListener('dragleave', function () {
      this.classList.remove('drag-over');
    });
    item.addEventListener('drop', function (e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      if (dragSrcEl !== this) {
        var parent = this.parentNode;
        var children = Array.from(parent.children);
        var srcIndex = children.indexOf(dragSrcEl);
        var targetIndex = children.indexOf(this);
        if (srcIndex < targetIndex) {
          parent.insertBefore(dragSrcEl, this.nextSibling);
        } else {
          parent.insertBefore(dragSrcEl, this);
        }
      }
    });
  });
}

// ===== JSON Dışa/İçe Aktar =====
function exportJSON() {
  var c = syncFormToConfig();
  var blob = new Blob([JSON.stringify(c, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'aaguvenlik-config.json';
  a.click();
  URL.revokeObjectURL(url);
  showAdminToast('Dışa Aktarıldı', 'Yapılandırma JSON dosyası indirildi.', 'success');
}

function importJSON() {
  document.getElementById('importFileInput').click();
}

function handleFileImport(event) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    try {
      var imported = JSON.parse(e.target.result);
      adminState.config = mergeDeep(defaultConfig, imported);
      saveConfig(adminState.config);
      loadConfigToForm();
      showAdminToast('Başarılı', 'Yapılandırma başarıyla içe aktarıldı.', 'success');
    } catch (err) {
      showAdminToast('Hata', 'Geçersiz JSON dosyası.', 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function resetToDefaults() {
  if (confirm('Tüm ayarları varsayılana sıfırlamak istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
    if (confirm('Son bir kez: Tüm veriler silinecek ve varsayılan ayarlar yüklenecek. Devam etmek istiyor musunuz?')) {
      localStorage.removeItem('aaguvenlik-config');
      adminState.config = JSON.parse(JSON.stringify(defaultConfig));
      loadConfigToForm();
      showAdminToast('Sıfırlandı', 'Tüm ayarlar varsayılana döndürüldü.', 'warning');
    }
  }
}

function loadInspectionRequests() {
  var container = document.getElementById('inspectionTableBody');
  if (!container) return;
  container.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px"><i class="fas fa-spinner fa-spin"></i> Yükleniyor...</td></tr>';
  fetch('api/get-inspections.php', { credentials: 'same-origin' })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      container.innerHTML = '';
      if (!result.success) {
        container.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--admin-danger)">' + htmlEncode(result.message) + '</td></tr>';
        return;
      }
      var data = result.data.inspections || [];
      if (data.length === 0) {
        container.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px">Henüz talep bulunmuyor.</td></tr>';
        return;
      }
      data.forEach(function (r) {
        var tr = document.createElement('tr');
        var statusClass = r.read ? 'status-read' : 'status-new';
        var statusText = r.read ? 'Okundu' : 'Yeni';
        tr.innerHTML =
          '<td>' + htmlEncode(r.siteName || '') + '</td>' +
          '<td>' + htmlEncode(r.managerName || '') + '</td>' +
          '<td>' + htmlEncode(r.managerPhone || '') + '</td>' +
          '<td>' + htmlEncode(r.siteAddress || '') + '</td>' +
          '<td><span class="status-badge ' + statusClass + '">' + htmlEncode(statusText) + '</span></td>' +
          '<td>' + (r.created_at || '') + '</td>';
        container.appendChild(tr);
      });
    })
    .catch(function () {
      container.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--admin-danger)">Veriler yüklenirken hata oluştu.</td></tr>';
    });
}

function loadDashboard() {
  fetch('api/get-inspections.php', { credentials: 'same-origin' })
    .then(function(r) { return r.json(); })
    .then(function(result) {
      if (!result.success) return;
      var inspections = result.data.inspections || [];
      var messages = result.data.messages || [];
      var all = inspections.concat(messages);
      var today = new Date().toISOString().slice(0, 10);
      var todayCount = all.filter(function(item) { return item.created_at && item.created_at.slice(0, 10) === today; }).length;
      var unread = all.filter(function(item) { return !item.read; }).length;
      var el = function(id) { return document.getElementById(id); };
      if (el('dashMessages')) el('dashMessages').textContent = messages.length;
      if (el('dashInspections')) el('dashInspections').textContent = inspections.length;
      if (el('dashUnread')) el('dashUnread').textContent = unread;
      if (el('dashToday')) el('dashToday').textContent = todayCount;
    }).catch(function(){});
}

function htmlEncode(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ===== Başlangıç =====
document.addEventListener('DOMContentLoaded', function () {
  adminState.config = getConfig();

  loadConfigToForm();

  switchSection('genel');

  document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', function () {
      switchSection(this.getAttribute('data-section'));
    });
  });

  document.getElementById('hamburgerAdmin').addEventListener('click', function () {
    document.querySelector('.admin-sidebar').classList.toggle('open');
  });

  document.querySelectorAll('.admin-section').forEach(function (section) {
    section.setAttribute('data-title', section.querySelector('.section-header h2') ? section.querySelector('.section-header h2').textContent : '');
  });

  document.getElementById('saveBtn').addEventListener('click', saveAdminConfig);

  document.getElementById('exportBtn').addEventListener('click', exportJSON);
  document.getElementById('importBtn').addEventListener('click', importJSON);
  document.getElementById('resetBtn').addEventListener('click', resetToDefaults);

  document.getElementById('addServiceBtn').addEventListener('click', addServiceItem);
  document.getElementById('addTestimonialBtn').addEventListener('click', addTestimonialItem);
  document.getElementById('addFaqBtn').addEventListener('click', addFaqItem);

  document.getElementById('viewSiteBtn').addEventListener('click', function () {
    window.open('index.html', '_blank');
  });

  loadInspectionRequests();
  loadDashboard();

  document.getElementById('adminLogoutBtn') && document.getElementById('adminLogoutBtn').addEventListener('click', function() {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      localStorage.removeItem('aaguvenlik-admin-auth');
      fetch('api/admin-logout.php', { method: 'POST', credentials: 'same-origin' }).catch(function(){});
      location.reload();
    }
  });
});
