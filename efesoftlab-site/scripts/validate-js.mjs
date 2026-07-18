import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.resolve(__dirname, '..');

const SKIP_PATTERNS = [/node_modules/, /\badmin\./];

let errors = [];
let totalJs = 0;

function collectJs(dir) {
  let files = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') {
        files = files.concat(collectJs(full));
      } else if (e.isFile() && e.name.endsWith('.js')) {
        if (!SKIP_PATTERNS.some(p => p.test(full))) {
          files.push(full);
        }
      }
    }
  } catch (e) {}
  return files;
}

const jsFiles = collectJs(base);
const externalJs = jsFiles.filter(f => !f.includes('js/admin'));
let adminJs = jsFiles.filter(f => f.includes('js/admin'));

console.log(`Total JS files: ${jsFiles.length}`);
console.log(`Non-admin JS: ${externalJs.length}`);
console.log(`Admin JS: ${adminJs.length}`);

// Check file existence from HTML includes
function collectHtml(dir) {
  let files = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') {
        files = files.concat(collectHtml(full));
      } else if (e.isFile() && e.name.endsWith('.html')) {
        files.push(full);
      }
    }
  } catch (e) {}
  return files;
}

const htmlFiles = collectHtml(base);
let missingRefs = 0;

for (const html of htmlFiles) {
  const rel = path.relative(base, html).replace(/\\/g, '/');
  const content = fs.readFileSync(html, 'utf-8');
  const jsRefs = [...content.matchAll(/src=["']([^"']+\.js)["']/gi)];

  for (const [, src] of jsRefs) {
    if (src.startsWith('http') || src.startsWith('//')) continue;
    const resolved = path.resolve(path.dirname(html), src);
    if (!fs.existsSync(resolved)) {
      errors.push(`MISSING: ${rel} references "${src}" (not found)`);
      missingRefs++;
    } else {
      totalJs++;
    }
  }
}

if (missingRefs > 0) {
  console.log(`Missing JS refs: ${missingRefs}`);
} else {
  console.log('All JS file references resolve correctly');
}

// Basic syntax check using node --check
console.log('\nRunning syntax checks...');
for (const file of externalJs) {
  const rel = path.relative(base, file).replace(/\\/g, '/');
  try {
    execSync(`node --check "${file}"`, { stdio: 'pipe', timeout: 10000 });
  } catch (e) {
    errors.push(`SYNTAX: ${rel} has syntax errors`);
    console.log(`  FAIL: ${rel}`);
    continue;
  }
}

console.log('\n=== JS VALIDATION ===');

if (errors.length === 0) {
  console.log('RESULT: PASS');
  process.exit(0);
} else {
  console.log(`\n${errors.length} issue(s) found:`);
  for (const e of errors) console.log('  ' + e);
  console.log('\nRESULT: FAIL');
  process.exit(1);
}
