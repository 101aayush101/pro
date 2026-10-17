/* 20 original diagram-based SSC CGL non-verbal reasoning questions, 17 Oct 2026.
   These are independent practice items inspired by recurring question types, NOT verified SSC PYQs. */
(function(){
'use strict';
const data=window.CGL_DATA;
if(!data)return;
const ink='#25334f',blue='#425be7',muted='#aeb8cc',gold='#ef9b29';
const f=n=>Number(n.toFixed(2));
const line=(x1,y1,x2,y2,col=ink,width=2)=>'<line x1="'+f(x1)+'" y1="'+f(y1)+'" x2="'+f(x2)+'" y2="'+f(y2)+'" stroke="'+col+'" stroke-width="'+width+'" stroke-linecap="round"/>';
const circ=(x,y,r=4,col=gold)=>'<circle cx="'+f(x)+'" cy="'+f(y)+'" r="'+r+'" fill="'+col+'"/>';
const rect=(x,y,w,h,col=ink,width=2,fill='none')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="1" fill="'+fill+'" stroke="'+col+'" stroke-width="'+width+'"/>';
const path=(d,col=ink,width=2,fill='none')=>'<path d="'+d+'" fill="'+fill+'" stroke="'+col+'" stroke-width="'+width+'" stroke-linecap="round" stroke-linejoin="round"/>';
const txt=(x,y,t,size=13)=>'<text x="'+x+'" y="'+y+'" fill="'+ink+'" font-size="'+size+'" font-family="Arial,sans-serif" text-anchor="middle">'+t+'</text>';
const svg=(body,w=360,h=218,label='Reasoning diagram')=>'<svg class="cgl-figure-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+label+'" viewBox="0 0 '+w+' '+h+'">'+body+'</svg>';
const diagrams=Object.create(null);
function fan(n,levels){
 let b='',a=180,top=17,bottom=193,left=38,right=322;
 for(let i=0;i<n;i++)b+=line(a,top,left+(right-left)*i/(n-1),bottom);
 for(let j=1;j<=levels;j++){let y=top+(bottom-top)*j/levels,t=(y-top)/(bottom-top);b+=line(a+(left-a)*t,y,a+(right-a)*t,y,j===levels?ink:blue,2.8);}
 return svg(b);
}
function triangleGrid(n){
 const top={x:180,y:16},left={x:30,y:194},right={x:330,y:194};let b='';
 for(let i=1;i<=n;i++){let t=i/n;b+=line(180-150*t,16+178*t,180+150*t,16+178*t);}
 for(let i=0;i<n;i++){let t=i/n;b+=line(180-150*t,16+178*t,330-300*t,194);b+=line(180+150*t,16+178*t,30+300*t,194);}
 return svg(b,360,213,'Complete triangular grid with '+n+' subdivisions per side');
}
function grid(cols,rows){const s=cols===4?41:50,ox=(360-cols*s)/2,oy=(216-rows*s)/2;let b='';for(let i=0;i<=cols;i++)b+=line(ox+i*s,oy,ox+i*s,oy+rows*s);for(let i=0;i<=rows;i++)b+=line(ox,oy+i*s,ox+cols*s,oy+i*s);return svg(b);}
function squareX(){return svg(rect(94,23,170,170)+line(94,23,264,193,blue,2.8)+line(264,23,94,193,blue,2.8));}
function symbol(v){const t=v==='mirror'?'translate(160 0) scale(-1 1)':v==='water'?'translate(0 124) scale(1 -1)':v==='turn'?'rotate(180 80 62)':'';return '<g transform="'+t+'">'+path('M46 18 V103 H98 M46 18 H111 V44 H80',ink,4)+circ(111,88,6,blue)+'</g>';}
function symSvg(v){return svg(symbol(v),160,124,'Asymmetric symbol');}
const arrowCore=path('M42 82 V26 M28 40 L42 26 L56 40',blue,4)+circ(60,77,5,gold);
function arrow(d){return svg('<g transform="rotate('+d+' 43 56)">'+arrowCore+'</g>',86,112,'Arrow with dot');}
function seqArrow(){
 let b='';[0,90,180,270].forEach((rot,i)=>{const x=10+i*81;b+=rect(x,12,70,91,muted,1,'#f9fbff')+'<g transform="translate('+(x+2)+' 14) scale(.77)"><g transform="rotate('+rot+' 43 56)">'+arrowCore+'</g></g>';});
 b+=txt(336,65,'?',29);return svg(b,375,112,'Rotation series with missing fifth figure');
}
function dotTile(pos,down){
 const p=[[26,26],[64,26],[64,64],[26,64]][pos];const tri=down?'M34 43 L56 43 L45 63 Z':'M34 63 L56 63 L45 43 Z';
 return rect(12,12,67,67,ink,2,'#fff')+path(tri,blue,2,'#dfe7ff')+circ(p[0],p[1],5,gold);
}
function dotTileSvg(p,d){return svg(dotTile(p,d),92,92);}
function dotSeq(){let b='';[[0,0],[1,1],[2,0],[3,1]].forEach((a,i)=>{let x=2+i*91;b+='<g transform="translate('+x+' 8)">'+dotTile(a[0],a[1])+'</g>';});b+=txt(393,60,'?',31);return svg(b,420,112,'Dot progression and alternating triangle series');}
function motif(type,deg,bad){
 const base=type===0?path('M33 90 V32 H85',ink,4):path('M29 30 H92 V91',ink,4);
 const dot=type===0?circ(bad?85:20,94,5,gold):circ(104,22,5,gold);
 return '<g transform="rotate('+deg+' 62 62)">'+base+dot+'</g>';
}
function motifSvg(type,deg,bad){return svg(motif(type,deg,bad),125,125,'Rotated corner and marked dot');}
function analogy(){let b='';b+='<g transform="translate(4 3) scale(.83)">'+motif(0,0,false)+'</g>';b+=txt(119,58,'→',22);b+='<g transform="translate(129 3) scale(.83)">'+motif(0,90,false)+'</g>';b+=txt(246,58,'::',24);b+='<g transform="translate(269 3) scale(.83)">'+motif(1,0,false)+'</g>';b+=txt(384,58,'→ ?',22);return svg(b,432,115,'Figure analogy: first pair and unfinished second pair');}
function foldedOnce(){
 let b=rect(15,18,110,110)+line(70,18,70,128,blue,2);b+='<path d="M48 4 Q76 -2 100 5" fill="none" stroke="'+gold+'" stroke-width="2"/>'+txt(70,153,'Fold →',13);
 b+=txt(164,70,'→',25);
 b+=rect(213,18,55,110,ink,2,'#eaf0ff')+line(213,18,213,128,blue,2.7)+circ(235,68,5,ink)+txt(242,153,'Punched sheet',12);
 return svg(b,315,166,'One vertical fold with a punched hole in the folded half');}
function foldedTwice(){
 let b=rect(16,16,112,112)+line(72,16,72,128,blue,2)+line(16,72,128,72,blue,2);b+=txt(72,151,'Two centre folds',12)+txt(160,72,'→',25);
 b+=rect(213,16,56,56,ink,2,'#eaf0ff')+circ(235,50,5,ink)+txt(244,105,'Folded quarter',12);return svg(b,310,167,'Two centre folds followed by a punch away from either crease');
}
function holes(points){let b=rect(19,19,112,112);points.forEach(p=>{b+=circ(19+p[0]*112,19+p[1]*112,5,ink);});return svg(b,151,151,'Unfolded paper and visible punched holes');}
function embShape(k){return k===0?'M14 93 H44 L76 48 H111 V20':k===1?'M14 93 H44 L76 48 V20 H111':k===2?'M14 93 H44 L76 48 H111 V94':'M14 93 V48 L76 48 H111 V20';}
function embSvg(k,clutter){let b=path(embShape(k),ink,4);if(clutter)b+=path('M18 21 L49 42 M108 93 L132 106 M24 106 L105 14',muted,1.7);return svg(b,150,126,'Candidate complex line diagram');}
function antennaShape(k){
 if(k===0)return 'M25 99 L69 31 L113 99 Z M69 31 V13';
 if(k===1)return 'M25 99 L69 31 L113 99 Z M69 99 V115';
 if(k===2)return 'M25 99 L69 31 L113 99 Z M25 99 H8';
 return 'M25 99 L69 31 L113 99 M69 31 V13';
}
function antSvg(k){let b=path(antennaShape(k),ink,3.4);b+=path('M10 44 L31 53 M110 39 L137 48',muted,1.4);return svg(b,146,126,'Triangle line pattern with an attached segment');}
function cube(top,left,right,x){const g='<g transform="translate('+x+' 0)">'+path('M76 15 L127 42 L76 68 L25 42 Z',ink,2,'#e4edff')+path('M25 42 L76 68 V113 L25 87 Z',ink,2,'#f8eccc')+path('M127 42 L76 68 V113 L127 87 Z',ink,2,'#e0f5ef')+txt(76,48,top,18)+txt(52,83,left,18)+txt(101,83,right,18)+'</g>';return g;}
function diceViews(){return svg(cube('A','B','C',11)+cube('A','D','B',181)+txt(89,145,'View 1',12)+txt(258,145,'View 2',12),360,161,'Two views of a labelled cube');}
function net(){const s=45,cx=145,cy=101;let b='';[[cx,cy,'A'],[cx-s,cy,'B'],[cx+s,cy,'C'],[cx,cy-s,'D'],[cx,cy+s,'E'],[cx,cy-2*s,'F']].forEach(a=>{b+=rect(a[0],a[1],s,s,ink,2,'#f6f9ff')+txt(a[0]+s/2,a[1]+s/2+6,a[2],17);});return svg(b,360,222,'Six-square cube net labelled A through F');}
function matrixIcon(diag,dot){let b=rect(19,17,82,75,ink,2)+line(30,55,88,55,blue,2.5);if(diag)b+=line(36,81,84,30,gold,3);if(dot)b+=circ(39,34,6,ink);return b;}
function matrixSvg(){let b='';[[0,0],[1,0],[0,1]].forEach((a,i)=>{let x=i===1?142:14,y=i===2?118:8;b+='<g transform="translate('+x+' '+y+')">'+matrixIcon(!!a[0],!!a[1])+'</g>';});b+=rect(142,118,118,98,muted,1,'#f6f9ff')+txt(201,170,'?',31);return svg(b,285,224,'Complete the missing fourth figure in the matrix');}
function matrixOpt(d,dt){return svg(matrixIcon(d,dt),125,111,'Matrix answer choice');}
Object.assign(diagrams,{
'fan-5-2':fan(5,2),'tri-grid-3':triangleGrid(3),'fan-4-3':fan(4,3),'square-x':squareX(),'grid-4-4':grid(4,4),'grid-3-2':grid(3,2),'grid-3-3':grid(3,3),
'symbol-source':symSvg('plain'),'symbol-plain':symSvg('plain'),'symbol-mirror':symSvg('mirror'),'symbol-water':symSvg('water'),'symbol-turn':symSvg('turn'),
'series-arrows':seqArrow(),'series-dot':dotSeq(),'analogy':analogy(),'fold-once':foldedOnce(),'fold-twice':foldedTwice(),
'emb-target':embSvg(0,false),'antenna-target':antSvg(0),'dice-views':diceViews(),'dice-net':net(),'matrix':matrixSvg()
});
[0,90,180,270].forEach(d=>{diagrams['arrow-'+d]=arrow(d);diagrams['motif-0-'+d]=motifSvg(0,d,false);diagrams['motif-1-'+d]=motifSvg(1,d,false);});
[[0,0],[1,1],[2,0],[3,1],[0,1],[3,0],[2,1]].forEach(a=>diagrams['tile-'+a[0]+'-'+a[1]]=dotTileSvg(a[0],a[1]));
const holeSets={
'holes-2-symm':[[.3,.45],[.7,.45]],'holes-2-left':[[.3,.3],[.3,.7]],'holes-1':[[.3,.45]],'holes-4-mid':[[.3,.3],[.7,.3],[.3,.7],[.7,.7]],
'holes-2-diag':[[.3,.3],[.7,.7]],'holes-3':[[.3,.3],[.7,.3],[.7,.7]],'holes-4-row':[[.2,.45],[.4,.45],[.6,.45],[.8,.45]]
};
Object.keys(holeSets).forEach(id=>diagrams[id]=holes(holeSets[id]));
for(let i=0;i<4;i++){diagrams['embed-'+i]=embSvg(i,true);diagrams['antenna-'+i]=antSvg(i);}
for(let d=0;d<4;d++)diagrams['matrix-'+d]=matrixOpt(!!(d&1),!!(d&2));
diagrams['motif-bad']=motifSvg(0,270,true);
const subject='General Intelligence';
const rows=[
['Count all the triangles in the given figure.',['16','18','20','24'],2,'5 rays form C(5,2)=10 choices of sloping sides. There are 2 horizontal bases: 10 × 2 = 20.','fan-5-2'],
['How many triangles of all sizes (including inverted ones) appear in this complete triangular lattice?',['9','13','15','18'],1,'For a complete triangular grid with 3 subdivisions per side, the count is 9 small + 3 medium + 1 large = 13.','tri-grid-3'],
['How many triangles are present in the diagram?',['15','18','21','24'],1,'There are four rays from the common vertex and three parallel crossbars: C(4,2) × 3 = 6 × 3 = 18.','fan-4-3'],
['How many triangles are formed by the square and its two complete diagonals?',['4','6','8','12'],2,'Four small triangles meet at the centre and four large triangles occupy halves of the square: 8.','square-x'],
['Count the squares of every size in the grid.',['16','24','30','36'],2,'A complete 4×4 square grid contains 4²+3²+2²+1²=16+9+4+1=30 squares.','grid-4-4'],
['How many rectangles EXCLUDING squares are in this grid?',['8','10','12','18'],1,'3 columns and 2 rows produce C(4,2)×C(3,2)=18 rectangles. The 6 unit squares and 2 squares of side two give 8 squares, leaving 10 non-square rectangles.','grid-3-2'],
['How many rectangles INCLUDING squares can you find?',['14','27','30','36'],3,'There are 4 vertical and 4 horizontal grid lines. Select any two of each: C(4,2)²=6×6=36.','grid-3-3'],
['A vertical mirror is placed to the RIGHT of the given figure. Select its exact image.',['Figure A','Figure B','Figure C','Figure D'],2,'In a vertical mirror, left and right switch but top and bottom remain unchanged. The dot and upper hook must both switch sides.','symbol-source',['symbol-plain','symbol-water','symbol-mirror','symbol-turn']],
['Select the WATER IMAGE of the figure shown.',['Figure A','Figure B','Figure C','Figure D'],1,'A water image reverses top and bottom; left-right positions do not reverse.','symbol-source',['symbol-mirror','symbol-water','symbol-turn','symbol-plain']],
['Study the sequence and choose the missing next figure.',['Figure A','Figure B','Figure C','Figure D'],2,'The entire arrow-and-dot figure rotates 90° clockwise each step: up, right, down, left, up.','series-arrows',['arrow-90','arrow-270','arrow-0','arrow-180']],
['The dot moves along the corners while the central triangle alternates orientation. Select the next figure.',['Figure A','Figure B','Figure C','Figure D'],2,'The dot advances clockwise around the four corners and returns to the top-left. The centre triangle alternates up and down, so the fifth is up.','series-dot',['tile-0-1','tile-3-0','tile-0-0','tile-2-1']],
['First figure changes into the second. Apply the SAME operation to the third figure.',['Figure A','Figure B','Figure C','Figure D'],3,'The entire figure, including its small dot, rotates 90° clockwise. Apply the same rotation to the third shape.','analogy',['motif-1-0','motif-1-180','motif-1-270','motif-1-90']],
['A paper was folded once at the centre and punched as shown. Choose the fully OPENED paper.',['Figure A','Figure B','Figure C','Figure D'],0,'Unfolding across one vertical crease duplicates the hole at the corresponding horizontal mirror position. The two holes stay at the same height.','fold-once',['holes-2-symm','holes-2-left','holes-1','holes-4-mid']],
['The paper is folded on BOTH shown middle axes. One hole is punched in the folded quarter. Choose the FULLY OPENED sheet.',['Figure A','Figure B','Figure C','Figure D'],3,'Two perpendicular centre folds create four reflected holes when the punch lies away from both creases.','fold-twice',['holes-1','holes-2-diag','holes-3','holes-4-mid']],
['Identify the option which contains the EXACT target shape (extra intersecting lines may be ignored).',['Figure A','Figure B','Figure C','Figure D'],1,'Only B preserves the successive path: horizontal → rising diagonal → horizontal → upward vertical. Extra light lines can be disregarded.','emb-target',['embed-1','embed-0','embed-2','embed-3']],
['Which option contains the complete given target: a closed triangle with a short segment attached at its TOP vertex?',['Figure A','Figure B','Figure C','Figure D'],2,'The third option alone has the closed triangular outline and the additional stem at the apex.','antenna-target',['antenna-1','antenna-2','antenna-0','antenna-3']],
['These are two different views of the SAME die. Which face is OPPOSITE to C?',['A','B','D','Cannot be determined'],2,'Faces A and B are common in the two views; the different third faces C and D are opposite.','dice-views'],
['A cube is made by folding the given net. Which face will be OPPOSITE to A?',['B','D','E','F'],3,'F is two squares beyond D from A in the straight arm of the net, so it folds opposite the central face A.','dice-net'],
['Choose the figure that completes the 2×2 matrix.',['Figure A','Figure B','Figure C','Figure D'],3,'Moving right adds the diagonal; moving down adds the dot. The lower-right cell must contain the horizontal line, diagonal, and dot.','matrix',['matrix-0','matrix-1','matrix-2','matrix-3']],
['Three figures are rotations of one identical shape. Which option is DIFFERENT?',['Figure A','Figure B','Figure C','Figure D'],3,'A, B, and C are true 0°, 90°, and 180° rotations of the same marked corner. D has its dot on the wrong side for a 270° rotation.','', ['motif-0-0','motif-0-90','motif-0-180','motif-bad']]
];
const questions=rows.map((r,i)=>({id:'nonverbal-2026-q'+String(i+1).padStart(2,'0'),subject,question:r[0],options:r[1],answer:r[2],explanation:r[3],figure:r[4]||null,optionFigures:r[5]||null,topic:['Triangle counting','Triangle counting','Triangle counting','Triangle counting','Squares','Rectangles','Rectangles','Mirror image','Water image','Figure series','Figure series','Figure analogy','Paper folding','Paper folding','Embedded figures','Embedded figures','Dice','Cube net','Matrix completion','Odd figure'][i]}));
const test={id:'nonverbal-visual-20-2026',name:'Non-Verbal & Figure Counting · Visual 20',type:'section',subject,subjectIndex:0,level:'Hard · diagram-based',minutes:15,marks:40,questionCount:questions.length,isFeaturedPrep:true,topic:'All major non-verbal question types',method:'20 original visual practice questions; not SSC PYQs'};
const oldGet=data.getQuestions;
data.getQuestions=t=>t&&t.id===test.id?questions.map(q=>Object.assign({},q,{options:q.options.slice(),optionFigures:q.optionFigures?q.optionFigures.slice():null})):oldGet(t);
if(!data.catalog.some(t=>t.id===test.id))data.catalog.unshift(test);
window.CGL_VISUALS={render:id=>diagrams[id]||'',has:id=>!!diagrams[id],testId:test.id};
})();
