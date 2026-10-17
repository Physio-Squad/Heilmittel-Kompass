# Validierung und bekannte Grenzen

## Durchgeführt

- JavaScript-Syntaxprüfung der eigenständigen HTML.
- Gezielte VM-Prüfungen mit simuliertem DOM: Symptome, Mengen, Zusatzcode, Blanko sowie Demo-Vorbelegungen und fortbestehende Demo-Kennzeichnung.
- Kein realer Browser-/Layouttest: Zugriff auf lokale file-URL wurde im Browserwerkzeug blockiert. Nicht durch andere Browserzugriffe umgangen.
- Frühere Logikprüfungen aus dem Cloud-Chat wurden berichtet, ihre ursprünglichen Testdateien wurden nicht übernommen.

Der beiliegende reproduzierbare Smoke-Test ist ein begrenzter Funktionstest, keine medizinische Prüfung.

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
