# Heilmittel-Kompass – Übergabe vom 21.10.2026

## Aktueller Stand: Version 0.7.1 (23 Profile, Rubrik „Budgetfrei verordnen“, GLA:D-Hinweis)

- 0.7.1: GLA:D-Kasten bei Knie-/Hüftarthrose und degenerativem Meniskus; Details und offene Punkte in docs/evidenz.md.

- 0.7.0: Rubrik Budgetfrei mit Kriterien, Checkliste und Nachschlagen in der KBV-Diagnoseliste (`HK_LISTE`). Offene Gegenprüfungen der Liste: docs/formaler-regelabgleich.md, Abschnitt „Budgetfrei verordnen“.

- 0.6.0: Recherche der Parallelsitzung (15 Profile, Gruppen AT/GE/SO1–SO3) eingebaut; Diagnoseliste für diese Codes ergänzt. Offene Recherchepunkte je Profil: evidence/PROFILE_ERGAENZUNG.md.


- Branch: `claude/neuaufbau-0.5` (baut auf `codex/uebergabe-2026-10-20` auf). Kein Deployment.
- App: `Heilmittel-Kompass/index.html`, eigenständig, ohne Build. Drei Skriptblöcke: `HK_DATA` (Daten mit Quellen), `HK` (Regellogik), Oberfläche.
- Anlass: In 0.4.4 standen Arbeits- und Prüfvermerke in der Oberfläche („redaktionell zugeordnet“, „keine ungeprüfte Übertragung …“). Alle sichtbaren Texte wurden neu geschrieben; Schreibregeln in `Heilmittel-Kompass/AGENTS.md`, automatische Prüfung in beiden Tests.
- Ablauf jetzt wie im Produktkonzept: Diagnose → Profil bestätigen (+ optionale, eingeklappte Befundfragen) → Gruppe/Leitsymptomatik → Heilmittel mit Leitlinienbewertung an jeder Karte → Menge/Angaben → Muster-13-Vorschau.
- Neu geprüft am 21.10.2026: Katalog CS/ZN/PN/LY, KBV-Diagnoseliste 01.01.2026, Blanko-Diagnoseliste, NVL Kreuzschmerz. Details und offene Punkte: `Heilmittel-Kompass/docs/formaler-regelabgleich.md` (Abschnitt 21.10.2026).
- Tests: `node tests/smoke.cjs`, `node tests/browser.cjs` (24 Profil-/Viewport-Fälle plus Blanko, Diagnoseliste, unbekannter Code, Demo) bestanden.

Nutzerentscheidungen vom 21.10.2026: Neuaufbau statt Überarbeitung; Gruppen CS/ZN/PN/LY mitführen ohne Leitlinienbewertung; Blankoverordnung Schulter behalten; Befundfragen optional und eingeklappt, 2–4 Fragen; neues Design.

## Nächste Schritte

1. Formale Punkte sind in 0.5.1 geklärt (siehe docs/formaler-regelabgleich.md, „Geklärt am 21.10.2026“).
2. Unabhängiger ärztlicher und physiotherapeutischer Fachreview der Texte in `HK_DATA.profile`.
3. Veröffentlichung nur auf ausdrücklichen Auftrag.

---

# Frühere Übergabe vom 20.10.2026

## Zuerst lesen

1. `Heilmittel-Kompass/AGENTS.md`
2. `Heilmittel-Kompass/docs/produktkonzept.md`
3. `evidence/ABGLEICH.md`
4. `Heilmittel-Kompass/docs/anforderungen.md` und `docs/validierung.md`

Diese Übergabe und das Produktkonzept beschreiben den zuletzt bestätigten Auftrag. Ältere Übergaben und der Befund-/Training-Skill bilden teilweise frühere Zielvorstellungen ab.

## Tatsächlicher Arbeitsstand

- Repository: https://github.com/Physio-Squad/Heilmittel-Kompass
- App: Version 0.4.4, eigenständige `Heilmittel-Kompass/index.html`, ohne Build-Schritt.
- Übergabe-Branch: `codex/uebergabe-2026-10-20`. Dieser Branch sichert den aktuellen App-, Dokumentations- und Recherchestand einschließlich der zuvor nicht committeten Änderungen. Im neuen Chat ausdrücklich diesen Branch verwenden; `main` enthält den Übergabestand nicht automatisch. Es wurde kein Website-Deployment vorgenommen.
- Die beiden Originaldateien unter `evidence/` wurden unverändert aus Branch `research/leitlinien-quellen-2026-10`, Commit `aff328c2afc17f7b4b37246c9af84c62a135cbf5`, übernommen. Herkunft und Prüfsummen: `evidence/IMPORT.json`.
- Der Rechercheimport wurde mit den vorhandenen Quellen abgeglichen. Er enthält Quellenregister und Prüfstände, noch keine vollständige Matrix extrahierter Einzelempfehlungen oder geprüfte Katalogdatenbank.

