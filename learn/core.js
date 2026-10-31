(function gameCore(){
'use strict';
const db=window.CGL_MODERN_HISTORY_DATA;
const root=document.getElementById('game');
const user=sessionStorage.getItem('cgl-arena-session');
if(!user){location.replace('../#/');return;}
const eras=db.eras;
const events=eras.flatMap((era,i)=>era.nodes.map((row,j)=>({id:i+'-'+j,era:i,index:j,year:row[0],title:row[1],kind:row[2],story:row[3],people:row[4],hook:row[5]})));
const questions=db.questions;
const key='cgl-arena-history-world-v1:'+user;
const prior='cgl-arena-learn-modern-v1:'+user;
const fontKey='cgl-arena-history-textsize-v1:'+user;
let largeText=localStorage.getItem(fontKey)==='large';
document.body.classList.toggle('reader-large',largeText);
const state={view:'world',region:0,selected:'0-0',filter:'all',heroFilter:'all',forgeRegion:'all',forgeIndex:0,flipped:false,run:null};
const navigationStack=[];
function locationSnapshot(){return {view:state.view,region:state.region,selected:state.selected,heroFilter:state.heroFilter,forgeRegion:state.forgeRegion,forgeIndex:state.forgeIndex,flipped:state.flipped}}
function pushSnapshot(before){const prev=before||locationSnapshot();if(prev.view===state.view&&prev.region===state.region&&prev.selected===state.selected)return;navigationStack.push(prev);if(navigationStack.length>30)navigationStack.shift()}
function navigateBack(){
 if(navigationStack.length){
  const prev=navigationStack.pop();
  Object.assign(state,prev);
  render();
  window.scrollTo({top:0,behavior:'instant'});
 }else if(state.view!=='world'){state.view='world';render();window.scrollTo({top:0,behavior:'instant'})}
 else window.location.href='../#/';
}

let save={learned:{},starred:{},best:{},runs:[]};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
try{const a=JSON.parse(localStorage.getItem(key)||'null');if(a){for(const field of ['learned','starred','best'])if(a[field]&&typeof a[field]==='object')save[field]=a[field];if(Array.isArray(a.runs))save.runs=a.runs.slice(0,25);if(a.run&&Array.isArray(a.run.ids))state.run=a.run}}catch{}
try{const old=JSON.parse(localStorage.getItem(prior)||'null');if(old){Object.assign(save.learned,old.learned||{});Object.assign(save.starred,old.saved||{});for(const [idx,answer] of Object.entries(old.answers||{}))if(answer===questions[Number(idx)]?.[2])save.best[idx]=true}}catch{}
function persist(){try{localStorage.setItem(key,JSON.stringify({...save,run:state.run}))}catch(err){console.warn('Could not store history progress',err)}}
const explored=()=>events.filter(ev=>save.learned[ev.id]).length;
const wins=()=>Object.keys(save.best).filter(i=>save.best[i]).length;
const count=r=>eras[r].nodes.filter((_,i)=>save.learned[r+'-'+i]).length;
const required=r=>Math.ceil(eras[r].nodes.length*.6);
const cleared=r=>count(r)>=required(r);
const complete=r=>count(r)===eras[r].nodes.length;
const open=r=>r===0||eras.slice(0,r).every((_,i)=>cleared(i));
const xp=()=>explored()*10+wins()*20+eras.filter((_,i)=>complete(i)).length*60;
const rank=()=>xp()>=1300?'Freedom Legend':xp()>=950?'History Commander':xp()>=650?'Revolution Leader':xp()>=350?'Freedom Fighter':xp()>=150?'Timeline Explorer':'History Recruit';
const badges=()=>[
['🧭','First Footstep',explored()>=1],
['⚔️','Company Conqueror',complete(0)],
['🔥','Revolt Survivor',complete(1)],
['🪷','Nationalism Navigator',complete(2)],
['🕊️','Satyagraha Sage',complete(3)],
['🇮🇳','Freedom Guardian',complete(4)],
['⚡','Perfect Round',save.runs.some(r=>r.correct===r.total&&r.total>=5)],
['👑','Legend of 1947',explored()===events.length&&wins()===questions.length]
];
function toast(message){const t=document.getElementById('toast');if(!t)return;t.textContent=message;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2400)}
function nav(){
const options=[['world','🗺️','World Map'],['mission','🚩','My Quest'],['heroes','🎭','Heroes'],['forge','🧠','Memory Forge'],['boss','⚔️','Boss Battle'],['vault','🏆','My Vault']];
return '<header class="game-top"><button type="button" class="game-back" data-back="1" aria-label="Go back to previous screen">← <span>'+(state.view==='world'&&navigationStack.length===0?'CGL Arena':'Back')+'</span></button><a href="../#/" class="game-brand" aria-label="Return to CGL Arena"><span class="logo-star">✦</span><span>CGL <b>ARENA</b><small>HISTORY QUEST</small></span></a><nav class="game-nav">'+options.map(([id,ico,label])=>`<button type="button" data-go="${id}" class="${state.view===id?'on':''}"><span>${ico}</span> ${label}</button>`).join('')+'</nav><div class="game-hud"><span>✦ '+xp()+' XP</span><button class="font-toggle" data-text-size="toggle" aria-pressed="'+largeText+'" title="Toggle easier-to-read large text">'+(largeText?'A−':'A+')+' <small>TEXT</small></button><a href="../#/">Exit ↗</a></div></header>';
}
function render(){
let body='';
if(state.view==='world')body=window.HQ_WORLD.world();
else if(state.view==='mission')body=window.HQ_WORLD.mission();
else if(state.view==='heroes')body=window.HQ_PLAY.heroes();
else if(state.view==='forge')body=window.HQ_PLAY.forge();
else if(state.view==='boss')body=window.HQ_PLAY.boss();
else if(state.view==='vault')body=window.HQ_PLAY.vault();
root.innerHTML='<div class="game-shell">'+nav()+'<main id="game-view" class="game-body view-'+state.view+'">'+body+'</main><footer class="game-footer"><span>✦ 1757 — 1947 / HISTORY QUEST WORLD</span><span>Study game · Not official SSC question paper · Progress saved on this browser</span><a href="../#/">CGL Arena ↗</a></footer></div>';
document.title=(state.view==='world'?'Adventure Map':state.view==='mission'?eras[state.region].name:state.view.toUpperCase())+' · History Quest';
}
function go(view,previous){
if(!['world','mission','heroes','forge','boss','vault'].includes(view))return;
if(view==='mission'&&!open(state.region)){toast('🔒 Discover more events to unlock this world');return}
const before=previous||locationSnapshot();
if(before.view!==view||before.region!==state.region||before.selected!==state.selected) {
 navigationStack.push(before);
 if(navigationStack.length>30)navigationStack.shift();
}
state.view=view;render();window.scrollTo({top:0,behavior:'instant'});
}
function enter(region){
if(!open(region)){toast('🔒 This world is locked. Complete the previous mission first.');return}
const previous=locationSnapshot();
state.region=region;
const first=events.find(ev=>ev.era===region&&!save.learned[ev.id])||events.find(ev=>ev.era===region);
state.selected=first.id;go('mission',previous);
}
function select(id){
const ev=events.find(ev=>ev.id===id);if(!ev)return;
if(!open(ev.era)){toast('🔒 Unlock this world to reveal the story.');return}
const previous=locationSnapshot();
state.region=ev.era;state.selected=id;go('mission',previous);
}
function capture(id){
if(save.learned[id])return false;
save.learned[id]=true;persist();toast('✨ Memory captured! +10 XP');render();return true;
}
function star(id){save.starred[id]=!save.starred[id];persist();render();toast(save.starred[id]?'💎 Saved to Treasure Vault':'Bookmark removed')}
function allData(){return {eras,events,questions,state,save,esc,count,required,cleared,complete,open,explored,wins,xp,rank,badges,toast,persist,go,enter,select,capture,star,render,user}}
const api=allData();window.HQ=api;
root.addEventListener('click',evt=>{
const el=evt.target.closest('[data-back],[data-text-size],[data-go],[data-enter],[data-event],[data-capture],[data-star],[data-next-event],[data-qaction],[data-filter-hero],[data-faction]');if(!el)return;
if(el.dataset.back){navigateBack();return}
if(el.dataset.textSize){largeText=!largeText;document.body.classList.toggle('reader-large',largeText);try{localStorage.setItem(fontKey,largeText?'large':'normal')}catch{}render();toast(largeText?'🔎 Larger reading text enabled':'🔎 Standard reading text');return}
if(el.dataset.go){go(el.dataset.go);return}
if(el.dataset.enter!==undefined){enter(Number(el.dataset.enter));return}
if(el.dataset.event){select(el.dataset.event);return}
if(el.dataset.capture){capture(el.dataset.capture);return}
if(el.dataset.star){star(el.dataset.star);return}
if(el.dataset.nextEvent){const n=events.findIndex(x=>x.id===el.dataset.nextEvent);if(events[n+1])select(events[n+1].id);return}
if(el.dataset.filterHero!==undefined){state.heroFilter=el.dataset.filterHero;render();return}
if(el.dataset.qaction){window.HQ_PLAY.action(el);return}
if(el.dataset.faction){window.HQ_PLAY.action(el);return}
});
root.addEventListener('change',evt=>{if(evt.target.id==='forge-chapter'){state.forgeRegion=evt.target.value;state.forgeIndex=0;state.flipped=false;render()}});
document.addEventListener('keydown',evt=>{if(['INPUT','TEXTAREA','SELECT'].includes(evt.target.tagName))return;if(state.view==='forge'&&evt.key===' '){evt.preventDefault();window.HQ_PLAY.action({dataset:{faction:'flip'}})}else if(state.view==='boss'&&['1','2','3','4'].includes(evt.key)){window.HQ_PLAY.action({dataset:{qaction:'answer',choice:String(Number(evt.key)-1)}})}});
window.HQ.start=()=>render();
})();