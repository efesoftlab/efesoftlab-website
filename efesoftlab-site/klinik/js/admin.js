/* ============================================================
   Tasarım ve Geliştirme: Efesoftlab | Satış ve Dağıtım: Efesoftlab
   Admin Paneli JavaScript - Tıp Merkezi
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var currentConfig = getConfig();
  var editingDeptIndex = -1;

  /* ===== Yardımcı ===== */
  function getVal(path) {
    var keys = path.split('.');
    var c = currentConfig;
    for (var i = 0; i < keys.length; i++) {
      if (c === null || c === undefined || typeof c !== 'object') return '';
      c = c[keys[i]];
    }
    return c !== undefined && c !== null ? c : '';
  }

  function setVal(path, value) {
    var keys = path.split('.');
    var c = currentConfig;
    for (var i = 0; i < keys.length - 1; i++) {
      if (!c[keys[i]] || typeof c[keys[i]] !== 'object') c[keys[i]] = {};
      c = c[keys[i]];
    }
    c[keys[keys.length - 1]] = value;
  }

  /* ===== Tab Navigation ===== */
  var navItems = document.querySelectorAll('.admin-nav-item');
  var tabContents = document.querySelectorAll('.tab-content');
  var pageTitle = document.getElementById('pageTitle');
  var tabTitles = {
    genel: 'Genel Ayarlar',
    hero: 'Hero Bölümü',
    hakkimizda: 'Hakkımızda',
    doktorlar: 'Doktorlar',
    bolumler: 'Bölümler',
    istatistikler: 'İstatistikler',
    yorumlar: 'Hasta Yorumları',
    sss: 'SSS',
    surec: 'Tedavi Süreci',
    gorsel: 'Görsel Yönetimi',
    altbilgi: 'Alt Bilgi'
  };

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var tab = this.getAttribute('data-tab');
      navItems.forEach(function (n) { n.classList.remove('active'); });
      this.classList.add('active');
      tabContents.forEach(function (t) { t.classList.remove('active'); });
      var target = document.getElementById('tab-' + tab);
      if (target) target.classList.add('active');
      if (pageTitle && tabTitles[tab]) pageTitle.textContent = tabTitles[tab];
      if (window.innerWidth <= 992) {
        document.getElementById('adminSidebar').classList.remove('open');
      }
    });
  });

  /* ===== Sidebar Toggle (Mobile) ===== */
  var hamburger = document.getElementById('adminHamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      document.getElementById('adminSidebar').classList.toggle('open');
    });
  }

  /* ===== Formları Doldur ===== */
  function populateForms() {
    document.querySelectorAll('[data-config-path]').forEach(function (el) {
      var path = el.getAttribute('data-config-path');
      var val = getVal(path);
      if (val !== undefined && val !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = val;
        } else {
          el.textContent = val;
        }
      }
    });
    renderDoctors();
    renderDepartments();
    renderStats();
    renderTestimonials();
    renderFAQ();
    renderSteps();
    updateImagePreviews();
  }

  /* ===== DOKTORLAR ===== */
  function renderDoctors() {
    var grid = document.getElementById('doctorGrid');
    if (!grid) return;
    var html = '';
    var doctors = currentConfig.doctors || [];
    doctors.forEach(function (doc, i) {
      html += '<div class="doctor-card-admin">';
      html += '<h4>' + (i + 1) + '. ' + (doc.name || 'Doktor ' + (i + 1)) + '</h4>';
      html += '<div class="form-group"><label>Ad Soyad</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="name" value="' + escHtml(doc.name || '') + '"></div>';
      html += '<div class="form-row"><div class="form-group"><label>Ünvan</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="title" value="' + escHtml(doc.title || '') + '"></div>';
      html += '<div class="form-group"><label>Bölüm</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="department" value="' + escHtml(doc.department || '') + '"></div></div>';
      html += '<div class="form-row"><div class="form-group"><label>Deneyim</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="experience" value="' + escHtml(doc.experience || '') + '"></div>';
      html += '<div class="form-group"><label>Eğitim</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="education" value="' + escHtml(doc.education || '') + '"></div></div>';
      html += '<div class="form-group"><label>Açıklama</label><textarea class="form-control dr-input" data-dr="' + i + '" data-field="description">' + escHtml(doc.description || '') + '</textarea></div>';
      html += '<div class="form-group"><label>Görsel URL</label><input type="text" class="form-control dr-input" data-dr="' + i + '" data-field="image" value="' + escHtml(doc.image || '') + '"></div>';
      html += '</div>';
    });
    grid.innerHTML = html;

    grid.querySelectorAll('.dr-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var idx = parseInt(this.getAttribute('data-dr'));
        var field = this.getAttribute('data-field');
        if (!currentConfig.doctors[idx]) return;
        currentConfig.doctors[idx][field] = this.value;
      });
    });
  }

  /* ===== BÖLÜMLER ===== */
  function renderDepartments() {
    var list = document.getElementById('deptList');
    if (!list) return;
    var html = '';
    var depts = currentConfig.departments || [];
    depts.forEach(function (dept, i) {
      html += '<div class="department-item">';
      html += '<div class="dept-icon"><i class="fas ' + (dept.icon || 'fa-building') + '"></i></div>';
      html += '<div class="dept-info"><strong>' + escHtml(dept.title || '') + '</strong><span>' + escHtml((dept.description || '').substring(0, 80)) + '...</span></div>';
      html += '<div class="dept-actions">';
      html += '<button class="btn btn-sm btn-outline dept-edit" data-index="' + i + '"><i class="fas fa-edit"></i></button>';
      html += '<button class="btn btn-sm btn-danger dept-delete" data-index="' + i + '"><i class="fas fa-trash"></i></button>';
      html += '</div></div>';
    });
    list.innerHTML = html;

    list.querySelectorAll('.dept-edit').forEach(function (btn) {
      btn.addEventListener('click', function () {
        editingDeptIndex = parseInt(this.getAttribute('data-index'));
        openDeptModal(editingDeptIndex);
      });
    });
    list.querySelectorAll('.dept-delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'));
        if (confirm('Bu bölümü silmek istediğinize emin misiniz?')) {
          currentConfig.departments.splice(idx, 1);
          renderDepartments();
          showToast('success', 'Bölüm silindi.');
        }
      });
    });
  }

  /* Department Modal */
  function openDeptModal(index) {
    var modal = document.getElementById('deptModal');
    var titleEl = document.getElementById('deptModalTitle');
    var nameEl = document.getElementById('deptModalTitleInput');
    var iconEl = document.getElementById('deptModalIcon');
    var descEl = document.getElementById('deptModalDesc');

    if (index >= 0 && currentConfig.departments[index]) {
      var dept = currentConfig.departments[index];
      titleEl.textContent = 'Bölüm Düzenle';
      nameEl.value = dept.title || '';
      iconEl.value = dept.icon || 'fa-building';
      descEl.value = dept.description || '';
      editingDeptIndex = index;
    } else {
      titleEl.textContent = 'Yeni Bölüm Ekle';
      nameEl.value = '';
      iconEl.value = 'fa-building';
      descEl.value = '';
      editingDeptIndex = -1;
    }
    modal.classList.add('open');
  }

  document.getElementById('btnAddDept').addEventListener('click', function () {
    openDeptModal(-1);
  });

  document.getElementById('deptModalClose').addEventListener('click', function () {
    document.getElementById('deptModal').classList.remove('open');
  });
  document.getElementById('deptModalCancel').addEventListener('click', function () {
    document.getElementById('deptModal').classList.remove('open');
  });
  document.getElementById('deptModalSave').addEventListener('click', function () {
    var nameEl = document.getElementById('deptModalTitleInput');
    var iconEl = document.getElementById('deptModalIcon');
    var descEl = document.getElementById('deptModalDesc');

    if (!nameEl.value.trim()) {
      showToast('error', 'Bölüm adı zorunludur.');
      return;
    }

    var deptData = {
      title: nameEl.value.trim(),
      icon: iconEl.value.trim() || 'fa-building',
      description: descEl.value.trim()
    };

    if (editingDeptIndex >= 0 && currentConfig.departments[editingDeptIndex]) {
      currentConfig.departments[editingDeptIndex] = deptData;
    } else {
      if (!currentConfig.departments) currentConfig.departments = [];
      currentConfig.departments.push(deptData);
    }

    document.getElementById('deptModal').classList.remove('open');
    renderDepartments();
    showToast('success', 'Bölüm kaydedildi.');
  });

  /* ===== İSTATİSTİKLER ===== */
  function renderStats() {
    var container = document.getElementById('statsGrid');
    if (!container) return;
    var html = '';
    var stats = currentConfig.stats || [];
    stats.forEach(function (stat, i) {
      html += '<div class="form-row" style="align-items:end;">';
      html += '<input type="hidden" data-stat="' + i + '" data-field="icon" value="' + escHtml(stat.icon || '') + '">';
      html += '<div class="form-group"><label>Değer</label><input type="number" class="form-control stat-input" data-stat="' + i + '" data-field="value" value="' + (stat.value || 0) + '"></div>';
      html += '<div class="form-group"><label>Etiket</label><input type="text" class="form-control stat-input" data-stat="' + i + '" data-field="label" value="' + escHtml(stat.label || '') + '"></div>';
      html += '</div>';
    });
    container.innerHTML = html;

    container.querySelectorAll('.stat-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var idx = parseInt(this.getAttribute('data-stat'));
        var field = this.getAttribute('data-field');
        if (!currentConfig.stats[idx]) return;
        currentConfig.stats[idx][field] = field === 'value' ? parseInt(this.value) || 0 : this.value;
      });
    });
  }

  /* ===== YORUMLAR ===== */
  function renderTestimonials() {
    var container = document.getElementById('testimonialList');
    if (!container) return;
    var html = '';
    var items = currentConfig.testimonials || [];
    items.forEach(function (item, i) {
      html += '<div class="admin-section" style="margin-bottom:0.75rem;">';
      html += '<h4 style="font-size:0.95rem;font-weight:700;color:var(--primary-700);margin-bottom:0.75rem;">Yorum ' + (i + 1) + '</h4>';
      html += '<div class="form-row"><div class="form-group"><label>İsim</label><input type="text" class="form-control testimonial-input" data-tst="' + i + '" data-field="name" value="' + escHtml(item.name || '') + '"></div>';
      html += '<div class="form-group"><label>Bölüm</label><input type="text" class="form-control testimonial-input" data-tst="' + i + '" data-field="department" value="' + escHtml(item.department || '') + '"></div></div>';
      html += '<div class="form-group"><label>Yorum Metni</label><textarea class="form-control testimonial-input" data-tst="' + i + '" data-field="text">' + escHtml(item.text || '') + '</textarea></div>';
      html += '<div class="form-row"><div class="form-group"><label>Görsel URL</label><input type="text" class="form-control testimonial-input" data-tst="' + i + '" data-field="image" value="' + escHtml(item.image || '') + '"></div>';
      html += '<div class="form-group"><label>Puan (1-5)</label><input type="number" class="form-control testimonial-input" data-tst="' + i + '" data-field="rating" value="' + (item.rating || 5) + '" min="1" max="5" step="0.5"></div></div>';
      html += '</div>';
    });
    container.innerHTML = html;

    container.querySelectorAll('.testimonial-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var idx = parseInt(this.getAttribute('data-tst'));
        var field = this.getAttribute('data-field');
        if (!currentConfig.testimonials[idx]) return;
        var val = this.value;
        if (field === 'rating') val = parseFloat(val) || 5;
        currentConfig.testimonials[idx][field] = val;
      });
    });
  }

  /* ===== SSS ===== */
  function renderFAQ() {
    var container = document.getElementById('faqList');
    if (!container) return;
    var html = '';
    var items = currentConfig.faq || [];
    items.forEach(function (item, i) {
      html += '<div class="admin-section" style="margin-bottom:0.75rem;">';
      html += '<h4 style="font-size:0.95rem;font-weight:700;color:var(--primary-700);margin-bottom:0.75rem;">Soru ' + (i + 1) + '</h4>';
      html += '<div class="form-group"><label>Soru</label><input type="text" class="form-control faq-input" data-faq="' + i + '" data-field="question" value="' + escHtml(item.question || '') + '"></div>';
      html += '<div class="form-group"><label>Cevap</label><textarea class="form-control tall faq-input" data-faq="' + i + '" data-field="answer">' + escHtml(item.answer || '') + '</textarea></div>';
      html += '</div>';
    });
    container.innerHTML = html;

    container.querySelectorAll('.faq-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var idx = parseInt(this.getAttribute('data-faq'));
        var field = this.getAttribute('data-field');
        if (!currentConfig.faq[idx]) return;
        currentConfig.faq[idx][field] = this.value;
      });
    });
  }

  /* ===== TEDAVİ SÜRECİ ===== */
  function renderSteps() {
    var container = document.getElementById('stepsList');
    if (!container) return;
    var html = '';
    var steps = currentConfig.treatmentSteps || [];
    steps.forEach(function (step, i) {
      html += '<div class="admin-section" style="margin-bottom:0.75rem;">';
      html += '<h4 style="font-size:0.95rem;font-weight:700;color:var(--primary-700);margin-bottom:0.75rem;">Adım ' + (i + 1) + '</h4>';
      html += '<div class="form-row"><div class="form-group"><label>Başlık</label><input type="text" class="form-control step-input" data-step="' + i + '" data-field="title" value="' + escHtml(step.title || '') + '"></div>';
      html += '<div class="form-group"><label>Açıklama</label><input type="text" class="form-control step-input" data-step="' + i + '" data-field="description" value="' + escHtml(step.description || '') + '"></div></div>';
      html += '</div>';
    });
    container.innerHTML = html;

    container.querySelectorAll('.step-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var idx = parseInt(this.getAttribute('data-step'));
        var field = this.getAttribute('data-field');
        if (!currentConfig.treatmentSteps[idx]) return;
        currentConfig.treatmentSteps[idx][field] = this.value;
      });
    });
  }

  /* ===== Görsel Önizleme ===== */
  function updateImagePreviews() {
    var heroImg = document.getElementById('preview-hero');
    var aboutImg = document.getElementById('preview-about');
    if (heroImg) heroImg.src = getVal('images.hero') || '';
    if (aboutImg) aboutImg.src = getVal('images.about') || '';
  }

  /* ===== Ana Form alanlarını dinle (data-config-path) ===== */
  document.querySelectorAll('[data-config-path]').forEach(function (el) {
    el.addEventListener('input', function () {
      var path = this.getAttribute('data-config-path');
      var val = this.value;
      setVal(path, val);
      if (path && path.indexOf('images.') === 0) {
        updateImagePreviews();
      }
    });
  });

  /* ===== Kaydet ===== */
  document.getElementById('btnSave').addEventListener('click', function () {
    if (saveConfig(currentConfig)) {
      showToast('success', 'Tüm ayarlar başarıyla kaydedildi!');
    } else {
      showToast('error', 'Kaydetme sırasında bir hata oluştu.');
    }
  });

  /* ===== Dışa Aktar (JSON) ===== */
  document.getElementById('btnExport').addEventListener('click', function () {
    var dataStr = JSON.stringify(currentConfig, null, 2);
    var blob = new Blob([dataStr], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'medical-clinic-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('success', 'JSON dosyası dışa aktarıldı.');
  });

  /* ===== İçe Aktar (JSON) ===== */
  document.getElementById('btnImport').addEventListener('click', function () {
    document.getElementById('jsonImportInput').click();
  });

  document.getElementById('jsonImportInput').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        var imported = JSON.parse(ev.target.result);
        currentConfig = mergeDeep(DEFAULT_CONFIG, imported);
        populateForms();
        showToast('success', 'JSON dosyası içe aktarıldı.');
      } catch (err) {
        showToast('error', 'Geçersiz JSON dosyası: ' + err.message);
      }
    };
    reader.readAsText(file);
    this.value = '';
  });

  /* ===== Sıfırla ===== */
  document.getElementById('btnReset').addEventListener('click', function () {
    if (confirm('Tüm ayarları varsayılana sıfırlamak istediğinize emin misiniz?')) {
      currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      populateForms();
      showToast('info', 'Ayarlar varsayılana sıfırlandı. Kaydetmek için "Kaydet" butonunu kullanın.');
    }
  });

  /* ===== Toast Sistemi ===== */
  function showToast(type, message) {
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;

    var iconMap = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    var icon = iconMap[type] || 'fa-info-circle';

    toast.innerHTML =
      '<i class="fas ' + icon + '"></i>' +
      '<span>' + message + '</span>' +
      '<button class="toast-close">&times;</button>';

    container.appendChild(toast);

    var autoClose = setTimeout(function () {
      removeToast(toast);
    }, 4000);

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

  /* ===== HTML Escape ===== */
  function escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ===== Başlangıç ===== */
  populateForms();

}); // DOMContentLoaded
