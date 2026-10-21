// Echter Browsertest mit Playwright/Chromium. Öffnet index.html direkt als Datei.
// Aufruf: node tests/browser.cjs  (CHROMIUM_EXECUTABLE optional)
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require('playwright');
const file = 'file://' + path.join(__dirname, '..', 'index.html');
const out = process.env.HEILMITTEL_TEST_ARTIFACTS || path.join(require('node:os').tmpdir(), 'heilmittel-kompass-browser');
const banned = /redaktionell|stillschweigend|ungeprüft|Arbeitsstand|Prüfstand|pauschal|Originalabgleich|gleichsetzen|nicht automatisch/i;
const cases = [['M54.5','back','WS'],['M54.2','neck','WS'],['M17.1','knee','EX'],['M16.0','hip','EX'],['M75.1','shoulder','EX'],['M76.6','achilles','EX'],['M72.2','heel','EX'],['S93.42','ankle','EX']];

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE || undefined });
  const errors = []; let n = 0;
  try {
    for (const vp of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740}]) {
      const page = await browser.newPage({ viewport: vp });
      page.on('pageerror', e => errors.push(e.message));
      await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
      for (const [code, profile, group] of cases) {
        await page.goto(file);
        await page.fill('#dx', code); await page.keyboard.press('Enter');
        assert.match(await page.locator('#dxInfo').innerText(), new RegExp(code.replace('.','\\.')));
        await page.click('[data-act=profOk]');
        assert.equal(await page.locator(`input[name=grp][value=${group}]`).isChecked(), true);
        assert.equal(await page.locator('[data-sym]:checked').count(), 0, 'keine automatische Leitsymptomatik');
        await page.click('#anam summary'); await page.click('[data-q=problem][data-v=b]');
        assert.equal(await page.locator('.opt .hint', { hasText: 'passt zu Ihrer Angabe' }).count(), 1);
        await page.check('[data-sym=b]');
        assert.equal(await page.locator('[data-primary][aria-pressed=true]').count(), 0, 'kein Heilmittel vorausgewählt');
        assert.ok(await page.locator('[data-primary=KG] .ev .chip').count() === 1, 'Bewertung an der Karte');
        await page.click('[data-primary=KG]');
        await page.fill('[data-unit=KG]', '6'); await page.selectOption('#freq', '1-2');
        assert.match(await page.locator('#form').innerText(), /Alle Angaben vollständig/);
        const body = await page.locator('body').innerText();
        assert.doesNotMatch(body, banned, profile + ': Meta-Formulierung sichtbar');
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true, 'kein horizontales Scrollen');
        n++;
      }
      await page.screenshot({ path: path.join(out, `ankle-${vp.width}.png`), fullPage: true });
      // Blankoverordnung Schulter
      await page.goto(file);
      await page.fill('#dx', 'M19.01'); await page.keyboard.press('Enter');
      await page.check('[data-sym=a]'); await page.click('[data-route=blanko]');
      assert.match(await page.locator('#form').innerText(), /BLANKOVERORDNUNG/);
      assert.match(await page.locator('#form').innerText(), /Alle Angaben vollständig/);
      // Andere Diagnosegruppe ohne Leitlinienbewertung, Diagnoseliste
      await page.goto(file);
      await page.fill('#dx', 'M79.7'); await page.keyboard.press('Enter');
      assert.match(await page.locator('#s2b').innerText(), /keine klinische Einordnung/);
      await page.goto(file);
      await page.fill('#dx', 'G35.9'); await page.keyboard.press('Enter'); await page.click('[data-act=profOk]');
      await page.check('[data-sym=a]'); await page.click('[data-primary=KG]'); await page.selectOption('#freq', '2');
      assert.match(await page.locator('#limit').innerText(), /Bis zu 24 Einheiten/);
      assert.match(await page.locator('#form').innerText(), /Budgetfrei/);
      // Ergänzte Gruppe AT ohne Befundfragen
      await page.goto(file);
      await page.fill('#dx', 'J44.82'); await page.keyboard.press('Enter');
      await page.click('[data-act=profOk]');
      assert.equal(await page.locator('#anam').count(), 0);
      assert.equal(await page.locator('input[name=grp][value=AT]').isChecked(), true);
      await page.check('[data-sym=a]'); await page.click('[data-primary=KGAT]');
      assert.match(await page.locator('[data-primary=KGAT] .ev').innerText(), /Empfohlen/);
      await page.fill('[data-unit=KGAT]', '6'); await page.selectOption('#freq', '1-2');
      assert.match(await page.locator('#form').innerText(), /Alle Angaben vollständig/);
      assert.doesNotMatch(await page.locator('body').innerText(), banned);
      // Budgetfrei-Rubrik
      await page.goto(file + '#budgetfrei');
      assert.equal(await page.locator('#budget').isVisible(), true);
      await page.fill('#bq', 'Schlaganfall');
      assert.match(await page.locator('#budgetList').innerText(), /I69/);
      await page.fill('#bq', 'M62.50');
      assert.match(await page.locator('#budgetList').innerText(), /nicht auf der hinterlegten Diagnoseliste/);
      await page.fill('#bq', ''); await page.click('[data-bg=SO2]');
      assert.match(await page.locator('#budgetList').innerText(), /ab 70 Jahren/);
      assert.doesNotMatch(await page.locator('body').innerText(), banned);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true);
      await page.screenshot({ path: path.join(out, `budget-${vp.width}.png`), fullPage: true });
      await page.click('[data-view=rx]');
      // Unbekannter Code
      await page.goto(file);
      await page.fill('#dx', 'M23.2'); await page.keyboard.press('Enter');
      assert.match(await page.locator('#dxInfo').innerText(), /Diagnosegruppe in Schritt 3 selbst wählen/);
      // Demo
      await page.goto(file);
      await page.click('[data-demo=knee]');
      assert.match(await page.locator('#rxDemo').innerText(), /Beispiel/);
      await page.close();
    }
  } finally { await browser.close(); }
  assert.deepEqual(errors, []);
  console.log('browser ok:', n, 'Profil-/Viewport-Fälle, Screenshots in', out);
})().catch(e => { console.error(e); process.exit(1); });
