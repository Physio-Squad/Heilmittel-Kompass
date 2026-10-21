# Profilergänzung übrige Diagnosegruppen – Prüfdokumentation

Stand: 2026-10-21. Seit Version 0.6.0 in `Heilmittel-Kompass/index.html` als Block `HK_DATA_ERG` eingebaut; die frühere Datei `daten/profile-ergaenzung.js` und ihr Prüfskript sind entfernt, die Formatprüfung läuft in `tests/smoke.cjs`. Beim Einbau geändert: „(DGH, Hintergrundtext)“ → „(DGH, ohne Empfehlungsgrad)“.

Diese Datei enthält die Prüf- und Arbeitsvermerke, die nach `AGENTS.md` nicht in die Oberflächentexte gehören.

## Arbeitsweise und Grenzen

- Originale wurden über eine automatische Textauswertung der PDFs gelesen. Bei langen Leitlinien endet der lesbare Text nach etwa 25–35 Seiten; ausgewertet sind deshalb meist Empfehlungsübersichten, Kurzfassungen oder Schlüsselfragen. Wortlaut, Grade und Seiten vor einer Freigabe am Original gegenlesen.
- **„Keine Leitlinienaussage“** heißt: In den ausgewerteten Teilen der genannten Quellen keine Aussage gefunden. Spätere Kapitel können eine Aussage enthalten.
- Empfehlungstexte sind sinngemäß und gekürzt; Grade stehen in der Originalsystematik der jeweiligen Quelle (⇑⇑/⇑/⇔, A/B/0, soll/sollte/kann, GCP/klinischer Konsens, NICE offer/consider, APTA A–D, ERS stark/bedingt).
- Gruppenzuordnung folgt den Indikationsbeispielen im Heilmittelkatalog (Abruf 21.10.2026). Katalogwortlaut für GE und SO1–SO3 wurde über die Textauswertung erfasst und ist gegenzulesen.
- Heilmittel-Gruppenvarianten (z. B. KG Gruppe, KG im Bewegungsbad) sind wie in 0.5 nicht als eigene Positionen modelliert; bei CS, ZN, PN, LY gelten die in `HK_DATA.gruppen` gepflegten Listen.

## ICD-10-GM 2026 (BfArM, Abruf 21.10.2026)

Am BfArM-Kodebrowser geprüft: J44.8-/J44.9- (Block J40–J47), J47, I70.2- (I70–I79), I89.0- (I80–I89), G20.- (G20–G26), G35.- (G35–G37), G51.0, G56.0 (G50–G59), G61.- (G60–G64), G82.- (G80–G83), H81.- (H80–H83), I69.- (I60–I69), K59.0- (K55–K64), N39.3/N39.4- (N30–N39).

- Fünfstellige Kodes aus Kategorie + Modifikator gebildet, wo der Browser sie nicht einzeln aufführt (J44, G20, G35, G82).
- I69.3/I69.4: keine weitere Unterteilung, keine Kreuz-/Stern-Kennzeichnung.
- G61.8 „Sonstige Polyneuritiden“ für CIDP: Der Browser nennt CIDP nicht ausdrücklich als Inklusivum; Zuordnung vor Freigabe prüfen.
- G82.-: nur fünfte Stelle 2 und 3 (chronisch) übernommen; G82.6-! (Höhe) als Zusatzkode nicht aufgenommen.
- N39.47! (Rezidivinkontinenz) als Zusatzkode nicht aufgenommen.

## Profile

