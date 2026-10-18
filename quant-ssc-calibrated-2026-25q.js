/* SSC CGL 2026 Quant shift-inspired mock. 25 independently authored items. NOT SSC PYQs. */
(function(){
'use strict';
const data=window.CGL_DATA;
if(!data)return;
const questions=[
  {
    "id": "cgl-calibrated-oct26-q01",
    "subject": "Quantitative Aptitude",
    "topic": "Percentage & qualification",
    "practiceDifficulty": "moderate",
    "question": "In a recruitment test, 60% of the candidates were men and the remaining candidates were women. If 25% of the men and 40% of the women qualified, and a total of 310 candidates qualified, find the total number of candidates who appeared.",
    "options": [
      "800",
      "900",
      "1,000",
      "1,200"
    ],
    "answer": 2,
    "explanation": "Let the total be N. Qualified men = 0.60×0.25N = 0.15N; qualified women = 0.40×0.40N = 0.16N. Therefore 0.31N = 310, so N = 1,000."
  },
  {
    "id": "cgl-calibrated-oct26-q02",
    "subject": "Quantitative Aptitude",
    "topic": "Triangle incenter",
    "practiceDifficulty": "easy",
    "question": "In △ABC, the internal bisectors of ∠B and ∠C meet at I. If ∠BAC = 50°, find ∠BIC.",
    "options": [
      "105°",
      "110°",
      "115°",
      "125°"
    ],
    "answer": 2,
    "explanation": "The angle between the internal bisectors at the incenter is ∠BIC = 90° + ∠A/2 = 90° + 25° = 115°."
  },
  {
    "id": "cgl-calibrated-oct26-q03",
    "subject": "Quantitative Aptitude",
    "topic": "Partnership with withdrawal",
    "practiceDifficulty": "hard",
    "question": "A and B started a business together. A invested ₹20,000 throughout a year. B invested ₹30,000 for the first four months and then withdrew ₹10,000, keeping the remaining amount invested for eight months. C joined after four months with ₹25,000. If the annual profit was ₹54,000, find B's share.",
    "options": [
      "₹18,000",
      "₹20,000",
      "₹21,000",
      "₹24,000"
    ],
    "answer": 2,
    "explanation": "Capital-months: A = 20,000×12 = 240,000; B = 30,000×4 + 20,000×8 = 280,000; C = 25,000×8 = 200,000. Their profit ratio is 6:7:5. B gets (7/18)×54,000 = ₹21,000."
  },
  {
    "id": "cgl-calibrated-oct26-q04",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometric addition",
    "practiceDifficulty": "hard",
    "question": "A and B are acute angles such that tan A = 1/3 and tan(A + B) = 1. Find tan B.",
    "options": [
      "1/4",
      "1/2",
      "2/3",
      "3/4"
    ],
    "answer": 1,
    "explanation": "Using tan(A+B) = (tan A+tan B)/(1−tan A tan B), let tan B=t. (1/3+t)/(1−t/3)=1, giving t=1/2."
  },
  {
    "id": "cgl-calibrated-oct26-q05",
    "subject": "Quantitative Aptitude",
    "topic": "Train and platforms",
    "practiceDifficulty": "moderate",
    "question": "A train crosses a platform 180 m long in 18 seconds and another platform 300 m long in 24 seconds, moving at a uniform speed. Find the length of the train.",
    "options": [
      "160 m",
      "180 m",
      "200 m",
      "220 m"
    ],
    "answer": 1,
    "explanation": "The difference of 120 m in platform lengths takes an extra 6 s, so speed = 120/6 = 20 m/s. On the first platform, train length + 180 = 20×18 = 360, hence train length = 180 m."
  },
  {
    "id": "cgl-calibrated-oct26-q06",
    "subject": "Quantitative Aptitude",
    "topic": "Quadratic roots in ratio",
    "practiceDifficulty": "moderate",
    "question": "The roots of the quadratic equation 4x² − 20x + k = 0 are positive and in the ratio 1:4. Find k.",
    "options": [
      "12",
      "14",
      "16",
      "20"
    ],
    "answer": 2,
    "explanation": "Sum of roots = 20/4 = 5. With root ratio 1:4, the roots are 1 and 4. Their product = k/4 = 4, hence k=16."
  },
  {
    "id": "cgl-calibrated-oct26-q07",
    "subject": "Quantitative Aptitude",
    "topic": "Two circles and a square",
    "practiceDifficulty": "easy",
    "question": "A circle is inscribed in a square of side 14 cm, and another circle is circumscribed about the same square. Find the difference between the areas of the two circles.",
    "options": [
      "49π cm²",
      "98π cm²",
      "147π cm²",
      "14π cm²"
    ],
    "answer": 0,
    "explanation": "Inscribed radius = 7 cm. Circumscribed radius is half the diagonal = 7√2 cm. Difference = π[(7√2)² − 7²] = 49π cm²."
  },
  {
    "id": "cgl-calibrated-oct26-q08",
    "subject": "Quantitative Aptitude",
    "topic": "Hollow cylinder with diameters",
    "practiceDifficulty": "hard",
    "question": "A hollow cylindrical pipe is 14 cm long. Its external diameter is 18 cm and its internal diameter is 14 cm. Find the volume of metal in the pipe. Use π = 22/7.",
    "options": [
      "1,232 cm³",
      "1,408 cm³",
      "1,540 cm³",
      "1,760 cm³"
    ],
    "answer": 1,
    "explanation": "The outer and inner radii are 9 cm and 7 cm. Volume of metal = π(R²−r²)h = (22/7)(81−49)×14 = 1,408 cm³."
  },
  {
    "id": "cgl-calibrated-oct26-q09",
    "subject": "Quantitative Aptitude",
    "topic": "Alligation and concentration",
    "practiceDifficulty": "moderate",
    "question": "A container has 30 litres of a solution containing 20% acid. How many litres of another solution containing 60% acid must be added so that the resulting mixture contains 45% acid?",
    "options": [
      "30 L",
      "40 L",
      "50 L",
      "60 L"
    ],
    "answer": 2,
    "explanation": "Let x litres of 60% solution be added. Pure acid: 6 + 0.6x = 0.45(30+x). Thus 0.15x = 7.5, giving x=50 L."
  },
  {
    "id": "cgl-calibrated-oct26-q10",
    "subject": "Quantitative Aptitude",
    "topic": "Alternate-day work",
    "practiceDifficulty": "very hard",
    "question": "A can complete a work in 18 days and B can complete it in 24 days. They work on alternate days, with A starting on the first day. They work at their usual rates and the work is stopped immediately upon completion. In how many days will the work be finished?",
    "options": [
      "20 days",
      "20½ days",
      "21 days",
      "21½ days"
    ],
    "answer": 1,
    "explanation": "In two days they complete 1/18 + 1/24 = 7/72. After 20 days (10 cycles), 70/72 of the work is done. A completes the remaining 2/72 at rate 4/72 per day, requiring half a day. Total = 20½ days."
  },
  {
    "id": "cgl-calibrated-oct26-q11",
    "subject": "Quantitative Aptitude",
    "topic": "Compound interest from amounts",
    "practiceDifficulty": "moderate",
    "question": "Under annual compound interest at a fixed rate, an investment becomes ₹12,100 after two years and ₹14,641 after four years. What was the original investment?",
    "options": [
      "₹9,000",
      "₹10,000",
      "₹11,000",
      "₹12,000"
    ],
    "answer": 1,
    "explanation": "The amount grows by a factor 14,641/12,100 = 1.21 in two years. Hence (1+r)²=1.21, giving r=10%. Original principal = 12,100/(1.1)² = ₹10,000."
  },
  {
    "id": "cgl-calibrated-oct26-q12",
    "subject": "Quantitative Aptitude",
    "topic": "DI · Largest growth",
    "practiceDifficulty": "easy",
    "question": "Study the grouped bar chart showing the number of units produced (in thousands) by five plants in 2024 and 2025. Which plant recorded the greatest absolute increase in production from 2024 to 2025?",
    "options": [
      "North",
      "East",
      "West",
      "Central"
    ],
    "answer": 0,
    "explanation": "Increases (thousand units): North 156−120=36, South 184−160=24, East 175−140=35, West 198−180=18, Central 135−100=35. North had the largest absolute increase.",
    "figure": "quant-2026-ssc-di"
  },
  {
    "id": "cgl-calibrated-oct26-q13",
    "subject": "Quantitative Aptitude",
    "topic": "DI · Aggregate percentage",
    "practiceDifficulty": "moderate",
    "question": "For the five plants shown in the chart, total production in 2025 was approximately what percentage of total production in 2024? Round to one decimal place.",
    "options": [
      "118.9%",
      "121.1%",
      "122.3%",
      "124.0%"
    ],
    "answer": 1,
    "explanation": "Total in 2024 = 120+160+140+180+100 = 700 thousand. Total in 2025 = 156+184+175+198+135 = 848 thousand. Percentage = (848/700)×100 = 121.142...% ≈ 121.1%.",
    "figure": "quant-2026-ssc-di"
  },
  {
    "id": "cgl-calibrated-oct26-q14",
    "subject": "Quantitative Aptitude",
    "topic": "DI · Compare combined groups",
    "practiceDifficulty": "hard",
    "question": "Using the data in the chart, the combined production of North and East in 2025 was approximately what percentage of the combined production of South and West in 2024? Round to one decimal place.",
    "options": [
      "97.4%",
      "95.1%",
      "101.2%",
      "102.7%"
    ],
    "answer": 0,
    "explanation": "North+East in 2025 = 156+175 = 331. South+West in 2024 = 160+180 = 340. (331/340)×100 = 97.3529...% ≈ 97.4%.",
    "figure": "quant-2026-ssc-di"
  },
  {
    "id": "cgl-calibrated-oct26-q15",
    "subject": "Quantitative Aptitude",
    "topic": "DI · Revenue comparison",
    "practiceDifficulty": "hard",
    "question": "Assume that every unit shown in the chart was sold. If the selling price per unit was ₹20 in 2024 and ₹25 in 2025, by approximately what percentage did the combined revenue of all five plants increase? Round to one decimal place.",
    "options": [
      "51.4%",
      "41.4%",
      "48.6%",
      "55.0%"
    ],
    "answer": 0,
    "explanation": "Combined revenue in proportional units: 2024 = 700×20 = 14,000; 2025 = 848×25 = 21,200. Percentage increase = 7,200/14,000×100 = 51.4286...% ≈ 51.4%. The 'thousands' scale cancels.",
    "figure": "quant-2026-ssc-di"
  },
  {
    "id": "cgl-calibrated-oct26-q16",
    "subject": "Quantitative Aptitude",
    "topic": "Profit and false weight",
    "practiceDifficulty": "hard",
    "question": "A trader marks sugar at 40% above its actual cost per kilogram and offers a discount of 10% on this marked price. He delivers only 840 g when a buyer pays for 1 kg. Find his actual percentage gain.",
    "options": [
      "40%",
      "45%",
      "50%",
      "60%"
    ],
    "answer": 2,
    "explanation": "Let CP of a true 1 kg be ₹100. Customer pays ₹140×0.9=₹126, but sugar actually delivered costs ₹84. Profit = ₹42 on ₹84, so gain = 50%."
  },
  {
    "id": "cgl-calibrated-oct26-q17",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Square roots",
    "practiceDifficulty": "moderate",
    "question": "If √x + √y = 7 and x + y = 29, where x and y are positive, find √(xy).",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 2,
    "explanation": "Square √x+√y = 7: x+y+2√(xy)=49. Substitute x+y=29, so 2√(xy)=20 and √(xy)=10."
  },
  {
    "id": "cgl-calibrated-oct26-q18",
    "subject": "Quantitative Aptitude",
    "topic": "Internal angle bisector",
    "practiceDifficulty": "easy",
    "question": "In △PQR, PS bisects ∠P and meets QR at S. If PQ=12 cm, PR=18 cm and QR=25 cm, find QS.",
    "options": [
      "8 cm",
      "10 cm",
      "12 cm",
      "15 cm"
    ],
    "answer": 1,
    "explanation": "By the internal angle-bisector theorem, QS:SR = PQ:PR = 2:3. Since QR=25, QS=(2/5)×25=10 cm."
  },
  {
    "id": "cgl-calibrated-oct26-q19",
    "subject": "Quantitative Aptitude",
    "topic": "Prism with trapezium base",
    "practiceDifficulty": "very hard",
    "question": "A right prism has a cross-section in the form of an isosceles trapezium. The parallel sides of the trapezium are 12 cm and 20 cm and each of the other two sides is 5 cm long. If the prism is 15 cm long, find its volume.",
    "options": [
      "600 cm³",
      "680 cm³",
      "720 cm³",
      "840 cm³"
    ],
    "answer": 2,
    "explanation": "In the isosceles trapezium, half the base difference is (20−12)/2=4 cm. Perpendicular height=√(5²−4²)=3 cm. Cross-sectional area=(12+20)×3/2=48 cm². Prism volume=48×15=720 cm³."
  },
  {
    "id": "cgl-calibrated-oct26-q20",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Cubic identity",
    "practiceDifficulty": "moderate",
    "question": "Three non-zero real numbers a, b, c satisfy a+b+c=0 and abc=40. Find a³+b³+c³.",
    "options": [
      "80",
      "100",
      "120",
      "160"
    ],
    "answer": 2,
    "explanation": "Identity: a³+b³+c³−3abc=(a+b+c)(a²+b²+c²−ab−bc−ca). Since a+b+c=0, sum of cubes=3abc=120."
  },
  {
    "id": "cgl-calibrated-oct26-q21",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · Reciprocal sum",
    "practiceDifficulty": "hard",
    "question": "For an acute angle θ, sin θ + cos θ = 7/5. Find tan θ + cot θ.",
    "options": [
      "12/25",
      "25/12",
      "7/5",
      "49/25"
    ],
    "answer": 1,
    "explanation": "Square the given sum: 49/25=1+2sinθcosθ. Therefore sinθcosθ=12/25. tanθ+cotθ=(sin²θ+cos²θ)/(sinθcosθ)=1/(12/25)=25/12."
  },
  {
    "id": "cgl-calibrated-oct26-q22",
    "subject": "Quantitative Aptitude",
    "topic": "Speed difference and time saved",
    "practiceDifficulty": "hard",
    "question": "A motorist has to travel 200 km at a uniform speed. If the speed is increased by 10 km/h, the journey takes exactly one hour less. What was the original speed?",
    "options": [
      "35 km/h",
      "40 km/h",
      "45 km/h",
      "50 km/h"
    ],
    "answer": 1,
    "explanation": "Let the original speed be v. 200/v − 200/(v+10) = 1. Hence v(v+10)=2,000. Solving v²+10v−2,000=0 gives v=40 km/h."
  },
  {
    "id": "cgl-calibrated-oct26-q23",
    "subject": "Quantitative Aptitude",
    "topic": "Tangent and secant",
    "practiceDifficulty": "moderate",
    "question": "From an external point P, PT is a tangent to a circle and PAB is a secant, meeting the circle first at A and then at B. If PA=9 cm and PB=25 cm, find PT.",
    "options": [
      "12 cm",
      "15 cm",
      "18 cm",
      "21 cm"
    ],
    "answer": 1,
    "explanation": "Tangent-secant theorem: PT²=PA×PB=9×25=225. Therefore PT=15 cm."
  },
  {
    "id": "cgl-calibrated-oct26-q24",
    "subject": "Quantitative Aptitude",
    "topic": "Square pyramid · Total surface area",
    "practiceDifficulty": "hard",
    "question": "A right square pyramid has a base side of 16 cm and a perpendicular height of 6 cm. Find its total surface area, including the base.",
    "options": [
      "480 cm²",
      "512 cm²",
      "576 cm²",
      "640 cm²"
    ],
    "answer": 2,
    "explanation": "Slant height of one triangular face = √(6²+8²)=10 cm. Lateral surface area=(1/2)×(4×16)×10=320 cm². Base area=16²=256 cm². TSA=576 cm²."
  },
  {
    "id": "cgl-calibrated-oct26-q25",
    "subject": "Quantitative Aptitude",
    "topic": "Two heights · Elevation and depression",
    "practiceDifficulty": "very hard",
    "question": "From the top of a 40 m high building, the angle of depression of the foot of a tower is 45° and the angle of elevation of the top of the tower is 30°. The two structures stand on the same horizontal ground. Find the height of the tower.",
    "options": [
      "40(1+1/√3) m",
      "40√3 m",
      "40/√3 m",
      "40(1+√3) m"
    ],
    "answer": 0,
    "explanation": "The horizontal distance from building to tower is 40/tan45°=40 m. Tower rises 40tan30°=40/√3 m above the building roof. Total tower height=40+40/√3 = 40(1+1/√3) m."
  }
];
const test={
  "id": "quant-ssc-shift-calibrated-2026-25q",
  "name": "SSC CGL Quant · Calibrated Shift Challenge 25Q",
  "type": "section",
  "subject": "Quantitative Aptitude",
  "subjectIndex": 2,
  "level": "Hard · target 7.5/10 · shift-style",
  "minutes": 15,
  "marks": 50,
  "questionCount": 25,
  "isFeaturedPrep": true,
  "topic": "8 Arithmetic · 3 Algebra · 4 Geometry · 3 Mensuration · 2 Trig · 1 H&D · 4 DI",
  "method": "25 new original SSC CGL-style practice questions; not verified SSC PYQs. Difficulty mix: 4 easy, 9 moderate, 9 hard and 3 challenge questions."
};
if(data.catalog.some(x=>x.id===test.id))return;
function makeChart(){
 const data=[{"n":"North","a":120,"b":156},{"n":"South","a":160,"b":184},{"n":"East","a":140,"b":175},{"n":"West","a":180,"b":198},{"n":"Central","a":100,"b":135}];
 const base=258,scale=0.84;
 const bars=data.map((d,i)=>{const x=49+i*101;const ya=base-d.a*scale,yb=base-d.b*scale;
 return '<rect x="'+x+'" y="'+ya+'" width="26" height="'+(d.a*scale)+'" rx="2" fill="#4f6fde"/>'+
 '<rect x="'+(x+29)+'" y="'+yb+'" width="26" height="'+(d.b*scale)+'" rx="2" fill="#10a68c"/>'+
 '<text x="'+(x+13)+'" y="'+(ya-5)+'" text-anchor="middle" fill="#253551" font-size="13" font-weight="700">'+d.a+'</text>'+
 '<text x="'+(x+42)+'" y="'+(yb-5)+'" text-anchor="middle" fill="#253551" font-size="13" font-weight="700">'+d.b+'</text>'+
 '<text x="'+(x+27)+'" y="280" text-anchor="middle" fill="#253551" font-size="14" font-weight="700">'+d.n+'</text>';}).join('');
 const grid=[0,50,100,150,200].map(v=>{const y=base-v*scale;return '<line x1="38" y1="'+y+'" x2="545" y2="'+y+'" stroke="#dfe6f1" stroke-width="1"/><text x="32" y="'+(y+4)+'" text-anchor="end" font-size="11" fill="#60728c">'+v+'</text>';}).join('');
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 310" role="img" aria-label="Grouped bar chart. Thousands of units. 2024 and 2025: North 120 and 156; South 160 and 184; East 140 and 175; West 180 and 198; Central 100 and 135." style="width:100%;max-width:850px;height:auto;display:block;margin:auto;background:white;border-radius:12px">'+
 '<rect width="560" height="310" fill="#ffffff"/><text x="280" y="24" fill="#14243d" font-size="16" text-anchor="middle" font-weight="700">Production by plant (thousand units)</text>'+
 '<rect x="172" y="34" width="12" height="12" fill="#4f6fde"/><text x="190" y="45" fill="#31415b" font-size="12">2024</text>'+
 '<rect x="276" y="34" width="12" height="12" fill="#10a68c"/><text x="294" y="45" fill="#31415b" font-size="12">2025</text>'+
 grid+bars+'</svg>';
}
const previousVisuals=window.CGL_VISUALS;
if(previousVisuals&&typeof previousVisuals.render==='function'){
 const originalRender=previousVisuals.render.bind(previousVisuals);
 const originalHas=typeof previousVisuals.has==='function'?previousVisuals.has.bind(previousVisuals):()=>false;
 window.CGL_VISUALS={...previousVisuals,render:id=>id==='quant-2026-ssc-di'?makeChart():originalRender(id),has:id=>id==='quant-2026-ssc-di'||originalHas(id)};
}else{
 window.CGL_VISUALS={render:id=>id==='quant-2026-ssc-di'?makeChart():'',has:id=>id==='quant-2026-ssc-di'};
}
const original=data.getQuestions;
data.getQuestions=t=>t?.id===test.id?questions.map(q=>({...q,options:q.options.slice()})):original(t);
data.catalog.unshift(test);
})();