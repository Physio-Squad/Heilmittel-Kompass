# Heilmittel-Kompass

Browserbasierter Arbeitsstand zur klinischen Orientierung, Auswahl physiotherapeutischer Heilmittel und Vorbereitung ärztlicher GKV-Verordnungsangaben. Version 0.4.3, weiterentwickelt aus dem Heilmittel-Assistenten.

**Status: Prototyp, keine vollständig fachlich validierte Verordnungssoftware.** Keine Patientendaten erforderlich. Keine Diagnoseautomatik und kein ausgestelltes Rezept.

## Start

`index.html` herunterladen und im Browser öffnen. CSS, JavaScript und ein begrenzter Diagnosedatenbestand sind eingebettet. Die Auswahl funktioniert offline; externe Quellen benötigen Internet. Über „Demoversion öffnen“ lassen sich drei fiktive Fälle laden.

## Ablauf

Klinischen Bereich bestätigen → Therapie, Bedarf an Anleitung und Zusätze einordnen → ärztlich gestellte Diagnose/ICD → Diagnosegruppe → Leitsymptomatik → Heilmittel/Kombination → Menge und Ergebnis. Die klinische Orientierung funktioniert auch vor dem Diagnoseeintrag. Therapieziele sind optional. Kopieren und HTML-Download sind vorhanden; Drucken ist entfernt.

- Mehrere Katalog-Leitsymptomatiken oder alternativ individueller Freitext.
- Hauptheilmittel allein oder mit Ergänzung; Ergänzungsmenge separat.
- Mehrere Hauptheilmittel nur im aufklappbaren Ausnahmebereich, mit Mengenaufteilung.
- Keine KG-Gruppe; KG-ZNS optional und nie automatisch ausgewählt.
- Ausgewählte Sonderwege und Schulter-Blankoverordnung.
- Klinische Orientierung für acht bestätigte Geltungsbereiche: lumbaler Rückenschmerz, nicht-spezifische Nackenschmerzen, Kniearthrose, Hüftarthrose, Rotatorenmanschetten-Tendinopathie, Midportion-Achillessehnen-Tendinopathie, Plantarfasziitis und akute/postakute laterale Sprunggelenksdistorsion.
- Drei Fragen pro Bereich: Welche Therapie hilft? Wann ist Physiotherapie sinnvoll? Welche Zusätze lohnen sich? Keine Behandlungssteuerung.
- Quellen, Original-Empfehlungsstärke und widersprüchliche Bewertungen einsehbar. Deutsche Originalleitlinien zu Kniearthrose und nicht-spezifischen Nackenschmerzen eingearbeitet; deutscher Hüftabgleich offen. Ältere Quellen ausdrücklich gekennzeichnet.
- Drei dauerhaft gekennzeichnete fiktive Demofälle.

## Dokumentation

| Datei | Inhalt |
|---|---|
| [Produktkonzept](docs/produktkonzept.md) | Bestätigter Zielablauf und Prüfkriterien für den Katalog-Unterbau; noch nicht vollständig umgesetzt |
| [Anforderungen](docs/anforderungen.md) | Vereinbarte Produktregeln |
| [Verordnungslogik](docs/verordnungslogik.md) | Rezeptangaben und Sonderwege |
| [Evidenz](docs/evidenz.md) | Klinische Prioritäten, Übertragungsgrenzen |
| [Deutscher Leitlinienabgleich](docs/deutsche-leitlinien.md) | Geprüfte Fassungen, konkrete Empfehlungen und Grenzen |
| [Recherche fortsetzen](docs/recherche-fortsetzen.md) | Kopierbarer Übergabeprompt für einen anderen Chat |
| [Importierte Recherche und Abgleich](../evidence/ABGLEICH.md) | Zwei Originalregister vom Recherche-Branch, ID-Zuordnung und zusammengeführte Prüfstände |
| [Quellen](docs/quellen.md) | Recherchequellen und Prüfstatus |
| [Entscheidungen](docs/entscheidungen.md) | Hintergrund der Gestaltung |
| [Validierung](docs/validierung.md) | Prüfstand und offene Risiken |
| [Übergabe](docs/uebergabe.md) | Weiterarbeit in der Cloud |
| [Changelog](CHANGELOG.md) | Projektentwicklung |

## Prüfung

Mit Node.js: `node tests/smoke.cjs`. Die Prüfung verwendet einen simulierten DOM und ersetzt keine echte Browserprüfung oder fachliche Freigabe. Ein ergänzender echter Chromium-Test ist in `tests/browser.cjs` enthalten; Ausführung und geprüfter Umfang stehen in `docs/validierung.md`.

## Betrieb und Cloud

Dieses GitHub-Repository speichert den Code und die Dokumentation. Es veröffentlicht die App nicht automatisch und aktiviert noch keine Codex-Cloud-Umgebung. Eine ältere private Site existiert; siehe Übergabe. Keine Secrets, echten Patientenfälle oder fremden Original-PDFs ins Repository aufnehmen.

Eine Softwarelizenz wurde noch nicht festgelegt. Rechte an verlinkten Leitlinien und Veröffentlichungen verbleiben bei den jeweiligen Rechteinhabern.
