// Keep the standalone HTML aligned with the documented, deliberately limited review.
const fs = require('node:fs');
const path = require('node:path');
const base = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(base, '..', 'evidence', 'FORMALER_REGELABGLEICH.json'), 'utf8'));
const embedded = {reviewed_on:data.reviewed_on, groups:data.groups, diagnoses:data.diagnoses};
const file = path.join(base, 'index.html');
const old = fs.readFileSync(file, 'utf8');
const block = '// BEGIN FORMAL_REVIEW_DATA\nconst formalReview='+JSON.stringify(embedded)+';\n// END FORMAL_REVIEW_DATA';
const updated = old.replace(/\/\/ BEGIN FORMAL_REVIEW_DATA[\s\S]*?\/\/ END FORMAL_REVIEW_DATA/, block);
if (process.argv.includes('--check')) {
  if (updated !== old) throw new Error('Eingebetteter Regelabgleich weicht vom dokumentierten Datensatz ab.');
} else {
  fs.writeFileSync(file, updated);
}
