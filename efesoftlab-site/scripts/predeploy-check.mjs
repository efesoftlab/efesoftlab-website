import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.resolve(__dirname, '..');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

const results = [];

function run(label, script, cwd) {
  process.stdout.write(`\n  ${BOLD}[ ${label} ]${RESET} `);
  try {
    execSync(`node ${script}`, { cwd: cwd || base, stdio: 'pipe', timeout: 60000, encoding: 'utf-8' });
    results.push({ label, pass: true });
    process.stdout.write(`${GREEN}PASS${RESET}\n`);
  } catch (e) {
    results.push({ label, pass: false, output: e.stdout || e.stderr || e.message });
    process.stdout.write(`${RED}FAIL${RESET}\n`);
  }
}

console.log(`${BOLD}╔══════════════════════════════════════╗`);
console.log(`║   EFESOFTLAB PRE-DEPLOY CHECK v1.0    ║`);
console.log(`╚══════════════════════════════════════╝${RESET}`);

run('SEO Validation', 'scripts/validate-seo.mjs');
run('Link Validation', 'scripts/validate-links.mjs');
run('JS Validation', 'scripts/validate-js.mjs');

console.log(`\n${BOLD}═══════════════ SUMMARY ═══════════════${RESET}`);
let passed = 0, failed = 0;
for (const r of results) {
  const icon = r.pass ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
  console.log(`  ${icon} ${r.label}`);
  if (r.pass) passed++; else failed++;
}

if (failed === 0) {
  console.log(`\n${GREEN}${BOLD}RESULT: ALL CHECKS PASSED${RESET}`);
  console.log(`Site is ready for production deployment.`);
  process.exit(0);
} else {
  console.log(`\n${RED}${BOLD}RESULT: ${failed} check(s) FAILED${RESET}`);
  console.log(`Fix issues before deploying.`);
  process.exit(1);
}
