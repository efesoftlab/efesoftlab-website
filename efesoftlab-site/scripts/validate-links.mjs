import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.resolve(__dirname, '..');

const SKIP_DIRS = ['node_modules', 'scripts'];
const SKIP_PATTERNS = [/^https?:\/\//, /^mailto:/, /^tel:/, /^#/, /^javascript:/, /^data:/, /^blob:/];

let errors = [];
let totalLinks = 0;

function collectFiles(dir) {
  let files = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && !e.name.startsWith('.') && !SKIP_DIRS.includes(e.name)) {
        files = files.concat(collectFiles(full));
      } else if (e.isFile() && (e.name.endsWith('.html') || e.name.endsWith('.css') || e.name.endsWith('.js'))) {
        files.push(full);
      }
    }
  } catch (e) {}
  return files;
}

const allFiles = collectFiles(base);

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const rel = path.relative(base, file).replace(/\\/g, '/');

  // Extract href/src attributes (HTML) and url() references (CSS)
  const hrefs = [...content.matchAll(/(?:\s|^)(?:href|src|action)=["']([^"']+)["']/gi)];
  const cssUrls = [...content.matchAll(/url\(["']?([^"')]+)["']?\)/gi)];
  const allRefs = [...hrefs.map(m => m[1]), ...cssUrls.map(m => m[1])];

  for (const ref of allRefs) {
    totalLinks++;
    if (SKIP_PATTERNS.some(p => p.test(ref))) continue;

    // Skip JS template literals and known runtime-only patterns
    if (/\$\{/.test(ref) || ref === 'blob' || ref === 'url') continue;

    // Decode
    const decoded = ref.replace(/%([0-9a-fA-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
    const withoutQuery = decoded.split('?')[0];
    const withoutHash = withoutQuery.split('#')[0];

    if (!withoutHash) continue;

    // Skip JS template strings and concatenation expressions
    if (/["'+]/.test(withoutHash) && !withoutHash.includes('.')) continue;
    if (withoutHash.includes(' + ')) continue;
    if (ref !== withoutHash && ref.includes(' + ')) continue;

    const resolved = path.resolve(path.dirname(file), withoutHash);

    if (!fs.existsSync(resolved)) {
      errors.push(`BROKEN: ${rel} -> "${ref}" (resolved: ${resolved})`);
    }
  }
}

console.log('\n=== LINK VALIDATION ===');
console.log(`Files scanned: ${allFiles.length}`);
console.log(`Total links: ${totalLinks}`);

if (errors.length === 0) {
  console.log('\nRESULT: PASS');
  process.exit(0);
} else {
  console.log(`\n${errors.length} broken link(s) found:`);
  for (const e of errors) console.log('  ' + e);
  console.log('\nRESULT: FAIL');
  process.exit(1);
}
