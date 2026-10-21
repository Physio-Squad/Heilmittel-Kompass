# Heilmittel-Kompass

Ärztliche Entscheidungshilfe für die Verordnung physiotherapeutischer Heilmittel (GKV, Muster 13). Version 0.7.0.

**Status: Prototyp, nicht unabhängig fachlich geprüft.** Keine Patientendaten, keine Speicherung, kein ausgestelltes Rezept.

## Start

`index.html` im Browser öffnen. Alles ist eingebettet; ohne Internet fehlen nur die Webfonts und Quellenlinks. Drei fiktive Beispiele lassen sich unter dem Diagnosefeld laden.

## Ablauf

1. **Diagnose:** Suche nach Klartext oder ICD-10-Code. Geprüfte ICD-10-GM-2026-Codes sind markiert; Kategorien verlangen den vollständigen Code. Unbekannte Codes sind möglich, die Gruppe wird dann selbst gewählt.
2. **Klinische Einordnung:** Für acht muskuloskelettale Bilder wird ein Profil vorgeschlagen und muss bestätigt werden (Geltungsbereich und Ausschlüsse). Danach: Was hilft, wann Physiotherapie, weitere Maßnahmen, Quellen. Optionale Befundfragen heben Passendes hervor, wählen aber nichts aus.
3. **Diagnosegruppe und Leitsymptomatik:** Gruppe als Vorschlag, änderbar. Originaltexte des Katalogs mit kurzer Erklärung; Mehrfachauswahl und patientenindividuelle Leitsymptomatik.
4. **Heilmittel:** Bis zu drei vorrangige Heilmittel, höchstens eine Ergänzung. Jede Karte zeigt die Leitlinienbewertung. Bei gelisteten Schulterdiagnosen alternativ Blankoverordnung.
5. **Menge und Angaben:** Einheiten je Heilmittel, Frequenz, Höchst- und orientierende Menge, 12-Wochen-Verordnung bei Diagnoseliste oder Genehmigung, Hausbesuch, Therapiebericht, Dringlichkeit, Therapieziele.

Die Rubrik **Budgetfrei verordnen** (Umschalter oben) erklärt langfristigen Heilmittelbedarf, Genehmigung, besonderen Verordnungsbedarf und Blankoverordnung und schlägt Diagnosen in der KBV-Diagnoseliste nach.

Rechts (mobil unten) entsteht die Verordnung im Aufbau von Muster 13 mit offenen Punkten und Korrekturhinweisen; „Text kopieren“ übernimmt alles als Text.

Profile (23): lumbaler Rückenschmerz, nicht-spezifische Nackenschmerzen, Kniearthrose, Hüftarthrose, Rotatorenmanschetten-Tendinopathie, Midportion-Achillessehnen-Tendinopathie, Plantarfasziitis, laterale Sprunggelenksdistorsion (WS/EX); COPD, Bronchiektasen (AT); pAVK (GE); Lymphödem (LY); Parkinson, Multiple Sklerose, Schlaganfall, Querschnittlähmung (ZN); Fazialisparese, GBS/CIDP, Karpaltunnelsyndrom (PN); chronische Obstipation (SO1); Harninkontinenz der Frau (SO2); Lagerungsschwindel, periphere Vestibulopathie (SO3). Gruppe CS ist formal abgebildet, ohne Leitlinienbewertung. Befundfragen gibt es bei den WS/EX-Profilen.

## Aufbau und Tests

`index.html` enthält drei Skriptblöcke: `HK_LISTE` (KBV-Diagnoseliste), `HK_DATA` und `HK_DATA_ERG` (fachliche Daten mit Quellen; Ergänzung der übrigen Gruppen), `HK` (Regellogik ohne DOM) und die Oberfläche. Fachliche Änderungen erfolgen in `HK_DATA`.

```
node tests/smoke.cjs        # Regeln und Texte
node tests/browser.cjs      # benötigt Playwright + Chromium (CHROMIUM_EXECUTABLE)
```

## Dokumentation

| Datei | Inhalt |
|---|---|
| [Produktkonzept](docs/produktkonzept.md) | Bestätigter Zielablauf und Prüfkriterien für den Katalog-Unterbau; noch nicht vollständig umgesetzt |
| [Anforderungen](docs/anforderungen.md) | Vereinbarte Produktregeln |
| [Formaler Originalabgleich](docs/formaler-regelabgleich.md) | WS/EX, ausgewählte ICD-Kodes, Originalfundstellen und offene Regeln |
| [Verordnungslogik](docs/verordnungslogik.md) | Rezeptangaben und Sonderwege |
| [Evidenz](docs/evidenz.md) | Klinische Prioritäten, Übertragungsgrenzen |
| [Deutscher Leitlinienabgleich](docs/deutsche-leitlinien.md) | Geprüfte Fassungen, konkrete Empfehlungen und Grenzen |
| [Recherche fortsetzen](docs/recherche-fortsetzen.md) | Kopierbarer Übergabeprompt für einen anderen Chat |
| [Importierte Recherche und Abgleich](../evidence/ABGLEICH.md) | Zwei Originalregister vom Recherche-Branch, ID-Zuordnung und zusammengeführte Prüfstände |
| [Quellen übrige Diagnosegruppen](../evidence/QUELLEN_DIAGNOSEGRUPPEN.md) | Katalogübersicht aller 13 Physiotherapie-Gruppen; Leitlinienquellen für CS, ZN, PN, AT, GE, LY, SO1–SO5 (identifiziert, nicht ausgewertet) |
| [Quellen](docs/quellen.md) | Recherchequellen und Prüfstatus |
| [Entscheidungen](docs/entscheidungen.md) | Hintergrund der Gestaltung |
| [Validierung](docs/validierung.md) | Prüfstand und offene Risiken |
| [Übergabe](../UEBERGABE.md) | Aktueller Stand und nächste Schritte |
| [Changelog](CHANGELOG.md) | Projektentwicklung |

## Prüfung

Mit Node.js: `node tests/smoke.cjs`. Die Prüfung verwendet einen simulierten DOM und ersetzt keine echte Browserprüfung oder fachliche Freigabe. Ein ergänzender echter Chromium-Test ist in `tests/browser.cjs` enthalten; Ausführung und geprüfter Umfang stehen in `docs/validierung.md`.

## Betrieb und Cloud

Dieses GitHub-Repository speichert den Code und die Dokumentation. Es veröffentlicht die App nicht automatisch und aktiviert noch keine Codex-Cloud-Umgebung. Eine ältere private Site existiert; siehe Übergabe. Keine Secrets, echten Patientenfälle oder fremden Original-PDFs ins Repository aufnehmen.

Eine Softwarelizenz wurde noch nicht festgelegt. Rechte an verlinkten Leitlinien und Veröffentlichungen verbleiben bei den jeweiligen Rechteinhabern.


## Begrenzter formaler Prüfbestand 0.4.4

WS-/EX-Originaltexte und ausgewählte ICD-10-GM-2026-Kodes sind gezielt geprüft; übrige Einträge und Sonderregeln bleiben offen. Der strukturierte Regelabgleich liegt unter `../evidence/FORMALER_REGELABGLEICH.json`. Nach Änderungen daran mit `node scripts/sync-formal-data.cjs` in die eigenständige HTML übernehmen; `--check` prüft die Synchronität. Der Offlinebetrieb braucht diesen Pflegeschritt beim Anwenden der App nicht.

Der oben beschriebene Ablauf ist der bisherige Prototypablauf. Der bestätigte künftige Einstieg über Diagnose plus wenige Funktionsangaben ist im Produktkonzept beschrieben und noch nicht vollständig implementiert.
