(function(){
'use strict';
const shifts=[{"year":2024,"date":"09 Sep","shift":1},{"year":2024,"date":"09 Sep","shift":2},{"year":2024,"date":"09 Sep","shift":3},{"year":2024,"date":"10 Sep","shift":1},{"year":2024,"date":"10 Sep","shift":2},{"year":2024,"date":"10 Sep","shift":3},{"year":2024,"date":"11 Sep","shift":1},{"year":2024,"date":"11 Sep","shift":2},{"year":2024,"date":"11 Sep","shift":3},{"year":2024,"date":"12 Sep","shift":1},{"year":2024,"date":"12 Sep","shift":2},{"year":2024,"date":"12 Sep","shift":3},{"year":2024,"date":"13 Sep","shift":1},{"year":2024,"date":"13 Sep","shift":2},{"year":2024,"date":"13 Sep","shift":3},{"year":2024,"date":"17 Sep","shift":1},{"year":2024,"date":"17 Sep","shift":2},{"year":2024,"date":"17 Sep","shift":3},{"year":2024,"date":"18 Sep","shift":1},{"year":2024,"date":"18 Sep","shift":2},{"year":2024,"date":"18 Sep","shift":3},{"year":2024,"date":"19 Sep","shift":1},{"year":2024,"date":"19 Sep","shift":2},{"year":2024,"date":"19 Sep","shift":3},{"year":2024,"date":"23 Sep","shift":1},{"year":2024,"date":"23 Sep","shift":2},{"year":2024,"date":"23 Sep","shift":3},{"year":2024,"date":"24 Sep","shift":1},{"year":2024,"date":"24 Sep","shift":2},{"year":2024,"date":"24 Sep","shift":3},{"year":2024,"date":"25 Sep","shift":1},{"year":2024,"date":"25 Sep","shift":2},{"year":2024,"date":"25 Sep","shift":3},{"year":2024,"date":"26 Sep","shift":1},{"year":2024,"date":"26 Sep","shift":2},{"year":2024,"date":"26 Sep","shift":3},{"year":2025,"date":"12 Sep","shift":1},{"year":2025,"date":"12 Sep","shift":2},{"year":2025,"date":"12 Sep","shift":3},{"year":2025,"date":"13 Sep","shift":1},{"year":2025,"date":"13 Sep","shift":2},{"year":2025,"date":"13 Sep","shift":3},{"year":2025,"date":"14 Sep","shift":1},{"year":2025,"date":"14 Sep","shift":2},{"year":2025,"date":"14 Sep","shift":3},{"year":2025,"date":"15 Sep","shift":1},{"year":2025,"date":"15 Sep","shift":2},{"year":2025,"date":"15 Sep","shift":3},{"year":2025,"date":"16 Sep","shift":1},{"year":2025,"date":"16 Sep","shift":2},{"year":2025,"date":"16 Sep","shift":3},{"year":2025,"date":"17 Sep","shift":1},{"year":2025,"date":"17 Sep","shift":2},{"year":2025,"date":"17 Sep","shift":3},{"year":2025,"date":"18 Sep","shift":1},{"year":2025,"date":"18 Sep","shift":2},{"year":2025,"date":"18 Sep","shift":3},{"year":2025,"date":"19 Sep","shift":1},{"year":2025,"date":"19 Sep","shift":2},{"year":2025,"date":"19 Sep","shift":3},{"year":2025,"date":"20 Sep","shift":1},{"year":2025,"date":"20 Sep","shift":2},{"year":2025,"date":"20 Sep","shift":3},{"year":2025,"date":"21 Sep","shift":1},{"year":2025,"date":"21 Sep","shift":2},{"year":2025,"date":"21 Sep","shift":3},{"year":2025,"date":"22 Sep","shift":1},{"year":2025,"date":"22 Sep","shift":2},{"year":2025,"date":"22 Sep","shift":3},{"year":2025,"date":"23 Sep","shift":1},{"year":2025,"date":"23 Sep","shift":2},{"year":2025,"date":"23 Sep","shift":3},{"year":2025,"date":"24 Sep","shift":1},{"year":2025,"date":"24 Sep","shift":2},{"year":2025,"date":"24 Sep","shift":3},{"year":2025,"date":"25 Sep","shift":1},{"year":2025,"date":"25 Sep","shift":2},{"year":2025,"date":"25 Sep","shift":3},{"year":2025,"date":"26 Sep","shift":1},{"year":2025,"date":"26 Sep","shift":2},{"year":2025,"date":"26 Sep","shift":3},{"year":2025,"date":"14 Oct","shift":2}];
const subjects=[['all','Full Mock'],['reasoning','Reasoning'],['ga','General Awareness'],['quant','Quant'],['english','English']];
const labels=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let year=2025,sub='all',search='',sourceMode=true;
let D;
const key=p=>'sim-'+p.year+'-'+p.date.replace(' ','').toLowerCase()+'-s'+p.shift;
function init(data){
 D=data;
 const original=D.getQuestions;
 D.getQuestions=function(t){if(t?.simulationQuestions)return t.simulationQuestions;return original(t)};
 shifts.forEach((p,i)=>{
  const seed=i%12+6;
  const base=D.catalog.find(x=>x.id==='full-'+seed);
  if(!base)return;
  const qs=original(base).map(q=>({...q,options:[...q.options]}));
  const order=[0,1,2,3];
  // Preserve the required subject ordering for the 15-minute section lock.
  const full={id:key(p),name:'Practice Simulation · '+p.date+' '+p.year+' Shift '+p.shift,type:'full',minutes:60,marks:200,questionCount:100,level:'Generated practice — not PYQ',simulationQuestions:qs,simulated:true};
  D.catalog.push(full);
  for(let j=0;j<4;j++){
   const sectional={id:key(p)+'-'+subjects[j+1][0],name:'Practice Simulation · '+p.date+' '+p.year+' S'+p.shift+' · '+subjects[j+1][1],type:'section',subject:labels[j],subjectIndex:j,minutes:15,marks:50,questionCount:25,level:'Generated practice — not PYQ',simulationQuestions:qs.slice(j*25,(j+1)*25),simulated:true};
   D.catalog.push(sectional);
  }
 });
}
// Genuine PYQ sources are hosted by their publishers, not copied into CGL Arena.
// Each direct link below was checked against a published 2025 shift-paper page.
const sourceHub='https://prepp.in/ssc-cgl-exam/question%20paper%202025';
const sourceLinks={
 '12 Sep-1':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-12-sep-2025-shift-1-69ec6ee250fe9ad2785db560',
 '12 Sep-2':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-12-sep-2025-shift-2-69eb76ea3030030d19f1a08e',
 '12 Sep-3':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-12-sep-2025-shift-3-69ebc27b239b1a79fc66b339',
 '13 Sep-2':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-13-sep-2025-shift-2-69ec96d4cf5fdc439920e34e',
 '16 Sep-3':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-16-sep-2025-shift-3-69ee362c58e39abaa6ca82e3',
 '17 Sep-1':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-17-sep-2025-shift-1-69ef1b2e0ce447715313eb2f',
 '17 Sep-2':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-17-sep-2025-shift-2-69ef2679089762aca04c2ae1',
 '26 Sep-3':'https://prepp.in/paper/ssc-cgl-tier-1-question-paper-26-sep-2025-shift-3-6a2e9d85f0103f0ac54fcf24'
};
function renderReal2025(shell,begin){
 const papers=shifts.filter(p=>p.year===2025);
 const visible=papers.filter(p=>(p.date+' '+p.year+' shift '+p.shift).toLowerCase().includes(search.toLowerCase()));
 shell(`<section class="pyq-banner"><div><span class="pyq-eyebrow">SSC CGL 2025 · TIER I</span><h2>2025 Genuine PYQ Directory</h2><p>Browse shift-wise original-question collections and online practice pages from external publishers.</p></div><div class="pyq-banner-number"><strong>${papers.length}</strong><span>Indexed shifts</span></div></section>
 <section class="pyq-notice"><b>Real papers are hosted externally, not imported into CGL Arena.</b> The links below lead to published 2025 PYQ resources. A few go directly to a verified shift page; others open the publisher's full 2025 paper directory so you can select the shift. CGL Arena cannot save scores from external websites. The 14 October rescheduled shift is indexed from a separate source.</section>
 <div class="pyq-toolbar"><div class="pyq-years"><button data-pyq-view="real" class="on">2025 Real PYQ Index</button><button data-pyq-view="practice">2025 Generated Practice</button><button data-pyq-view="2024">2024 Practice</button></div><label class="pyq-search-label"><span>Find a shift</span><input id="pyq-search" placeholder="e.g. 12 Sep Shift 2" value="${escapeHtml(search)}"></label></div>
 <div class="pyq-grid">${visible.map(p=>{const direct=sourceLinks[p.date+'-'+p.shift];const url=p.date==='14 Oct'?'https://esenotes.com/ssc-cgl-previous-year-question-paper/':direct||sourceHub;return `<article class="pyq-card"><div class="pyq-card-top"><span class="pyq-year">2025</span><span>${direct?'DIRECT PAPER':'PUBLISHER DIRECTORY'}</span></div><h3>${p.date} 2025</h3><div class="pyq-shift">Shift ${p.shift}</div><p>${direct?'Online 100-question PYQ page':'Locate this shift in the linked PYQ collection'}</p><div class="pyq-card-foot"><span>External resource</span><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${direct?'Open Paper ↗':'Find Paper ↗'}</a></div></article>`}).join('')}</div>
 ${visible.length?'':'<div class="studio-empty">No matching 2025 shifts.</div>'}
 <section class="pyq-action-row"><div><h3>Want tests that run inside CGL Arena?</h3><p>Use Generated Practice for in-app timers and scores, or import your own authorised question sets through Self-Prepare Studio. Generated practice is not genuine PYQ.</p></div><button class="btn" id="pyq-generated">Open Generated Practice →</button></section>`,
 '2025 Previous-Year Papers','2025 shift-wise PYQ sources · External links, not generated mocks');
 document.querySelectorAll('[data-pyq-view]').forEach(b=>b.onclick=()=>{const v=b.dataset.pyqView;year=v==='2024'?2024:2025;sourceMode=v==='real';search='';render({shell,begin})});
 document.getElementById('pyq-generated').onclick=()=>{sourceMode=false;search='';render({shell,begin})};
 document.getElementById('pyq-search').oninput=e=>{search=e.target.value;document.querySelectorAll('.pyq-card').forEach(card=>{const txt=card.textContent.toLowerCase();card.hidden=!txt.includes(search.toLowerCase())})};
}
function render({shell,begin}){
 if(year===2025&&sourceMode){renderReal2025(shell,begin);return;}
 const visible=shifts.filter(p=>p.year===year&&(p.date+' '+p.year+' shift '+p.shift).toLowerCase().includes(search.toLowerCase()));
 shell(`<section class="pyq-banner"><div><span class="pyq-eyebrow">YEAR-WISE EXAM PRACTICE</span><h2>Shift Practice Library</h2><p>Attempt full-length or subject-wise timed practice directly inside CGL Arena. Your answers and results are saved to your profile.</p></div><div class="pyq-banner-number"><strong>${shifts.filter(p=>p.year===year).length}</strong><span>Practice slots</span></div></section>
 <section class="pyq-notice"><b>Important: these are NOT authentic 2024/2025 PYQ questions.</b> The available tests use generated questions from CGL Arena's existing practice bank, and questions may repeat between shift slots. The date/shift labels are for organising practice only. Authentic previous-year questions cannot be claimed until the original question sets and answer keys are sourced, authorised, and checked.</section>
 <div class="pyq-toolbar"><div class="pyq-years"><button data-pyq-real="1">2025 Real PYQs ↗</button><button data-year="2025" class="${year===2025?'on':''}">2025 Generated Practice</button><button data-year="2024" class="${year===2024?'on':''}">2024 Practice</button></div><label class="pyq-search-label"><span>Find a shift</span><input id="pyq-search" placeholder="e.g. 12 Sep Shift 2" value="${escapeHtml(search)}"></label></div>
 <div class="pyq-section-tabs">${subjects.map(([id,name])=>`<button data-pyq-sub="${id}" class="${sub===id?'on':''}">${name}</button>`).join('')}</div>
 <div class="pyq-grid">${visible.map(p=>`<article class="pyq-card"><div class="pyq-card-top"><span class="pyq-year">${p.year}</span><span>GENERATED PRACTICE</span></div><h3>${p.date} ${p.year}</h3><div class="pyq-shift">Shift ${p.shift}</div><p>${sub==='all'?'100 questions · 4 × 15-minute sections':'25 '+subjects.find(s=>s[0]===sub)[1]+' questions · 15 minutes'}</p><div class="pyq-card-foot"><span>+2 / −0.5 marks</span><button class="btn" data-start="${key(p)+(sub==='all'?'':'-'+sub)}">Take Test →</button></div></article>`).join('')}</div>
 ${visible.length?'':'<div class="studio-empty">No matching shift slots.</div>'}
 <section class="pyq-action-row"><div><h3>Want genuine PYQs in the exam player?</h3><p>Use Self-Prepare Studio to import question sets you own or are authorised to reuse. Imported full papers retain four compulsory 15-minute sections.</p></div><a class="btn" href="#/studio">Import in Studio →</a></section>`,'2024–25 Shift Practice','In-app tests · Full and sectional modes · Generated practice questions');
 document.querySelector('[data-pyq-real]')?.addEventListener('click',()=>{year=2025;sourceMode=true;search='';render({shell,begin})});
 document.querySelectorAll('[data-year]').forEach(b=>b.onclick=()=>{year=Number(b.dataset.year);sourceMode=false;render({shell,begin})});
 document.querySelectorAll('[data-pyq-sub]').forEach(b=>b.onclick=()=>{sub=b.dataset.pyqSub;render({shell,begin})});
 document.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>{const t=D.catalog.find(x=>x.id===b.dataset.start);if(t)begin(t)});
 document.getElementById('pyq-search').oninput=e=>{search=e.target.value;document.querySelectorAll('.pyq-card').forEach(card=>{const t=(card.querySelector('h3')?.textContent||'')+' '+(card.querySelector('.pyq-shift')?.textContent||'');card.hidden=!t.toLowerCase().includes(search.toLowerCase())})};
}
window.CGL_PYQ={init,render,shifts};
})();