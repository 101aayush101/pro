(function installReviewPlayer(){
'use strict';
const cache=new Map();
let latestRoot=null;
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const asTime=secs=>{let n=Math.max(0,Math.round(Number(secs)||0));return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;};
const labelFor=(a,correct)=>a==null?'Skipped':a===correct?'Correct':'Incorrect';
const statuses={Correct:'right',Incorrect:'wrong',Skipped:'skip'};
function mount({result,questions,filter='all'}){
 const root=document.getElementById('reviewArea');
 if(!root)return;
 latestRoot=root;
 const answers=Array.isArray(result.answers)?result.answers:[];
 const items=questions.map((q,i)=>({q,i,original:answers[i]??null,status:labelFor(answers[i],q.answer)})).filter(item=>filter==='all'||filter==='wrong'&&item.status==='Incorrect'||filter==='skipped'&&item.status==='Skipped'||filter==='correct'&&item.status==='Correct');
 const key=`${result.testId}|${result.timestamp}`;
 let state=cache.get(key);
 if(!state){state={responses:{},checked:{},revealed:{},positions:{},expanded:false};cache.set(key,state);}
 let at=Math.min(Math.max(0,state.positions[filter]||0),Math.max(0,items.length-1));
 const letter='ABCDE';
 function show(){
  if(!root.isConnected)return;
  if(!items.length){
   root.innerHTML='<div class="rp-empty">No questions in this category. Choose another review filter above.</div>';
   return;
  }
  const {q,i,original,status}=items[at];
  const chosen=state.responses[i]??null;
  const checked=!!state.checked[i];
  const reveal=!!state.revealed[i]||checked;
  const isRight=chosen===q.answer;
  const tried=Object.values(state.checked).filter(Boolean).length;
  root.className='rp-review-root'+(state.expanded?' rp-expanded':'');
  root.innerHTML=`
    <div class="rp-layout">
      <aside class="rp-sidebar" aria-label="Question navigator">
        <div class="rp-side-title"><strong>Question Navigator</strong><span>${items.length} in ${escapeHtml(filter)}</span></div>
        <div class="rp-legend"><span><i class="rp-dot rp-right"></i>Correct</span><span><i class="rp-dot rp-wrong"></i>Wrong</span><span><i class="rp-dot rp-skip"></i>Skipped</span></div>
        <div class="rp-palette">${items.map((item,p)=>`<button type="button" class="rp-num rp-${statuses[item.status]} ${p===at?'rp-active':''} ${state.checked[item.i]?'rp-tried':''}" data-rp-goto="${p}" aria-label="Question ${item.i+1}, originally ${item.status}" ${p===at?'aria-current="step"':''}>${item.i+1}</button>`).join('')}</div>
        <div class="rp-tip">Select any question to review it. Your first-attempt score is preserved.</div>
      </aside>
      <section class="rp-stage" aria-label="Question review and practice">
        <div class="rp-toolbar"><div class="rp-counter">QUESTION ${i+1} <span>· ${at+1} of ${items.length} ${escapeHtml(filter==='all'?'questions':filter+' questions')}</span></div><button type="button" class="rp-expand" data-rp-expand aria-label="${state.expanded?'Close expanded review':'Expand review'}">${state.expanded?'↙ Exit full view':'⛶ Expand view'}</button></div>
        <div class="rp-slide" key="${i}">
          <div class="rp-status"><span class="rp-pill rp-${statuses[status]}">Original: ${status}</span><span>Time on original attempt: ${asTime((result.qTimes||[])[i])}</span></div>
          ${q.context?`<pre style="white-space:pre-wrap;font:inherit;font-size:13px;line-height:1.6;border:1px solid #ccd5e0;border-radius:12px;padding:15px;margin-bottom:16px;max-height:320px;overflow-y:auto;background:#f8fafc;color:#1e293b">${escapeHtml(q.context)}</pre>`:""}<h3 class="rp-question">${escapeHtml(q.question)}</h3><div class="rp-saved-original"><strong>Recorded answer in original test:</strong> ${original===null?'Not attempted':letter[original]+'. '+escapeHtml(q.options[original])}<span> You can retry below, but retry selections do not change your original score.</span></div>${q.figure?`<div class="cgl-diagram rp-diagram">${window.CGL_VISUALS?.render(q.figure)||""}</div>`:""}
          <div class="rp-options" role="group" aria-label="Retry question ${i+1}">
            ${q.options.map((opt,j)=>`<button type="button" data-rp-answer="${j}" class="rp-option ${chosen===j?'rp-selected':''} ${reveal&&j===q.answer?'rp-answer-right':''} ${reveal&&chosen===j&&j!==q.answer?'rp-answer-wrong':''}" ${checked?'disabled':''} aria-pressed="${chosen===j?'true':'false'}"><span class="rp-letter">${letter[j]}</span><span class="cgl-option-content">${escapeHtml(opt)}${q.optionFigures?.[j]?`<span class="cgl-option-figure">${window.CGL_VISUALS?.render(q.optionFigures[j])||""}</span>`:""}</span>${reveal&&j===q.answer?'<span class="rp-icon">✓</span>':''}${reveal&&chosen===j&&j!==q.answer?'<span class="rp-icon">×</span>':''}</button>`).join('')}
          </div>
          <div class="rp-action-row">
            ${checked?`<span class="rp-feedback ${isRight?'rp-good':'rp-bad'}">${isRight?'✓ Correct on retry':'✕ Incorrect on retry'}</span><button type="button" class="rp-btn rp-secondary" data-rp-retry>↺ Retry again</button>`:`<button type="button" class="rp-btn rp-primary" data-rp-check ${chosen===null?'disabled':''}>Check answer</button><button type="button" class="rp-btn rp-secondary" data-rp-reveal>${reveal?'Hide solution':'Reveal answer'}</button>`}
          </div>
          ${reveal?`<div class="rp-solution">
             <strong>Correct answer: ${letter[q.answer]}. ${escapeHtml(q.options[q.answer])}</strong>
             <p>${escapeHtml(q.explanation||'Explanation not available.')}</p>
             <div class="rp-original"><strong>Your original response:</strong> ${original===null?'Not attempted':letter[original]+'. '+escapeHtml(q.options[original])} <span>· This retry does not change your ${escapeHtml(result.score)} marks.</span></div>
          </div>`:`<p class="rp-hidden-note">Choose an option and select Check answer, or reveal the solution. Your original answer stays hidden until then.</p>`}
        </div>
        <footer class="rp-footer"><button type="button" class="rp-btn rp-secondary" data-rp-prev ${at===0?'disabled':''}>← Previous</button><div class="rp-progress"><div><span style="width:${(at+1)/items.length*100}%"></span></div><small>${at+1} / ${items.length} · ${tried} retried</small></div><button type="button" class="rp-btn rp-primary" data-rp-next ${at===items.length-1?'disabled':''}>Next question →</button></footer>
      </section>
    </div>`;
  const goNext=(change)=>{const next=at+change;if(next<0||next>=items.length)return;at=next;state.positions[filter]=at;show();};
  root.querySelectorAll('[data-rp-goto]').forEach(b=>b.onclick=()=>{at=Number(b.dataset.rpGoto);state.positions[filter]=at;show();});
  root.querySelectorAll('[data-rp-answer]').forEach(b=>b.onclick=()=>{if(checked)return;state.responses[i]=Number(b.dataset.rpAnswer);show();});
  root.querySelector('[data-rp-check]')?.addEventListener('click',()=>{if(state.responses[i]==null)return;state.checked[i]=true;state.revealed[i]=true;show();});
  root.querySelector('[data-rp-reveal]')?.addEventListener('click',()=>{state.revealed[i]=!state.revealed[i];show();});
  root.querySelector('[data-rp-retry]')?.addEventListener('click',()=>{state.checked[i]=false;state.revealed[i]=false;state.responses[i]=null;show();});
  root.querySelector('[data-rp-prev]')?.addEventListener('click',()=>goNext(-1));
  root.querySelector('[data-rp-next]')?.addEventListener('click',()=>goNext(1));
  root.querySelector('[data-rp-expand]')?.addEventListener('click',()=>{state.expanded=!state.expanded;show();if(state.expanded){root.scrollTop=0;}});
  root.onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){if(e.target.closest('.rp-options'))return;e.preventDefault();goNext(e.key==='ArrowRight'?1:-1);}else if(e.key==='Escape'&&state.expanded){state.expanded=false;show();}};
 }
 show();
}
window.CGL_REVIEW={mount};
})();
