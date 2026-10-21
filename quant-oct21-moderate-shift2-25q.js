/* SSC CGL Arena: original 25Q moderate shift simulation, 21 Oct 2026. Not authenticated SSC PYQ. */
(function(){'use strict';
const D=window.CGL_DATA;if(!D)return;
const ID='quant-oct21-moderate-shift2-25q';if(D.catalog.some(t=>t.id===ID))return;
const questions=[
  {
    "id": "cgl-oct-moderate2-01",
    "subject": "Quantitative Aptitude",
    "topic": "Decimal simplification · BODMAS",
    "difficulty": "moderate",
    "question": "Evaluate: 3.75 ÷ 0.15 + (1.2)² ÷ 0.16 − 7.5 × 2.",
    "options": [
      "16",
      "18",
      "19",
      "21"
    ],
    "answer": 2,
    "explanation": "3.75 ÷ 0.15 = 25; (1.2)² ÷ 0.16 = 1.44/0.16 = 9; 7.5 × 2 = 15. Required value = 25 + 9 − 15 = 19."
  },
  {
    "id": "cgl-oct-moderate2-02",
    "subject": "Quantitative Aptitude",
    "topic": "Number system · perfect cubes",
    "difficulty": "moderate",
    "question": "What is the least positive integer by which 2⁴ × 3⁵ × 5² must be multiplied to obtain a perfect cube?",
    "options": [
      "60",
      "30",
      "45",
      "90"
    ],
    "answer": 0,
    "explanation": "In a perfect cube, prime exponents are multiples of 3. Add powers 2², 3¹ and 5¹; multiplier = 4 × 3 × 5 = 60."
  },
  {
    "id": "cgl-oct-moderate2-03",
    "subject": "Quantitative Aptitude",
    "topic": "Profit & loss · equal selling prices",
    "difficulty": "moderate",
    "question": "Two articles are sold for ₹2,700 each. The first yields a profit of 20% and the second a loss of 10%. What is the overall gain or loss percentage?",
    "options": [
      "2 6/7% loss",
      "3% gain",
      "3% loss",
      "2 6/7% gain"
    ],
    "answer": 3,
    "explanation": "Cost prices: 2700/1.20 = 2250 and 2700/0.90 = 3000. Total CP = 5250; total SP = 5400. Profit % = 150/5250 × 100 = 20/7% = 2 6/7%."
  },
  {
    "id": "cgl-oct-moderate2-04",
    "subject": "Quantitative Aptitude",
    "topic": "Percentages · population",
    "difficulty": "moderate",
    "question": "In a town of 36,000 people, the number of men increases by 20% while the number of women decreases by 10%. If the town's total population increases by 8%, how many men lived there originally?",
    "options": [
      "18,000",
      "21,600",
      "20,000",
      "24,000"
    ],
    "answer": 1,
    "explanation": "Let original men be M. New total = 1.08×36000=38880. Thus 1.2M + 0.9(36000−M)=38880, so 0.3M=6480 and M=21,600."
  },
  {
    "id": "cgl-oct-moderate2-05",
    "subject": "Quantitative Aptitude",
    "topic": "Compound interest · difference from SI",
    "difficulty": "easy",
    "question": "The difference between compound interest and simple interest for 2 years at 8% per annum, compounded annually, is ₹128. Find the principal.",
    "options": [
      "₹20,000",
      "₹16,000",
      "₹18,000",
      "₹25,000"
    ],
    "answer": 0,
    "explanation": "For 2 years at annual compounding, CI − SI = P(r/100)². Thus 128=P×(0.08)²=P×0.0064, so P=₹20,000."
  },
  {
    "id": "cgl-oct-moderate2-06",
    "subject": "Quantitative Aptitude",
    "topic": "Pipes and cisterns · leak closure",
    "difficulty": "hard",
    "question": "Pipe A fills a tank in 12 hours and pipe B in 18 hours. A leak empties the full tank in 36 hours. All three are opened for 3 hours; then the leak is closed. How much additional time do A and B take to fill the tank?",
    "options": [
      "4 hours 24 minutes",
      "4 hours 36 minutes",
      "5 hours 12 minutes",
      "4 hours 48 minutes"
    ],
    "answer": 3,
    "explanation": "All three fill at 1/12 + 1/18 − 1/36 = 1/9 tank/hour. In 3 hours they fill 1/3. Remaining 2/3 is filled by A+B at 5/36 tank/hour, taking (2/3)/(5/36) = 24/5 hours = 4 h 48 min."
  },
  {
    "id": "cgl-oct-moderate2-07",
    "subject": "Quantitative Aptitude",
    "topic": "Boats and streams",
    "difficulty": "moderate",
    "question": "A motorboat covers 24 km downstream in 2 hours and 18 km upstream in 3 hours. How long will it take to cover 36 km in still water at its usual engine speed?",
    "options": [
      "3 hours",
      "4 hours",
      "3½ hours",
      "4½ hours"
    ],
    "answer": 1,
    "explanation": "Downstream speed=24/2=12 km/h; upstream=18/3=6 km/h. Still-water speed=(12+6)/2=9 km/h. Time=36/9=4 hours."
  },
  {
    "id": "cgl-oct-moderate2-08",
    "subject": "Quantitative Aptitude",
    "topic": "Average · replacement group",
    "difficulty": "easy",
    "question": "The average marks of 30 students are 48. Five more students join, raising the average of the 35 students to 50. Find the average marks of the five new students.",
    "options": [
      "58",
      "60",
      "62",
      "64"
    ],
    "answer": 2,
    "explanation": "Original sum=30×48=1440; new total=35×50=1750. Additional five students' total=310, average=310/5=62."
  },
  {
    "id": "cgl-oct-moderate2-09",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · symmetric cubic sum",
    "difficulty": "moderate",
    "question": "If a+b+c=12, ab+bc+ca=44 and abc=48, find a³+b³+c³.",
    "options": [
      "264",
      "288",
      "276",
      "312"
    ],
    "answer": 1,
    "explanation": "a³+b³+c³=(a+b+c)³−3(a+b+c)(ab+bc+ca)+3abc = 1728−1584+144 = 288."
  },
  {
    "id": "cgl-oct-moderate2-10",
    "subject": "Quantitative Aptitude",
    "topic": "Surds · rationalised conjugates",
    "difficulty": "easy",
    "question": "Simplify: 1/(√7−√6) − 1/(√7+√6).",
    "options": [
      "√6",
      "2√7",
      "√14",
      "2√6"
    ],
    "answer": 3,
    "explanation": "The common denominator is (√7)²−(√6)² = 1. Numerator (√7+√6)−(√7−√6)=2√6."
  },
  {
    "id": "cgl-oct-moderate2-11",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · roots of a quadratic",
    "difficulty": "moderate",
    "question": "If α and β are the roots of 3x² − 10x + 3 = 0, what is α² + β²?",
    "options": [
      "82/9",
      "70/9",
      "76/9",
      "88/9"
    ],
    "answer": 0,
    "explanation": "By Vieta, α+β=10/3 and αβ=1. Hence α²+β²=(α+β)²−2αβ = 100/9−2 = 82/9."
  },
  {
    "id": "cgl-oct-moderate2-12",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · sin and cos sum",
    "difficulty": "moderate",
    "question": "If θ is acute and tan θ = 5/12, find (sin θ + cos θ)².",
    "options": [
      "169/289",
      "225/169",
      "289/169",
      "196/169"
    ],
    "answer": 2,
    "explanation": "From tanθ=5/12, sinθ=5/13 and cosθ=12/13. So (sinθ+cosθ)²=(17/13)²=289/169."
  },
  {
    "id": "cgl-oct-moderate2-13",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · complementary angles",
    "difficulty": "moderate",
    "question": "If sin(3x+15°) = cos(2x+5°) and both displayed arguments are acute angles, find x.",
    "options": [
      "12°",
      "16°",
      "18°",
      "14°"
    ],
    "answer": 3,
    "explanation": "For acute arguments, sin u=cos v implies u+v=90°. Thus (3x+15)+(2x+5)=90, giving 5x=70 and x=14°."
  },
  {
    "id": "cgl-oct-moderate2-14",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · compound-angle cosine",
    "difficulty": "hard",
    "question": "A and B are acute angles, with cos A = 5/13 and sin B = 3/5. Find cos(A − B).",
    "options": [
      "48/65",
      "56/65",
      "52/65",
      "63/65"
    ],
    "answer": 1,
    "explanation": "sin A=12/13 and cos B=4/5. cos(A−B)=cosAcosB+sinAsinB = (5/13)(4/5)+(12/13)(3/5)=20/65+36/65=56/65."
  },
  {
    "id": "cgl-oct-moderate2-15",
    "subject": "Quantitative Aptitude",
    "topic": "Height & distance · depression from building",
    "difficulty": "moderate",
    "question": "From the top of a 30 m high building, the angles of depression of the top and the foot of another vertical building are 30° and 60°, respectively. Find the height of the second building.",
    "options": [
      "20 m",
      "15 m",
      "25 m",
      "10√3 m"
    ],
    "answer": 0,
    "explanation": "Let horizontal separation be d and shorter building height be h. tan60°=30/d, so d=10√3. tan30°=(30−h)/d => 30−h=10; therefore h=20 m.",
    "figure": "moderate2-building"
  },
  {
    "id": "cgl-oct-moderate2-16",
    "subject": "Quantitative Aptitude",
    "topic": "Circles · direct common tangent",
    "difficulty": "moderate",
    "question": "Two circles have radii 11 cm and 4 cm, and the distance between their centres is 25 cm. Find the length of a direct common tangent segment between the points of contact.",
    "options": [
      "22 cm",
      "23 cm",
      "24 cm",
      "26 cm"
    ],
    "answer": 2,
    "explanation": "DCT = √[d²−(R−r)²] = √[25²−(11−4)²] = √(625−49) = √576 = 24 cm."
  },
  {
    "id": "cgl-oct-moderate2-17",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · cyclic quadrilateral",
    "difficulty": "easy",
    "question": "In cyclic quadrilateral ABCD, ∠A=(3x+8)° and ∠C=(5x−4)°. Find ∠C.",
    "options": [
      "96°",
      "106°",
      "102°",
      "112°"
    ],
    "answer": 1,
    "explanation": "Opposite angles of a cyclic quadrilateral sum to 180°. (3x+8)+(5x−4)=180 => 8x=176 => x=22. So ∠C=5×22−4=106°."
  },
  {
    "id": "cgl-oct-moderate2-18",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · similarity and area ratio",
    "difficulty": "hard",
    "question": "In triangle ABC, D lies on AB and E lies on AC such that DE ∥ BC. If AD:DB=2:3 and the area of triangle ADE is 24 cm², find the area of quadrilateral DBCE.",
    "options": [
      "100 cm²",
      "120 cm²",
      "132 cm²",
      "126 cm²"
    ],
    "answer": 3,
    "explanation": "AD/AB=2/(2+3)=2/5. Similar triangles' areas are in ratio 4:25. Area(ABC)=24×25/4=150 cm². Area(DBCE)=150−24=126 cm².",
    "figure": "moderate2-triangle"
  },
  {
    "id": "cgl-oct-moderate2-19",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · centroid and parallel section",
    "difficulty": "moderate",
    "question": "In triangle ABC, G is the centroid. The line through G parallel to BC meets AB at P and AC at Q. If BC=18 cm, find PQ.",
    "options": [
      "12 cm",
      "9 cm",
      "15 cm",
      "18 cm"
    ],
    "answer": 0,
    "explanation": "The centroid G is 2/3 of the altitude from A towards BC. So AP/AB=AQ/AC=2/3. By similarity, PQ=(2/3)BC=12 cm."
  },
  {
    "id": "cgl-oct-moderate2-20",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · triangular prism TSA",
    "difficulty": "hard",
    "question": "The base of a right triangular prism has sides 13 cm, 14 cm and 15 cm. If the height of the prism is 10 cm, find its total surface area.",
    "options": [
      "504 cm²",
      "546 cm²",
      "588 cm²",
      "630 cm²"
    ],
    "answer": 2,
    "explanation": "Heron: semiperimeter=21; base area=√(21×8×7×6)=84 cm². LSA=(13+14+15)×10=420 cm². TSA=420+2×84=588 cm²."
  },
  {
    "id": "cgl-oct-moderate2-21",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · sphere melted into cones",
    "difficulty": "easy",
    "question": "A solid metal sphere of radius 6 cm is melted into identical cones, each of base radius 3 cm and vertical height 8 cm. How many such cones are made, with no wastage?",
    "options": [
      "8",
      "10",
      "14",
      "12"
    ],
    "answer": 3,
    "explanation": "Sphere volume=(4/3)π×6³=288π cm³. Each cone volume=(1/3)π×3²×8=24π cm³. Number=288π/24π=12."
  },
  {
    "id": "cgl-oct-moderate2-22",
    "subject": "Quantitative Aptitude",
    "topic": "Statistics · grouped mode",
    "difficulty": "moderate",
    "question": "For a grouped frequency distribution of equal-width classes, the modal class is 50–60 with frequency 22. The preceding class (40–50) has frequency 14 and the succeeding class (60–70) has frequency 18. Estimate the mode.",
    "options": [
      "56.67",
      "55",
      "57.50",
      "60"
    ],
    "answer": 0,
    "explanation": "Mode=L+[(f₁−f₀)/(2f₁−f₀−f₂)]h = 50 + (22−14)/(44−14−18) × 10 = 50+80/12 ≈ 56.67."
  },
  {
    "id": "cgl-oct-moderate2-23",
    "subject": "Quantitative Aptitude",
    "topic": "DI · annual output growth",
    "difficulty": "hard",
    "question": "Study the double bar graph showing output (thousand units) of five factories in 2024 and 2025. By approximately what percentage did their combined output increase from 2024 to 2025?",
    "options": [
      "18.00%",
      "21.95%",
      "20.00%",
      "25.00%"
    ],
    "answer": 1,
    "explanation": "2024 total=120+180+150+210+160=820 thousand. 2025 total=150+210+195+245+200=1000 thousand. Increase percentage=(1000−820)/820×100≈21.95%.",
    "figure": "moderate2-factory-chart"
  },
  {
    "id": "cgl-oct-moderate2-24",
    "subject": "Quantitative Aptitude",
    "topic": "DI · relative growth by category",
    "difficulty": "moderate",
    "question": "According to the graph, which factory recorded the highest percentage increase in output from 2024 to 2025?",
    "options": [
      "Factory A",
      "Factory B",
      "Factory E",
      "Factory C"
    ],
    "answer": 3,
    "explanation": "Growth percentages: A 30/120=25%; B 30/180≈16.67%; C 45/150=30%; D 35/210≈16.67%; E 40/160=25%. Highest is Factory C.",
    "figure": "moderate2-factory-chart"
  },
  {
    "id": "cgl-oct-moderate2-25",
    "subject": "Quantitative Aptitude",
    "topic": "DI · multi-series ratio",
    "difficulty": "moderate",
    "question": "Using the same graph, find the ratio of the combined 2025 output of factories A, C and E to the combined 2024 output of factories B and D.",
    "options": [
      "103 : 78",
      "78 : 109",
      "109 : 78",
      "109 : 80"
    ],
    "answer": 2,
    "explanation": "A+C+E in 2025 =150+195+200=545. B+D in 2024 =180+210=390. Ratio=545:390=109:78.",
    "figure": "moderate2-factory-chart"
  }
];
const test={id:ID,name:'SSC CGL 2026 · Moderate Shift Simulation 2',type:'section',subject:'Quantitative Aptitude',subjectIndex:2,level:'Moderate · Exam-style 7/10',minutes:15,marks:50,questionCount:25,isFeaturedPrep:true,topic:'Numerical calculations, arithmetic, algebra, trigonometry, geometry, mensuration, statistics and comparative bar-chart DI',method:'Fresh original questions modelled on moderate-shift patterns in the October 2026 memory-based PDFs. Not actual SSC PYQs.'};
const prev=D.getQuestions;
D.getQuestions=t=>t?.id===ID?questions.map(q=>({...q,options:q.options.slice()})):prev(t);
D.catalog.unshift(test);

const palette={ink:'#19324d',soft:'#64748b',grid:'#cbd5e1',blue:'#2563eb',teal:'#0d9488',orange:'#d97706'};
const svgWrap=(inner,w=600,h=320,alt='Question diagram')=>'<svg class="cgl-figure-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+alt+'" viewBox="0 0 '+w+' '+h+'" style="width:100%;height:auto;max-width:720px;background:#fbfdff;border:1px solid #e2e8f0;border-radius:10px">'+inner+'</svg>';
function factoryChart(){
 const x0=68,y0=286,scale=0.87,names=['A','B','C','D','E'],early=[120,180,150,210,160],late=[150,210,195,245,200],parts=[];
 for(let v=0;v<=250;v+=50){const y=y0-v*scale;parts.push('<line x1="54" y1="'+y+'" x2="666" y2="'+y+'" stroke="'+palette.grid+'" stroke-width="1"/><text x="44" y="'+(y+4)+'" text-anchor="end" fill="'+palette.ink+'" font-size="13">'+v+'</text>');}
 names.forEach((name,i)=>{const base=x0+i*120,values=[early[i],late[i]],colors=[palette.blue,palette.teal];values.forEach((v,j)=>{const x=base+j*36,y=y0-v*scale;parts.push('<rect x="'+x+'" y="'+y+'" width="32" height="'+(v*scale)+'" fill="'+colors[j]+'" rx="2"/><text x="'+(x+16)+'" y="'+(y-6)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+palette.ink+'">'+v+'</text>');});parts.push('<text x="'+(base+34)+'" y="307" text-anchor="middle" font-size="14" font-weight="700" fill="'+palette.ink+'">'+name+'</text>');});
 parts.push('<text x="55" y="23" font-size="13" font-weight="600" fill="'+palette.ink+'">Factory output (thousand units)</text><rect x="394" y="12" width="13" height="13" fill="'+palette.blue+'"/><text x="413" y="23" font-size="13" fill="'+palette.ink+'">2024</text><rect x="482" y="12" width="13" height="13" fill="'+palette.teal+'"/><text x="501" y="23" font-size="13" fill="'+palette.ink+'">2025</text>');
 return svgWrap(parts.join(''),700,330,'Comparative bar chart: factories A to E. 2024 outputs 120,180,150,210,160; 2025 outputs 150,210,195,245,200 thousand units');
}
function buildings(){
 const s='<line x1="40" y1="225" x2="350" y2="225" stroke="'+palette.ink+'" stroke-width="2"/>'+
 '<rect x="113" y="45" width="34" height="180" fill="#dbeafe" stroke="'+palette.blue+'" stroke-width="2"/><rect x="234" y="105" width="38" height="120" fill="#dcfce7" stroke="'+palette.teal+'" stroke-width="2"/>'+
 '<circle cx="130" cy="45" r="3.5" fill="'+palette.ink+'"/>'+
 '<line x1="130" y1="45" x2="321" y2="45" stroke="'+palette.soft+'" stroke-width="1.6" stroke-dasharray="5 5"/>'+
 '<line x1="130" y1="45" x2="253" y2="105" stroke="'+palette.orange+'" stroke-width="2.6"/>'+
 '<line x1="130" y1="45" x2="253" y2="225" stroke="'+palette.orange+'" stroke-width="2.6"/>'+
 '<text x="153" y="94" fill="'+palette.ink+'" font-size="14">30°</text><text x="150" y="137" fill="'+palette.ink+'" font-size="14">60°</text><text x="68" y="140" fill="'+palette.ink+'" font-size="14">30 m</text><text x="279" y="166" fill="'+palette.ink+'" font-size="14">h = ?</text><text x="39" y="24" fill="'+palette.soft+'" font-size="13">Schematic only</text>';
 return svgWrap(s,390,250,'Two vertical buildings: taller building 30 m; depression angles from tall top to shorter top 30 degrees and foot 60 degrees');
}
function triangle(){
 const A=[170,23],B=[52,236],C=[344,236],D=[A[0]+(B[0]-A[0])*.4,A[1]+(B[1]-A[1])*.4],E=[A[0]+(C[0]-A[0])*.4,A[1]+(C[1]-A[1])*.4];
 const s='<polygon points="'+[A,B,C].map(p=>p.join(',')).join(' ')+'" fill="#eff6ff" stroke="'+palette.blue+'" stroke-width="2.5"/>'+
 '<polygon points="'+[A,D,E].map(p=>p.join(',')).join(' ')+'" fill="#b3e1d5"/><line x1="'+D[0]+'" y1="'+D[1]+'" x2="'+E[0]+'" y2="'+E[1]+'" stroke="'+palette.teal+'" stroke-width="3"/>'+
 '<text x="171" y="16" fill="'+palette.ink+'" font-size="15">A</text><text x="37" y="252" fill="'+palette.ink+'" font-size="15">B</text><text x="346" y="251" fill="'+palette.ink+'" font-size="15">C</text>'+
 '<text x="'+(D[0]-20)+'" y="'+(D[1]-4)+'" fill="'+palette.ink+'" font-size="14">D</text><text x="'+(E[0]+5)+'" y="'+(E[1]-4)+'" fill="'+palette.ink+'" font-size="14">E</text>'+
 '<text x="126" y="70" fill="'+palette.ink+'" font-size="13">Area ADE = 24</text><text x="173" y="270" fill="'+palette.ink+'" font-size="13">DE ∥ BC; AD : DB = 2 : 3</text>';
 return svgWrap(s,400,284,'Triangle ABC with D on AB and E on AC, DE parallel BC, area of small triangle ADE 24, AD to DB is two to three');
}

const figs={'moderate2-factory-chart':factoryChart(),'moderate2-building':buildings(),'moderate2-triangle':triangle()};
const prior=window.CGL_VISUALS;
window.CGL_VISUALS={render:id=>figs[id]||prior?.render(id)||'',has:id=>!!figs[id]||!!prior?.has(id),testId:prior?.testId};
})();
