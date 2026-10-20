# Validierung und bekannte Grenzen

## Durchgeführt

- JavaScript-Syntaxprüfung der eigenständigen HTML.
- Gezielte VM-Prüfungen mit simuliertem DOM: Symptome, Mengen, Zusatzcode, Blanko sowie Demo-Vorbelegungen und fortbestehende Demo-Kennzeichnung.
- Beim ursprünglichen Import kein realer Browser-/Layouttest: Zugriff auf lokale file-URL wurde damals im Browserwerkzeug blockiert. Nicht durch andere Browserzugriffe umgangen. Die zusätzliche aktuelle Chromium-Prüfung der lokal über HTTP ausgelieferten App ist unten gesondert beschrieben.
- Frühere Logikprüfungen aus dem Cloud-Chat wurden berichtet, ihre ursprünglichen Testdateien wurden nicht übernommen.

Der beiliegende reproduzierbare Smoke-Test ist ein begrenzter Funktionstest, keine medizinische Prüfung.

## Prüfungen für 0.4 – 19.10.2026

Zusätzlich zur JavaScript-Syntaxprüfung und `node tests/smoke.cjs` wurde die lokal per HTTP ausgelieferte App mit echtem Chromium/Playwright geprüft:

- Acht Profile bei 1440, 390 und 320 Pixel Breite: jeweils alle drei vereinbarten Fragen, Quellenzugang und kein horizontaler Seitenüberlauf.
- Keine automatische Wahl eines Profils oder Befüllung optionaler Therapieziele. Manuell gewähltes Profil bleibt beim anschließenden Diagnoseeintrag erhalten.
- Offensichtliche Abweichung zwischen ICD und Profil zeigt einen Hinweis und unterdrückt klinische Hinweise auf den Heilmittelkarten.
- Unterschiedliche Zusatzbewertungen bleiben sichtbar: Ultraschall bei Rücken/Hüfte sowie Laser bei Achillessehne gegenüber Plantarfasziitis.
- Alle drei Demofälle über echte UI-Schaltflächen; Kennzeichnung bleibt bei Profiländerung erhalten. Wechsel aus Demo zu echtem Fall löscht die Demo-Profilzuordnung.
- Eigenständige HTML wird tatsächlich heruntergeladen und enthält die neuen Profile. Keine JavaScript-Laufzeitfehler im geprüften Ablauf.
- Screenshots des klinischen Bereichs bei Desktop- und Mobilbreite zusätzlich visuell angesehen.

Reproduzierbar: im App-Ordner `python3 -m http.server 8000 --bind 127.0.0.1` starten, dann in einem zweiten Prozess `node tests/browser.cjs` ausführen. Playwright und Chromium müssen installiert sein; in der geprüften Cloud-Umgebung waren beide vorhanden. Optional andere URL über `HEILMITTEL_TEST_URL`, Chromium-Pfad über `CHROMIUM_EXECUTABLE`, Artefaktordner über `HEILMITTEL_TEST_ARTIFACTS`. Screenshots und Testdownload liegen standardmäßig außerhalb des Repositorys unter `/tmp/heilmittel-kompass-browser`.

Dies ist keine vollständige Browser-/Barrierefreiheitsprüfung, kein Test sämtlicher Katalogfälle und keine fachliche Bestätigung der Empfehlungen. Tastatur-/Screenreader-Vollprüfung und Zwischenablage bleiben offen. Die nachfolgenden fachlichen Prüfpunkte bestehen fort.

## Ergänzende Prüfung 0.4.1 – deutscher Abgleich

Syntaxprüfung, Smoke-Test und die echte Chromium-Prüfung wurden mit den aktualisierten Profilen wiederholt. Zusätzliche Browserprüfungen betreffen: deutsche Quellenlinks, akute Kann-Option versus starke chronische Bewegungsempfehlung, Selbstwärme versus Fango-Verordnung, klinische Hinweise auf den Karten für Fango/Ultraschall sowie starke Bewegungsempfehlung versus schwächere Aufsichtsempfehlung bei Kniearthrose. Datierung und die gemeinsame NICE-Evidenzbasis sind einsehbar. Neue Screenshots der beiden deutschen Profile wurden zur Sichtprüfung erstellt.

Die vier Originaldateien wurden mit dem AWMF-Download per SHA-256 verglichen; alle waren identisch. Das prüft die Identität der verwendeten Quellen, nicht die klinische Richtigkeit jeder Aussage. Kein vollständiger Evidenzaudit und keine unabhängige medizinische Freigabe.

## Priorisierte offene Punkte

