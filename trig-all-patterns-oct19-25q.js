/* 25 original SSC CGL-style trigonometry practice questions. NOT actual shift PYQs. */
(function(){'use strict';
const D=window.CGL_DATA;if(!D)return;
const id='trig-all-patterns-oct19-25q';if(D.catalog.some(t=>t.id===id))return;
const bank=[
  {
    "id": "trig-all-patterns-oct19-25q-01",
    "subject": "Quantitative Aptitude",
    "topic": "Standard values · mixed operations",
    "question": "Find the value of (sec 60° + tan 45°)/(cosec 30° − cot 45°).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "sec60°=2, tan45°=1, cosec30°=2, cot45°=1. Thus (2+1)/(2−1)=3."
  },
  {
    "id": "trig-all-patterns-oct19-25q-02",
    "subject": "Quantitative Aptitude",
    "topic": "Signs in quadrants",
    "question": "θ lies in the second quadrant and cos θ = −12/13. Find sin θ − cos θ.",
    "options": [
      "7/13",
      "17/13",
      "−7/13",
      "−17/13"
    ],
    "answer": 1,
    "explanation": "Sine is positive in quadrant II: sinθ=√(1−144/169)=5/13. Thus sinθ−cosθ=5/13+12/13=17/13."
  },
  {
    "id": "trig-all-patterns-oct19-25q-03",
    "subject": "Quantitative Aptitude",
    "topic": "Finding ratios · right triangle",
    "question": "For an acute angle θ, cot θ = 12/5. Find sin θ cos θ.",
    "options": [
      "60/169",
      "5/13",
      "12/13",
      "25/169"
    ],
    "answer": 0,
    "explanation": "The right triangle has adjacent=12, opposite=5, hypotenuse=13; sinθ=5/13 and cosθ=12/13, product=60/169."
  },
  {
    "id": "trig-all-patterns-oct19-25q-04",
    "subject": "Quantitative Aptitude",
    "topic": "Identity · mixed rational simplification",
    "question": "For acute θ, simplify (sec θ − cos θ)/(tan θ × sin θ).",
    "options": [
      "tan θ",
      "sin θ",
      "sec θ",
      "1"
    ],
    "answer": 3,
    "explanation": "secθ−cosθ=(1−cos²θ)/cosθ=sin²θ/cosθ, and tanθ·sinθ=sin²θ/cosθ. Their ratio is 1."
  },
  {
    "id": "trig-all-patterns-oct19-25q-05",
    "subject": "Quantitative Aptitude",
    "topic": "Sum of squares · reciprocal ratios",
    "question": "If tan θ + cot θ = 5, find tan²θ + cot²θ.",
    "options": [
      "21",
      "25",
      "23",
      "27"
    ],
    "answer": 2,
    "explanation": "Square tanθ+cotθ=5. Since tanθcotθ=1, tan²θ+cot²θ=25−2=23."
  },
  {
    "id": "trig-all-patterns-oct19-25q-06",
    "subject": "Quantitative Aptitude",
    "topic": "Fourth powers · difference of squares",
    "question": "If θ is acute and cos θ = 12/13, evaluate cos⁴θ − sin⁴θ.",
    "options": [
      "119/169",
      "25/169",
      "144/169",
      "1"
    ],
    "answer": 0,
    "explanation": "cos⁴θ−sin⁴θ=(cos²θ−sin²θ)(cos²θ+sin²θ)=cos2θ. With sinθ=5/13, cos2θ=(144−25)/169=119/169."
  },
  {
    "id": "trig-all-patterns-oct19-25q-07",
    "subject": "Quantitative Aptitude",
    "topic": "Sixth powers · compact identity",
    "question": "If sin θ cos θ = 1/5, find sin⁶θ + cos⁶θ.",
    "options": [
      "19/25",
      "24/25",
      "16/25",
      "22/25"
    ],
    "answer": 3,
    "explanation": "sin⁶θ+cos⁶θ=(sin²θ+cos²θ)³−3sin²θcos²θ(sin²θ+cos²θ)=1−3/25=22/25."
  },
  {
    "id": "trig-all-patterns-oct19-25q-08",
    "subject": "Quantitative Aptitude",
    "topic": "Triple-angle formula",
    "question": "For an acute θ, sin θ = 3/5. Find sin 3θ.",
    "options": [
      "99/125",
      "117/125",
      "108/125",
      "3/5"
    ],
    "answer": 1,
    "explanation": "sin3θ=3sinθ−4sin³θ=9/5−4(27/125)=225/125−108/125=117/125."
  },
  {
    "id": "trig-all-patterns-oct19-25q-09",
    "subject": "Quantitative Aptitude",
    "topic": "Cotangent double angle",
    "question": "If θ is acute and cot θ = 2, find cot 2θ.",
    "options": [
      "4/3",
      "1/2",
      "3/4",
      "2/3"
    ],
    "answer": 2,
    "explanation": "cot2θ=(cot²θ−1)/(2cotθ)=(4−1)/4=3/4."
  },
  {
    "id": "trig-all-patterns-oct19-25q-10",
    "subject": "Quantitative Aptitude",
    "topic": "Compound angles · sine sum",
    "question": "If A and B are acute, sin A = 5/13 and sin B = 3/5, find sin(A+B).",
    "options": [
      "56/65",
      "16/65",
      "36/65",
      "63/65"
    ],
    "answer": 0,
    "explanation": "cosA=12/13 and cosB=4/5. sin(A+B)=sinAcosB+cosAsinB=(5×4+12×3)/65=56/65."
  },
  {
    "id": "trig-all-patterns-oct19-25q-11",
    "subject": "Quantitative Aptitude",
    "topic": "Compound angles · tangent difference",
    "question": "If A and B are acute with tan A = 3/4 and tan B = 1/2, find tan(A−B).",
    "options": [
      "1/11",
      "5/11",
      "11/2",
      "2/11"
    ],
    "answer": 3,
    "explanation": "tan(A−B)=(tanA−tanB)/(1+tanAtanB)=(3/4−1/2)/(1+3/8)=(1/4)/(11/8)=2/11."
  },
  {
    "id": "trig-all-patterns-oct19-25q-12",
    "subject": "Quantitative Aptitude",
    "topic": "Recover angle ratio · cos2θ",
    "question": "If θ is acute and cos 2θ = −7/25, find tan θ.",
    "options": [
      "3/4",
      "4/3",
      "7/25",
      "5/12"
    ],
    "answer": 1,
    "explanation": "tan²θ=(1−cos2θ)/(1+cos2θ)=(1+7/25)/(1−7/25)=32/18=16/9. As θ is acute, tanθ=4/3."
  },
  {
    "id": "trig-all-patterns-oct19-25q-13",
    "subject": "Quantitative Aptitude",
    "topic": "Complementary angles · tangent/cotangent",
    "question": "Given that 2θ+10° and θ+20° are acute, if tan(2θ+10°) = cot(θ+20°), find θ.",
    "options": [
      "15°",
      "25°",
      "20°",
      "30°"
    ],
    "answer": 2,
    "explanation": "For acute arguments, tanX=cotY implies X+Y=90°. Thus (2θ+10)+(θ+20)=90, giving θ=20°."
  },
  {
    "id": "trig-all-patterns-oct19-25q-14",
    "subject": "Quantitative Aptitude",
    "topic": "Special-angle product",
    "question": "Find the exact value of tan 20° × tan 40° × tan 80°.",
    "options": [
      "√3",
      "1",
      "1/√3",
      "3"
    ],
    "answer": 0,
    "explanation": "The known triple-tangent product tan20°tan40°tan80°=√3. One derivation uses tan3x=(3t−t³)/(1−3t²), or tan20°tan40°=tan60°/tan80°."
  },
  {
    "id": "trig-all-patterns-oct19-25q-15",
    "subject": "Quantitative Aptitude",
    "topic": "Special angles · product",
    "question": "Evaluate sin 15° × cos 15°.",
    "options": [
      "1/2",
      "√3/4",
      "1/8",
      "1/4"
    ],
    "answer": 3,
    "explanation": "2sin15°cos15°=sin30°=1/2. Divide by 2 to obtain 1/4."
  },
  {
    "id": "trig-all-patterns-oct19-25q-16",
    "subject": "Quantitative Aptitude",
    "topic": "Allied angles · signs",
    "question": "For any θ, simplify sin(90°+θ)+cos(180°−θ).",
    "options": [
      "2 cos θ",
      "0",
      "2 sin θ",
      "−2 cos θ"
    ],
    "answer": 1,
    "explanation": "sin(90°+θ)=cosθ while cos(180°−θ)=−cosθ. Their sum is zero."
  },
  {
    "id": "trig-all-patterns-oct19-25q-17",
    "subject": "Quantitative Aptitude",
    "topic": "Shifted-angle squared identity",
    "question": "Find the value of sin²θ + sin²(60°+θ) + sin²(60°−θ).",
    "options": [
      "1",
      "√3/2",
      "3/2",
      "2"
    ],
    "answer": 2,
    "explanation": "Use sin²x=(1−cos2x)/2. The cosine terms cos2θ+cos(120°+2θ)+cos(120°−2θ)=cos2θ+2cos120°cos2θ=0; sum=3/2."
  },
  {
    "id": "trig-all-patterns-oct19-25q-18",
    "subject": "Quantitative Aptitude",
    "topic": "Maximum value of a trig expression",
    "question": "Find the maximum value of 8 sin θ + 15 cos θ for real θ.",
    "options": [
      "17",
      "23",
      "7",
      "120"
    ],
    "answer": 0,
    "explanation": "a sinθ+b cosθ has maximum √(a²+b²). Here √(64+225)=17, attained for a suitable θ."
  },
  {
    "id": "trig-all-patterns-oct19-25q-19",
    "subject": "Quantitative Aptitude",
    "topic": "Conversion from linear sine/cosine relation",
    "question": "For an acute angle θ, 5 sin θ = 12 cos θ. Find 3 sin θ + 4 cos θ.",
    "options": [
      "52/13",
      "7",
      "4",
      "56/13"
    ],
    "answer": 3,
    "explanation": "5sinθ=12cosθ means tanθ=12/5. Use a 5–12–13 triangle: sinθ=12/13, cosθ=5/13. Hence 3sinθ+4cosθ=(36+20)/13=56/13."
  },
  {
    "id": "trig-all-patterns-oct19-25q-20",
    "subject": "Quantitative Aptitude",
    "topic": "Heights · shadow length change",
    "question": "A vertical pole casts a shadow when the Sun's elevation is 30°. Later, at 60°, its shadow is 24 m shorter. Find the height of the pole.",
    "options": [
      "24√3 m",
      "12√3 m",
      "18 m",
      "36 m"
    ],
    "answer": 1,
    "explanation": "Let height=h. Shadow lengths are h cot30°=h√3 and h cot60°=h/√3. Their difference is 2h/√3=24, hence h=12√3 m."
  },
  {
    "id": "trig-all-patterns-oct19-25q-21",
    "subject": "Quantitative Aptitude",
    "topic": "Heights · broken tree",
    "question": "A tree breaks at a point and its top touches the level ground 12√3 m from its foot. The broken part makes an angle of 30° with the ground. Find the original height.",
    "options": [
      "24 m",
      "30 m",
      "36 m",
      "48 m"
    ],
    "answer": 2,
    "explanation": "Standing portion h=12√3 tan30°=12 m. Fallen section length=12√3/cos30°=24 m. Original height=12+24=36 m."
  },
  {
    "id": "trig-all-patterns-oct19-25q-22",
    "subject": "Quantitative Aptitude",
    "topic": "Heights · observer between two towers",
    "question": "Two vertical towers of equal height stand 80 m apart on level ground. From a point between them, their angles of elevation are 60° and 30°. Find the height of each tower.",
    "options": [
      "20√3 m",
      "40 m",
      "40√3 m",
      "60 m"
    ],
    "answer": 0,
    "explanation": "Let the distance to the 60° tower be x. h=x√3=(80−x)/√3, so 3x=80−x, x=20 and h=20√3 m."
  },
  {
    "id": "trig-all-patterns-oct19-25q-23",
    "subject": "Quantitative Aptitude",
    "topic": "Angles of depression · opposite sides",
    "question": "Two boats are on opposite sides of the foot of a vertical lighthouse. From its top, the angles of depression are 30° and 45°. If the boats are 50(√3+1) m apart, find the lighthouse height.",
    "options": [
      "25 m",
      "50√3 m",
      "100 m",
      "50 m"
    ],
    "answer": 3,
    "explanation": "For lighthouse height h, horizontal distances are h cot30°=h√3 and h cot45°=h. Boats lie on opposite sides, so their separation is h(√3+1)=50(√3+1). Hence h=50 m."
  },
  {
    "id": "trig-all-patterns-oct19-25q-24",
    "subject": "Quantitative Aptitude",
    "topic": "Ladder · change in inclination",
    "question": "A 12 m ladder leans against a vertical wall at 60° to the horizontal. Its foot is then moved so that it makes 30° with the ground. By how much does its top descend?",
    "options": [
      "6(√3+1) m",
      "6(√3−1) m",
      "6 m",
      "12(√3−1) m"
    ],
    "answer": 1,
    "explanation": "Original height=12sin60°=6√3 m. New height=12sin30°=6 m. Descent=6(√3−1) m."
  },
  {
    "id": "trig-all-patterns-oct19-25q-25",
    "subject": "Quantitative Aptitude",
    "topic": "Kite · angle and observer height",
    "question": "A taut 50 m kite-string makes 60° with the horizontal. The person holds its end 1.5 m above level ground. Assuming the string is straight, find the height of the kite above ground.",
    "options": [
      "25√3 m",
      "50√3+1.5 m",
      "25√3+1.5 m",
      "25+1.5√3 m"
    ],
    "answer": 2,
    "explanation": "Vertical rise from the hand = 50sin60° = 25√3 m. Add the height of the hand above ground: 25√3 + 1.5 m."
  }
];
if(bank.length!==25||bank.some(q=>q.options.length!==4||q.answer<0||q.answer>3))return;
const test={id,name:'Trigonometry · All Important Patterns · Fresh 25Q',type:'section',subject:'Quantitative Aptitude',subjectIndex:2,level:'Hard · 7/10 · original practice',minutes:20,marks:50,questionCount:25,isFeaturedPrep:true,practiceSource:'original-practice',topic:'Standard angles, identities, powers, compound & multiple angles, simplification, heights and distances'};
const previous=D.getQuestions;D.getQuestions=t=>t?.id===id?bank.map(q=>({...q,options:q.options.slice()})):previous(t);
D.catalog.unshift(test);
})();
