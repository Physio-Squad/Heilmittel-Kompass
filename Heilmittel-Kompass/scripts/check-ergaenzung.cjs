// Prüft daten/profile-ergaenzung.js gegen das HK_DATA-Format der App und die Textregeln aus AGENTS.md.
const fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const D = eval('(' + html.match(/const HK_DATA = (\{[\s\S]*?\n\});/)[1] + ')');
const E = require(path.join(root, 'daten/profile-ergaenzung.js'));
const banned = new RegExp(fs.readFileSync(path.join(root, 'tests/smoke.cjs'), 'utf8').match(/const banned = \/(.*)\/i;/)[1], 'i');
const HM = { ...D.heilmittel, ...E.heilmittel }, Q = { ...D.quellen, ...E.quellen }, G = { ...D.gruppen, ...E.gruppen };
const codes = new Map([...D.diagnosen, ...E.diagnosen].map(d => [d.c, d.g]));
const verdikte = Object.keys(D.verdikt);
let n = 0;
for (const [id, p] of Object.entries(E.profile)) {
  assert(!D.profile[id], `${id}: ID existiert schon`);
  for (const f of ['titel', 'gilt', 'nicht']) assert(typeof p[f] === 'string' && p[f], `${id}.${f}`);
  assert(/^Gilt für /.test(p.gilt) && /^Nicht bei /.test(p.nicht), `${id}: gilt/nicht-Satzanfang`);
  assert(p.therapie.length >= 2 && p.therapie.length <= 3, `${id}: therapie 2–3`);
  assert.strictEqual(p.bedarf.length, 2, `${id}: bedarf 2`);
  const grp = new Set(p.codes.map(c => { assert(codes.has(c), `${id}: Code ${c} fehlt in diagnosen`); return codes.get(c); }));
  assert.strictEqual(grp.size, 1, `${id}: Codes aus mehreren Gruppen`);
  const g = G[[...grp][0]]; assert(g, `${id}: Gruppe fehlt`);
  for (const k of new Set([...g.primary, ...g.supp])) {
    const r = p.hm[k]; assert(r, `${id}: Bewertung für ${k} fehlt`); assert(HM[k], `${id}: Heilmittel ${k} unbekannt`);
    assert(verdikte.includes(r.v), `${id}.${k}: Verdikt ${r.v}`);
    for (const q of r.r) assert(Q[q], `${id}.${k}: Quelle ${q} unbekannt`);
    if (r.v !== 'none') assert(r.r.length, `${id}.${k}: Bewertung ohne Quelle`);
  }
  for (const q of p.quellen) assert(Q[q], `${id}: Quelle ${q}`);
  const text = JSON.stringify(p);
  assert.doesNotMatch(text, banned, `${id}: verbotene Formulierung`);
  n++;
}
for (const [k, q] of Object.entries(E.quellen)) for (const f of ['t', 'h', 's', 'f', 'a', 'u']) assert(q[f], `Quelle ${k}.${f}`);
console.log(`ergaenzung ok: ${n} Profile, ${E.diagnosen.length} Codes`);
