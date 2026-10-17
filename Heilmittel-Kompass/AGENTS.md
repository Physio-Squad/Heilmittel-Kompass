# Arbeitsregeln für Heilmittel-Kompass

- Deutsch und verständlich kommunizieren.
- index.html ist die maßgebliche eigenständige App. Keine Frameworkmigration ohne Auftrag.
- docs/anforderungen.md und docs/validierung.md beachten.
- Klinische Empfehlung und formale GKV-Verordnungsfähigkeit getrennt halten.
- Keine klinischen Rankings aus ICD allein und keine erfundenen Evidenzgrade.
- Originalquellen, Geltungsbereich und Prüfstatus bei fachlichen Änderungen dokumentieren.
- Prototypstatus erhalten, bis eine tatsächliche unabhängige fachliche Freigabe vorliegt.
- Keine echten Patienten- oder Zugangsdaten in Code, Demos, Tests oder Git.
- Vorhandenes privates Site-Projekt wiederverwenden; Repositoryimport ist kein Deployment.
- Bei Änderungen JavaScript-Syntax und node tests/smoke.cjs prüfen; UI-Änderungen zusätzlich im echten Browser prüfen, wenn zulässig.
- Tests mit simuliertem DOM nicht als Browserprüfung ausgeben.
