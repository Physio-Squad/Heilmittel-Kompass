# Übertragung auf eine Befund- und Trainings-App

Die folgenden Strukturen sind ein **Entwicklungsvorschlag** für die neue App. Die Quellen belegen einzelne Interventionen und Grenzen; sie validieren weder dieses Datenmodell noch eine automatische Diagnostik oder Trainingssteuerung.

## Befund mit Zweck erfassen

Ein Feld gehört in den Ablauf, wenn es die Zuordnung oder eine konkrete Auswahlentscheidung beeinflusst. Zeige Zusatzfelder nur bei Bedarf. Ein nicht erfasster Wert ist unbekannt.

| Bereich | Sinnvolle Angaben | Konsequenz |
|---|---|---|
| Diagnose und Kontext | Bestätigungsstatus, ärztliche Diagnose, optional ICD, konservativ/postoperativ, Einschränkungen | Passende Population; ungeklärten Geltungsbereich offen lassen |
| Beschwerden | Region, zeitlicher Verlauf, akut/chronisch nur bei tatsächlich erhobenem Status | Unterschiedliche Teil-Empfehlungen nutzen; keine erfundene allgemeine Zeitgrenze |
| Funktion und Ziele | Schwierige Alltags-/Sportaufgabe, gewünschte Fähigkeit | Konkrete Inhalte statt nur Heilmittelbezeichnung |
| Belastbarkeit und Rahmen | Tatsächlich bekannte Verträglichkeit, Hilfsmittel/Geräte, Zeit, Präferenzen, Fähigkeit zum Eigenüben | Individuelle Umsetzung und Unterstützungsbedarf |
| Untersuchungsbefund | Geprüftes Verfahren, Messwert mit Einheit, Datum, Interpretation durch die zuständige Fachperson | Vergleichbare Befundbeschreibung; kein Diagnosenachweis aus Einzeltests |
| Relevante Risiken/Restriktionen | Quelle und Status der Beurteilung, medizinische Vorgaben | Keine automatische Freigabe bei fehlenden Angaben |

Wähle Tests erst nach Prüfung ihrer Eignung für Population und Zweck. Aus den vorliegenden Texten ist keine vollständige Befundbatterie extrahiert. Erfinde keine Cut-offs, minimal bedeutsamen Unterschiede oder Freigabewerte. Die von Quellen genannten Instrumente sind keine pauschale Pflichtliste.

## Zuordnung in drei Schritten

1. Klinischen Bereich und Geltungsbereich bestätigen. Zuordnungswidersprüche erklären, ohne daraus automatisch eine andere Diagnose zu erzeugen.
2. Die drei Fragen des Skills anhand des Befundes beantworten. Direkte Empfehlung, bedingte Option und praktische Abwägung jeweils benennen.
3. Auf Wunsch einen nachvollziehbaren Trainingsplanentwurf vorbereiten. Belegte Interventionskategorie und konkrete Übungsauswahl sind getrennte Ebenen: Eine Leitlinie zu Krafttraining belegt nicht automatisch jede Übung und Dosierung.

## Trainingsplanung

Jeder Eintrag im Entwurf sollte enthalten:

- Funktionsziel und Auswahlgrund.
- Konkrete Übung oder weiterhin offener Übungsvorschlag.
- Bezug zur belegten Intervention und Quellen-ID/Fundstelle.
- Relevante tatsächliche Restriktionen und erforderliche fachliche Prüfung.
- Last/Intensität, Sätze, Wiederholungen, Frequenz, Dauer und Pausen, soweit bekannt und begründet.
- Herkunft jedes Parameters: konkrete Quellenempfehlung, fachliche Festlegung oder weiterhin offen.
- Status des Entwurfs und der tatsächlichen fachlichen Prüfung.

Keine automatische Ableitung einer voll dosierten Behandlung aus einem ICD oder dem vorhandenen JSON-Profil. Die im alten Prototyp vorgegebenen sechs Einheiten sind keine Quelle für Trainingsdosierung. Fehlende Parameter werden als fehlend angezeigt. Erforderliche Informationen werden bei der späteren individuellen Planung gezielt erfragt.

Keinen automatischen Progressions-, Rückstufungs-, Verlaufs- oder Return-to-Sport-Algorithmus aus diesem Schema ableiten. Solche Funktionen benötigen einen eigenen Auftrag und populationsspezifische, geprüfte Kriterien. Ein manuell bearbeitbarer Planentwurf ist von einer autonomen Behandlungssteuerung zu unterscheiden.

## Hinweise zur Datenstruktur

`assets/befund-vorlage.json` ist eine unbefüllte Vorlage. `null` bedeutet unbekannt oder noch nicht festgelegt. Leere Arrays bedeuten keine erfassten Einträge, nicht das bestätigte Fehlen von Symptomen/Risiken. Das Feld `red_flag_screening` ist nur ein Platzhalter für eine spätere fachlich definierte Funktion, keine fertige Checkliste. `assets/trainingsplan-vorlage.md` ist eine lesbare Alternative für einen fachlich zu vervollständigenden Plan.

Eine spätere App kann dieses Schema ihrem tatsächlichen Datenmodell anpassen. Validierung gegen eine Vorlage belegt nur Struktur, keine klinische Eignung.

## Darstellung

Zeige zuerst die kurze Begründung und die aktive Aufgabe; Details wie Herkunft und Unsicherheit bleiben erreichbar. Vermeide numerische Nutzenranglisten ohne belastbare Vergleichsdaten. Manuelle Techniken und Zusätze werden je Krankheitsbild bewertet, nicht als globale Kategorie „passiv = schlecht“.

Bei mehreren Quellen: eine echte inhaltliche Abweichung sichtbar machen. Bei voneinander abhängigen Quellen: die gemeinsame Evidenzbasis nennen. Bei ungeprüften Optionen: „hier noch nicht bewertet“ verwenden, nicht „wirkungslos“.

Die Zielgruppe der neuen App ist noch offen. Für eine fachlich begleitete Oberfläche können Begriffe und Quellen detaillierter sein; eine Patientenansicht braucht verständliche Ausführungshinweise und eine eigene Prüfung ihrer Verständlichkeit. Neue Konten, Speicher- oder Übertragungsfunktionen sind keine Nebenwirkung eines Befundformulars und müssen gesondert spezifiziert werden.
