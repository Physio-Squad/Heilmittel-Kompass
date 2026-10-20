const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
let syms=[];const els=new Map();
function el(id){if(!els.has(id))els.set(id,{value:'',checked:false,hidden:false,dataset:{},classList:{toggle(){}},setAttribute(){},addEventListener(k,f){this[k]=f},querySelectorAll(){return[]},get innerHTML(){return this.html||''},set innerHTML(v){this.html=v;if(id==='symptom')this.value='';if(id==='symptomChoices')syms=[...v.matchAll(/data-sym="([^"]+)"/g)].map(m=>({dataset:{sym:m[1]},checked:false}));}});return els.get(id);}
const doc={documentElement:{outerHTML:html},getElementById:el,querySelectorAll(q){if(q==='[data-sym]')return syms;if(q==='[data-sym]:checked')return syms.filter(x=>x.checked);return[]},addEventListener(){}};
const c=vm.createContext({document:doc,Date,Blob,URL,setTimeout(){},navigator:{},location:{reload(){}},console});
vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],c);const run=s=>vm.runInContext(s,c);
for(const id of ['back','oa','shoulder']){
 run("loadDemo('"+id+"')");
 assert.equal(el('units').value,6);assert.equal(el('frequency').value,'1-2');assert.equal(el('evidenceProfile').value,id);
 assert.match(run('textOutput'),/^DEMO/);assert.match(el('summaryContent').innerHTML,/Demo · fiktives/);assert.equal(el('demoNotice').hidden,false);
 assert.equal(run('state.supp'),'NONE');assert.ok(el('goalCustom').value.length>20);
 el('units').value='4';run('update()');assert.match(run('textOutput'),/^DEMO/);
}
run("choose(DIAGNOSES.find(d=>d.code==='M54.5'))");assert.equal(run('activeDemo'),null);assert.equal(el('demoNotice').hidden,true);
syms[0].checked=true;el('symptomChoices').change({target:syms[0]});syms[1].checked=true;el('symptomChoices').change({target:syms[1]});assert.ok(run('symptomText()').includes('; '));
run("state.primary=['KG'];state.supp='FANGO'");el('suppUnits').value='3';run('update()');assert.match(run('textOutput'),/Ergänzung: 3 ×/);
el('suppUnits').value='7';run('update()');assert.match(el('warnings').innerHTML,/Menge der Ergänzung/);
run("choose({code:'Z96.60',name:'Test',group:'EX',second:'Z98.88'})");assert.equal(el('secondCodeWrap').hidden,false);el('secondCode').value='Z98.88';run('update()');assert.doesNotMatch(el('warnings').innerHTML,/Erforderlichen zweiten/);
run("choose(DIAGNOSES.find(d=>d.code==='M75.4'));state.route='blank';update()");assert.equal(el('quantityCard').hidden,true);assert.equal(el('suppUnitsWrap').hidden,true);assert.doesNotMatch(run('textOutput'),/Frequenz:/);
// Regression cases for the first formal source review. These test software behavior,
// not the medical correctness or completeness of the underlying regulations.
run("choose(DIAGNOSES.find(d=>d.code==='M54.5'))");
el('age').value='17';run('update()');
assert.match(el('quantityHint').innerHTML,/18 Einheiten/);
assert.doesNotMatch(el('quantityHint').innerHTML,/50 Einheiten/);
assert.equal(run("icdReview('M54.5').status"),'terminal_im_Original_geprueft');
assert.equal(run("icdReview('M54.500')"),null,'Prefix or format must not imply validity');
assert.equal(run("icdReview('S93.4').status"),'nicht_endstaendige_Kategorie');
assert.equal(run("icdReview('S93.42').status"),'terminal_im_Original_geprueft');
assert.match(el('symptomChoices').innerHTML,/Schädigung der Bewegungssegmente/);
assert.match(el('symptomChoices').innerHTML,/Zum Beispiel/);
run("choose(DIAGNOSES.find(d=>d.code==='M17.0'))");
el('age').value='17';run('update()');assert.match(el('quantityHint').innerHTML,/50 Einheiten/);
el('age').value='18';run('update()');assert.match(el('quantityHint').innerHTML,/18 Einheiten/);
assert.doesNotMatch(el('quantityHint').innerHTML,/50 Einheiten/);
el('age').value='';run('update()');assert.match(el('quantityHint').innerHTML,/Alter offen: unter 18 Jahren 50/);
assert.match(el('symptomChoices').innerHTML,/Kapsel-Band-Apparats/);
assert.equal(syms.filter(s=>s.checked).length,0,'No symptom should be inferred from ICD');
syms[0].checked=true;el('symptomChoices').change({target:syms[0]});
syms[1].checked=true;el('symptomChoices').change({target:syms[1]});
assert.ok(run('symptomText()').includes('; '));
syms[2].checked=true;el('symptomChoices').change({target:syms[2]});
assert.equal(syms.filter(s=>s.checked).length,1);
assert.match(el('warnings').innerHTML,/Patientenindividuelle Leitsymptomatik ergänzen/);
el('individual').value='Relevante Kraftminderung beim Aufstehen';run('update()');
assert.equal(run('symptomText()'),el('individual').value);
assert.match(el('summaryContent').innerHTML,/Formale Gesamtprüfung offen/);
run("choose({code:'M54.8',name:'Kategorie',group:'WS',custom:true})");
assert.match(el('warnings').innerHTML,/Nicht endständige ICD-Kategorie/);
run("choose({code:'M54.500',name:'Ungeprüft',group:'WS',custom:true})");
assert.match(el('warnings').innerHTML,/Gültigkeit, Endständigkeit und Klartext.*noch nicht geprüft/);
assert.doesNotMatch(el('warnings').innerHTML,/ungültig/i);
run("choose(DIAGNOSES.find(d=>d.code==='M51.1'))");
assert.match(el('warnings').innerHTML,/Zusatzkodierung/);
const reviewed=JSON.parse(fs.readFileSync(path.join(__dirname,'..','..','evidence','FORMALER_REGELABGLEICH.json'),'utf8'));
assert.deepEqual(JSON.parse(run('JSON.stringify(formalReview)')),{reviewed_on:reviewed.reviewed_on,groups:reviewed.groups,diagnoses:reviewed.diagnoses});
assert.equal(Object.keys(reviewed.profile_contexts).length,8);
console.log('Smoke-Test bestanden: Demos, Symptome, Mengen, Zusatzcode, Blanko sowie WS/EX-Altersgrenze, begrenzter ICD-Prüfstatus und Datensynchronität. Kein Browser- oder Fachtest.');
