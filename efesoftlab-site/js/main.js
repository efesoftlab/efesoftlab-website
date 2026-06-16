var translations = { tr: {}, en: {} };
var currentLang = 'tr';
var storageKey = 'efesoftlab-language';

function buildTranslations(config) {
  var t = { tr: {}, en: {} };
  var langs = ['tr', 'en'];

  function set(key, value) {
    for (var li = 0; li < langs.length; li++) {
      var l = langs[li];
      if (value && typeof value === 'object' && value[l] !== undefined) {
        t[l][key] = value[l];
      } else if (typeof value === 'string') {
        t[l][key] = value;
      }
    }
  }

  function safeGet(obj, path) {
    if (!obj) return undefined;
    var parts = path.split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || cur === undefined || cur[parts[i]] === undefined) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function auto(key, configPath) {
    set(key, safeGet(config, configPath));
  }

  auto('nav_home', 'nav.home');
  auto('nav_templates', 'nav.templates');
  auto('nav_apps', 'nav.apps');
  auto('nav_about', 'nav.about');
  auto('nav_contact', 'nav.contact');
  auto('nav_cta', 'nav.cta');

  auto('hero_eyebrow', 'hero.eyebrow');
  auto('hero_title', 'hero.title');
  auto('hero_text', 'hero.text');
  auto('hero_primary_cta', 'hero.primary_cta');
  auto('hero_secondary_cta', 'hero.secondary_cta');
  auto('hero_panel_badge', 'hero.panel_badge');
  auto('hero_panel_status', 'hero.panel_status');
  auto('hero_floating_title', 'hero.floating_title');
  auto('hero_floating_text', 'hero.floating_text');

  var sigs = safeGet(config, 'hero.signals');
  if (sigs && sigs[0]) { auto('hero_signal_1', 'hero.signals.0'); auto('hero_signal_2', 'hero.signals.1'); auto('hero_signal_3', 'hero.signals.2'); }

  var sts = safeGet(config, 'hero.stacks');
  if (sts && sts[0]) { auto('hero_stack_1_title', 'hero.stacks.0.title'); auto('hero_stack_1_text', 'hero.stacks.0.text'); }
  if (sts && sts[1]) { auto('hero_stack_2_title', 'hero.stacks.1.title'); auto('hero_stack_2_text', 'hero.stacks.1.text'); }
  if (sts && sts[2]) { auto('hero_stack_3_title', 'hero.stacks.2.title'); auto('hero_stack_3_text', 'hero.stacks.2.text'); }

  auto('about_tag', 'about.tag');
  auto('about_title', 'about.title');
  auto('about_text', 'about.text');

  auto('value_tag', 'values.tag');
  auto('value_title', 'values.title');
  var vi = safeGet(config, 'values.items');
  if (vi && vi[0]) { auto('value_1_title', 'values.items.0.title'); auto('value_1_text', 'values.items.0.text'); }
  if (vi && vi[1]) { auto('value_2_title', 'values.items.1.title'); auto('value_2_text', 'values.items.1.text'); }
  if (vi && vi[2]) { auto('value_3_title', 'values.items.2.title'); auto('value_3_text', 'values.items.2.text'); }
  if (vi && vi[3]) { auto('value_4_title', 'values.items.3.title'); auto('value_4_text', 'values.items.3.text'); }

  auto('trust_tag', 'trust.tag');
  auto('trust_title', 'trust.title');
  auto('trust_text', 'trust.text');

  auto('contact_tag', 'contact.tag');
  auto('contact_title', 'contact.title');
  auto('contact_text', 'contact.text');
  auto('contact_secondary', 'contact.secondary');

  auto('footer_note', 'footer.note');
  auto('footer_privacy', 'footer.privacy');
  auto('footer_home_link', 'footer.home_link');
  auto('counter_label', 'footer.counter_label');

  auto('apps_preview_tag', 'apps_preview.tag');
  auto('apps_preview_title', 'apps_preview.title');
  auto('apps_preview_text', 'apps_preview.text');
  auto('apps_preview_cta', 'apps_preview.cta');
  var ai = safeGet(config, 'apps_preview.items');
  if (ai && ai[0]) { auto('app_tools_title', 'apps_preview.items.0.title'); auto('apps_preview_tools_text', 'apps_preview.items.0.text'); }
  if (ai && ai[1]) { auto('app_listora_title', 'apps_preview.items.1.title'); auto('apps_preview_listora_text', 'apps_preview.items.1.text'); }
  if (ai && ai[2]) { auto('app_qr_title', 'apps_preview.items.2.title'); auto('apps_preview_qr_text', 'apps_preview.items.2.text'); }

  auto('page_title', 'meta.index.title');
  auto('page_description', 'meta.index.description');
  auto('page_404_title', 'meta.404.title');
  auto('page_404_description', 'meta.404.description');

  auto('skip_link', 'labels.skip_link');
  auto('menu_open', 'labels.menu_open');
  auto('menu_close', 'labels.menu_close');
  auto('play_store', 'labels.play_store');

  auto('page_404_heading', 'page_404.heading');
  auto('page_404_text', 'page_404.text');
  auto('back_home', 'page_404.back_link');

  auto('privacy_meta_title', 'meta.privacy.title');
  auto('privacy_meta_description', 'meta.privacy.description');
  auto('privacy_heading_tag', 'privacy.heading_tag');
  auto('privacy_heading_title', 'privacy.heading_title');
  auto('privacy_updated', 'privacy.updated');
  var ps = safeGet(config, 'privacy.sections');
  if (ps) {
    for (var si = 0; si < ps.length; si++) {
      auto('privacy_s' + (si + 1) + '_title', 'privacy.sections.' + si + '.title');
      auto('privacy_s' + (si + 1) + '_text', 'privacy.sections.' + si + '.text');
      if (ps[si].items) {
        for (var pj = 0; pj < ps[si].items.length; pj++) {
          auto('privacy_s' + (si + 1) + '_li' + (pj + 1), 'privacy.sections.' + si + '.items.' + pj);
        }
      }
    }
  }

  return t;
}

