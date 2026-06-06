let config = JSON.parse(localStorage.getItem('efesoftlab-content')) || JSON.parse(JSON.stringify(EFESOFTLAB_DEFAULTS));
let activeTab = 'general';

function getVal(obj, path) {
  const parts = path.split('.');
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return '';
    cur = cur[p];
  }
  return cur != null ? cur : '';
}

function setVal(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

function langFieldHTML(idTr, idEn, label, valTr, valEn, textarea) {
  const tag = textarea ? 'textarea' : 'input';
  const typeAttr = textarea ? '' : ' type="text"';
  const textareaClose = textarea ? '</textarea>' : '';
  const valueTr = textarea ? valTr : ` value="${esc(valTr)}"`;
  const valueEn = textarea ? valEn : ` value="${esc(valEn)}"`;
  return `
    <div class="admin-field full-width">
      <label>${esc(label)}</label>
      <div class="lang-fields">
        <div class="admin-field">
          <label style="font-size:0.75rem;color:var(--primary)">TR</label>
          <${tag} class="admin-input${textarea ? ' admin-textarea' : ''}" id="${idTr}"${typeAttr}${valueTr}${textareaClose ? '>' + esc(valTr) + textareaClose : ''}>
        </div>
        <div class="admin-field">
          <label style="font-size:0.75rem;color:var(--primary)">EN</label>
          <${tag} class="admin-input${textarea ? ' admin-textarea' : ''}" id="${idEn}"${typeAttr}${valueEn}${textareaClose ? '>' + esc(valEn) + textareaClose : ''}>
        </div>
      </div>
    </div>`;
}

function fieldHTML(id, label, value, type) {
  type = type || 'text';
  return `
    <div class="admin-field">
      <label>${esc(label)}</label>
      <input class="admin-input" type="${type}" id="${id}" value="${esc(value)}">
    </div>`;
}

function textareaHTML(id, label, value) {
  return `
    <div class="admin-field full-width">
      <label>${esc(label)}</label>
      <textarea class="admin-input admin-textarea" id="${id}">${esc(value)}</textarea>
    </div>`;
}

function getArrVal(arr, idx, field, lang) {
  if (!arr || !arr[idx]) return '';
  const v = arr[idx];
  if (field) {
    if (lang) return v[field] ? (v[field][lang] || '') : '';
    return v[field] || '';
  }
  if (lang) return v[lang] || '';
  return '';
}

function esc(s) {
  if (typeof s !== 'string') return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===== TAB SWITCHING =====
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.admin-tab').forEach(t => {
    t.classList.toggle('is-active', t.dataset.tab === tabId);
    t.setAttribute('aria-selected', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.admin-tab-content').forEach(c => {
    c.classList.toggle('is-active', c.id === 'tab-' + tabId);
  });
}

// ===== RENDER FUNCTIONS =====
function renderGeneral() {
  document.getElementById('site_name_tr').value = config.site_name.tr || '';
  document.getElementById('site_name_en').value = config.site_name.en || '';
  document.getElementById('site_email').value = config.site_email || '';
  document.getElementById('site_url').value = config.site_url || '';

  let html = '';
  const pages = ['index', 'apps', 'templates', 'privacy', '404'];
  for (const p of pages) {
    const m = config.meta[p];
    if (!m) continue;
    const pname = {index:'Ana Sayfa',apps:'Uygulamalar',templates:'Şablonlar',privacy:'Gizlilik',404:'404'}[p] || p;
    html += `<div class="admin-item-card"><div class="admin-item-card-title">${pname}</div>
      <div class="admin-grid">
        ${langFieldHTML('meta_'+p+'_title_tr', 'meta_'+p+'_title_en', 'Başlık (Title)', m.title.tr, m.title.en)}
        ${langFieldHTML('meta_'+p+'_desc_tr', 'meta_'+p+'_desc_en', 'Açıklama (Description)', m.description.tr, m.description.en, true)}
      </div></div>`;
  }
  document.getElementById('meta-fields').innerHTML = html;
}

function collectGeneral() {
  config.site_name = { tr: document.getElementById('site_name_tr').value, en: document.getElementById('site_name_en').value };
  config.site_email = document.getElementById('site_email').value;
  config.site_url = document.getElementById('site_url').value;

  const pages = ['index', 'apps', 'templates', 'privacy', '404'];
  for (const p of pages) {
    if (!config.meta[p]) continue;
    config.meta[p].title = {
      tr: document.getElementById('meta_'+p+'_title_tr').value,
      en: document.getElementById('meta_'+p+'_title_en').value
    };
    config.meta[p].description = {
      tr: document.getElementById('meta_'+p+'_desc_tr').value,
      en: document.getElementById('meta_'+p+'_desc_en').value
    };
  }
}

