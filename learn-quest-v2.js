(function(){
'use strict';
const db=window.CGL_MODERN_HISTORY_DATA;
if(!db || !Array.isArray(db.eras)) return;
const eras=db.eras,questions=db.questions;
const items=eras.flatMap((e,ei)=>e.nodes.map((n,ni)=>({id:ei+'-'+ni,ei,ni,year:String(n[0]),title:n[1],kind:n[2],story:n[3],people:n[4],fact:n[5]})));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const TOPICS=['Battles & Company','Acts & Reforms','Acts & Reforms','Economy & Land','Acts & Reforms','Revolt of 1857','Acts & Reforms','Social Reform','Congress & Nationalism','Congress & Nationalism','Acts & Reforms','Congress & Nationalism','Gandhian Movements','Gandhian Movements','Acts & Reforms','Gandhian Movements','Acts & Reforms','Congress & Nationalism','Congress & Nationalism','Gandhian Movements','Gandhian Movements','Acts & Reforms','Gandhian Movements','Revolutionaries & INA','Freedom & Partition','Freedom & Partition'];
const WORLDS=[
{tag:'THE ORIGIN STORY',name:'Company Rule Valley',short:'An empire begins',hook:'Discover how trade became power.',icon:'⛵',accent:'#e8a94b',dark:'#79532a',x:142,y:478,boss:'THE MERCHANT KING',region:'The Golden Port'},
{tag:'THE FIRST UPRISING',name:'Revolt Volcano',short:'Sparks of resistance',hook:'Rise through revolt and a new Crown.',icon:'🔥',accent:'#ff877e',dark:'#98444b',x:367,y:267,boss:'THE CROWN GUARD',region:'The Ember Highlands'},
{tag:'THE AWAKENING',name:'Nationalism City',short:'Voices join together',hook:'Unlock the birth of a mass movement.',icon:'🏛️',accent:'#ab9af8',dark:'#55469d',x:584,y:458,boss:'THE DIVIDE',region:'The Congress Citadel'},
{tag:'THE PEOPLE RISE',name:'Gandhi Trail',short:'A nation on the march',hook:'Explore satyagraha, protest and courage.',icon:'🕊️',accent:'#66d9c6',dark:'#177e79',x:812,y:255,boss:'THE SALT WARDEN',region:'The Satyagraha Coast'},
{tag:'THE FINAL QUEST',name:'Freedom Summit',short:'Independence awaits',hook:'Complete the story of 1947.',icon:'🇮🇳',accent:'#ffc879',dark:'#995d29',x:1053,y:132,boss:'THE LAST GATE',region:'The Sunrise Summit'}
];
const HEROES=[
{name:'Mahatma Gandhi',title:'The Satyagraha Strategist',era:3,link:'3-0',style:'glasses',a:'#a8f2df',b:'#2c9787',power:'Non-violent resistance',facts:['Champaran Satyagraha, 1917','Dandi March, 1930','Quit India call, 1942']},
{name:'Rani Lakshmibai',title:'The Queen of Jhansi',era:1,link:'1-0',style:'warrior',a:'#ffcfae',b:'#d65e67',power:'1857 revolt icon',facts:['Leader at Jhansi in 1857','Fought against British forces','Remember Jhansi + 1857']},
{name:'Bhagat Singh',title:'The Revolutionary Spark',era:3,link:'3-6',style:'hat',a:'#ffe7a0',b:'#d18839',power:'Revolutionary courage',facts:['HSRA revolutionary','Assembly bombing, 1929','Executed in 1931']},
{name:'Subhas Chandra Bose',title:'The Azad Hind Commander',era:4,link:'4-6',style:'cap',a:'#b4cef9',b:'#4b73b0',power:'INA leadership',facts:['Provisional Azad Hind Govt, 1943','INA and Jai Hind','Associated with Forward Bloc, 1939']},
{name:'B. R. Ambedkar',title:'The Rights Architect',era:3,link:'3-12',style:'spectacles',a:'#cfc1ff',b:'#7561b6',power:'Social justice & rights',facts:['Poona Pact with Gandhi, 1932','Drafting Committee chairman, 1947','First Law Minister of independent India']},
{name:'Bal Gangadhar Tilak',title:'The Swaraj Challenger',era:2,link:'2-7',style:'turban',a:'#ffd4a8',b:'#d17d42',power:'Home Rule & nationalism',facts:['Home Rule League, 1916','Lal–Bal–Pal association','Swaraj as birthright slogan']},
{name:'Jawaharlal Nehru',title:'The Freedom Visionary',era:3,link:'3-9',style:'nehru',a:'#c8ecff',b:'#3887a4',power:'Purna Swaraj',facts:['Lahore Congress president, 1929','Purna Swaraj resolution','Independent India’s first PM']},
{name:'Raja Rammohan Roy',title:'The Reform Pathfinder',era:0,link:'0-7',style:'turban',a:'#f8d9ac',b:'#bf884c',power:'Social reform',facts:['Brahmo Sabha, 1828','Opposition to sati','Bengal Renaissance figure']},
{name:'Dayanand Saraswati',title:'The Vedic Reformer',era:1,link:'1-3',style:'saffron',a:'#ffd2ac',b:'#cc7844',power:'Arya Samaj',facts:['Arya Samaj founded in 1875','Back to the Vedas','Satyarth Prakash, 1875']},
{name:'Sir Syed Ahmad Khan',title:'The Education Builder',era:1,link:'1-4',style:'fez',a:'#a7e7de',b:'#398e92',power:'Aligarh Movement',facts:['MAO School, 1875','MAO College, 1877','Education-focused reform']},
{name:'A. O. Hume',title:'The Congress Organiser',era:1,link:'1-7',style:'formal',a:'#e8d0ef',b:'#8e6ba9',power:'INC founding',facts:['Key organiser of INC, 1885','First INC session in Bombay','W. C. Bonnerjee was first president']},
{name:'Aruna Asaf Ali',title:'The August Revolution Voice',era:4,link:'4-5',style:'sari',a:'#ffe4bb',b:'#d98a75',power:'Quit India Movement',facts:['Associated with Quit India, 1942','Hoisted flag at Gowalia Tank','Remember the 8 August resolution']}
];
const TRAPS={
'0-0':'1757 = Plassey. 1764 = Buxar. Do not swap them.',
'0-3':'1773 = Governor-General of Bengal. 1833 = Governor-General of India.',
'0-4':'1784 Pitt’s India Act created the Board of Control; not the 1773 Act.',
'0-9':'1833 ended Company trading; 1858 ended Company governing.',
'1-0':'Meerut 10 May 1857; Delhi was a major centre, not the starting place.',
'1-1':'1858 = Crown rule. 1935 = provincial autonomy.',
'1-7':'First INC president was W. C. Bonnerjee, not A. O. Hume.',
'2-1':'1905 Bengal partition, annulled 1911; capital move announced in 1911.',
'2-4':'1909 = separate electorates; 1919 = provincial dyarchy.',
'3-3':'1919 Rowlatt Act vs 1919 Government of India Act are different.',
'3-4':'1919 Act introduced dyarchy; 1935 Act introduced provincial autonomy.',
'3-5':'NCM withdrawn in 1922 after Chauri Chaura, not Jallianwala Bagh.',
'3-7':'Simon Commission appointed 1927; arrived in India 1928.',
'3-9':'Purna Swaraj = Lahore session 1929, not Lucknow 1916.',
'3-10':'Dandi March began 12 March 1930; salt law broken 6 April.',
'3-12':'Poona Pact 1932 involved Gandhi and Ambedkar; not Gandhi–Irwin.',
'4-0':'1935 = provincial autonomy, while 1919 = provincial dyarchy.',
'4-5':'Quit India = 1942; Non-Cooperation = 1920; Dandi = 1930.',
'4-8':'Constituent Assembly first met 9 December 1946; Constitution adopted 26 Nov 1949.'
};
const BADGES=[
['🚀','First Spark',st=>st.visited>=1,'Discover your first historical milestone'],
['🧭','Trailblazer',st=>st.visited>=12,'Explore 12 milestones'],
['🔥','Revolt Survivor',st=>st.completed>=2,'Conquer two regions'],
['🗝️','Gatebreaker',st=>st.completed>=4,'Unlock the final frontier'],
['👑','Freedom Legend',st=>st.completed===5,'Conquer all five regions'],
['📚','Memory Smith',st=>st.visited>=30,'Learn 30 events'],
['⚔️','Boss Challenger',st=>st.runs>=1,'Complete one boss round'],
['💎','Perfect Victory',st=>st.perfect,'Score 100% in a boss round']
];
let u='guest',shell=null,ui={screen:'world',era:0,selected:'0-0',hero:0,card:0,flipped:false,deck:'all',quizMode:'full',toast:'',filter:'all'};
let progress={learned:{},saved:{},mastered:{},answers:{},lastMisses:[],runs:[],battle:null};
const storeKey=()=> 'cgl-arena-learn-modern-v1:'+u;
const save=()=>{try{localStorage.setItem(storeKey(),JSON.stringify(progress))}catch(e){console.warn('CGL History Quest save:',e)}};
function init(username){
 u=username||'guest';
 try{
  const old=JSON.parse(localStorage.getItem(storeKey())||'{}');
  progress.learned=old.learned&&typeof old.learned==='object'?old.learned:{};
  progress.saved=old.saved&&typeof old.saved==='object'?old.saved:{};
  progress.answers=old.answers&&typeof old.answers==='object'?old.answers:{};
  progress.mastered=old.mastered&&typeof old.mastered==='object'?old.mastered:{};
  progress.lastMisses=Array.isArray(old.lastMisses)?old.lastMisses:[];
  progress.runs=Array.isArray(old.runs)?old.runs:[];
  progress.battle=old.battle&&typeof old.battle==='object'?old.battle:null;
  for(const [i,a] of Object.entries(progress.answers)){
   if(questions[Number(i)]&&questions[Number(i)][2]===Number(a))progress.mastered[i]=true;
  }
 }catch(e){console.warn('History progress import:',e)}
}
const learnedCount=i=>eras[i].nodes.filter((_,j)=>!!progress.learned[i+'-'+j]).length;
const unlocked=i=>i===0||Array.from({length:i},(_,j)=>learnedCount(j)>=Math.min(4,eras[j].nodes.length)).every(Boolean);
const completedCount=()=>eras.filter((e,i)=>learnedCount(i)===e.nodes.length).length;
const xp=()=>Object.values(progress.learned).filter(Boolean).length*10+Object.values(progress.mastered).filter(Boolean).length*20+completedCount()*60;
const rank=()=>xp()>=1200?'Bharat Master':xp()>=850?'Revolution Legend':xp()>=550?'History Commander':xp()>=250?'Freedom Fighter':xp()>=100?'Timeline Explorer':'History Recruit';
const stats=()=>({visited:items.filter(n=>progress.learned[n.id]).length,completed:completedCount(),runs:progress.runs.length,perfect:progress.runs.some(r=>r.correct===r.total),unlocked:eras.filter((e,i)=>unlocked(i)).length});
function banner(){
 const st=stats();
 return '<div class="hq-top"><div class="hq-brandline"><span class="hq-live-dot"></span> THE FREEDOM CHRONICLES <span class="hq-edition">MODERN HISTORY · SSC EDITION</span></div>'+
 '<div class="hq-toprow"><div class="hq-title"><div class="hq-kicker">⟡ YOUR ADVENTURE IS LOADING...</div><h2>Rewrite your <em>history</em> of learning.</h2><p>Explore the world. Unlock legendary events. Outsmart the exam boss.</p></div>'+
 '<div class="hq-player"><div class="hq-avatar">✦</div><div><small>PLAYER LEVEL</small><strong>'+esc(rank())+'</strong><span>'+xp()+' XP · '+st.visited+' / '+items.length+' explored</span></div></div></div>'+
 '<div class="hq-progress-line"><span style="width:'+(st.visited/items.length*100)+'%"></span></div></div>';
}
const menu=[['world','🗺️','World Map'],['mission','🧭','Story Quests'],['heroes','🃏','Hero Cards'],['forge','🧠','Memory Forge'],['battle','⚔️','Boss Arena'],['vault','🏆','Treasure Vault']];
function navbar(){return '<nav class="hq-tabs" aria-label="History game modes">'+menu.map(x=>'<button class="'+(ui.screen===x[0]?'on':'')+'" data-hq-screen="'+x[0]+'"><span>'+x[1]+'</span>'+x[2]+'</button>').join('')+'</nav>'}
function setScreen(screen){
 if(screen==='mission'&&!unlocked(ui.era))ui.era=eras.findIndex((e,i)=>unlocked(i));
 if(screen==='battle'&&!progress.battle)startBattle('full');
 else{ui.screen=screen;render()}
}
function notice(msg){ui.toast=msg;render()}
function stage(i){if(!unlocked(i)){const prev=i-1;notice('🔒 Unlock '+WORLDS[i].name+' by exploring at least 4 events in '+WORLDS[prev].name+'.');return}ui.era=i;ui.selected=i+'-0';ui.screen='mission';ui.toast='';render()}
function wanderMap(){
 const marks=['⛵','🔥','🏛','🕊','☀'];
 const pt=WORLDS;
 const route='M142 478 C197 466 178 332 367 267 S494 434 584 458 S705 391 812 255 S1002 211 1053 132';
 let land='';
 for(let j=0;j<32;j++){
  const x=35+(j*139)%1150,y=64+(j*97)%495;
  land+='<circle cx="'+x+'" cy="'+y+'" r="'+(j%3+2)+'" fill="#fff" opacity=".26"/>';
 }
 const decorations='<g class="hq-land" opacity=".66">'+
 '<path d="M0 470 Q124 380 241 510 T470 530 L470 610 L0 610Z" fill="#77b5a0"/>'+
 '<path d="M360 140 Q445 40 520 155 T670 156 L695 0 L360 0Z" fill="#8bb8c1"/>'+
 '<path d="M790 530 Q850 440 975 500 T1200 475 L1200 610 L790 610Z" fill="#84bda7"/>'+
 '<path d="M715 85 L765 16 L814 90 L848 39 L902 115Z" fill="#d5dcda" stroke="#93a7ab" stroke-width="4"/>'+
 '<path d="M22 200 Q95 120 185 194 T340 184" fill="none" stroke="#fff" stroke-width="32" opacity=".2"/>'+
 '<path d="M920 432 Q1017 390 1200 445" fill="none" stroke="#d1ecf1" stroke-width="68" opacity=".75"/>'+
 '<path d="M920 432 Q1017 390 1200 445" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="18 15" opacity=".6"/>'+
 '<g transform="translate(28 305)" fill="#d7a77d"><path d="M0 74 L19 29 L38 74Z"/><path d="M38 74 L57 5 L80 74Z"/><path d="M80 74 L107 24 L131 74Z"/></g>'+
 '<g transform="translate(404 52)" fill="#b0d1c9"><path d="M0 88 L50 0 L102 88Z"/><path d="M80 88 L140 4 L206 88Z"/></g>'+
 '<g transform="translate(943 260)" fill="#d7caa4"><rect x="0" y="33" width="116" height="62" rx="5"/><rect x="47" y="3" width="30" height="90"/><path d="M-12 37 L58 6 L132 37Z" fill="#e2b56f"/><path d="M60 -17 L60 14" stroke="#b88745" stroke-width="5"/><path d="M60 -16 L87 -9 L60 -2" fill="#f5ba6b"/></g>'+
 '<g transform="translate(38 75)" fill="#366f78" opacity=".45"><path d="M22 56 L38 2 L54 56Z"/><path d="M76 56 L94 12 L109 56Z"/><path d="M130 56 L145 3 L163 56Z"/></g>'+
 '<path d="M29 430 C85 391 103 435 165 396" stroke="#fff" stroke-width="3" opacity=".5" fill="none"/>'+
 '</g>';
 const nodes=pt.map((p,i)=>{
  const open=unlocked(i),done=learnedCount(i)===eras[i].nodes.length,active=open&&!done;
  return '<g class="hq-world-node '+(!open?'is-locked':done?'is-conquered':'is-active')+'" data-hq-stage="'+i+'" tabindex="0" role="button" aria-label="'+esc(p.name+(open?', unlocked':', locked'))+'" transform="translate('+p.x+' '+p.y+')">'+
  '<circle class="hq-node-halo" r="54" fill="'+p.accent+'" opacity=".2"/>'+
  '<circle class="hq-node-outer" r="40" fill="#fff4d9" stroke="'+p.accent+'" stroke-width="7"/>'+
  '<circle r="31" fill="'+(open?p.dark:'#8b97a9')+'"/>'+
  '<text text-anchor="middle" y="12" class="hq-node-icon">'+(open?marks[i]:'🔒')+'</text>'+
  '<g transform="translate(-95 58)"><rect width="190" height="62" rx="15" fill="#fffbec" stroke="'+p.accent+'" stroke-width="2"/>'+
  '<text x="95" y="24" text-anchor="middle" class="hq-map-label">'+esc(p.name)+'</text>'+
  '<text x="95" y="44" text-anchor="middle" class="hq-map-small">'+(open?learnedCount(i)+'/'+eras[i].nodes.length+' events explored':'LOCKED · QUEST '+(i+1))+'</text></g>'+
  (done?'<text text-anchor="middle" y="-56" class="hq-node-cleared">★ CLEARED</text>':'')+'</g>';
 }).join('');
 return '<div class="hq-world-frame"><div class="hq-world-sky"><div class="hq-world-caption"><span class="hq-eyebrow">CHAPTER SELECT · CAMPAIGN MAP</span><h3>Five realms. One epic road to 1947.</h3><p>Travel the golden path. Every event you learn gets you closer to freedom.</p></div>'+
 '<svg class="hq-world-svg" viewBox="0 0 1200 610" role="group" aria-label="Five linked playable history regions">'+
 '<defs><linearGradient id="hq-map-sky" x2=".8" y2="1"><stop stop-color="#c7e9db"/><stop offset=".55" stop-color="#c8d9c1"/><stop offset="1" stop-color="#f1d3a1"/></linearGradient><filter id="hq-map-shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#294e4f" flood-opacity=".24"/></filter></defs>'+
 '<rect width="1200" height="610" fill="url(#hq-map-sky)" rx="20"/>'+land+decorations+
 '<circle cx="1092" cy="85" r="82" fill="#fff5c7" opacity=".65"/><circle cx="1092" cy="85" r="46" fill="#fff9dc" opacity=".85"/>'+
 '<path d="'+route+'" class="hq-world-road-edge"/><path d="'+route+'" class="hq-world-road"/><path d="'+route+'" class="hq-world-spark"/>'+
 nodes+
 '<g transform="translate(27 565)"><circle r="31" fill="#fcfae6" stroke="#c5af87" stroke-width="2"/><path d="M0 -23 L7 -7 L23 0 L7 7 L0 23 L-7 7 L-23 0 L-7 -7Z" fill="#a47b53"/><text x="0" y="5" text-anchor="middle" font-size="13" fill="#fff">N</text></g>'+
 '</svg><div class="hq-world-scroll-note">✦ Swipe the map to explore every realm ✦</div></div></div>';
}
function world(){
 const next=eras.findIndex((e,i)=>unlocked(i)&&learnedCount(i)<e.nodes.length);
 return '<section class="hq-landing"><div class="hq-landing-head"><div><span class="hq-eyebrow">CHOOSE YOUR QUEST</span><h3>The Quest for Freedom <span>✦</span></h3></div><div class="hq-quest-status">🏰 '+stats().unlocked+'/5 regions unlocked</div></div>'+
 wanderMap()+
 '<div class="hq-continue"><div><span>📍 YOUR CURRENT CHECKPOINT</span><strong>'+(next>=0?esc(WORLDS[next].name):'The world is yours!')+'</strong><small>'+(next>=0?'Keep discovering events to unlock the next realm.':'All realms explored! Replay a boss battle.')+'</small></div><button class="hq-primary" data-hq-stage="'+(next>=0?next:4)+'">Continue Adventure <span>➜</span></button></div>'+
 '<div class="hq-world-cards">'+WORLDS.map((w,i)=>{
 const can=unlocked(i),done=learnedCount(i),needed=Math.min(4,eras[i].nodes.length),pct=Math.round(done/eras[i].nodes.length*100);
 return '<button class="hq-realm-card '+(!can?'locked':pct===100?'cleared':'')+'" data-hq-stage="'+i+'" style="--realm:'+w.accent+'"><span class="hq-realm-art">'+w.icon+'</span><span class="hq-realm-meta">REALM 0'+(i+1)+' · '+esc(eras[i].period)+'</span><strong>'+esc(w.name)+'</strong><small>'+esc(w.hook)+'</small><span class="hq-realm-progress"><i style="width:'+pct+'%"></i></span><span class="hq-realm-foot">'+(can?done+'/'+eras[i].nodes.length+' discovered · '+(done>=needed?'★ GATE OPEN':'🔑 '+Math.max(0,needed-done)+' until gate'):'🔒 Locked · complete previous quest')+'</span></button>'
 }).join('')+'</div></section>';
}
function missionPath(){
 const e=eras[ui.era],current=WORLDS[ui.era];
 const ns=e.nodes,cols=2,rowH=142,left=210,right=735;
 const points=ns.map((n,i)=>({x:i%2===0?left:right,y:98+i*rowH,id:ui.era+'-'+i,year:n[0],title:n[1],type:n[2]}));
 let roads='';
 for(let i=1;i<points.length;i++){
  const a=points[i-1],b=points[i],middle=(a.y+b.y)/2;
  roads+='<path d="M'+a.x+' '+a.y+' C'+a.x+' '+middle+' '+b.x+' '+middle+' '+b.x+' '+b.y+'" class="hq-mission-road"/>';
 }
 const nodes=points.map((p,i)=>{
  const done=!!progress.learned[p.id],selected=p.id===ui.selected,upNext=i>0&&!progress.learned[points[i-1].id]&&!done;
  return '<g data-hq-event="'+p.id+'" role="button" tabindex="0" aria-label="'+esc(p.year+' '+p.title)+'" transform="translate('+p.x+' '+p.y+')" class="hq-event-node '+(done?'done':'')+(selected?' chosen':'')+'">'+
  '<circle r="39" class="hq-event-orb"/><circle r="26" fill="'+current.dark+'"/>'+
  '<text y="9" text-anchor="middle" class="hq-event-emoji">'+(done?'✓':selected?'✦':i%3===0?'⚔':'♦')+'</text>'+
  '<g transform="translate('+(i%2===0?60:-290)+' -31)"><rect rx="12" width="230" height="67" fill="#fffcf1" stroke="'+(selected?current.accent:'#e0d5bc')+'" stroke-width="'+(selected?3:1.5)+'"/><text x="13" y="24" class="hq-event-title">'+esc(p.year+' · '+p.title).slice(0,29)+'</text><text x="13" y="46" class="hq-event-sub">'+(done?'★ MASTERED':esc(p.type).toUpperCase()+(upNext?' · FUTURE':' · TAP TO REVEAL'))+'</text></g></g>';
 }).join('');
 return '<svg class="hq-mission-svg" viewBox="0 0 960 '+(ns.length*rowH+120)+'" aria-label="Interactive quest milestone journey" role="group">'+
 '<defs><pattern id="hq-dotgrid" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="#bdc8b6" opacity=".55"/></pattern></defs>'+
 '<rect width="960" height="'+(ns.length*rowH+120)+'" fill="#f5f0de"/><rect width="960" height="'+(ns.length*rowH+120)+'" fill="url(#hq-dotgrid)"/>'+
 '<path d="M0 30 Q260 110 470 18 T960 45" stroke="#c1d1b8" stroke-width="60" opacity=".4" fill="none"/>'+
 roads+nodes+'</svg>';
}
function eventCard(){
 const n=items.find(x=>x.id===ui.selected)||items.find(x=>x.ei===ui.era),idx=items.indexOf(n),learned=!!progress.learned[n.id],saved=!!progress.saved[n.id];
 return '<div class="hq-intel"><div class="hq-intel-ribbon">✦ EXAM INTEL UNLOCKED <span>'+esc(n.year)+'</span></div>'+
 '<div class="hq-intel-head"><div class="hq-intel-glyph">'+(n.kind==='Act'?'⚖️':n.kind==='Movement'?'✊':n.kind==='Revolution'?'⚡':'📜')+'</div><div><small>'+esc(n.kind).toUpperCase()+' · CHAPTER '+(ui.era+1)+'</small><h3>'+esc(n.title)+'</h3></div></div>'+
 '<div class="hq-story-card"><span>📜 THE STORY</span><p>'+esc(n.story)+'</p></div>'+
 '<div class="hq-clue-card"><span>👑 KEY CHARACTERS</span><p>'+esc(n.people)+'</p></div>'+
 '<div class="hq-exam-card"><span>🎯 THE EXAM SECRET</span><p>'+esc(n.fact)+'</p></div>'+
 (TRAPS[n.id]?'<div class="hq-trap-card"><span>⚠️ EXAM TRAP</span><p>'+esc(TRAPS[n.id])+'</p></div>':'')+
 '<div class="hq-intel-actions"><button class="hq-primary" data-hq-learn="'+n.id+'">'+(learned?'✅ Learned · 10 XP earned':'✨ Claim memory · +10 XP')+'</button><button class="hq-square-btn" data-hq-save="'+n.id+'" title="Save to your Treasure Vault">'+(saved?'★':'☆')+'</button></div>'+
 '<button class="hq-next-event" data-hq-next="'+n.id+'">'+(idx===items.length-1?'🏁 You reached 1947!':'Next story → '+esc(items[idx+1].year+' · '+items[idx+1].title))+'</button>'+
 '<p class="hq-source-note">Study guide: concise historical events and exam memory cues. Read the complete topic from standard textbooks for full context.</p></div>';
}
function mission(){
 if(!unlocked(ui.era)){ui.era=0;ui.selected='0-0'}
 const e=eras[ui.era],w=WORLDS[ui.era],count=learnedCount(ui.era),need=Math.min(4,e.nodes.length);
 return '<div class="hq-mission"><div class="hq-mission-banner" style="--realm:'+w.accent+';--realm-dark:'+w.dark+'">'+
 '<button class="hq-back" data-hq-screen="world">← World Map</button>'+
 '<div class="hq-mission-banner-art">'+w.icon+'</div><div class="hq-kicker">MISSION 0'+(ui.era+1)+' / 05 · '+esc(e.period)+'</div>'+
 '<h2>'+esc(w.name)+'</h2><p>'+esc(e.desc)+'. '+esc(w.hook)+'</p>'+
 '<div class="hq-mission-progress"><div><b>'+count+' / '+e.nodes.length+' explored</b><span>'+(count>=need?'🔓 Next realm unlocked':'🔑 '+Math.max(0,need-count)+' more to open the next gate')+'</span></div><div class="hq-meter"><i style="width:'+(count/e.nodes.length*100)+'%"></i></div></div></div>'+
 '<div class="hq-mission-layout"><div class="hq-quest-scroll"><div class="hq-quest-scroll-heading"><span>🗺️ CHRONOLOGICAL QUEST ROUTE</span><small>Tap a checkpoint · follow the winding path</small></div>'+missionPath()+'</div><aside class="hq-intel-side">'+eventCard()+'</aside></div>'+
 (ui.era<eras.length-1?'<div class="hq-gate"><span>🏰 THE NEXT REALM AWAITS</span><strong>'+esc(WORLDS[ui.era+1].name)+'</strong><p>'+esc(WORLDS[ui.era+1].hook)+'</p><button data-hq-stage="'+(ui.era+1)+'" class="hq-primary">'+(unlocked(ui.era+1)?'Enter next realm →':'🔒 Explore '+Math.max(0,need-count)+' more milestones')+'</button></div>':
 '<div class="hq-gate"><span>🎉 THE FREEDOM FINALE</span><strong>You have reached 1947!</strong><p>Take the ultimate 26-question boss battle.</p><button data-hq-screen="battle" class="hq-primary">Enter Boss Arena ⚔️</button></div>')+'</div>';
}
function portrait(h,i){
 const id='hq-hero-g-'+i,glass=h.style==='glasses'||h.style==='spectacles',hat=['hat','cap','nehru','fez','turban','warrior','saffron'].includes(h.style),hair=h.style==='formal';
 let crown='';
 if(h.style==='hat')crown='<path d="M45 68 L52 40 Q91 23 126 43 L132 68Z" fill="#8a6346"/><path d="M35 66 Q88 54 142 66" stroke="#76543e" stroke-width="9" stroke-linecap="round"/>';
 if(h.style==='cap'||h.style==='nehru')crown='<path d="M50 59 L56 27 Q87 12 119 30 L126 60Z" fill="'+(h.style==='cap'?'#38626b':'#f6f5ee')+'" stroke="#4b5b61" stroke-width="3"/>';
 if(h.style==='turban'||h.style==='warrior'||h.style==='saffron')crown='<path d="M38 65 Q37 24 85 21 Q137 18 139 65Z" fill="'+(h.style==='saffron'?'#f2b24e':h.style==='warrior'?'#b74053':'#e4a867')+'"/><path d="M48 59 Q86 20 132 50 M41 52 Q79 14 130 39" stroke="#fff0ce" fill="none" stroke-width="6" opacity=".66"/>';
 if(h.style==='fez')crown='<path d="M59 60 L62 23 L116 23 L119 60Z" fill="#a44e58"/><path d="M110 25 L122 12" stroke="#a9884e" stroke-width="3"/>';
 if(!hat)crown='<path d="M46 71 Q42 26 88 29 Q130 27 130 72 Q110 41 84 46 Q62 46 46 71" fill="#343a45"/>';
 const glasses=glass?'<g stroke="#444752" stroke-width="3" fill="none"><circle cx="69" cy="90" r="12"/><circle cx="107" cy="90" r="12"/><path d="M81 89 Q88 84 95 89"/></g>':'';
 const beard=h.style==='saffron'||h.style==='fez'?'<path d="M60 120 Q84 156 113 118 Q111 159 85 161 Q57 152 60 120" fill="#f8f5e7" opacity=".88"/>':'';
 const scarf=h.style==='sari'||h.style==='warrior'?'<path d="M133 127 Q144 157 153 204 L110 204 L115 157Z" fill="#f9e0b4" opacity=".75"/>':'';
 return '<svg class="hq-portrait" viewBox="0 0 180 210" role="img" aria-label="Stylized illustrative avatar of '+esc(h.name)+'"><defs><linearGradient id="'+id+'" x2="1" y2="1"><stop stop-color="'+h.a+'"/><stop offset="1" stop-color="'+h.b+'"/></linearGradient></defs><rect width="180" height="210" rx="20" fill="url(#'+id+')"/>'+
 '<circle cx="143" cy="40" r="55" fill="#fff" opacity=".18"/><circle cx="24" cy="162" r="62" fill="#fff" opacity=".14"/>'+
 '<path d="M16 208 Q24 156 66 149 L86 160 L110 147 Q154 153 162 208" fill="'+(h.style==='saffron'?'#d27843':h.style==='sari'?'#ae5978':h.style==='spectacles'?'#354b6b':'#f3f0e6')+'" stroke="#ffffff5a" stroke-width="2"/>'+
 '<path d="M77 125 L76 162 L100 164 L103 124Z" fill="#c4875e"/>'+
 '<ellipse cx="89" cy="88" rx="44" ry="55" fill="#d49b76"/>'+
 '<ellipse cx="45" cy="96" rx="6" ry="11" fill="#c48767"/><ellipse cx="132" cy="96" rx="6" ry="11" fill="#c48767"/>'+
 (hair?'<path d="M44 67 Q48 26 92 28 Q129 31 133 73" fill="#343a45"/>':'')+crown+
 '<g fill="#343840"><ellipse cx="69" cy="91" rx="3" ry="3"/><ellipse cx="108" cy="91" rx="3" ry="3"/></g>'+glasses+
 '<path d="M84 91 L79 107 L91 108" fill="none" stroke="#a56d51" stroke-width="2.5" stroke-linecap="round"/>'+
 '<path d="M74 121 Q88 131 104 120" fill="none" stroke="#8a5149" stroke-width="2.8" stroke-linecap="round"/>'+
 beard+scarf+
 '<path d="M6 191 Q90 155 174 186" fill="none" stroke="#fff" stroke-width="2" opacity=".4"/>'+
 '</svg>';
}
function heroes(){
 const open=HEROES[ui.hero],idx=ui.hero;
 return '<div class="hq-heroes"><div class="hq-section-head"><div><span class="hq-eyebrow">LEGENDARY COLLECTIBLES · 12 HEROES</span><h3>Meet the history makers <span>✦</span></h3><p>Illustrated character cards with real exam links. Collect their stories, not just their names.</p></div><div class="hq-collection">🃏 '+HEROES.length+' legend cards</div></div>'+
 '<div class="hq-hero-grid">'+HEROES.map((h,i)=>'<button data-hq-hero="'+i+'" class="hq-hero-card '+(idx===i?'selected':'')+'" style="--hero-color:'+h.b+'">'+portrait(h,i)+'<span class="hq-hero-role">✦ '+esc(h.title)+'</span><strong>'+esc(h.name)+'</strong><small>'+esc(h.power)+'</small></button>').join('')+'</div>'+
 '<div class="hq-hero-profile"><div class="hq-profile-art">'+portrait(open,ui.hero)+'</div><div class="hq-profile-content"><span class="hq-eyebrow">HERO CARD · '+String(idx+1).padStart(2,'0')+'</span><h3>'+esc(open.name)+'</h3><p>'+esc(open.title)+' · '+esc(open.power)+'</p><div class="hq-hero-facts">'+open.facts.map((f,i)=>'<div><span>0'+(i+1)+'</span><b>'+esc(f)+'</b></div>').join('')+'</div><button class="hq-primary" data-hq-open-event="'+open.link+'">🗺️ Follow this hero’s story ➜</button></div></div></div>';
}
function deck(){
 let deck=items;
 if(ui.deck==='saved')deck=items.filter(n=>progress.saved[n.id]);
 if(ui.deck==='learned')deck=items.filter(n=>progress.learned[n.id]);
 if(!deck.length)return null;
 const current=deck[ui.card%deck.length];
 return {deck,current,index:ui.card%deck.length};
}
function forge(){
 const x=deck();
 return '<div class="hq-forge"><div class="hq-section-head"><div><span class="hq-eyebrow">THE MEMORY FORGE</span><h3>Turn facts into superpowers 🧠</h3><p>Try active recall first. Then flip the artifact to reveal its exam memory secret.</p></div><div class="hq-forge-decks">'+[['all','Full Deck'],['saved','⭐ Saved'],['learned','✓ Learned']].map(a=>'<button data-hq-deck="'+a[0]+'" class="'+(ui.deck===a[0]?'active':'')+'">'+a[1]+'</button>').join('')+'</div></div>'+
 (x?'<div class="hq-flash-layout"><div class="hq-flash-side"><span>MEMORY MISSION</span><h4>Predict before you flip.</h4><p>What happened, who was involved and what is SSC likely to ask?</p><div class="hq-flash-count">'+(x.index+1)+' / '+x.deck.length+' CARDS</div><div class="hq-meter"><i style="width:'+((x.index+1)/x.deck.length*100)+'%"></i></div><div class="hq-flash-bonus">💡 Mark a card learned to earn 10 XP only once.</div></div>'+
 '<div class="hq-flash-board"><button class="hq-flash '+(ui.flipped?'flipped':'')+'" id="hq-flip"><span class="hq-flash-front"><span class="hq-flash-badge">'+(ui.flipped?'✦ UNLOCKED FACT':'◈ UNDISCOVERED ARTIFACT')+'</span><strong>'+esc(x.current.year)+' · '+esc(x.current.title)+'</strong><p>'+(ui.flipped?esc(x.current.fact):'Can you recall the event, its key people and the exam trap?')+'</p><small>↻ CLICK TO '+(ui.flipped?'TURN BACK':'REVEAL THE SECRET')+'</small></span></button>'+
 '<div class="hq-flash-nav"><button data-hq-card-step="-1">← Previous</button><button class="hq-primary" data-hq-learn="'+x.current.id+'">'+(progress.learned[x.current.id]?'✓ Already learned':'✨ Got it! +10 XP')+'</button><button data-hq-card-step="1">Next →</button></div></div></div>':
 '<div class="hq-empty-forge">🔮 Your '+(ui.deck==='saved'?'Treasure Vault is empty. Bookmark some event cards first.':'collection is empty. Explore the world first.')+'<button data-hq-screen="world">Go explore →</button></div>')+'</div>';
}
function startBattle(mode){
 let sequence=mode==='retry'?Array.from(new Set(progress.lastMisses)).filter(i=>Number.isInteger(i)&&i>=0&&i<questions.length):questions.map((_,i)=>i);
 if(!sequence.length){ui.screen='vault';notice('✨ No weak questions to retry yet. Beat the full boss first!');return}
 progress.battle={mode,sequence,cursor:0,picks:{},streak:0,maxStreak:0};
 ui.screen='battle';save();render()
}
function bossState(){return progress.battle||null}
function currentBoss(){
 const b=bossState();
 if(!b)return null;
 const idx=b.sequence[Math.min(b.cursor,b.sequence.length-1)];
 return {b,idx,q:questions[idx],pick:b.picks[idx]};
}
function boss(){
 const x=currentBoss();
 if(!x)return '<div class="hq-boss-empty"><h3>⚔️ Your opponent awaits.</h3><p>Answer questions to defeat the exam boss. Every miss goes to your weak-zone rematch.</p><button data-hq-begin="full" class="hq-primary">Start Boss Battle</button></div>';
 const b=x.b,answered=x.pick!==undefined,done=b.sequence.filter(i=>b.picks[i]!==undefined).length,total=b.sequence.length,right=b.sequence.filter(i=>b.picks[i]===questions[i][2]).length,hp=100-Math.round(right/total*100),misses=done-right;
 return '<div class="hq-arena"><div class="hq-arena-head"><div><span class="hq-eyebrow">⚔️ '+(b.mode==='retry'?'DANGER ZONE REMATCH':'THE FINAL EXAM BOSS')+'</span><h3>'+(b.mode==='retry'?'Revenge on your weak zones':'Face the Keeper of 1947')+'</h3><p>'+(b.mode==='retry'?'Every wrong answer returns as a rematch. Fix it for good.':'Victory depends on recall, not random guessing. Deal damage by answering.')+'</p></div><button class="hq-arena-exit" data-hq-screen="world">Exit Arena ✕</button></div>'+
 '<div class="hq-boss-stage"><div class="hq-boss-character"><span class="hq-boss-horns">♛</span><div class="hq-boss-face"><span>⚔️</span></div><div class="hq-boss-tag">'+(b.mode==='retry'?'THE WEAKNESS WRAITH':'THE EXAM GUARDIAN')+'</div></div>'+
 '<div class="hq-boss-ui"><div class="hq-boss-health"><b>👹 BOSS HP</b><span>'+hp+'%</span></div><div class="hq-boss-healthbar"><i style="width:'+hp+'%"></i></div><div class="hq-boss-combo"><span>⚡ '+b.streak+' COMBO</span><span>🏹 '+right+' HITS</span><span>🛡 '+misses+' MISSES</span></div></div></div>'+
 '<div class="hq-challenge"><div class="hq-challenge-meta"><span>CHALLENGE '+(b.cursor+1)+' / '+total+'</span><span>🎯 '+esc(TOPICS[x.idx])+'</span></div><h4>'+esc(x.q[0])+'</h4><div class="hq-option-grid">'+x.q[1].map((opt,i)=>'<button data-hq-answer="'+i+'" '+(answered?'disabled':'')+' class="hq-option '+(answered?(i===x.q[2]?'correct':i===x.pick?'wrong':'dim'):'')+'"><span>'+String.fromCharCode(65+i)+'</span>'+esc(opt)+(answered&&i===x.q[2]?' ✓':'')+'</button>').join('')+'</div>'+
 (answered?'<div class="hq-answer-explain '+(x.pick===x.q[2]?'correct':'wrong')+'"><b>'+(x.pick===x.q[2]?'💥 Direct hit! +20 XP on first mastery':'🛡 Boss blocked! Remember this:')+'</b><p>'+esc(x.q[3])+'</p></div>':'')+
 '<div class="hq-challenge-footer"><span>QUESTION '+(b.cursor+1)+' OF '+total+'</span><div><button data-hq-move="-1" '+(b.cursor===0?'disabled':'')+'>← Back</button><button class="hq-primary" data-hq-move="1" '+(b.cursor===total-1&&!answered?'disabled':'')+'>'+(b.cursor===total-1?'See Battle Result 🏆':'Next Challenge →')+'</button></div></div></div></div>';
}
function answer(choice){
 const b=progress.battle;if(!b)return;
 const idx=b.sequence[b.cursor];
 if(b.picks[idx]!==undefined)return;
 b.picks[idx]=choice;progress.answers[idx]=choice;
 if(choice===questions[idx][2]){progress.mastered[idx]=true;b.streak++;b.maxStreak=Math.max(b.streak,b.maxStreak)}
 else b.streak=0;
 save();
 if(b.sequence.every(i=>b.picks[i]!==undefined)){finishBattle();return}
 render()
}
function moveBattle(delta){
 const b=progress.battle;if(!b)return;
 if(delta>0&&b.cursor===b.sequence.length-1){if(b.sequence.every(i=>b.picks[i]!==undefined))finishBattle();return}
 b.cursor=Math.max(0,Math.min(b.sequence.length-1,b.cursor+delta));save();render()
}
function finishBattle(){
 const b=progress.battle;if(!b)return;
 const misses=b.sequence.filter(i=>b.picks[i]!==questions[i][2]);
 const right=b.sequence.length-misses.length;
 const rec={mode:b.mode,correct:right,total:b.sequence.length,wrong:misses.length,topStreak:b.maxStreak,at:new Date().toISOString(),misses:misses.slice()};
 progress.runs.unshift(rec);progress.runs=progress.runs.slice(0,25);
 if(b.mode==='full')progress.lastMisses=misses;
 else progress.lastMisses=progress.lastMisses.filter(i=>misses.includes(i));
 progress.battle=null;ui.screen='result';save();render()
}
function result(){
 const r=progress.runs[0];if(!r)return world();
 const pct=Math.round(100*r.correct/r.total),weakCounts={};
 for(const i of r.misses)weakCounts[TOPICS[i]]=(weakCounts[TOPICS[i]]||0)+1;
 const weak=Object.entries(weakCounts).sort((a,b)=>b[1]-a[1]);
 return '<div class="hq-victory"><div class="hq-victory-visual"><div class="hq-victory-rays">✴</div><span class="hq-victory-medal">'+(pct===100?'👑':pct>=70?'🏆':'🛡️')+'</span><div class="hq-kicker">'+(pct===100?'PERFECT VICTORY!':pct>=70?'THE BOSS IS FALLING':'TRAINING ROUND COMPLETE')+'</div><h3>'+(pct===100?'You conquered the chronicles!':pct>=70?'Legend in the making!':'Your comeback starts now.')+'</h3><p>Every mistake is a clue. Turn weak zones into victories.</p></div>'+
 '<div class="hq-result-stats"><div><span>ACCURACY</span><strong>'+pct+'%</strong></div><div><span>CORRECT</span><strong>'+r.correct+'/'+r.total+'</strong></div><div><span>LONGEST COMBO</span><strong>'+r.topStreak+' ⚡</strong></div><div><span>XP TOTAL</span><strong>'+xp()+' ✦</strong></div></div>'+
 '<div class="hq-danger-board"><div><span class="hq-eyebrow">⚠️ DANGER ZONE RADAR</span><h4>'+(!weak.length?'All clear! No weak areas in this round.':'Your enemies to defeat again')+'</h4></div><div class="hq-weak-list">'+weak.map(([t,n])=>'<div><b>'+esc(t)+'</b><span>'+n+' missed</span><i style="width:'+Math.round(n/Math.max(1,r.wrong)*100)+'%"></i></div>').join('')+'</div></div>'+
 '<div class="hq-result-actions"><button class="hq-primary" data-hq-begin="retry" '+(!progress.lastMisses.length?'disabled':'')+'>⚡ Retry '+progress.lastMisses.length+' Weak Questions</button><button data-hq-begin="full">⚔️ Fight Full Boss Again</button><button data-hq-screen="vault">🏆 Treasure Vault</button></div></div>';
}
function vault(){
 const st=stats();
 return '<div class="hq-vault"><div class="hq-section-head"><div><span class="hq-eyebrow">YOUR PERSONAL INVENTORY</span><h3>The Legend Vault 🏆</h3><p>Every milestone discovered, badge earned and exam fact treasured.</p></div><div class="hq-collection">'+esc(rank())+'</div></div>'+
 '<div class="hq-vault-stats"><div><span>📍 Discoveries</span><strong>'+st.visited+'<small>/53</small></strong></div><div><span>🔓 Realms Open</span><strong>'+st.unlocked+'<small>/5</small></strong></div><div><span>⚔️ Boss Battles</span><strong>'+st.runs+'</strong></div><div><span>⭐ XP Collected</span><strong>'+xp()+'</strong></div></div>'+
 '<div class="hq-vault-layout"><section class="hq-vault-panel"><div class="hq-vault-panel-head"><h4>✦ Achievement Gallery</h4><span>'+BADGES.filter(b=>b[2](st)).length+'/'+BADGES.length+' badges</span></div><div class="hq-badge-grid">'+BADGES.map(b=>'<div class="hq-badge '+(b[2](st)?'earned':'locked')+'" title="'+esc(b[3])+'"><span>'+b[0]+'</span><b>'+esc(b[1])+'</b><small>'+(b[2](st)?'EARNED ✓':'LOCKED')+'</small></div>').join('')+'</div></section>'+
 '<section class="hq-vault-panel"><h4>🗺️ Your Conquest Map</h4>'+eras.map((e,i)=>{const n=learnedCount(i),pct=Math.round(n/e.nodes.length*100);return '<button class="hq-vault-realm" data-hq-stage="'+i+'"><div><span>'+WORLDS[i].icon+' '+esc(WORLDS[i].name)+'</span><b>'+n+'/'+e.nodes.length+'</b></div><i><u style="width:'+pct+'%"></u></i></button>'}).join('')+'</section></div>'+
 '<section class="hq-vault-panel hq-bookmarks"><h4>🔮 Saved Knowledge Artifacts</h4>'+items.filter(x=>progress.saved[x.id]).map(n=>'<button data-hq-open-event="'+n.id+'"><b>'+esc(n.year+' · '+n.title)+'</b><small>'+esc(n.fact)+'</small><span>➜</span></button>').join('')+
 (!items.some(x=>progress.saved[x.id])?'<p>Nothing here yet. Save an exam clue from any mission to build your treasure chest.</p>':'')+'</section>'+
 (progress.lastMisses.length?'<div class="hq-vault-rematch"><div><b>⚠️ '+progress.lastMisses.length+' questions waiting for revenge</b><p>Retry your actual wrong answers from the latest boss run.</p></div><button class="hq-primary" data-hq-begin="retry">Enter Weak Zone ⚔️</button></div>':'')+'</div>';
}
function render(){
 if(!shell)return;
 const content='<div class="hq-root">'+banner()+navbar()+
 (ui.toast?'<div class="hq-toast" role="status">'+esc(ui.toast)+'<button data-hq-close="1" aria-label="Dismiss notice">✕</button></div>':'')+
 (ui.screen==='world'?world():ui.screen==='mission'?mission():ui.screen==='heroes'?heroes():ui.screen==='forge'?forge():ui.screen==='battle'?boss():ui.screen==='result'?result():vault())+
 '<div class="hq-footnote">Illustrated game scenes are symbolic, not geographical maps. Historical dates, exam memory clues and game achievements are for educational practice.</div></div>';
 shell(content,'Learn · The Freedom Chronicles','India’s Modern History · a playable campaign across 1757–1947');
 bind();
}
function stepCard(d){
 const x=deck();if(!x)return;
 ui.card=(x.index+d+x.deck.length)%x.deck.length;ui.flipped=false;render();
}
function openEvent(id){
 const n=items.find(x=>x.id===id);if(!n)return;
 if(!unlocked(n.ei)){notice('🔒 This hero’s chapter is locked. Explore the earlier realms to unlock it.');return}
 ui.era=n.ei;ui.selected=n.id;ui.screen='mission';ui.toast='';render();
}
function bind(){
 document.querySelectorAll('[data-hq-screen]').forEach(el=>el.onclick=()=>{ui.toast='';setScreen(el.dataset.hqScreen)});
 document.querySelectorAll('[data-hq-stage]').forEach(el=>{
  const fn=()=>stage(Number(el.dataset.hqStage));el.onclick=fn;
  el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}};
 });
 document.querySelectorAll('[data-hq-event]').forEach(el=>{
  const fn=()=>{ui.selected=el.dataset.hqEvent;const detailEl=document.querySelector('.hq-intel-side');if(detailEl){detailEl.innerHTML=eventCard();bindSide()}document.querySelectorAll('[data-hq-event]').forEach(x=>x.classList.toggle('chosen',x.dataset.hqEvent===ui.selected));};
  el.onclick=fn;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}};
 });
 bindSide();
 document.querySelectorAll('[data-hq-hero]').forEach(el=>el.onclick=()=>{ui.hero=Number(el.dataset.hqHero);render()});
 document.querySelectorAll('[data-hq-open-event]').forEach(el=>el.onclick=()=>openEvent(el.dataset.hqOpenEvent));
 document.querySelectorAll('[data-hq-deck]').forEach(el=>el.onclick=()=>{ui.deck=el.dataset.hqDeck;ui.card=0;ui.flipped=false;render()});
 const flip=document.getElementById('hq-flip');if(flip)flip.onclick=()=>{ui.flipped=!ui.flipped;render()};
 document.querySelectorAll('[data-hq-card-step]').forEach(el=>el.onclick=()=>stepCard(Number(el.dataset.hqCardStep)));
 document.querySelectorAll('[data-hq-begin]').forEach(el=>el.onclick=()=>startBattle(el.dataset.hqBegin));
 document.querySelectorAll('[data-hq-answer]').forEach(el=>el.onclick=()=>answer(Number(el.dataset.hqAnswer)));
 document.querySelectorAll('[data-hq-move]').forEach(el=>el.onclick=()=>moveBattle(Number(el.dataset.hqMove)));
 const close=document.querySelector('[data-hq-close]');if(close)close.onclick=()=>{ui.toast='';render()};
}
function bindSide(){
 document.querySelectorAll('[data-hq-learn]').forEach(el=>el.onclick=()=>{const id=el.dataset.hqLearn,was=!!progress.learned[id],before=eras.map((e,i)=>unlocked(i));progress.learned[id]=true;save();const unlockedNow=eras.findIndex((e,i)=>!before[i]&&unlocked(i));if(!was){ui.toast=unlockedNow>=0?'🏰 NEW REALM UNLOCKED: '+WORLDS[unlockedNow].name+'! +10 XP':'✨ MEMORY UNLOCKED · +10 XP! Keep collecting milestones.'}render()});
 document.querySelectorAll('[data-hq-save]').forEach(el=>el.onclick=()=>{const id=el.dataset.hqSave;progress.saved[id]=!progress.saved[id];save();render()});
 document.querySelectorAll('[data-hq-next]').forEach(el=>el.onclick=()=>{
  const idx=items.findIndex(n=>n.id===el.dataset.hqNext),next=items[idx+1];
  if(next)openEvent(next.id);else notice('🏁 You reached the final milestone. Time for the boss battle!');
 });
}
window.CGL_LEARN={
 init,render:({shell:callback})=>{shell=callback;render()},
 stats:()=>({events:items.length,learned:stats().visited,xp:xp(),rank:rank(),unlocked:stats().unlocked}),
 debug:()=>({screen:ui.screen,era:ui.era,progress:JSON.parse(JSON.stringify(progress))})
};
})();