// Prüft die Regel- und Textlogik ohne Browser. Ersetzt keine fachliche Prüfung.
const fs = require('node:fs'), vm = require('node:vm'), path = require('node:path'), assert = require('node:assert/strict');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert.equal(scripts.length, 3, 'Daten, Logik und Oberfläche als getrennte Skripte');
scripts.forEach(s => new vm.Script(s));
const ctx = vm.createContext({});
vm.runInContext(scripts[0] + ';' + scripts[1] + ';this.HK=HK;', ctx);
const HK = ctx.HK, D = HK.D;
const st = (o) => Object.assign(HK.newState(), o);

// ICD-Eingabe
assert.equal(HK.code('m545'), 'M54.5');
assert.equal(HK.code(' g55.1* '), 'G55.1');
assert.equal(HK.icdStatus('M54.5'), 'geprueft');
assert.equal(HK.icdStatus('S93.4'), 'kategorie');
assert.equal(HK.icdStatus('M54.500'), null, 'Format allein bestätigt keinen Code');
assert.equal(HK.search('knie')[0].c.slice(0,3), 'M17');
assert.equal(HK.search('M75.1')[0].c, 'M75.1');

// Profilzuordnung (nur Vorschlag; Bestätigung in der Oberfläche)
assert.equal(HK.profileFor('M54.5'), 'back');
assert.equal(HK.profileFor('M17.1'), 'knee');
assert.equal(HK.profileFor('M16.0'), 'hip');
assert.equal(HK.profileFor('M75.4'), 'shoulder');
assert.equal(HK.profileFor('S93.42'), 'ankle');
assert.equal(HK.profileFor('S93.41'), null, 'mediale Bandverletzung gehört nicht zum lateralen Profil');
assert.equal(HK.profileFor('S93.43'), null, 'Syndesmose gehört nicht zum lateralen Profil');
assert.equal(Object.keys(D.profile).length, 8);
for (const [id, p] of Object.entries(D.profile)) {
  for (const k of D.gruppen.EX.primary) assert.ok(p.hm[k], id + ': Bewertung für ' + k);
  for (const r of Object.values(p.hm)) for (const q of (r.r || [])) assert.ok(D.quellen[q], id + ': Quelle ' + q);
  for (const q of p.quellen) assert.ok(D.quellen[q]);
}

// Katalogregeln WS/EX
assert.equal(D.gruppen.WS.orient, 18); assert.equal(D.gruppen.WS.orientKind, undefined, 'WS ohne Kinderregel');
assert.equal(D.gruppen.EX.orientKind, 50);
assert.ok(D.gruppen.WS.supp.includes('TRAK')); assert.ok(!D.gruppen.EX.supp.includes('TRAK'));
let s = st({code:'M17.1', gruppe:'EX', sym:['a'], primary:['KG','MT'], units:{KG:'3',MT:'3'}, freq:'1-2'});
assert.equal(HK.check(s).fertig, true);
s.units.MT = '4'; assert.match(HK.check(s).fehler.join(), /Höchstmenge je Verordnung: 6/);
s.units.MT = '3'; s.supp = 'FANGO'; s.suppUnits = '7'; assert.match(HK.check(s).fehler.join(), /höchstens 6 Einheiten/);
s.suppUnits = '6'; assert.equal(HK.check(s).fertig, true);
s.supp = 'TRAK'; assert.match(HK.check(s).fehler.join(), /nicht vorgesehen/);
assert.equal(HK.limits(st({code:'M17.1', gruppe:'EX', unter18:true})).orient, 50);
assert.equal(HK.limits(st({code:'M54.5', gruppe:'WS', unter18:true})).orient, 18);

// Leitsymptomatik
s = st({code:'M54.5', gruppe:'WS', primary:['KG'], units:{KG:'6'}, freq:'1'});
assert.ok(HK.check(s).offen.includes('Leitsymptomatik'));
s.symX = true; assert.ok(HK.check(s).offen.some(x => /patientenindividuellen/.test(x)));
s.symXText = 'Schmerzhaft eingeschränkte Rotation'; assert.equal(HK.check(s).fertig, true);
s.sym = ['a','b']; assert.equal(HK.symText(s).length, 3, 'Katalog- und individuelle Leitsymptomatik kombinierbar');

