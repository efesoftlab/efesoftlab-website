# A&A Güvenlik - Production Deployment Guide

## Requirements
- PHP 8.0+ with JSON, cURL, and mbstring extensions
- Apache 2.4+ with mod_rewrite, mod_headers, mod_expires, mod_deflate
- MySQL 8.0+ (optional, falls back to JSON storage)
- HTTPS certificate (Let's Encrypt recommended)

## Quick Deploy

### 1. Upload Files
Upload all files to your web root (e.g., `/var/www/aguvenlik`).

### 2. Set Permissions
```bash
chmod -R 755 /var/www/aguvenlik
chmod -R 777 /var/www/aguvenlik/api/data
```

### 3. Configure .env
Create `.env` in the `api/` directory:
```env
ADMIN_PASSWORD=your_secure_password_here
CONTACT_EMAIL=info@aguvenlik.com.tr
SITE_URL=https://aguvenlik.com.tr
```

### 4. Optional: MySQL Database
```bash
mysql -u root -p < database/schema.sql
```
Then update `api/config.php` to use MySQL instead of JSON.

### 5. Enable HTTPS
```bash
certbot --apache -d aguvenlik.com.tr -d www.aguvenlik.com.tr
```

### 6. Verify
- Visit https://aguvenlik.com.tr
- Test contact form submission
- Test free inspection form
- Login at /admin.html with password `admin123` (change immediately)

## Post-Deploy Checklist
- [ ] HTTPS working with auto-redirect
- [ ] Forms submit successfully
- [ ] Admin panel accessible
- [ ] Google Maps loads correctly
- [ ] WhatsApp button opens correct number
- [ ] Mobile menu works
- [ ] Gallery images load
- [ ] FAQ accordion works
- [ ] Statistics counter animates
- [ ] Language switch works (TR/EN)

## Change Admin Password
Edit the hash in `api/config.php`:
```php
$adminHash = hash('sha256', 'your-new-password');
```
Then update `admin-auth.js` to remove the hardcoded fallback.

## Backup
Daily backup recommended:
```bash
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/aguvenlik/api/data/
```
