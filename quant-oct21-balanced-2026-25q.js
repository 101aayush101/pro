/* CGL Arena: 21 October balanced SSC-style Quant mock. Original questions, NOT verified 2026 PYQs. */
(function(){'use strict';
const D=window.CGL_DATA;if(!D)return;
const ID='quant-oct21-balanced-2026-25q';if(D.catalog.some(t=>t.id===ID))return;
const questions=[
  {
    "id": "quant-oct21-balanced-q01",
    "subject": "Quantitative Aptitude",
    "topic": "Divisibility",
    "difficulty": "easy",
    "question": "How many positive integers strictly between 300 and 900 are divisible by both 7 and 9?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 2,
    "explanation": "LCM(7,9)=63. Multiples are 63×5=315 through 63×14=882; count=14−5+1=10."
  },
  {
    "id": "quant-oct21-balanced-q02",
    "subject": "Quantitative Aptitude",
    "topic": "Successive discount and profit",
    "difficulty": "moderate",
    "question": "A trader marks an article at ₹4,000 and offers successive discounts of 15% and 20%. If its cost price is ₹2,400, find the profit percentage.",
    "options": [
      "10%",
      "12%",
      "13⅓%",
      "15%"
    ],
    "answer": 2,
    "explanation": "SP=4000×0.85×0.80=₹2720. Profit=₹320 on ₹2400, so profit%=320/2400×100=13⅓%."
  },
  {
    "id": "quant-oct21-balanced-q03",
    "subject": "Quantitative Aptitude",
    "topic": "Simple interest · two amounts",
    "difficulty": "moderate",
    "question": "A sum amounts to ₹6,800 after 2 years and ₹8,000 after 5 years at simple interest. Find the annual rate of interest.",
    "options": [
      "6%",
      "6⅔%",
      "7%",
      "8%"
    ],
    "answer": 1,
    "explanation": "Three years' interest=₹1200, so annual interest=₹400. Principal=6800−2×400=₹6000. Rate=400/6000×100=6⅔%."
  },
  {
    "id": "quant-oct21-balanced-q04",
    "subject": "Quantitative Aptitude",
    "topic": "Partnership · changing investments",
    "difficulty": "hard",
    "question": "A invests ₹24,000 for 12 months. B invests ₹30,000 for 4 months and ₹18,000 for the next 8 months. C joins after 4 months and invests ₹20,000 until year-end. From a profit of ₹89,000, find B's share.",
    "options": [
      "₹30,000",
      "₹33,000",
      "₹36,000",
      "₹40,000"
    ],
    "answer": 1,
    "explanation": "Capital-months in thousands: A=24×12=288; B=30×4+18×8=264; C=20×8=160. Ratio=36:33:20 (89 parts). B gets 33/89×₹89,000=₹33,000."
  },
  {
    "id": "quant-oct21-balanced-q05",
    "subject": "Quantitative Aptitude",
    "topic": "Time and work · alternating days",
    "difficulty": "hard",
    "question": "A can complete a work in 18 days and B in 27 days. They work on alternate days, starting with A. In how many days will the work be completed?",
    "options": [
      "21 days",
      "21½ days",
      "22 days",
      "22½ days"
    ],
    "answer": 1,
    "explanation": "Let total work=54 units; A=3 units/day, B=2 units/day. Every two days 5 units. After 20 days 50 units done; day 21 A does 3; B completes the last 1 unit in half a day: 21½ days."
  },
  {
    "id": "quant-oct21-balanced-q06",
    "subject": "Quantitative Aptitude",
    "topic": "Trains and platforms",
    "difficulty": "easy",
    "question": "A train 210 m long crosses a platform 270 m long at a uniform speed of 72 km/h. How long does the train take to clear the platform?",
    "options": [
      "18 s",
      "21 s",
      "24 s",
      "27 s"
    ],
    "answer": 2,
    "explanation": "Distance=210+270=480 m; speed=72×5/18=20 m/s. Time=480/20=24 seconds."
  },
  {
    "id": "quant-oct21-balanced-q07",
    "subject": "Quantitative Aptitude",
    "topic": "Mixture · successive replacement",
    "difficulty": "hard",
    "question": "A vessel initially contains 40 litres of pure milk. Ten litres of the mixture are removed and replaced with water. The process is repeated once more. Find the final ratio of milk to water.",
    "options": [
      "7:9",
      "9:7",
      "3:2",
      "5:3"
    ],
    "answer": 1,
    "explanation": "Fraction of milk remaining=(1−10/40)²=(3/4)²=9/16. Milk=40×9/16=22.5 L; water=17.5 L. Ratio=22.5:17.5=9:7."
  },
  {
    "id": "quant-oct21-balanced-q08",
    "subject": "Quantitative Aptitude",
    "topic": "Circles · common chord",
    "difficulty": "moderate",
    "question": "Two intersecting circles have radii 10 cm and 17 cm and a common chord of length 16 cm. Their centres lie on opposite sides of the chord. Find the distance between their centres.",
    "options": [
      "9 cm",
      "15 cm",
      "19 cm",
      "21 cm"
    ],
    "answer": 3,
    "explanation": "Half chord=8 cm. Perpendicular distances of centres from chord are √(10²−8²)=6 and √(17²−8²)=15. Opposite sides → centre distance=6+15=21 cm."
  },
  {
    "id": "quant-oct21-balanced-q09",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · angle between tangents",
    "difficulty": "easy",
    "question": "Two tangents PA and PB touch a circle at A and B. If ∠APB=70°, what is the smaller central angle ∠AOB?",
    "options": [
      "70°",
      "90°",
      "110°",
      "140°"
    ],
    "answer": 2,
    "explanation": "OA⊥PA and OB⊥PB. In quadrilateral OAPB, ∠AOB+∠APB=180°. Therefore ∠AOB=110°."
  },
  {
    "id": "quant-oct21-balanced-q10",
    "subject": "Quantitative Aptitude",
    "topic": "Triangles · incenter",
    "difficulty": "easy",
    "question": "The internal bisectors of angles B and C in triangle ABC meet at I. If ∠BAC=74°, find ∠BIC.",
    "options": [
      "117°",
      "124°",
      "127°",
      "133°"
    ],
    "answer": 2,
    "explanation": "At the incenter, ∠BIC=90°+(∠A/2)=90°+37°=127°."
  },
  {
    "id": "quant-oct21-balanced-q11",
    "subject": "Quantitative Aptitude",
    "topic": "Square pyramid · slant edge",
    "difficulty": "hard",
    "question": "A right square pyramid has a slant edge of 15 cm and a vertical height of 9 cm. Find the ratio of its slant height to the side of its square base.",
    "options": [
      "√17 : 4",
      "√34 : 8",
      "√34 : 6",
      "3√17 : 8"
    ],
    "answer": 1,
    "explanation": "Apex–vertex edge E=15, vertical height H=9. (Base side)²=2(E²−H²)=288, so a=12√2. Face slant height²=H²+(a/2)²=81+72=153, giving l=3√17. Thus l:a=3√17:12√2=√34:8."
  },
  {
    "id": "quant-oct21-balanced-q12",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · hollow hemisphere",
    "difficulty": "moderate",
    "question": "A hollow hemispherical bowl has an outer radius of 5 cm and inner radius of 3 cm. Find the area of its outer curved face, inner curved face and flat circular rim together. Use π=22/7.",
    "options": [
      "242 cm²",
      "252 cm²",
      "264 cm²",
      "286 cm²"
    ],
    "answer": 2,
    "explanation": "Total area=2πR²+2πr²+π(R²−r²)=π(3R²+r²)=π(75+9)=84π=264 cm²."
  },
  {
    "id": "quant-oct21-balanced-q13",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · change in cone volume",
    "difficulty": "moderate",
    "question": "The radius of a cone is decreased by 10%, while its vertical height is increased by 20%. What is the percentage change in its volume?",
    "options": [
      "2.8% decrease",
      "2.8% increase",
      "8% decrease",
      "12% increase"
    ],
    "answer": 0,
    "explanation": "Volume ∝r²h. New/old=(0.9)²×1.2=0.972. Change=−2.8%."
  },
  {
    "id": "quant-oct21-balanced-q14",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · reciprocal identity",
    "difficulty": "moderate",
    "question": "For an acute angle θ, cosec θ − cot θ = 3/5. Find tan θ.",
    "options": [
      "8/15",
      "15/8",
      "16/15",
      "5/3"
    ],
    "answer": 1,
    "explanation": "(cosecθ−cotθ)(cosecθ+cotθ)=1, so sum=5/3. Thus 2cotθ=5/3−3/5=16/15, cotθ=8/15, tanθ=15/8."
  },
  {
    "id": "quant-oct21-balanced-q15",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · compound angle",
    "difficulty": "moderate",
    "question": "If A and B are acute angles with tan A=1/2 and tan B=1/3, find tan(A+B).",
    "options": [
      "1/2",
      "1",
      "5/6",
      "6/5"
    ],
    "answer": 1,
    "explanation": "tan(A+B)=(tanA+tanB)/(1−tanA·tanB)=(1/2+1/3)/(1−1/6)=(5/6)/(5/6)=1."
  },
  {
    "id": "quant-oct21-balanced-q16",
    "subject": "Quantitative Aptitude",
    "topic": "Height and distance · two positions",
    "difficulty": "moderate",
    "question": "A person walking towards a vertical tower observes the angle of elevation of its top changing from 30° to 60° after walking 40 m. Find the height of the tower.",
    "options": [
      "20√3 m",
      "40√3 m",
      "60 m",
      "40 m"
    ],
    "answer": 0,
    "explanation": "If height=h, initial distance=h√3, later distance=h/√3. Difference=2h/√3=40, giving h=20√3 m."
  },
  {
    "id": "quant-oct21-balanced-q17",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · reciprocal powers",
    "difficulty": "moderate",
    "question": "If x>0 and x+1/x=4, find x³+1/x³.",
    "options": [
      "48",
      "50",
      "52",
      "56"
    ],
    "answer": 2,
    "explanation": "x³+1/x³=(x+1/x)³−3(x+1/x)=4³−3×4=64−12=52."
  },
  {
    "id": "quant-oct21-balanced-q18",
    "subject": "Quantitative Aptitude",
    "topic": "Surds · conjugate roots",
    "difficulty": "moderate",
    "question": "Simplify √(11+2√30)+√(11−2√30).",
    "options": [
      "2√5",
      "2√6",
      "√22",
      "4√3"
    ],
    "answer": 1,
    "explanation": "11=6+5 and 30=6×5. Terms are √6+√5 and √6−√5 (positive). Sum=2√6."
  },
  {
    "id": "quant-oct21-balanced-q19",
    "subject": "Quantitative Aptitude",
    "topic": "Regular polygon · diagonals",
    "difficulty": "easy",
    "question": "Each interior angle of a regular polygon is 150°. How many diagonals does it have?",
    "options": [
      "44",
      "48",
      "54",
      "66"
    ],
    "answer": 2,
    "explanation": "Exterior angle=180°−150°=30°, so n=360/30=12 sides. Diagonals=n(n−3)/2=12×9/2=54."
  },
  {
    "id": "quant-oct21-balanced-q20",
    "subject": "Quantitative Aptitude",
    "topic": "Time, speed and distance · early/late",
    "difficulty": "moderate",
    "question": "At 45 km/h a person reaches a destination 20 minutes late. At 60 km/h the person reaches 10 minutes early. Find the distance to the destination.",
    "options": [
      "75 km",
      "80 km",
      "90 km",
      "100 km"
    ],
    "answer": 2,
    "explanation": "Travel-time difference=20+10=30 min=1/2 hour. Distance=45×60/(60−45)×1/2=90 km."
  },
  {
    "id": "quant-oct21-balanced-q21",
    "subject": "Quantitative Aptitude",
    "topic": "Histogram · grouped median",
    "difficulty": "moderate",
    "question": "The histogram shows class intervals of width 10 and their frequencies. Find the median of this grouped distribution (using interpolation).",
    "options": [
      "126",
      "128",
      "130",
      "132"
    ],
    "answer": 1,
    "explanation": "N=72; N/2=36. Cumulative frequencies: 8,20,40,..., so median class=120–130. Median=120+[(36−20)/20]×10=128.",
    "figure": "balanced-di-hist"
  },
  {
    "id": "quant-oct21-balanced-q22",
    "subject": "Quantitative Aptitude",
    "topic": "Histogram · cumulative frequency",
    "difficulty": "easy",
    "question": "Using the same histogram, find the absolute difference between the number of observations below 120 and the number at least 130.",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 2,
    "explanation": "Below 120:8+12=20. At least 130:16+10+6=32. Absolute difference=12.",
    "figure": "balanced-di-hist"
  },
  {
    "id": "quant-oct21-balanced-q23",
    "subject": "Quantitative Aptitude",
    "topic": "Statistics · grouped mean",
    "difficulty": "hard",
    "question": "Using the histogram, find the approximate arithmetic mean of the grouped data. Use class midpoints.",
    "options": [
      "126.94",
      "127.50",
      "128.61",
      "129.72"
    ],
    "answer": 2,
    "explanation": "Class midpoints=105,115,125,135,145,155. Assume 125 and deviations in steps of 10: (−2·8−1·12+0·20+1·16+2·10+3·6)=26. Mean=125+10×26/72≈128.61.",
    "figure": "balanced-di-hist"
  },
  {
    "id": "quant-oct21-balanced-q24",
    "subject": "Quantitative Aptitude",
    "topic": "Pie chart · central angle",
    "difficulty": "easy",
    "question": "In the pie chart, Defence accounts for 25% of total expenditure. What is its central angle?",
    "options": [
      "54°",
      "72°",
      "90°",
      "108°"
    ],
    "answer": 2,
    "explanation": "Central angle=percentage×360°/100=25×3.6°=90°.",
    "figure": "balanced-di-pie"
  },
  {
    "id": "quant-oct21-balanced-q25",
    "subject": "Quantitative Aptitude",
    "topic": "Average speed · equal distances",
    "difficulty": "moderate",
    "question": "A traveller covers three equal distances at speeds of 24 km/h, 36 km/h and 72 km/h. What is the average speed over the entire journey?",
    "options": [
      "32 km/h",
      "34 km/h",
      "36 km/h",
      "40 km/h"
    ],
    "answer": 2,
    "explanation": "For three equal distances, average speed=3/(1/24+1/36+1/72)=3/(6/72)=36 km/h."
  }
];
const test={id:ID,name:'21 Oct · Balanced SSC CGL Maths · 25Q',type:'section',subject:'Quantitative Aptitude',subjectIndex:2,level:'Moderate · SSC-style 7/10',minutes:15,marks:50,questionCount:25,isFeaturedPrep:true,topic:'Shift-inspired: arithmetic, algebra, trigonometry, geometry, mensuration, DI and statistics',method:'25 original practice questions inspired by user-provided October 2026 memory-based shift compilations. Not verified SSC exam questions.'};
const previous=D.getQuestions;
D.getQuestions=t=>t?.id===ID?questions.map(q=>({...q,options:q.options.slice()})):previous(t);
D.catalog.unshift(test);
const old=window.CGL_VISUALS;
const ink='#22364e',grid='#c7d5e6',blue='#0d9488';
const hist=()=>{const fs=[8,12,20,16,10,6],lab=['100–110','110–120','120–130','130–140','140–150','150–160'];let svg='<svg viewBox="0 0 570 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram: class intervals 100 to 160; corresponding frequencies 8, 12, 20, 16, 10, 6">';svg+='<rect x="0" y="0" width="570" height="260" rx="12" fill="#f8fafc"/>';
for(let k=0;k<=20;k+=5){let y=211-k*8;svg+='<line x1="55" x2="543" y1="'+y+'" y2="'+y+'" stroke="'+grid+'"/><text x="43" y="'+(y+4)+'" text-anchor="end" font-size="12" fill="'+ink+'">'+k+'</text>';}
fs.forEach((f,i)=>{let x=55+i*79, y=211-f*8;svg+='<rect x="'+x+'" y="'+y+'" width="79" height="'+(f*8)+'" stroke="#f8fafc" stroke-width="1" fill="'+(i===2?blue:'#3b82b6')+'"/><text x="'+(x+39.5)+'" y="'+(y-7)+'" text-anchor="middle" font-size="13" font-weight="700" fill="'+ink+'">'+f+'</text><text x="'+(x+39.5)+'" y="228" text-anchor="middle" font-size="11" fill="'+ink+'">'+lab[i]+'</text>';});
svg+='<text x="298" y="250" text-anchor="middle" font-size="12" fill="'+ink+'">Class interval</text><text x="17" y="22" font-size="12" fill="'+ink+'">Frequency</text></svg>';return svg;};
const pie=()=>{const parts=[['Education',18,'#2563eb'],['Health',12,'#0d9488'],['Infrastructure',30,'#6366f1'],['Defence',25,'#f59e0b'],['Other',15,'#64748b']];const cx=135,cy=120,r=95;let angle=-Math.PI/2;const pt=a=>[cx+r*Math.cos(a),cy+r*Math.sin(a)];let svg='<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Expenditure pie chart: Education 18%, Health 12%, Infrastructure 30%, Defence 25%, Other 15%"><rect width="500" height="250" rx="12" fill="#f8fafc"/>';
parts.forEach(([name,pct,color],i)=>{const end=angle+2*Math.PI*pct/100,[sx,sy]=pt(angle),[ex,ey]=pt(end);svg+='<path d="M '+cx+' '+cy+' L '+sx.toFixed(2)+' '+sy.toFixed(2)+' A '+r+' '+r+' 0 '+(pct>50?1:0)+' 1 '+ex.toFixed(2)+' '+ey.toFixed(2)+' Z" fill="'+color+'" stroke="#fff" stroke-width="2"/>';let y=38+i*39;svg+='<rect x="277" y="'+y+'" width="13" height="13" rx="2" fill="'+color+'"/><text x="299" y="'+(y+12)+'" font-size="15" fill="'+ink+'">'+name+' — '+pct+'%</text>';angle=end;});return svg+'</svg>';};
const figures={'balanced-di-hist':hist(),'balanced-di-pie':pie()};
window.CGL_VISUALS={render:id=>figures[id]||old?.render(id)||'',has:id=>!!figures[id]||!!old?.has(id),testId:old?.testId};
})();
