(function(){
'use strict';
const shifts=[{"year":2024,"date":"09 Sep","shift":1},{"year":2024,"date":"09 Sep","shift":2},{"year":2024,"date":"09 Sep","shift":3},{"year":2024,"date":"10 Sep","shift":1},{"year":2024,"date":"10 Sep","shift":2},{"year":2024,"date":"10 Sep","shift":3},{"year":2024,"date":"11 Sep","shift":1},{"year":2024,"date":"11 Sep","shift":2},{"year":2024,"date":"11 Sep","shift":3},{"year":2024,"date":"12 Sep","shift":1},{"year":2024,"date":"12 Sep","shift":2},{"year":2024,"date":"12 Sep","shift":3},{"year":2024,"date":"13 Sep","shift":1},{"year":2024,"date":"13 Sep","shift":2},{"year":2024,"date":"13 Sep","shift":3},{"year":2024,"date":"17 Sep","shift":1},{"year":2024,"date":"17 Sep","shift":2},{"year":2024,"date":"17 Sep","shift":3},{"year":2024,"date":"18 Sep","shift":1},{"year":2024,"date":"18 Sep","shift":2},{"year":2024,"date":"18 Sep","shift":3},{"year":2024,"date":"19 Sep","shift":1},{"year":2024,"date":"19 Sep","shift":2},{"year":2024,"date":"19 Sep","shift":3},{"year":2024,"date":"23 Sep","shift":1},{"year":2024,"date":"23 Sep","shift":2},{"year":2024,"date":"23 Sep","shift":3},{"year":2024,"date":"24 Sep","shift":1},{"year":2024,"date":"24 Sep","shift":2},{"year":2024,"date":"24 Sep","shift":3},{"year":2024,"date":"25 Sep","shift":1},{"year":2024,"date":"25 Sep","shift":2},{"year":2024,"date":"25 Sep","shift":3},{"year":2024,"date":"26 Sep","shift":1},{"year":2024,"date":"26 Sep","shift":2},{"year":2024,"date":"26 Sep","shift":3},{"year":2025,"date":"12 Sep","shift":1},{"year":2025,"date":"13 Sep","shift":2},{"year":2025,"date":"14 Sep","shift":3},{"year":2025,"date":"15 Sep","shift":1},{"year":2025,"date":"15 Sep","shift":3},{"year":2025,"date":"16 Sep","shift":2},{"year":2025,"date":"17 Sep","shift":2},{"year":2025,"date":"17 Sep","shift":3},{"year":2025,"date":"18 Sep","shift":1},{"year":2025,"date":"19 Sep","shift":2},{"year":2025,"date":"19 Sep","shift":3},{"year":2025,"date":"20 Sep","shift":3},{"year":2025,"date":"21 Sep","shift":1},{"year":2025,"date":"22 Sep","shift":2},{"year":2025,"date":"23 Sep","shift":1},{"year":2025,"date":"24 Sep","shift":2},{"year":2025,"date":"24 Sep","shift":3},{"year":2025,"date":"25 Sep","shift":1},{"year":2025,"date":"26 Sep","shift":1},{"year":2025,"date":"12 Sep","shift":2}];
const subjects=[['all','Full Mock'],['reasoning','Reasoning'],['ga','General Awareness'],['quant','Quant'],['english','English']];
const labels=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let year=2025,sub='all',search='';
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
function render({shell,begin}){
 const visible=shifts.filter(p=>p.year===year&&(p.date+' '+p.year+' shift '+p.shift).toLowerCase().includes(search.toLowerCase()));
 shell(`<section class="pyq-banner"><div><span class="pyq-eyebrow">YEAR-WISE EXAM PRACTICE</span><h2>Shift Practice Library</h2><p>Attempt full-length or subject-wise timed practice directly inside CGL Arena. Your answers and results are saved to your profile.</p></div><div class="pyq-banner-number"><strong>${shifts.filter(p=>p.year===year).length}</strong><span>Practice slots</span></div></section>
 <section class="pyq-notice"><b>Important: these are NOT authentic 2024/2025 PYQ questions.</b> The available tests use generated questions from CGL Arena's existing practice bank, and questions may repeat between shift slots. The date/shift labels are for organising practice only. Authentic previous-year questions cannot be claimed until the original question sets and answer keys are sourced, authorised, and checked.</section>
 <div class="pyq-toolbar"><div class="pyq-years"><button data-year="2025" class="${year===2025?'on':''}">2025 Practice</button><button data-year="2024" class="${year===2024?'on':''}">2024 Practice</button></div><label class="pyq-search-label"><span>Find a shift</span><input id="pyq-search" placeholder="e.g. 12 Sep Shift 2" value="${escapeHtml(search)}"></label></div>
 <div class="pyq-section-tabs">${subjects.map(([id,name])=>`<button data-pyq-sub="${id}" class="${sub===id?'on':''}">${name}</button>`).join('')}</div>
 <div class="pyq-grid">${visible.map(p=>`<article class="pyq-card"><div class="pyq-card-top"><span class="pyq-year">${p.year}</span><span>GENERATED PRACTICE</span></div><h3>${p.date} ${p.year}</h3><div class="pyq-shift">Shift ${p.shift}</div><p>${sub==='all'?'100 questions · 4 × 15-minute sections':'25 '+subjects.find(s=>s[0]===sub)[1]+' questions · 15 minutes'}</p><div class="pyq-card-foot"><span>+2 / −0.5 marks</span><button class="btn" data-start="${key(p)+(sub==='all'?'':'-'+sub)}">Take Test →</button></div></article>`).join('')}</div>
 ${visible.length?'':'<div class="studio-empty">No matching shift slots.</div>'}
 <section class="pyq-action-row"><div><h3>Want genuine PYQs in the exam player?</h3><p>Use Self-Prepare Studio to import question sets you own or are authorised to reuse. Imported full papers retain four compulsory 15-minute sections.</p></div><a class="btn" href="#/studio">Import in Studio →</a></section>`,'2024–25 Shift Practice','In-app tests · Full and sectional modes · Generated practice questions');
 document.querySelectorAll('[data-year]').forEach(b=>b.onclick=()=>{year=Number(b.dataset.year);render({shell,begin})});
 document.querySelectorAll('[data-pyq-sub]').forEach(b=>b.onclick=()=>{sub=b.dataset.pyqSub;render({shell,begin})});
 document.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>{const t=D.catalog.find(x=>x.id===b.dataset.start);if(t)begin(t)});
 document.getElementById('pyq-search').oninput=e=>{search=e.target.value;document.querySelectorAll('.pyq-card').forEach(card=>{const t=(card.querySelector('h3')?.textContent||'')+' '+(card.querySelector('.pyq-shift')?.textContent||'');card.hidden=!t.toLowerCase().includes(search.toLowerCase())})};
}
window.CGL_PYQ={init,render,shifts};
})();