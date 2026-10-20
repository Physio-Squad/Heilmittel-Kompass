# Verwendung

Dieses Paket ist ein dateibasierter Agent-Skill. Einstieg ist `SKILL.md`; die Referenzen und Vorlagen gehören dazu. Es enthält weder eine neue App noch die fremden Original-PDFs und es aktiviert keinen globalen Skill-Dienst.

## Im Repository

Der Skill liegt unter `.agents/skills/befund-training/`. Nutze ihn in einem Agent-Client, der Repository-Skills unterstützt. Ob er automatisch entdeckt wird, hängt vom Client und dessen aktuellem Arbeitsverzeichnis ab.

Wenn er entdeckt wird, lautet der Aufruf beispielsweise:

> Nutze $befund-training, um die Befund- und Trainings-App weiterzuentwickeln. Beginne mit dem passenden klinischen Bereich und dokumentiere Quellen und offene Parameter.

Wenn keine automatische Erkennung verfügbar ist, weise den Agenten ausdrücklich an, `SKILL.md` in diesem Ordner und die dort verlinkten Referenzen zu lesen.

## In einem anderen Repository

Entpacke das ZIP und kopiere den vollständigen Ordner `befund-training` nach `.agents/skills/` des Ziel-Repositorys. Vorhandene gleichnamige Skills und lokale Regeln zuerst prüfen; nicht blind überschreiben. Keine Frameworks oder Patientenspeicherung aus dem Skill-Namen ableiten.

## Stand und Grenzen

Wissenssnapshot vom 19.10.2026 aus Heilmittel-Kompass 0.4.1. Enthalten: acht Profile, 14 Quellen-/Dokumenteinträge, eigener deutscher Originalabgleich und Arbeitsvorlagen. Es sind keine 14 unabhängigen Leitlinien. Die eigenen Zusammenfassungen belegen ausgewählte Aussagen, keinen vollständigen Aktualitätsaudit und keine fachliche Freigabe. Änderungen im Zielprojekt brauchen eigene Prüfung.
