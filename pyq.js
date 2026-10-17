(function(){
'use strict';
/* Local, user-controlled PYQ importer. Never publishes third-party paper text to the repo. */
const SUBJECTS=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const SOURCE='https://www.adda247.com/jobs/ssc-cgl-previous-year-question-paper/';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let D,username,year=2025,records=[],draftQuestions=[],draftName='',status='';
const key=()=> 'cgl-arena-pyq-import-v1:'+username;
function load(){try{const data=JSON.parse(localStorage.getItem(key()));return Array.isArray(data)?data:[]}catch{return []}}
function save(){localStorage.setItem(key(),JSON.stringify(records))}
function getQuestion(t){return t?.pyqLocal?t.questions:null}
function init(data){
 D=data;username=window.CGL_AUTH.getUsername();records=load();
 const original=D.getQuestions;
 D.getQuestions=t=>getQuestion(t)||original(t);
 for(const t of records)if(t&&t.pyqLocal&&Array.isArray(t.questions)&&!D.catalog.some(x=>x.id===t.id))D.catalog.push(t);
}
function parsePaper(text){
 const normalized=text.replace(/\r/g,'').replace(/[\u00a0\u200b]/g,' ').replace(/\s+\n/g,'\n');
 // Supports SSC/solution-paper question headings and four lettered or numbered options.
 const blocks=normalized.split(/(?=^\s*(?:Q(?:uestion)?\.?\s*[-:]?\s*\d{1,3}\s*[.):-]?\s+|\d{1,3}\s*[.)]\s+))/gim).filter(x=>x.trim());
 const out=[];
 for(const raw of blocks){
  const lines=raw.split('\n').map(x=>x.trim()).filter(Boolean);
  if(!lines.length)continue;
  const head=lines[0].match(/^(?:Q(?:uestion)?\.?\s*[-:]?\s*\d{1,3}|\d{1,3})\s*[.):-]?\s+(.*)$/i);
  if(!head)continue;
  const opts=[],qLines=[head[1]],optionRe=/^(?:(?:Option\s*)?([1-4])\s*[.):-]|\(([A-D])\)|([A-D])\s*[.):-])\s*(.+)$/i;
  let started=false;
  for(const line of lines.slice(1)){
   const m=line.match(optionRe);
   if(m){started=true;opts.push(m[4]);}
   else if(!started)qLines.push(line);
   else if(opts.length&& !/^(?:Correct\s*Answer|Answer|Ans\.|Explanation|Solution|Chosen\s*Option|Question\s*ID|Status\s*:)/i.test(line))opts[opts.length-1]+=' '+line;
  }
  if(opts.length!==4)continue;
  const question=qLines.join(' ').trim();
  if(question.length<7)continue;
  const answerMatch=raw.match(/(?:Correct\s*Answer|Correct\s*Option|Answer|Ans\.)\s*[:.-]?\s*(?:Option\s*)?([A-D1-4])\b/i);
  const letter=answerMatch?.[1]?.toUpperCase();
  const answer=letter?('ABCD'.includes(letter)?'ABCD'.indexOf(letter):Number(letter)-1):-1;
  out.push({question,options:opts,answer,explanation:'Imported from your PDF. Check the official answer key for verification.'});
 }
 return out;
}
async function pdfText(file){
 if(!window.pdfjsLib){
  await new Promise((resolve,reject)=>{
   const script=document.createElement('script');
   script.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
   script.onload=resolve;script.onerror=()=>reject(Error('PDF reader could not load. Check internet access.'));
   document.head.appendChild(script);
  });
 }
 const pdfjs=window.pdfjsLib;
 pdfjs.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
 const doc=await pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise;
 let full='';
 for(let p=1;p<=doc.numPages;p++){
  const page=await doc.getPage(p),content=await page.getTextContent();
  let lastY=null,line='';
  for(const item of content.items){
   const y=item.transform?.[5];
   if(lastY!==null&&Math.abs(y-lastY)>3){full+=line+'\n';line=''}
   line+=item.str+' ';
   lastY=y;
  }
  full+=line+'\n';
 }
 return full;
}
function makePaper(questions,answers,name,yr){
 const tokens=answers.toUpperCase().match(/[A-D]/g)||[];
 if(questions.length!==100)throw Error('A full SSC CGL paper needs exactly 100 readable questions. Extracted '+questions.length+'. Try a text-based PDF or paste its question text.');
 if(tokens.length!==100)throw Error('Provide exactly 100 answer letters (A/B/C/D) from the verified answer key; received '+tokens.length+'.');
 const all=questions.map((q,i)=>({...q,subject:SUBJECTS[Math.floor(i/25)],answer:'ABCD'.indexOf(tokens[i]),id:'pyq-'+i}));
 return {id:'pyq-local-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6),name:name.trim().slice(0,80),type:'full',level:'Imported PDF · user-verified answer key',minutes:60,marks:200,questionCount:100,questions:all,pyqLocal:true,year:yr,createdAt:new Date().toISOString()};
}
function importBundle(data){
 if(data?.format!=='cgl-arena-pyq-bundle-v1'||!Array.isArray(data.papers))throw Error('Choose the CGL Arena 2025 converted-question bundle.');
 let added=0,updated=0,skipped=[];
 const next=records.slice();
 for(const p of data.papers){
  const q=p.questions;
  if(!p.complete||!Array.isArray(q)||q.length!==100||q.some((x,i)=>!x||!SUBJECTS.includes(x.subject)||!Array.isArray(x.options)||x.options.length!==4||!Number.isInteger(x.answer)||x.answer<0||x.answer>3)){
   skipped.push(p.name||p.id||'Unknown paper');continue;
  }
  const sorted=SUBJECTS.flatMap(subject=>q.filter(x=>x.subject===subject));
  if(sorted.length!==100||SUBJECTS.some(subject=>sorted.filter(x=>x.subject===subject).length!==25)){
   skipped.push(p.name||'Incorrect subject counts');continue;
  }
  const t={id:String(p.id),name:String(p.name).slice(0,90),type:'full',level:'Uploaded Similar Paper · answers supplied in PDF',minutes:60,marks:200,questionCount:100,questions:sorted,pyqLocal:true,year:Number(p.year)||2025,createdAt:new Date().toISOString(),sourceType:'similar-paper'};
  const ix=next.findIndex(x=>x.id===t.id);
  if(ix>=0){next[ix]=t;updated++}else{next.push(t);added++}
 }
 if(!added&&!updated)throw Error('No complete 100-question papers were found in this bundle.');
 // Save atomically; avoid showing imported papers that could not persist.
 localStorage.setItem(key(),JSON.stringify(next));
 records=next;
 D.catalog=D.catalog.filter(t=>!t.pyqLocal||!next.some(x=>x.id===t.id));
 D.catalog.push(...next);
 return {added,updated,skipped};
}
function render({shell,begin}){
 const saved=records.filter(t=>t.year===year);
 shell(`<section class="pyq-banner"><div><span class="pyq-eyebrow">YOUR PAPERS · YOUR EXAM INTERFACE</span><h2>2024 &amp; 2025 PYQ Tests</h2><p>Import a paper once and take it here with the same 4 × 15-minute exam timer, question navigator and result review.</p></div><div class="pyq-banner-number"><strong>${saved.length}</strong><span>Imported papers</span></div></section>
 <div class="pyq-toolbar"><div class="pyq-years"><button data-pyq-year="2025" class="${year===2025?'on':''}">2025 PYQs</button><button data-pyq-year="2024" class="${year===2024?'on':''}">2024 PYQs</button></div></div>
 <section class="pyq-notice"><b>No fake shift papers.</b> This library contains only papers imported from PDFs you select. The source may include memory-based or similar papers; confirm its authenticity. The questions stay in this browser and are not publicly republished.</section>
 <div class="pyq-grid">${saved.map(t=>`<article class="pyq-card"><div class="pyq-card-top"><span class="pyq-year">${t.year}</span><span>IMPORTED PAPER</span></div><h3>${esc(t.name)}</h3><div class="pyq-shift">100 questions · 60 minutes</div><p>Four compulsory 15-minute sections. Runs entirely in CGL Arena.</p><div class="pyq-card-foot"><button class="btn" data-pyq-start="${t.id}">Start Test →</button><button class="btn secondary" data-pyq-delete="${t.id}">Delete</button></div></article>`).join('')}</div>
 ${saved.length?'':'<div class="studio-empty">No imported '+year+' papers yet. Add your first PDF below to start a genuine paper in this interface.</div>'}
 <section class="pyq-import-panel"><h3>Import all 2025 shifts at once</h3>
 <p>Select the converted JSON bundle prepared from your uploaded 2025pyq.zip. All complete shifts will appear above with Start Test buttons. This is a one-time local import; no external exam website is needed.</p>
 <label for="pyq-bundle-file">2025 question bundle (.json)</label>
 <input id="pyq-bundle-file" type="file" accept=".json,application/json">
 <div id="pyq-bundle-status" role="status">29 complete papers are available in the prepared bundle; 16 Sep Shift 3 requires one missing question.</div>
 </section>
 <section class="pyq-import-panel"><h3>Import a ${year} SSC CGL PDF into CGL Arena</h3>
 <p>Get the PDF from <a href="${SOURCE}" target="_blank" rel="noopener noreferrer">Adda247's previous-year paper directory ↗</a>, then select it here. Text-based PDFs work best; scanned images may require OCR. This import runs locally in your browser.</p>
 <label for="pyq-paper-name">Paper name / date / shift</label><input id="pyq-paper-name" placeholder="e.g. 2025 · 12 Sep · Shift 1" value="${esc(draftName)}">
 <label for="pyq-pdf-file">Select PDF file</label><input type="file" id="pyq-pdf-file" accept=".pdf,application/pdf">
 <label for="pyq-raw-text">Or paste extracted paper text (optional)</label><textarea id="pyq-raw-text" rows="5" placeholder="Q.1 ...&#10;A) ...&#10;B) ...&#10;C) ...&#10;D) ..."></textarea>
 <button class="btn secondary" id="pyq-parse-text">Parse Pasted Text</button>
 <div id="pyq-import-status" role="status">${esc(status||'No paper parsed yet.')}</div>
 <label for="pyq-answers">Verified answer key — 100 letters, A/B/C/D in question order</label>
 <textarea id="pyq-answers" rows="4" placeholder="A B C D A B ... (100 answers)"></textarea>
 <button class="btn" id="pyq-save-paper">Save 100 Questions &amp; Start Test →</button>
 <p class="pyq-import-note">Check question order, diagrams and options before saving. Image-only questions may not extract. No correct-answer guessing: the answer key is required for scoring.</p>
 </section>`,
 'Previous-Year Papers','Local PDF import · Same CGL Arena exam engine');
 document.getElementById('pyq-bundle-file').onchange=async e=>{
  const file=e.target.files?.[0];if(!file)return;
  const statusEl=document.getElementById('pyq-bundle-status');
  try{
   statusEl.textContent='Validating '+file.name+'…';
   if(file.size>12000000)throw Error('JSON file is too large (12 MB limit).');
   const result=importBundle(JSON.parse(await file.text()));
   status='Imported '+result.added+' new and updated '+result.updated+' papers. '+result.skipped.length+' incomplete paper(s) skipped.';
   render({shell,begin});
  }catch(err){statusEl.textContent='Import failed: '+err.message}
 };
 document.querySelectorAll('[data-pyq-year]').forEach(b=>b.onclick=()=>{year=Number(b.dataset.pyqYear);draftQuestions=[];status='';render({shell,begin})});
 document.querySelectorAll('[data-pyq-start]').forEach(b=>b.onclick=()=>{const t=D.catalog.find(x=>x.id===b.dataset.pyqStart);if(t)begin(t)});
 document.querySelectorAll('[data-pyq-delete]').forEach(b=>b.onclick=()=>{if(!confirm('Delete this imported paper from this browser?'))return;records=records.filter(t=>t.id!==b.dataset.pyqDelete);save();const i=D.catalog.findIndex(t=>t.id===b.dataset.pyqDelete);if(i>=0)D.catalog.splice(i,1);render({shell,begin})});
 const show=msg=>{status=msg;document.getElementById('pyq-import-status').textContent=msg};
 document.getElementById('pyq-paper-name').oninput=e=>{draftName=e.target.value};
 document.getElementById('pyq-pdf-file').onchange=async e=>{
  const file=e.target.files?.[0];if(!file)return;
  if(file.size>25*1024*1024){show('PDF too large (maximum 25 MB).');return}
  try{show('Reading '+file.name+'…');const raw=await pdfText(file);draftQuestions=parsePaper(raw);if(!draftName)draftName=file.name.replace(/\.pdf$/i,'');document.getElementById('pyq-paper-name').value=draftName;show('Extracted '+draftQuestions.length+' complete four-option questions. '+(draftQuestions.length===100?'Ready for answer key.':'A full paper requires 100. Try a different PDF or pasted text.'))}catch(err){show('PDF import error: '+err.message)}
 };
 document.getElementById('pyq-parse-text').onclick=()=>{draftQuestions=parsePaper(document.getElementById('pyq-raw-text').value);show('Parsed '+draftQuestions.length+' complete questions. '+(draftQuestions.length===100?'Ready for answer key.':'Need 100 for a full mock.'))};
 document.getElementById('pyq-save-paper').onclick=()=>{try{if(!draftName.trim())throw Error('Enter a paper name.');const t=makePaper(draftQuestions,document.getElementById('pyq-answers').value,draftName,year);records.unshift(t);save();D.catalog.push(t);draftQuestions=[];status='';begin(t)}catch(err){show(err.message)}};
}
window.CGL_PYQ={init,render,parsePaper,importBundle};
})();