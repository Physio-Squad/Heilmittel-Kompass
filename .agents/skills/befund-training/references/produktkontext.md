# Produktkontext und bestätigte Entscheidungen

Stand: 19.10.2026. Diese Zusammenstellung überträgt den Kenntnisstand aus Heilmittel-Kompass 0.4.1 auf den neuen Auftrag, einen wiederverwendbaren Skill für eine Befund- und Trainings-App zu erstellen. Eine neue App wurde damit noch nicht implementiert oder fachlich freigegeben.

## Bestätigte Wünsche

- Mehrwert gegenüber einer üblichen Arztsoftware: klinische Entscheidungshilfe statt nur Zusammenstellung verordnungsfähiger Leistungen.
- Leitlinien zu häufigen Beschwerden auswerten; möglichst aktuell, deutsche, US-amerikanische und niederländische Quellen bevorzugen.
- Drei Kernfragen: Welche konkrete Therapie hilft? Wann ist Physiotherapie sinnvoll beziehungsweise wann können Eigenübungen/Beratung ausreichen? Welche Zusätze lohnen sich?
- Behandlungssteuerung und Verlaufskontrollfunktionen im bisherigen Ausbau vorerst zurückgestellt.
- Verständliche deutsche Sprache, wenige Schritte, Quellen und Unsicherheit nachvollziehbar. Kein klinisches Ranking aus ICD allein.

Der neue Auftrag nennt eine **Befund- und Trainings-App**. Befundstruktur und fachlich prüfbare Trainingsplanentwürfe sind deshalb sinnvolle übertragbare Arbeitsmittel. Zielgruppe, neue technische Architektur, Speicherung und konkrete weitere Funktionen wurden noch nicht festgelegt. Behandle entsprechende Vorschläge als Vorschläge. Frage bei einem späteren Umsetzungsauftrag nur nach tatsächlich entscheidungsrelevanten offenen Angaben; arbeite parallel am unabhängigen Teil weiter.

## Vorhandener Ausgangsstand

Das Repository enthält den maßgeblichen entpackten App-Ordner `Heilmittel-Kompass/` mit `index.html`, Dokumentation und Tests. Daneben liegen ältere HTML-/ZIP-Artefakte; sie sind nicht der aktuelle Arbeitsstand. Im ursprünglichen Checkout lautet der App-Pfad `/workspace/Heilmittel-Kompass/Heilmittel-Kompass`; andere Projekte müssen ihre tatsächlichen Pfade selbst ermitteln.

- Version 0.4.1; eigenständige HTML mit eingebetteten Daten, ohne Laufzeitpakete oder Build.
- Acht manuell bestätigte Profile: Rücken, nicht-spezifischer Nackenschmerz, Kniearthrose, Hüftarthrose, Rotatorenmanschetten-Tendinopathie, Midportion-Achillessehne, Plantarfasziitis und akute/postakute laterale Sprunggelenksdistorsion.
- GKV-Verordnung als getrennte Ebene; begrenzte Diagnosedaten und nicht vollständig validierte Sonderregeln.
- Drei fiktive Demos: Rücken (42 Jahre), Kniearthrose (68), Schulter (51). Sechs Einheiten und 1–2/Woche sind Demonstrationswerte, keine klinischen Standarddosen.
- Syntax, Node-Smoke-Test und echter Chromium-Test für 24 Profil-/Viewport-Kombinationen, Demos, Quellen und Export wurden im Ausgangsstand bestanden. Das validiert keine neu erstellte App.
- Keine unabhängige fachliche Freigabe, kein vollständiger Evidenz-/Datenbankaudit. Änderungen wurden nicht auf die ältere private Site veröffentlicht.

## Bisherige Heilmittel-Produktregeln

Diese Regeln betreffen die vorhandene **Verordnungsfunktion**, nicht jedes denkbare Trainingsangebot:

- Keine KG-Gruppe in der Auswahl; KG-ZNS nur optional bei passender Zuordnung, nicht automatisch bei neurologischem ICD.
- Ergänzungen als Kombination mit Hauptheilmittel zeigen; ohne Ergänzung bleibt möglich. Das ist eine bewusste Produktauswahl, keine allgemeine Aussage über alle formalen Möglichkeiten.
- Mehrere Hauptheilmittel organisatorisch als Ausnahme erklären, nicht pauschal als unzulässig. Einheiten aufteilen; Ergänzungsmenge gesondert.
- MT-Qualifikation und praktische Terminverfügbarkeit erklären, ohne daraus Unwirksamkeit oder generelle Entbehrlichkeit abzuleiten. Manuelle Therapie ist nicht zwangsläufig ausschließlich passive Behandlung.
- Freiwillige Therapieziele, keine automatische Vorbelegung bei echten Fällen. Kopieren und HTML-Export; Druckfunktion war ausdrücklich entfernt.
- Bestehendes privates Site-Projekt bei einer beauftragten Veröffentlichung wiederverwenden. Repository-Import und gespeicherte Konfiguration sind kein Deployment.

## Fachlicher Stand und Lücken

Deutsche Originaltexte für Gonarthrose und nicht-spezifische Nackenschmerzen wurden vom Nutzer bereitgestellt und mit offiziellen AWMF-Dateien abgeglichen. Gonarthrose-Langfassung, Patientenfassung und Evidenzbericht sind Bestandteile derselben Leitlinie. Ein deutscher Koxarthrose-Text lag nicht zur Prüfung vor.

Keine vollständige Auswertung für neurologische Erkrankungen, Lymphödeme, postoperative Phasen, patellofemoralen Schmerz oder chronische Sprunggelenksinstabilität. Die zuletzt genannten Bereiche waren Rechercheziele, keine fertig implementierten Profile. Ebenso fehlen ein vollständiger Übungs-/Befundtestkatalog und validierte Dosierungs-/Progressionsregeln.

## Herkunft dieses Pakets

Die Dateien `quellen.md`, `evidenz.md`, `deutsche-leitlinien.md` sowie `verordnungslogik.md` und `validierung.md` sind eigene Projektdokumentation als Wissenssnapshot. Historische Abschnitte können frühere offene Abrufe erwähnen; der nachfolgende Stand 0.4.1 und die dokumentierten Einzelquellen sind maßgeblich. `klinische-profile.json` enthält die acht Profile und 14 Quellen-/Dokumenteinträge des App-Stands 0.4.1. Es ersetzt keine Aktualitätsprüfung. Original-PDFs, Chatverläufe, Patienten- und Zugangsdaten werden nicht mitgeliefert.
