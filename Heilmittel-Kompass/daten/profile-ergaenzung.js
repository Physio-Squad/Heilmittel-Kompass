// Ergänzungen für HK_DATA (übrige Diagnosegruppen). Gleiches Format wie HK_DATA in index.html.
// Noch nicht in die App eingebaut. Quellen, Prüfumfang und offene Punkte: ../evidence/PROFILE_ERGAENZUNG.md
// Prüfung: node scripts/check-ergaenzung.cjs
const none = (was) => ({ v: 'none', t: `Keine Leitlinienaussage zu ${was}.`, r: [] });
const dx = (g, s, liste) => liste.map(([c, n]) => ({ c, n, g, s }));

module.exports = {
  heilmittel: {
    KGAT: { name: 'Krankengymnastik (Atemtherapie)', kurz: 'KG (Atemtherapie)', text: 'Krankengymnastik bei Störungen der Atmung, z. B. Atem- und Hustentechniken, Sekretmobilisation, atemerleichternde Körperstellungen.' },
    KGMUKO: { name: 'Krankengymnastik bei Mukoviszidose', kurz: 'KG-Muko', text: 'Krankengymnastik zur Behandlung schwerer Erkrankungen der Atmungsorgane, z. B. Mukoviszidose oder vergleichbare pulmonale Schädigungen.' },
    INH: { name: 'Inhalationstherapie', kurz: 'Inhalation', text: 'Inhalation als Heilmittel der physikalischen Therapie.' },
    BGM: { name: 'Bindegewebsmassage', kurz: 'BGM', text: 'Reflextherapeutische Massage des Bindegewebes.' },
    KMT: { name: 'Klassische Massagetherapie', kurz: 'KMT', text: 'Klassische Massage zur Tonusregulation und Durchblutungsförderung.' },
    HROLLE: { name: 'Wärmetherapie (heiße Rolle)', kurz: 'Heiße Rolle', text: 'Wärmeanwendung mit heißer Rolle, insbesondere bei Störungen der Atmung.' },
    CM: { name: 'Colonmassage', kurz: 'CM', text: 'Massage entlang des Dickdarmverlaufs zur Anregung der Darmtätigkeit.' }
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
    },
    GE: {
      name: 'Arterielle Gefäßerkrankungen', anlass: 'Arterielle Gefäßerkrankung, konservativ oder nach interventioneller/operativer Behandlung',
      max: 6, orient: 18,
      primary: ['KG', 'UEB'], supp: ['FANGO', 'KALT'],
      fundstelle: 'Heilmittelkatalog, S. 67',
      sym: [
        { l: 'a', t: 'Schmerzen der Extremitäten (unter Belastung, Claudicatio)', e: '' },
        { l: 'b', t: 'Schädigung/Störung der Muskelfunktion', e: 'Zum Beispiel Kraft, Ausdauer, Tonus.' }
      ]
    },
    SO1: {
      name: 'Störung der Dickdarmfunktion', anlass: 'Funktionsstörung des Dickdarms',
      max: 6, orient: 18,
      primary: ['CM', 'BGM'], supp: ['FANGO'],
      fundstelle: 'Heilmittelkatalog, S. 69',
      sym: [
        { l: 'a', t: 'Schädigung/Störung der Defäkationsfunktion', e: 'Zum Beispiel Stuhlfrequenz, Stuhlkonsistenz, Meteorismus.' },
        { l: 'b', t: 'Schmerzen', e: '' }
      ]
    },
    SO2: {
      name: 'Störungen der Ausscheidung (Stuhlinkontinenz, Harninkontinenz)', anlass: 'Harn- oder Stuhlinkontinenz',
      max: 6, orient: 18,
      primary: ['KG', 'UEB'], supp: ['ET'],
      fundstelle: 'Heilmittelkatalog, S. 70',
      sym: [
        { l: 'a', t: 'Schädigung/Störung der Stuhlkontinenz', e: '' },
        { l: 'b', t: 'Schädigung/Störung der Harnkontinenz', e: '' }
      ]
    },
    SO3: {
      name: 'Schwindel unterschiedlicher Genese und Ätiologie', anlass: 'Vestibulärer Schwindel',
      max: 6, orient: 18,
      primary: ['KG', 'UEB'], supp: [],
      fundstelle: 'Heilmittelkatalog, S. 71',
      sym: [
        { l: 'a', t: 'Schädigung/Störung der vestibulären Funktion', e: 'Zum Beispiel Lage-, Gleichgewichts- und Bewegungssinn.' },
        { l: 'b', t: 'Schwindelgefühl, Fallneigung', e: '' }
      ]
    }
  },

  quellen: {
    NVLC: { t: 'Nationale VersorgungsLeitlinie COPD', h: 'BÄK, KBV, AWMF', s: '2. Auflage, Version 1, 2021; Gültigkeit abgelaufen (06/2026)', f: 'Kurzfassung, Kap. 4.1–4.3, Empfehlungen 4-1 bis 4-11, S. 20–24', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/nvl-003k_S3_COPD_2026-02.pdf' },
    DGPC: { t: 'S2k-Leitlinie Fachärztliche Diagnostik und Therapie der COPD', h: 'DGP', s: 'Version 5.1, Februar 2026', f: 'Empfehlungen E 30–38, E 45–46; Kap. 3.2.2–3.2.10', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/020-006l_S2k_Fachaerztliche-Diagnostik-Therapie-COPD_2026-03.pdf' },
    ERSBE: { t: 'Clinical Practice Guideline for the Management of Adult Bronchiectasis', h: 'ERS', s: '2025 (Eur Respir J)', f: 'Empfehlungen Atemwegsclearance und pulmonale Rehabilitation', a: '21.10.2026', u: 'https://doi.org/10.1183/13993003.01126-2025' },
    DGAP: { t: 'S3-Leitlinie Diagnostik, Therapie und Nachsorge der peripheren arteriellen Verschlusskrankheit', h: 'DGA', s: '2024', f: 'Schlüsselfragen-Fazit, S. 4', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/065-003l_S3_Diagnostik-Therapie-Nachsorge-periphere-arterielle-Verschlusskrankheit_2024-11.pdf' },
    ISLLY: { t: 'The Diagnosis and Treatment of Peripheral Lymphedema: 2023 Consensus Document', h: 'International Society of Lymphology', s: 'Lymphology 2023;56:133–151', f: 'Therapie, S. 141–143', a: '21.10.2026', u: 'https://www.isl.arizona.edu/sites/default/files/2024-11/THE-DIAGNOSIS-AND-TREATMENT-OF-PERIPHERAL-LYMPHEDEMA-2023-CONSENSUS-DOCUMENT-OF-THE-INTERNATIONAL-SOCIETY-OF-LYMPHOLOGY.pdf' },
    DGNPK: { t: 'Parkinson-Krankheit', h: 'DGN', s: 'S2k, November 2023', f: 'Empfehlungsübersicht, S. 15–18 (Kap. 3.12, 3.18, 3.23)', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/030-010l_Parkinson_Krankheit_2023-11_1.pdf' },
    DGNMS: { t: 'Diagnose und Therapie der Multiplen Sklerose, NMOSD und MOGAD', h: 'DGN', s: 'S2k, April 2026', f: 'Symptombezogene Therapie, S. 17', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/030-050l_S2k_Diagnose-Therapie-Multiple-Sklerose-Neuromyelitis-optica-Spektrum-Erkrankung-NMOSD-MOG-IgG-assoziierte-Erkrankung-MOGAD_2026-04.pdf' },
    DGNSP: { t: 'Therapie des spastischen Syndroms', h: 'DGN', s: 'S2k, Version 6.1, 12/2024, gültig bis 11/2029', f: 'Empfehlungsübersicht, S. 6–11', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/030-078l_S2k_Therapie_spastisches_Syndrom_2025-04.pdf' },
    DGNRA: { t: 'Rehabilitative Therapie bei Armparese nach Schlaganfall', h: 'DGNR', s: 'S3, Version 06/2020', f: 'Kap. 6.1, S. 28', a: '21.10.2026', u: 'https://register.awmf.org/assets/guideline_bkp/080-001l_S3_Rehabilitative_Therapie_bei_Armparese_nach_Schlaganfall_2020-07.pdf' },
    DMGPQ: { t: 'Rehabilitation der unteren Extremität, der Steh- und Gehfunktion bei Menschen mit Querschnittlähmung', h: 'DMGP', s: 'S2e, Version 2.0, 2024', f: 'Empfehlungen 7.7–7.11, S. 29–32', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/179-009l_S2e_Rehabilitation-untere-Extremitaet-Stehfunktion-Gehfunktion-Querschnittlaehmung_2024-07.pdf' },
    DGNFP: { t: 'Therapie der idiopathischen Fazialisparese', h: 'DGN', s: 'S2k, 02/2022, gültig bis 02/2027', f: 'Kap. 3.2, Tab. 4, S. 25–26', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/030-013l_S2k_Therapie-Idiopathische-Fazialisparese-Bell’s-Palsy_2022-05.pdf' },
    DGNIN: { t: 'Therapie immunvermittelter Neuropathien', h: 'DGN', s: 'S2e, Version 4.1, 10/2025, gültig bis 09/2030', f: 'Kap. 4.1, S. 12; Kap. 4.2, S. 26', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/030-130l_S2e_Therapie-Immunvermittelte-Neuropathien_2026-03.pdf' },
    DGHKTS: { t: 'Diagnostik und Therapie des Karpaltunnelsyndroms', h: 'DGH', s: 'S3, 2022', f: 'Kap. 11.1–11.2, S. 23–31', a: '21.10.2026', u: 'https://register.awmf.org/assets/guideline_bkp/005-003l_S3_Diagnostik-Therapie-Karpaltunnelsyndrom-KTS_2022-04.pdf' },
    DGVSO: { t: 'S2k-Leitlinie Chronische Obstipation', h: 'DGVS, DGNM', s: 'Version 1.0, 04/2022', f: 'Empfehlungen 6.3–6.5, 7.1, 12.1–12.4, 13.6', a: '21.10.2026', u: 'https://www.dgvs.de/leitlinien/unterer-gi-trakt/chronische-obstipation/' },
    NG123: { t: 'Urinary incontinence and pelvic organ prolapse in women (NG123)', h: 'NICE', s: '2019', f: '1.4.3–1.4.12', a: '21.10.2026', u: 'https://www.nice.org.uk/guidance/ng123/chapter/Recommendations' },
    DEGAS: { t: 'Schwindel in der Hausarztpraxis', h: 'DEGAM', s: 'S2k, Kurzversion 2.4, 2025, gültig bis 02/2030', f: 'Kurzversion, Abschnitte BPLS und Vestibulopathie', a: '21.10.2026', u: 'https://register.awmf.org/assets/guidelines/053-018k_S2k_Schwindel-in-der-Hausarztpraxis_2026-06-1.pdf' },
    APTAV: { t: 'Vestibular Rehabilitation for Peripheral Vestibular Hypofunction (Updated CPG)', h: 'ANPT/APTA', s: 'Revision 2021', f: 'Action Statements 1–10', a: '21.10.2026', u: 'https://www.neuropt.org/docs/default-source/cpgs/vestibular-update/vestibular-hypofunction-cpg-revision-2021.pdf' }
  },

  // ICD-10-GM 2026, endständig, am BfArM geprüft (21.10.2026). Codes, die HK_DATA.diagnosen schon enthält, stehen nicht hier.
  diagnosen: [].concat(
    dx('AT', 'copd lunge atemnot', [
      ['J44.80', 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, FEV1 <35 % des Sollwertes'],
      ['J44.81', 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, FEV1 ≥35 % und <50 % des Sollwertes'],
      ['J44.82', 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, FEV1 ≥50 % und <70 % des Sollwertes'],
      ['J44.83', 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, FEV1 ≥70 % des Sollwertes'],
      ['J44.89', 'Sonstige näher bezeichnete chronische obstruktive Lungenkrankheit, FEV1 nicht näher bezeichnet'],
      ['J44.90', 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, FEV1 <35 % des Sollwertes'],
      ['J44.91', 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, FEV1 ≥35 % und <50 % des Sollwertes'],
      ['J44.92', 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, FEV1 ≥50 % und <70 % des Sollwertes'],
      ['J44.93', 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, FEV1 ≥70 % des Sollwertes'],
      ['J44.99', 'Chronische obstruktive Lungenkrankheit, nicht näher bezeichnet, FEV1 nicht näher bezeichnet']
    ]),
    dx('AT', 'bronchiektasen lunge sekret', [['J47', 'Bronchiektasen']]),
    dx('GE', 'pavk claudicatio schaufensterkrankheit', [
      ['I70.21', 'Atherosklerose der Extremitätenarterien, Becken-Bein-Typ, mit belastungsinduziertem Ischämieschmerz, Gehstrecke 200 m und mehr'],
      ['I70.22', 'Atherosklerose der Extremitätenarterien, Becken-Bein-Typ, mit belastungsinduziertem Ischämieschmerz, Gehstrecke weniger als 200 m']
    ]),
    dx('ZN', 'parkinson', [
      ['G20.00', 'Primäres Parkinson-Syndrom mit fehlender oder geringer Beeinträchtigung, ohne Wirkungsfluktuation'],
      ['G20.01', 'Primäres Parkinson-Syndrom mit fehlender oder geringer Beeinträchtigung, mit Wirkungsfluktuation'],
      ['G20.10', 'Primäres Parkinson-Syndrom mit mäßiger bis schwerer Beeinträchtigung, ohne Wirkungsfluktuation'],
      ['G20.11', 'Primäres Parkinson-Syndrom mit mäßiger bis schwerer Beeinträchtigung, mit Wirkungsfluktuation'],
      ['G20.20', 'Primäres Parkinson-Syndrom mit schwerster Beeinträchtigung, ohne Wirkungsfluktuation'],
      ['G20.21', 'Primäres Parkinson-Syndrom mit schwerster Beeinträchtigung, mit Wirkungsfluktuation'],
      ['G20.90', 'Primäres Parkinson-Syndrom, nicht näher bezeichnet, ohne Wirkungsfluktuation'],
      ['G20.91', 'Primäres Parkinson-Syndrom, nicht näher bezeichnet, mit Wirkungsfluktuation']
    ]),
    dx('ZN', 'ms', [
      ['G35.10', 'Multiple Sklerose mit vorherrschend schubförmigem Verlauf, ohne Angabe einer akuten Exazerbation oder Progression'],
      ['G35.11', 'Multiple Sklerose mit vorherrschend schubförmigem Verlauf, mit Angabe einer akuten Exazerbation oder Progression'],
      ['G35.20', 'Multiple Sklerose mit primär-chronischem Verlauf, ohne Angabe einer akuten Exazerbation oder Progression'],
      ['G35.21', 'Multiple Sklerose mit primär-chronischem Verlauf, mit Angabe einer akuten Exazerbation oder Progression'],
      ['G35.30', 'Multiple Sklerose mit sekundär-chronischem Verlauf, ohne Angabe einer akuten Exazerbation oder Progression'],
      ['G35.31', 'Multiple Sklerose mit sekundär-chronischem Verlauf, mit Angabe einer akuten Exazerbation oder Progression']
    ]),
    dx('ZN', 'schlaganfall apoplex hemiparese', [
      ['I69.3', 'Folgen eines Hirninfarktes'],
      ['I69.4', 'Folgen eines Schlaganfalls, nicht als Blutung oder Infarkt bezeichnet']
    ]),
    dx('ZN', 'querschnitt paraplegie tetraplegie', [
      ['G82.02', 'Schlaffe Paraparese und Paraplegie, chronische komplette Querschnittlähmung'],
      ['G82.03', 'Schlaffe Paraparese und Paraplegie, chronische inkomplette Querschnittlähmung'],
      ['G82.12', 'Spastische Paraparese und Paraplegie, chronische komplette Querschnittlähmung'],
      ['G82.13', 'Spastische Paraparese und Paraplegie, chronische inkomplette Querschnittlähmung'],
      ['G82.32', 'Schlaffe Tetraparese und Tetraplegie, chronische komplette Querschnittlähmung'],
      ['G82.33', 'Schlaffe Tetraparese und Tetraplegie, chronische inkomplette Querschnittlähmung'],
      ['G82.42', 'Spastische Tetraparese und Tetraplegie, chronische komplette Querschnittlähmung'],
      ['G82.43', 'Spastische Tetraparese und Tetraplegie, chronische inkomplette Querschnittlähmung']
    ]),
    dx('PN', 'fazialisparese bell', [['G51.0', 'Fazialisparese']]),
    dx('PN', 'guillain barre cidp polyneuritis', [['G61.0', 'Guillain-Barré-Syndrom'], ['G61.8', 'Sonstige Polyneuritiden']]),
    dx('SO1', 'obstipation verstopfung', [
      ['K59.00', 'Obstipation bei Kolontransitstörung'],
      ['K59.01', 'Obstipation bei Stuhlentleerungsstörung'],
      ['K59.09', 'Sonstige und nicht näher bezeichnete Obstipation']
    ]),
    dx('SO2', 'harninkontinenz beckenboden', [
      ['N39.3', 'Belastungsinkontinenz [Stressinkontinenz]'],
      ['N39.42', 'Dranginkontinenz'],
      ['N39.48', 'Sonstige näher bezeichnete Harninkontinenz']
    ]),
    dx('SO3', 'schwindel lagerungsschwindel bpls', [['H81.1', 'Benigner paroxysmaler Schwindel']]),
    dx('SO3', 'schwindel vestibulopathie neuritis', [
      ['H81.2', 'Neuropathia vestibularis'],
      ['H81.8', 'Sonstige Störungen der Vestibularfunktion']
    ])
  ),

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
        INH: none('Inhalation als physikalische Therapie bei COPD'),
        BGM: none('Bindegewebsmassage bei COPD'),
        KMT: none('klassischen Massage bei COPD'),
        HROLLE: none('Wärmetherapie bei COPD')
      }
    },

    bronchiektasen: {
      titel: 'Bronchiektasen',
      gilt: 'Gilt für Erwachsene mit Bronchiektasen ohne Mukoviszidose.',
      nicht: 'Nicht bei Mukoviszidose oder bei COPD ohne Bronchiektasen als führender Diagnose.',
      codes: ['J47'],
      therapie: [
        'Atemwegsclearance-Techniken für die meisten Betroffenen (ERS: starke Empfehlung).',
        'Pulmonale Rehabilitation bei eingeschränkter Belastbarkeit (ERS: starke Empfehlung).'
      ],
      bedarf: [
        'Chronischer produktiver Husten: Anleitung zu Clearance-Techniken für das tägliche Eigenprogramm.',
        'Eingeschränkte Belastbarkeit, wenn eine pulmonale Rehabilitation nicht oder noch nicht möglich ist.'
      ],
      weitere: [
        'Pulmonale Rehabilitation bei eingeschränkter Belastbarkeit (ERS: starke Empfehlung).',
        'Orientierende Behandlungsmenge bis 50 Einheiten bei mit Mukoviszidose vergleichbaren pulmonalen Erkrankungen (Heilmittelkatalog AT).'
      ],
      quellen: ['ERSBE'],
      hm: {
        KGAT: { v: 'pos', t: 'Atemwegsclearance-Techniken für die meisten Betroffenen empfohlen (ERS: starke Empfehlung).', r: ['ERSBE'] },
        KGMUKO: { v: 'pos', t: 'Atemwegsclearance empfohlen (ERS: starke Empfehlung); KG-Muko ist bei mit Mukoviszidose vergleichbaren pulmonalen Erkrankungen vorgesehen.', r: ['ERSBE'] },
        INH: none('Inhalation als physikalische Therapie bei Bronchiektasen'),
        BGM: none('Bindegewebsmassage bei Bronchiektasen'),
        KMT: none('klassischen Massage bei Bronchiektasen'),
        HROLLE: none('Wärmetherapie bei Bronchiektasen')
      }
    },

    pavk: {
      titel: 'pAVK mit Claudicatio (Stadium II)',
      gilt: 'Gilt für periphere arterielle Verschlusskrankheit vom Becken-Bein-Typ mit belastungsabhängigem Ischämieschmerz, auch nach Revaskularisation.',
      nicht: 'Nicht bei Ruheschmerz, Ulzeration oder Gangrän (kritische Extremitätenischämie).',
      codes: ['I70.21', 'I70.22'],
      therapie: [
        'Gehtraining, idealerweise strukturiert und überwacht, zusammen mit optimaler medikamentöser Therapie (DGA: soll).',
        'Konservative Therapie mindestens 3–6 Monate, dann Neubewertung (DGA: soll).',
        'Nach Revaskularisation strukturiertes Gehtraining fortführen (DGA: soll).'
      ],
      bedarf: [
        'Strukturiertes Gehtraining ist anders nicht verfügbar, z. B. kein erreichbares Gefäßsportangebot.',
        'Einschränkung von Gehstrecke oder Muskelfunktion, die Anleitung und Belastungssteuerung braucht.'
      ],
      weitere: [
        'Strukturiertes Gehtraining ist auch in Gefäßsportgruppen möglich; das Angebot ist regional begrenzt (DGA).',
        'Gehtraining immer zusammen mit optimaler medikamentöser Therapie (DGA: soll).'
      ],
      quellen: ['DGAP'],
      hm: {
        KG: { v: 'pos', t: 'Strukturiertes Gehtraining soll im Stadium II empfohlen werden (DGA: soll).', r: ['DGAP'] },
        UEB: { v: 'pos', t: 'Strukturiertes Gehtraining, auch in der Gruppe (DGA: soll).', r: ['DGAP'] },
        FANGO: none('Wärmetherapie bei pAVK'),
        KALT: none('Kältetherapie bei pAVK')
      }
    },

    lymphoedem: {
      titel: 'Lymphödem der Extremitäten',
      gilt: 'Gilt für primäres oder sekundäres Lymphödem der Extremitäten oder sonstiger Lokalisation, Stadium I bis III.',
      nicht: 'Nicht bei kardial, renal oder venös bedingtem Ödem ohne lymphatische Komponente.',
      codes: ['I89.00', 'I89.01', 'I89.02', 'I89.03', 'I89.04', 'I89.05'],
      therapie: [
        'Komplexe physikalische Entstauungstherapie: Lymphdrainage, Kompressionsbandagierung, Bewegung und Hautpflege (ISL-Konsens).',
        'Erhaltungsphase mit flachgestrickter Kompressionsversorgung, Bewegung und Hautpflege; Lymphdrainage nach Bedarf (ISL-Konsens).'
      ],
      bedarf: [
        'Entstauungsphase, besonders ab Stadium II: Lymphdrainage zusammen mit Kompressionsbandagierung.',
        'Erhaltungsphase, wenn das Volumen unter Kompression und Bewegung allein wieder zunimmt.'
      ],
      weitere: [
        'Maßangefertigte Kompressionsversorgung für die Erhaltungsphase verordnen (ISL-Konsens).',
        'Kompressionsbandagen werden als Verbandmittel gesondert verordnet (Heilmittelkatalog LY).'
      ],
      quellen: ['ISLLY'],
      hm: {
        MLD30: { v: 'cond', l: 'Mit Kompression', t: 'Teil der Entstauungstherapie; allein geringer Zusatznutzen zu Kompression und Bewegung für die Volumenreduktion (ISL-Konsens, ohne Grad).', r: ['ISLLY'] },
        MLD45: { v: 'cond', l: 'Mit Kompression', t: 'Teil der Entstauungstherapie; allein geringer Zusatznutzen zu Kompression und Bewegung für die Volumenreduktion (ISL-Konsens, ohne Grad).', r: ['ISLLY'] },
        MLD60: { v: 'cond', l: 'Mit Kompression', t: 'Teil der Entstauungstherapie; allein geringer Zusatznutzen zu Kompression und Bewegung für die Volumenreduktion (ISL-Konsens, ohne Grad).', r: ['ISLLY'] },
        MLD: { v: 'cond', l: 'Mit Kompression', t: 'Teil der Entstauungstherapie; allein geringer Zusatznutzen zu Kompression und Bewegung für die Volumenreduktion (ISL-Konsens, ohne Grad).', r: ['ISLLY'] },
        UEB: { v: 'pos', t: 'Bewegung unterstützt die Entstauung unabhängig von Form und Dauer (ISL-Konsens, ohne Grad).', r: ['ISLLY'] },
        FANGO: none('Wärmetherapie beim Lymphödem'),
        KALT: none('Kältetherapie beim Lymphödem'),
        ET: none('Elektrotherapie beim Lymphödem')
      }
    },

    parkinson: {
      titel: 'Parkinson-Krankheit',
      gilt: 'Gilt für primäres Parkinson-Syndrom mit motorischen Einschränkungen im Alltag.',
      nicht: 'Nicht bei atypischen oder sekundären Parkinson-Syndromen als führender Diagnose.',
      codes: ['G20.00', 'G20.01', 'G20.10', 'G20.11', 'G20.20', 'G20.21', 'G20.90', 'G20.91'],
      therapie: [
        'Zugang zu Physiotherapie, wenn motorische Symptome den Alltag einschränken (DGN: soll).',
        'Aerobes Ausdauertraining 2–3-mal pro Woche für 45–60 Minuten bei leichter kognitiver Störung (DGN: soll).'
      ],
      bedarf: [
        'Motorische Symptome wie Gang-, Gleichgewichts- oder Transferstörungen schränken den Alltag ein.',
        'Angeleiteter Aufbau eines Übungs- und Ausdauerprogramms mit Übergang ins Eigenprogramm.'
      ],
      weitere: [
        'Ergotherapie bei Einschränkungen im Alltag, im Beruf oder der Armfunktion einschließlich Handschrift (DGN: sollte).',
        'Logopädische Sprech- bzw. Schlucktherapie bei Dysarthrie oder Dysphagie (DGN: soll).',
        'Kognitives Training bei leichter kognitiver Störung (DGN: sollte).'
      ],
      quellen: ['DGNPK'],
      hm: {
        KG: { v: 'pos', t: 'Zugang zu Physiotherapie bei alltagsrelevanten motorischen Symptomen (DGN: soll).', r: ['DGNPK'] },
        ZNS: { v: 'opt', t: 'Die Leitlinie empfiehlt Physiotherapie ohne Festlegung auf ein Behandlungskonzept (DGN: soll für Physiotherapie).', r: ['DGNPK'] },
        FANGO: none('Wärmetherapie bei Parkinson'),
        KALT: none('Kältetherapie bei Parkinson'),
        ET: none('Elektrotherapie bei Parkinson'),
        ES: none('Elektrostimulation bei Parkinson')
      }
    },

    ms: {
      titel: 'Multiple Sklerose',
      gilt: 'Gilt für Multiple Sklerose mit Spastik, Gangstörung, Fatigue oder eingeschränkter Mobilität.',
      nicht: 'Nicht bei NMOSD oder MOGAD als führender Diagnose.',
      codes: ['G35.0', 'G35.10', 'G35.11', 'G35.20', 'G35.21', 'G35.30', 'G35.31', 'G35.9'],
      therapie: [
        'Bei Spastik regelmäßige Physiotherapie; spastikauslösende Ursachen vermeiden (DGN MS: soll).',
        'Bei eingeschränkter Mobilität nicht-medikamentöse Therapie mit Techniken der Gangrehabilitation; nach Stürzen und Sturzangst fragen (DGN MS: soll).',
        'Bei Fatigue zu Kraft- und Ausdauertraining sowie kühlenden Maßnahmen beraten (DGN MS: soll).'
      ],
      bedarf: [
        'Spastik, Gangstörung oder Sturzgefahr beeinträchtigen Alltag oder Teilhabe.',
        'Bei selbstberichteter Spastik: Schulung und tägliches Dehn- oder Bewegungsprogramm einüben (DGN Spastik: sollte).'
      ],
      weitere: [
        'Multimodale Rehabilitation mit gemeinsam festgelegten Therapiezielen (DGN MS: soll).',
        'Digitale Gesundheitsanwendung zur Unterstützung des Heimübungsprogramms bei Beinspastik möglich (DGN Spastik: kann).'
      ],
      quellen: ['DGNMS', 'DGNSP'],
      hm: {
        KG: { v: 'pos', t: 'Regelmäßige Physiotherapie bei Spastik und Mobilitätseinschränkung (DGN MS: soll).', r: ['DGNMS'] },
        ZNS: { v: 'opt', t: 'Spastiktherapie individuell am körperlichen und rehabilitativen Gesamtstatus ausrichten (DGN Spastik: sollte); ein bestimmtes Behandlungskonzept wird nicht vorgegeben.', r: ['DGNSP'] },
        FANGO: none('Wärmetherapie bei MS'),
        KALT: { v: 'opt', t: 'Kühlende Maßnahmen bei Fatigue in die Beratung einbeziehen (DGN MS: soll, als Beratung).', r: ['DGNMS'] },
        ET: none('Elektrotherapie bei MS'),
        ES: none('Elektrostimulation bei MS')
      }
    },

    schlaganfall: {
      titel: 'Folgen eines Schlaganfalls mit Parese',
      gilt: 'Gilt für Arm- oder Beinparese und Spastik nach Hirninfarkt oder nicht näher bezeichnetem Schlaganfall.',
      nicht: 'Nicht bei Folgen einer Hirnblutung oder Subarachnoidalblutung; dafür die passenden Codes I69.0–I69.2 wählen.',
      codes: ['I69.3', 'I69.4'],
      therapie: [
        'Subakut: werktäglich mindestens 30 Minuten Armtherapie zur Verbesserung der Armaktivitäten (DGNR: A).',
        'Chronisch, mittelschwere bis schwere Armparese: 90–270 Minuten pro Woche repetitives Training, ggf. mit EMG-getriggerter Elektrostimulation, oder aufgabenbezogenes Training (DGNR: B).',
        'Physiotherapie vorrangig auf aktive Funktion ausrichten; ein Tonusanstieg durch aktive Therapie ist nicht zu befürchten (DGN Spastik: sollte).'
      ],
      bedarf: [
        'Arm- oder Beinparese mit Einschränkung von Alltagsaktivitäten, Gehen oder Selbstversorgung.',
        'Spastik mit Kontrakturgefahr: Lagerung in Dehnstellung, ggf. mit Schienen (DGN Spastik: sollte).'
      ],
      weitere: [
        'Nach Botulinumtoxin eine individuell ausgewählte Begleittherapie (z. B. Dehnung, Orthese, Casting, Elektrostimulation) einplanen (DGN Spastik: sollte).',
        'Serielles Casting bei funktionell relevanter Kontraktur, bevorzugt nach Botulinumtoxin (DGN Spastik: sollte).',
        'Kinesiotaping bei Schulterschmerz mit Subluxation möglich (DGN Spastik: kann).'
      ],
      quellen: ['DGNRA', 'DGNSP'],
      hm: {
        KG: { v: 'pos', t: 'Intensives repetitives bzw. aufgabenbezogenes Training (DGNR: A subakut, B chronisch); aktive Funktion im Vordergrund (DGN Spastik: sollte).', r: ['DGNRA', 'DGNSP'] },
        ZNS: { v: 'opt', t: 'Aktives, repetitives Training ist empfohlen (DGNR: A/B); KG-ZNS bei entsprechendem Behandlungsbedarf möglich.', r: ['DGNRA'] },
        FANGO: none('Wärmetherapie nach Schlaganfall'),
        KALT: none('Kältetherapie nach Schlaganfall'),
        ET: { v: 'opt', t: 'TENS bei Beinspastik nach Schlaganfall kann erwogen werden (DGN Spastik: kann).', r: ['DGNSP'] },
        ES: { v: 'opt', t: 'Chronische Armparese: als Teil des repetitiven Trainings (DGNR: B); bei Beinspastik ergänzend möglich (DGN Spastik: kann).', r: ['DGNRA', 'DGNSP'] }
      }
    },

    querschnitt: {
      titel: 'Chronische Querschnittlähmung',
      gilt: 'Gilt für chronische komplette oder inkomplette Para- und Tetraparese nach Rückenmarkschädigung.',
      nicht: 'Nicht bei akuter Querschnittlähmung.',
      codes: ['G82.02', 'G82.03', 'G82.12', 'G82.13', 'G82.32', 'G82.33', 'G82.42', 'G82.43'],
      therapie: [
        'Angeleitete Trainingstherapie für Kraft, Ausdauer und Mobilität, auch als Heimprogramm (DMGP: A ⇑⇑).',
        'Gehtraining mit Gewichtsentlastung, Robotik oder Exoskelett, wenn die Geh- und Stehfunktion verbessert werden kann (DMGP: B ⇑).',
        'Konventionelles Gehtraining am Boden zum Erhalt oder zur Verbesserung der Gehfunktion (DMGP: ⇑, Expertenkonsens).'
      ],
      bedarf: [
        'Erhalt oder Verbesserung von Kraft, Mobilität, Steh- oder Gehfunktion.',
        'Spastik, Kontrakturgefahr oder Schmerz, die Bewegungstherapie und Stehtraining erfordern.'
      ],
      weitere: [
        'Stehtraining im Stehbrett, Stehtisch oder Stehrollstuhl, mit oder ohne FES (DMGP: B ⇑).',
        'Passives motorisiertes Beintraining bei schwer Betroffenen zur Spastikbehandlung möglich (DGN Spastik: kann).'
      ],
      quellen: ['DMGPQ', 'DGNSP'],
      hm: {
        KG: { v: 'pos', t: 'Fachlich angeleitete Trainingstherapie (DMGP: A ⇑⇑) und Gehtraining (DMGP: B ⇑ bzw. ⇑).', r: ['DMGPQ'] },
        ZNS: { v: 'opt', t: 'Aktive Trainings- und Gehtherapie ist empfohlen (DMGP: A/B); KG-ZNS bei entsprechendem Behandlungsbedarf möglich.', r: ['DMGPQ'] },
        FANGO: none('Wärmetherapie bei Querschnittlähmung'),
        KALT: none('Kältetherapie bei Querschnittlähmung'),
        ET: none('Elektrotherapie bei Querschnittlähmung'),
        ES: { v: 'pos', t: 'Bewegungstrainer mit FES zur Spastik- und Schmerzreduktion und Vorbereitung des Gehens (DMGP: B ⇑).', r: ['DMGPQ'] }
      }
    },

    fazialisparese: {
      titel: 'Idiopathische Fazialisparese',
      gilt: 'Gilt für periphere idiopathische Fazialisparese (Bell-Lähmung).',
      nicht: 'Nicht bei zentraler Fazialisparese oder bei Parese durch Trauma, Tumor oder Zoster als führender Ursache.',
      codes: ['G51.0'],
      therapie: [
        'Glukokortikoide (DGN: A); Augenschutz bei unvollständigem Lidschluss (DGN: klinischer Konsens).',
        'Mimische Übungen vor dem Spiegel aus psychologischen Gründen (DGN: klinischer Konsens).'
      ],
      bedarf: [
        'Anleitung zu mimischen Übungen für das Eigenprogramm, besonders bei ausgeprägter Parese.',
        'Für einen spezifischen Nutzen von Physiotherapie fehlt ausreichende Evidenz (DGN, ohne Empfehlungsgrad).'
      ],
      weitere: [
        'Tränenersatz, Hornhautschutz und Uhrglasverband bei unvollständigem Lidschluss (DGN: klinischer Konsens).',
        'Bei persistierender schwerer Parese Lidbeschwerung zur Lidbedeckung prüfen (DGN).'
      ],
      quellen: ['DGNFP'],
      hm: {
        KG: { v: 'opt', t: 'Anleitung zu mimischen Übungen kann aus psychologischen Gründen erwogen werden (DGN: klinischer Konsens).', r: ['DGNFP'] },
        FANGO: none('Wärmetherapie bei Fazialisparese'),
        KALT: none('Kältetherapie bei Fazialisparese'),
        ET: { v: 'none', t: 'Für Elektrotherapie allein ist keine Wirkung belegt (DGN, ohne Empfehlungsgrad).', r: ['DGNFP'] },
        ES: { v: 'none', t: 'Für Elektrostimulation allein ist keine Wirkung belegt (DGN, ohne Empfehlungsgrad).', r: ['DGNFP'] }
      }
    },

    polyneuritis: {
      titel: 'Guillain-Barré-Syndrom und CIDP',
      gilt: 'Gilt für Guillain-Barré-Syndrom und chronische inflammatorische demyelinisierende Polyneuropathie mit motorischen Defiziten.',
      nicht: 'Nicht bei nicht-entzündlichen Polyneuropathien wie diabetischer Polyneuropathie.',
      codes: ['G61.0', 'G61.8'],
      therapie: [
        'GBS: Physiotherapie und Logopädie frühzeitig beginnen; anschließend Rehabilitation (DGN: klinischer Konsens).',
        'CIDP: Physiotherapie angepasst an den Einzelfall (DGN: klinischer Konsens; Evidenz niedriger Qualität für Nutzen).'
      ],
      bedarf: [
        'Paresen, Gangunsicherheit oder Einschränkung der Selbstversorgung.',
        'Nach der Akutphase bzw. unter Immuntherapie zum Wiederaufbau von Kraft und Mobilität.'
      ],
      weitere: [
        'Rehabilitation nach GBS (DGN: klinischer Konsens).',
        'Logopädie bei Dysarthrie oder Dysphagie frühzeitig (DGN: klinischer Konsens).'
      ],
      quellen: ['DGNIN'],
      hm: {
        KG: { v: 'cond', l: 'GBS früh, CIDP individuell', t: 'GBS: Physiotherapie frühzeitig beginnen; CIDP: angepasst an den Einzelfall (DGN: klinischer Konsens).', r: ['DGNIN'] },
        FANGO: none('Wärmetherapie bei GBS oder CIDP'),
        KALT: none('Kältetherapie bei GBS oder CIDP'),
        ET: none('Elektrotherapie bei GBS oder CIDP'),
        ES: none('Elektrostimulation bei GBS oder CIDP')
      }
    },

    karpaltunnel: {
      titel: 'Karpaltunnelsyndrom',
      gilt: 'Gilt für Karpaltunnelsyndrom mit Reizsymptomen ohne persistierende sensible oder motorische Ausfälle (konservativer Therapieversuch).',
      nicht: 'Nicht bei persistierenden Ausfällen, Thenaratrophie oder therapieresistenten Parästhesien; hier ist die Operation indiziert.',
      codes: ['G56.0'],
      therapie: [
        'Im Frühstadium mit nur Reizsymptomen konservativer Therapieversuch (DGH: Expertenkonsens).',
        'Nächtliche Handgelenkschiene (DGH: A ⇑⇑).',
        'Orale Glukokortikoide möglich (DGH: 0 ⇔); ultraschallgesteuerte Infiltration oder Low-Level-Laser möglich (DGH: schwach ⇑).'
      ],
      bedarf: [
        'Für Nervengleitübungen und Handgelenkmobilisation ist nur ein kurzfristiger Effekt belegt; sie werden nicht empfohlen (DGH, Hintergrundtext).',
        'Der konservative Therapieversuch stützt sich vorrangig auf die Nachtschiene (DGH: A ⇑⇑).'
      ],
      weitere: [
        'Operation bei persistierenden sensiblen oder motorischen Ausfällen oder therapieresistenten Parästhesien (DGH: A ⇑⇑).',
        'Wiederholte Steroidinjektionen nicht empfohlen (DGH, Hintergrundtext).'
      ],
      quellen: ['DGHKTS'],
      hm: {
        KG: { v: 'neg', t: 'Nervengleitübungen und Handgelenkmobilisation werden wegen nur kurzfristiger Effekte nicht empfohlen (DGH, ohne Empfehlungsgrad).', r: ['DGHKTS'] },
        FANGO: none('Wärmetherapie beim Karpaltunnelsyndrom'),
        KALT: none('Kältetherapie beim Karpaltunnelsyndrom'),
        ET: none('Elektrotherapie beim Karpaltunnelsyndrom'),
        ES: none('Elektrostimulation beim Karpaltunnelsyndrom')
      }
    },

    obstipation: {
      titel: 'Chronische Obstipation',
      gilt: 'Gilt für chronische Obstipation bei Kolontransit- oder Stuhlentleerungsstörung.',
      nicht: 'Nicht bei akuter Obstipation, Ileus oder unbehandelter organischer Ursache.',
      codes: ['K59.00', 'K59.01', 'K59.09'],
      therapie: [
        'Körperliche Inaktivität vermeiden (DGVS: sollte); etwa 30 g Ballaststoffe pro Tag (DGVS: sollte).',
        'Bei Beckenbodendyssynergie Biofeedback-Training (DGVS: sollte); bei reiner Transitstörung kein Biofeedback (DGVS: sollte nicht).',
        'Abdominalmassage als unterstützende Maßnahme möglich (DGVS: kann).'
      ],
      bedarf: [
        'Ergänzend zu Allgemeinmaßnahmen und medikamentöser Therapie, wenn Massage als unterstützende Maßnahme gewünscht ist.',
        'Stuhlentleerungsstörung mit Dyssynergie: Biofeedback bzw. Stuhltraining (DGVS: sollte bzw. kann).'
      ],
      weitere: [
        'Mehr Bewegung über das altersübliche Maß nicht als Obstipationstherapie in Aussicht stellen (DGVS: sollte).',
        'Bei Adipositas kann mehr körperliche Aktivität sinnvoll sein (DGVS: kann).'
      ],
      quellen: ['DGVSO'],
      hm: {
        CM: { v: 'opt', t: 'Abdominalmassage kann unterstützend eingesetzt werden (DGVS: kann, Konsens).', r: ['DGVSO'] },
        BGM: none('Bindegewebsmassage bei Obstipation'),
        FANGO: none('Wärmetherapie bei Obstipation')
      }
    },

    harninkontinenz: {
      titel: 'Harninkontinenz der Frau',
      gilt: 'Gilt für Frauen mit Belastungs-, Drang- oder Mischharninkontinenz.',
      nicht: 'Nicht bei Überlauf-, Reflex- oder extraurethraler Inkontinenz und nicht bei neurogener Blasenfunktionsstörung.',
      codes: ['N39.3', 'N39.42', 'N39.48'],
      therapie: [
        'Belastungs- oder Mischinkontinenz: angeleitetes Beckenbodentraining über mindestens 3 Monate als erste Therapie (NICE: offer).',
        'Drang- oder Mischinkontinenz: Blasentraining über mindestens 6 Wochen als erste Therapie (NICE: offer).',
        'Bei BMI über 30 Gewichtsreduktion empfehlen (NICE: advise).'
      ],
      bedarf: [
        'Belastungs- oder Mischinkontinenz: angeleitetes Beckenbodentraining, mindestens 8 Kontraktionen dreimal täglich.',
        'Keine aktive Beckenbodenkontraktion möglich: Elektrostimulation oder Biofeedback zur Unterstützung erwägen (NICE: consider).'
      ],
      weitere: [
        'Bei Wirksamkeit das Training dauerhaft fortführen (NICE).',
        'Reicht Blasentraining nicht, Kombination mit Medikamenten gegen überaktive Blase erwägen (NICE: consider).'
      ],
      quellen: ['NG123'],
      hm: {
        KG: { v: 'pos', t: 'Angeleitetes Beckenbodentraining über mindestens 3 Monate als erste Therapie bei Belastungs- und Mischinkontinenz (NICE: offer).', r: ['NG123'] },
        UEB: { v: 'pos', t: 'Angeleitetes Beckenbodentraining, auch in der Gruppe (NICE: offer, angeleitetes Programm).', r: ['NG123'] },
        ET: { v: 'cond', l: 'Ohne aktive Kontraktion', t: 'Nicht routinemäßig und nicht routinemäßig mit Beckenbodentraining kombinieren; erwägen, wenn keine aktive Beckenbodenkontraktion möglich ist (NICE).', r: ['NG123'] }
      }
    },

    bpls: {
      titel: 'Benigner paroxysmaler Lagerungsschwindel',
      gilt: 'Gilt für benignen paroxysmalen Lagerungsschwindel.',
      nicht: 'Nicht bei zentralem Schwindel oder bei Warnzeichen für eine zentrale Ursache.',
      codes: ['H81.1'],
      therapie: [
        'Lagerungsmanöver zur wiederholten Selbstanwendung mehrmals täglich, Therapiekontrolle nach etwa 14 Tagen (DEGAM: soll).',
        'Sedierende Antivertiginosa nur symptomatisch und in der Regel nicht länger als drei Tage (DEGAM: soll).'
      ],
      bedarf: [
        'Anleitung zur Selbstbehandlung mit Lagerungsmanövern, wenn diese allein nicht gelingt.',
        'Anhaltender Schwindel oder Fallneigung nach erfolgreicher Reposition.'
      ],
      weitere: [
        'Therapiekontrolle nach etwa 14 Tagen (DEGAM).'
      ],
      quellen: ['DEGAS'],
      hm: {
        KG: { v: 'pos', t: 'Lagerungsmanöver mit Anleitung zur Selbstanwendung (DEGAM: soll).', r: ['DEGAS'] },
        UEB: { v: 'opt', t: 'Übungen zur Selbstanwendung der Lagerungsmanöver einüben (DEGAM: soll, Selbstanwendung).', r: ['DEGAS'] }
      }
    },

    vestibulopathie: {
      titel: 'Periphere vestibuläre Hypofunktion',
      gilt: 'Gilt für einseitige oder beidseitige periphere vestibuläre Unterfunktion, akut, subakut oder chronisch.',
      nicht: 'Nicht bei benignem paroxysmalem Lagerungsschwindel oder zentralem Schwindel.',
      codes: ['H81.2', 'H81.8'],
      therapie: [
        'Vestibuläre Physiotherapie bei akuter, subakuter und chronischer einseitiger sowie bei beidseitiger Unterfunktion (APTA: A).',
        'Supervidierte Therapie mit Heimprogramm (APTA: A); Blickstabilisierung chronisch 3–5-mal täglich, insgesamt mindestens 20 Minuten über 4–6 Wochen (APTA: C).',
        'Keine Sakkaden- oder Folgebewegungsübungen allein zur Blickstabilisierung (APTA: A, dagegen).'
      ],
      bedarf: [
        'Schwindel, Gleichgewichtsstörung oder Fallneigung nach Neuropathia vestibularis oder bei beidseitiger Vestibulopathie.',
        'Beidseitige Vestibulopathie: Vestibularisrehabilitation kann die Symptome bessern (DEGAM: kann).'
      ],
      weitere: [
        'Therapie beenden, wenn Ziele erreicht sind, Symptome abgeklungen sind oder kein Fortschritt mehr erzielt wird (APTA: B).',
        'Sedierende Antivertiginosa nicht länger als drei Tage, da sie die zentrale Kompensation verzögern können (DEGAM: soll).'
      ],
      quellen: ['APTAV', 'DEGAS'],
      hm: {
        KG: { v: 'pos', t: 'Supervidierte vestibuläre Physiotherapie (APTA: A); bei beidseitiger Vestibulopathie Vestibularisrehabilitation möglich (DEGAM: kann).', r: ['APTAV', 'DEGAS'] },
        UEB: { v: 'pos', t: 'Gleichgewichts- und Blickstabilisierungsübungen als Heimprogramm mit Kontrolle (APTA: A für supervidierte Therapie; Dosierung C).', r: ['APTAV'] }
      }
    }
  }
};
