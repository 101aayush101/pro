/* CGL Arena — Visual Reasoning Challenge 2
 * 20 original diagram-driven SSC CGL-style questions; not official exam/PYQs.
 * Independent geometry enumeration was used to verify the counting keys.
 */
(function(){
'use strict';
const D=window.CGL_DATA;if(!D)return;
const C='#293b58',B='#4a5cdb',P='#a8b4c8',Y='#eb992f',F='#eff4ff';
const rn=n=>Number(Number(n).toFixed(3));
const ln=(a,b,color=C,w=2)=>'<line x1="'+rn(a[0])+'" y1="'+rn(a[1])+'" x2="'+rn(b[0])+'" y2="'+rn(b[1])+'" stroke="'+color+'" stroke-width="'+w+'" stroke-linecap="round"/>';
const box=(x,y,w,h,color=C,fill='none',sw=2)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'" stroke="'+color+'" stroke-width="'+sw+'" rx="1"/>';
const poly=(d,color=C,w=2,fill='none')=>'<path d="'+d+'" stroke="'+color+'" stroke-width="'+w+'" fill="'+fill+'" stroke-linejoin="round" stroke-linecap="round"/>';
const circle=(x,y,r=5,color=Y)=>'<circle cx="'+rn(x)+'" cy="'+rn(y)+'" r="'+r+'" fill="'+color+'"/>';
const word=(x,y,text,size=14)=>'<text x="'+x+'" y="'+y+'" font-family="Arial,sans-serif" text-anchor="middle" font-size="'+size+'" fill="'+C+'">'+text+'</text>';
const svg=(s,w=360,h=225,alt='Figure shown in question')=>'<svg class="cgl-figure-svg" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="'+alt+'" xmlns="http://www.w3.org/2000/svg">'+s+'</svg>';
const diagrams=Object.create(null);
function geom(segs,label){
 let s='',S=28,ox=30,oy=197;
 for(const [a,b] of segs)s+=ln([ox+a[0]*S,oy-a[1]*S],[ox+b[0]*S,oy-b[1]*S],C,2.2);
 return svg(s,370,220,label);
}
function fan(levels,rays,w=8,h=6){
 let s=[],apex=[w/2,h];
 for(let i=0;i<rays;i++)s.push([apex,[w*i/(rays-1),0]]);
 s.push([[0,0],[w,0]]);
 for(const y of levels){let r=1-y/h;s.push([[w/2-w/2*r,y],[w/2+w/2*r,y]]);}
 return s;
}
const t1=fan([2,4],5);
t1.push([[2,0],[14/3,4]]);
diagrams.t1=geom(t1,'Irregular triangle with five rays, two parallel bars and an additional diagonal');
const sq6=[[[0,0],[6,0]],[[6,0],[6,6]],[[6,6],[0,6]],[[0,6],[0,0]]];
diagrams.t2=geom([...sq6,[[0,0],[6,6]],[[6,0],[0,6]],[[3,0],[3,6]],[[0,3],[6,3]]],'Square with both diagonals and two centre lines');
function triGrid(n){
 const s=[],a=[4,6],left=[0,0],right=[8,0];
 for(let i=1;i<=n;i++){let t=i/n;s.push([[4-4*t,6-6*t],[4+4*t,6-6*t]]);}
 for(let i=0;i<n;i++){let t=i/n;s.push([[4-4*t,6-6*t],[8-8*t,0]]);s.push([[4+4*t,6-6*t],[8*t,0]]);}
 return geom(s,'Complete triangular grid of four equal subdivisions per side');
}
diagrams.t3=triGrid(4);
diagrams.t4=geom(fan([1.5,3,4.5],6,8,6),'Six rays meeting three parallel crossbars and the triangular outline');
const sq8=[[[0,0],[8,0]],[[8,0],[8,8]],[[8,8],[0,8]],[[0,8],[0,0]]];
const diamond=[[[4,0],[8,4]],[[8,4],[4,8]],[[4,8],[0,4]],[[0,4],[4,0]]];
const axes=[[[4,0],[4,8]],[[0,4],[8,4]]];
diagrams.s1=geom([...sq8,...diamond,...axes,[[0,0],[8,8]],[[0,8],[8,0]]],'Square with inner tilted square, central cross and both diagonals');
diagrams.s2=geom([...sq8,...diamond,...axes],'Outer square with tilted diamond and central cross');
function brokenGrid(two){
 const s=[];for(let x=0;x<=4;x++){
  if(two&&x===2){s.push([[2,0],[2,1]],[[2,2],[2,3]]);}
  else s.push([[x,0],[x,3]]);
 }
 for(let y=0;y<=3;y++){
  if(y===2){s.push([[0,2],[2,2]],[[3,2],[4,2]]);}
  else s.push([[0,y],[4,y]]);
 }
 return geom(s,'Incomplete rectangular grid with visible missing line segments');
}
diagrams.r1=brokenGrid(false);diagrams.r2=brokenGrid(true);
function asym(v){
 const p=poly('M25 27 H115 V78 H83 V104 H42 V66 H25 Z',C,3)+circle(103,43,6,Y)+circle(32,87,4,B)+poly('M49 43 L63 31 L78 43',B,3);
 const tr=v==='flip'?'translate(150,0) scale(-1,1)':v==='water'?'translate(0,126) scale(1,-1)':v==='rot'?'rotate(180,75,63)':v==='twist'?'translate(150,126) scale(-1,-1)':'';
 return svg('<g transform="'+tr+'">'+p+'</g>',150,126,'Asymmetric polygon with coloured dots and notch');
}
['base','flip','water','rot','twist'].forEach(x=>diagrams['asym-'+x]=asym(x));
function gear(rot,pip){
 const core=poly('M46 15 L63 38 L47 57 L31 38 Z',C,3,F)+poly('M38 30 L54 46',B,2.5)+circle(...[[19,19],[76,19],[76,76],[19,76]][pip],5,Y);
 return '<g transform="rotate('+rot+' 47 47)">'+core+'</g>';
}
function gearPic(rot,pip){return svg(gear(rot,pip),95,95,'Arrow and moving dot');}
function gearSeq(){
 let s='';[[0,0],[90,1],[180,2],[270,3]].forEach(([deg,dot],i)=>{let x=5+i*94;s+=box(x+2,4,90,93,P,'#fff',1)+'<g transform="translate('+x+' 2)">'+gear(deg,dot)+'</g>';});
 s+=word(433,55,'?',32);return svg(s,465,105,'Double rule series: rotating diamond and moving corner dot');
}
diagrams.gearSeq=gearSeq();
[[0,0],[0,1],[90,0],[90,1],[180,0],[180,1]].forEach(([rot,p])=>diagrams['gear-'+rot+'-'+p]=gearPic(rot,p));
function analogyFigure(type,rot){
 const paths=[poly('M25 23 H75 V49 L53 74',C,3)+circle(33,34,5,Y),poly('M30 19 V73 H74 L83 49',C,3)+circle(69,63,5,Y)];
 return '<g transform="rotate('+rot+' 55 51)">'+paths[type]+'</g>';
}
function analogySvg(type,rot){return svg(analogyFigure(type,rot),112,107,'Asymmetric hooked line with dot');}
function analogyMain(){
 return svg(analogyFigure(0,0)+'<g transform="translate(115 0)">'+analogyFigure(0,180)+'</g>'+word(240,58,'::',23)+'<g transform="translate(258 0)">'+analogyFigure(1,0)+'</g>'+word(385,58,'?',24),420,108,'First pair shows rotation applied to a second shape');
}
diagrams.analogy=analogyMain();
[0,90,180,270].forEach(d=>diagrams['analogy-'+d]=analogySvg(1,d));
function matrixIcon(diagonal,dot,cross){
 let s=box(16,16,75,75,C,'white',2)+poly('M27 75 H79',B,3);
 if(diagonal)s+=ln([28,65],[78,30],Y,3);
 if(dot)s+=circle(35,35,6,C);
 if(cross)s+=ln([79,65],[28,30],P,2);
 return s;
}
function matrixFig(){
 let s='';[[false,false],[true,false],[false,true]].forEach(([dia,dot],i)=>{let x=i===1?135:6,y=i===2?111:0;s+='<g transform="translate('+x+' '+y+')">'+matrixIcon(dia,dot,false)+'</g>';});
 s+=box(135,111,111,102,P,F,1)+word(192,170,'?',29);
 return svg(s,258,218,'Two by two figure matrix with missing bottom right cell');
}
diagrams.matrix=matrixFig();
for(let i=0;i<4;i++)diagrams['matrix-'+i]=svg(matrixIcon(!!(i&1),!!(i&2),false),110,110,'Square with horizontal line and added symbols');
function foldDiagram(mixed){
 let s=box(9,22,126,126,C,'#fff',2)+ln([72,22],[72,148],B,2)+ln([9,85],[135,85],B,2);
 s+=word(72,12,'Full sheet',11)+word(167,86,'→',26);
 s+=box(207,85,63,63,C,F,2)+ln([207,85],[207,148],B,2)+ln([207,85],[270,85],B,2);
 if(mixed){s+=circle(207,119,5,C)+circle(250,126,5,C);}
 else{s+=circle(230,109,5,C)+circle(253,136,5,C);}
 s+=word(240,165,'Folded quarter',11);
 return svg(s,310,176,'Two folds, and holes in quarter sheet shown precisely');
}
diagrams.foldTwo=foldDiagram(false);diagrams.foldMixed=foldDiagram(true);
function punchSheet(points){
 let s=box(12,10,126,126,C,'#fff',2);
 points.forEach(([x,y])=>s+=circle(12+x*126,10+y*126,3.8,C));
 return svg(s,150,147,'Unfolded sheet with hole positions');
}
const reflect4=(x,y)=>[[x,y],[1-x,y],[x,1-y],[1-x,1-y]];
const distinct=arr=>[...new Map(arr.map(p=>[p.map(x=>x.toFixed(4)).join('/'),p])).values()];
const p8=distinct([...reflect4(23/126,24/126),...reflect4(46/126,51/126)]);
const p6=distinct([...reflect4(0,34/126),...reflect4(43/126,41/126)]);
const candidateHoles={
eight:p8,
eightWrongA:distinct([...reflect4(23/126,24/126),...reflect4(46/126,30/126)]),
eightWrongB:distinct([...reflect4(23/126,24/126),...reflect4(46/126,51/126)]).slice(0,6),
eightWrongC:distinct([...reflect4(23/126,24/126),...reflect4(23/126,51/126)]),
six:p6,
sixWrongA:distinct([...reflect4(20/126,34/126),...reflect4(43/126,41/126)]),
sixWrongB:distinct([...reflect4(0,34/126),...reflect4(43/126,41/126)]).slice(0,5),
sixWrongC:distinct([...reflect4(0,34/126),...reflect4(43/126,18/126)])
};
Object.entries(candidateHoles).forEach(([k,v])=>diagrams['holes-'+k]=punchSheet(v));
function embeddedShape(kind=0){
 if(kind===0)return 'M10 84 H36 L65 43 H95 V20 L117 20';
 if(kind===1)return 'M10 84 H36 L65 43 H95 V20 L117 42';
 if(kind===2)return 'M10 84 H36 L65 43 V20 H117';
 if(kind===3)return 'M10 84 H36 L65 43 H95 V84 L117 84';
 return 'M10 84 H36 L65 43 H95 V20 L117 20';
}
function embedded(kind,extra){
 let s=poly(embeddedShape(kind),C,4);
 if(extra){
  s+=ln([9,20],[119,109],P,1.6)+ln([21,108],[110,15],P,1.6)+ln([49,15],[49,105],P,1.5);
  s+=ln([20,55],[116,55],P,1.5);
 }
 return svg(s,132,124,'Embedded connected-line shape');
}
diagrams.embedTarget=embedded(0,false);
for(let i=0;i<4;i++)diagrams['embed-'+i]=embedded(i,true);
function irregularTarget(type,clutter){
 // A six-edge zig-zag with a descending right stem.
 let p=type===0?'M14 93 V53 L47 53 L69 23 L93 53 H116 V100':
 type===1?'M14 93 V53 L47 53 L69 23 L93 53 H116 V20':
 type===2?'M14 93 V53 L47 53 L69 23 L93 53 V100 H116':
 'M14 93 V53 L47 53 L69 23 L93 80 H116 V100';
 let s=poly(p,C,3.3);if(clutter)s+=ln([5,12],[133,110],P,1.5)+ln([29,12],[29,112],P,1.5)+ln([6,76],[128,33],P,1.4);
 return svg(s,145,120,'Hidden seven-segment zigzag shape');
}
diagrams.embed2Target=irregularTarget(0,false);
for(let i=0;i<4;i++)diagrams['embed2-'+i]=irregularTarget(i,true);
function diceNet(){
 const s=48,x=138,y=100;let b='';
 [[0,0,'A'],[-1,0,'B'],[1,0,'C'],[0,-1,'D'],[0,1,'E'],[0,-2,'F']].forEach(([dx,dy,label])=>{b+=box(x+dx*s,y+dy*s,s,s,C,F,2)+word(x+dx*s+s/2,y+dy*s+s/2+6,label,20);});
 return svg(b,350,220,'Six-square cube net with labelled faces');
}
diagrams.diceNet=diceNet();
function die(top,left,right,x){
 return '<g transform="translate('+x+' 0)">'+poly('M76 15 L128 42 L76 69 L24 42 Z',C,2,'#e4eaff')+poly('M24 42 L76 69 V113 L24 87 Z',C,2,'#fff1cf')+poly('M128 42 L76 69 V113 L128 87 Z',C,2,'#dcf5ed')+word(76,50,top,20)+word(50,86,left,20)+word(102,86,right,20)+'</g>';
}
diagrams.dieViews=svg(die('A','B','C',0)+die('A','D','B',165)+word(82,148,'View 1',12)+word(247,148,'View 2',12),326,161,'Two different orientations of the same labelled die');
function oddCorner(rotation,wrong){
 const s=poly('M19 72 V19 H72',C,4)+circle(wrong?29:79,72,5,Y)+poly('M20 35 L35 35',B,3);
 return svg('<g transform="rotate('+rotation+' 50 51)">'+s+'</g>',100,104,'Rotated L-corner, blue mark and orange dot');
}
[0,90,180].forEach(x=>diagrams['odd-'+x]=oddCorner(x,false));
diagrams['odd-wrong']=oddCorner(270,true);
const sub='General Intelligence';
const rows=[
['Count ALL triangles in the irregular figure. Small, large and overlapping triangles all count.',['36','38','40','44'],2,'40. There are 30 in the five-ray figure with three complete horizontal levels (including the base); the extra slanting segment generates 10 more triangles.','t1'],
['How many triangles are present in the square with two diagonals and the centre cross?',['12','16','20','24'],1,'16 triangles: trace all triangle outlines created by the centre, corners and the side midpoints. Count large ones as well as small.','t2'],
['Count all upward and downward triangles of every size in the complete triangular grid.',['24','26','27','30'],2,'Complete four-subdivision triangular lattice: 27 triangles. Count both orientations; not just smallest upward ones.','t3'],
['Count all the triangles in the figure with six rays and three interior parallel lines.',['36','42','45','48'],2,'Choose any two of six rays (15 choices); each of three interior crossbars plus the base makes 4 different base levels, so 15 × 4 = 60.','t4'],
['How many squares, including TILTED squares, are in the figure?',['8','10','12','14'],1,'10 squares: the four small axis-aligned squares, the large outer square, the large rotated diamond and four smaller tilted squares.','s1'],
['Count all squares in this figure. A diamond tilted at 45 degrees is also a square.',['5','6','7','8'],1,'6 squares: four quadrant squares, the full outer square, and the central tilted square.','s2'],
['How many rectangles EXCLUDING squares can be counted in the incomplete grid?',['22','24','26','28'],2,'The broken middle horizontal segment still allows 42 complete rectangles, including 16 squares; non-square rectangles = 42 − 16 = 26.','r1'],
['Count all rectangles INCLUDING squares in this irregular grid. Look closely for missing segments.',['26','28','30','32'],2,'30 complete rectangles. A rectangle is counted only when all four sides remain unbroken.','r2'],
['A mirror is placed immediately to the RIGHT of the original image. Choose the exact reflection.',['Figure A','Figure B','Figure C','Figure D'],3,'A vertical mirror swaps left/right, but not top/bottom. The yellow and blue dots and the roof notch must move together.','asym-base',['asym-twist','asym-water','asym-rot','asym-flip']],
['Choose the exact WATER IMAGE of the figure.',['Figure A','Figure B','Figure C','Figure D'],0,'The reflection is across a horizontal line: top/bottom reverse, while left/right remain unchanged.','asym-base',['asym-water','asym-flip','asym-rot','asym-base']],
['In the series, both the central figure and the corner dot change. Select the missing next figure.',['Figure A','Figure B','Figure C','Figure D'],1,'One component rotates by 90° clockwise each step. The dot cycles around its four corners, returning to the starting corner after four figures.','gearSeq',['gear-90-0','gear-0-0','gear-0-1','gear-180-0']],
['Find the missing figure in the analogy. The transformation applies to the whole marked shape.',['Figure A','Figure B','Figure C','Figure D'],2,'The first symbol is turned through 180°. Apply the same rotation, including the orange dot, to the third shape.','analogy',['analogy-90','analogy-0','analogy-180','analogy-270']],
['Select the figure completing the 2×2 matrix.',['Figure A','Figure B','Figure C','Figure D'],3,'Moving right adds a diagonal; moving down adds the dot. Bottom-right contains both additions.','matrix',['matrix-0','matrix-2','matrix-1','matrix-3']],
['The square is folded along BOTH dashed centre lines into the shown quarter, then two holes are punched. Select the fully unfolded sheet.',['Figure A','Figure B','Figure C','Figure D'],1,'Each hole is away from both creases, yielding four reflections per punch. The eight hole positions must match the original offsets from the folds.','foldTwo',['holes-eightWrongA','holes-eight','holes-eightWrongC','holes-eightWrongB']],
['After two perpendicular folds, the folded sheet is punched twice as illustrated. One punch is exactly ON the vertical crease. Choose the fully unfolded sheet.',['Figure A','Figure B','Figure C','Figure D'],2,'The hole touching the centre vertical fold becomes two positions. The other is clear of both folds and becomes four. Total six holes, at the exact shown locations.','foldMixed',['holes-sixWrongA','holes-sixWrongC','holes-six','holes-sixWrongB']],
['Which option hides the EXACT target line figure among additional intersecting lines?',['Figure A','Figure B','Figure C','Figure D'],1,'B alone preserves every change of direction in order, including the short rightward ending after the upward segment. Extra pale lines can be ignored.','embedTarget',['embed-2','embed-0','embed-3','embed-1']],
['Choose the option which contains the TARGET zig-zag outline exactly.',['Figure A','Figure B','Figure C','Figure D'],3,'The fourth figure keeps the last long right vertical segment pointing down while retaining all earlier turns.','embed2Target',['embed2-2','embed2-1','embed2-3','embed2-0']],
['After folding this cube net, which face is OPPOSITE face D?',['B','C','E','F'],2,'D and E fold onto opposite sides; A and F are opposite, and B and C are opposite.','diceNet'],
['These are two valid views of the SAME die. Which face must be opposite face C?',['A','B','D','Not possible to determine'],2,'A and B are the common adjacent faces. C in one view and D in the other must lie opposite each other.','dieViews'],
['Three images are rotations of the same marked L-shaped figure. Which one is DIFFERENT?',['Figure A','Figure B','Figure C','Figure D'],3,'D is not an exact rotation: its orange dot is attached to the wrong location relative to the corner and blue mark.','', ['odd-0','odd-90','odd-180','odd-wrong']]
];
rows[3][1]=['45','54','60','72']; rows[3][2]=2; rows[3][3]='There are 6 rays, giving C(6,2)=15 ways to choose the sides. Three interior levels plus the base give 4 bases. Total 15×4=60.';
const qs=rows.map((r,i)=>({id:'visual-hard-2026-q'+String(i+1).padStart(2,'0'),subject:sub,question:r[0],options:r[1],answer:r[2],explanation:r[3],figure:r[4]||null,optionFigures:r[5]||null,topic:['Irregular triangles','Composite triangles','Triangular lattice','Ray triangles','Tilted squares','Squares','Broken-grid rectangles','Irregular rectangles','Mirror image','Water image','Figure series','Figure analogy','Figure matrix','Paper folding','Fold and holes','Embedded figure','Embedded figure','Cube net','Dice faces','Odd figure'][i]}));
const test={id:'nonverbal-visual-challenge-20-2026',name:'Non-Verbal Challenge 2 · Difficult Visual 20',type:'section',subject:sub,subjectIndex:0,level:'Hard · 8.5/10 target',minutes:15,marks:40,questionCount:20,isFeaturedPrep:true,topic:'Complex figures, counting and visual transformations',method:'Original visual practice, not SSC PYQs'};
const old=D.getQuestions;
D.getQuestions=t=>t?.id===test.id?qs.map(q=>({...q,options:q.options.slice(),optionFigures:q.optionFigures?q.optionFigures.slice():null})):old(t);
if(!D.catalog.some(t=>t.id===test.id))D.catalog.unshift(test);
const older=window.CGL_VISUALS;
window.CGL_VISUALS={render:id=>diagrams[id]||older?.render(id)||'',has:id=>!!diagrams[id]||!!older?.has(id),testId:test.id};
})();