function renderHero() {
  const h = config.hero;
  let html = langFieldHTML('hero_eyebrow_tr', 'hero_eyebrow_en', 'Eyebrow', h.eyebrow.tr, h.eyebrow.en);
  html += langFieldHTML('hero_title_tr', 'hero_title_en', 'Başlık', h.title.tr, h.title.en, true);
  html += langFieldHTML('hero_text_tr', 'hero_text_en', 'Metin', h.text.tr, h.text.en, true);
  html += `<div class="admin-grid">
    ${langFieldHTML('hero_cta1_tr', 'hero_cta1_en', 'Primary CTA', h.primary_cta.tr, h.primary_cta.en)}
    ${langFieldHTML('hero_cta2_tr', 'hero_cta2_en', 'Secondary CTA', h.secondary_cta.tr, h.secondary_cta.en)}
  </div>`;
  document.getElementById('hero-fields').innerHTML = html;

  // Signals
  let sigHtml = '';
  h.signals.forEach((s, i) => {
    sigHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header">
        <span class="admin-item-card-title">Sinyal ${i+1}</span>
      </div>
      <div class="lang-fields">
        <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">TR</label><input class="admin-input" type="text" id="hero_signal_${i}_tr" value="${esc(s.tr)}"></div>
        <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">EN</label><input class="admin-input" type="text" id="hero_signal_${i}_en" value="${esc(s.en)}"></div>
      </div>
    </div>`;
  });
  document.getElementById('hero-signals').innerHTML = sigHtml;

  // Panel
  let panelHtml = `<div class="admin-grid">
    ${langFieldHTML('hero_panel_badge_tr', 'hero_panel_badge_en', 'Panel Badge', h.panel_badge.tr, h.panel_badge.en)}
    ${langFieldHTML('hero_panel_status_tr', 'hero_panel_status_en', 'Panel Status', h.panel_status.tr, h.panel_status.en)}
    ${langFieldHTML('hero_floating_title_tr', 'hero_floating_title_en', 'Floating Başlık', h.floating_title.tr, h.floating_title.en)}
    ${langFieldHTML('hero_floating_text_tr', 'hero_floating_text_en', 'Floating Metin', h.floating_text.tr, h.floating_text.en)}
  </div>`;
  // Stacks
  h.stacks.forEach((st, i) => {
    panelHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Stack Kart ${i+1}</span></div>
      ${langFieldHTML('hero_stack_'+i+'_title_tr', 'hero_stack_'+i+'_title_en', 'Başlık', st.title.tr, st.title.en)}
      ${langFieldHTML('hero_stack_'+i+'_text_tr', 'hero_stack_'+i+'_text_en', 'Metin', st.text.tr, st.text.en)}
    </div>`;
  });
  document.getElementById('hero-panel').innerHTML = panelHtml;
}

function collectHero() {
  const h = config.hero;
  h.eyebrow = { tr: g('hero_eyebrow_tr'), en: g('hero_eyebrow_en') };
  h.title = { tr: g('hero_title_tr'), en: g('hero_title_en') };
  h.text = { tr: g('hero_text_tr'), en: g('hero_text_en') };
  h.primary_cta = { tr: g('hero_cta1_tr'), en: g('hero_cta1_en') };
  h.secondary_cta = { tr: g('hero_cta2_tr'), en: g('hero_cta2_en') };
  h.signals.forEach((s, i) => {
    s.tr = g('hero_signal_'+i+'_tr');
    s.en = g('hero_signal_'+i+'_en');
  });
  h.panel_badge = { tr: g('hero_panel_badge_tr'), en: g('hero_panel_badge_en') };
  h.panel_status = { tr: g('hero_panel_status_tr'), en: g('hero_panel_status_en') };
  h.floating_title = { tr: g('hero_floating_title_tr'), en: g('hero_floating_title_en') };
  h.floating_text = { tr: g('hero_floating_text_tr'), en: g('hero_floating_text_en') };
  h.stacks.forEach((st, i) => {
    st.title.tr = g('hero_stack_'+i+'_title_tr');
    st.title.en = g('hero_stack_'+i+'_title_en');
    st.text.tr = g('hero_stack_'+i+'_text_tr');
    st.text.en = g('hero_stack_'+i+'_text_en');
  });
}

