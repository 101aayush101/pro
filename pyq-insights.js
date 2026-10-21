(function(){
'use strict';
const SUBJECTS=['General Intelligence','General Awareness','Quantitative Aptitude','English Comprehension'];
const SHORT=['Reasoning','General Awareness','Quantitative Aptitude','English'];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rules=[
 [['Syllogism',/syllogism|conclusions? (?:i|ii|iii)|some (?:are|is|not)|all (?:are|is)|no (?:one|men|women|cats|birds|books|pens)/i],['Coding & Decoding',/coded? (?:as|in)|code language|letter (?:code|transformation)|encoded|decod/i],['Series',/next (?:number|term|letter)|number series|letter series|missing (?:number|term)|series|sequence/i],['Blood Relations',/brother|sister|father|mother|uncle|aunt|nephew|niece|grandfather|grandmother|related to/i],['Direction & Distance',/direction|north|south|east|west|left turn|right turn|distance from/i],['Analogy',/analogy|related to the first|::|pair of words/i],['Seating & Arrangement',/seated|sitting|arrangement|in a row|circular table/i],['Venn & Sets',/venn diagram|set of|intersection/i],['Non-verbal Reasoning',/mirror image|water image|paper fold|embedded figure|count the (?:triangles|squares|rectangles)|figure/i],['Statement & Inference',/statement|assumption|inference|course of action|cause and effect|conclusion follows/i],['Classification',/odd one out|different from the others|does not belong/i]],
 [['Polity & Constitution',/constitution|article \d+|fundamental rights|directive principles|president of india|parliament|lok sabha|rajya sabha|amendment|governor|supreme court|panchayat|judiciary/i],['Modern History',/british india|1857|freedom movement|gandhi|congress session|viceroy|governor.general|swadeshi|non.cooperation|quit india|revolt/i],['Ancient & Medieval History',/maurya|gupta|ashoka|buddha|jain|mughal|sultanate|vedic|harappan|indus valley|chola|pallava|chalukya|temple architecture/i],['Geography',/river|mountain|plateau|soil|climate|monsoon|latitude|longitude|national park|biosphere|ocean|tributary|crop/i],['Economy',/gdp|inflation|rbi|reserve bank|budget|five.year plan|niti aayog|repo rate|economic reform|fiscal|banking|taxation/i],['General Science',/chemical|acid|base|element|compound|cell|photosynthesis|vitamin|hormone|human body|force|electricity|atom|enzyme|disease|blood group/i],['Sports',/olympic|world cup|championship|medal|athlete|sports|cricket|hockey|tennis/i],['Awards & Books',/booker|sahitya|nobel|author of|written by|award|prize|book titled/i],['Current Affairs',/2025|2026|appointed|current|recently|summit|index|report released/i],['Culture & Arts',/festival|dance|classical music|painting|sculpture|heritage|folk|art form/i]],
 [['Geometry',/triangle|circle|angle|centroid|incenter|circumcenter|quadrilateral|polygon|parallel lines|chord|tangent|similar triangles/i],['Mensuration',/surface area|volume|cylinder|cone|sphere|cuboid|prism|pyramid|perimeter|area of|radius|diameter/i],['Trigonometry & Heights',/sin\b|cos\b|tan\b|cot\b|sec\b|cosec\b|angle of elevation|angle of depression|height of a/i],['Algebra',/equation|polynomial|quadratic|roots of|factoris|algebra|x\^2|x²|identity/i],['Statistics & DI',/mean|median|mode|frequency|histogram|bar graph|pie chart|table shows|following chart|standard deviation/i],['Time & Work',/complete the work|work together|work in|pipes? and cistern|efficiency|man.days/i],['Speed & Distance',/train|speed|distance|relative speed|boat|stream|average speed/i],['Profit, Loss & Discount',/profit|loss|discount|marked price|selling price|cost price/i],['Percentage & Ratio',/percentage|percent|ratio|proportion|% of|increased by|decreased by/i],['Interest',/simple interest|compound interest|interest rate|principal amount/i],['Number System',/divisib|remainder|hcf|lcm|prime number|digit|integer/i],['Average & Mixture',/average|mixture|alligation|weighted mean/i]],
 [['Voice & Narration',/passive voice|active voice|direct speech|indirect speech|reported speech|narration|voice of the sentence/i],['Subject–Verb Agreement',/subject.verb|agreement|correct verb|appropriate verb/i],['Error Spotting',/error|incorrect part|grammatical|identify the part/i],['Sentence Improvement',/improve the sentence|sentence improvement|replace the underlined|correct sentence/i],['Vocabulary',/synonym|antonym|meaning of|nearest in meaning|opposite in meaning|one.word|one word|spelling/i],['Idioms & Phrases',/idiom|phrase means|expression means/i],['Cloze & Comprehension',/passage|cloze|comprehension|read the following/i],['Fill in the Blanks',/fill in the blank|most appropriate word|complete the sentence/i],['Para Jumbles',/rearrange|jumbled|correct sequence|order of sentences/i],['Prepositions & Tenses',/preposition|tense|appropriate form of the verb/i]]
];
function classify(q){
 const s=SUBJECTS.indexOf(q.subject),txt=String(q.question||'');
 if(s<0)return {subject:q.subject||'Other',topic:'Unclassified',confidence:'low'};
 for(const [topic,re] of rules[s])if(re.test(txt))return {subject:SUBJECTS[s],topic,confidence:'estimated'};
 return {subject:SUBJECTS[s],topic:'Unclassified',confidence:'low'};
}
function getRows(history,catalog){
 const byId=new Map(catalog.map(t=>[t.id,t]));
 const attempts=[],rows=[];
 for(const h of history){
  const t=byId.get(h.testId);
  if(!t?.pyqLocal||!Array.isArray(h.answers))continue;
  const qs=Array.isArray(h.customQuestions)&&h.customQuestions.length?h.customQuestions:t.questions;
  if(!Array.isArray(qs)||!qs.length)continue;
  const attempt={...h,source:t};
  attempts.push(attempt);
  qs.forEach((q,i)=>{
   const choice=h.answers[i],attempted=Number.isInteger(choice)&&choice>=0&&choice<=3;
   const correct=attempted&&choice===q.answer;
   const c=classify(q);
   rows.push({id:h.testId+':'+h.timestamp+':'+i,attemptId:h.testId,stamp:h.timestamp,questionIndex:i+1,subject:c.subject,topic:c.topic,confidence:c.confidence,correct,wrong:attempted&&!correct,skip:!attempted,attempted,seconds:Array.isArray(h.qTimes)&&Number.isFinite(h.qTimes[i])?Math.max(0,h.qTimes[i]):null,question:q.question||'',name:h.name});
  });
 }
 return {attempts,rows};
}
function aggregate(rows){
 const m=new Map();
 for(const r of rows){
  const key=r.subject+'||'+r.topic;
  if(!m.has(key))m.set(key,{subject:r.subject,topic:r.topic,total:0,correct:0,wrong:0,skip:0,seconds:0,timed:0});
  const x=m.get(key);x.total++;x.correct+=Number(r.correct);x.wrong+=Number(r.wrong);x.skip+=Number(r.skip);
  if(r.seconds!==null){x.seconds+=r.seconds;x.timed++}
 }
 return [...m.values()].map(x=>{
  const n=x.correct+x.wrong,accuracy=n?Math.round(x.correct/n*100):0;
  const rating=n<3?null:Math.min(5,Math.max(1,Math.ceil(accuracy/20)));
  const avgTime=x.timed?Math.round(x.seconds/x.timed):null;
  const priority=(x.wrong*3+x.skip*1.5)+(n>=3?(100-accuracy)/20:0);
  return {...x,attempted:n,accuracy,rating,avgTime,priority};
 });
}
const scoreClass=n=>n>=4?'good':n>=3?'mid':'bad';
const fmt=n=>Number.isFinite(n)?Math.floor(n/60)+'m '+String(Math.round(n%60)).padStart(2,'0')+'s':'—';
const rating=x=>x.rating===null?'<span class="pi-rating na">Insufficient data</span>':`<span class="pi-rating ${scoreClass(x.rating)}" aria-label="${x.rating} out of 5 stars">${'★'.repeat(x.rating)}<span class="pi-dim">${'☆'.repeat(5-x.rating)}</span> <b>${x.rating}/5</b></span>`;
let tab='papers',subject='all',topicSort='priority',trendMode='score',onlyWeak=false,notes={},store='',ui={};
function saveNotes(){try{localStorage.setItem(store,JSON.stringify(notes))}catch(e){console.warn('Could not save topic notes',e)}}
function topicId(x){return x.subject+'||'+x.topic}
function statusOf(x){return notes[topicId(x)]?.status||'todo'}
function overview({attempts,rows,stats}){
 const latest=attempts[0],attempted=rows.filter(r=>r.attempted),correct=rows.filter(r=>r.correct);
 const totalTime=rows.reduce((a,r)=>a+(r.seconds||0),0),avgTime=rows.filter(r=>r.seconds!==null).length?totalTime/rows.filter(r=>r.seconds!==null).length:null;
 const top=stats.filter(x=>x.topic!=='Unclassified'&&x.attempted>=3).sort((a,b)=>b.priority-a.priority).slice(0,3);
 return `<div class="pi-kpis">
 <div class="pi-kpi"><span>Shift attempts</span><strong>${attempts.length}</strong><small>Completed in this browser</small></div>
 <div class="pi-kpi"><span>Latest score</span><strong>${latest?latest.score+'/200':'—'}</strong><small>${latest?esc(latest.name):'Complete a shift to unlock'}</small></div>
 <div class="pi-kpi"><span>Overall accuracy</span><strong>${attempted.length?Math.round(correct.length/attempted.length*100)+'%':'—'}</strong><small>${correct.length} correct / ${attempted.length} attempted</small></div>
 <div class="pi-kpi"><span>Avg question time</span><strong>${fmt(avgTime)}</strong><small>Only questions with recorded timing</small></div></div>
 ${!attempts.length?'<div class="pi-empty"><h3>Your analytics start with your first shift</h3><p>Take any 2025 paper. This dashboard will then show your real score trends, subject accuracy, question timing and topic-level weaknesses.</p><button class="btn" data-pi-switch="papers">Explore 2025 papers →</button></div>':`
 <div class="pi-two"><section class="pi-panel"><div class="pi-panel-heading"><h3>Subject performance</h3><span>Across all PYQ attempts</span></div>
 ${SUBJECTS.map((s,i)=>{const a=rows.filter(r=>r.subject===s),n=a.filter(r=>r.attempted).length,c=a.filter(r=>r.correct).length,p=n?Math.round(c/n*100):0;return `<button class="pi-subrow" data-pi-subject="${i}"><div class="pi-subline"><b>${SHORT[i]}</b><strong>${n?p+'%':'—'}</strong></div><div class="pi-track"><i style="width:${p}%"></i></div><small>${c} correct · ${a.filter(r=>r.wrong).length} wrong · ${a.filter(r=>r.skip).length} skipped</small></button>`}).join('')}</section>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Next best improvements</h3><span>Based on wrong + skipped answers</span></div>
 ${top.length?top.map((x,i)=>`<div class="pi-focus"><span class="pi-rank">0${i+1}</span><div><b>${esc(x.topic)}</b><small>${esc(SHORT[SUBJECTS.indexOf(x.subject)]||x.subject)} · ${x.wrong} wrong · ${x.skip} skipped</small></div>${rating(x)}</div>`).join(''):'<div class="pi-empty-mini">Attempt more questions to identify topic priorities.</div>'}
 <button class="btn secondary pi-wide" data-pi-switch="improve">Open Improvement Studio →</button></section></div>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Score trajectory</h3><span>Chronological PYQ attempts · out of 200</span></div>${trend(attempts)}</section>`}
 `;
}
function trend(attempts){
 if(!attempts.length)return '<div class="pi-empty-mini">No scores yet.</div>';
 const sorted=attempts.slice().reverse().slice(-14);
 return `<div class="pi-trend" role="img" aria-label="Score trend for last ${sorted.length} attempts">${sorted.map((a,i)=>{const score=Math.max(0,Math.min(200,Number(a.score)||0));return `<div class="pi-trend-item" title="${esc(a.name)}: ${a.score}/200"><b>${a.score}</b><div class="pi-trend-col"><i style="height:${Math.max(2,score/2)}%"></i></div><small>${i+1}</small></div>`}).join('')}</div><p class="pi-hint">Left to right: oldest to newest among the last ${sorted.length} attempts. Bars show raw marks, not normalized scores.</p>`;
}
function analytics({attempts,rows,stats}){
 const scoped=subject==='all'?rows:rows.filter(x=>x.subject===SUBJECTS[Number(subject)]);
 const groups=SUBJECTS.map((s,i)=>({s,i,rows:rows.filter(x=>x.subject===s)}));
 const sorted=attempts.slice().sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp));
 return `<div class="pi-panel"><div class="pi-panel-heading"><h3>Attempt intelligence</h3><button class="btn secondary" id="pi-export">↓ Export question analytics CSV</button></div><p class="pi-hint">Raw scores · no percentile or shift normalization</p>
 <div class="pi-attempt-list">${sorted.length?sorted.map(a=>`<div class="pi-attempt"><div><b>${esc(a.name)}</b><small>${new Date(a.timestamp).toLocaleDateString()} · ${a.correct} correct / ${a.wrong} wrong / ${a.skip} skipped</small></div><div class="pi-attempt-score"><b>${a.score}/200</b><span>${a.accuracy}% accuracy</span></div><button class="btn secondary" data-pi-review="${esc(a.testId)}" data-pi-timestamp="${esc(a.timestamp)}">Review →</button></div>`).join(''):'<div class="pi-empty-mini">Take a shift to see score history and detailed reviews.</div>'}</div></div>
 <div class="pi-two"><section class="pi-panel"><div class="pi-panel-heading"><h3>Accuracy by section</h3><span>Attempted questions only</span></div>${groups.map(g=>{const n=g.rows.filter(x=>x.attempted).length,c=g.rows.filter(x=>x.correct).length,p=n?Math.round(c/n*100):0;return `<div class="pi-meter"><div><b>${SHORT[g.i]}</b><strong>${n?p+'%':'—'}</strong></div><div class="pi-track"><i style="width:${p}%"></i></div><small>${c}/${n} correct · ${g.rows.filter(x=>x.skip).length} skipped</small></div>`}).join('')}</section>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Error fingerprint</h3><span>What costs you marks</span></div>
 ${[['Wrong answers',scoped.filter(x=>x.wrong).length,'red'],['Skipped questions',scoped.filter(x=>x.skip).length,'amber'],['Correct answers',scoped.filter(x=>x.correct).length,'green'],['Over 60s per question',scoped.filter(x=>x.seconds!==null&&x.seconds>60).length,'blue']].map(x=>`<div class="pi-error-row"><span class="pi-dot ${x[2]}"></span><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}
 <p class="pi-hint">Timing is counted only when a question has recorded time; slower does not necessarily mean weaker.</p></section></div>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Topic diagnostic</h3><span>Estimated topic labels from question wording</span></div>${subjectTabs()}<div class="pi-topic-table">${topicRows(stats.filter(x=>subject==='all'||x.subject===SUBJECTS[Number(subject)]),false)}</div></section>`;
}
function subjectTabs(){
 return `<div class="pi-subtabs" role="tablist" aria-label="Filter subject"><button role="tab" aria-selected="${subject==='all'}" class="${subject==='all'?'on':''}" data-pi-sub="all">All subjects</button>${SHORT.map((s,i)=>`<button role="tab" aria-selected="${subject===String(i)}" class="${subject===String(i)?'on':''}" data-pi-sub="${i}">${s}</button>`).join('')}</div>`;
}
function topicRows(stats,withAction){
 const ordered=stats.slice().sort((a,b)=>topicSort==='accuracy'?a.accuracy-b.accuracy:topicSort==='time'?(b.avgTime||0)-(a.avgTime||0):b.priority-a.priority);
 const filtered=onlyWeak?ordered.filter(x=>x.wrong||x.skip):ordered;
 return filtered.length?filtered.map(x=>{
 const key=topicId(x),done=statusOf(x),isUnclassified=x.topic==='Unclassified';
 return `<div class="pi-topic-row"><div class="pi-topic-main"><b>${esc(x.topic)}</b><small>${esc(SHORT[SUBJECTS.indexOf(x.subject)]||x.subject)} · ${x.attempted} attempted ${isUnclassified?'· Needs manual classification':''}</small>${withAction&&notes[key]?.note?`<small class="pi-saved-note">✎ ${esc(notes[key].note)}</small>`:''}</div>
 <div class="pi-topic-fig"><strong>${x.attempted?x.accuracy+'%':'—'}</strong><small>${x.correct} ✓ · ${x.wrong} ✕ · ${x.skip} —</small></div>
 <div class="pi-topic-rating">${rating(x)}<small>Avg time: ${fmt(x.avgTime)}</small></div>
 ${withAction?`<div class="pi-topic-actions"><select aria-label="Revision status for ${esc(x.topic)}" data-pi-status="${esc(key)}"><option value="todo" ${done==='todo'?'selected':''}>To revise</option><option value="doing" ${done==='doing'?'selected':''}>Practising</option><option value="done" ${done==='done'?'selected':''}>Revised ✓</option></select><button class="pi-note-btn" data-pi-note="${esc(key)}" title="Add personal revision note">✎ Notes</button></div>`:''}</div>`;
 }).join(''):'<div class="pi-empty-mini">No topic data matches these filters. Take a shift or change the subject filter.</div>';
}
function improve({rows,stats}){
 const list=stats.filter(x=>subject==='all'||x.subject===SUBJECTS[Number(subject)]);
 const classified=list.filter(x=>x.topic!=='Unclassified');
 const done=classified.filter(x=>statusOf(x)==='done').length,doing=classified.filter(x=>statusOf(x)==='doing').length;
 return `<div class="pi-improve-hero"><div><span class="pi-eyebrow">YOUR PERSONAL REVISION COMMAND CENTRE</span><h3>Improve what actually costs marks.</h3><p>Topic ratings, error counts, timed performance and a revision checklist, all connected to your completed shifts.</p></div><div class="pi-improve-count"><strong>${done}<span>/${classified.length}</span></strong><small>Topics revised</small></div></div>
 <div class="pi-kpis pi-kpis-three"><div class="pi-kpi"><span>Topics with evidence</span><strong>${classified.filter(x=>x.attempted>=3).length}</strong><small>At least 3 attempts</small></div><div class="pi-kpi"><span>Currently practising</span><strong>${doing}</strong><small>Marked by you</small></div><div class="pi-kpi"><span>Weak areas to review</span><strong>${classified.filter(x=>x.wrong||x.skip).length}</strong><small>Wrong or skipped questions</small></div></div>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Topic improvement board</h3><span>Ratings: 1–5 based on attempted-question accuracy, only after 3 attempts</span></div>
 ${subjectTabs()}
 <div class="pi-filters"><label>Sort <select id="pi-topic-sort"><option value="priority" ${topicSort==='priority'?'selected':''}>Highest improvement impact</option><option value="accuracy" ${topicSort==='accuracy'?'selected':''}>Lowest accuracy</option><option value="time" ${topicSort==='time'?'selected':''}>Slowest questions</option></select></label><label class="pi-check"><input id="pi-only-weak" type="checkbox" ${onlyWeak?'checked':''}> Show only wrong / skipped topics</label></div>
 <div class="pi-topic-table">${topicRows(list,true)}</div>
 <p class="pi-hint">Topic classification is heuristic, not an official SSC topic tag. Star ratings are diagnostic, not predicted exam ability. “Revised” is your manual checklist and does not change your measured rating.</p></section>
 <section class="pi-panel"><div class="pi-panel-heading"><h3>Question-level improvement queue</h3><span>Recent mistakes and skips · up to 16</span></div>
 ${rows.filter(x=>x.wrong||x.skip).filter(x=>subject==='all'||x.subject===SUBJECTS[Number(subject)]).slice(0,16).map(x=>`<div class="pi-queue"><span class="pi-queue-label ${x.wrong?'wrong':'skip'}">${x.wrong?'Wrong':'Skipped'}</span><div><b>${esc(x.topic)}</b><p>${esc(x.question).slice(0,260)}</p><small>${esc(x.name)} · Q${x.questionIndex} · ${fmt(x.seconds)}</small></div><button class="btn secondary" data-pi-review="${esc(x.attemptId)}" data-pi-timestamp="${esc(x.stamp)}">Review</button></div>`).join('')||'<div class="pi-empty-mini">No mistakes recorded yet. Complete a shift to generate a focused practice queue.</div>'}</section>`;
}
function render(args){
 ui=args;
 const {history=[],catalog=[],shell,begin,renderPapers}=args;
 const {attempts,rows}=getRows(history,catalog),stats=aggregate(rows);
 const tabs=[['papers','Shift Library'],['overview','Overview'],['analytics','Deep Analysis'],['improve','Improve Studio']];
 const content=`<div class="pi-hero"><div><span class="pi-eyebrow">CGL ARENA · PERFORMANCE INTELLIGENCE</span><h2>Shift Practice <span>& Performance Lab</span></h2><p>Learn from every paper. Track every mistake. Build a measurable improvement plan.</p></div><div class="pi-hero-stat"><strong>${attempts.length}</strong><span>Shift attempts</span></div></div>
 <div class="pi-tabs" role="tablist" aria-label="PYQ workspace sections">${tabs.map(([id,label])=>`<button role="tab" aria-selected="${tab===id}" class="${tab===id?'active':''}" data-pi-tab="${id}">${label}</button>`).join('')}</div>
 <div class="pi-content">${tab==='papers'?'<div id="pi-papers"></div>':tab==='overview'?overview({attempts,rows,stats}):tab==='analytics'?analytics({attempts,rows,stats}):improve({attempts,rows,stats})}</div>`;
 shell(content,'2025 Shift Practice','Interactive shift tests · Evidence-based improvement');
 if(tab==='papers')renderPapers(document.getElementById('pi-papers'),args);
 document.querySelectorAll('[data-pi-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.piTab;render(ui)});
 document.querySelectorAll('[data-pi-switch]').forEach(b=>b.onclick=()=>{tab=b.dataset.piSwitch;render(ui)});
 document.querySelectorAll('[data-pi-sub]').forEach(b=>b.onclick=()=>{subject=b.dataset.piSub;render(ui)});
 document.querySelectorAll('[data-pi-subject]').forEach(b=>b.onclick=()=>{subject=b.dataset.piSubject;tab='analytics';render(ui)});
 document.querySelectorAll('[data-pi-status]').forEach(el=>el.onchange=()=>{notes[el.dataset.piStatus]??={};notes[el.dataset.piStatus].status=el.value;saveNotes();render(ui)});
 document.querySelectorAll('[data-pi-note]').forEach(el=>el.onclick=()=>{const key=el.dataset.piNote,old=notes[key]?.note||'';const next=prompt('Your revision note for '+key.split('||')[1],old);if(next===null)return;notes[key]??={};notes[key].note=next.slice(0,1000);saveNotes();el.textContent=next?'✓ Noted':'✎ Notes'});
 const exportBtn=document.getElementById('pi-export');
 if(exportBtn)exportBtn.onclick=()=>{
  const header=['Attempt date','Shift','Question','Subject','Estimated topic','Topic confidence','Outcome','Seconds'];
  const cell=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
  const csv=[header.map(cell).join(','),...rows.map(r=>[r.stamp,r.name,r.questionIndex,r.subject,r.topic,r.confidence,r.correct?'Correct':r.wrong?'Wrong':'Skipped',r.seconds??''].map(cell).join(','))].join('\\r\\n');
  const url=URL.createObjectURL(new Blob(['\\uFEFF'+csv],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='cgl-arena-pyq-analysis.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };
 const sort=document.getElementById('pi-topic-sort');if(sort)sort.onchange=()=>{topicSort=sort.value;render(ui)};
 const weak=document.getElementById('pi-only-weak');if(weak)weak.onchange=()=>{onlyWeak=weak.checked;render(ui)};
 document.querySelectorAll('[data-pi-review]').forEach(el=>el.onclick=()=>{location.hash='#/result/'+el.dataset.piReview+'/'+encodeURIComponent(el.dataset.piTimestamp||'')});
}
function init(username){
 store='cgl-arena-pyq-improve-v1:'+username;
 try{notes=JSON.parse(localStorage.getItem(store))||{}}catch{notes={}}
}
window.CGL_PYQ_INSIGHTS={init,render,classify,getRows,aggregate,open(tabName){if(['papers','overview','analytics','improve'].includes(tabName))tab=tabName}};
})();