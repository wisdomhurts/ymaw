// Static page renderer: src/pages/*.html (body + a small header block) +
// src/partials → root *.html. Run: node scripts/render-pages.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
const P = (f) => readFileSync(new URL(`../src/partials/${f}`, import.meta.url), 'utf8');
const head = P('head.html'), nav = P('nav.html'), foot = P('foot.html');
const dir = new URL('../src/pages/', import.meta.url);
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.html')) continue;
  const src = readFileSync(new URL(f, dir), 'utf8');
  const meta = Object.fromEntries([...src.matchAll(/^<!--\s*(\w+):\s*(.+?)\s*-->$/gm)].map(m => [m[1], m[2]]));
  const body = src.replace(/^<!--\s*\w+:.*-->\n?/gm, '');
  const slug = f.replace('.html', '');
  let n = nav.replace('{{BARCLASS}}', 'bar--paper').replace('{{WORDMARK}}', 'wordmark-green.png');
  n = n.replace(/\{\{CUR_(\w+)\}\}/g, (_, s) => s === slug ? 'aria-current="page"' : '');
  const h = head.replace(/\{\{TITLE\}\}/g, meta.title || slug).replace(/\{\{DESC\}\}/g, meta.desc || '').replace('{{OG}}', meta.og || 'p5.webp');
  writeFileSync(new URL(`../${f}`, import.meta.url), h + n + body + foot + '\n</body>\n</html>\n');
  console.log('rendered', f);
}
