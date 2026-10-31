(function playModule(){
'use strict';
const h=window.HQ,art=window.HQ_ART,{eras,events,questions,state,save,esc,explored,wins,xp,rank,open,count,complete,badges,toast,persist,go,capture,select,render}=h;
const heroData=[
['gandhi','Mahatma Gandhi','THE SATYAGRAHI',3,'🕊️','Mass movements','Made non-violent resistance a nationwide political force.',['Champaran · 1917','Dandi March · 1930','Quit India · 1942'],'3-0','#f1c76d','#e77d68'],
['bhagat','Bhagat Singh','THE REVOLUTIONARY',3,'⚡','Revolutionary nationalism','His revolutionary ideas inspired generations of young Indians.',['HSRA revolutionary','Assembly case · 1929','Executed · 1931'],'3-6','#f5a779','#d57670'],
['rani','Rani Lakshmibai','THE WARRIOR QUEEN',1,'⚔️','1857 revolt','A leading figure of the Revolt of 1857 who defended Jhansi.',['1857–58 resistance','Jhansi centre','Died · 1858'],'1-0','#e9b0a9','#976ac9'],
['bose','Subhas Chandra Bose','THE COMMANDER',4,'✪','Azad Hind','Led the Indian National Army movement and proclaimed the Azad Hind Government.',['Forward Bloc · 1939','Azad Hind · 1943','INA leadership'],'4-6','#94d3bc','#588eaf'],
['ambedkar','B. R. Ambedkar','THE RIGHTS CHAMPION',3,'⚖️','Representation & justice','A major champion of social justice and chief architect of India’s Constitution.',['Poona Pact · 1932','Drafting Committee · 1947','Constitutional reforms'],'3-12','#9bc4e8','#747aca'],
['nehru','Jawaharlal Nehru','THE VISIONARY',3,'✦','Purna Swaraj','Presided over the Lahore Congress session that adopted the Purna Swaraj goal.',['Lahore · 1929','Purna Swaraj','First PM · 1947'],'3-9','#a0e3ca','#72a8a9'],
['tilak','Bal Gangadhar Tilak','THE FIREBRAND',2,'🔥','Nationalism','Advocated Swaraj and founded a Home Rule League.',['Surat split · 1907','Home Rule · 1916','Kesari newspaper'],'2-7','#f3c88a','#d2765d'],
['rammohan','Raja Rammohan Roy','THE SOCIAL REFORMER',0,'🌱','Social reform','Pioneered social and religious reforms in early nineteenth-century India.',['Brahmo Sabha · 1828','Campaigned against sati','Modern education'],'0-7','#f4c2dc','#ad83ca'],
['dayanand','Dayanand Saraswati','THE VEDIC REFORMER',1,'☀️','Arya Samaj','Founded Arya Samaj and urged reform based on Vedic teachings.',['Arya Samaj · 1875','Satyarth Prakash','Back to the Vedas'],'1-3','#f6ca8c','#bf8b5b'],
['sirsyed','Sir Syed Ahmad Khan','THE EDUCATOR',1,'📖','Aligarh movement','Promoted modern education through institutions at Aligarh.',['MAO School · 1875','MAO College · 1877','Educational reform'],'1-4','#add2e8','#6b92c6']
];
const topics=['Company rule','Company rule','British Acts','Land & reforms','British Acts','1857 revolt','British Acts','Social reform','Congress','Swadeshi','British Acts','Congress','Gandhian movements','Gandhian movements','British Acts','Gandhian movements','British Acts','British Acts','Congress','Gandhian movements','Gandhian movements','British Acts','Gandhian movements','Revolutionaries','Constitution','Independence'];
function heroes(){
 const selected=heroData.filter(x=>state.heroFilter==='all'||String(x[3])===String(state.heroFilter));
 return `<section class="heroes-banner"><div><span class="eyebrow">✪ THE LEGENDS COLLECTION</span><h1>Every hero has<br><em>a story worth unlocking.</em></h1><p>Explore ten illustrated history character cards. Connect each life to the milestone that made it unforgettable.</p><div class="hero-banner-pills"><span>🎭 TEN LEGENDS</span><span>📜 REAL EXAM FACTS</span><span>✦ FIVE ERAS</span></div></div><div class="banner-crown">♛</div></section><div class="hero-filters">${[['all','All legends'],[0,'Company era'],[1,'Crown & revolt'],[2,'Nationalism'],[3,'Mass movements'],[4,'Independence']].map(([id,label])=>`<button data-filter-hero="${id}" class="${String(state.heroFilter)===String(id)?'on':''}">${label}</button>`).join('')}</div><div class="collectible-grid">${selected.map((v,i)=>heroCard(v,i)).join('')}</div>`;
}
function heroCard(a,i){
 const [id,name,epithet,era,icon,role,bio,facts,event,color1,color2]=a;
 const locked=!open(era);
 return `<article class="collectible" style="--portrait-a:${color1};--portrait-b:${color2}"><div class="collectible-visual"><span class="collectible-series">LEGEND · ${String(i+1).padStart(2,'0')}</span><div class="collectible-portrait">${art.portrait(id,name)}</div><span class="collectible-emblem">${icon}</span></div><div class="collectible-info"><small>${esc(epithet)}</small><h3>${esc(name)}</h3><p>${esc(bio)}</p><div class="collectible-facts">${facts.map(f=>`<span>✦ ${esc(f)}</span>`).join('')}</div><button data-qaction="hero-dossier" data-hero="${id}">OPEN HERO DOSSIER ↗</button></div></article>`;
}
function dossier(heroId){
 const hero=heroData.find(x=>x[0]===heroId);if(!hero)return;
 const [id,name,epithet,era,icon,role,bio,facts,event,c1,c2]=hero;
 document.getElementById('hero-dossier')?.remove();
 const overlay=document.createElement('div');
 overlay.id='hero-dossier';overlay.className='hero-modal-backdrop';
 const relevant=id==='bhagat'?null:events.find(x=>x.id===event);
 overlay.innerHTML=`<section class="hero-modal" role="dialog" aria-modal="true" aria-labelledby="hero-modal-title"><button class="hero-modal-close" data-close-dossier aria-label="Close hero dossier">×</button><div class="hero-modal-art" style="--portrait-a:${c1};--portrait-b:${c2}">${art.portrait(id,name)}<span>${icon} ${esc(epithet)}</span></div><div class="hero-modal-body"><span class="eyebrow">✪ CHARACTER DOSSIER / ${esc(eras[era].period)}</span><h2 id="hero-modal-title">${esc(name)}</h2><h3>${esc(role)}</h3><p>${esc(bio)}</p><div class="hero-modal-facts"><h4>⚡ POWER FACTS</h4>${facts.map(f=>`<div>✦ ${esc(f)}</div>`).join('')}</div><div class="hero-modal-actions"><button class="action-primary" data-close-dossier>BACK TO HEROES</button>${relevant&&open(relevant.era)?`<button class="hero-story-link" data-dossier-event="${relevant.id}">EXPLORE LINKED EVENT →</button>`:''}</div>${!relevant?'<small>Hero dossier only · A matching dedicated event is not in the current timeline.</small>':''}</div></section>`;
 document.body.appendChild(overlay);
 overlay.addEventListener('click',evt=>{const go=evt.target.closest('[data-dossier-event]');if(go){overlay.remove();select(go.dataset.dossierEvent);return}if(evt.target===overlay||evt.target.closest('[data-close-dossier]'))overlay.remove()});
 overlay.addEventListener('keydown',evt=>{if(evt.key==='Escape')overlay.remove()});
 overlay.querySelector('[data-close-dossier]')?.focus();
}
function deck(){return events.filter(x=>state.forgeRegion==='all'||x.era===Number(state.forgeRegion))}
function forge(){
 const deckList=deck(),ev=deckList[state.forgeIndex]||deckList[0];
 return `<div class="forge-heading"><span class="eyebrow">🧠 MEMORY FORGE / ACTIVE RECALL LAB</span><h1>Flip the memory.<br><em>Forge the knowledge.</em></h1><p>Think of the date, leader and consequence. Then flip the card to reveal its exam memory spell.</p></div><div class="forge-grid"><section class="forge-main"><div class="forge-tools"><span>DECK ${state.forgeIndex+1} / ${deckList.length}</span><select id="forge-chapter" aria-label="Filter flashcards by chapter"><option value="all">All 5 worlds</option>${eras.map((ch,i)=>`<option value="${i}" ${String(state.forgeRegion)===String(i)?'selected':''}>${esc(ch.name)}</option>`).join('')}</select></div><button class="big-flashcard ${state.flipped?'face-up':''}" data-faction="flip"><span class="flash-sigil">✧</span><span class="flash-kicker">${state.flipped?'✦ MEMORY REVEALED':'CHALLENGE · YEAR '+esc(ev.year)}</span><strong>${esc(ev.title)}</strong><p>${state.flipped?esc(ev.hook):'Who was involved? What happened? Which event came next? Recall before you flip.'}</p><small>↻ TAP TO ${state.flipped?'HIDE':'FLIP'} THE CARD</small><span class="flash-bottom">✦ &nbsp; ✦ &nbsp; ✦</span></button><div class="forge-actions"><button data-faction="prev">← PREVIOUS</button><button class="action-primary" data-faction="know">${save.learned[ev.id]?'✓ ALREADY LEARNED':'✓ I REMEMBER · +10 XP'}</button><button data-faction="next">NEXT →</button></div><div class="forge-meter"><i style="width:${(state.forgeIndex+1)/deckList.length*100}%"></i></div><p class="forge-bottom">Tip: One memory is learned when you click “I remember.” It is tested independently in Boss Battle.</p></section><aside class="forge-guide"><span>✨ THREE MEMORY SUPERPOWERS</span><div><b>01 • LOOK 👁️</b><p>Read the heading and recall its year.</p></div><div><b>02 • CONNECT 🔗</b><p>Attach a person and one cause or consequence.</p></div><div><b>03 • RETRIEVE 🧠</b><p>Flip and check. Repeat missed information.</p></div><button data-go="boss">⚔️ Ready to enter the Boss Battle?</button></aside></div>`;
}
function newRun(ids,mode){
 if(!ids.length){toast('🏆 No weak questions left! Fight a full round instead.');return}
 state.run={id:Date.now().toString(36),mode,ids:[...ids],pos:0,picks:{},finished:false};
 persist();go('boss');
}
function weakQuestions(){
 const list=save.runs.slice(0,3);const wrong=new Set();
 for(const run of list)for(const id of run.ids)if(run.picks[id]!==questions[id]?.[2])wrong.add(Number(id));
 return [...wrong].sort((a,b)=>a-b);
}
function stats(run){
 if(!run)return {right:0,wrong:0,count:0,combo:0,max:0};
 let right=0,wrong=0,combo=0,max=0;
 for(const id of run.ids){if(run.picks[id]===undefined)continue;if(run.picks[id]===questions[id][2]){right++;combo++;max=Math.max(combo,max)}else{wrong++;combo=0}}
 return {right,wrong,count:right+wrong,combo,max};
}
function bossLobby(){
 const last=save.runs[0],weak=weakQuestions();
 return `<div class="boss-lobby"><div class="boss-sky"><span>✦</span><span>✧</span><span>★</span></div><div class="boss-intro"><span class="eyebrow">⚔️ THE FINAL TEST / MODERN HISTORY</span><h1>Defeat the<br><em>Time Tyrant.</em></h1><p>26 questions stand between you and the historian crown. Each correct answer weakens the boss. Every mistake reveals a danger zone you can fight again.</p><div class="boss-pills"><span>⚔️ 26 QUESTIONS</span><span>✦ UP TO 520 QUIZ XP</span><span>🔥 COMBO STREAKS</span></div><div class="boss-lobby-actions"><button class="action-primary" data-qaction="start">⚔️ ENTER THE BOSS ARENA</button>${weak.length?`<button class="action-ghost" data-qaction="weak">💥 RETRY ${weak.length} WEAK QUESTIONS</button>`:''}</div>${last?`<small class="boss-last">LAST BATTLE · ${last.correct}/${last.total} correct · ${new Date(last.ended).toLocaleDateString()}</small>`:''}</div><div class="boss-monster"><div class="boss-outer">⏳</div><div class="boss-eye">✦ ✦</div><div class="boss-shadow"></div></div></div>`;
}
function bossFight(){
 const run=state.run,id=run.ids[run.pos],q=questions[id],pick=run.picks[id],has=pick!==undefined,score=stats(run),hp=Math.max(0,100-Math.round(score.right/run.ids.length*100)),stamina=Math.max(0,100-score.wrong*8);
 return `<section class="battle-scene"><div class="battle-top"><button data-qaction="leave">← LEAVE ARENA</button><span>${run.mode==='weak'?'💥 WEAK-ZONE REMATCH':'⚔️ TIME TYRANT BOSS BATTLE'}</span><span>ROUND ${run.pos+1} / ${run.ids.length}</span></div><div class="arena"><div class="fighter monster"><div class="fighter-icon">⏳</div><div><b>👹 TIME TYRANT</b><div class="health"><i style="width:${hp}%"></i></div><small>Boss HP: ${hp}%</small></div></div><div class="battle-versus">⚡ VS ⚡</div><div class="fighter player"><div class="fighter-icon">🛡️</div><div><b>🧭 YOUR STAMINA</b><div class="health"><i style="width:${stamina}%"></i></div><small>${stamina}% · 🔥 ${score.max} best combo</small></div></div></div><div class="question-panel"><div class="question-meta"><span>QUESTION ${run.pos+1}/${run.ids.length}</span><span>🎯 ${esc(topics[id])} · ${score.right} hits</span></div><h2>${esc(q[0])}</h2><div class="battle-options">${q[1].map((opt,i)=>`<button data-qaction="answer" data-choice="${i}" ${has?'disabled':''} class="${has?(i===q[2]?'correct':i===pick?'wrong':'muted'):''}"><span>${'ABCD'[i]}</span><b>${esc(opt)}</b><em>${has&&i===q[2]?'✓':''}</em></button>`).join('')}</div>${has?`<div class="question-feedback ${pick===q[2]?'hit':'miss'}"><b>${pick===q[2]?'⚡ CRITICAL HIT! YOU DAMAGED THE BOSS':'🛡️ BOSS COUNTERATTACK! LEARN THIS TRAP'}</b><p>${esc(q[3])}</p></div>`:''}<div class="question-bottom"><span>${score.count}/${run.ids.length} answered</span><button class="action-primary" data-qaction="next" ${!has?'disabled':''}>${run.pos===run.ids.length-1?'🏁 FINISH BATTLE':'NEXT CHALLENGE →'}</button></div></div></section>`;
}
function bossResult(){
 const run=state.run,score=stats(run),wrong=run.ids.filter(id=>run.picks[id]!==questions[id][2]),pct=Math.round(score.right/run.ids.length*100);
 const title=pct===100?'PERFECT LEGEND!':pct>=80?'HISTORY COMMANDER':pct>=60?'RISING FREEDOM FIGHTER':'RECRUIT — KEEP TRAINING';
 return `<div class="result-hero"><div class="victory-stars">✦ ✧ ★ ✦ ✧ ★</div><span class="eyebrow">🏆 BATTLE REPORT / ${run.mode==='weak'?'WEAK-ZONE REMATCH':'FULL CAMPAIGN'}</span><h1>${title}</h1><div class="result-score">${score.right}<small> / ${run.ids.length}</small></div><p>${pct}% accuracy · ${score.max} best combo · ${wrong.length} danger targets</p><div class="result-chips"><span>✓ ${score.right} CORRECT</span><span>✕ ${score.wrong} WRONG</span><span>✦ ${xp()} XP TOTAL</span></div><div class="result-buttons"><button class="action-primary" data-qaction="weak" ${wrong.length===0?'disabled':''}>💥 RETRY ${wrong.length} WEAK QUESTIONS</button><button class="action-ghost" data-go="vault">VIEW DANGER ZONES ↗</button><button class="action-ghost" data-qaction="start">FULL REMATCH ↗</button></div></div>${wrong.length?`<section class="wrong-summary"><h2>🎯 Your danger targets</h2><p>Review the concepts you missed; you can fight these questions again.</p>${wrong.map(id=>`<article><span>${esc(topics[id])}</span><b>${esc(questions[id][0])}</b><p>${esc(questions[id][3])}</p></article>`).join('')}</section>`:''}`;
}
function boss(){return !state.run?bossLobby():state.run.finished?bossResult():bossFight()}
function finish(){
 const run=state.run;if(!run||run.finished)return;
 const score=stats(run);run.finished=true;save.runs.unshift({id:run.id,ids:[...run.ids],picks:{...run.picks},mode:run.mode,correct:score.right,total:run.ids.length,ended:new Date().toISOString()});save.runs=save.runs.slice(0,25);
 persist();render();toast('🏆 Battle finished! '+score.right+'/'+run.ids.length+' correct');
}
function action(btn){
 const type=btn.dataset.qaction||btn.dataset.faction;
 if(type==='hero-dossier'){dossier(btn.dataset.hero);return}
 if(type==='flip'){state.flipped=!state.flipped;render();return}
 if(btn.dataset.faction&&['prev','next','know'].includes(type)){
  const len=deck().length,ev=deck()[state.forgeIndex];
  if(type==='know'){if(!save.learned[ev.id]){save.learned[ev.id]=true;persist();toast('✨ +10 XP memory captured!')}state.forgeIndex=(state.forgeIndex+1)%len}
  else state.forgeIndex=(state.forgeIndex+(type==='next'?1:-1)+len)%len;
  state.flipped=false;render();return;
 }
 if(type==='start'){newRun(questions.map((_,i)=>i),'all');return}
 if(type==='weak'){newRun(weakQuestions(),'weak');return}
 if(type==='leave'){state.run=null;persist();go('boss');return}
 if(type==='answer'){
  const run=state.run;if(!run||run.finished)return;const id=run.ids[run.pos];
  if(run.picks[id]!==undefined)return;
  run.picks[id]=Number(btn.dataset.choice);
  const hit=run.picks[id]===questions[id][2];
  if(hit&&!save.best[id]){save.best[id]=true;toast('⚡ Critical hit! +20 mastery XP')}
  else toast(hit?'⚡ Critical hit!':'💥 Boss counterattack! Learn the explanation.');
  persist();render();return;
 }
 if(type==='next'){const run=state.run;if(!run||run.picks[run.ids[run.pos]]===undefined)return;if(run.pos===run.ids.length-1)finish();else{run.pos++;persist();render()}return}
}
function vault(){
 const danger=new Map();
 for(const run of save.runs)for(const [idString,pick] of Object.entries(run.picks)){const id=Number(idString),topic=topics[id];if(!topic)continue;const row=danger.get(topic)||{topic,attempts:0,wrong:0};row.attempts++;if(pick!==questions[id][2])row.wrong++;danger.set(topic,row)}
 const rows=[...danger.values()].sort((a,b)=>b.wrong-a.wrong);
 const stars=events.filter(ev=>save.starred[ev.id]);
 return `<div class="vault-banner"><div><span class="eyebrow">🏆 INVENTORY / HERO JOURNEY</span><h1>Your legend is<br><em>being written.</em></h1><p>Explore a milestone to earn XP; conquer entire chapters to claim special rewards. Your progress stays in this browser.</p></div><div class="vault-medal"><strong>✦ ${xp()}</strong><span>EXPLORER XP</span></div></div><div class="vault-stats"><div><span>🏅 CURRENT RANK</span><strong>${rank()}</strong></div><div><span>🗺️ WORLD EXPLORED</span><strong>${Math.round(explored()/events.length*100)}%</strong></div><div><span>💎 MEMORY STONES</span><strong>${explored()}/53</strong></div><div><span>⚔️ QUESTION MASTERY</span><strong>${wins()}/26</strong></div></div><div class="vault-columns"><section class="vault-card"><div class="vault-heading"><h2>🏅 Badge treasury</h2><b>${badges().filter(b=>b[2]).length}/8</b></div><div class="badge-treasury">${badges().map(([icon,title,got])=>`<div class="${got?'owned':'sealed'}"><span>${icon}</span><b>${esc(title)}</b><small>${got?'ACHIEVED ✓':'LOCKED'}</small></div>`).join('')}</div></section><section class="vault-card"><div class="vault-heading"><h2>📍 World mastery</h2><b>5 worlds</b></div>${eras.map((era,i)=>{const n=count(i);return `<button class="vault-world" data-enter="${i}" ${!open(i)?'disabled':''}><span>${era.icon}</span><div><b>${esc(era.name)}</b><small>${n} / ${era.nodes.length} memories</small><i><em style="width:${n/era.nodes.length*100}%"></em></i></div><strong>${open(i)?'↗':'🔒'}</strong></button>`}).join('')}</section><section class="vault-card"><div class="vault-heading"><h2>💥 Danger zones</h2><b>Quiz evidence only</b></div>${rows.length?rows.map(x=>`<div class="danger-row"><div><b>${esc(x.topic)}</b><small>${x.wrong} wrong / ${x.attempts} attempts</small></div><i><em style="width:${x.wrong/x.attempts*100}%"></em></i></div>`).join(''):'<div class="vault-empty">🎯<p>Finish the Boss Battle to discover your weak topics.</p></div>'}<button class="vault-button" data-qaction="weak">⚔️ FIGHT MY WEAK ZONES</button></section><section class="vault-card"><div class="vault-heading"><h2>💎 Treasure stash</h2><b>${stars.length} facts saved</b></div>${stars.length?stars.map(ev=>`<button class="treasure-row" data-event="${ev.id}"><b>${esc(ev.year)} · ${esc(ev.title)}</b><small>${esc(ev.hook)}</small></button>`).join(''):'<div class="vault-empty">💎<p>Tap ☆ on any event to save its exam memory spell here.</p></div>'}</section></div>`;
}
window.HQ_PLAY={heroes,forge,boss,vault,action};
})();