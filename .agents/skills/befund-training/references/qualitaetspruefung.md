# Qualitätsprüfung

Prüfe den tatsächlich bearbeiteten Umfang. Die Prüfung dieses Skill-Pakets und des historischen Prototyps ist keine Prüfung einer künftig damit entwickelten App.

## Quellen und Fachlogik

- Jede klinische Aussage hat einen passenden Geltungsbereich und auffindbaren Quellenbezug. Neue Aussagen werden nicht allein dadurch belegt, dass sie neben einem Quellenlink stehen.
- Dateidatum und fachlicher Stand bleiben getrennt: Knie-Dateien 2025-05 enthalten Version 5.0 / Juli 2024; Nackendatei 2025-08 enthält Stand Januar 2025.
- Selbstwärme versus verordnetes Fango/Kryotherapie, akut versus chronisch bei Nacken und starke Bewegungsempfehlung versus schwächere Aufsichtsempfehlung bei Knie erhalten.
- Nicht empfohlen, unzureichende Evidenz, widersprüchliche Evidenz und nicht geprüft bleiben verschiedene Zustände.
- DEGAM-Expertenkonsens bekommt keinen erfundenen Buchstabengrad; GRADE und APTA-Systematik werden nicht zusammengeworfen.
- Knie-Langfassung, Evidenzbericht, Patientenfassung und NICE-Übernahmen werden nicht als unabhängige Replikationen gezählt.
- Ein Codeabgleich bestätigt weder Diagnose noch Anwendbarkeit. Geprüfte Einschränkungen werden nicht automatisch auf andere Profile übertragen.

## Befund und Planentwurf

- Unbekannte Werte werden nicht als normal, unauffällig, negativ oder freigegeben gespeichert.
- Aus einem ICD entsteht kein automatisch vollständig dosierter Plan.
- Dosierungsfelder haben eine nachvollziehbare Herkunft oder bleiben offen; keine universellen unbewiesenen Standardwerte.
- Fachliche Freigabe bleibt ohne tatsächliche Review ausstehend. Quelle, Zeit und zuständige Beurteilung einer Freigabe werden erst nach der tatsächlichen Prüfung dokumentiert.
- Ein Diagnose-/Profilwechsel überträgt nicht unbemerkt alte Planinhalte als bestätigt. Demos bleiben nach Änderungen eindeutig fiktiv.
- Die Prüffälle in `assets/prueffaelle.json` sind fachliche Abnahmeszenarien, keine ausgeführten Tests oder vollständige Validierungssuite.

## Umsetzung

Verwende vorhandene Tests. Beim ursprünglichen Heilmittel-Kompass: im App-Ordner JavaScript-Syntax und `node tests/smoke.cjs` prüfen. Bei UI-Änderungen echten Browser nutzen; die vorhandene Datei `tests/browser.cjs` benötigt Playwright und Chromium sowie eine lokal gestartete HTTP-Auslieferung. Eine neue App benötigt eigene Tests für ihre Implementierung.

Prüfe mindestens: nicht ausgefüllter Befund, klinisch unpassende Zuordnung, Profile mit abweichenden Zusatzbewertungen, kleine Bildschirme, Tastaturbedienung, Quellenzugang, Profile-/Diagnosewechsel, Demo-Kennzeichnung und einen tatsächlich erzeugten Export. Berichte simuliertes DOM und echte Browserprüfung getrennt. Ein Screenshot oder gestarteter Prozess allein ist kein Funktionstest.

## Abnahmebericht

Berichte konkret: umgesetzte Funktionen, verwendete Fachquellen, gelaufene Prüfungen, offene Daten-/Quellenlücken und Freigabestatus. Gib nicht ausgeführte Prüfungen nicht als bestanden aus. Keine Veröffentlichung oder Aktualisierung einer privaten Site ohne tatsächlich ausgeführtes und geprüftes Deployment behaupten.
