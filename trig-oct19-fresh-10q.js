/* Original SSC CGL-style trigonometry practice: 10 fresh questions, 10-minute limit.
   Not claimed to be an authenticated SSC CGL 2026 previous-year paper. */
(function () {
  'use strict';
  const D = window.CGL_DATA;
  if (!D) return;
  const id = 'trig-oct19-fresh-10q';
  if (D.catalog.some(t => t.id === id)) return;
  const subject = 'Quantitative Aptitude';
  const raw = [
    {
      topic: 'Compound angles',
      question: 'A and B are acute angles. If tan A = 1/2 and tan B = 2/3, find sin(A + B) / cos(A − B).',
      options: ['7/8', '7/4', '8/7', '5/6'],
      answer: 0,
      explanation: 'Divide numerator and denominator by cos A cos B: (tan A + tan B)/(1 + tan A tan B) = (1/2 + 2/3)/(1 + 1/3) = (7/6)/(4/3) = 7/8.'
    },
    {
      topic: 'Compound-angle product',
      question: 'If A and B are acute, sin A = 3/5 and sin B = 1/5, find cos(A + B) × cos(A − B).',
      options: ['16/25', '3/5', '4/5', '2/5'],
      answer: 1,
      explanation: 'Use cos(A + B)cos(A − B) = cos²A − sin²B = 1 − (3/5)² − (1/5)² = 1 − 9/25 − 1/25 = 15/25 = 3/5.'
    },
    {
      topic: 'Trigonometric simplification',
      question: 'For 0° < θ < 90°, simplify sin θ/(1 − cos θ) − sin θ/(1 + cos θ).',
      options: ['2 tan θ', 'cot θ', '2 cot θ', 'tan θ'],
      answer: 2,
      explanation: 'Take the LCM: [sin θ(1 + cos θ) − sin θ(1 − cos θ)]/(1 − cos²θ) = 2 sin θ cos θ/sin²θ = 2 cot θ.'
    },
    {
      topic: 'Double-angle product',
      question: 'Without decimal approximations, evaluate cos 20° × cos 40° × cos 80°.',
      options: ['1/4', '√3/8', '1/16', '1/8'],
      answer: 3,
      explanation: 'Repeatedly applying sin 2x = 2 sin x cos x gives 8 sin 20° cos 20° cos 40° cos 80° = sin 160° = sin 20°. Divide by 8 sin 20° to get 1/8.'
    },
    {
      topic: 'Squared trigonometric sums',
      question: 'Find the exact value of sin²10° + sin²50° + sin²70°.',
      options: ['1', '3/2', '√3/2', '5/4'],
      answer: 1,
      explanation: 'Use sin²x = (1 − cos 2x)/2. The expression becomes [3 − (cos 20° + cos 100° + cos 140°)]/2. Since cos 100° + cos 140° = −cos 20°, the result is 3/2.'
    },
    {
      topic: 'Complementary angles',
      question: 'The angle arguments are both acute. If sin(3θ + 5°) = cos(2θ − 10°), find θ.',
      options: ['17°', '20°', '19°', '15°'],
      answer: 2,
      explanation: 'For acute X and Y, sin X = cos Y means X + Y = 90°. Thus 3θ + 5° + 2θ − 10° = 90°, so 5θ = 95° and θ = 19°.'
    },
    {
      topic: 'Double-angle equation',
      question: 'If 0° < θ < 45° and tan 2θ = 3/4, find tan θ.',
      options: ['1/2', '1/3', '2/3', '3/4'],
      answer: 1,
      explanation: 'Set t = tan θ. Then 2t/(1 − t²) = 3/4, giving 3t² + 8t − 3 = 0 = (3t − 1)(t + 3). Since t > 0, t = 1/3.'
    },
    {
      topic: 'Sum-to-product',
      question: 'Evaluate (sin 75° − sin 15°)/(cos 75° + cos 15°).',
      options: ['√3', '2 − √3', '1/2', '1/√3'],
      answer: 3,
      explanation: 'Apply sum-to-product: numerator = 2 cos 45° sin 30° and denominator = 2 cos 45° cos 30°. Ratio = tan 30° = 1/√3.'
    },
    {
      topic: 'Heights and distances · moving observer',
      question: 'The angle of elevation of a tower is 45°. After an observer walks 20 m directly towards its foot on level ground, the angle becomes 60°. Find the height of the tower.',
      options: ['20√3 m', '30 + 10√3 m', '20 + 10√3 m', '30√3 m'],
      answer: 1,
      explanation: 'Let height be h metres. At 45°, the original horizontal distance is h. After moving 20 m it is h − 20. So √3 = h/(h − 20); solve h(√3 − 1) = 20√3, yielding h = 30 + 10√3 m.'
    },
    {
      topic: 'Heights and distances · flagstaff',
      question: 'A flagstaff stands vertically on a building of height 30√3 m. From a point on level ground, the angle of elevation to the roof is 30° and to the top of the flagstaff is 45°. Find the flagstaff height.',
      options: ['30√3 m', '60 − 30√3 m', '30(3 − √3) m', '90 + 30√3 m'],
      answer: 2,
      explanation: 'Horizontal distance d = 30√3/tan 30° = 90 m. At 45°, the total height is 90 m. Hence flagstaff height = 90 − 30√3 = 30(3 − √3) m.'
    }
  ];
  if (raw.length !== 10 || raw.some(q => q.options.length !== 4 || q.answer < 0 || q.answer > 3)) {
    console.error('Trigonometry challenge question validation failed');
    return;
  }
  const questions = raw.map((q, i) => ({
    id: id + '-q' + String(i + 1).padStart(2, '0'),
    subject,
    topic: q.topic,
    question: q.question,
    options: [...q.options],
    answer: q.answer,
    explanation: q.explanation
  }));
  const test = {
    id,
    name: 'Trigonometry · Fresh 10Q · 7/10',
    type: 'section',
    subject,
    subjectIndex: 2,
    level: 'Hard · 7/10 · original',
    minutes: 10,
    marks: 20,
    questionCount: 10,
    isFeaturedPrep: true,
    practiceSource: 'original-practice',
    topic: 'Compound angles, identities, simplification, heights and distances'
  };
  const priorGetQuestions = D.getQuestions;
  D.getQuestions = t => t && t.id === id ? questions.map(q => ({ ...q, options: [...q.options] })) : priorGetQuestions(t);
  D.catalog.unshift(test);
})();