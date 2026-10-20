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
- Bei Änderungen node tests/smoke.cjs ausführen; UI-Änderungen zusätzlich mit node tests/browser.cjs (Playwright/Chromium) im echten Browser prüfen.
- Tests mit simuliertem DOM nicht als Browserprüfung ausgeben.

## Texte in der Oberfläche (seit 0.5)

- Zielgruppe sind Ärztinnen und Ärzte bei der Verordnung. Jeder sichtbare Satz ist eine fachliche Aussage, eine Regel oder eine Handlungsanweisung.
- Keine Arbeits-, Prüf- oder Entwicklervermerke in der Oberfläche oder im Rezepttext (z. B. „redaktionell zugeordnet“, „ungeprüft“, „Arbeitsstand“, „nicht stillschweigend übertragen“, „keine pauschale Aussage“). Diese gehören in docs/.
- Positiv formulieren, was gilt („Gilt für akute Distorsion“), statt aufzuzählen, was man nicht schließen darf.
- Leitlinienaussagen kurz mit Herausgeber und Originalgrad; keine eigenen Grade erfinden.
- `tests/smoke.cjs` und `tests/browser.cjs` enthalten eine Liste verbotener Formulierungen; bei Bedarf erweitern.
