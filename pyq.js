(function(){
'use strict';
// This directory lists sourced PYQ tests. No generated questions are presented as PYQs.
// External hosts own their question banks and may require a separate login.
const yearUrls={
 2025:'https://sarkaribuddy.in/ssc-cgl-tier-1/pyqs/2025',
 2024:'https://sarkaribuddy.in/ssc-cgl-tier-1/pyqs/2024'
};
const labels=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const shifts=[
 ...Array.from({length:15},(_,day)=>Array.from({length:3},(_,i)=>({year:2025,date:String(day+12).padStart(2,'0')+' Sep',shift:i+1}))).flat(),
 ...[9,10,11,12,13,17,18,19,23,24,25,26].flatMap(day=>Array.from({length:3},(_,i)=>({year:2024,date:String(day).padStart(2,'0')+' Sep',shift:i+1})))
];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let year=2025,search='';
function init(D){
 // Previous generated PYQ simulations are deliberately not registered in D.catalog.
 // All local mocks remain available in the ordinary Full Length and Sectional libraries.
}
function render({shell}){
 const yearShifts=shifts.filter(p=>p.year===year);
 const visible=yearShifts.filter(p=>(p.date+' '+p.year+' shift '+p.shift).toLowerCase().includes(search.trim().toLowerCase()));
 shell(`<section class="pyq-banner"><div><span class="pyq-eyebrow">SSC CGL · TIER I</span><h2>Real Previous-Year Papers</h2><p>2025 and 2024 shift-wise PYQ tests from an external question-paper provider. No generated questions or simulated shifts.</p></div><div class="pyq-banner-number"><strong>${yearShifts.length}</strong><span>Shift entries</span></div></section>
 <section class="pyq-notice"><b>Genuine PYQ sources only.</b> Start Test opens the ${year} paper collection on SarkariBuddy in a new tab. Select the matching date and shift there to start its real-question test. A separate login or subscription may be required for some papers. These external tests do not save their scores in CGL Arena. The question bank has not been copied into this website.</section>
 <div class="pyq-toolbar"><div class="pyq-years"><button data-pyq-year="2025" class="${year===2025?'on':''}">2025 PYQ Papers</button><button data-pyq-year="2024" class="${year===2024?'on':''}">2024 PYQ Papers</button></div><label class="pyq-search-label"><span>Find date or shift</span><input id="pyq-search" placeholder="e.g. 12 Sep Shift 2" value="${esc(search)}"></label></div>
 <div class="pyq-grid">${visible.map(p=>`<article class="pyq-card"><div class="pyq-card-top"><span class="pyq-year">${p.year}</span><span>EXTERNAL PYQ TEST</span></div><h3>${p.date} ${p.year}</h3><div class="pyq-shift">Shift ${p.shift}</div><p>SSC CGL Tier I · 100 questions · 60 minutes (publisher listing)</p><div class="pyq-card-foot"><span>Choose this shift on the next page</span><a class="btn" href="${yearUrls[p.year]}" target="_blank" rel="noopener noreferrer">Find &amp; Start Test ↗</a></div></article>`).join('')}</div>
 ${visible.length?'':'<div class="studio-empty">No matching shift. Clear the search to see all available dates.</div>'}
 <section class="pyq-action-row"><div><h3>Want genuine PYQs inside the CGL Arena exam screen?</h3><p>The actual 100 questions, answer choices and verified answer key must be supplied or licensed first. You can already import question sets you have permission to use in Self-Prepare Studio.</p></div><a class="btn" href="#/studio">Import PYQ in Studio →</a></section>`,
 '2024–25 Previous-Year Papers','External timed PYQ tests · 2024 and 2025');
 document.querySelectorAll('[data-pyq-year]').forEach(b=>b.onclick=()=>{year=Number(b.dataset.pyqYear);search='';render({shell})});
 document.getElementById('pyq-search').oninput=e=>{search=e.target.value;render({shell});const input=document.getElementById('pyq-search');input.focus();input.setSelectionRange(search.length,search.length)};
}
window.CGL_PYQ={init,render,shifts};
})();