import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.resolve(__dirname, '..');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

let errors = [];

function log(label, pass, detail) {
  const icon = pass ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
  console.log(`  ${icon} ${label}${detail ? ' — ' + detail : ''}`);
  if (!pass && detail) errors.push(detail);
}

console.log(`${BOLD}╔══════════════════════════════════════╗`);
console.log(`║   EFESOFTLAB PRODUCTION BUILD v1.0    ║`);
console.log(`╚══════════════════════════════════════╝${RESET}\n`);

// Step 1: Run pre-deploy checks
console.log(`${BOLD}[1/4] Running pre-deploy checks...${RESET}`);
try {
  execSync('node scripts/predeploy-check.mjs', { cwd: base, stdio: 'pipe', timeout: 60000 });
  log('Pre-deploy checks', true);
} catch (e) {
  log('Pre-deploy checks', false, 'Checks failed - fix before building');
}

// Step 2: Clean temp files
console.log(`\n${BOLD}[2/4] Cleaning temporary files...${RESET}`);
const tempPatterns = ['_fix_*.js', '_scan_*.js'];
let cleaned = 0;
for (const pattern of tempPatterns) {
  const files = fs.readdirSync(base).filter(f => f.startsWith('_fix_') || f.startsWith('_scan_'));
  for (const f of files) {
    const fp = path.join(base, f);
    try {
      fs.unlinkSync(fp);
      cleaned++;
    } catch (e) {
      log(`Remove ${f}`, false, `Could not remove: ${e.message}`);
    }
  }
}
log('Clean temp files', true, `${cleaned} file(s) removed`);

// Step 3: Verify all HTML files are valid
console.log(`\n${BOLD}[3/4] Verifying HTML structure...${RESET}`);
function findHtml(dir) {
  let files = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules' && e.name !== 'scripts') {
        files = files.concat(findHtml(full));
      } else if (e.isFile() && e.name.endsWith('.html')) {
        files.push(full);
      }
    }
  } catch (e) {}
  return files;
}
const htmlFiles = findHtml(base);
let validHtml = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (content.includes('<html') && content.includes('</html>')) {
    validHtml++;
  } else {
    log(path.relative(base, file), false, 'Missing <html> or </html>');
  }
}
log('HTML structure valid', true, `${validHtml}/${htmlFiles.length} files`);

// Step 4: Asset listing
console.log(`\n${BOLD}[4/4] Asset inventory...${RESET}`);
function countFiles(dir, ext) {
  let count = 0;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules' && e.name !== 'scripts') {
        count += countFiles(full, ext);
      } else if (e.isFile() && e.name.endsWith(ext)) {
        count++;
      }
    }
  } catch (e) {}
  return count;
}

const htmlCount = countFiles(base, '.html');
const cssCount = countFiles(base, '.css');
const jsCount = countFiles(base, '.js');
const totalSize = fs.statSync(base).size / 1024;

// Calculate total size more accurately
let totalBytes = 0;
function calcSize(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules' && e.name !== 'scripts') {
        calcSize(full);
      } else if (e.isFile()) {
        totalBytes += fs.statSync(full).size;
      }
    }
  } catch (e) {}
}
calcSize(base);

log('HTML files', true, `${htmlCount}`);
log('CSS files', true, `${cssCount}`);
log('JS files', true, `${jsCount}`);
log('Total site size', true, `${(totalBytes / 1024 / 1024).toFixed(2)} MB`);

// Summary
console.log(`\n${BOLD}══════════════════════════════════════${RESET}`);
if (errors.length === 0) {
  console.log(`${GREEN}${BOLD}BUILD COMPLETE — Ready for deployment${RESET}`);
  process.exit(0);
} else {
  console.log(`${RED}${BOLD}BUILD COMPLETE — ${errors.length} issue(s) to review${RESET}`);
  for (const e of errors) console.log(`  ${RED}*${RESET} ${e}`);
  process.exit(1);
}