## Fortsetzung: erster formaler Teilabgleich 0.4.4

Am 20.10.2026 wurden G-BA-/KBV-Originale und ausgewählte BfArM-Seiten tatsächlich erneut abgerufen. Die unten beschriebene frühere Zugriffslücke ist für diese konkreten Quellen inzwischen geschlossen. [Formaler Originalabgleich](Heilmittel-Kompass/docs/formaler-regelabgleich.md) und [strukturierter Datensatz](evidence/FORMALER_REGELABGLEICH.json) enthalten Fundstellen, Fassungen, Prüfsummen und Grenzen.

- WS-/EX-Tabellen gelesen und visuell geprüft. WS hat 18 orientierende Einheiten; die irrtümlich aus EX übernommene Kinderregel 50 wurde bei WS entfernt. EX bleibt unter 18 Jahren bei 50, sonst 18.
- Gruppenspezifische Originalüberschriften mit getrennten Erklärungen und Katalogquelle eingebaut; keine Vorauswahl von Symptomen oder Heilmitteln aus ICD.
- Begrenzter ICD-Prüfbestand: 19 endständige Kodes gezielt geprüft, vier unterteilte Kategorien erkannt, M51.1-Kreuz-Stern-Kontext offen. Fehlender Treffer bedeutet ungeprüft; keine Format-/Präfixfreigabe.
- Kontextabhängige redaktionelle Zuordnung für alle acht Profile dokumentiert. Klinische Profilpassung bleibt zu bestätigen; Sporn, Ruptur, Insertion oder Syndesmosenverletzung nicht stillschweigend gleichsetzen.
- G-BA-Beschluss 20.08.2026 laut Originalseite noch nicht in Kraft; nicht als neue geltende LHB-Berechtigung übernommen.
- Syntax, erweiterter Smoke-Test, Datensynchronität und echte Chrome-/Playwright-Prüfung bestanden: alle bisherigen 24 Profil-/Viewport-Fälle sowie neue Regeln/Zustände und Offline-HTML-Export. Keine unabhängige Fachprüfung, kein Deployment.

**Nächster Teil:** übrige angebotene ICD-Einträge und Kontext-/Zusatzkodierung, alternative Gruppen sowie vollständige LHB-/BVB- und Blankoverordnungsbedingungen prüfen. Der vollständige diagnosebezogene Zielablauf bleibt noch umzusetzen. Der aktuelle Bericht benennt alle Grenzen; keine stillschweigende Einschränkung der acht Profile und keine pauschale Freigabe bestehender Sonderregeln.

## Bestätigter Produktauftrag

Ärztliche Entscheidungshilfe zur Verordnung physiotherapeutischer Heilmittel. Eingabe: Diagnose plus wenige Angaben zu Funktion, Beschwerden und Ziel. Ausgabe: begründeter Vorschlag mit Alternativen, ohne automatische Auswahl. Erste fachlich geprüfte Fassung: häufige muskuloskelettale Fälle; alle dafür angebotenen Regeln vollständig prüfen.

Keine pauschale Bevorzugung einer Therapieposition. Belegte Unterschiede in Nutzen und Empfehlungen transparent darstellen. KG ist nicht automatisch aktiv, MT nicht ausschließlich passiv. Klinische Interventionen und abrechenbare Heilmittelpositionen nachvollziehbar zuordnen; klinischen Nutzen und formale GKV-Verordnungsfähigkeit getrennt prüfen.

Drei klinische Kernfragen: Welche Therapie hilft? Wann ist Physiotherapie sinnvoll? Welche Zusätze lohnen sich? Autonome Behandlungssteuerung und automatische Trainingsprogression gehören derzeit nicht zum Auftrag.

Gewünschter künftiger Ablauf: Diagnose/ICD bestätigen, wenige Funktionsangaben erfragen, Diagnosegruppe und Leitsymptomatik begründen, Heilmittelvorschläge und Alternativen erläutern, ärztliche Auswahl und formale Verordnung prüfen. Dieser neue Ablauf ist noch nicht vollständig implementiert.

## Bereits umgesetzt

Acht klinische Profile: Rücken, Nacken, Kniearthrose, Hüftarthrose, Rotatorenmanschetten-Tendinopathie, Midportion-Achillessehnen-Tendinopathie, Plantarfasziitis und akute/postakute laterale Sprunggelenksdistorsion. Geltungsbereiche und Ausschlüsse beachten.

