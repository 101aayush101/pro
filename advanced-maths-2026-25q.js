/* 25 original SSC CGL 2026 shift-inspired advanced-maths questions. Not SSC PYQs. */
(function(){
'use strict';
const data=window.CGL_DATA;
if(!data)return;
const questions=[
  {
    "id": "advance-2026-q01",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Surds",
    "question": "Evaluate √(11 + 6√2) + √(11 − 6√2).",
    "options": [
      "6",
      "2√11",
      "3√2",
      "√22"
    ],
    "answer": 0,
    "explanation": "11 ± 6√2 = (3 ± √2)². Both 3 ± √2 are positive, so their sum is 6."
  },
  {
    "id": "advance-2026-q02",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Identities",
    "question": "If x + 1/x = 5 (x ≠ 0), what is x² + 1/x²?",
    "options": [
      "25",
      "21",
      "23",
      "27"
    ],
    "answer": 2,
    "explanation": "Square both sides: x² + 2 + 1/x² = 25. Therefore x² + 1/x² = 23."
  },
  {
    "id": "advance-2026-q03",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Factorisation",
    "question": "If x = 2, find (x³ − 27)/(x − 3).",
    "options": [
      "25",
      "13",
      "19",
      "21"
    ],
    "answer": 2,
    "explanation": "Use difference of cubes: (x³ − 27)/(x − 3) = x² + 3x + 9. At x = 2, it equals 4 + 6 + 9 = 19."
  },
  {
    "id": "advance-2026-q04",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Quadratic roots",
    "question": "If α and β are the roots of x² − 7x + 10 = 0, find α² + β².",
    "options": [
      "39",
      "29",
      "49",
      "27"
    ],
    "answer": 1,
    "explanation": "α + β = 7 and αβ = 10. Thus α² + β² = (α + β)² − 2αβ = 49 − 20 = 29."
  },
  {
    "id": "advance-2026-q05",
    "subject": "Quantitative Aptitude",
    "topic": "Coordinate geometry",
    "question": "What is the distance between the points (2, −1) and (8, 7)?",
    "options": [
      "8 units",
      "12 units",
      "√74 units",
      "10 units"
    ],
    "answer": 3,
    "explanation": "Distance = √[(8−2)² + (7+1)²] = √(36 + 64) = 10."
  },
  {
    "id": "advance-2026-q06",
    "subject": "Quantitative Aptitude",
    "topic": "Algebra · Rationalisation",
    "question": "Simplify 1/(√7 − √5) − 1/(√7 + √5).",
    "options": [
      "2√5",
      "√7",
      "√5",
      "1/√5"
    ],
    "answer": 2,
    "explanation": "Take a common denominator: [(√7 + √5) − (√7 − √5)]/(7 − 5) = 2√5/2 = √5."
  },
  {
    "id": "advance-2026-q07",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Chord",
    "question": "A chord of a circle is 16 cm long and its perpendicular distance from the centre is 6 cm. Find the radius.",
    "options": [
      "10 cm",
      "8 cm",
      "12 cm",
      "14 cm"
    ],
    "answer": 0,
    "explanation": "Half-chord = 8 cm. Radius² = 8² + 6² = 100, so radius = 10 cm."
  },
  {
    "id": "advance-2026-q08",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Circle angles",
    "question": "A minor arc AB subtends an angle of 100° at the centre O. What angle does the same arc subtend at a point on the major arc AB?",
    "options": [
      "40°",
      "100°",
      "50°",
      "80°"
    ],
    "answer": 2,
    "explanation": "The angle at the circumference subtended by an arc is half its central angle: 100°/2 = 50°."
  },
  {
    "id": "advance-2026-q09",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Tangents",
    "question": "Two tangents PA and PB touch a circle at A and B. If ∠APB = 70°, find ∠AOB, where O is the centre.",
    "options": [
      "70°",
      "140°",
      "110°",
      "90°"
    ],
    "answer": 2,
    "explanation": "OA and OB are perpendicular to the tangents. In quadrilateral AOBP: ∠AOB + ∠APB = 180°. Hence 110°."
  },
  {
    "id": "advance-2026-q10",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Centroid",
    "question": "In △ABC, AD is a median and G is the centroid. If AD = 21 cm, find AG.",
    "options": [
      "7 cm",
      "14 cm",
      "10.5 cm",
      "16 cm"
    ],
    "answer": 1,
    "explanation": "The centroid divides a median 2:1 from the vertex. AG = (2/3) × 21 = 14 cm."
  },
  {
    "id": "advance-2026-q11",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Similar triangles",
    "question": "The corresponding sides of two similar triangles are in the ratio 3:5. Find the ratio of their areas.",
    "options": [
      "3:5",
      "6:10",
      "25:9",
      "9:25"
    ],
    "answer": 3,
    "explanation": "The ratio of areas of similar triangles equals the square of the side ratio: 3²:5² = 9:25."
  },
  {
    "id": "advance-2026-q12",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Parallel lines",
    "question": "In △ABC, D lies on AB and E lies on AC, with DE ∥ BC. If AD:DB = 2:3, find area(△ADE):area(△ABC).",
    "options": [
      "2:5",
      "4:9",
      "4:25",
      "9:25"
    ],
    "answer": 2,
    "explanation": "AB consists of 2 + 3 = 5 parts, so AD/AB = 2/5. Areas are in the square ratio: 4:25."
  },
  {
    "id": "advance-2026-q13",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Inradius",
    "question": "A right-angled triangle has perpendicular sides 9 cm and 12 cm. Find the radius of its incircle.",
    "options": [
      "4 cm",
      "5 cm",
      "3 cm",
      "6 cm"
    ],
    "answer": 2,
    "explanation": "Hypotenuse = 15 cm. Inradius for a right triangle = (a + b − c)/2 = (9 + 12 − 15)/2 = 3 cm."
  },
  {
    "id": "advance-2026-q14",
    "subject": "Quantitative Aptitude",
    "topic": "Geometry · Cyclic quadrilateral",
    "question": "In a cyclic quadrilateral ABCD, ∠A = 108°. Find ∠C.",
    "options": [
      "82°",
      "72°",
      "108°",
      "62°"
    ],
    "answer": 1,
    "explanation": "Opposite angles of a cyclic quadrilateral add to 180°. Hence ∠C = 180° − 108° = 72°."
  },
  {
    "id": "advance-2026-q15",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Triangular prism",
    "question": "A right prism has a right-triangular base with perpendicular sides 6 cm and 8 cm. Its height is 12 cm. Find its volume.",
    "options": [
      "192 cm³",
      "288 cm³",
      "240 cm³",
      "336 cm³"
    ],
    "answer": 1,
    "explanation": "Base area = (1/2) × 6 × 8 = 24 cm². Volume = base area × height = 24 × 12 = 288 cm³."
  },
  {
    "id": "advance-2026-q16",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Square pyramid",
    "question": "A right square pyramid has base side 10 cm and perpendicular height 12 cm. Find its volume.",
    "options": [
      "300 cm³",
      "1200 cm³",
      "400 cm³",
      "480 cm³"
    ],
    "answer": 2,
    "explanation": "Volume of pyramid = (1/3) × base area × height = (1/3) × 100 × 12 = 400 cm³."
  },
  {
    "id": "advance-2026-q17",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Pyramid surface",
    "question": "A regular square pyramid has base side 12 cm and slant height 10 cm. Find its lateral surface area.",
    "options": [
      "240 cm²",
      "120 cm²",
      "288 cm²",
      "480 cm²"
    ],
    "answer": 0,
    "explanation": "Lateral surface area = (1/2) × perimeter of base × slant height = (1/2) × 48 × 10 = 240 cm²."
  },
  {
    "id": "advance-2026-q18",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Cylinder",
    "question": "A cylinder has radius 7 cm and height 10 cm. Find its volume. Use π = 22/7.",
    "options": [
      "1540 cm³",
      "770 cm³",
      "3080 cm³",
      "1078 cm³"
    ],
    "answer": 0,
    "explanation": "Volume = πr²h = (22/7) × 49 × 10 = 1540 cm³."
  },
  {
    "id": "advance-2026-q19",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Cone",
    "question": "The radius of a cone is 7 cm and its slant height is 25 cm. Find its curved surface area. Use π = 22/7.",
    "options": [
      "770 cm²",
      "550 cm²",
      "704 cm²",
      "1100 cm²"
    ],
    "answer": 1,
    "explanation": "Curved surface area = πrl = (22/7) × 7 × 25 = 550 cm²."
  },
  {
    "id": "advance-2026-q20",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Hemisphere",
    "question": "Find the total surface area of a solid hemisphere of radius 7 cm. Use π = 22/7.",
    "options": [
      "308 cm²",
      "616 cm²",
      "462 cm²",
      "154 cm²"
    ],
    "answer": 2,
    "explanation": "Total surface area includes curved surface plus circular base: 3πr² = 3 × 22/7 × 49 = 462 cm²."
  },
  {
    "id": "advance-2026-q21",
    "subject": "Quantitative Aptitude",
    "topic": "Mensuration · Frustum",
    "question": "A conical frustum has radii 6 cm and 3 cm and vertical height 7 cm. Find its volume. Use π = 22/7.",
    "options": [
      "308 cm³",
      "462 cm³",
      "616 cm³",
      "693 cm³"
    ],
    "answer": 1,
    "explanation": "Volume = (πh/3)(R² + Rr + r²) = (22/7)(7/3)(36 + 18 + 9) = 462 cm³."
  },
  {
    "id": "advance-2026-q22",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · Identities",
    "question": "If cos θ = 4/5 and θ is acute, find (1 + cos θ)/(1 − cos θ).",
    "options": [
      "5",
      "16",
      "9",
      "4"
    ],
    "answer": 2,
    "explanation": "Substitute cos θ = 4/5: (9/5)/(1/5) = 9."
  },
  {
    "id": "advance-2026-q23",
    "subject": "Quantitative Aptitude",
    "topic": "Trigonometry · Double angle",
    "question": "For an acute angle θ, tan θ = 3/4. Find sin 2θ.",
    "options": [
      "7/25",
      "12/25",
      "24/25",
      "3/5"
    ],
    "answer": 2,
    "explanation": "From the 3–4–5 triangle, sin θ = 3/5 and cos θ = 4/5. Thus sin 2θ = 2sinθcosθ = 24/25."
  },
  {
    "id": "advance-2026-q24",
    "subject": "Quantitative Aptitude",
    "topic": "Height and distance",
    "question": "The angle of elevation of the top of a tower from a point 20 m away from its foot is 60°. Find the tower's height.",
    "options": [
      "20√3 m",
      "20 m",
      "40 m",
      "40√3 m"
    ],
    "answer": 0,
    "explanation": "tan 60° = height/20 = √3, so height = 20√3 m."
  },
  {
    "id": "advance-2026-q25",
    "subject": "Quantitative Aptitude",
    "topic": "Height and distance · Mixed heights",
    "question": "From the top of a 45 m tower, the angle of depression to the top of a 15 m building is 30°. If their feet are on the same horizontal level, find the horizontal distance between them.",
    "options": [
      "15√3 m",
      "60 m",
      "30√3 m",
      "30 m"
    ],
    "answer": 2,
    "explanation": "Vertical difference = 45 − 15 = 30 m. tan 30° = 30/d = 1/√3, hence d = 30√3 m."
  }
];
const test={
  "id": "advanced-maths-2026-25q-01",
  "name": "Advanced Maths · 2026 Shift-Style 25Q",
  "type": "section",
  "subject": "Quantitative Aptitude",
  "subjectIndex": 2,
  "level": "Moderate · 6/10 · shift-inspired",
  "minutes": 15,
  "marks": 50,
  "questionCount": 25,
  "isFeaturedPrep": true,
  "topic": "Algebra, coordinate geometry, geometry, mensuration, trigonometry and height-distance",
  "method": "25 independently written practice questions based on public 2026 candidate reports; not verified SSC PYQs"
};
if(data.catalog.some(x=>x.id===test.id))return;
const prior=data.getQuestions;
data.getQuestions=t=>t?.id===test.id?questions.map(q=>({...q,options:q.options.slice()})):prior(t);
data.catalog.unshift(test);
})();
