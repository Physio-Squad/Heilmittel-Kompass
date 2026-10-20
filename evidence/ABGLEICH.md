# Abgleich der Rechercheübergabe

Importiert am **20.10.2026** aus `research/leitlinien-quellen-2026-10`, Commit `aff328c2afc17f7b4b37246c9af84c62a135cbf5`.

Die Dateien [QUELLEN.md](QUELLEN.md) und [PRUEFPROTOKOLL.md](PRUEFPROTOKOLL.md) sind unveränderte Kopien des angegebenen Commits. [IMPORT.json](IMPORT.json) dokumentiert Herkunft und Prüfsummen. Es wurde kein Branch gewechselt oder zusammengeführt. Vorhandene lokale Änderungen bleiben erhalten.

## Was tatsächlich vorliegt

20 Quellen-/Dokumenteinträge, Prüfstandsnotizen und ein Mindestdatensatz für spätere Einzel-Empfehlungen. Die Dateien sind eine Rechercheübergabe, noch keine vollständig ausgefüllte Empfehlungsmatrix. Ein Importdatum ist kein neuer Abrufzeitpunkt einer Leitlinie und keine fachliche Freigabe.

13 Einträge lassen sich den bisherigen klinischen Quellen zuordnen. Die amtliche G-BA-Grundlage war ebenfalls bereits bekannt. Die übrigen sechs Einträge sind ergänzende beziehungsweise bereits geplante Rechercheziele; drei davon liegen außerhalb des bestätigten Startumfangs. Die lokale US-Nackenquelle U6 von 2017 fehlt im importierten Register, wird aber als historischer Vergleich erhalten.

## ID-Zuordnung und zusammengeführter Prüfstand

Die importierten Originaldateien bleiben unverändert. Die folgende Einordnung ergänzt ihren Prüfstand um tatsächlich vorhandene lokale Belege; sie behauptet keine neue Originalprüfung.

| Import-ID | Lokale ID | Zusammengeführter Stand / offene Aufgabe |
|---|---|---|
| GBA-HMK | R1–R3 (Dokumentation) | Bereits als amtliche Grundlage dokumentiert (lokal R1–R3). Geltende Fassung und Zuordnungen noch nicht vollständig verifiziert; Import schließt die formale Lücke nicht. |
| NICE-NG59 | N59 | Lokaler übernommener Recherchebefund mit eingeschränkter direkter Abruflage. Import ist kein neuer Originalabruf. |
| VADOD-LBP-2022 | U1 | Lokal Provider Summary und Empfehlungen 9–11/17 gezielt gelesen. Vollständige Evidenztabellen bleiben offen. |
| DEGAM-NECK-2025 | DE2 | Lokal Nutzer-Langfassung gezielt geprüft und per SHA-256 mit AWMF-Datei abgeglichen; Empfehlungen/Fundstellen in deutsche-leitlinien.md. Kein neuer Volltextaudit durch Import. |
| AWMF-GON-2024 | DE1 | Lokal Langfassung Version 5.0, Stand Juli 2024, ausgewählte Empfehlungen geprüft. Dateiname 2025-05 nicht als neuen fachlichen Stand ausgeben. |
| AWMF-GON-EVID | DE1E | Lokal ausgewählte Evidenzbericht-Abschnitte zu 34/35/39 geprüft. Gehört zur gleichen Leitlinie; NICE-Übernahmen nicht doppelt zählen. |
| AWMF-GON-PAT | DE1P | Patientenfassung lokal ergänzend abgeglichen. Für Empfehlungsstärken maßgeblich: Langfassung. Kein unabhängiger Nachweis. |
| NICE-NG226 | N226 | Lokaler übernommener Recherchebefund; gemeinsame Basis deutscher Gonarthrose-Empfehlungen kenntlich machen. |
| KNGF-OA-2018 | Noch keine klinische App-ID | Zusätzlicher niederländischer Einstieg im importierten Register. Jahreszahl im ID ist kein verifizierter Aktualitätsnachweis. Originalfassung und Empfehlungen offen. |
| NOV-OA-2019 | Noch keine klinische App-ID | Zusätzlich dokumentierter niederländischer Arthrose-Einstieg. Importierter Auswertungsbericht enthält noch keine nachprüfbare Einzelmatrix; Originalfundstellen und GRADE offen. |
| APTA-HIP-2025 | U2 | Lokal Original-PDF über APTA bereits abgerufen und CPG2 gezielt gelesen. Direkte PDF-URL lokal verfügbar; vollständige Bewertung des Evidenzteils weiterhin offen. |
| JOSPT-RC-2025 | R25 | Lokal ausgewählte Empfehlungen aus übernommener Recherche; Zugriff auf Original eingeschränkt. Vollständige Einzelprüfung bleibt offen. |
| JOSPT-PFP-2019 | Noch keine klinische App-ID | Bereits im lokalen Rechercheplan, noch kein freigegebenes klinisches Profil. Originalempfehlungen, Untergruppen und Grade gezielt extrahieren. |
| JOSPT-ANKLE-2021 | U5 | Lokal APTA-Original-PDF CPG2–3 für akute/postakute Distorsion gelesen. Chronische Instabilität bleibt separat auszuwerten. |
| APTA-ACHILLES-2024 | U3 | Lokal Original-PDF CPG2 und Geltungsbereich Midportion gelesen. Direkte APTA-PDF-URL vorhanden; kein vollständiger Evidenzaudit. |
| NL-ACHILLES | NL1 | Lokal Modul zu konservativen Optionen gezielt gelesen, Stand 2020 dokumentiert. Aktuelle Version und Einzelempfehlungen nicht allein aus dem Import bestätigen. |
| APTA-PLANTAR-2023 | U4 | Lokal Original-PDF CPG2 gezielt gelesen. Direkte APTA-PDF-URL vorhanden; vollständiger Evidenzteil nicht abschließend geprüft. |
| NICE-NG236 | Noch keine klinische App-ID | Schlaganfall-Rehabilitation: weiterer Recherchekandidat, außerhalb des bestätigten muskuloskelettalen Startumfangs. |
| NICE-NG115 | Noch keine klinische App-ID | COPD: weiterer Recherchekandidat, außerhalb des bestätigten muskuloskelettalen Startumfangs. |
| NICE-NG210 | Noch keine klinische App-ID | Beckenboden-Dysfunktion: weiterer Recherchekandidat, nicht stillschweigend dem derzeitigen Startumfang hinzufügen. |