Alle klinischen Einordnungen kurz und stichpunktartig. Begriffe: Manuelle Therapie, Traktion, Massage, Kryotherapie. Hinweise zur Selbstanwendung von Wärme/Kälte wurden aus der Oberfläche entfernt. Quellenanzeige kompakt; tatsächliche Abrufdaten bleiben erhalten. Interne Prüfanmerkungen stehen in der Dokumentation statt in der Oberfläche. Klinisch relevante Unsicherheiten bleiben sichtbar.

## Nächster fachlicher Schwerpunkt

Geltende Heilmittel-Richtlinie, Physiotherapie-Katalog und ICD-10-GM-Stand anhand der Originalquellen prüfen. Für den unterstützten Umfang kontextabhängige ICD-/Diagnosegruppen-Zuordnungen, gruppenspezifische Leitsymptomatiken, individuelle Angaben, Heilmittelpositionen, Kombinationen, Mengen und angebotene Sonderfälle belastbar abbilden.

ICD, Diagnosegruppe und Leitsymptomatik sind unterschiedliche Angaben. a/b/c haben gruppenspezifische Bedeutung; sie bezeichnen keine Heilmittel oder Evidenzgrade. Keine ungeprüfte eindeutige ICD-zu-Gruppe-Tabelle und keine vollständige Validierung aus Format-/Präfixprüfungen ableiten. Exakte Originaltexte und Regeln sind noch zu verifizieren.

Die bisherige App erfüllt diese vollständige formale Prüfung noch nicht. G-BA-/KBV-Originalquellen waren beim letzten Abrufversuch am 20.10.2026 in der Sitzung nicht erreichbar. Das ist eine dokumentierte Zugriffslücke, kein Beleg für die Unverfügbarkeit der Dokumente. Erreichbarkeit bei Bedarf neu prüfen; keine Regeln erfinden.

Weitere Rechercheaufgaben: Einzelempfehlungen mit Fundstellen strukturieren; niederländische Arthrosequellen KNGF/NOV prüfen; deutschen Hüftleitlinienstatus und Schulteroriginale klären. Schlaganfall, COPD und Beckenboden aus dem importierten Register liegen außerhalb des bestätigten Startumfangs.

## Evidenz und Grenzen

14 lokale Quellen-/Dokumenteinträge sind nicht 14 unabhängige Leitlinien. Deutsche Gonarthrose-Langfassung, Evidenzbericht und Patientenfassung gehören zusammen; NICE-Übernahmen nicht als zusätzliche unabhängige Evidenz zählen. Dateinamen sind keine verlässlichen fachlichen Versionsdaten.

Deutsche Originale wurden gezielt in relevanten Abschnitten geprüft und mit den AWMF-Dateien abgeglichen; kein vollständiger Audit aller Seiten. Einzelheiten und Fundstellen: `Heilmittel-Kompass/docs/deutsche-leitlinien.md`. Importierte Quellen nicht automatisch als neu verifiziert ausgeben; vorhandene gezielte lokale Prüfungen nicht durch allgemeinere Importnotizen löschen. Quellen-Abrufdaten beim Import nicht überschreiben.

Die hochgeladenen Original-PDFs sind nicht im Repository enthalten. Links, Prüfsummen, Fundstellen und Prüfgrenzen sind dokumentiert. Der alte Skill unter `.agents/skills/befund-training/` enthält teilweise Snapshots von 0.4.1; für aktuelle Produktentscheidungen und Quellenstände die App-Dokumentation und `evidence/` verwenden.

## Technische Prüfung und Start

Für den lokalen Stand vor dieser Repository-Übergabe bestanden für Version 0.4.3 die JavaScript-Syntaxprüfung, `node tests/smoke.cjs` und echte Chromium-Browsertests für acht Profile bei 1440, 390 und 320 Pixeln. Softwaretests sind keine medizinische oder formale fachliche Freigabe.

App lokal öffnen: `Heilmittel-Kompass/index.html`. Für Browserprüfungen im App-Ordner einen Server starten (`python3 -m http.server 8000 --bind 127.0.0.1`) und separat `node tests/browser.cjs` ausführen. Der Browsertest braucht Playwright und Chromium; Installationen aus der bisherigen Umgebung werden durch den Repository-Inhalt nicht mitgeliefert.

Bei Fortsetzung zuerst Bestand lesen und einen konkreten nächsten Teil bearbeiten. Keine bereits vorliegenden Produktentscheidungen erneut erfragen. Änderungen nicht als veröffentlicht darstellen; eine Veröffentlichung ist ein gesonderter Schritt.
