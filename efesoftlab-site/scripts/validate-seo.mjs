import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.resolve(__dirname, '..');

const DEMO_DIRS = ['avukat', 'emlak', 'klinik', 'kurumsal', 'restoran'];
const INDEXABLE_PAGES = ['index.html', 'templates.html', 'apps.html', 'privacy-policy.html'];

let errors = [];
let allHtml = [];

// Collect all HTML files
function findHtml(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules' && e.name !== 'scripts') {
        findHtml(full);
      } else if (e.isFile() && e.name.endsWith('.html')) {
        allHtml.push(full);
      }
    }
  } catch (e) {}
}
findHtml(base);

// Parse sitemap
const sitemapPath = path.join(base, 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

// Categorize pages
let noindexPages = 0, indexablePages = 0, demoPages = 0, productPages = 0;

for (const file of allHtml) {
  const content = fs.readFileSync(file, 'utf-8');
  const rel = path.relative(base, file).replace(/\\/g, '/');
  const isDemo = DEMO_DIRS.some(d => rel.startsWith(d + '/'));
  const isProduct = rel.startsWith('templates/') || rel.startsWith('apps/');
  const isIndexable = INDEXABLE_PAGES.includes(path.basename(file));
  const hasNoindex = content.includes('name="robots"') && content.includes('noindex');
  const canonicalCount = (content.match(/rel="canonical"/gi) || []).length;
  const robotsCount = (content.match(/name="robots"/gi) || []).length;
  const hreflangCount = (content.match(/rel="alternate"/gi) || []).length;
  const titleCount = (content.match(/<title[^>]*>/gi) || []).length;
  const metaDescCount = (content.match(/name="description"/gi) || []).length;

  if (isDemo) demoPages++;

  // Check noindex for demo pages
  if (isDemo) {
    if (!hasNoindex) errors.push(`FAIL: ${rel} is demo but missing noindex`);
    if (robotsCount > 1) errors.push(`FAIL: ${rel} has ${robotsCount} robots meta tags`);
    if (canonicalCount > 0) errors.push(`WARN: ${rel} has canonical tag (demo page)`);
  }

  // Check indexable pages (skip demo pages)
  if (!isDemo && (isIndexable || isProduct)) {
    if (hasNoindex) errors.push(`FAIL: ${rel} is indexable but has noindex`);
    if (canonicalCount !== 1) errors.push(`FAIL: ${rel} has ${canonicalCount} canonical tags (expected 1)`);
    if (titleCount !== 1) errors.push(`FAIL: ${rel} has ${titleCount} title tags (expected 1)`);
    if (metaDescCount !== 1) errors.push(`FAIL: ${rel} has ${metaDescCount} meta descriptions (expected 1)`);
    indexablePages++;
  }
}

// Check sitemap consistency
for (const url of sitemapUrls) {
  // Extract relative path from URL
  const urlPath = url.replace('https://www.efesoftlab.com.tr/', '');
  let localFile;
  if (!urlPath || urlPath.endsWith('/')) {
    localFile = 'index.html';
  } else {
    localFile = urlPath;
  }
  const fullPath = path.join(base, localFile);

  if (!fs.existsSync(fullPath)) {
    errors.push(`FAIL: Sitemap URL ${url} has no corresponding file (tried: ${localFile})`);
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  if (content.includes('name="robots"') && content.includes('noindex')) {
    errors.push(`FAIL: Sitemap URL ${url} points to noindex page`);
  }

  // Check canonical matches
  const canonMatch = content.match(/rel="canonical"\s*href="([^"]+)"/);
  if (canonMatch) {
    const canonicalUrl = canonMatch[1];
    if (canonicalUrl !== url) {
      errors.push(`WARN: ${url} canonical (${canonicalUrl}) doesn't match sitemap URL`);
    }
  } else {
    errors.push(`FAIL: ${url} has no canonical tag`);
  }
}

// Check all indexable pages are in sitemap
for (const file of allHtml) {
  const rel = path.relative(base, file).replace(/\\/g, '/');
  const isDemo = DEMO_DIRS.some(d => rel.startsWith(d + '/'));
  const isAdmin = rel.includes('admin');
  const basename = path.basename(file);
  const isIndexable = INDEXABLE_PAGES.includes(basename) || rel.startsWith('templates/') || rel.startsWith('apps/');

  if (!isDemo && !isAdmin && isIndexable) {
    let urlPath = rel.replace(/\\/g, '/');
    // Root index.html maps to /
    const expectedUrl = urlPath === 'index.html'
      ? 'https://www.efesoftlab.com.tr/'
      : `https://www.efesoftlab.com.tr/${urlPath}`;
    if (!sitemapUrls.includes(expectedUrl)) {
      errors.push(`WARN: ${rel} (${expectedUrl}) is indexable but not in sitemap`);
    }
  }
}

// Summary
console.log('\n=== SEO VALIDATION ===');
console.log(`HTML files scanned: ${allHtml.length}`);
console.log(`Indexable pages: ${indexablePages}`);
console.log(`Noindex pages: ${noindexPages}`);
console.log(`Demo pages: ${demoPages}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);

if (errors.length === 0) {
  console.log('\nRESULT: PASS');
  process.exit(0);
} else {
  console.log(`\n${errors.length} issue(s) found:`);
  for (const e of errors) console.log('  ' + e);
  console.log('\nRESULT: FAIL');
  process.exit(1);
}