1. Jede ICD-Zeile auf Gültigkeit, Endständigkeit, Klartext und 2026-Fassung prüfen.
2. Vollständige LHB/BVB-Listen einschließlich zweitem Code, Alter, Fristen und Zusatzbedingungen abbilden.
3. Alle Diagnosegruppen und Kombinationsregeln am aktuellen Katalog prüfen; bisher begrenzter Umfang.
4. Blanko-Whitelist, Ampelzuordnung/-ausnahmen, Mengen, Tagelimits, Beginn und Laufzeit am aktuellen Vertrag verifizieren. Besonderes Augenmerk auf inklusive/exklusive Datumsberechnung.
5. MLD-Zuordnung, Zeitoptionen und Kompressionshinweise unabhängig prüfen.
6. KG-ZNS-Alters-/Technikgrenzen und andere qualifikationsgebundene Leistungen prüfen.
7. Klinische Geltungsbereiche und aktuelle Leitlinienstände überprüfen. Die manuelle Auswahl eines Profils kann derzeit vom eingegebenen ICD abweichen; sie ist keine automatische medizinische Plausibilitätsprüfung.
8. Für jede Empfehlungsstufe Intervention, Nutzen, Dauer und Evidenzsicherheit nachvollziehbar dokumentieren.
9. Browser: Desktop/Mobil, Fokus/Labels, Screenreader, Tastatur, Download und Zwischenablage, leere/ungültige Zustände und längere Texte.
10. Wechsel zwischen echten Fällen und Demos: verbleibende Ziele, Alter, Häufigkeit oder sonstige Werte auf unbeabsichtigte Übernahme prüfen.
11. Vollständige Datenbankprüfung und reale Fachreview durch geeignete ärztliche/physiotherapeutische Expertise vor klinischer Freigabe.

## Produktgrenze

Die App stellt kein vollständiges Rezept aus und prüft keine gesamte Behandlungshistorie oder regionalen Wirtschaftlichkeitsregeln. „Auswahl erstellt“ ist keine rechtliche oder medizinische Freigabe.


## Textanpassung 0.4.2 – 20.10.2026

JavaScript-Syntax, vorhandener Smoke-Test und die echte Chromium-Prüfung mit 24 Profil-/Viewport-Kombinationen bestanden. In jedem Profil wurden das erhaltene Abrufdatum und das Fehlen interner Prüfvermerke in der Quellenanzeige geprüft. Die Einordnung umfasst vier Stichpunkte. Klinische Empfehlungsunterschiede, Demofälle und HTML-Download funktionieren weiter. Keine neue fachliche Recherche; Abrufdaten wurden nicht auf den Änderungstag gesetzt.


## Stichpunktfassung 0.4.3 – 20.10.2026

Syntaxprüfung, vorhandener Smoke-Test und echte Chromium-Prüfung bestanden: acht klinische Profile bei drei Bildschirmbreiten, jeweils drei Stichpunktlisten, Quellen/Abrufdaten, klinische Unterschiede, Diagnosewechsel, drei Demos und HTML-Download. Zusätzlich wurde in allen Profilen das Fehlen der ersetzten Begriffe und der Selbstwärme-/Selbstkältehinweise in der Anzeige geprüft. Mobile Nackenansicht und Desktopansicht visuell kontrolliert. Die Kürzung und redaktionelle Zuordnung zu Heilmittelbegriffen sind keine neue medizinische Freigabe und keine Aktualisierung der Abrufdaten.


## Originalabgleich und Softwareprüfung 0.4.4 – 20.10.2026

Gezielte Quellenprüfung getrennt dokumentiert in [formaler-regelabgleich.md](formaler-regelabgleich.md). Keine unabhängige medizinische oder rechtliche Freigabe. Die priorisierten offenen Punkte bleiben bestehen; ihre WS-/EX-Teilbefunde werden durch den neuen Bericht konkretisiert.

Bestanden: JavaScript-Syntax, erweiterter `node tests/smoke.cjs`, `node scripts/sync-formal-data.cjs --check` und echte Browserprüfung mit vorhandenem Google Chrome/Playwright unter macOS. Zunächst scheiterte der Browserstart an der Sandbox; die genehmigte lokale Ausführung bestand. Geprüft wurden:

- Bisherige 24 Profil-/Viewport-Kombinationen (1440/390/320), drei Demos, klinische Quellen und abweichende Bewertungen unverändert.
- WS mit Alter 17: 18 orientierende Einheiten; EX mit 17: 50; mit 18: 18; unbekanntes EX-Alter im Smoke-Test als offene Bedingung.
- Lange originale EX-a-Überschrift bei allen drei Breiten ohne horizontalen Seitenüberlauf; Mobil-Screenshot zusätzlich visuell angesehen.
- Keine Symptomvorauswahl aus ICD; a+b zusammen, alternativ x mit Pflichttext; Gruppenwechsel löscht die bisherige Symptomwahl.
- Bekannt endständiger Code versus nicht endständige Kategorie; syntaktisch plausibler unbekannter Code bleibt ungeprüft, ohne ungültig zu behaupten; offener Kreuz-Stern-Kontext im Smoke-Test.
- Formale Gesamtprüfung bleibt in Ergebnis und Kopiertext offen; Sonderweg-Hinweis bleibt sichtbar.
- Eigenständiger HTML-Download erneut in Chrome als lokale Datei geöffnet; der eingebettete ICD-Prüfbestand funktioniert ohne zusätzlich geladene Datendatei.
- Eingebetteter Datensatz stimmt mit dem dokumentierten JSON überein. Das ist eine Konsistenzprüfung, keine fachliche Quellenfreigabe.

Aufruf unter macOS: vorhandenen Node-/Playwright-Pfad und `CHROMIUM_EXECUTABLE` auf die installierte Chrome-Datei setzen. Die Standard-Testanleitung bleibt für Umgebungen mit installiertem Chromium gültig. Keine vollständige Formular-/Barrierefreiheits-, Sonderfall- oder Datenbankprüfung.
