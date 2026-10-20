// Existing Playwright installation required. Start the static server as documented.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const appUrl = process.env.HEILMITTEL_TEST_URL || 'http://127.0.0.1:8000/';
const artifacts = process.env.HEILMITTEL_TEST_ARTIFACTS || '/tmp/heilmittel-kompass-browser';

(async () => {
  fs.mkdirSync(artifacts, { recursive: true });
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_EXECUTABLE || '/usr/bin/chromium',
    headless: true,
    args: ['--no-sandbox'],
  });
  const errors = [];
  let profileChecks = 0;
  try {
    const page = await browser.newPage();
    page.on('pageerror', error => errors.push(error.message));
    for (const viewport of [{width:1440,height:1000}, {width:390,height:844}, {width:320,height:740}]) {
      await page.setViewportSize(viewport);
      await page.goto(appUrl);
      assert.equal(await page.locator('#evidenceProfile').inputValue(), '');
      assert.equal(await page.locator('.evidence-question').count(), 0);
      const profiles = await page.locator('#evidenceProfile option').evaluateAll(options => options.map(o => o.value).filter(Boolean));
      assert.equal(profiles.length, 8);
      for (const id of profiles) {
        await page.selectOption('#evidenceProfile', id);
        assert.equal(await page.locator('.evidence-question').count(), 3);
        assert.equal(await page.locator('.evidence-question > ul').count(), 3);
        assert.match(await page.locator('#evidenceTherapy').innerText(), /Welche konkrete Therapie hilft/);
        assert.match(await page.locator('#evidenceNeed').innerText(), /Wann ist Physiotherapie sinnvoll/);
        assert.match(await page.locator('.evidence-question').nth(2).innerText(), /Welche Zusätze lohnen sich/);
        assert.equal(await page.locator('#evidenceBody h3').filter({hasText:/Verlauf|Behandlungssteuerung/}).count(), 0);
        assert.equal(await page.locator('#goalCustom').inputValue(), '');
        assert.doesNotMatch(await page.locator('#evidenceBody').innerText(), /Manuelle Techniken|Weichteilbehandlung|mechanische Traktion|Selbstwärme|Selbstkälte/i);
        await page.getByText('Quellen, Empfehlungsstärke und Grenzen', {exact:true}).click();
        assert.ok(await page.locator('.evidence-sources a').count() > 0);
        const sourceText = await page.locator('.evidence-sources').innerText();
        assert.match(sourceText, /Abgerufen am \d{2}\.\d{2}\.\d{4}/);
        assert.doesNotMatch(sourceText, /Vollprüfung|Empfehlungstabelle gelesen|Original-PDF|SHA-256|Verlagsabruf|gezielt gelesen|Geprüft:/i);
        const overview = page.locator('details').filter({has:page.locator('summary').filter({hasText:'Wie ist die Einordnung zu verstehen?'})});
        assert.equal(await overview.locator('li').count(), 4);
        for (const link of await page.locator('.evidence-sources a').evaluateAll(as => as.map(a => a.href))) {
          assert.equal(new URL(link).protocol, 'https:');
        }
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Horizontal overflow: '+id+' at '+viewport.width);
        profileChecks++;
      }
      await page.selectOption('#evidenceProfile', 'hip');
      assert.match(await page.locator('.evidence-question').nth(2).innerText(), /APTA 2025.*widersprüchlicher Evidenz/s);
      assert.match(await page.locator('.evidence-question').nth(2).innerText(), /NICE rät ab/);
      if (viewport.width !== 320) await page.locator('.clinical-guide').screenshot({path:path.join(artifacts,'klinische-orientierung-'+viewport.width+'.png')});
    }
    // Source differences must survive diagnosis-specific rendering.
    await page.selectOption('#evidenceProfile', 'back');
    await page.getByRole('button', {name:'Rücken',exact:true}).click();
    assert.equal(await page.locator('#evidenceProfile').inputValue(), 'back', 'Manual selection lost on diagnosis entry');
    const usCard = page.locator('.choice[data-primary="KG"][data-combination="US"]');
    assert.match(await usCard.innerText(), /VA\/DoD: Evidenz unzureichend/);
    await page.selectOption('#evidenceProfile', 'hip');
    assert.match(await page.locator('#evidenceBody').innerText(), /passt nicht offensichtlich/);
    assert.doesNotMatch(await usCard.innerText(), /APTA: widersprüchlich/);
    // All original demos still work through the actual browser DOM.
    await page.getByRole('button', {name:'Demoversion öffnen',exact:true}).click();
    for (const id of ['back','oa','shoulder']) {
      await page.locator('[data-demo="'+id+'"]').click();
      assert.equal(await page.locator('#evidenceProfile').inputValue(), id);
      assert.equal(await page.locator('#units').inputValue(), '6');
      assert.match(await page.locator('#demoNotice').innerText(), /DEMO/);
      assert.match(await page.locator('#summaryContent').innerText(), /Demo · fiktives/i);
      await page.selectOption('#evidenceProfile', 'heel');
      assert.match(await page.locator('#summaryContent').innerText(), /Demo · fiktives/i);
    }
    // A real case must not inherit a profile confirmed only in a demo.
    await page.getByRole('button', {name:'Rücken',exact:true}).click();
    assert.equal(await page.locator('#evidenceProfile').inputValue(), '');
    assert.equal(await page.locator('#demoNotice').isVisible(), false);
    await page.selectOption('#evidenceProfile', 'heel');
    assert.match(await page.locator('.evidence-question').nth(2).innerText(), /kurzfristig\w* Schmerzlinderung/);
    await page.selectOption('#evidenceProfile', 'achilles');
    assert.match(await page.locator('.evidence-question').nth(2).innerText(), /Nach US-Leitlinie nicht einsetzen/);
    // German recommendations remain concise and use the requested position labels.
    await page.selectOption('#evidenceProfile', 'neck');
    await page.locator('#search').fill('M54.2');
    await page.locator('#matches .result').first().click();
    assert.equal(await page.locator('#evidenceProfile').inputValue(), 'neck');
    const neckNeed = await page.locator('.evidence-question').nth(1).innerText();
    assert.match(neckNeed, /Chronisch: Bewegungstherapie soll verordnet werden \(Grad A\)/);
    assert.match(neckNeed, /Akut: Bewegungstherapie möglich \(Expertenkonsens\)/);
    const neckExtras = await page.locator('.evidence-question').nth(2).innerText();
    assert.match(neckExtras, /Manuelle Therapie/);
    assert.match(neckExtras, /Massage/);
    assert.match(neckExtras, /Kryotherapie/);
    assert.doesNotMatch(await page.locator('#evidenceBody').innerText(), /Selbstwärme|Selbstkälte|Manuelle Techniken|Weichteilbehandlung|mechanische Traktion/i);
    assert.match(neckExtras, /Fango\/Rotlicht: nicht verordnen \(Expertenkonsens\)/);
    assert.match(await page.locator('.choice[data-primary="KG"][data-combination="FANGO"]').innerText(), /Fango nicht verordnen/);
    assert.match(await usCard.innerText(), /DEGAM.*Expertenkonsens/);
    await page.getByText('Quellen, Empfehlungsstärke und Grenzen', {exact:true}).click();
    assert.ok(await page.locator('.evidence-sources a[href*="053-007l_S3_Nackenschmerzen_2025-08.pdf"]').count());
    await page.selectOption('#evidenceProfile', 'oa');
    await page.locator('#search').fill('M17.0');
    await page.locator('#matches .result').first().click();
    assert.match(await page.locator('.evidence-question').nth(1).innerText(), /Aufsicht.*schwächere Empfehlung/s);
    assert.match(await page.locator('.evidence-question').nth(2).innerText(), /Massage.*Belege unzureichend/s);
    assert.match(await usCard.innerText(), /Deutsche S3.*nicht empfohlen/);
    await page.getByText('Quellen, Empfehlungsstärke und Grenzen', {exact:true}).click();
    const kneeSources = await page.locator('.evidence-sources').innerText();
    assert.match(kneeSources, /Version 5.0.*2024/s);
    assert.match(await page.locator('#evidenceBody').innerText(), /keine voneinander unabhängigen zusätzlichen Wirksamkeitsnachweise/);
    for (const id of ['neck', 'oa']) {
      await page.selectOption('#evidenceProfile', id);
      await page.locator('#search').fill(id === 'neck' ? 'M54.2' : 'M17.0');
      await page.locator('#matches .result').first().click();
      await page.locator('.clinical-guide').screenshot({path:path.join(artifacts, 'deutsch-'+id+'.png')});
    }
    // New formal data must work in the real DOM, including the long EX label.
    for (const width of [1440,390,320]) {
      await page.setViewportSize({width,height:900});
      await page.getByRole('button',{name:'Rücken',exact:true}).click();
      await page.locator('#age').fill('17');
      assert.match(await page.locator('#quantityHint').innerText(),/18 Einheiten/);
      assert.doesNotMatch(await page.locator('#quantityHint').innerText(),/50 Einheiten/);
      assert.match(await page.locator('#diagnosis').innerText(),/ICD-10-GM 2026/);
      assert.equal(await page.locator('[data-sym]:checked').count(),0);
      await page.locator('[data-sym]').nth(0).check();
      await page.locator('[data-sym]').nth(1).check();
      assert.match(await page.locator('#summaryContent').innerText(),/Bewegungssegmente.*Muskelfunktion/s);
      await page.selectOption('#group','EX');
      assert.equal(await page.locator('[data-sym]:checked').count(),0);
      assert.match(await page.locator('#symptomChoices').innerText(),/Kapsel-Band-Apparats/);
      assert.match(await page.locator('#quantityHint').innerText(),/50 Einheiten/);
      assert.match(await page.locator('#warnings').innerText(),/Abweichende ICD/);
      await page.locator('#age').fill('18');
      assert.match(await page.locator('#quantityHint').innerText(),/18 Einheiten/);
      assert.doesNotMatch(await page.locator('#quantityHint').innerText(),/50 Einheiten/);
      await page.locator('[data-sym]').nth(2).check();
      assert.match(await page.locator('#warnings').innerText(),/Patientenindividuelle Leitsymptomatik ergänzen/);
      await page.locator('#individual').fill('Kraftminderung beim Treppensteigen');
      assert.match(await page.locator('#summaryContent').innerText(),/Kraftminderung beim Treppensteigen/);
      assert.match(await page.locator('#summaryContent').innerText(),/Formale Gesamtprüfung offen/);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      if(width===320)await page.locator('#symptomChoices').screenshot({path:path.join(artifacts,'katalog-ex-320.png')});
    }
    // A syntactically plausible code remains unverified, with no negative inference.
    await page.getByText('Diagnose nicht in der Suche?',{exact:true}).click();
    await page.locator('#customCode').fill('M54.500');
    await page.locator('#customName').fill('Fiktiver ungeprüfter Eintrag');
    await page.locator('#useCustom').click();
    await page.selectOption('#group','WS');
    assert.match(await page.locator('#warnings').innerText(),/noch nicht geprüft/);
    assert.doesNotMatch(await page.locator('#diagnosis').innerText(),/Kode im Verzeichnis geprüft/);
    await page.locator('#customCode').fill('S93.4');
    await page.locator('#useCustom').click();
    await page.selectOption('#group','EX');
    assert.match(await page.locator('#warnings').innerText(),/Nicht endständige ICD-Kategorie/);
    // Confirm HTML export really downloads a self-contained app with the new profiles.
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#download').click();
    const download = await downloadPromise;
    const downloaded = path.join(artifacts, 'export.html');
    await download.saveAs(downloaded);
    assert.match(fs.readFileSync(downloaded,'utf8'), /Midportion Achilles Tendinopathy/);
    assert.match(fs.readFileSync(downloaded,'utf8'), /terminal_im_Original_geprueft/);
    await page.goto('file://'+downloaded);
    await page.getByRole('button',{name:'Rücken',exact:true}).click();
    assert.match(await page.locator('#diagnosis').innerText(),/ICD-10-GM 2026/);
    assert.deepEqual(errors, []);
    console.log('Browserprüfung bestanden: '+profileChecks+' Profil-/Viewport-Kombinationen, 3 Demos, Quellen, Diagnosewechsel, abweichende Zusatzbewertungen, deutscher Quellenabgleich sowie WS/EX-Regeln, Altersgrenze, offene ICD-Zustände und eigenständiger HTML-Export. Keine Fachprüfung.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
