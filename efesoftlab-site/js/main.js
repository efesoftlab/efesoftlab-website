if (typeof EFESOFTLAB_DEFAULTS === 'undefined') {
  var EFESOFTLAB_DEFAULTS = {};
}

// ===== Icerik Yonetim Sistemi =====
// Config, admin panelinden localStorage'a kaydedilir.
// Varsayilan degerler site-config.js'deki EFESOFTLAB_DEFAULTS'tan gelir.
function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  var out = JSON.parse(JSON.stringify(target));
  Object.keys(source).forEach(function(k) {
    if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k]) && out[k]) {
      out[k] = deepMerge(out[k], source[k]);
    } else if (source[k] !== undefined) {
      out[k] = source[k];
    }
  });
  return out;
}

function loadConfig() {
  var saved = localStorage.getItem('efesoftlab-content');
  if (saved) {
    try {
      var parsed = JSON.parse(saved);
      return deepMerge(EFESOFTLAB_DEFAULTS, parsed);
    } catch(e) {}
  }
  return JSON.parse(JSON.stringify(EFESOFTLAB_DEFAULTS));
}

function buildTranslations(config) {
  var t = { tr: {}, en: {} };
  var langs = ['tr', 'en'];
  
  function set(key, value) {
    langs.forEach(function(l) {
      if (value && typeof value === 'object' && value[l] !== undefined) {
        t[l][key] = value[l];
      } else if (typeof value === 'string') {
        langs.forEach(function(l2) { t[l2][key] = value; });
      }
    });
  }
  
  // NAV
  set('nav_home', config.nav.home);
  set('nav_templates', config.nav.templates);
  set('nav_apps', config.nav.apps);
  set('nav_about', config.nav.about);
  set('nav_contact', config.nav.contact);
  set('nav_cta', config.nav.cta);
  
  // HERO
  set('hero_eyebrow', config.hero.eyebrow);
  set('hero_title', config.hero.title);
  set('hero_text', config.hero.text);
  set('hero_primary_cta', config.hero.primary_cta);
  set('hero_secondary_cta', config.hero.secondary_cta);
  if (config.hero.signals && config.hero.signals[0]) {
    set('hero_signal_1', config.hero.signals[0]);
    set('hero_signal_2', config.hero.signals[1]);
    set('hero_signal_3', config.hero.signals[2]);
  }
  set('hero_panel_badge', config.hero.panel_badge);
  set('hero_panel_status', config.hero.panel_status);
  if (config.hero.stacks && config.hero.stacks[0]) {
    set('hero_stack_1_title', config.hero.stacks[0].title);
    set('hero_stack_1_text', config.hero.stacks[0].text);
  }
  if (config.hero.stacks && config.hero.stacks[1]) {
    set('hero_stack_2_title', config.hero.stacks[1].title);
    set('hero_stack_2_text', config.hero.stacks[1].text);
  }
  if (config.hero.stacks && config.hero.stacks[2]) {
    set('hero_stack_3_title', config.hero.stacks[2].title);
    set('hero_stack_3_text', config.hero.stacks[2].text);
  }
  set('hero_floating_title', config.hero.floating_title);
  set('hero_floating_text', config.hero.floating_text);
  
  // ABOUT
  set('about_tag', config.about.tag);
  set('about_title', config.about.title);
  set('about_text', config.about.text);
  
  // VALUES
  set('value_tag', config.values.tag);
  set('value_title', config.values.title);
  if (config.values.items && config.values.items[0]) {
    set('value_1_title', config.values.items[0].title);
    set('value_1_text', config.values.items[0].text);
  }
  if (config.values.items && config.values.items[1]) {
    set('value_2_title', config.values.items[1].title);
    set('value_2_text', config.values.items[1].text);
  }
  if (config.values.items && config.values.items[2]) {
    set('value_3_title', config.values.items[2].title);
    set('value_3_text', config.values.items[2].text);
  }
  if (config.values.items && config.values.items[3]) {
    set('value_4_title', config.values.items[3].title);
    set('value_4_text', config.values.items[3].text);
  }
  
  // TRUST
  set('trust_tag', config.trust.tag);
  set('trust_title', config.trust.title);
  set('trust_text', config.trust.text);
  
  // CONTACT
  set('contact_tag', config.contact.tag);
  set('contact_title', config.contact.title);
  set('contact_text', config.contact.text);
  set('contact_secondary', config.contact.secondary);
  
  // FOOTER
  set('footer_note', config.footer.note);
  set('footer_privacy', config.footer.privacy);
  set('footer_home_link', config.footer.home_link);
  set('counter_label', config.footer.counter_label);
  
  // APPS PREVIEW
  set('apps_preview_tag', config.apps_preview.tag);
  set('apps_preview_title', config.apps_preview.title);
  set('apps_preview_text', config.apps_preview.text);
  set('apps_preview_cta', config.apps_preview.cta);
  if (config.apps_preview.items && config.apps_preview.items[0]) {
    set('app_tools_title', config.apps_preview.items[0].title);
    set('apps_preview_tools_text', config.apps_preview.items[0].text);
  }
  if (config.apps_preview.items && config.apps_preview.items[1]) {
    set('app_listora_title', config.apps_preview.items[1].title);
    set('apps_preview_listora_text', config.apps_preview.items[1].text);
  }
  if (config.apps_preview.items && config.apps_preview.items[2]) {
    set('app_qr_title', config.apps_preview.items[2].title);
    set('apps_preview_qr_text', config.apps_preview.items[2].text);
  }
  
  // APPS PAGE
  set('apps_page_meta_title', config.meta.apps.title);
  set('apps_page_meta_description', config.meta.apps.description);
  set('apps_page_eyebrow', config.apps_page.eyebrow);
  set('apps_page_title', config.apps_page.title);
  set('apps_page_text', config.apps_page.text);
  set('apps_page_primary_cta', config.apps_page.primary_cta);
  set('apps_page_secondary_cta', config.apps_page.secondary_cta);
  set('apps_page_card_title', config.apps_page.card_title);
  set('apps_page_card_text', config.apps_page.card_text);
  set('apps_page_nav_cta', config.apps_page.nav_cta);
  set('apps_tag', config.apps_page.section_tag);
  set('apps_title', config.apps_page.section_title);
  set('apps_text', config.apps_page.section_text);
  set('apps_filter_label', config.apps_page.filter.label);
  set('apps_filter_all', config.apps_page.filter.all);
  set('apps_filter_live', config.apps_page.filter.live);
  set('apps_filter_soon', config.apps_page.filter.soon);
  set('apps_filter_feature', config.apps_page.filter.feature);
  set('apps_results_intro', config.apps_page.filter.results_intro);
  set('apps_empty_title', config.apps_page.filter.empty_title);
  set('apps_empty_text', config.apps_page.filter.empty_text);
  
  // APP CARDS (apps page)
  var apps = config.apps_page.apps || [];
  apps.forEach(function(app) {
    var prefix = 'app_' + app.id;
    set(prefix + '_category', app.category);
    set(prefix + '_status', app.status);
    set(prefix + '_title', app.title);
    set(prefix + '_text', app.text);
    set(prefix + '_cta', app.cta);
    if (app.features) {
      app.features.forEach(function(f, i) {
        set(prefix + '_feature_' + (i+1), f);
      });
    }
  });
  
  // LISTORA SPOTLIGHT
  set('listora_spotlight_tag', config.apps_page.listora_spotlight.tag);
  set('listora_spotlight_title', config.apps_page.listora_spotlight.title);
  set('listora_spotlight_text', config.apps_page.listora_spotlight.text);
  set('listora_spotlight_cta', config.apps_page.listora_spotlight.cta);
  var points = config.apps_page.listora_spotlight.points || [];
  points.forEach(function(p, i) {
    set('listora_spotlight_point_' + (i+1), p);
  });
  
  // TEMPLATES PAGE
  set('templates_page_meta_title', config.meta.templates.title);
  set('templates_page_meta_description', config.meta.templates.description);
  set('templates_hero_tag', config.templates.hero_tag);
  set('templates_hero_title', config.templates.hero_title);
  set('templates_hero_text', config.templates.hero_text);
  set('templates_cta', config.templates.cta);
  set('templates_stat_1_value', config.templates.stats.templates.value);
  set('templates_stat_1_label', config.templates.stats.templates.label);
  set('templates_stat_2_value', config.templates.stats.pages.value);
  set('templates_stat_2_label', config.templates.stats.pages.label);
  set('templates_stat_3_value', config.templates.stats.responsive.value);
  set('templates_stat_3_label', config.templates.stats.responsive.label);
  set('templates_section_tag', config.templates.section.tag);
  set('templates_section_title', config.templates.section.title);
  set('templates_section_text', config.templates.section.text);
  set('templates_feature_tag', config.templates.feature_section.tag);
  set('templates_feature_title', config.templates.feature_section.title);
  set('templates_feature_text', config.templates.feature_section.text);
  set('templates_faq_tag', config.templates.faq_section.tag);
  set('templates_faq_title', config.templates.faq_section.title);
  set('templates_faq_text', config.templates.faq_section.text);
  
  set('tpl_colors_label', config.templates.labels.colors);
  set('tpl_demo_btn', config.templates.labels.demo);
  set('tpl_buy_btn', config.templates.labels.buy);
  
  // TEMPLATE ITEMS
  var tpls = config.templates.items || [];
  tpls.forEach(function(tpl) {
    var map = { corp: 'tpl_corp', estate: 'tpl_estate', medical: 'tpl_medical', restaurant: 'tpl_restaurant', law: 'tpl_law' };
    var prefix = map[tpl.id];
    if (prefix) {
      set(prefix + '_badge', tpl.badge);
      set(prefix + '_name', tpl.name);
      set(prefix + '_desc', tpl.desc);
      // price is not bilingual, same for both languages
      set(prefix + '_price', tpl.price || '');
    }
  });
  
  // TEMPLATE FEATURES (icons)
  set('tpl_feature_responsive', config.templates.features[0].label);
  set('tpl_feature_darkmode', config.templates.features[1].label);
  set('tpl_feature_seo', config.templates.features[2].label);
  set('tpl_feature_admin', config.templates.features[3].label);
  set('tpl_feature_lang', config.templates.features[4].label);
  set('tpl_feature_speed', config.templates.features[5].label);
  
  // TEMPLATE FAQ
  var faqs = config.templates.faq || [];
  faqs.forEach(function(faq, i) {
    set('tpl_faq_' + (i+1) + '_q', faq.q);
    set('tpl_faq_' + (i+1) + '_a', faq.a);
  });
  
  // HOME TEMPLATES SECTION
  set('home_tpl_tag', config.home_templates.tag);
  set('home_tpl_title', config.home_templates.title);
  set('home_tpl_text', config.home_templates.text);
  set('home_tpl_cta', config.home_templates.cta);
  set('home_tpl_corp', config.home_templates.items[0].name);
  set('home_tpl_corp_text', config.home_templates.items[0].text);
  set('home_tpl_estate', config.home_templates.items[1].name);
  set('home_tpl_estate_text', config.home_templates.items[1].text);
  set('home_tpl_medical', config.home_templates.items[2].name);
  set('home_tpl_medical_text', config.home_templates.items[2].text);
  set('home_tpl_restaurant', config.home_templates.items[3].name);
  set('home_tpl_restaurant_text', config.home_templates.items[3].text);
  set('home_tpl_law', config.home_templates.items[4].name);
  set('home_tpl_law_text', config.home_templates.items[4].text);
  set('home_tpl_demo', config.home_templates.demo_label);

  // META
  set('page_title', config.meta.index.title);
  set('page_description', config.meta.index.description);
  set('page_404_title', config.meta['404'].title);
  set('page_404_description', config.meta['404'].description);
  
  // LABELS
  set('skip_link', config.labels.skip_link);
  set('menu_open', config.labels.menu_open);
  set('menu_close', config.labels.menu_close);
  set('play_store', config.labels.play_store);
  
  // 404
  set('page_404_heading', config.page_404.heading);
  set('page_404_text', config.page_404.text);
  set('back_home', config.page_404.back_link);
  
  // PRIVACY
  set('privacy_meta_title', config.meta.privacy.title);
  set('privacy_meta_description', config.meta.privacy.description);
  set('privacy_heading_tag', config.privacy.heading_tag);
  set('privacy_heading_title', config.privacy.heading_title);
  set('privacy_updated', config.privacy.updated);
  if (config.privacy.sections) {
    config.privacy.sections.forEach(function(s, i) {
      set('privacy_s' + (i+1) + '_title', s.title);
      set('privacy_s' + (i+1) + '_text', s.text || s.intro);
      if (s.items) {
        s.items.forEach(function(item, j) {
          set('privacy_s' + (i+1) + '_li' + (j+1), item);
        });
      }
    });
  }
  
  return t;
}

