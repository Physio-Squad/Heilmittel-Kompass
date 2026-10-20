# Anforderungen

Stand der Zusammenführung: 18.10.2026. Ausgangscode: Heilmittel-Assistent 0.3.

## Bedienung

Einfach, dezent, wenige Schritte. Die ärztliche Diagnose steht fest; kein diagnostischer Fragebaum. Ergebnis unmittelbar gut lesbar und kopierbar. Keine Druckfunktion. Keine Patientendaten erforderlich, keine Speicherung oder Übertragung von Behandlungsdaten als Produktfunktion.

## Heilmittelauswahl

- KG-Gruppe nicht anbieten.
- KG-ZNS bei passender Katalogzuordnung optional. Neurologische Diagnose begründet keine Vorauswahl oder Pflicht.
- Ergänzungen nicht isoliert vorschlagen. Kombinationen mit Hauptheilmittel anzeigen; ohne Ergänzung bleibt möglich. Diese Produktauswahl ist enger als manche formale Verordnungsmöglichkeit.
- Mehrere Hauptheilmittel, etwa KG+MT oder KG+KG-Gerät, als organisatorische Ausnahme kennzeichnen. Sie sind nicht allein dadurch unzulässig. Mögliche Therapeutenwechsel und Terminabstimmung erklären.
- Hauptheilmittelmengen aufteilen. Ergänzung separat bemessen.
- Zusatzqualifikation für MT erläutern. Terminverfügbarkeit kann eingeschränkt sein; keine allgemeine Behauptung, MT sei unnötig.
- MT muss nicht ausschließlich passive Liegenbehandlung bedeuten. Verordnete Leistung bleibt maßgeblich.

## Therapieziele

Freiwilliges Feld „ggf. Therapieziele / weitere med. Befunde und Hinweise“ nach Muster 13. Zuschaltbare Bausteine: aktive Therapie, Übungs-/Trainingsplan, alltagsnahe Ziele, Edukation/Selbstmanagement, Eigenübungen; zusätzlich individueller Text. Keine pauschale Vorbelegung bei echten Fällen.

## Klinische Orientierung

Verordnungsfähigkeit und klinische Empfehlung getrennt darstellen. Keine automatische Empfehlung aus ICD allein. Keine erfundenen Scores. Unterschied zwischen fehlendem Nachweis, ausdrücklicher Negativempfehlung und ungeprüfter Option beachten. Klinischen Geltungsbereich bestätigen lassen.

Ergänzung vom 19.10.2026: Die klinische Orientierung beantwortet genau drei Fragen: Welche konkrete Therapie hilft? Wann ist Physiotherapie sinnvoll? Welche Zusätze lohnen sich? Eigenübungen und Unterstützungsbedarf darstellen, ohne feste Verordnungsschwellen zu erfinden. Die Abwägung zum Betreuungsbedarf als praktische Einordnung kennzeichnen. Behandlungssteuerung, Verlaufskontrolle und automatische Progressions-/Dosierungspläne sind vorerst nicht Teil des Ausbaus.

Bestätigter Zielablauf vom 20.10.2026: Einstieg über Diagnose plus wenige Angaben zu Funktion, Beschwerden und Ziel. Danach nachvollziehbare Einordnung und ein begründeter Heilmittelvorschlag mit Alternativen, ohne automatische Auswahl. Die erste fachlich geprüfte Fassung umfasst häufige muskuloskelettale Fälle mit dafür vollständig geprüften Regeln. Dieser Zielablauf ersetzt die frühere Anforderung eines unabhängigen klinischen Einstiegs vor dem Diagnoseeintrag; er ist noch nicht vollständig implementiert. Siehe [Produktkonzept](produktkonzept.md).

Im bisherigen Prototyp bleibt eine manuell gewählte Orientierung beim anschließenden Diagnoseeintrag erhalten; nach einem Demofall wird sie zurückgesetzt. Bei nicht offensichtlich passender ICD-Angabe einen Hinweis zeigen und klinische Hinweise auf den Heilmittelkarten unterdrücken. Ein passender Code ist keine klinische Bestätigung.

## Demos

Drei fiktive, veränderbare Beispiele: Kreuzschmerz (42), Kniearthrose (68), Schulter-Tendinopathie (51). Sechs KG-Einheiten und 1–2/Woche sind Demonstrationswerte, keine individuelle Empfehlung. Demo-Kennzeichnung muss bei Änderungen erhalten bleiben.

## Auslieferung

Fertige HTML und ZIP zum Herunterladen bereitstellen. Später private gehostete Webversion aktuell halten, ohne vom laufenden Laptop abhängig zu sein.


## Quellenanzeige und Kurztext – 20.10.2026

Die Einordnung in vier Stichpunkten erklären: klinischer Geltungsbereich; Befund, Ziele und Belastbarkeit; keine pauschale KG/MT/KG-Gerät-Rangliste; Trennung von klinischem Nutzen und GKV-Verordnungsfähigkeit. In der Quellenanzeige Bezeichnung, Stand/Fassung, Fundstelle und Abrufdatum erhalten. Interne Vermerke wie Vollprüfung, gelesene Empfehlungstabellen, Abrufprobleme oder Datei-Prüfsummen nicht in der Oberfläche ausgeben. Klinische Evidenzunsicherheit und unterschiedliche Empfehlungen bleiben sachlich erkennbar. Abrufdaten sind historische Werte; eine reine Textänderung ist keine neue Recherche.


Ergänzung 20.10.2026: Alle acht klinischen Bereiche in kurzen Stichpunkten darstellen – einschließlich Geltungsbereich, Therapieinhalten, Physiotherapiebedarf und Zusätzen. Lange Fließtexte und großflächige Zusatzkarten vermeiden. Medizinisch relevante Bedingungen und Empfehlungsunterschiede auch in der Kurzfassung erhalten; vertiefende Evidenz als aufklappbare Stichpunkte.


Begriffe im klinischen Kurztext an die Heilmittelpositionen anlehnen: „Manuelle Therapie“ statt „manuelle Techniken“, „Traktion“ ohne „mechanische“, „Massage“ statt „Weichteilbehandlung“ und „Kryotherapie“. Hinweise zur Selbstanwendung von Wärme/Kälte nicht in der Anzeige führen. Fachliche Originalaussagen und Herkunft in der internen Dokumentation erhalten; die redaktionelle Zuordnung ist keine zusätzliche GKV-Freigabe.