| Profil | Gruppe | Quellen | Ausgewertet | Offen |
|---|---|---|---|---|
| copd | AT | NVLC, DGPC | siehe [EMPFEHLUNGEN_AT_COPD.md](EMPFEHLUNGEN_AT_COPD.md) | NVL abgelaufen 06/2026; NVL Kap. 5–6, DGP-Hintergrund |
| bronchiektasen | AT | ERSBE | Zusammenfassung (DZL-Publikationsseite) | Volltext: Evidenzsicherheit, Aussage zu hypertoner Kochsalzinhalation (INH-Bewertung) |
| pavk | GE | DGAP | Schlüsselfragen-Fazit S. 4 („soll“-Formulierungen) | Empfehlungsgrade und Nummern in Kap. 4.6/6.2; ESC 2024 (Klasse/Level nicht abrufbar) |
| lymphoedem | LY | ISLLY | Konsens S. 141–143, ohne Grade | AWMF 058-001 abgelaufen, AG 4 nicht lesbar; S3-Nachfolger in Konsultation (058-001KF) |
| parkinson | ZN | DGNPK | Empfehlungsübersicht S. 15–18 | Kap. 3.23 (Gangtraining, Cueing, LSVT BIG, Sturzprävention) |
| ms | ZN | DGNMS, DGNSP | Symptomtherapie S. 17; Spastik-Übersicht | MS Kap. E (S. 114 ff.), Lebensstil/Sport (S. 41 ff.) |
| schlaganfall | ZN | DGNRA, DGNSP | Armparese Kap. 6.1 S. 28; Spastik-Übersicht S. 6–11 | Armparese Kap. 7 (Einzelverfahren, Bobath S. 216); aktuelle Fassung 080-001; ReMoS (Gang); NICE NG236 nicht abrufbar |
| querschnitt | ZN | DMGPQ, DGNSP | Empfehlungen 7.7–7.11 | Gültigkeitsdauer; Inkonsistenz 7.10 (Tab. 4 „⇑ EK“ vs. Text „B ⇑“) |
| fazialisparese | PN | DGNFP | S. 5–6, 20, 24–26 | – |
| polyneuritis | PN | DGNIN | S. 6, 12, 25–26 | Kap. 4.5–5; CIDP-Kode |
| karpaltunnel | PN | DGHKTS | Kap. 11.1–11.2, S. 23–31 | Datei im Archivordner, aktuelle Registerfassung bestätigen; Aussage zu Nervengleitübungen steht im Hintergrundtext, nicht als nummerierte Empfehlung |
| obstipation | SO1 | DGVSO | Empfehlungsliste DGVS-Seite | Katalog-Indikationsbeispiele für SO1 nennen u. a. Colon irritabile, CED, Megacolon, neurogene Darmlähmung; Zuordnung chronischer Obstipation fachlich bestätigen |
| harninkontinenz | SO2 | NG123 | 1.4.3–1.4.12 | Deutsche S2k 015-091 (Kap. 4.3, S. 92–98) nicht lesbar; ergänzen |
| bpls | SO3 | DEGAS | Kurzversion | Langfassung (Grade/Konsens); AAO-HNS 2017 (Key Action Statements nicht abrufbar) |
| vestibulopathie | SO3 | APTAV, DEGAS | Action Statements 1–10 | Journal-Zitat/DOI der APTA-Revision |

Bewertungsentscheidungen mit Ermessen:
- ZN-Profile: KG-ZNS als „Möglich“, weil die Quellen Physiotherapie bzw. aktives Training empfehlen, ohne ein neurophysiologisches Konzept festzulegen.
- MS: Kälte als „Möglich“, gestützt auf die Beratungsempfehlung zu kühlenden Maßnahmen bei Fatigue (nicht auf Kältetherapie als Heilmittel).
- Bronchiektasen: KG-Muko „Empfohlen“, da der Katalog Bronchiektasie bei den chronisch persistierenden Erkrankungen neben Mukoviszidose nennt und ERS Atemwegsclearance stark empfiehlt.
- Karpaltunnel: KG „Nicht empfohlen“ beruht auf dem Hintergrundtext zu Nervengleitübungen/Mobilisation, nicht auf einer nummerierten Empfehlung.
- Fazialisparese: Elektrotherapie/-stimulation als „Keine Leitlinienaussage“ mit Hinweis auf fehlenden Wirkungsnachweis; die Leitlinie spricht keine Negativempfehlung aus.
- pAVK: Gehtraining als KG/Übungsbehandlung bewertet; die Leitlinie empfiehlt strukturiertes Gehtraining, nicht eine bestimmte Heilmittelposition.

## Nicht erstellte Profile (Register-Einträge)

| Diagnose | Grund |
|---|---|
| Asthma (AT) | NVL Asthma 5.0 Kap. 6 (S. 100 ff.) nicht lesbar; keine Kurzfassung gefunden |
| Mukoviszidose (AT) | Keine physiotherapeutische Leitlinie identifiziert |
| Fibromyalgie (CS) | S3 abgelaufen (2022), Kap. 6 (S. 61 ff.) nicht lesbar; Aktualisierung angemeldet |
| CRPS (CS) | DGN S1 2018 abgelaufen; ICD G90.5-/G90.6- am BfArM nicht abrufbar (Seite G89–G99 fehlerhaft); Profil nach Kodeprüfung möglich (Physiotherapie „unverzichtbar“, GMI/Spiegeltherapie früh, PEPT nicht mehr empfohlen, ohne Grade) |
| Chronischer primärer Schmerz (CS) | NICE NG193 nicht abrufbar |
| Spastisches Syndrom (ZN) | Kein eigenständiges Diagnoseprofil; Empfehlungen in MS, Schlaganfall und Querschnitt eingearbeitet |
| Polyneuropathie (PN) | DGN 030-067 ist reine Diagnostikleitlinie |
| Raynaud (GE) | ESVM 2017 nicht abrufbar |
| Stuhlinkontinenz (SO2) | Keine aktuelle Leitlinie für Erwachsene; NICE NG210 nur bei begleitendem Prolaps |
| Harninkontinenz geriatrisch / nach Prostatektomie (SO2) | DGG 084-001 Kap. 9 und S3 Prostatakarzinom nicht lesbar |
| SO4 (trophische Störungen) | Keine Leitlinie mit Aussage zu CO2-Bad identifiziert |
| Chronische Prostatitis / Adnexitis (SO5) | EAU Kap. 5 nicht lesbar; keine Leitlinie zu Adnexitis/Wärmetherapie |

Für die nicht lesbaren Volltexte wäre ein Abruf über den Browser der Desktop-App (Textextraktion seitenweise) der nächste Schritt.