// Diagnoseliste und 12 Wochen
assert.equal(HK.liste('M51.1', '', 'WS').aktiv, false);
assert.equal(HK.liste('M51.1', 'G55.1', 'WS').aktiv, true);
let L = HK.limits(st({code:'G35.9', gruppe:'ZN', freq:'2'})); assert.equal(L.zwoelf, true); assert.equal(L.max, 24);
L = HK.limits(st({code:'G35.9', gruppe:'ZN'})); assert.equal(L.max, null);
L = HK.limits(st({code:'M54.5', gruppe:'WS', genehmigung:true, freq:'3'})); assert.equal(L.max, 36);
assert.equal(HK.limits(st({code:'G62.9', gruppe:'PN'})).max, 10);
assert.equal(HK.liste('E88.20').hinweis.includes('31.12.2027'), true);
assert.equal(HK.liste('I89.00'), null);

// MLD und Diagnoseliste (HeilM-RL § 18 Abs. 2 Nr. 7, § 7 Abs. 6–7)
s = st({code:'I89.01', gruppe:'LY', sym:['a'], primary:['MLD'], units:{MLD:'6'}, freq:'2'});
assert.equal(HK.check(s).fertig, true);
s.code = 'I89.9'; assert.match(HK.check(s).fehler.join(), /Ödemstadium/);
assert.equal(HK.liste('M50.1', 'G55.1', 'ZN').aktiv, true); assert.equal(HK.liste('M50.1', 'G55.1', 'PN').aktiv, false);
assert.equal(HK.liste('M51.1', 'G55.1').frist, 6);
assert.equal(D.gruppen.LY.sym[1].t, 'Schädigung der Haut');

// Blankoverordnung
assert.ok(HK.blanko('M75.1').ok); assert.ok(HK.blanko('S42.21').ok); assert.ok(HK.blanko('M19.01').ok);
assert.equal(HK.blanko('M17.1'), null);
assert.equal(HK.blanko('Z96.60', '').ok, false); assert.equal(HK.blanko('Z96.60', 'Z98.88').ok, true);
s = st({code:'M75.1', gruppe:'EX', sym:['a'], route:'blanko', ausstellung:'2026-10-21'});
assert.equal(HK.check(s).fertig, true);
const t = HK.text(s); assert.match(t, /Heilmittel: BLANKOVERORDNUNG/); assert.match(t, /Gültig bis: 10\.02\.2027/); assert.doesNotMatch(t, /Therapiefrequenz/);
s = st({code:'Z96.60', gruppe:'EX', sym:['a'], route:'blanko', ausstellung:'2026-10-21'});
assert.match(HK.check(s).fehler.join(), /Z98.88/);

// Bewertungen je Phase
const neckKG = D.profile.neck.hm.KG;
assert.equal(HK.verdict(neckKG, 'akut').v, 'opt'); assert.equal(HK.verdict(neckKG, 'chron').v, 'pos'); assert.equal(HK.verdict(neckKG, null).v, 'phase');
assert.equal(HK.phaseKey('back', 'subakut'), 'chron'); assert.equal(HK.phaseKey('neck', 'subakut'), null);

// Sichtbare Texte frei von Arbeits- und Prüfvermerken
const visible = JSON.stringify({p:D.profile, h:D.heilmittel, g:D.gruppen, z:D.ziele, v:D.verdikt}) + scripts[2] + html.replace(/<script>[\s\S]*?<\/script>/g, '');
const banned = /redaktionell|stillschweigend|ungeprüft|Arbeitsstand|Prüfstand|pauschal|Originalabgleich|Vollprüfung|gleichsetzen|nicht automatisch|Prüfvermerk|Übertragung auf/i;
assert.doesNotMatch(visible, banned);

console.log('smoke ok');