Maschinenlesbar: [QUELLEN_ABGLEICH.json](QUELLEN_ABGLEICH.json). Die lokale Quelldefinition enthält bei APTA-Hüfte, Achilles, Plantarfasziitis und Sprunggelenk bereits die konkreten PDF-URLs statt nur einer Übersichtsseite.

## Grenzen und Quellenabhängigkeiten

- Gonarthrose-Langfassung, Evidenzbericht und Patientenfassung sind Dokumente derselben Leitlinie. Die Übernahmen aus NICE NG226 sind keine unabhängigen zusätzlichen Wirksamkeitsnachweise.
- Ein lokaler gezielt gelesener Empfehlungsteil wird durch einen allgemeineren importierten Übergabestatus nicht gelöscht oder auf „unbekannt“ zurückgesetzt. Eine weitergehende Volltext-/Evidenzprüfung wird dadurch ebenfalls nicht behauptet.
- Neu genannte Quellen werden nicht automatisch zu App-Empfehlungen. Jahreszahlen im Quellen-ID und berichtete frühere Auswertungen müssen anhand konkreter Originalfundstellen überprüft werden.
- Schlaganfall, COPD und Beckenboden bleiben als Rechercheziele erhalten, gehören aber nicht zur bestätigten ersten Fassung für häufige muskuloskelettale Fälle.
- Die bestehenden klinischen Texte, Quellen-Abrufdaten und formalen Regeln der App wurden durch diesen Import nicht geändert.

## Nächste Prüfaufgaben nach dem bestätigten Produktkonzept

1. **Formaler Unterbau:** geltende Heilmittel-Richtlinie, Physiotherapie-Katalog und ICD-10-GM-Stand beschaffen/prüfen. Für den unterstützten muskuloskelettalen Umfang Diagnosegruppen, gruppenspezifische Leitsymptomatiken, patientenindividuelle Angaben, Positionen, Kombinationen und Mengenregeln verifizieren. Der importierte G-BA-Einstieg enthält diese Daten noch nicht.
2. **Einzel-Empfehlungen strukturieren:** importiertes Mindestdatenschema verwenden, tatsächliche Fundstellen und Prüfstände erfassen. Redaktionelle Heilmittelzuordnung vom Originalbeleg trennen; unbekannte Vergleiche oder Evidenzgrade offen lassen.
3. **Niederländische Arthrosequellen:** KNGF und NOV auf aktuelle Fassung, Population, Empfehlungen und GRADE-Angaben prüfen. Der neue Einstieg ersetzt noch keine Prüfung des Originals.
4. **Lücken im klinischen Umfang:** deutsche Hüftquelle beziehungsweise ihren tatsächlichen Status klären; Schulter-Originalprüfung vertiefen; patellofemoralen Schmerz und chronische Sprunggelenksinstabilität getrennt als Erweiterungen bearbeiten.

Das [Produktkonzept](../Heilmittel-Kompass/docs/produktkonzept.md) und der [deutsche Originalabgleich](../Heilmittel-Kompass/docs/deutsche-leitlinien.md) bleiben maßgebliche lokale Kontextdokumente. Die Prüfangaben dienen der internen Recherche; die vereinbarte kompakte Quellenanzeige der App bleibt erhalten.


## Fortsetzung: tatsächlicher formaler Originalabgleich am 20.10.2026

Die historische Importbewertung oben bleibt erhalten. In der Fortsetzung wurden G-BA-Richtlinienseite, Richtlinien-PDF, verlinkter Physiotherapiekatalog, KBV PraxisWissen 2026 und ausgewählte BfArM-ICD-10-GM-2026-Seiten tatsächlich erneut abgerufen. Damit ist die frühere Zugriffslücke für diese konkreten Quellen geschlossen. GBA-HMK/R1–R3 ist nun für den dokumentierten WS-/EX-Teil gezielt geprüft; eine vollständige Katalog- oder Sonderbedarfsfreigabe folgt daraus nicht.

[Originalabgleich](../Heilmittel-Kompass/docs/formaler-regelabgleich.md) und [strukturierte Einzelbefunde](FORMALER_REGELABGLEICH.json) enthalten Fassungen, Fundstellen, Originalüberschriften, getrennte Erklärungen, Regeln und Prüfsummen. Die Datei unterscheidet 19 gezielt geprüfte endständige Codes, vier unterteilte Kategorien und einen offenen Zusatzkodierkontext. Die Zuordnung zu acht Profilen ist redaktionell und kontextabhängig, keine amtliche ICD-zu-Gruppe-Tabelle.

Die App 0.4.4 korrigiert insbesondere die zuvor irrtümlich bei WS hinterlegte orientierende Kindermenge von 50 Einheiten. Diese steht im geprüften Katalog bei EX. Andere Datenbankeinträge, Gruppen, LHB/BVB, Blankodetails und fachliche Gesamtprüfung bleiben offen. Importdateien, Importprüfsummen und klinische Quellen-Abrufdaten wurden nicht verändert.