var config = loadConfig();
var translations = buildTranslations(config);

try {
const root = document.documentElement;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const langButtons = document.querySelectorAll(".lang-button");
const filterButtons = document.querySelectorAll("[data-filter]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterCount = document.querySelector("[data-filter-count]");
const filterEmpty = document.querySelector("[data-filter-empty]");
const storageKey = "efesoftlab-language";

const setMenuLabel = (isOpen) => {
  const lang = root.lang === "en" ? "en" : "tr";
  if (menuToggle) {
    menuToggle.setAttribute("aria-label", isOpen ? translations[lang].menu_close : translations[lang].menu_open);
  }
};

const closeMenu = () => {
  if (!menuToggle || !navPanel) {
    return;
  }

  menuToggle.classList.remove("is-open");
  navPanel.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  setMenuLabel(false);
};

const applyLanguage = (lang) => {
  const selected = translations[lang] ? lang : "tr";
  const dict = translations[selected];

  root.lang = selected;

  const pageTitle = document.body.dataset.pageTitleKey;
  const pageDescription = document.body.dataset.pageDescriptionKey;
  document.title = pageTitle && dict[pageTitle] ? dict[pageTitle] : dict.page_title;

  const metaDescription = pageDescription && dict[pageDescription] ? dict[pageDescription] : dict.page_description;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", metaDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", selected === "tr" ? "tr_TR" : "en_US");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dict[key]) {
      element.textContent = dict[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(storageKey, selected);
  setMenuLabel(menuToggle?.classList.contains("is-open"));
};

const applyAppFilter = (filter) => {
  if (!filterItems.length) {
    return;
  }

  let visibleCount = 0;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  filterItems.forEach((item) => {
    const tags = (item.dataset.tags || "").split(" ").filter(Boolean);
    const isVisible = filter === "all" || tags.includes(filter);
    item.hidden = !isVisible;
    item.classList.toggle("is-hidden", !isVisible);
    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (filterCount) {
    filterCount.textContent = String(visibleCount);
  }

  if (filterEmpty) {
    filterEmpty.hidden = visibleCount > 0;
  }
};

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    navPanel.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    setMenuLabel(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navPanel.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang || "tr");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyAppFilter(button.dataset.filter || "all");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  });
});

const updateCounter = () => {
  const counterEl = document.querySelector("[data-counter]");
  if (!counterEl) return;
  const key = "efesoftlab-visits";
  let count = parseInt(localStorage.getItem(key) || "0", 10);
  count += 1;
  localStorage.setItem(key, String(count));
  counterEl.textContent = count.toLocaleString();
};

applyLanguage(localStorage.getItem(storageKey) || "tr");
applyAppFilter("all");
updateCounter();
} catch(e) {}

