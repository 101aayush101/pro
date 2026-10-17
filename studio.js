(function(){
'use strict';
const subjects=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const short=['Reasoning','General Awareness','Quantitative Aptitude','English'];
const slug=['REASONING','GA','QUANT','ENGLISH'];
const sample={
REASONING:`SUBJECT: REASONING
Q: If CAT is coded as DBU, how is DOG coded?
A) EPH
B) FPH
C) EOG
D) DPH
ANSWER: A
EXPLANATION: Each letter shifts forward by one.

---

SUBJECT: REASONING
Q: Find the next number: 2, 6, 12, 20, 30, ?
A) 40
B) 42
C) 44
D) 46
ANSWER: B
EXPLANATION: Differences are 4, 6, 8, 10, 12.`,
GA:`SUBJECT: GA
Q: Which Article guarantees equality before the law?
A) Article 12
B) Article 14
C) Article 19
D) Article 21
ANSWER: B
EXPLANATION: Article 14 guarantees equality before the law and equal protection of the laws.`,
QUANT:`SUBJECT: QUANT
Q: A square has perimeter 48 cm. What is its area?
A) 124 cm²
B) 144 cm²
C) 156 cm²
D) 196 cm²
ANSWER: B
EXPLANATION: Side = 48/4 = 12 cm; area = 12² = 144 cm².`,
ENGLISH:`SUBJECT: ENGLISH
Q: Choose the antonym of 'ephemeral'.
A) Temporary
B) Fleeting
C) Permanent
D) Brief
ANSWER: C
EXPLANATION: Ephemeral means short-lived; permanent is the opposite.`
};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mapSubject=v=>{const x=v.toLowerCase().replace(/[^a-z]/g,'');return x==='reasoning'||x==='generalintelligence'||x==='generalintelligenceandreasoning'?'REASONING':x==='ga'||x==='gk'||x==='generalawareness'?'GA':x==='quant'||x==='quantitativeaptitude'||x==='maths'?'QUANT':x==='english'||x==='englishcomprehension'?'ENGLISH':null};
const TEMPLATE=Object.values(sample).join('\n\n---\n\n');
let records=[],mode='section',subject='QUANT',sampleSubject='QUANT',draftName='',draftText='',store='',D=null;
const read=()=>{try{const x=JSON.parse(localStorage.getItem(store));return x&&Array.isArray(x.tests)?x:{tests:[],drafts:{}}}catch{return {tests:[],drafts:{}}}};
const saveData=x=>localStorage.setItem(store,JSON.stringify(x));
const getSaved=()=>read().tests;
const QKEY=/^(?:Q(?:UESTION)?(?:\s*\d+)?\s*[:.)-])\s*(.*)$/i;
function parse(text,defaultSubject){
 const chunks=text.replace(/\r/g,'').split(/^\s*---+\s*$/m).map(s=>s.trim()).filter(Boolean);
 const questions=[],errors=[],seen=new Set();
 if(!chunks.length)errors.push('Paste at least one question block to begin.');
 chunks.forEach((block,i)=>{
  const lines=block.split('\n').map(s=>s.trim()).filter(Boolean);
  let found={},options={};
  for(const line of lines){
   let match;
   if((match=line.match(/^SUBJECT\s*:\s*(.*)$/i)))found.subject=match[1];
   else if((match=line.match(QKEY)))found.question=match[1];
   else if((match=line.match(/^([A-D])[).:]\s*(.+)$/i)))options[match[1].toUpperCase()]=match[2];
   else if((match=line.match(/^ANSWER\s*:\s*([A-D])\s*$/i)))found.answer=match[1].toUpperCase();
   else if((match=line.match(/^(?:EXPLANATION|SOLUTION)\s*:\s*(.+)$/i)))found.explanation=match[1];
   else if(lines.length===1 && !found.question)found.question=line;
   else if(found.explanation)found.explanation+=' '+line;
   else if(found.question && !found.explanation && !/^SUBJECT/i.test(line))found.question+=' '+line;
  }
  const n=i+1,sub=mapSubject(found.subject||defaultSubject);
  if(!sub)errors.push('Question '+n+': unknown subject "'+String(found.subject).slice(0,35)+'".');
  if(!found.question||found.question.length<5)errors.push('Question '+n+': missing question after Q:.');
  if(['A','B','C','D'].some(x=>!options[x]))errors.push('Question '+n+': all four options A–D are required.');
  if(!found.answer)errors.push('Question '+n+': ANSWER must be A, B, C or D.');
  if(!found.explanation)errors.push('Question '+n+': add EXPLANATION for result review.');
  const signature=(found.question||'').toLowerCase().replace(/\s+/g,' ');
  if(seen.has(signature))errors.push('Question '+n+': duplicate question.');else seen.add(signature);
  if(sub&&found.question&&['A','B','C','D'].every(x=>options[x])&&found.answer){
   questions.push({subject:subjects[slug.indexOf(sub)],question:found.question,options:['A','B','C','D'].map(x=>options[x]),answer:'ABCD'.indexOf(found.answer),explanation:found.explanation||'Explanation not provided.'});
  }
 });
 return {questions,errors,counts:slug.map(x=>questions.filter(q=>q.subject===subjects[slug.indexOf(x)]).length),blocks:chunks.length};
}
function validation(parsed,m,s){
 const problems=[...parsed.errors];
 if(m==='full'){
  parsed.counts.forEach((count,i)=>{if(count!==25)problems.push(short[i]+': '+count+'/25 questions (exactly 25 required).')});
 }else{
  if(parsed.questions.length<1||parsed.questions.length>25)problems.push('Sectional needs 1–25 questions.');
  if(parsed.questions.some(q=>q.subject!==subjects[slug.indexOf(s)]))problems.push('Sectional contains questions outside '+short[slug.indexOf(s)]+'.');
 }
 return problems;
}
const setDraft=()=>{const x=read();x.drafts={mode,subject,name:draftName,text:draftText};saveData(x)};
function render({shell,begin,nav}){
 const saved=getSaved(),featured=D.catalog.filter(t=>t.isFeaturedPrep);let p=parse(draftText,subject),issues=validation(p,mode,subject);
 shell(`<section class="studio-hero"><div><span class="studio-eyebrow">✦ YOUR QUESTION BANK · PRIVATE TO THIS BROWSER</span><h2>Build your own exam.</h2><p>Paste. Validate. Preview. Launch. A clean mock studio built for serious preparation.</p></div><div class="studio-hero-stat"><b>${saved.length}</b><span>Custom tests saved</span></div></section>
 <div class="studio-modes"><button id="studio-full" class="studio-mode ${mode==='full'?'is-on':''}"><b>▦ Full-length Mock</b><span>100 questions · 4 × 15 min · 200 marks</span></button><button id="studio-section" class="studio-mode ${mode==='section'?'is-on':''}"><b>◈ Sectional Mock</b><span>1–25 questions · 15 min · +2 / −0.5</span></button></div>
 <div class="studio-layout"><section class="studio-panel"><div class="studio-panel-head"><div><span class="studio-step">01 / QUESTION EDITOR</span><h3>Prepare your test</h3></div><span class="studio-chip">Auto-saved</span></div>
 <label class="studio-label" for="studio-name">Test name</label><input id="studio-name" class="studio-input" maxlength="70" placeholder="e.g. Algebra Speed Test" value="${esc(draftName)}">
 ${mode==='section'?`<label class="studio-label" for="studio-subject">Choose subject</label><select id="studio-subject" class="studio-input">${slug.map((x,i)=>`<option value="${x}" ${subject===x?'selected':''}>${short[i]}</option>`).join('')}</select>`:'<div class="studio-rule">Four subjects × 25 questions each, with automatic 15-minute section locks.</div>'}
 <div class="studio-editor-title"><label class="studio-label" for="studio-text">Paste question blocks</label><span id="studio-count">${p.blocks} blocks</span></div>
 <textarea id="studio-text" class="studio-textarea" spellcheck="false" placeholder="Paste questions using the format shown on the right...">${esc(draftText)}</textarea>
 <div class="studio-progress">${slug.map((x,i)=>`<div class="studio-progress-item"><span>${short[i]}</span><strong id="studio-num-${i}">${p.counts[i]}${mode==='full'?'/25':''}</strong><div class="studio-bar"><i id="studio-bar-${i}" style="width:${Math.min(100,p.counts[i]/25*100)}%"></i></div></div>`).join('')}</div>
 <div id="studio-status" class="studio-status ${issues.length?'studio-has-errors':'studio-valid'}">${issues.length?esc(issues.slice(0,5).join(' · ')):'✓ All checks passed. Ready to publish into your personal mock library.'}</div>
 <div class="studio-actions"><button class="btn secondary" id="studio-preview">Preview questions</button><button class="btn" id="studio-save" ${issues.length?'disabled':''}>Save custom mock →</button></div>
 <div id="studio-preview-zone"></div></section>
 <aside class="studio-guide"><div class="studio-guide-head"><span class="studio-step">02 / FORMAT GUIDE</span><h3>Copy this example</h3><p>Use one block per question. Separate questions with three dashes (---). Include the subject, answer and explanation.</p><div class="studio-sample-tabs">${slug.map((x,i)=>`<button class="studio-sample-tab ${x===sampleSubject?'is-on':''}" data-sample="${x}">${short[i]}</button>`).join('')}</div></div><pre id="studio-sample" class="studio-example">${esc(sample[sampleSubject])}</pre><div class="studio-guide-actions"><button id="studio-copy" class="btn secondary">Copy sample</button><button id="studio-insert" class="btn secondary">Insert sample</button></div>
 <div class="studio-tip"><b>What makes a valid mock?</b><p>Full: exactly 25 questions for each of the four subjects (100 total). Sectional: 1–25 questions for your selected subject. Every question needs A–D, a correct answer, and an explanation. Nothing is uploaded to a public spreadsheet.</p></div></aside></div>
 ${featured.length?`<section class="studio-library"><div class="section-head"><div><h2>Exam Preparation Tests</h2><p>Ready-made 2026-style practice papers. Use the full exam interface, timed attempts and detailed review.</p></div><span class="studio-chip">${featured.length} available</span></div><div class="studio-saved-grid">${featured.map(t=>`<article class="studio-saved"><div class="studio-saved-top"><span class="tag green">2026 SHIFT-INSPIRED</span><span>${t.questionCount} Q · ${t.minutes} min</span></div><h3>${esc(t.name)}</h3><p>${esc(t.subject)} · ${esc(t.level)} · ${t.marks} marks</p><div class="studio-saved-actions"><button class="btn" data-launch="${esc(t.id)}">${t.id.startsWith("ancient")?"Start Ancient Test →":"Start Visual Test →"}</button></div></article>`).join("")}</div></section>`:""}
 <section class="studio-library"><div class="section-head"><div><h2>My Custom Mocks</h2><p>Saved separately under your local username. Click to start or retake.</p></div><span class="studio-chip">${saved.length} saved</span></div><div id="studio-library-content">${saved.length?`<div class="studio-saved-grid">${saved.map(t=>`<article class="studio-saved"><div class="studio-saved-top"><span class="tag ${t.type==='section'?'green':''}">${t.type==='full'?'FULL MOCK':'SECTIONAL'}</span><span>${t.questionCount} Q · ${t.minutes} min</span></div><h3>${esc(t.name)}</h3><p>${t.type==='full'?'Four timed sections':esc(t.subject)}</p><div class="studio-saved-actions"><button class="btn" data-launch="${t.id}">Start →</button><button class="btn secondary" data-edit="${t.id}">Edit</button><button class="btn ghost" data-delete="${t.id}">Delete</button></div></article>`).join('')}</div>`:'<div class="studio-empty">No saved custom mocks yet. Paste a question to create your first one.</div>'}</div></section>`,'Self-Prepare Mock Studio','Your questions. Your mock. Your rules.');
 function paint(){
  const p=parse(draftText,subject),e=validation(p,mode,subject);
  document.getElementById('studio-count').textContent=p.blocks+' blocks';
  document.getElementById('studio-save').disabled=!!e.length;
  const status=document.getElementById('studio-status');status.className='studio-status '+(e.length?'studio-has-errors':'studio-valid');status.textContent=e.length?e.slice(0,7).join(' · '):'✓ All checks passed. Ready to save your mock.';
  p.counts.forEach((n,i)=>{document.getElementById('studio-num-'+i).textContent=n+(mode==='full'?'/25':'');document.getElementById('studio-bar-'+i).style.width=Math.min(100,n/25*100)+'%'});
 }
 document.getElementById('studio-full').onclick=()=>{mode='full';setDraft();render({shell,begin,nav})};
 document.getElementById('studio-section').onclick=()=>{mode='section';setDraft();render({shell,begin,nav})};
 document.getElementById('studio-subject')?.addEventListener('change',e=>{subject=e.target.value;setDraft();render({shell,begin,nav})});
 document.querySelectorAll('[data-sample]').forEach(b=>b.onclick=()=>{sampleSubject=b.dataset.sample;document.querySelectorAll('[data-sample]').forEach(x=>x.classList.toggle('is-on',x===b));document.getElementById('studio-sample').textContent=sample[sampleSubject]});
 document.getElementById('studio-name').oninput=e=>{draftName=e.target.value;setDraft()};
 document.getElementById('studio-text').oninput=e=>{draftText=e.target.value;setDraft();paint()};
 document.getElementById('studio-copy').onclick=async()=>{const t=sample[sampleSubject];try{await navigator.clipboard.writeText(t);document.getElementById('studio-copy').textContent='✓ Copied'}catch{document.getElementById('studio-sample').focus();alert('Clipboard unavailable; select and copy the sample text.')}};
 document.getElementById('studio-insert').onclick=()=>{draftText+=(draftText.trim()?'\n\n---\n\n':'')+sample[sampleSubject];document.getElementById('studio-text').value=draftText;setDraft();paint()};
 document.getElementById('studio-preview').onclick=()=>{const p=parse(draftText,subject),zone=document.getElementById('studio-preview-zone');zone.innerHTML='<h3>Question preview</h3>'+p.questions.slice(0,8).map((q,i)=>`<div class="studio-preview-card"><small>${esc(q.subject)} · Q${i+1}</small><b>${esc(q.question)}</b>${q.options.map((o,j)=>`<div class="${j===q.answer?'studio-correct':''}">${'ABCD'[j]}. ${esc(o)}</div>`).join('')}<p><strong>Explanation:</strong> ${esc(q.explanation)}</p></div>`).join('')+(p.questions.length>8?'<p>Showing first 8 questions only.</p>':'')+(!p.questions.length?'<p>No valid questions to preview yet.</p>':'');zone.scrollIntoView({behavior:'smooth',block:'nearest'})};
 document.getElementById('studio-save').onclick=()=>{
  const parsed=parse(draftText,subject),issues=validation(parsed,mode,subject);if(issues.length)return alert(issues.join('\n'));
  if(!draftName.trim()||draftName.trim().length<3)return alert('Give this mock a name of at least 3 characters.');
  const x=read(),id='custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8);
  const sorted=mode==='full'?subjects.flatMap(s=>parsed.questions.filter(q=>q.subject===s)):parsed.questions;
  const t={id,name:draftName.trim().slice(0,70),type:mode,subject:mode==='section'?subjects[slug.indexOf(subject)]:null,subjectIndex:mode==='section'?slug.indexOf(subject):null,level:'Self-prepared',minutes:mode==='full'?60:15,marks:sorted.length*2,questionCount:sorted.length,questions:sorted,sourceText:draftText,createdAt:new Date().toISOString()};
  x.tests.unshift(t);saveData(x);D.catalog.push(t);draftText='';draftName='';setDraft();alert('Custom mock saved! Find it in My Custom Mocks.');render({shell,begin,nav});
 };
 document.querySelectorAll('[data-launch]').forEach(b=>b.onclick=()=>{const t=D.catalog.find(x=>x.id===b.dataset.launch);if(t)begin(t)});
 document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{let t=getSaved().find(x=>x.id===b.dataset.edit);if(!t)return;mode=t.type;subject=t.type==='section'?slug[t.subjectIndex]:'REASONING';draftName=t.name+' (edited)';draftText=t.sourceText||'';setDraft();render({shell,begin,nav});window.scrollTo({top:0,behavior:'smooth'})});
 document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{if(!confirm('Delete this saved custom mock? Past attempts remain in your history.'))return;const id=b.dataset.delete,x=read();x.tests=x.tests.filter(t=>t.id!==id);saveData(x);const idx=D.catalog.findIndex(t=>t.id===id);if(idx>=0)D.catalog.splice(idx,1);render({shell,begin,nav})});
}
window.CGL_STUDIO={
 init(username,data){D=data;store='cgl-arena-studio-v1:'+username;const x=read();draftName=x.drafts?.name||'';draftText=x.drafts?.text||'';mode=x.drafts?.mode==='full'?'full':'section';subject=slug.includes(x.drafts?.subject)?x.drafts.subject:'QUANT';records=x.tests;const oldGet=D.getQuestions;D.getQuestions=t=>t?.id?.startsWith('custom-')?t.questions:oldGet(t);D.catalog.push(...x.tests.filter(t=>t&&typeof t.id==='string'&&t.id.startsWith('custom-')&&Array.isArray(t.questions)));},
 render,parse,validation,sample
};
})();
