# Produktkonzept: ärztliche Verordnungshilfe

Bestätigter Zielrahmen vom 20.10.2026. Dieses Dokument beschreibt den nächsten Zielzustand, nicht bereits vollständig implementierte oder fachlich validierte Funktionen der Version 0.4.3.

## Zweck und bestätigte Entscheidungen

Die App unterstützt Ärzte bei der begründeten Verordnung physiotherapeutischer Heilmittel. Sie erklärt verständlich, was die Leistungen beinhalten und wie evidenzorientierte Physiotherapie zum konkreten Behandlungsanlass beitragen kann. Sie ersetzt weder ärztliche Diagnostik noch die individuelle physiotherapeutische Befunderhebung.

Der Nutzer hat bestätigt:

- Eingabe: Diagnose plus wenige Angaben zu Funktion, Beschwerden und Ziel, kein ausführlicher physiotherapeutischer Befund.
- Ausgabe: begründeter Vorschlag mit Alternativen, ohne automatische Auswahl.
- Erste fachlich geprüfte Fassung: häufige muskuloskelettale Fälle; die dafür benötigten Regeln vollständig prüfen.

Die drei klinischen Kernfragen bleiben: Welche konkrete Therapie hilft? Wann ist Physiotherapie sinnvoll? Welche Zusätze lohnen sich? Autonome Behandlungssteuerung und automatische Progressionspläne bleiben außerhalb des beauftragten Umfangs.

## Therapieneutralität

Jede Option wird anhand derselben Kriterien betrachtet: passende Population, Funktionsproblem, Therapieziel, belegter Nutzen, Risiken, Grenzen und praktische Umsetzbarkeit. Eine belegte Positiv- oder Negativempfehlung darf zu unterschiedlichen Einordnungen führen. Die App darf Gleichwertigkeit nicht künstlich behaupten oder eine Position grundsätzlich bevorzugen.

KG bedeutet nicht automatisch aktive Therapie und MT nicht ausschließlich passive Behandlung. Edukation, Eigenübungen und gegebenenfalls Graded Activity werden nur bei passender fachlicher Grundlage erläutert. Eine klinische Intervention ist nicht automatisch eine eigene Heilmittelposition; jede Zuordnung ist zu begründen.

## Zielablauf

| Schritt | Ärztliche Aufgabe | Unterstützung durch die App |
|---|---|---|
| 1. Diagnose | Bereits gestellte Diagnose/ICD bestätigen | Gültigen ICD-10-GM-Stand prüfen; unklare oder unvollständige Angaben offenhalten |
| 2. Beeinträchtigung | Wenige Angaben zu Beschwerden und relevanter Funktion machen | Mögliche Diagnosegruppe begründen; ihre Original-Leitsymptomatiken verständlich erläutern und bestätigen lassen |
| 3. Ziel | Optional ein relevantes Alltags-/Funktionsziel angeben | Nur entscheidungsrelevante Zusatzfragen; fehlende Angaben nicht erfinden |
| 4. Therapie | Vorschlag und Alternativen beurteilen und selbst auswählen | Inhalt der Heilmittel, Begründung, Evidenzunterschiede und passende Zusätze kurz darstellen |
| 5. Verordnung | Auswahl und notwendige Rezeptangaben prüfen | Formale Regeln zu Heilmitteln, Kombinationen, Mengen und gegebenenfalls Sonderwegen auswerten; offene Voraussetzungen deutlich benennen |

Die Fragen zum Befund sind kontextabhängig und sparsam. Es gibt keinen festen langen Fragebogen für alle Diagnosen. Eine notwendige klinische Zusatzinformation bleibt unbekannt, wenn der Arzt sie nicht angeben kann; davon abhängige Empfehlungen werden dann nicht als gesichert ausgegeben.

Dieser diagnosebezogene Zielablauf ersetzt die frühere Idee, zuerst unabhängig einen klinischen Bereich zu wählen und danach die Diagnose einzugeben. Die derzeitige App-Anordnung wird durch dieses Dokument noch nicht geändert.

## Zwei verbundene Grundlagen

**Formale Regeln:** Heilmittel-Richtlinie, Heilmittelkatalog, einschlägige Verordnungs-/Vertragsregeln und gültiger ICD-10-GM-Stand. Sie bestimmen unter ihren jeweiligen Voraussetzungen zulässige Angaben und Optionen.

**Klinische Einordnung:** krankheitsspezifische Leitlinien und ergänzende Evidenz. Sie begründen, welche Intervention für Population, Befund und Ziel sinnvoll sein kann. Sie ändern nicht die deutschen Katalogregeln.

Beide Ebenen behalten eigene Quellen, Versionen und Prüfstände. Eine formal mögliche Position ist nicht automatisch klinisch angezeigt. Eine klinische Negativempfehlung ist kein formales Katalogverbot. Ein bestandener Softwaretest ist keine fachliche Freigabe der Daten.

## Diagnosegruppe und Leitsymptomatik

