# Changelog

## 0.4.4 – 20.10.2026

- Ersten gezielten Originalabgleich für WS/EX und ausgewählte ICD-10-GM-2026-Kodes mit Fundstellen, Fassungen und Download-Prüfsummen ergänzt.
- Falsch bei WS hinterlegte orientierende Kindermenge 50 entfernt; EX-Altersbedingung bei fehlendem Alter sichtbar.
- WS-/EX-Leitsymptomatiküberschriften im Original mit getrennten kurzen Erklärungen und Katalogquelle angezeigt. Mehrfachauswahl und individueller alternativer Text bleiben.
- Begrenzten eingebetteten ICD-Prüfbestand ergänzt: endständiger Code, unterteilte Kategorie, offener Zusatzkodierkontext und unbekannter Status. Format/Präfix bestätigen keine Gültigkeit.
- Formale Gesamtprüfung und Sonderwege ausdrücklich offen; klinische Profile, Empfehlungen und Quellen-Abrufdaten unverändert. Keine neue automatische Therapieauswahl.
- Syntax, erweiterte Smoke- und echte Chrome-Browserprüfungen bestanden. Kein Deployment, keine fachliche Gesamtfreigabe.

## 0.4.3 – 20.10.2026

- Alle acht klinischen Bereiche konsequent auf kurze Stichpunkte umgestellt: Geltungsbereich, konkrete Therapie, Physiotherapiebedarf und Zusätze.
- Begriffe an Heilmittelpositionen angelehnt: Manuelle Therapie, Traktion, Massage und Kryotherapie. Hinweise zur Selbstanwendung von Wärme/Kälte aus der Anzeige entfernt.
- Lange Zusatzkarten durch kompakte Listen ersetzt. Empfehlungsstärken und fachliche Einschränkungen als aufklappbare Stichpunkte; Quellenstand, Fundstellen und Abrufdaten bleiben erhalten.
- Klinische Unterschiede wie akut/chronisch, Selbstwärme/Fango und unklare versus negative Evidenz beibehalten. Keine neue Recherche oder Veränderung der formalen Verordnungslogik.


## 0.4.2 – 20.10.2026

- Erklärung zur Einordnung auf die vier abgestimmten Stichpunkte gekürzt.
- Quellenanzeige auf Bezeichnung, Stand, Land, Fundstelle und Abrufdatum reduziert; interne Abruf-/Prüfvermerke werden nicht mehr angezeigt.
- Vergleichbare Recherchevermerke in den Erläuterungen entfernt. Klinische Evidenzunterschiede und der Prototypstatus bleiben sichtbar; interne Quellenmetadaten und Dokumentation bleiben erhalten.


## 0.4.1 – 19.10.2026

- Vom Nutzer bereitgestellte deutsche S3-Langfassungen für Gonarthrose und nicht-spezifische Nackenschmerzen gezielt ausgewertet; Patientenfassung und Evidenzbericht zur Gonarthrose ergänzend abgeglichen. Alle vier Dateien stimmen per SHA-256 mit den nun erreichbaren AWMF-Originaldownloads überein.
- Fachlichen Stand getrennt vom Dateinamen dokumentiert: Gonarthrose Version 5.0 / Juli 2024; Nackenschmerz Version 3.0 / Januar 2025.
- Nackenprofil auf nicht-spezifische Beschwerden umgestellt: Aktivierung, akute versus chronische Bewegungstherapie, Selbstwärme versus Fango-Verordnung und gezielte Negativempfehlungen.
- Knieprofil mit der deutschen Empfehlungsstärke zu Bewegung, Aufsicht, manuellen Techniken und physikalischen Verfahren aktualisiert. Evidenzlücken bei Massage/Traktion von ausdrücklichen Negativempfehlungen unterschieden.
- NICE-Übernahmen in der deutschen Gonarthrose-Leitlinie als gemeinsame Evidenzbasis gekennzeichnet. Kein zusätzlich unabhängiger Wirksamkeitsnachweis durch mehrere Dokumente derselben Leitlinie.
- Deutscher Koxarthrose-Abgleich bleibt offen. Keine Änderungen an GKV-Katalogregeln, keine Behandlungssteuerung und kein Deployment.


## 0.4 – 19.10.2026

- Klinische Orientierung vor die formale Verordnung gestellt und auf drei vereinbarte Fragen zugeschnitten: konkrete Therapie, Bedarf an Physiotherapie, sinnvolle Zusätze.
- Von drei auf acht klinische Bereiche erweitert; Knie und Hüfte getrennt.
- Sechs zusätzliche US-Originalleitlinien und ein niederländisches Originalmodul gezielt ausgewertet. Kein vollständiger internationaler Aktualitätsaudit; deutscher Abgleich offen.
- Manuelle Techniken und Zusätze je Diagnose eingeordnet. Unterschiedliche Bewertungen etwa zu Ultraschall offengelegt; keine pauschale Negativempfehlung über alle Profile.
- Praktische Einordnung von Eigenübungen/Betreuungsbedarf von direkten Leitlinienempfehlungen unterschieden. Keine Behandlungssteuerung ergänzt.
- Bei nicht offensichtlich passender ICD-Angabe Profilhinweis und keine Empfehlungshinweise an den Heilmittelkarten.
- Kein Site-Deployment und keine fachliche Freigabe.

## Repository-Erstübernahme – 18.10.2026

- Eigenständige HTML Version 0.3 übernommen.
- Anforderungen, Verordnungsregeln, Evidenzübersicht, Quellenstatus und offene Validierung dokumentiert.
- Begrenzten reproduzierbaren Node-Smoke-Test ergänzt.
- Keine klinische Freigabe und kein Site-Deployment.

## 0.3

Drei fiktive Patientenbeispiele mit Demo-Buttons und dauerhafter Kennzeichnung.

## 0.2.1

Abgleich mit dem Ursprungs-Chat; sichtbare Ergebnisangaben für Hausbesuch, Bericht, Beginn sowie Blanko-Datum/Schulter.

## 0.2

Mehrfachsymptomatik, eigene Ergänzungsmenge, Zusatzcode bei Bedarf und klinische Orientierung für drei Geltungsbereiche.

## Frühere Iterationen

Druck entfernt, Ergänzungen als Kombinationen, mehrere Hauptmittel als Ausnahme, MT-Praxishinweis und optionale aktive/edukative Therapieziele.
