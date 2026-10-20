// Ergänzungen für HK_DATA (übrige Diagnosegruppen). Gleiches Format wie HK_DATA in index.html.
// Noch nicht in die App eingebaut. Quellen und Prüfumfang: ../evidence/EMPFEHLUNGEN_*.md
// Prüfung: node scripts/check-ergaenzung.cjs
module.exports = {
  heilmittel: {
    KGAT: { name: 'Krankengymnastik (Atemtherapie)', kurz: 'KG (Atemtherapie)', text: 'Krankengymnastik bei Störungen der Atmung, z. B. Atem- und Hustentechniken, Sekretmobilisation, atemerleichternde Körperstellungen.' },
    KGMUKO: { name: 'Krankengymnastik bei Mukoviszidose', kurz: 'KG-Muko', text: 'Krankengymnastik zur Behandlung schwerer Erkrankungen der Atmungsorgane, z. B. Mukoviszidose oder vergleichbare pulmonale Schädigungen.' },
    INH: { name: 'Inhalationstherapie', kurz: 'Inhalation', text: 'Inhalation als Heilmittel der physikalischen Therapie.' },
    BGM: { name: 'Bindegewebsmassage', kurz: 'BGM', text: 'Reflextherapeutische Massage des Bindegewebes.' },
    KMT: { name: 'Klassische Massagetherapie', kurz: 'KMT', text: 'Klassische Massage zur Tonusregulation und Durchblutungsförderung.' },
    HROLLE: { name: 'Wärmetherapie (heiße Rolle)', kurz: 'Heiße Rolle', text: 'Wärmeanwendung mit heißer Rolle, insbesondere bei Störungen der Atmung.' }
  },

  gruppen: {
    AT: {
      name: 'Störungen der Atmung', anlass: 'Erkrankung der Atmungsorgane oder der Atemmuskulatur',
      max: 6, orient: 18, orientMuko: 50,
      primary: ['KGAT', 'KGMUKO', 'INH', 'BGM'], supp: ['KMT', 'HROLLE', 'INH'],
      fundstelle: 'Heilmittelkatalog, S. 66',
      sym: [
        { l: 'a', t: 'Schädigung/Störung der Atmungsfunktion', e: 'Zum Beispiel bronchiale Obstruktion, veränderte Atemfrequenz, -rhythmus oder -tiefe, Husten mit oder ohne Auswurf, Dyspnoe.' },
        { l: 'b', t: 'Schädigung der Atemmuskulatur (einschließlich Zwerchfell und Atemhilfsmuskulatur)', e: 'Zum Beispiel thorakale Schmerzen.' }
      ]
    }
  },

  quellen: {
    NVLC: { t: 'Nationale VersorgungsLeitlinie COPD', h: 'BÄK, KBV, AWMF', s: '2. Auflage, Version 1, 2021; Gültigkeit abgelaufen (06/2026)', f: 'Kurzfassung, Kap. 4.1–4.3, Empfehlungen 4-1 bis 4-11, S. 20–24', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/nvl-003k_S3_COPD_2026-02.pdf' },
    DGPC: { t: 'S2k-Leitlinie Fachärztliche Diagnostik und Therapie der COPD', h: 'DGP', s: 'Version 5.1, Februar 2026', f: 'Empfehlungen E 30–38, E 45–46; Kap. 3.2.2–3.2.10', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/020-006l_S2k_Fachaerztliche-Diagnostik-Therapie-COPD_2026-03.pdf' }
  },

  // ICD-10-GM 2026, endständig, am BfArM geprüft (21.10.2026)
  diagnosen: [
    ['J44.80', 'FEV1 <35 % des Sollwertes'], ['J44.81', 'FEV1 ≥35 % und <50 % des Sollwertes'],
    ['J44.82', 'FEV1 ≥50 % und <70 % des Sollwertes'], ['J44.83', 'FEV1 ≥70 % des Sollwertes'],
    ['J44.89', 'FEV1 nicht näher bezeichnet']
  ].map(([c, f]) => ({ c, n: 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, ' + f, g: 'AT', s: 'copd lunge atemnot' }))
   .concat([
    ['J44.90', 'FEV1 <35 % des Sollwertes'], ['J44.91', 'FEV1 ≥35 % und <50 % des Sollwertes'],
    ['J44.92', 'FEV1 ≥50 % und <70 % des Sollwertes'], ['J44.93', 'FEV1 ≥70 % des Sollwertes'],
    ['J44.99', 'FEV1 nicht näher bezeichnet']
  ].map(([c, f]) => ({ c, n: 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, ' + f, g: 'AT', s: 'copd lunge atemnot' }))),

  profile: {
    copd: {
      titel: 'COPD (stabile Phase)',
      gilt: 'Gilt für stabile COPD aller Schweregrade mit Atemnot, Husten mit Auswurf oder eingeschränkter Belastbarkeit.',
      nicht: 'Nicht bei akuter Exazerbation sowie bei Asthma, Bronchiektasen oder Mukoviszidose als führender Diagnose.',
      codes: ['J44.80', 'J44.81', 'J44.82', 'J44.83', 'J44.89', 'J44.90', 'J44.91', 'J44.92', 'J44.93', 'J44.99'],
      therapie: [
        'Angeleitetes, individuell dosiertes körperliches Training in allen Schweregraden (NVL ⇑⇑; DGP: soll).',
        'Selbsthilfetechniken gegen Atemnot vermitteln, z. B. in Schulung, Lungensport oder Physiotherapie (NVL ⇑⇑).',
        'Atemphysiotherapie bei Belastungsdyspnoe und zur Sekretelimination (DGP: soll; NVL ⇑).'
      ],
      bedarf: [
        'Atemnot schränkt Alltag oder Lebensqualität ein, und Selbsthilfetechniken reichen nicht aus.',
        'Sekretretention oder produktiver Husten; außerdem, wenn körperliches Training nicht ausreichend möglich ist (NVL ⇔).'
      ],
      weitere: [
        'Lungensport als Rehabilitationssport verordnen, wenn selbstständiges Training nicht möglich ist (NVL ⇑).',
        'Strukturierte Patientenschulung, bei Bedarf Nachschulung (NVL ⇑⇑; DGP: soll).',
        'Pneumologische Rehabilitation anbieten; nach schwerer Exazerbation Anschlussheilbehandlung (DGP: soll).',
        'Körperliche Aktivität regelmäßig erfragen; nach oder ohne Rehabilitation häusliches Training fortführen (NVL ⇑⇑; DGP: soll).'
      ],
      quellen: ['NVLC', 'DGPC'],
      hm: {
        KGAT: { v: 'pos', t: 'Bei Belastungsdyspnoe und Sputumproduktion empfohlen (DGP: soll); NVL ⇑, wenn Selbsthilfetechniken nicht ausreichen oder bei Sekretretention.', r: ['DGPC', 'NVLC'] },
        KGMUKO: { v: 'none', t: 'Keine Leitlinienaussage zur COPD; die Position ist für schwere Erkrankungen der Atmungsorgane wie Mukoviszidose vorgesehen.', r: [] },
        INH: { v: 'none', t: 'Keine Leitlinienaussage zur Inhalation als physikalische Therapie bei COPD.', r: [] },
        BGM: { v: 'none', t: 'Keine Leitlinienaussage zur Bindegewebsmassage bei COPD.', r: [] },
        KMT: { v: 'none', t: 'Keine Leitlinienaussage zur klassischen Massage bei COPD.', r: [] },
        HROLLE: { v: 'none', t: 'Keine Leitlinienaussage zur Wärmetherapie bei COPD.', r: [] }
      }
    }
  }
};