function initConfig() {
  var saved;
  try { saved = JSON.parse(localStorage.getItem('efesoftlab-content')); } catch (e) {}
  var defaults = (typeof EFESOFTLAB_DEFAULTS !== 'undefined') ? EFESOFTLAB_DEFAULTS : {};
  var config = JSON.parse(JSON.stringify(defaults));
  if (saved && typeof saved === 'object' && saved.nav) {
    (function merge(target, source) {
      var keys = Object.keys(source);
      for (var ki = 0; ki < keys.length; ki++) {
        var k = keys[ki];
        if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k]) && target[k]) {
          merge(target[k], source[k]);
        } else if (source[k] !== undefined) {
          target[k] = source[k];
        }
      }
    })(config, saved);
  }
  return config;
}

var config = initConfig();
translations = buildTranslations(config);

function toArray(nl) {
  var arr = [];
  if (!nl) return arr;
  for (var i = 0; i < nl.length; i++) { arr.push(nl[i]); }
  return arr;
}

var root = document.documentElement;
var menuToggle = document.querySelector('.menu-toggle');
var navPanel = document.querySelector('.nav-panel');
var navLinks = toArray(document.querySelectorAll('.nav-links a[href^="#"]'));
var langButtons = toArray(document.querySelectorAll('.lang-button'));
var filterButtons = toArray(document.querySelectorAll('[data-filter]'));
var filterItems = toArray(document.querySelectorAll('[data-filter-item]'));
var filterCount = document.querySelector('[data-filter-count]');
var filterEmpty = document.querySelector('[data-filter-empty]');

function setMenuLabel(isOpen) {
  if (!menuToggle) return;
  var lbl = isOpen ? translations[currentLang].menu_close : translations[currentLang].menu_open;
  if (lbl) menuToggle.setAttribute('aria-label', lbl);
}

function closeMenu() {
  if (menuToggle) { menuToggle.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); }
  if (navPanel) { navPanel.classList.remove('is-open'); }
  setMenuLabel(false);
}

