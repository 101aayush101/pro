(function worldModule(){
'use strict';
const h=window.HQ;
const art=window.HQ_ART;
const {eras,events,state,save,esc,count,required,cleared,complete,open,explored,wins,xp,rank,badges,toast,enter}=h;
function illustratedHero(){
 return `<div class="adventure-art"><div class="moon"></div><div class="art-mountain m-one"></div><div class="art-mountain m-two"></div><div class="art-landmark">${art.scene(4)}</div><span class="art-star star-one">✧</span><span class="art-star star-two">✦</span><span class="art-star star-three">✴</span><div class="art-date date-one">⚔️ 1757</div><div class="art-date date-two">🏆 1947</div><div class="art-orbit">☸</div></div>`;
}
function worldHero(){
 const next=eras.findIndex((_,i)=>open(i)&&!complete(i)),target=next<0?4:next;
 return `<section class="adventure-hero"><div class="adventure-copy"><span class="hero-kicker">✦ INTERACTIVE MODERN INDIAN HISTORY RPG</span><h1>One nation.<br><em>One epic quest.</em></h1><p>Discover 190 years of turning points. Wander through five worlds, collect legendary stories, defeat exam traps, and unlock the road to freedom.</p><div class="adventure-actions"><button class="action-primary" data-enter="${target}">${explored()?'⚡ CONTINUE THE ADVENTURE':'⚡ BEGIN THE ADVENTURE'} <span>↗</span></button><button class="action-ghost" data-go="heroes">Meet the legends ↗</button></div><div class="hero-scores"><div><strong>${explored()}<small>/53</small></strong><span>Events explored</span></div><div><strong>${xp()}</strong><span>Explorer XP</span></div><div><strong>${badges().filter(x=>x[2]).length}<small>/8</small></strong><span>Achievements</span></div></div></div>${illustratedHero()}</section>`;
}
function background(){
const road="M 238 184 C 325 328, 740 276, 797 462 S 330 625, 235 770 S 734 902, 797 1082 S 335 1210, 294 1439";
return `<svg class="map-backdrop" viewBox="0 0 1050 1720" preserveAspectRatio="none" aria-hidden="true">
<defs>
 <radialGradient id="map-light"><stop stop-color="#fff3bc" stop-opacity=".45"/><stop offset="1" stop-color="#f4ca8a" stop-opacity="0"/></radialGradient>
 <filter id="route-glow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="5"/></filter>
</defs>
<circle cx="710" cy="300" r="305" fill="url(#map-light)"/>
<path d="M-30 230Q128 75 260 190t290-30 282 12 260 13V1220H-30" fill="#e5d2b0" opacity=".3"/>
<path d="M-10 930Q196 780 360 890t299-25 315-8 170 44" stroke="#88bbb8" opacity=".22" stroke-width="75" fill="none"/>
<path d="${road}" fill="none" stroke="#a48b6c" opacity=".22" stroke-width="34" stroke-linecap="round"/>
<path d="${road}" fill="none" stroke="#fff3d5" stroke-width="23" stroke-linecap="round" />
<path d="${road}" fill="none" stroke="#dfac64" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round" class="journey-wire"/>
<path d="${road}" fill="none" stroke="#ffe8ad" stroke-width="10" opacity=".7" filter="url(#route-glow)" class="journey-glow"/>
<g class="travelling-spark"><circle r="12" fill="#fff0b4" opacity=".55"/><circle r="6" fill="#df9550" stroke="#fff4cf" stroke-width="3"/><animateMotion dur="22s" repeatCount="indefinite" path="${road}"/></g>
<g class="map-path-stamps"><circle cx="238" cy="184" r="19"/><circle cx="797" cy="462" r="19"/><circle cx="235" cy="770" r="19"/><circle cx="797" cy="1082" r="19"/><circle cx="294" cy="1439" r="19"/></g>
<g class="map-stamp-text"><text x="238" y="190">1</text><text x="797" y="468">2</text><text x="235" y="776">3</text><text x="797" y="1088">4</text><text x="294" y="1445">5</text></g>
<g fill="#a29b7d" opacity=".3"><path d="M60 775l50-89 50 89zm90 0l45-65 45 65zM885 500l38-100 38 100zm64 0l45-73 45 73zM45 1555l39-73 39 73zm86 0l38-67 38 67z"/></g>
<g opacity=".6" transform="translate(939 97)"><circle r="34" fill="none" stroke="#9b876a" stroke-width="1.7"/><path d="M0-40V40M-40 0H40" stroke="#9b876a" stroke-width="1"/><path d="M0-38l8 42-8-6-8 6z" fill="#b57f51"/><text y="-50" text-anchor="middle" font-size="15" font-weight="800" fill="#806c5b">N</text></g></svg>`;
}
const WORLD_SUMMARY=[
 {tag:'How trade became rule',fact:'Plassey (1757) → Buxar (1764) → Diwani (1765)',context:'Follow the Company as it gains revenue and territory, then see how Parliament begins regulating its power.'},
 {tag:'The spark that changed India',fact:'1857 revolt → Crown rule (1858) → INC (1885)',context:'A widespread revolt ended Company rule and helped shape a new age of organized political participation.'},
 {tag:'The birth of national politics',fact:'Bengal (1905) → Separate electorates (1909) → Lucknow Pact (1916)',context:'Watch protest, political organizations and reforms reshape the demand for Indian self-government.'},
 {tag:'Mass movements take the stage',fact:'Champaran (1917) → Non-Cooperation (1920) → Dandi (1930)',context:'Understand how peasants, workers and nationwide campaigns reshaped the freedom struggle.'},
 {tag:'The final sprint to freedom',fact:'1935 Act → Quit India (1942) → Independence (1947)',context:'See wartime negotiations, the Constituent Assembly and the transfer of power converge.'}
];
function stopCard(i){
 const era=eras[i],done=count(i),total=era.nodes.length,enabled=open(i),finished=complete(i),percent=Math.round(done/total*100),info=WORLD_SUMMARY[i];
 const icon=era.icon;
 return `<article class="world-card card-${i} ${enabled?'unlocked':'locked'} ${finished?'finished':''}" style="--hero-hue:${['#e9a65c','#d8778a','#a88cee','#54cbb5','#eebf69'][i]}"><div class="world-card-banner">${art.scene(i)}</div><div class="world-card-info"><div class="world-card-top"><span>CHAPTER 0${i+1} / 05</span><span>${finished?'✦ CONQUERED':enabled?'● UNLOCKED':'🔒 LOCKED'}</span></div><div class="world-title"><div class="world-emoji">${icon}</div><div><h3>${esc(era.name)}</h3><small>${esc(era.period)}</small></div></div>
 <div class="world-story-hook"><b>${esc(info.tag)}</b><p>${esc(info.context)}</p></div>
 <div class="world-key-fact"><span>🧭 FOLLOW THE THREAD</span><strong>${esc(info.fact)}</strong></div>
 <div class="world-card-bar"><div><span>${done}/${total} memories</span><b>${percent}%</b></div><i><em style="width:${percent}%"></em></i></div>${enabled?`<button class="world-enter" data-enter="${i}">${finished?'REVISIT WORLD':'ENTER QUEST'} <span>↗</span></button>`:`<div class="locked-note">Unlock with ${required(i-1)} memories from World ${i}.</div>`}</div></article>`;
}
function hud(){
 const active=eras.findIndex((_,i)=>open(i)&&!complete(i)),i=active<0?4:active;
 return `<aside class="quest-hud"><div class="hud-brand"><span>✦ PLAYER PROFILE</span><b>LVL ${Math.floor(xp()/200)+1}</b></div><div class="hud-portrait">🧭</div><h3>${esc(h.user)}</h3><p>${rank()}</p><div class="hud-progress"><i style="width:${xp()%200/2}%"></i></div><div class="hud-small"><span>✦ ${xp()} XP</span><span>${200-xp()%200} to next level</span></div><div class="hud-divider"></div><div class="hud-kicker">⚡ CURRENT MISSION</div><h4>${eras[i].icon} ${esc(eras[i].name)}</h4><p>Capture ${required(i)} milestones to unlock your next destination.</p><button data-enter="${i}" class="hud-button">CONTINUE MISSION →</button><div class="hud-divider"></div><div class="hud-kicker">🏅 BADGE COLLECTION</div><div class="hud-badges">${badges().slice(0,6).map(([icon,title,done])=>`<span title="${esc(title)}" class="${done?'active':'hidden-badge'}">${icon}</span>`).join('')}</div><button class="hud-link" data-go="vault">OPEN TREASURE VAULT ↗</button></aside>`;
}
function world(){
 return `${worldHero()}<section class="map-heading"><div><span class="eyebrow">🗺️ YOUR STORYBOOK CAMPAIGN · 1757—1947</span><h2>The road to freedom <em>↓</em></h2><p>Follow the winding golden trail. Each chapter shows its key events and the cause-and-effect story behind them.</p></div><span class="map-percentage">🧭 ${Math.round(explored()/events.length*100)}% EXPLORED</span></section><div class="map-layout"><section class="fantasy-map">${background()}<div class="world-stops">${eras.map((_,i)=>stopCard(i)).join('')}</div></section>${hud()}</div><section class="closing-banner"><div><span>⚔️ THE TIME TYRANT IS WAITING</span><h2>Ready for a real test of memory?</h2><p>Fight 26 original SSC-style history questions. Earn XP and discover your danger zones.</p></div><button class="action-primary" data-go="boss">ENTER BOSS ARENA ⚔️</button></section>`;
}
const traps={
'Regulating Act':'1773 = Governor-General of Bengal. 1833 = Governor-General of India.',
'Charter Act':'1813 restricts trade monopoly; 1833 ends commerce; 1853 introduces open competition principle.',
'Government of India Act':'1858 = Crown rule, 1919 = provincial dyarchy, 1935 = provincial autonomy.',
'Morley–Minto Reforms':'1909 = separate electorates for Muslims; 1919 = provincial dyarchy.',
'Non-Cooperation Movement':'Launched 1920; withdrawn following Chauri Chaura in February 1922.',
'Simon Commission Appointed':'Appointed 1927, arrived 1928. No Indian members.',
'Dandi March':'12 March 1930 = started; 6 April 1930 = salt law broken.',
'Quit India Movement':'8 August 1942 = resolution, Gandhi’s Do or Die; not 1930.',
'Indian Independence Act':'3 June 1947 = Mountbatten Plan; 18 July 1947 = Royal Assent.'
};
function trap(ev){return traps[ev.title]|| (ev.kind==='Act'?'Remember what this Act changed; SSC often swaps features of different Acts.':ev.kind==='Movement'?'Pair its trigger, leader and date rather than memorising the year alone.':'Remember the year, important personality and consequence as one connected fact.')}
function cover(){
 const era=eras[h.state.region],i=h.state.region,num=count(i),next=i<4&&open(i+1);
 return `<div class="mission-toolbar"><button data-go="world">← WORLD MAP</button><span>WORLD 0${i+1} / MISSION CONTROL</span><button data-go="forge">MEMORY FORGE ↗</button></div><section class="mission-cover theme-${i}"><div class="mission-intro"><span class="eyebrow">${era.icon} CHAPTER 0${i+1} · ${esc(era.period)}</span><h1>${esc(era.name)}</h1><p>${esc(era.desc)}. Follow each turning point to reveal the full story.</p><div class="mission-progress"><div><b>${num}/${era.nodes.length} DISCOVERED</b><b>${Math.round(num/era.nodes.length*100)}%</b></div><i><em style="width:${num/era.nodes.length*100}%"></em></i></div><small>${i===4?'🏁 FINAL CHAPTER':next?'🏆 NEXT WORLD UNLOCKED':`🔑 ${Math.max(0,required(i)-num)} more discoveries to unlock the next world`}</small></div><div class="cover-landmark">${art.scene(i)}</div></section>`;
}
function eventCard(ev,j){
 const active=ev.id===state.selected,marked=save.learned[ev.id];
 const row=Math.floor(j/2),col=row%2===0?j%2:1-j%2;
 return `<button class="timeline-event snake-col-${col} ${active?'on':''} ${marked?'captured':''}" style="grid-row:${row+1};grid-column:${col+1}" data-event="${ev.id}">
 <span class="event-node">${marked?'✓':String(j+1).padStart(2,'0')}</span><span class="event-card">
 <small><b>${esc(ev.year)}</b> · ${esc(ev.kind.toUpperCase())}</small>
 <strong>${esc(ev.title)}</strong>
 <span class="event-explain">${esc(ev.story)}</span>
 <em>${marked?'✓ MEMORY CAPTURED':'OPEN THE STORY →'}</em></span></button>`;
}
function missionRoute(nodes){
 const rows=Math.ceil(nodes.length/2),height=rows*256;
 const points=nodes.map((_,j)=>{const row=Math.floor(j/2),col=row%2===0?j%2:1-j%2;return {x:col===0?257:743,y:122+row*256}});
 const links=points.slice(1).map((p,j)=>{
  const q=points[j],same=Math.abs(p.y-q.y)<1;
  const d=same?`M ${q.x} ${q.y} C ${(q.x+p.x)/2} ${q.y-82}, ${(q.x+p.x)/2} ${p.y+82}, ${p.x} ${p.y}`:
    `M ${q.x} ${q.y} C ${q.x+(q.x>500?155:-155)} ${q.y+110}, ${p.x+(p.x>500?155:-155)} ${p.y-110}, ${p.x} ${p.y}`;
  return `<path d="${d}" class="route-curve"/>`;
 }).join('');
 return `<svg class="timeline-curves" viewBox="0 0 1000 ${height}" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="trail-blur"><feGaussianBlur stdDeviation="8"/></filter></defs>
 <g class="trail-halo" filter="url(#trail-blur)">${links}</g><g class="trail-lines">${links}</g>
 </svg>`;
}
function detail(ev){
 return `<aside class="intel-panel"><div class="intel-top"><div><span>🎴 EXAM INTEL / ${esc(ev.year)}</span><h2>${esc(ev.title)}</h2></div><button class="intel-star ${save.starred[ev.id]?'starred':''}" data-star="${ev.id}" title="Save to vault">${save.starred[ev.id]?'★':'☆'}</button></div><div class="intel-art">${art.scene(ev.era)}<span>${esc(ev.kind)}</span></div><div class="intel-story"><span>📜 WHAT ACTUALLY HAPPENED?</span><p>${esc(ev.story)}</p></div><div class="intel-tile names"><span>👥 KEY PEOPLE</span><strong>${esc(ev.people)}</strong></div><div class="intel-tile memory"><span>🎯 SSC MEMORY SPELL</span><strong>${esc(ev.hook)}</strong></div><div class="intel-tile warning"><span>⚠️ EXAM TRAP DETECTOR</span><strong>${esc(trap(ev))}</strong></div><button class="capture-button ${save.learned[ev.id]?'done':''}" data-capture="${ev.id}">${save.learned[ev.id]?'✓ MEMORY CAPTURED':'⚡ CAPTURE THIS MEMORY · +10 XP'}</button><button class="next-event" data-next-event="${ev.id}">NEXT CHECKPOINT <span>→</span></button><p class="intel-hint">Reading ≠ test mastery. Use the Boss Battle to check what stuck.</p></aside>`;
}
function mission(){
 const i=state.region,chapter=events.filter(x=>x.era===i),ev=events.find(x=>x.id===state.selected&&x.era===i)||chapter[0],next=i<4&&open(i+1);
 return `${cover()}<div class="mission-layout"><section class="timeline-panel"><div class="timeline-header"><div><span class="eyebrow">✦ THE GOLDEN THREAD</span><h2>Follow the story</h2><p>A winding cause-and-effect route. Each checkpoint includes a short summary; tap for the people, exam hook and common trap.</p></div><span>${count(i)} / ${chapter.length} ★</span></div><div class="timeline-rail">${missionRoute(chapter)}${chapter.map(eventCard).join('')}</div>${next?`<div class="mission-success">🎉 NEXT WORLD UNLOCKED <button data-enter="${i+1}">TRAVEL ONWARD →</button></div>`:''}</section>${detail(ev)}</div>`;
}
window.HQ_WORLD={world,mission};
})();