function g(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function renderAbout() {
  const a = config.about;
  const v = config.values;
  const t = config.trust;
  let html = langFieldHTML('about_tag_tr', 'about_tag_en', 'Tag', a.tag.tr, a.tag.en);
  html += langFieldHTML('about_title_tr', 'about_title_en', 'Başlık', a.title.tr, a.title.en, true);
  html += langFieldHTML('about_text_tr', 'about_text_en', 'Metin', a.text.tr, a.text.en, true);
  document.getElementById('about-fields').innerHTML = html;

  let valHtml = langFieldHTML('values_tag_tr', 'values_tag_en', 'Tag', v.tag.tr, v.tag.en);
  valHtml += langFieldHTML('values_title_tr', 'values_title_en', 'Başlık', v.title.tr, v.title.en, true);
  v.items.forEach((item, i) => {
    valHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Değer ${i+1}</span></div>
      ${langFieldHTML('value_'+i+'_title_tr', 'value_'+i+'_title_en', 'Başlık', item.title.tr, item.title.en)}
      ${langFieldHTML('value_'+i+'_text_tr', 'value_'+i+'_text_en', 'Metin', item.text.tr, item.text.en, true)}
    </div>`;
  });
  document.getElementById('values-fields').innerHTML = valHtml;

  let trustHtml = langFieldHTML('trust_tag_tr', 'trust_tag_en', 'Tag', t.tag.tr, t.tag.en);
  trustHtml += langFieldHTML('trust_title_tr', 'trust_title_en', 'Başlık', t.title.tr, t.title.en, true);
  trustHtml += langFieldHTML('trust_text_tr', 'trust_text_en', 'Metin', t.text.tr, t.text.en, true);
  document.getElementById('trust-fields').innerHTML = trustHtml;
}

function collectAbout() {
  const a = config.about;
  a.tag = { tr: g('about_tag_tr'), en: g('about_tag_en') };
  a.title = { tr: g('about_title_tr'), en: g('about_title_en') };
  a.text = { tr: g('about_text_tr'), en: g('about_text_en') };

  const v = config.values;
  v.tag = { tr: g('values_tag_tr'), en: g('values_tag_en') };
  v.title = { tr: g('values_title_tr'), en: g('values_title_en') };
  v.items.forEach((item, i) => {
    item.title.tr = g('value_'+i+'_title_tr');
    item.title.en = g('value_'+i+'_title_en');
    item.text.tr = g('value_'+i+'_text_tr');
    item.text.en = g('value_'+i+'_text_en');
  });

  const t = config.trust;
  t.tag = { tr: g('trust_tag_tr'), en: g('trust_tag_en') };
  t.title = { tr: g('trust_title_tr'), en: g('trust_title_en') };
  t.text = { tr: g('trust_text_tr'), en: g('trust_text_en') };
}

function renderApps() {
  const ap = config.apps_preview;
  const pg = config.apps_page;
  const ls = pg.listora_spotlight;

  // Apps Preview
  let html = langFieldHTML('ap_tag_tr', 'ap_tag_en', 'Tag', ap.tag.tr, ap.tag.en);
  html += langFieldHTML('ap_title_tr', 'ap_title_en', 'Başlık', ap.title.tr, ap.title.en, true);
  html += langFieldHTML('ap_text_tr', 'ap_text_en', 'Metin', ap.text.tr, ap.text.en, true);
  html += langFieldHTML('ap_cta_tr', 'ap_cta_en', 'CTA', ap.cta.tr, ap.cta.en);
  // Preview items
  ap.items.forEach((item, i) => {
    html += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Önizleme ${i+1}</span></div>
      <div class="admin-grid">
        ${fieldHTML('ap_item_'+i+'_icon', 'İkon (URL)', item.icon || '')}
      </div>
      ${langFieldHTML('ap_item_'+i+'_title_tr', 'ap_item_'+i+'_title_en', 'Başlık', item.title.tr, item.title.en)}
      ${langFieldHTML('ap_item_'+i+'_text_tr', 'ap_item_'+i+'_text_en', 'Metin', item.text.tr, item.text.en, true)}
      <div class="admin-grid">
        ${fieldHTML('ap_item_'+i+'_playstore', 'Play Store URL', item.playstore_url || '')}
        <div class="admin-field"><label>Öne Çıkan</label><select class="admin-select" id="ap_item_${i}_featured"><option value="false"${item.featured?'':' selected'}>Hayır</option><option value="true"${item.featured?' selected':''}>Evet</option></select></div>
      </div>
    </div>`;
  });
  document.getElementById('apps-preview-fields').innerHTML = html;

  // Apps Page
  let pgHtml = langFieldHTML('ap_eyebrow_tr', 'ap_eyebrow_en', 'Eyebrow', pg.eyebrow.tr, pg.eyebrow.en);
  pgHtml += langFieldHTML('ap_title_tr', 'ap_title_en', 'Başlık', pg.title.tr, pg.title.en, true);
  pgHtml += langFieldHTML('ap_text_tr', 'ap_text_en', 'Metin', pg.text.tr, pg.text.en, true);
  pgHtml += `<div class="admin-grid">
    ${langFieldHTML('ap_primary_cta_tr', 'ap_primary_cta_en', 'Primary CTA', pg.primary_cta.tr, pg.primary_cta.en)}
    ${langFieldHTML('ap_secondary_cta_tr', 'ap_secondary_cta_en', 'Secondary CTA', pg.secondary_cta.tr, pg.secondary_cta.en)}
    ${langFieldHTML('ap_nav_cta_tr', 'ap_nav_cta_en', 'Nav CTA', pg.nav_cta.tr, pg.nav_cta.en)}
  </div>`;
  pgHtml += langFieldHTML('ap_card_title_tr', 'ap_card_title_en', 'Kart Başlığı', pg.card_title.tr, pg.card_title.en);
  pgHtml += langFieldHTML('ap_card_text_tr', 'ap_card_text_en', 'Kart Metni', pg.card_text.tr, pg.card_text.en, true);
  // Filter
  const flt = pg.filter;
  pgHtml += `<div class="admin-item-card">
    <div class="admin-item-card-title">Filtre Etiketleri</div>
    ${langFieldHTML('ap_filter_label_tr', 'ap_filter_label_en', 'Label', flt.label.tr, flt.label.en)}
    <div class="admin-grid">
      ${langFieldHTML('ap_filter_all_tr', 'ap_filter_all_en', 'Tümü', flt.all.tr, flt.all.en)}
      ${langFieldHTML('ap_filter_live_tr', 'ap_filter_live_en', 'Yayında', flt.live.tr, flt.live.en)}
      ${langFieldHTML('ap_filter_soon_tr', 'ap_filter_soon_en', 'Yakında', flt.soon.tr, flt.soon.en)}
      ${langFieldHTML('ap_filter_feature_tr', 'ap_filter_feature_en', 'Yeni Özellik', flt.feature.tr, flt.feature.en)}
    </div>
    ${langFieldHTML('ap_filter_results_tr', 'ap_filter_results_en', 'Sonuç Girişi', flt.results_intro.tr, flt.results_intro.en)}
    ${langFieldHTML('ap_filter_empty_title_tr', 'ap_filter_empty_title_en', 'Boş Başlık', flt.empty_title.tr, flt.empty_title.en)}
    ${langFieldHTML('ap_filter_empty_text_tr', 'ap_filter_empty_text_en', 'Boş Metin', flt.empty_text.tr, flt.empty_text.en, true)}
  </div>`;
  document.getElementById('apps-page-fields').innerHTML = pgHtml;

  // App Cards
  let cardHtml = '';
  pg.apps.forEach((app, i) => {
    cardHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Uygulama: ${app.id || (i+1)}</span></div>
      <div class="admin-grid">
        ${fieldHTML('app_'+i+'_id', 'ID', app.id)}
        ${fieldHTML('app_'+i+'_icon', 'İkon URL', app.icon || '')}
        ${fieldHTML('app_'+i+'_status_class', 'Status CSS', app.status_class)}
        ${fieldHTML('app_'+i+'_playstore', 'Play Store URL', app.playstore_url || '')}
        ${fieldHTML('app_'+i+'_tags', 'Tags', app.tags)}
      </div>
      ${langFieldHTML('app_'+i+'_category_tr', 'app_'+i+'_category_en', 'Kategori', app.category.tr, app.category.en)}
      ${langFieldHTML('app_'+i+'_status_tr', 'app_'+i+'_status_en', 'Durum', app.status.tr, app.status.en)}
      ${langFieldHTML('app_'+i+'_title_tr', 'app_'+i+'_title_en', 'Başlık', app.title.tr, app.title.en)}
      ${langFieldHTML('app_'+i+'_text_tr', 'app_'+i+'_text_en', 'Metin', app.text.tr, app.text.en, true)}
      ${langFieldHTML('app_'+i+'_cta_tr', 'app_'+i+'_cta_en', 'CTA', app.cta.tr, app.cta.en)}
      <div class="admin-section-title" style="margin-top:14px;font-size:0.85rem">Özellikler (${app.features.length})</div>`;
    app.features.forEach((f, j) => {
      cardHtml += `<div class="admin-item-card" style="margin-left:16px">
        <div class="admin-item-card-header"><span class="admin-item-card-title">Özellik ${j+1}</span></div>
        <div class="lang-fields">
          <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">TR</label><input class="admin-input" type="text" id="app_${i}_feat_${j}_tr" value="${esc(f.tr)}"></div>
          <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">EN</label><input class="admin-input" type="text" id="app_${i}_feat_${j}_en" value="${esc(f.en)}"></div>
        </div>
      </div>`;
    });
    cardHtml += `</div>`;
  });
  document.getElementById('app-cards').innerHTML = cardHtml;

  // Listora Spotlight
  let lsHtml = langFieldHTML('ls_tag_tr', 'ls_tag_en', 'Tag', ls.tag.tr, ls.tag.en);
  lsHtml += langFieldHTML('ls_title_tr', 'ls_title_en', 'Başlık', ls.title.tr, ls.title.en, true);
  lsHtml += langFieldHTML('ls_text_tr', 'ls_text_en', 'Metin', ls.text.tr, ls.text.en, true);
  lsHtml += langFieldHTML('ls_cta_tr', 'ls_cta_en', 'CTA', ls.cta.tr, ls.cta.en);
  ls.points.forEach((p, i) => {
    lsHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Point ${i+1}</span></div>
      <div class="lang-fields">
        <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">TR</label><input class="admin-input" type="text" id="ls_point_${i}_tr" value="${esc(p.tr)}"></div>
        <div class="admin-field"><label style="font-size:0.78rem;color:var(--primary)">EN</label><input class="admin-input" type="text" id="ls_point_${i}_en" value="${esc(p.en)}"></div>
      </div>
    </div>`;
  });
  document.getElementById('listora-spotlight').innerHTML = lsHtml;
}

function collectApps() {
  const ap = config.apps_preview;
  ap.tag = { tr: g('ap_tag_tr'), en: g('ap_tag_en') };
  ap.title = { tr: g('ap_title_tr'), en: g('ap_title_en') };
  ap.text = { tr: g('ap_text_tr'), en: g('ap_text_en') };
  ap.cta = { tr: g('ap_cta_tr'), en: g('ap_cta_en') };
  ap.items.forEach((item, i) => {
    item.icon = g('ap_item_'+i+'_icon') || undefined;
    item.title.tr = g('ap_item_'+i+'_title_tr');
    item.title.en = g('ap_item_'+i+'_title_en');
    item.text.tr = g('ap_item_'+i+'_text_tr');
    item.text.en = g('ap_item_'+i+'_text_en');
    const ps = g('ap_item_'+i+'_playstore');
    if (ps) item.playstore_url = ps; else delete item.playstore_url;
    const feat = g('ap_item_'+i+'_featured');
    if (feat === 'true') item.featured = true; else item.featured = false;
  });

  const pg = config.apps_page;
  pg.eyebrow = { tr: g('ap_eyebrow_tr'), en: g('ap_eyebrow_en') };
  pg.title = { tr: g('ap_title_tr'), en: g('ap_title_en') };
  pg.text = { tr: g('ap_text_tr'), en: g('ap_text_en') };
  pg.primary_cta = { tr: g('ap_primary_cta_tr'), en: g('ap_primary_cta_en') };
  pg.secondary_cta = { tr: g('ap_secondary_cta_tr'), en: g('ap_secondary_cta_en') };
  pg.nav_cta = { tr: g('ap_nav_cta_tr'), en: g('ap_nav_cta_en') };
  pg.card_title = { tr: g('ap_card_title_tr'), en: g('ap_card_title_en') };
  pg.card_text = { tr: g('ap_card_text_tr'), en: g('ap_card_text_en') };
  const flt = pg.filter;
  flt.label = { tr: g('ap_filter_label_tr'), en: g('ap_filter_label_en') };
  flt.all = { tr: g('ap_filter_all_tr'), en: g('ap_filter_all_en') };
  flt.live = { tr: g('ap_filter_live_tr'), en: g('ap_filter_live_en') };
  flt.soon = { tr: g('ap_filter_soon_tr'), en: g('ap_filter_soon_en') };
  flt.feature = { tr: g('ap_filter_feature_tr'), en: g('ap_filter_feature_en') };
  flt.results_intro = { tr: g('ap_filter_results_tr'), en: g('ap_filter_results_en') };
  flt.empty_title = { tr: g('ap_filter_empty_title_tr'), en: g('ap_filter_empty_title_en') };
  flt.empty_text = { tr: g('ap_filter_empty_text_tr'), en: g('ap_filter_empty_text_en') };

  pg.apps.forEach((app, i) => {
    app.id = g('app_'+i+'_id');
    app.icon = g('app_'+i+'_icon') || undefined;
    app.status_class = g('app_'+i+'_status_class');
    app.playstore_url = g('app_'+i+'_playstore') || undefined;
    app.tags = g('app_'+i+'_tags');
    app.category.tr = g('app_'+i+'_category_tr');
    app.category.en = g('app_'+i+'_category_en');
    app.status.tr = g('app_'+i+'_status_tr');
    app.status.en = g('app_'+i+'_status_en');
    app.title.tr = g('app_'+i+'_title_tr');
    app.title.en = g('app_'+i+'_title_en');
    app.text.tr = g('app_'+i+'_text_tr');
    app.text.en = g('app_'+i+'_text_en');
    app.cta.tr = g('app_'+i+'_cta_tr');
    app.cta.en = g('app_'+i+'_cta_en');
    app.features.forEach((f, j) => {
      f.tr = g('app_'+i+'_feat_'+j+'_tr');
      f.en = g('app_'+i+'_feat_'+j+'_en');
    });
  });

  const ls = pg.listora_spotlight;
  ls.tag = { tr: g('ls_tag_tr'), en: g('ls_tag_en') };
  ls.title = { tr: g('ls_title_tr'), en: g('ls_title_en') };
  ls.text = { tr: g('ls_text_tr'), en: g('ls_text_en') };
  ls.cta = { tr: g('ls_cta_tr'), en: g('ls_cta_en') };
  ls.points.forEach((p, i) => {
    p.tr = g('ls_point_'+i+'_tr');
    p.en = g('ls_point_'+i+'_en');
  });
}

function renderTemplates() {
  const tp = config.templates;
  // Hero
  let html = langFieldHTML('tp_hero_tag_tr', 'tp_hero_tag_en', 'Hero Tag', tp.hero_tag.tr, tp.hero_tag.en);
  html += langFieldHTML('tp_hero_title_tr', 'tp_hero_title_en', 'Hero Başlık', tp.hero_title.tr, tp.hero_title.en, true);
  html += langFieldHTML('tp_hero_text_tr', 'tp_hero_text_en', 'Hero Metin', tp.hero_text.tr, tp.hero_text.en, true);
  html += langFieldHTML('tp_cta_tr', 'tp_cta_en', 'CTA', tp.cta.tr, tp.cta.en);
  // Stats
  const st = tp.stats;
  html += `<div class="admin-item-card">
    <div class="admin-item-card-title">İstatistikler</div>
    <div class="admin-grid">
      ${fieldHTML('tp_stat_templates_val', 'Şablon (değer)', st.templates.value)}
      ${langFieldHTML('tp_stat_templates_label_tr', 'tp_stat_templates_label_en', 'Şablon (etiket)', st.templates.label.tr, st.templates.label.en)}
      ${fieldHTML('tp_stat_pages_val', 'Sayfa (değer)', st.pages.value)}
      ${langFieldHTML('tp_stat_pages_label_tr', 'tp_stat_pages_label_en', 'Sayfa (etiket)', st.pages.label.tr, st.pages.label.en)}
      ${fieldHTML('tp_stat_responsive_val', 'Responsive (değer)', st.responsive.value)}
      ${langFieldHTML('tp_stat_responsive_label_tr', 'tp_stat_responsive_label_en', 'Responsive (etiket)', st.responsive.label.tr, st.responsive.label.en)}
    </div>
  </div>`;
  // Section
  html += `<div class="admin-item-card">
    <div class="admin-item-card-title">Şablon Bölümü</div>
    ${langFieldHTML('tp_sec_tag_tr', 'tp_sec_tag_en', 'Tag', tp.section.tag.tr, tp.section.tag.en)}
    ${langFieldHTML('tp_sec_title_tr', 'tp_sec_title_en', 'Başlık', tp.section.title.tr, tp.section.title.en, true)}
    ${langFieldHTML('tp_sec_text_tr', 'tp_sec_text_en', 'Metin', tp.section.text.tr, tp.section.text.en, true)}
  </div>`;
  // Feature Section
  html += `<div class="admin-item-card">
    <div class="admin-item-card-title">Özellik Bölümü</div>
    ${langFieldHTML('tp_fsec_tag_tr', 'tp_fsec_tag_en', 'Tag', tp.feature_section.tag.tr, tp.feature_section.tag.en)}
    ${langFieldHTML('tp_fsec_title_tr', 'tp_fsec_title_en', 'Başlık', tp.feature_section.title.tr, tp.feature_section.title.en, true)}
    ${langFieldHTML('tp_fsec_text_tr', 'tp_fsec_text_en', 'Metin', tp.feature_section.text.tr, tp.feature_section.text.en, true)}
  </div>`;
  // Labels
  html += `<div class="admin-item-card">
    <div class="admin-item-card-title">Etiketler</div>
    <div class="admin-grid">
      ${langFieldHTML('tp_lbl_colors_tr', 'tp_lbl_colors_en', 'Renk Şeması', tp.labels.colors.tr, tp.labels.colors.en)}
      ${langFieldHTML('tp_lbl_demo_tr', 'tp_lbl_demo_en', 'Demo', tp.labels.demo.tr, tp.labels.demo.en)}
      ${langFieldHTML('tp_lbl_buy_tr', 'tp_lbl_buy_en', 'Satın Al', tp.labels.buy.tr, tp.labels.buy.en)}
    </div>
  </div>`;
  document.getElementById('templates-hero').innerHTML = html;

  // Template Cards
  let cardHtml = '';
  tp.items.forEach((item, i) => {
    cardHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">${item.name ? item.name.tr || item.name.en || item.id : item.id}</span></div>
      <div class="admin-grid">
        ${fieldHTML('tpi_'+i+'_id', 'ID', item.id)}
        ${fieldHTML('tpi_'+i+'_img', 'Görsel URL', item.img)}
        ${fieldHTML('tpi_'+i+'_price', 'Fiyat', item.price)}
        ${fieldHTML('tpi_'+i+'_demo_url', 'Demo URL', item.demo_url)}
        ${fieldHTML('tpi_'+i+'_buy_url', 'Satın Al URL', item.buy_url)}
      </div>
      ${langFieldHTML('tpi_'+i+'_badge_tr', 'tpi_'+i+'_badge_en', 'Rozet', item.badge.tr, item.badge.en)}
      ${langFieldHTML('tpi_'+i+'_name_tr', 'tpi_'+i+'_name_en', 'İsim', item.name.tr, item.name.en)}
      ${langFieldHTML('tpi_'+i+'_desc_tr', 'tpi_'+i+'_desc_en', 'Açıklama', item.desc.tr, item.desc.en, true)}
      <div class="admin-field" style="margin-top:10px">
        <label>Renkler (virgülle ayırın, örn: #0a1628,#2563eb)</label>
        <input class="admin-input" type="text" id="tpi_${i}_colors" value="${(item.colors||[]).join(',')}">
      </div>
      <div class="admin-field">
        <label>Özellikler (virgülle ayırın)</label>
        <input class="admin-input" type="text" id="tpi_${i}_features" value="${(item.features||[]).join(', ')}">
      </div>
    </div>`;
  });
  document.getElementById('template-cards').innerHTML = cardHtml;

  // Features
  let featHtml = '';
  tp.features.forEach((f, i) => {
    featHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Özellik ${i+1}</span></div>
      <div class="admin-grid">
        ${fieldHTML('tp_feat_'+i+'_icon', 'İkon', f.icon)}
        ${langFieldHTML('tp_feat_'+i+'_label_tr', 'tp_feat_'+i+'_label_en', 'Etiket', f.label.tr, f.label.en)}
      </div>
    </div>`;
  });
  document.getElementById('template-features').innerHTML = featHtml;

  // FAQ
  // Section
  let faqHtml = `<div class="admin-item-card">
    <div class="admin-item-card-title">SSS Bölümü</div>
    ${langFieldHTML('tp_faq_tag_tr', 'tp_faq_tag_en', 'Tag', tp.faq_section.tag.tr, tp.faq_section.tag.en)}
    ${langFieldHTML('tp_faq_title_tr', 'tp_faq_title_en', 'Başlık', tp.faq_section.title.tr, tp.faq_section.title.en, true)}
    ${langFieldHTML('tp_faq_text_tr', 'tp_faq_text_en', 'Metin', tp.faq_section.text.tr, tp.faq_section.text.en, true)}
  </div>`;
  tp.faq.forEach((faq, i) => {
    faqHtml += `<div class="admin-item-card">
      <div class="admin-item-card-header"><span class="admin-item-card-title">Soru ${i+1}</span></div>
      ${langFieldHTML('tp_faq_'+i+'_q_tr', 'tp_faq_'+i+'_q_en', 'Soru', faq.q.tr, faq.q.en)}
      ${langFieldHTML('tp_faq_'+i+'_a_tr', 'tp_faq_'+i+'_a_en', 'Cevap', faq.a.tr, faq.a.en, true)}
    </div>`;
  });
  document.getElementById('template-faq').innerHTML = faqHtml;
}

function collectTemplates() {
  const tp = config.templates;
  tp.hero_tag = { tr: g('tp_hero_tag_tr'), en: g('tp_hero_tag_en') };
  tp.hero_title = { tr: g('tp_hero_title_tr'), en: g('tp_hero_title_en') };
  tp.hero_text = { tr: g('tp_hero_text_tr'), en: g('tp_hero_text_en') };
  tp.cta = { tr: g('tp_cta_tr'), en: g('tp_cta_en') };
  const st = tp.stats;
  st.templates.value = g('tp_stat_templates_val');
  st.templates.label = { tr: g('tp_stat_templates_label_tr'), en: g('tp_stat_templates_label_en') };
  st.pages.value = g('tp_stat_pages_val');
  st.pages.label = { tr: g('tp_stat_pages_label_tr'), en: g('tp_stat_pages_label_en') };
  st.responsive.value = g('tp_stat_responsive_val');
  st.responsive.label = { tr: g('tp_stat_responsive_label_tr'), en: g('tp_stat_responsive_label_en') };
  tp.section.tag = { tr: g('tp_sec_tag_tr'), en: g('tp_sec_tag_en') };
  tp.section.title = { tr: g('tp_sec_title_tr'), en: g('tp_sec_title_en') };
  tp.section.text = { tr: g('tp_sec_text_tr'), en: g('tp_sec_text_en') };
  tp.feature_section.tag = { tr: g('tp_fsec_tag_tr'), en: g('tp_fsec_tag_en') };
  tp.feature_section.title = { tr: g('tp_fsec_title_tr'), en: g('tp_fsec_title_en') };
  tp.feature_section.text = { tr: g('tp_fsec_text_tr'), en: g('tp_fsec_text_en') };
  tp.labels.colors = { tr: g('tp_lbl_colors_tr'), en: g('tp_lbl_colors_en') };
  tp.labels.demo = { tr: g('tp_lbl_demo_tr'), en: g('tp_lbl_demo_en') };
  tp.labels.buy = { tr: g('tp_lbl_buy_tr'), en: g('tp_lbl_buy_en') };

  tp.items.forEach((item, i) => {
    item.id = g('tpi_'+i+'_id');
    item.img = g('tpi_'+i+'_img');
    item.price = g('tpi_'+i+'_price');
    item.demo_url = g('tpi_'+i+'_demo_url');
    item.buy_url = g('tpi_'+i+'_buy_url');
    item.badge.tr = g('tpi_'+i+'_badge_tr');
    item.badge.en = g('tpi_'+i+'_badge_en');
    item.name.tr = g('tpi_'+i+'_name_tr');
    item.name.en = g('tpi_'+i+'_name_en');
    item.desc.tr = g('tpi_'+i+'_desc_tr');
    item.desc.en = g('tpi_'+i+'_desc_en');
    const colors = g('tpi_'+i+'_colors');
    item.colors = colors ? colors.split(',').map(c => c.trim()).filter(Boolean) : [];
    const feats = g('tpi_'+i+'_features');
    item.features = feats ? feats.split(',').map(f => f.trim()).filter(Boolean) : [];
  });

  tp.features.forEach((f, i) => {
    f.icon = g('tp_feat_'+i+'_icon');
    f.label.tr = g('tp_feat_'+i+'_label_tr');
    f.label.en = g('tp_feat_'+i+'_label_en');
  });

  tp.faq_section.tag = { tr: g('tp_faq_tag_tr'), en: g('tp_faq_tag_en') };
  tp.faq_section.title = { tr: g('tp_faq_title_tr'), en: g('tp_faq_title_en') };
  tp.faq_section.text = { tr: g('tp_faq_text_tr'), en: g('tp_faq_text_en') };
  tp.faq.forEach((faq, i) => {
    faq.q.tr = g('tp_faq_'+i+'_q_tr');
    faq.q.en = g('tp_faq_'+i+'_q_en');
    faq.a.tr = g('tp_faq_'+i+'_a_tr');
    faq.a.en = g('tp_faq_'+i+'_a_en');
  });
}

function renderContact() {
  const c = config.contact;
  const f = config.footer;
  const n = config.nav;

  let html = langFieldHTML('ct_tag_tr', 'ct_tag_en', 'Tag', c.tag.tr, c.tag.en);
  html += langFieldHTML('ct_title_tr', 'ct_title_en', 'Başlık', c.title.tr, c.title.en, true);
  html += langFieldHTML('ct_text_tr', 'ct_text_en', 'Metin', c.text.tr, c.text.en, true);
  html += `<div class="admin-grid">
    ${fieldHTML('ct_email', 'E-posta', c.email)}
    ${langFieldHTML('ct_secondary_tr', 'ct_secondary_en', 'İkincil Link', c.secondary.tr, c.secondary.en)}
  </div>`;
  document.getElementById('contact-fields').innerHTML = html;

  let footerHtml = '';
  const footerFields = ['note','privacy','home_link','counter_label'];
  footerFields.forEach(fld => {
    footerHtml += langFieldHTML('ft_'+fld+'_tr', 'ft_'+fld+'_en', fld.charAt(0).toUpperCase()+fld.slice(1).replace('_',' '), f[fld].tr, f[fld].en);
  });
  document.getElementById('footer-fields').innerHTML = footerHtml;

  let navHtml = '';
  const navKeys = ['home','templates','apps','about','contact','cta'];
  navKeys.forEach(key => {
    navHtml += langFieldHTML('nav_'+key+'_tr', 'nav_'+key+'_en', key.charAt(0).toUpperCase()+key.slice(1), n[key].tr, n[key].en);
  });
  document.getElementById('nav-fields').innerHTML = navHtml;
}

function collectContact() {
  const c = config.contact;
  c.tag = { tr: g('ct_tag_tr'), en: g('ct_tag_en') };
  c.title = { tr: g('ct_title_tr'), en: g('ct_title_en') };
  c.text = { tr: g('ct_text_tr'), en: g('ct_text_en') };
  c.email = g('ct_email');
  c.secondary = { tr: g('ct_secondary_tr'), en: g('ct_secondary_en') };

  const f = config.footer;
  const footerFields = ['note','privacy','home_link','counter_label'];
  footerFields.forEach(fld => {
    f[fld] = { tr: g('ft_'+fld+'_tr'), en: g('ft_'+fld+'_en') };
  });

  const n = config.nav;
  const navKeys = ['home','templates','apps','about','contact','cta'];
  navKeys.forEach(key => {
    n[key] = { tr: g('nav_'+key+'_tr'), en: g('nav_'+key+'_en') };
  });
}

// ===== SAVE =====
function saveTab(tabId) {
  switch(tabId) {
    case 'general': collectGeneral(); break;
    case 'hero': collectHero(); break;
    case 'about': collectAbout(); break;
    case 'apps': collectApps(); break;
    case 'templates': collectTemplates(); break;
    case 'contact': collectContact(); break;
  }
  saveToStorage();
  showToast(tabNames[tabId] + ' kaydedildi.', 'success');
}

const tabNames = {
  general: 'Genel Ayarlar',
  hero: 'Hero',
  about: 'Hakkımda & Değerler',
  apps: 'Uygulamalar',
  templates: 'Şablonlar',
  contact: 'İletişim & Footer',
  json: 'JSON'
};

function saveAll() {
  collectGeneral();
  collectHero();
  collectAbout();
  collectApps();
  collectTemplates();
  collectContact();
  saveToStorage();
  refreshJSONEditor();
  showToast('Tüm içerik kaydedildi.', 'success');
}

function saveToStorage() {
  localStorage.setItem('efesoftlab-content', JSON.stringify(config, null, 2));
}

// ===== EXPORT / IMPORT / RESET =====
function exportJSON() {
  const blob = new Blob([JSON.stringify(config, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'efesoftlab-content.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('JSON dosyası dışa aktarıldı.', 'success');
}

function importJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      config = data;
      saveToStorage();
      renderActiveTab();
      showToast('İçerik başarıyla içe aktarıldı.', 'success');
    } catch(err) {
      showToast('Geçersiz JSON dosyası.', 'error');
    }
  };
  reader.readAsText(file);
}

function resetDefaults() {
  if (!confirm('Tüm içeriği varsayılana döndürmek istediğinize emin misiniz?')) return;
  config = JSON.parse(JSON.stringify(EFESOFTLAB_DEFAULTS));
  saveToStorage();
  renderActiveTab();
  showToast('Varsayılan ayarlar yüklendi.', 'info');
}

// ===== TOAST =====
function showToast(msg, type) {
  type = type || 'info';
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function refreshJSONEditor() {
  const editor = document.getElementById('json-editor');
  if (editor) editor.value = JSON.stringify(config, null, 2);
}

function renderActiveTab() {
  switch(activeTab) {
    case 'general': renderGeneral(); break;
    case 'hero': renderHero(); break;
    case 'about': renderAbout(); break;
    case 'apps': renderApps(); break;
    case 'templates': renderTemplates(); break;
    case 'contact': renderContact(); break;
    case 'json': refreshJSONEditor(); break;
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  // Setup tab switching
  document.querySelectorAll('.admin-tab').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      switchTab(tabId);
      renderActiveTab();
    });
  });

  renderActiveTab();

  // Refresh JSON editor on tab switch
  const jsonTab = document.querySelector('[data-tab="json"]');
  if (jsonTab) {
    jsonTab.addEventListener('click', refreshJSONEditor);
  }
});
