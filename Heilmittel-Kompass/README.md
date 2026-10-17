# Heilmittel-Kompass

Browserbasierter Arbeitsstand zur Auswahl physiotherapeutischer Heilmittel und Vorbereitung ärztlicher GKV-Verordnungsangaben. Übernommen aus dem Heilmittel-Assistenten, Version 0.3.

**Status: Prototyp, keine vollständig fachlich validierte Verordnungssoftware.** Keine Patientendaten erforderlich. Keine Diagnoseautomatik und kein ausgestelltes Rezept.

## Start

`index.html` herunterladen und im Browser öffnen. CSS, JavaScript und ein begrenzter Diagnosedatenbestand sind eingebettet. Die Auswahl funktioniert offline; externe Quellen benötigen Internet. Über „Demoversion öffnen“ lassen sich drei fiktive Fälle laden.

## Ablauf

Ärztlich gestellte Diagnose/ICD → Diagnosegruppe → Leitsymptomatik → Heilmittel/Kombination → Menge, Rahmen und gut lesbares Ergebnis. Therapieziele sind optional. Kopieren und HTML-Download sind vorhanden; Drucken ist entfernt.

- Mehrere Katalog-Leitsymptomatiken oder alternativ individueller Freitext.
- Hauptheilmittel allein oder mit Ergänzung; Ergänzungsmenge separat.
- Mehrere Hauptheilmittel nur im aufklappbaren Ausnahmebereich, mit Mengenaufteilung.
- Keine KG-Gruppe; KG-ZNS optional und nie automatisch ausgewählt.
- Ausgewählte Sonderwege und Schulter-Blankoverordnung.
- Klinische Orientierung für drei ausdrücklich bestätigte Geltungsbereiche.
- Drei dauerhaft gekennzeichnete fiktive Demofälle.

## Dokumentation

| Datei | Inhalt |
|---|---|
| [Anforderungen](docs/anforderungen.md) | Vereinbarte Produktregeln |
| [Verordnungslogik](docs/verordnungslogik.md) | Rezeptangaben und Sonderwege |
| [Evidenz](docs/evidenz.md) | Klinische Prioritäten, Übertragungsgrenzen |
| [Quellen](docs/quellen.md) | Recherchequellen und Prüfstatus |
| [Entscheidungen](docs/entscheidungen.md) | Hintergrund der Gestaltung |
| [Validierung](docs/validierung.md) | Prüfstand und offene Risiken |
| [Übergabe](docs/uebergabe.md) | Weiterarbeit in der Cloud |
| [Changelog](CHANGELOG.md) | Projektentwicklung |

## Prüfung

Mit Node.js: `node tests/smoke.cjs`. Die Prüfung verwendet einen simulierten DOM und ersetzt keine echte Browserprüfung oder fachliche Freigabe.

## Betrieb und Cloud

Dieses GitHub-Repository speichert den Code und die Dokumentation. Es veröffentlicht die App nicht automatisch und aktiviert noch keine Codex-Cloud-Umgebung. Eine ältere private Site existiert; siehe Übergabe. Keine Secrets, echten Patientenfälle oder fremden Original-PDFs ins Repository aufnehmen.

Eine Softwarelizenz wurde noch nicht festgelegt. Rechte an verlinkten Leitlinien und Veröffentlichungen verbleiben bei den jeweiligen Rechteinhabern.