- ICD-10-GM, Diagnosegruppe und Leitsymptomatik sind getrennte Felder mit unterschiedlichen Bedeutungen. Die Diagnose allein ersetzt keine Funktionsbeschreibung.
- Zuordnungen nicht als ungeprüfte Eins-zu-eins-Tabelle von ICD zu Diagnosegruppe implementieren. Der konkrete Behandlungsanlass und erforderliche Kontext gehören zur Regel.
- Buchstaben wie a/b/c stehen für die jeweilige gruppenspezifische Katalog-Leitsymptomatik, nicht für Heilmittel oder Evidenzgrade. Keine diagnosegruppenübergreifende feste Bedeutung der Buchstaben annehmen.
- Mehrere passende Katalog-Leitsymptomatiken müssen abbildbar sein. Exakte Auswahl-/Kombinationsregeln am gültigen Originaltext prüfen.
- Patientenindividuelle Leitsymptomatik muss die relevante Schädigung/Funktionsstörung beschreiben und zur Diagnosegruppe beziehungsweise ihren Katalog-Leitsymptomatiken vergleichbar sein. Sie ist kein beliebiger Freitext und kein Ersatz für ein bloßes Therapieziel.
- Die App kann aus tatsächlich eingegebenen Angaben eine nachvollziehbare Zuordnung vorschlagen. Die ärztliche Bestätigung und eine gegebenenfalls nötige individuelle Beschreibung dürfen nicht erfunden werden.

Die exakten Buchstabentexte, Definitionen und Zulässigkeitsregeln sind vor Implementierung am geltenden Originalkatalog zu verifizieren. Dieses Konzept behauptet keine abgeschlossene aktuelle Quellenprüfung.

## Geplanter Startumfang

Als Arbeitsumfang dienen die bereits vorhandenen acht muskuloskelettalen Bereiche: Rücken, nicht-spezifische Nackenschmerzen, Kniearthrose, Hüftarthrose, Rotatorenmanschetten-Tendinopathie, Midportion-Achillessehnen-Tendinopathie, Plantarfasziitis und akute/postakute laterale Sprunggelenksdistorsion. Das ist keine statistische Häufigkeitsrangliste. Die Abgrenzungen der klinischen Profile bleiben erforderlich.

Für diese Bereiche müssen sämtliche im Produkt angebotenen Wege geprüft werden. Dazu gehören insbesondere die einschlägigen WS-/EX-Konstellationen, zugehörige Leitsymptomatiken, Heilmitteloptionen, Kombinationen und Mengenregeln. Sonderbedarf und Blankoverordnung nur in den jeweils tatsächlich unterstützten und vollständig geprüften Konstellationen anbieten. Eine Verengung des Startumfangs darf nicht stillschweigend erfolgen.

## Prüfkriterien für den formalen Unterbau

| Regelbereich | Vor fachlicher Abnahme erforderlich |
|---|---|
| Quelle/Version | Originalquelle, Fassung, Fundstelle, zeitliche Geltung und dokumentierter fachlicher Prüfstatus je Regel |
| ICD | Gültigkeit und erforderliche Vollständigkeit im passenden ICD-10-GM-Jahr; kein gültiger Status allein aus Format oder Präfix |
| Diagnosegruppe | Begründete und kontextabhängige Zuordnung; zulässige Alternativen und Ausnahmen ausdrücklich behandeln |
| Leitsymptomatik | Gruppenabhängiger Originaltext plus getrennte verständliche Erklärung; Mehrfachauswahl und individueller Text nach den geprüften Regeln |
| Heilmittel | Zulässige Positionen und Kombinationen vom tatsächlichen Regelkontext abhängig; keine unzulässige Verallgemeinerung einer klinischen Empfehlung |
| Mengen/Rahmen | Höchstmenge, orientierende Menge, Ergänzungsmenge und weitere angebotene Rahmenregeln unterscheiden |
| Sonderfälle | Voraussetzungen einschließlich Codes, Alter, Fristen oder Zweitcodes nur soweit tatsächlich geprüft; kein negativer Schluss aus fehlendem Treffer |
| Prüffälle | Positive, negative, alternative und unvollständige Konstellationen; Daten fachlich prüfen und Softwareverhalten separat testen |
| Ergebnisstatus | Offen, formal widersprüchlich und im unterstützten Umfang geprüft unterscheiden; keine umfassende Freigabe durch bloß ausgefüllte Pflichtfelder |

Unklare Regeln bleiben fachlich offen. Ein manuell vorausgefüllter Datensatz und die bisherige Warnung bei abweichender Diagnosegruppe erfüllen diese Kriterien noch nicht.

## Darstellung

Kurze Stichpunkte, klare Zuordnung zu Heilmittelpositionen und wenige Hinweise am jeweiligen Entscheidungsschritt. Keine lange vorgeschaltete Lehrbuchseite und keine unbegründete Standardvorauswahl. Vorschlag und Alternativen sollen Inhalt, Ziel und Begründung erkennen lassen; Vergleichbarkeit ist wichtiger als eine unbelegte numerische Rangfolge.

Quellenanzeige: Herausgeber, Titel, Fassung/Stand, Fundstelle und tatsächliches Abrufdatum. Interne Recherche-/Prüfprotokolle bleiben in der Dokumentation. Klinisch relevante Unsicherheit und abweichende Leitlinienbewertungen bleiben inhaltlich erkennbar.

## Bisheriger Stand

Version 0.4.3 ist ein getesteter Prototyp mit ausgewählten klinischen Informationen und begrenzten Katalogzuordnungen. Die hier geforderte vollständige formale Prüfung des gewählten Startumfangs ist noch nicht abgeschlossen. Die Originalquellen für Richtlinie, Katalog und KBV-Verordnungshilfe waren beim Abrufversuch am 20.10.2026 in dieser Sitzung vom Netzwerkzugriff ausgeschlossen; daraus wurden keine neuen formalen Regeln abgeleitet.
