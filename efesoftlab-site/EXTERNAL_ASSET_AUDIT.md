# External Asset Audit

Audit of all external (third-party) assets referenced by the site.

---

## 1. Image CDNs

| Domain | Source | References | Verified | Notes |
|--------|--------|------------|----------|-------|
| `picsum.photos` | Lorem Picsum | 15 | ✅ | Placeholder images in demo templates |
| `images.unsplash.com` | Unsplash | 16 | ✅ | Hero images, property photos, team photos |
| `i.pravatar.cc` | Pravatar | 2 | ✅ | Team member avatars in templates |
| `randomuser.me` | Random User | 2 | ✅ | Testimonial avatars in templates |
| `via.placeholder.com` | Placeholder | 1 | ✅ | Used in kurumsal template placeholder |
| `pravatar.cc` | Pravatar | 0 | ✅ | Removed from CSP (not referenced) |

### CSP Rule
```
img-src 'self' https://picsum.photos https://images.unsplash.com https://i.pravatar.cc https://randomuser.me https://via.placeholder.com data:
```

---

## 2. Google Services

| Service | URL Pattern | Pages Using |
|---------|-------------|-------------|
| Google Maps Embed | `google.com/maps/embed` | Demo contact pages (avukat, emlak, klinik, kurumsal, restoran) |
| Google Fonts | `fonts.googleapis.com` | All template pages |
| Material Icons | `fonts.googleapis.com/icon` (Material Icons) | Some template pages |

### CSP Rule
```
font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:
frame-src 'self' https://www.google.com https://www.youtube.com
```

---

## 3. Font CDNs

| Domain | Type | Pages Using |
|--------|------|-------------|
| `fonts.googleapis.com` | CSS font loading | All pages |
| `fonts.gstatic.com` | Font file delivery | All pages |
| `cdnjs.cloudflare.com` | Font Awesome icons | All pages |
| `cdn.jsdelivr.net` | Alternate icon/CDN source | Some pages |

---

## 4. JavaScript Libraries

| Library | Version | Source | Pages Using |
|---------|---------|--------|-------------|
| Font Awesome | 6.x | `cdnjs.cloudflare.com/ajax/libs/font-awesome/` | All pages |
| AOS (Animate On Scroll) | 2.3.4 | `cdn.jsdelivr.net/npm/aos@2.3.4/` | All template pages |

---

## 5. Reliability Assessment

| Domain | Risk Level | Mitigation |
|--------|-----------|------------|
| All CDNs | Low | Include fallback images in CSS where possible |
| Google Fonts | Low | System font fallback in CSS (`font-family` stack) |
| Google Maps | Medium | Maps are progressive enhancement; page works without them |

---

## 6. CSP img-src Optimization

After scanning all HTML/CSS/JS files:
- All 5 allowed domains are actively used
- No unused img-src entries
- `data:` protocol kept for inline SVG/Base64 images used in admin panels

**Verdict**: CSP is minimal and correct. No changes needed.
