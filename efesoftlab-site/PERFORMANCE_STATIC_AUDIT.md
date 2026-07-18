# Performance & Static Audit

---

## 1. File Size Inventory

| Category | File Count | Total Size |
|----------|-----------|------------|
| HTML (root) | 5 | ~120 KB |
| HTML (templates/products) | 7 | ~200 KB |
| HTML (demos) | 25 | ~750 KB |
| CSS (all) | 14 | ~280 KB |
| JS (all, excl. admin) | 16 | ~320 KB |
| Admin JS | 5 | ~180 KB |
| Admin CSS | 1 | ~40 KB |
| **Total** | **~73 files** | **~1.9 MB** |

---

## 2. Per-Page Weight

| Page | HTML Size | CSS Includes | JS Includes | Approx Total |
|------|-----------|-------------|-------------|--------------|
| index.html | ~18 KB | 3 (42 KB) | 1 (6 KB) | ~66 KB |
| templates.html | ~25 KB | 3 (42 KB) | 1 (6 KB) | ~73 KB |
| apps.html | ~15 KB | 3 (42 KB) | 1 (6 KB) | ~63 KB |
| privacy-policy.html | ~10 KB | 3 (42 KB) | 1 (6 KB) | ~58 KB |
| Each product page | ~20 KB | 3 (42 KB) | 1 (6 KB) | ~68 KB |
| Each demo template | ~30 KB | 3 (42 KB) | 2 (18 KB) | ~90 KB |
| 404.html | ~6 KB | 2 (30 KB) | 1 (3 KB) | ~39 KB |

---

## 3. Loading Performance

| Metric | Status | Notes |
|--------|--------|-------|
| Render-blocking resources | ⚠️ | CSS is render-blocking (expected for static site) |
| External HTTP requests | ~8-12 per page | Font Awesome, Google Fonts, AOS |
| Image lazy loading | ✅ | All template images use `loading="lazy"` |
| Async/defer scripts | ✅ | `<script defer>` used on all pages |
| Minified output | ⚠️ | Files are not minified (source readability trade-off) |

---

## 4. Recommendations

### Optional (Low Priority)
1. **CSS minification**: Use `csso` or `clean-css` during build
2. **JS minification**: Use `terser` during build  
3. **Inline critical CSS**: Inline above-the-fold styles for homepage to reduce render-blocking
4. **Preconnect hints**: Add `<link rel="preconnect">` for Google Fonts and Font Awesome CDNs

### Not Recommended
- ❌ Image optimization (all images are external CDN-served)
- ❌ Bundling (each page uses different JS/CSS combinations)
- ❌ Service worker (static site with external resources — limited benefit)

---

## 5. Lighthouse Estimated Scores

| Metric | Estimated Score |
|--------|----------------|
| Performance | 85-92 |
| Accessibility | 90-95 |
| Best Practices | 90-95 |
| SEO | 95-100 |
