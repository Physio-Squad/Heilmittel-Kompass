# Formaler Originalabgleich: ICD, WS und EX

Gezielt geprüft am **20.10.2026** auf Branch `codex/uebergabe-2026-10-20`. Erster abgeschlossener Teilabgleich, **keine vollständige Verordnungsdatenbank und keine unabhängige fachliche Freigabe**. Der vereinbarte Umfang von acht muskuloskelettalen Profilen bleibt bestehen. Klinische Empfehlungen und ihre bisherigen Abrufdaten wurden nicht verändert.

Maschinenlesbare Befunde, Originaltexte, getrennte Erklärungen, Fundstellen und SHA-256 der heruntergeladenen Dateien: [FORMALER_REGELABGLEICH.json](../../evidence/FORMALER_REGELABGLEICH.json). Die vollständigen Originaldateien und extrahierten Texte bleiben außerhalb des Repositorys. Die Prüfsumme belegt die verwendete Datei, nicht ihre fachliche Richtigkeit.

## Quellen und zeitliche Geltung

| ID | Tatsächlich eingesehen | Fassung / Fundstellen |
|---|---|---|
| R1 | [G-BA Richtlinienseite](https://www.g-ba.de/richtlinien/12/) | Zeigt Änderung 15.05.2025, in Kraft 05.08.2025; verlinkt die folgenden PDFs. |
| R2 | [Heilmittel-Richtlinie](https://www.g-ba.de/downloads/62-492-3865/HeilM-RL_2025-05-15_iK-2025-08-05.pdf) | Titelseite bestätigt die Fassung. Gezielt §§ 3–4, 7, 12, 13 Abs. 2 k/l, 19 Abs. 2 und Abs. 3 Nr. 3a/4/7, 24 geprüft; Sondergrundlagen §§ 7 Abs. 6–7 und 13a nur teilweise. Kein Audit aller 104 Seiten. |
| R3 | [Heilmittelkatalog](https://www.g-ba.de/downloads/17-98-3064/HeilM-RL_2024-05-16_Heilmittelkatalog.pdf) | Dateifassung 16.05.2024, weiterhin auf R1 verlinkt. WS Druckseite 61/PDF-Seite 2, EX Druckseite 62/PDF-Seite 3 vollständig gelesen und zusätzlich als gerenderte Tabellen visuell geprüft. Die abweichende Jahreszahl ist kein Beleg für eine veraltete WS-/EX-Regel. |
| R4 | [KBV PraxisWissen Heilmittel](https://www.kbv.de/documents/infothek/publikationen/praxiswissen/praxiswissen-heilmittel.pdf) | Aktualisierte Ausgabe 2026; Druck-/PDF-Seiten 8–11, insbesondere Mehrfachsymptomatik, individueller Text und Mengenaufteilung. Ergänzende Ausfüllhilfe; normative Grundlage bleibt R2/R3. |
| ICD26 | [BfArM ICD-10-GM 2026](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2026/index.htm) | Amtliche HTML-Systematik, Seitenstand 12.09.2025. Ausgewählte Kodes und Unterteilungen in den Blöcken M15–M19, M50–M54, M70–M79 und S90–S99 geprüft. Kein vollständiger Import des Jahrgangs und keine vollständige Kodierregelprüfung. |

G-BA-[Beschluss 7977 vom 20.08.2026](https://www.g-ba.de/beschluesse/7977/) wurde auf der Originalseite am Abrufstag als **„noch nicht in Kraft“** ausgewiesen. Die [Änderungsübersicht](https://www.g-ba.de/beschluesse/letzte-aenderungen/?aufgabenbereich=34&unterausschuss=6) berichtet Nichtbeanstandung durch das BMG am 30.09.2026 und ausstehendes Inkrafttreten nach Bundesanzeiger-Veröffentlichung. Diese Erweiterung der LHB-Liste wird daher hier nicht als geltende neue Listenberechtigung übernommen. Das ist eine datierte Prüfung der angezeigten amtlichen Angaben, keine Behauptung, zukünftige Änderungen auszuschließen.

Die früher dokumentierte Zugriffslücke ist für die hier tatsächlich abgerufenen Quellen geschlossen. Sie bleibt ein historischer Abrufbefund; andere Quellen werden dadurch nicht nachträglich geprüft.

## ICD und kontextabhängige Diagnosegruppe

§ 3 Abs. 5, § 4 und § 12 Abs. 1 HeilM-RL sowie die Katalogvorbemerkung verlangen die Betrachtung von Erkrankung, Schädigung/Funktionsstörung, Aktivität und Therapieziel. Die Katalog-Beispieldiagnosen begründen keine amtliche eindeutige ICD-zu-Gruppen-Tabelle. Die folgenden Zuordnungen sind **redaktionelle Vorschläge unter Bedingungen**:

| Profil | Geprüfte Kodebeispiele | Vorschlag bei passendem Behandlungsanlass / notwendige Abgrenzung |
|---|---|---|
| Lumbaler Rückenschmerz | M54.5 Kreuzschmerz | WS bei bestätigtem nicht-spezifischem lumbalem Profil und relevanter Funktionsstörung; spezifische Ursache/Warnzeichen ausschließen. |
| Nicht-spezifischer Nackenschmerz | M54.2 Zervikalneuralgie | WS; Kode allein bestätigt die nicht-spezifische Population nicht. Bandscheibenschaden als spezifische Ursache getrennt behandeln. |
| Kniearthrose | M17.0/M17.1 | EX bei behandlungsrelevanter Gelenk-/Muskelfunktionsstörung. Beidseitige versus sonstige primäre Arthrose unterscheiden. |
| Hüftarthrose | M16.0/M16.1 | EX unter entsprechender funktioneller Voraussetzung; keine Aussage zur noch offenen deutschen klinischen Hüftquelle. |
| Rotatorenmanschetten-Tendinopathie | M75.1/M75.4 | EX nur bei bestätigtem Profil. M75.1 umfasst auch nichttraumatische vollständige/unvollständige Rupturen; M75.4 bezeichnet Impingement. Beide bestätigen das begrenzte Tendinopathieprofil nicht allein. |
| Midportion-Achillessehnen-Tendinopathie | M76.6 | EX; Original nennt auch Bursitis subachillea als Inklusivum. Midportion, Insertion, Bursitis und Ruptur nicht gleichsetzen. |
| Plantarfasziitis | M72.2/M77.3 | EX bei tatsächlich bestätigter Plantarfasziitis und relevanter Funktionseinschränkung. M72.2 heißt „Fibromatose der Plantarfaszie [Ledderhose-Kontraktur]“ und enthält Fasciitis plantaris. M77.3 heißt Kalkaneussporn; Sporn und Ledderhose-Diagnose bestätigen das Profil nicht. |
| Akute/postakute laterale Sprunggelenksdistorsion | S93.40/S93.42/S93.48 | EX; betroffene Strukturen, Verlauf und laterales Profil ärztlich bestätigen. S93.42 nennt Lig. calcaneofibulare. S93.41 (Lig. deltoideum) und S93.43 (distale tibiofibulare Bänder) sind ebenfalls endständig, gehören aber nicht pauschal zur lateralen Profilpopulation. |

Originalstellen: [M15–M19](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2026/block-m15-m19.htm), [M50–M54](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2026/block-m50-m54.htm), [M70–M79](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2026/block-m70-m79.htm), [S90–S99](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2026/block-s90-s99.htm); jeweils konkreter Kode und gegebenenfalls Oberkategorie/Modifikator. Zusammengesetzte S93-Unterkodetitel sind im Datensatz kenntlich gemacht.

Der Datensatz unterscheidet **19 gezielt geprüfte endständige Kodes**, **vier nicht endständige Kategorien** (M54.8, M54.9, M75, S93.4) und **einen offenen Kodierkontext** (M51.1† mit Verweis auf G55.1*). Eine Kategorie ist kein vollständiger Kode. Bei M51.1 wird aus dem Auffinden im Verzeichnis keine abgeschlossene Zusatzkodierprüfung abgeleitet. Alle anderen Codes bleiben ungeprüft; ein fehlender Treffer beweist keine Ungültigkeit. Die Formatprüfung der eigenen Eingabe ist weiterhin nur eine Eingabehilfe. Zusatzkennzeichen, vollständige Kodierregeln und fachliche Passung sind damit nicht erledigt.

Andere Gruppen oder Ausnahmen können je nach konkretem Behandlungsanlass relevant sein. Sie werden weder automatisch ausgeschlossen noch durch diesen WS-/EX-Abgleich freigegeben. Die App-Präfixprüfung des klinischen Profils bleibt lediglich ein Hinweis auf offensichtliche Abweichungen, keine ICD-Validierung oder klinische Bestätigung.

## Leitsymptomatik

Die JSON-Datei trennt gruppenspezifischen **Originaltext**, **Originalbeispiele** und **redaktionelle Erklärung**. Die App zeigt bei WS/EX die Originalüberschriften mit einer getrennten kurzen Erklärung:

- WS a: Schädigung der Bewegungssegmente; Beispiele betreffen discoligamentäre Strukturen, Beweglichkeit/Stabilität und lokalen/(pseudo)-radikulären Schmerz.
- WS b: Schädigung/Störung der Muskelfunktion; Beispiele umfassen Kraft/Ausdauer/Koordination, Tonus und sekundäre Schmerzen.
- EX a: Schädigung/Störung der Gelenkfunktion einschließlich Kapsel-Band-Apparat und umgreifender Muskulatur; Beispiele betreffen Beweglichkeit/Stabilität und Schmerz.
- EX b: Schädigung/Störung der Muskelfunktion; Beispiele umfassen Kraft/Ausdauer/Koordination, Tonus und Schmerzen.
- In beiden Gruppen x: patientenindividuelle Symptomatik. Ein c ist dort nicht vorgesehen.

Buchstaben bezeichnen weder Heilmittel noch Evidenzgrade. Nach § 13 Abs. 2 l dürfen mehrere Leitsymptomatiken angegeben werden, als Buchstaben oder Klartext. Alternativ ist eine handlungsleitende individuelle Beschreibung möglich, die zur Gruppe gehört und den Katalogbeispielen vergleichbar ist. KBV S. 9–10 bestätigt, dass dann keine zusätzliche Katalog-Leitsymptomatik erforderlich ist. Die vorhandene App-Mehrfachauswahl und der alternative x-Weg entsprechen dieser begrenzten Strukturprüfung; eine Kombination von a/b mit x wird dadurch nicht als generell verboten bewertet. Die App prüft bei x nur, ob Text vorhanden ist. Vergleichbarkeit und Handlungsrelevanz bleiben ärztlich zu bestätigen; ein Therapieziel ersetzt sie nicht.

## Heilmittel und Mengen

WS und EX listen KG, MT und KG-Gerät jeweils als vorrangig. Die vollständigen Listen einschließlich nicht angebotener Maßnahmen stehen getrennt von der bewussten App-Auswahl in der JSON-Datei. WS enthält Traktion als Ergänzung, EX enthält sie nicht. Beide enthalten Wärme, Kälte, Elektrotherapie und hydroelektrische Bäder. Fango und Ultraschall sind anhand § 24 Abs. 2 als Wärmeverfahren zugeordnet; klinischer Zusatznutzen wird separat bewertet. Keine neue Heilmittelposition wird durch diesen Abgleich automatisch angeboten.

§ 19 beschreibt KG mit mobilisierenden und stabilisierenden Übungen/Techniken; auch Massagetechniken können dazugehören. KG bedeutet daher nicht ausschließlich aktiv. KG-Gerät verlangt spezielle medizinische Trainingsgeräte und unmittelbare Anleitung/Aufsicht/Kontrolle, grundsätzlich als parallele Einzelbehandlung bis drei Personen. Das ist nicht die im Produkt ausgeschlossene KG-Gruppe. MT beschreibt gezielte impulslose Mobilisation oder Weichteiltechniken bei reversiblen Schädigungen und zur Schmerzlinderung. Weitergehende konkrete Leistungsinhalte und Qualifikationsregeln müssen am aktuellen Vertrag geprüft werden. Aus der Kataloglistung entsteht keine klinische KG-/MT-/KG-Gerät-Rangfolge.

| Regel | Geprüftes Ergebnis / Fundstelle |
|---|---|
| Reguläre Höchstmenge | WS/EX bis 6 je Verordnung, Katalog S. 61–62; keine pauschale Sollmenge. |
| Orientierende Menge | WS 18; EX 18, unter 18 Jahren 50. Die App hatte irrtümlich auch WS 50 zugeordnet; in 0.4.4 korrigiert. Bei EX und unbekanntem Alter zeigt die App die offene Altersbedingung. |
| Weitere Verordnungen | Orientierende Menge ist keine starre Obergrenze; medizinische Gründe für weitere Verordnungen in der Patientendokumentation festhalten (§ 7 Abs. 4). |
| Aufteilung | Bis drei unterschiedliche vorrangige Heilmittel, soweit gruppenspezifisch vorgesehen (§ 12 Abs. 2); Gesamtmenge aufteilen, nicht je Position ausschöpfen. |
| Ergänzung | Höchstens eine medizinisch erforderliche Ergänzung (§ 12 Abs. 3). Menge höchstens Summe der vorrangigen Einheiten (§ 7 Abs. 5); sie zählt nicht zur orientierenden Menge (§ 7 Abs. 2). KBV S. 11: 3 MT + 3 KG + 3 Wärme ergeben 6 vorrangige Einheiten. |
| Isolierte Ergänzung | ET/ES/US unter den jeweiligen Katalogbedingungen auch isoliert möglich (§ 12 Abs. 3). Die App bietet Ergänzungen entsprechend bestehender Produktentscheidung zusammen mit Hauptheilmittel an; das ist kein formales Verbot der Ausnahmen. |
| Frequenz | WS/EX Empfehlung 1–3/Woche; medizinisch begründete Abweichung möglich (§ 12 Abs. 1). Keine individuelle Frequenzempfehlung allein aus ICD. |
| Massage/standardisierte Kombination | Jeweils bis 12 Einheiten je Verordnungsfall; die Begrenzung besteht auch jenseits orientierender Mengen und bei Zwölf-Wochen-Verordnungen (§ 12 Abs. 6). Standardkombination nur unter § 12 Abs. 4/§ 25; nicht gleichzeitig mit Einzelheilmittel (§ 12 Abs. 5). In der App hier nicht neu angeboten. |

## Umsetzung und verbleibender Auftrag

Version 0.4.4 korrigiert WS, übernimmt die WS-/EX-Originalüberschriften mit separater Erklärung und zeigt den zugehörigen Katalognachweis kompakt. Ein eingebetteter begrenzter ICD-Prüfbestand unterscheidet geprüften Kode, unterteilte Kategorie und offenen/unbekannten Status; keine Bestätigung durch Präfix oder Format. Weitere Datenbankeinträge bleiben erhalten und ausdrücklich ungeprüft. Sonderwege erhalten einen offenen Prüfhinweis, auch wenn frühere Listeneinträge Mengenberechnungen ermöglichen. Ergebnis und Kopiertext behaupten keine formale Gesamtprüfung. Vorschläge werden nicht automatisch zu Heilmittelauswahlen.

Vor Freigabe fehlen weiterhin:

1. Alle übrigen angebotenen ICD-Zeilen, Kodier-/Zusatzkennzeichen, klinischer Kontext und vollständige alternative Diagnosegruppen-Zuordnungen.
2. LHB/BVB einschließlich Zweitcode, Alter, Fristen und Bedingungen; der aktuelle Teilabgleich ersetzt keine Listenprüfung.
3. Blankoverordnung: aktuelle Vertragsliste, Ampel, Ausnahmen, Mengen/Tagelimits und genaue Fristberechnung. Allgemeine Richtliniengrundlagen allein reichen nicht.
4. Andere Gruppen und Spezialleistungen (CS/ZN/PN/LY, MLD, KG-ZNS, Qualifikations-/Vertragsdetails).
5. Vollständiger diagnosebezogener Produktablauf mit wenigen Funktionsfragen und ärztlich bestätigten Vorschlägen/Alternativen.
6. Unabhängiger ärztlicher/physiotherapeutischer Fachreview. Softwareprüfungen bestätigen Verhalten, keine medizinische oder rechtliche Freigabe.


## Fortsetzung 21.10.2026 (Version 0.5.0)

Zusätzlich abgerufen und in `HK_DATA` übernommen:

| Quelle | Abgerufen | Übernommen |
|---|---|---|
| [G-BA Heilmittelkatalog](https://www.g-ba.de/downloads/17-98-3064/HeilM-RL_2024-05-16_Heilmittelkatalog.pdf), S. 63–65, 68 | 21.10.2026 | CS, ZN, PN, LY: Leitsymptomatiken, vorrangige/ergänzende Heilmittel, Höchstmengen (CS/LY 6, ZN/PN 10), orientierende Mengen (CS 18, ZN/PN/LY 30, ZN unter 18 Jahren 50), MLD-Zeiten und Kompressions-Fußnote. Inhalt über eine Textzusammenfassung des Originals erfasst; Leitsymptomatik-Wortlaut bei ZN/PN/LY b/c vor Freigabe am PDF gegenlesen. |
| [KBV Heilmittel-Diagnoseliste](https://www.kbv.de/documents/praxis/verordnungen/heilmittel/heilmittel-diagnoseliste.pdf), Stand 01.01.2026 | 21.10.2026 | Gelistet: G35.0/.1-/.2-/.3-/.9, G20.1-/G20.2-, I89.01/.02/.04/.05, E88.20–22 (befristet bis 31.12.2027; E88.20 nur mit KPE), M75.1 (EX), M50.0/M51.0 mit G99.2, M50.1/M51.1 mit G55.1. Nicht gelistet: M54, M16, M17, M76, M72, M77, S93, G62, G56, M79.7, I89.00/.03. Ob ein Eintrag LHB oder BVB ist, ließ sich aus dem Text nicht je Zeile bestimmen; die App behandelt beide gleich (Verordnung für bis zu 12 Wochen). Fristen bei M50/M51 nicht eindeutig zuordenbar; die App verweist dafür auf die Liste. |
| [KVWL Diagnoseliste Blankoverordnung](https://www.kvwl.de/fileadmin/user_upload/pdf/Mitglieder/Verordnung/Heilmittel/Diagnoseliste_Indikationen_Blankoverordnung.pdf) | 21.10.2026 | Vollständiger Abgleich der App-Liste: keine Abweichung. Z96.60 nur mit Z98.8(8); M24.41 auch mit Z98.8 gelistet. |
| [KVWL PraxisInfo Blankoverordnung](https://www.kvwl.de/fileadmin/user_upload/pdf/Mitglieder/Verordnung/Heilmittel/PraxisInfo_Heilmittel_Blankoverordnung.pdf), Stand 10/2024 | 21.10.2026 | 16 Wochen ab Ausstellung, Unterbrechung verlängert nicht; Heilmittel/Menge/Frequenz durch Therapiepraxis; Wirtschaftlichkeitsverantwortung bei der Praxis; Folgeverordnung durch Arzt. Leitsymptomatik bleibt in der App Pflichtangabe (Muster 13); vor Freigabe am Vertragstext bestätigen. |
| [NVL Nicht-spezifischer Kreuzschmerz](https://register.awmf.org/assets/guidelines/nvl-007k_S3_Kreuzschmerz_2018-02-abgelaufen.pdf), Kurzfassung | 21.10.2026 | Empfehlungen 4-2, 4-3, 5-1 bis 5-29, 9-1 für das Rückenprofil. Gültigkeit laut Dokument bis 03/2022, in Überarbeitung; in der App so gekennzeichnet. |

### Geklärt am 21.10.2026 (Version 0.5.1)

| Punkt | Ergebnis | Quelle |
|---|---|---|
| Leitsymptomatik CS/ZN/PN/LY | Wortlaut bestätigt. CS nur a „chronische Schmerzen“. LY b lautet „Schädigung der Haut“. | Heilmittelkatalog S. 63–65, 68 |
| MLD-30/45/60 | MLD-30: Stadium I an 1–2 Körperteilen oder II an 1. MLD-45: II an 1–2, III an 1, ausnahmsweise I an 2 bei kurzfristigem Bedarf. MLD-60: II an 2 oder III an 1–2. Ohne Zeitvorgabe: Stadium als ICD-Code angeben. Körperteile nicht auf der Verordnung. | HeilM-RL § 18 Abs. 2 Nr. 7 |
| 12 Wochen | LHB (§ 8) und BVB: bis 12 Wochen; Höchstmenge und orientierende Menge nicht bindend; Einheiten nach Frequenz, bei Spanne höchster Wert. Hinweise der Liste wie „Akutereignis“ nicht bindend, Alterskriterien schon. | HeilM-RL § 7 Abs. 6–7 |
| M50/M51 | M50.0/M51.0 + G99.2, M50.1/M51.1 + G55.1: BVB, WS/EX/ZN, längstens 6 Monate nach Akutereignis. Fristberechnung ab erster Verordnung zu diesem Code. | Diagnoseliste Stand 01.07.2025 (physio-deutschland.de), KBV-Liste 01.01.2026 |
| Blankoverordnung | Entfallen dürfen Einheiten, Heilmittel, ergänzende Angaben, Frequenz. Diagnose, Diagnosegruppe und Leitsymptomatik bleiben Pflicht. Bei medizinischen Gründen gegen Blanko: vollständige Verordnung. Beginnfristen nach § 15 gelten. | HeilM-RL § 13a |

Weiterhin offen: unabhängiger ärztlicher und physiotherapeutischer Fachreview. Parallele konventionelle Verordnung neben einer Blankoverordnung ist in § 13a nicht geregelt; die App bietet sie nicht gesondert an.
