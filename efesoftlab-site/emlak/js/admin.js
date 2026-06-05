/* ============================================================
   Admin Panel JavaScript
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ===== ELEMANLAR ===== */
  var form = document.getElementById('adminForm');
  var servicesContainer = document.getElementById('servicesContainer');
  var addServiceBtn = document.getElementById('addServiceBtn');
  var exportBtn = document.getElementById('exportConfigBtn');
  var importBtn = document.getElementById('importConfigBtn');
  var importInput = document.getElementById('importFileInput');
  var resetBtn = document.getElementById('resetConfigBtn');
  var configPreview = document.getElementById('configPreview');
  var saveStatus = document.getElementById('saveStatus');
  var adminToast = document.getElementById('adminToast');

  /* ===== FORM ALANLARI ===== */
  var fields = {
    logoText: document.getElementById('logoText'),
    logoIcon: document.getElementById('logoIcon'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    address: document.getElementById('address'),
    heroTitle: document.getElementById('heroTitle'),
    heroTitleSpan: document.getElementById('heroTitleSpan'),
    heroDescription: document.getElementById('heroDescription')
  };

  /* ===== PROPERTIES ELEMANLARI ===== */
  var propSelect = document.getElementById('propertySelect');
  var propPrevBtn = document.getElementById('propertyPrevBtn');
  var propNextBtn = document.getElementById('propertyNextBtn');
  var propEditForm = document.getElementById('propertyEditForm');
  var propIndexDisplay = document.getElementById('propIndexDisplay');
  var propImagesGrid = document.getElementById('propImagesGrid');
  var propNewImageUrl = document.getElementById('propNewImageUrl');
  var propAddImageBtn = document.getElementById('propAddImageBtn');
  var propFields = {
    title: document.getElementById('propTitle'),
    location: document.getElementById('propLocation'),
    price: document.getElementById('propPrice'),
    type: document.getElementById('propType'),
    bed: document.getElementById('propBed'),
    bath: document.getElementById('propBath'),
    sqft: document.getElementById('propSqft')
  };

  var currentPropertyIndex = -1;

  /* ===== IMAGE FIELDS ===== */
  var imageFields = {
    hero: document.getElementById('imageHero'),
    about: document.getElementById('imageAbout'),
    cta: document.getElementById('imageCta')
  };

  /* ===== NEW CONTAINERS ===== */
  var agentsContainer = document.getElementById('agentsContainer');
  var testimonialsContainer = document.getElementById('testimonialsContainer');
  var statsContainer = document.getElementById('statsContainer');
  var faqContainer = document.getElementById('faqContainer');
  var valuesContainer = document.getElementById('valuesContainer');
  var branchesContainer = document.getElementById('branchesContainer');

  /* ===== NEW FIELDS ===== */
  var newFields = {
    footerAboutText: document.getElementById('footerAboutText'),
    footerWorkingHours: document.getElementById('footerWorkingHours'),
    ctaTitle: document.getElementById('ctaTitle'),
    ctaDesc: document.getElementById('ctaDesc'),
    ctaBtnText: document.getElementById('ctaBtnText'),
    ctaBtnLink: document.getElementById('ctaBtnLink'),
    aboutStoryTitle: document.getElementById('aboutStoryTitle'),
    aboutStoryP0: document.getElementById('aboutStoryP0'),
    aboutStoryP1: document.getElementById('aboutStoryP1'),
    aboutStoryP2: document.getElementById('aboutStoryP2'),
    aboutMissionTitle: document.getElementById('aboutMissionTitle'),
    aboutMissionText: document.getElementById('aboutMissionText'),
    aboutVisionTitle: document.getElementById('aboutVisionTitle'),
    aboutVisionText: document.getElementById('aboutVisionText'),
    whWeekdays: document.getElementById('whWeekdays'),
    whSaturday: document.getElementById('whSaturday'),
    whSunday: document.getElementById('whSunday')
  };

  /* ===== MEVCUT CONFIG'İ YÜKLE ===== */
  var config = getConfig();

  function loadForm() {
    fields.logoText.value = config.logo.text || '';
    fields.logoIcon.value = config.logo.icon || '';
    fields.phone.value = config.contact.phone || '';
    fields.email.value = config.contact.email || '';
    fields.address.value = config.contact.address || '';
    fields.heroTitle.value = config.hero.title || '';
    fields.heroTitleSpan.value = config.hero.titleSpan || '';
    fields.heroDescription.value = config.hero.description || '';

    if (config.images) {
      imageFields.hero.value = config.images.hero || '';
      imageFields.about.value = config.images.about || '';
      imageFields.cta.value = config.images.cta || '';
      updateImagePreview('hero');
      updateImagePreview('about');
      updateImagePreview('cta');
    }

    newFields.footerAboutText.value = config.footer.aboutText || '';
    newFields.footerWorkingHours.value = config.footer.workingHours || '';

    newFields.ctaTitle.value = config.cta.title || '';
    newFields.ctaDesc.value = config.cta.desc || '';
    newFields.ctaBtnText.value = config.cta.btnText || '';
    newFields.ctaBtnLink.value = config.cta.btnLink || '';

    newFields.aboutStoryTitle.value = config.about.storyTitle || '';
    if (config.about.storyParagraphs) {
      newFields.aboutStoryP0.value = config.about.storyParagraphs[0] || '';
      newFields.aboutStoryP1.value = config.about.storyParagraphs[1] || '';
      newFields.aboutStoryP2.value = config.about.storyParagraphs[2] || '';
    }
    newFields.aboutMissionTitle.value = config.about.mission.title || '';
    newFields.aboutMissionText.value = config.about.mission.text || '';
    newFields.aboutVisionTitle.value = config.about.vision.title || '';
    newFields.aboutVisionText.value = config.about.vision.text || '';

    newFields.whWeekdays.value = config.workingHours.weekdays || '';
    newFields.whSaturday.value = config.workingHours.saturday || '';
    newFields.whSunday.value = config.workingHours.sunday || '';

    renderServices();
    populatePropertySelect();
    renderAgents();
    renderTestimonials();
    renderStats();
    renderFaq();
    renderValues();
    renderBranches();
    updatePreview();
  }

  /* ===== SERVİSLER ===== */
  function renderServices() {
    servicesContainer.innerHTML = '';
    config.services.forEach(function (service, index) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header">' +
          '<h4><span class="service-number">' + (index + 1) + '</span> ' +
            '<span>' + escapeHtml(service.title || 'Yeni Hizmet') + '</span>' +
          '</h4>' +
          '<div class="admin-service-actions">' +
            '<button type="button" class="admin-service-btn move-up" data-index="' + index + '" title="Yukarı Taşı"><i class="fas fa-chevron-up"></i></button>' +
            '<button type="button" class="admin-service-btn move-down" data-index="' + index + '" title="Aşağı Taşı"><i class="fas fa-chevron-down"></i></button>' +
            '<button type="button" class="admin-service-btn delete" data-index="' + index + '" title="Sil"><i class="fas fa-trash"></i></button>' +
          '</div>' +
        '</div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group">' +
            '<label>İkon Sınıfı</label>' +
            '<input type="text" class="admin-input service-icon" value="' + escapeHtml(service.icon || 'fas fa-home') + '" placeholder="fas fa-home">' +
          '</div>' +
          '<div class="admin-form-group">' +
            '<label>Başlık</label>' +
            '<input type="text" class="admin-input service-title" value="' + escapeHtml(service.title || '') + '" placeholder="Hizmet adı">' +
          '</div>' +
        '</div>' +
        '<div class="admin-form-group">' +
          '<label>Açıklama</label>' +
          '<textarea class="admin-input admin-textarea service-desc" rows="2" placeholder="Hizmet açıklaması">' + escapeHtml(service.description || '') + '</textarea>' +
        '</div>';

      servicesContainer.appendChild(card);
    });

    document.querySelectorAll('.admin-service-card .move-up').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        if (idx > 0) moveService(idx, idx - 1);
      });
    });

    document.querySelectorAll('.admin-service-card .move-down').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        if (idx < config.services.length - 1) moveService(idx, idx + 1);
      });
    });

    document.querySelectorAll('.admin-service-card .delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        if (confirm(config.services[idx].title + ' hizmetini silmek istediğinize emin misiniz?')) {
          config.services.splice(idx, 1);
          renderServices();
          updatePreview();
          showToast('Hizmet silindi.', 'success');
        }
      });
    });

    document.querySelectorAll('.admin-service-card .service-icon').forEach(function (input, idx) {
      input.addEventListener('input', function () { syncServiceFromDOM(); updatePreview(); });
    });
    document.querySelectorAll('.admin-service-card .service-title').forEach(function (input, idx) {
      input.addEventListener('input', function () { syncServiceFromDOM(); updatePreview(); });
    });
    document.querySelectorAll('.admin-service-card .service-desc').forEach(function (textarea, idx) {
      textarea.addEventListener('input', function () { syncServiceFromDOM(); updatePreview(); });
    });
  }

  function syncServiceFromDOM() {
    var cards = document.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      var icon = card.querySelector('.service-icon');
      var title = card.querySelector('.service-title');
      var desc = card.querySelector('.service-desc');
      if (icon) config.services[idx].icon = icon.value;
      if (title) config.services[idx].title = title.value;
      if (desc) config.services[idx].description = desc.value;
    });
  }

  function moveService(from, to) {
    var item = config.services.splice(from, 1)[0];
    config.services.splice(to, 0, item);
    renderServices();
    updatePreview();
    showToast('Sıralama güncellendi.', 'success');
  }

  addServiceBtn.addEventListener('click', function () {
    config.services.push({
      icon: 'fas fa-plus-circle',
      title: 'Yeni Hizmet',
      description: 'Hizmet açıklaması buraya yazılacak.'
    });
    renderServices();
    updatePreview();
    showToast('Yeni hizmet eklendi.', 'success');
    var cards = document.querySelectorAll('.admin-service-card');
    if (cards.length > 0) {
      cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  /* ===== PROPERTIES ===== */
  function populatePropertySelect() {
    propSelect.innerHTML = '<option value="">-- İlan Seçin --</option>';
    if (!config.properties) return;
    config.properties.forEach(function (p, i) {
      var opt = document.createElement('option');
      opt.value = i;
      opt.textContent = (i + 1) + '. ' + p.title;
      propSelect.appendChild(opt);
    });
  }

  function renderPropertyImages() {
    if (currentPropertyIndex < 0 || !config.properties[currentPropertyIndex]) return;
    var p = config.properties[currentPropertyIndex];
    var images = p.images || [];
    propImagesGrid.innerHTML = '';
    images.forEach(function (url, idx) {
      var thumb = document.createElement('div');
      thumb.className = 'admin-image-thumb';
      thumb.innerHTML =
        '<img src="' + escapeHtml(url) + '" alt="Resim ' + (idx + 1) + '" onerror="this.parentElement.classList.add(\'broken\')">' +
        '<div class="admin-thumb-overlay">' +
          '<button type="button" class="admin-thumb-btn move-up-img" data-img-index="' + idx + '" title="Sola Taşı"><i class="fas fa-chevron-left"></i></button>' +
          '<button type="button" class="admin-thumb-btn move-down-img" data-img-index="' + idx + '" title="Sağa Taşı"><i class="fas fa-chevron-right"></i></button>' +
          '<button type="button" class="admin-thumb-btn delete-img" data-img-index="' + idx + '" title="Sil"><i class="fas fa-times"></i></button>' +
        '</div>' +
        '<span class="admin-thumb-index">' + (idx + 1) + '</span>';
      propImagesGrid.appendChild(thumb);
    });

    propImagesGrid.querySelectorAll('.move-up-img').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-img-index'), 10);
        if (idx > 0) movePropertyImage(idx, idx - 1);
      });
    });
    propImagesGrid.querySelectorAll('.move-down-img').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-img-index'), 10);
        if (idx < images.length - 1) movePropertyImage(idx, idx + 1);
      });
    });
    propImagesGrid.querySelectorAll('.delete-img').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-img-index'), 10);
        if (confirm(idx + 1 + '. resmi silmek istediğinize emin misiniz?')) {
          config.properties[currentPropertyIndex].images.splice(idx, 1);
          renderPropertyImages();
          updatePreview();
        }
      });
    });
  }

  function movePropertyImage(from, to) {
    var p = config.properties[currentPropertyIndex];
    var item = p.images.splice(from, 1)[0];
    p.images.splice(to, 0, item);
    renderPropertyImages();
    updatePreview();
  }

  function loadPropertyToForm(index) {
    if (!config.properties || !config.properties[index]) return;
    var p = config.properties[index];
    currentPropertyIndex = index;
    propFields.title.value = p.title || '';
    propFields.location.value = p.location || '';
    propFields.price.value = p.price || '';
    propFields.type.value = p.type || 'sale';
    propFields.bed.value = p.bed || '';
    propFields.bath.value = p.bath || '';
    propFields.sqft.value = p.sqft || '';
    propSelect.value = index;
    propIndexDisplay.textContent = (index + 1) + ' / ' + config.properties.length;
    propEditForm.style.display = 'block';
    renderPropertyImages();
  }

  function syncPropertyFromForm() {
    if (currentPropertyIndex < 0 || !config.properties || !config.properties[currentPropertyIndex]) return;
    var p = config.properties[currentPropertyIndex];
    p.title = propFields.title.value.trim();
    p.location = propFields.location.value.trim();
    p.price = parseFloat(propFields.price.value) || 0;
    p.type = propFields.type.value;
    p.bed = propFields.bed.value.trim();
    p.bath = parseInt(propFields.bath.value, 10) || 0;
    p.sqft = parseInt(propFields.sqft.value, 10) || 0;
    p.period = p.type === 'rent' ? '/Ay' : '';
  }

  /* Add image */
  propAddImageBtn.addEventListener('click', function () {
    var url = propNewImageUrl.value.trim();
    if (!url) { showToast('Lütfen bir resim URL\'si girin.', 'error'); return; }
    if (currentPropertyIndex < 0 || !config.properties[currentPropertyIndex]) return;
    if (!config.properties[currentPropertyIndex].images) config.properties[currentPropertyIndex].images = [];
    config.properties[currentPropertyIndex].images.push(url);
    propNewImageUrl.value = '';
    renderPropertyImages();
    updatePreview();
    showToast('Resim eklendi.', 'success');
  });

  propNewImageUrl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); propAddImageBtn.click(); }
  });

  propSelect.addEventListener('change', function () {
    var val = parseInt(this.value, 10);
    if (!isNaN(val) && val >= 0) {
      loadPropertyToForm(val);
    } else {
      propEditForm.style.display = 'none';
      currentPropertyIndex = -1;
    }
  });

  propPrevBtn.addEventListener('click', function () {
    if (!config.properties || config.properties.length === 0) return;
    if (currentPropertyIndex < 0) { loadPropertyToForm(0); return; }
    syncPropertyFromForm();
    var idx = (currentPropertyIndex - 1 + config.properties.length) % config.properties.length;
    loadPropertyToForm(idx);
    updatePreview();
  });

  propNextBtn.addEventListener('click', function () {
    if (!config.properties || config.properties.length === 0) return;
    if (currentPropertyIndex < 0) { loadPropertyToForm(0); return; }
    syncPropertyFromForm();
    var idx = (currentPropertyIndex + 1) % config.properties.length;
    loadPropertyToForm(idx);
    updatePreview();
  });

  var propAutoSyncFields = [propFields.title, propFields.location, propFields.price, propFields.type, propFields.bed, propFields.bath, propFields.sqft];
  propAutoSyncFields.forEach(function (el) {
    el.addEventListener('input', function () { syncPropertyFromForm(); updatePreview(); });
    el.addEventListener('change', function () { syncPropertyFromForm(); updatePreview(); });
  });

  /* ===== GÖRSEL YÖNETİMİ ===== */
  function updateImagePreview(key) {
    var previewEl = document.getElementById('image' + key.charAt(0).toUpperCase() + key.slice(1) + 'Preview');
    if (!previewEl) return;
    var url = imageFields[key].value.trim();
    if (url) {
      previewEl.src = url;
      previewEl.style.display = 'block';
      previewEl.style.maxWidth = '200px';
      previewEl.style.maxHeight = '100px';
      previewEl.style.marginTop = '8px';
      previewEl.style.borderRadius = '4px';
      previewEl.style.border = '1px solid #e0e0e0';
    } else {
      previewEl.style.display = 'none';
    }
  }

  imageFields.hero.addEventListener('input', function () { updateImagePreview('hero'); });
  imageFields.about.addEventListener('input', function () { updateImagePreview('about'); });
  imageFields.cta.addEventListener('input', function () { updateImagePreview('cta'); });

  /* ===== NEW FIELDS LIVE PREVIEW ===== */
  Object.keys(newFields).forEach(function (key) {
    newFields[key].addEventListener('input', function () { updatePreview(); });
  });

  /* ===== DEĞERLER ===== */
  function renderValues() {
    valuesContainer.innerHTML = '';
    config.about.values.forEach(function (v, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> ' + escapeHtml(v.title || 'Değer') + '</h4></div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group" style="flex:1;">' +
            '<label>İkon</label>' +
            '<input type="text" class="admin-input value-icon" value="' + escapeHtml(v.icon) + '" placeholder="fas fa-handshake">' +
          '</div>' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Başlık</label>' +
            '<input type="text" class="admin-input value-title" value="' + escapeHtml(v.title) + '" placeholder="Değer adı">' +
          '</div>' +
        '</div>' +
        '<div class="admin-form-group">' +
          '<label>Açıklama</label>' +
          '<textarea class="admin-input admin-textarea value-text" rows="2" placeholder="Değer açıklaması">' + escapeHtml(v.text) + '</textarea>' +
        '</div>';
      valuesContainer.appendChild(card);
    });
    valuesContainer.querySelectorAll('.value-icon').forEach(function (el) { el.addEventListener('input', function () { syncValuesFromDOM(); updatePreview(); }); });
    valuesContainer.querySelectorAll('.value-title').forEach(function (el) { el.addEventListener('input', function () { syncValuesFromDOM(); updatePreview(); }); });
    valuesContainer.querySelectorAll('.value-text').forEach(function (el) { el.addEventListener('input', function () { syncValuesFromDOM(); updatePreview(); }); });
  }

  function syncValuesFromDOM() {
    var cards = valuesContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.about.values[idx]) return;
      config.about.values[idx].icon = card.querySelector('.value-icon').value;
      config.about.values[idx].title = card.querySelector('.value-title').value;
      config.about.values[idx].text = card.querySelector('.value-text').value;
    });
  }

  /* ===== DANIŞMANLAR ===== */
  function renderAgents() {
    agentsContainer.innerHTML = '';
    config.agents.forEach(function (a, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> ' + escapeHtml(a.name) + '</h4></div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Ad Soyad</label>' +
            '<input type="text" class="admin-input agent-name" value="' + escapeHtml(a.name) + '">' +
          '</div>' +
          '<div class="admin-form-group" style="flex:1;">' +
            '<label>Ünvan</label>' +
            '<input type="text" class="admin-input agent-title" value="' + escapeHtml(a.title) + '">' +
          '</div>' +
        '</div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Açıklama</label>' +
            '<textarea class="admin-input admin-textarea agent-desc" rows="2">' + escapeHtml(a.desc) + '</textarea>' +
          '</div>' +
          '<div class="admin-form-group" style="flex:1;">' +
            '<label>Resim URL</label>' +
            '<input type="text" class="admin-input agent-image" value="' + escapeHtml(a.image) + '" placeholder="https://...">' +
          '</div>' +
        '</div>';
      agentsContainer.appendChild(card);
    });
    agentsContainer.querySelectorAll('input, textarea').forEach(function (el) { el.addEventListener('input', function () { syncAgentsFromDOM(); updatePreview(); }); });
  }

  function syncAgentsFromDOM() {
    var cards = agentsContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.agents[idx]) return;
      config.agents[idx].name = card.querySelector('.agent-name').value;
      config.agents[idx].title = card.querySelector('.agent-title').value;
      config.agents[idx].desc = card.querySelector('.agent-desc').value;
      config.agents[idx].image = card.querySelector('.agent-image').value;
    });
  }

  /* ===== MÜŞTERİ YORUMLARI ===== */
  function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    config.testimonials.forEach(function (t, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> ' + escapeHtml(t.name) + '</h4></div>' +
        '<div class="admin-form-group">' +
          '<label>Yorum Metni</label>' +
          '<textarea class="admin-input admin-textarea testimonial-text" rows="3">' + escapeHtml(t.text) + '</textarea>' +
        '</div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group">' +
            '<label>Ad Soyad</label>' +
            '<input type="text" class="admin-input testimonial-name" value="' + escapeHtml(t.name) + '">' +
          '</div>' +
          '<div class="admin-form-group">' +
            '<label>Rol</label>' +
            '<input type="text" class="admin-input testimonial-role" value="' + escapeHtml(t.role) + '">' +
          '</div>' +
        '</div>';
      testimonialsContainer.appendChild(card);
    });
    testimonialsContainer.querySelectorAll('input, textarea').forEach(function (el) { el.addEventListener('input', function () { syncTestimonialsFromDOM(); updatePreview(); }); });
  }

  function syncTestimonialsFromDOM() {
    var cards = testimonialsContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.testimonials[idx]) return;
      config.testimonials[idx].text = card.querySelector('.testimonial-text').value;
      config.testimonials[idx].name = card.querySelector('.testimonial-name').value;
      config.testimonials[idx].role = card.querySelector('.testimonial-role').value;
    });
  }

  /* ===== İSTATİSTİKLER ===== */
  function renderStats() {
    statsContainer.innerHTML = '';
    config.stats.forEach(function (s, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> ' + escapeHtml(s.label) + '</h4></div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group">' +
            '<label>Sayı</label>' +
            '<input type="number" class="admin-input stat-number" value="' + s.number + '" min="0">' +
          '</div>' +
          '<div class="admin-form-group">' +
            '<label>Sonek</label>' +
            '<input type="text" class="admin-input stat-suffix" value="' + escapeHtml(s.suffix) + '" placeholder="+">' +
          '</div>' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Etiket</label>' +
            '<input type="text" class="admin-input stat-label" value="' + escapeHtml(s.label) + '" placeholder="Satılık & Kiralık İlan">' +
          '</div>' +
        '</div>';
      statsContainer.appendChild(card);
    });
    statsContainer.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', function () { syncStatsFromDOM(); updatePreview(); }); });
  }

  function syncStatsFromDOM() {
    var cards = statsContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.stats[idx]) return;
      config.stats[idx].number = parseInt(card.querySelector('.stat-number').value, 10) || 0;
      config.stats[idx].suffix = card.querySelector('.stat-suffix').value;
      config.stats[idx].label = card.querySelector('.stat-label').value;
    });
  }

  /* ===== SSS ===== */
  function renderFaq() {
    faqContainer.innerHTML = '';
    config.faq.forEach(function (f, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> SSS</h4></div>' +
        '<div class="admin-form-group">' +
          '<label>Soru</label>' +
          '<input type="text" class="admin-input faq-question" value="' + escapeHtml(f.question) + '">' +
        '</div>' +
        '<div class="admin-form-group">' +
          '<label>Cevap</label>' +
          '<textarea class="admin-input admin-textarea faq-answer" rows="2">' + escapeHtml(f.answer) + '</textarea>' +
        '</div>';
      faqContainer.appendChild(card);
    });
    faqContainer.querySelectorAll('input, textarea').forEach(function (el) { el.addEventListener('input', function () { syncFaqFromDOM(); updatePreview(); }); });
  }

  function syncFaqFromDOM() {
    var cards = faqContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.faq[idx]) return;
      config.faq[idx].question = card.querySelector('.faq-question').value;
      config.faq[idx].answer = card.querySelector('.faq-answer').value;
    });
  }

  /* ===== ŞUBELER ===== */
  function renderBranches() {
    branchesContainer.innerHTML = '';
    config.branches.forEach(function (b, i) {
      var card = document.createElement('div');
      card.className = 'admin-service-card';
      card.innerHTML =
        '<div class="admin-service-header"><h4><span class="service-number">' + (i + 1) + '</span> ' + escapeHtml(b.name) + '</h4></div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Şube Adı</label>' +
            '<input type="text" class="admin-input branch-name" value="' + escapeHtml(b.name) + '">' +
          '</div>' +
        '</div>' +
        '<div class="admin-form-group">' +
          '<label>Adres</label>' +
          '<input type="text" class="admin-input branch-address" value="' + escapeHtml(b.address) + '">' +
        '</div>' +
        '<div class="admin-form-row">' +
          '<div class="admin-form-group">' +
            '<label>Telefon</label>' +
            '<input type="text" class="admin-input branch-phone" value="' + escapeHtml(b.phone) + '">' +
          '</div>' +
          '<div class="admin-form-group" style="flex:2;">' +
            '<label>Harita URL</label>' +
            '<input type="text" class="admin-input branch-map" value="' + escapeHtml(b.map) + '" placeholder="https://www.google.com/maps/embed?pb=...">' +
          '</div>' +
        '</div>';
      branchesContainer.appendChild(card);
    });
    branchesContainer.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', function () { syncBranchesFromDOM(); updatePreview(); }); });
  }

  function syncBranchesFromDOM() {
    var cards = branchesContainer.querySelectorAll('.admin-service-card');
    cards.forEach(function (card, idx) {
      if (!config.branches[idx]) return;
      config.branches[idx].name = card.querySelector('.branch-name').value;
      config.branches[idx].address = card.querySelector('.branch-address').value;
      config.branches[idx].phone = card.querySelector('.branch-phone').value;
      config.branches[idx].map = card.querySelector('.branch-map').value;
    });
  }

  /* ===== FORMDAN CONFIG OKU ===== */
  function getFormConfig() {
    syncServiceFromDOM();
    syncAgentsFromDOM();
    syncTestimonialsFromDOM();
    syncStatsFromDOM();
    syncFaqFromDOM();
    syncValuesFromDOM();
    syncBranchesFromDOM();
    if (currentPropertyIndex >= 0) syncPropertyFromForm();
    var cfg = {
      logo: {
        text: fields.logoText.value.trim() || defaultConfig.logo.text,
        icon: fields.logoIcon.value.trim() || defaultConfig.logo.icon
      },
      contact: {
        phone: fields.phone.value.trim() || defaultConfig.contact.phone,
        email: fields.email.value.trim() || defaultConfig.contact.email,
        address: fields.address.value.trim() || defaultConfig.contact.address
      },
      hero: {
        title: fields.heroTitle.value.trim() || defaultConfig.hero.title,
        titleSpan: fields.heroTitleSpan.value.trim() || defaultConfig.hero.titleSpan,
        description: fields.heroDescription.value.trim() || defaultConfig.hero.description
      },
      services: config.services.length > 0 ? config.services : defaultConfig.services,
      properties: config.properties && config.properties.length > 0 ? config.properties : (defaultConfig.properties || []),
      images: {
        hero: imageFields.hero.value.trim() || (defaultConfig.images ? defaultConfig.images.hero : ''),
        about: imageFields.about.value.trim() || (defaultConfig.images ? defaultConfig.images.about : ''),
        cta: imageFields.cta.value.trim() || (defaultConfig.images ? defaultConfig.images.cta : '')
      },
      footer: {
        aboutText: newFields.footerAboutText.value.trim() || defaultConfig.footer.aboutText,
        workingHours: newFields.footerWorkingHours.value.trim() || defaultConfig.footer.workingHours
      },
      agents: config.agents && config.agents.length > 0 ? config.agents : defaultConfig.agents,
      testimonials: config.testimonials && config.testimonials.length > 0 ? config.testimonials : defaultConfig.testimonials,
      stats: config.stats && config.stats.length > 0 ? config.stats : defaultConfig.stats,
      faq: config.faq && config.faq.length > 0 ? config.faq : defaultConfig.faq,
      cta: {
        title: newFields.ctaTitle.value.trim() || defaultConfig.cta.title,
        desc: newFields.ctaDesc.value.trim() || defaultConfig.cta.desc,
        btnText: newFields.ctaBtnText.value.trim() || defaultConfig.cta.btnText,
        btnLink: newFields.ctaBtnLink.value.trim() || defaultConfig.cta.btnLink
      },
      about: {
        storyTitle: newFields.aboutStoryTitle.value.trim() || defaultConfig.about.storyTitle,
        storyParagraphs: [
          newFields.aboutStoryP0.value.trim() || (defaultConfig.about.storyParagraphs ? defaultConfig.about.storyParagraphs[0] : ''),
          newFields.aboutStoryP1.value.trim() || (defaultConfig.about.storyParagraphs ? defaultConfig.about.storyParagraphs[1] : ''),
          newFields.aboutStoryP2.value.trim() || (defaultConfig.about.storyParagraphs ? defaultConfig.about.storyParagraphs[2] : '')
        ],
        mission: {
          title: newFields.aboutMissionTitle.value.trim() || defaultConfig.about.mission.title,
          text: newFields.aboutMissionText.value.trim() || defaultConfig.about.mission.text
        },
        vision: {
          title: newFields.aboutVisionTitle.value.trim() || defaultConfig.about.vision.title,
          text: newFields.aboutVisionText.value.trim() || defaultConfig.about.vision.text
        },
        values: config.about.values && config.about.values.length > 0 ? config.about.values : defaultConfig.about.values
      },
      workingHours: {
        weekdays: newFields.whWeekdays.value.trim() || defaultConfig.workingHours.weekdays,
        saturday: newFields.whSaturday.value.trim() || defaultConfig.workingHours.saturday,
        sunday: newFields.whSunday.value.trim() || defaultConfig.workingHours.sunday
      },
      branches: config.branches && config.branches.length > 0 ? config.branches : defaultConfig.branches
    };
    return cfg;
  }

  /* ===== KAYDET ===== */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newConfig = getFormConfig();
    saveConfig(newConfig);
    config = newConfig;
    saveStatus.textContent = '✓ Tüm değişiklikler kaydedildi!';
    saveStatus.style.color = '#22c55e';
    setTimeout(function () {
      saveStatus.textContent = '';
    }, 3000);
    updatePreview();
    showToast('Değişiklikler başarıyla kaydedildi!', 'success');
  });

  /* ===== ÖNİZLEME ===== */
  function updatePreview() {
    var previewConfig = getFormConfig();
    configPreview.value = JSON.stringify(previewConfig, null, 2);
  }

  /* ===== JSON DIŞA AKTAR ===== */
  exportBtn.addEventListener('click', function () {
    var data = JSON.stringify(getFormConfig(), null, 2);
    var blob = new Blob([data], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'efs-site-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('JSON dosyası indirildi.', 'success');
  });

  /* ===== JSON İÇE AKTAR ===== */
  importBtn.addEventListener('click', function () {
    importInput.click();
  });

  importInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (event) {
      try {
        var imported = JSON.parse(event.target.result);
        if (!imported.logo || !imported.contact || !imported.hero || !imported.services) {
          throw new Error('Geçersiz yapılandırma dosyası.');
        }
        if (!imported.footer) imported.footer = JSON.parse(JSON.stringify(defaultConfig.footer));
        if (!imported.agents) imported.agents = JSON.parse(JSON.stringify(defaultConfig.agents));
        if (!imported.testimonials) imported.testimonials = JSON.parse(JSON.stringify(defaultConfig.testimonials));
        if (!imported.stats) imported.stats = JSON.parse(JSON.stringify(defaultConfig.stats));
        if (!imported.faq) imported.faq = JSON.parse(JSON.stringify(defaultConfig.faq));
        if (!imported.cta) imported.cta = JSON.parse(JSON.stringify(defaultConfig.cta));
        if (!imported.about) imported.about = JSON.parse(JSON.stringify(defaultConfig.about));
        if (!imported.workingHours) imported.workingHours = JSON.parse(JSON.stringify(defaultConfig.workingHours));
        if (!imported.branches) imported.branches = JSON.parse(JSON.stringify(defaultConfig.branches));
        saveConfig(imported);
        config = getConfig();
        loadForm();
        showToast('Yapılandırma başarıyla yüklendi!', 'success');
      } catch (err) {
        showToast('Hata: Geçersiz JSON dosyası. (' + err.message + ')', 'error');
      }
    };
    reader.readAsText(file);
    importInput.value = '';
  });

  /* ===== SIFIRLA ===== */
  resetBtn.addEventListener('click', function () {
    if (confirm('Tüm ayarları varsayılana sıfırlamak istediğinize emin misiniz?')) {
      localStorage.removeItem('efsSiteConfig');
      config = getConfig();
      loadForm();
      showToast('Ayarlar varsayılana sıfırlandı.', 'success');
    }
  });

  /* ===== YAN MENÜ AKTİF ===== */
  document.querySelectorAll('.admin-menu-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      document.querySelectorAll('.admin-menu-item').forEach(function (i) { i.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  /* ===== TOAST ===== */
  function showToast(message, type) {
    adminToast.textContent = message;
    adminToast.className = 'admin-toast ' + type;
    adminToast.style.display = 'block';
    clearTimeout(adminToast._timer);
    adminToast._timer = setTimeout(function () {
      adminToast.style.display = 'none';
    }, 3000);
  }

  /* ===== HTML KARAKTER KORUMA ===== */
  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  /* ===== BAŞLANGIÇ ===== */
  loadForm();
});
