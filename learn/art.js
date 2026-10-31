(function artMain(){
'use strict';
const themes=[
['#f2cc78','#56654c','#dbc093','#dca35c'],
['#fa9a7d','#554665','#ba8395','#e1787b'],
['#e4b9ff','#555580','#8c7eb3','#b399fb'],
['#99e7d0','#315e68','#64a394','#67cab1'],
['#f9d587','#4f7581','#90ab95','#efb268']
];
const fort='<rect x="118" y="85" width="164" height="65" rx="5" fill="#ebcba3"/><path d="M115 92V60h40v32m88 0V60h40v32" fill="#bd926d"/><path d="M112 58h45M239 58h47" stroke="#f7dcaa" stroke-width="8" stroke-dasharray="10 5"/><path d="M181 151v-38a18 18 0 0 1 36 0v38" fill="#71636d"/><path d="M200 60V22" stroke="#714d55" stroke-width="4"/><path d="M200 22l36 10-36 9z" fill="#ed6b58"/>';
const revolt='<path d="M132 151L185 51l46 100" fill="#81617e"/><path d="M162 151l29-70 32 70" fill="#af7389"/><path d="M190 62q-24-24 5-49-4 20 10 21 12-26 19-13 8 31-17 44" fill="#ffc17f"/><path d="M98 149V94l31-27 32 27v55" fill="#dbc0ab"/><path d="M248 149V99l31-29 30 29v50" fill="#c2a1b2"/>';
const assembly='<path d="M90 146V90h220v56" fill="#e5c7ee"/><path d="M110 90q90-112 180 0" fill="#cfafe7"/><path d="M145 90q55-72 110 0" fill="#9d88ce"/><path d="M109 146v-41m37 41v-41m36 41v-41m38 41v-41m36 41v-41m37 41v-41" stroke="#8069a4" stroke-width="12"/><path d="M200 40V16" stroke="#775faa" stroke-width="4"/><path d="M200 16l33 9-33 9z" fill="#ffca83"/>';
const gandhi='<path d="M100 157Q179 119 304 160" fill="none" stroke="#f9ead3" stroke-width="10" stroke-dasharray="24 14"/><path d="M170 151q-5-70 30-70 37 0 36 70" fill="#f1e0c3"/><circle cx="205" cy="66" r="30" fill="#cf9f79"/><path d="M178 57q-1-33 34-32 23 4 22 29" fill="#e9e9de"/><circle cx="193" cy="68" r="12" fill="none" stroke="#6a5a53" stroke-width="3"/><circle cx="215" cy="68" r="12" fill="none" stroke="#6a5a53" stroke-width="3"/><path d="M206 67h-2" stroke="#6a5a53" stroke-width="3"/><path d="M230 90l30 61" stroke="#675b57" stroke-width="5"/>';
const freedom='<rect x="117" y="89" width="166" height="63" fill="#f2ecd8"/><path d="M131 89q69-122 138 0" fill="#c4e0d6"/><path d="M153 89q47-86 94 0" fill="#f4e9cf"/><rect x="182" y="105" width="35" height="48" rx="15" fill="#688aa6"/><path d="M201 70V12" stroke="#5b7082" stroke-width="4"/><rect x="201" y="13" width="85" height="12" fill="#ef925e"/><rect x="201" y="25" width="85" height="12" fill="#f8efe1"/><rect x="201" y="37" width="85" height="12" fill="#51977c"/><circle cx="244" cy="31" r="5" fill="none" stroke="#637bbb" stroke-width="2"/>';
function scene(era){
const p=themes[era];
return '<svg viewBox="0 0 400 175" class="illustration" role="img" aria-label="Illustrated history landmark"><circle cx="292" cy="40" r="34" fill="'+p[0]+'" opacity=".88"/><path d="M0 140Q80 60 142 143T286 113Q340 72 400 120V175H0Z" fill="'+p[1]+'" opacity=".55"/><path d="M0 156Q50 107 113 155T278 144Q344 116 400 153V175H0Z" fill="'+p[2]+'"/><path d="M0 161q85-16 173 7t227-13v20H0" fill="'+p[1]+'"/><g class="landmark">'+[fort,revolt,assembly,gandhi,freedom][era]+'</g><path d="M-5 171q83-22 166-1t239-12" fill="none" stroke="'+p[3]+'" stroke-width="4" opacity=".4"/></svg>';
}
function portrait(id,name){
const skin=['gandhi','nehru','ambedkar','rammohan'].includes(id)?'#d9a57d':'#c9916d';
const clothes=id==='gandhi'?'#d3c9ae':id==='ambedkar'?'#566da6':id==='bose'?'#526f65':id==='rani'?'#aa5d73':'#80677b';
const glasses=['gandhi','bose','ambedkar','sirsyed'].includes(id)?'<circle cx="95" cy="74" r="13" fill="none" stroke="#564b49" stroke-width="3"/><circle cx="126" cy="74" r="13" fill="none" stroke="#564b49" stroke-width="3"/><path d="M108 73h5" stroke="#564b49" stroke-width="3"/>':'';
const headwear=id==='bhagat'?'<path d="M70 49q40-32 83 0l-14 15H83Z" fill="#ad7e51"/><path d="M68 49h85" stroke="#654a42" stroke-width="7"/>':id==='bose'?'<path d="M72 53l12-31h49l17 31-23 10H91Z" fill="#66785f"/><path d="M77 50h67" stroke="#d9c395" stroke-width="4"/>':id==='tilak'||id==='rammohan'||id==='sirsyed'||id==='dayanand'?'<path d="M72 58Q60 16 113 17q32 0 27 41L118 47 86 61Z" fill="#efbd89"/><path d="M76 40q28-24 62-3" fill="none" stroke="#cb865f" stroke-width="8"/>':id==='nehru'?'<path d="M79 57l14-42h35l11 42z" fill="#f7efe1"/>':id==='rani'?'<path d="M72 72Q70 12 109 20q39 2 36 54l-13-27-48 22Z" fill="#3b3342"/>':'';
const hair=['gandhi','rani','rammohan','tilak','sirsyed','bose','bhagat','nehru','dayanand'].includes(id)?'':'<path d="M75 63q-4-39 32-40 38-1 34 40-11-27-30-19l-29 20" fill="#393342"/>';
const beard=['rammohan','sirsyed','dayanand'].includes(id)?'<path d="M86 87q24 54 49-1-9 38-24 37-22 1-25-36" fill="#e9dcc8"/>':'';
return '<svg viewBox="0 0 220 180" role="img" aria-label="Illustration of '+name.replace(/"/g,'')+'"><circle cx="110" cy="93" r="85" fill="#fff" opacity=".12"/><path d="M32 181q5-77 78-76t78 76" fill="'+clothes+'"/><rect x="96" y="105" width="28" height="33" rx="12" fill="'+skin+'"/><ellipse cx="110" cy="72" rx="35" ry="43" fill="'+skin+'"/>'+hair+headwear+glasses+'<path d="M92 65h6m26 0h6" stroke="#554045" stroke-width="2" stroke-linecap="round"/><path d="M108 86q5 4 8 0" stroke="#8c6859" stroke-width="2" fill="none"/>'+beard+'<path d="M98 98q12 8 25 0" stroke="#80564d" stroke-width="2" fill="none"/></svg>';
}
window.HQ_ART={scene,portrait};
})();