function applyLanguage(lang) {
  if (lang !== 'en') lang = 'tr';
  currentLang = lang;
  root.lang = lang;

  var dict = translations[lang] || translations['tr'];
  if (!dict) dict = {};

  var pt = document.body ? document.body.dataset.pageTitleKey : undefined;
  var pd = document.body ? document.body.dataset.pageDescriptionKey : undefined;
  if (pt && dict[pt]) { document.title = dict[pt]; }
  else if (dict.page_title) { document.title = dict.page_title; }

  if (pd && dict[pd]) {
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict[pd]);
  } else if (dict.page_description) {
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict.page_description);
  }

  var ogt = document.querySelector('meta[property="og:title"]');
  if (ogt) ogt.setAttribute('content', document.title);
  var ogd = document.querySelector('meta[property="og:description"]');
  if (ogd) ogd.setAttribute('content', md ? (pd && dict[pd] ? dict[pd] : dict.page_description || '') : '');
  var ogl = document.querySelector('meta[property="og:locale"]');
  if (ogl) ogl.setAttribute('content', lang === 'tr' ? 'tr_TR' : 'en_US');

  var i18nEls = document.querySelectorAll('[data-i18n]');
  for (var ei = 0; ei < i18nEls.length; ei++) {
    var key = i18nEls[ei].getAttribute('data-i18n');
    if (key && dict[key]) {
      i18nEls[ei].textContent = dict[key];
    }
  }

  for (var bi = 0; bi < langButtons.length; bi++) {
    var active = langButtons[bi].dataset.lang === lang;
    langButtons[bi].classList.toggle('is-active', active);
    langButtons[bi].setAttribute('aria-pressed', String(active));
  }

  try { localStorage.setItem(storageKey, lang); } catch (e) {}
  setMenuLabel(menuToggle ? menuToggle.classList.contains('is-open') : false);
}

function applyAppFilter(filter) {
  if (!filterItems.length) return;
  var count = 0;
  for (var fi = 0; fi < filterButtons.length; fi++) {
    var active = filterButtons[fi].dataset.filter === filter;
    filterButtons[fi].classList.toggle('is-active', active);
    filterButtons[fi].setAttribute('aria-pressed', String(active));
  }
  for (var ii = 0; ii < filterItems.length; ii++) {
    var tags = (filterItems[ii].dataset.tags || '').split(' ').filter(Boolean);
    var vis = filter === 'all' || tags.indexOf(filter) !== -1;
    filterItems[ii].hidden = !vis;
    filterItems[ii].classList.toggle('is-hidden', !vis);
    if (vis) count++;
  }
  if (filterCount) filterCount.textContent = String(count);
  if (filterEmpty) filterEmpty.hidden = count > 0;
}

function updateCounter() {
  var el = document.querySelector('[data-counter]');
  if (!el) return;
  try {
    var c = parseInt(localStorage.getItem('efesoftlab-visits') || '0', 10) + 1;
    localStorage.setItem('efesoftlab-visits', String(c));
    el.textContent = c.toLocaleString();
  } catch (e) {}
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener('click', function() {
    var open = menuToggle.classList.toggle('is-open');
    navPanel.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    setMenuLabel(open);
  });
  for (var ni = 0; ni < navLinks.length; ni++) {
    navLinks[ni].addEventListener('click', closeMenu);
  }
  document.addEventListener('click', function(e) {
    if (!navPanel.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });
}

for (var li = 0; li < langButtons.length; li++) {
  (function(btn) {
    btn.addEventListener('click', function() { applyLanguage(btn.getAttribute('data-lang') || 'tr'); });
  })(langButtons[li]);
}

for (var fi2 = 0; fi2 < filterButtons.length; fi2++) {
  (function(btn) {
    btn.addEventListener('click', function() { applyAppFilter(btn.getAttribute('data-filter') || 'all'); });
  })(filterButtons[fi2]);
}

var anchors = toArray(document.querySelectorAll('a[href^="#"]'));
for (var ai = 0; ai < anchors.length; ai++) {
  anchors[ai].addEventListener('click', function(e) {
    var id = this.getAttribute('href');
    if (!id || id === '#') return;
    var t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
}

try {
  var savedLang = localStorage.getItem(storageKey);
  if (savedLang === 'en') applyLanguage('en');
  else applyLanguage('tr');
} catch (e) { applyLanguage('tr'); }

applyAppFilter('all');
updateCounter();
