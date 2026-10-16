/* SSC CGL 2026-style Ancient India practice questions. Original exercises; not authenticated 2026 PYQs. */
(function () {
  'use strict';
  const data = window.CGL_DATA;
  if (!data) return;
  const questions = [
  {
    "id": "ancient-2026-01",
    "subject": "General Awareness",
    "question": "Which ancient scholar is credited with composing the Ashtadhyayi?",
    "options": [
      "Patanjali",
      "Panini",
      "Kalidasa",
      "Bharata Muni"
    ],
    "answer": 1,
    "explanation": "Panini composed the Ashtadhyayi, a foundational Sanskrit grammar. Patanjali wrote the Mahabhashya."
  },
  {
    "id": "ancient-2026-02",
    "subject": "General Awareness",
    "question": "The Milinda Panha records a dialogue between which of the following?",
    "options": [
      "Kanishka and Ashvaghosha",
      "Ashoka and Upagupta",
      "Menander (Milinda) and Nagasena",
      "Chandragupta and Chanakya"
    ],
    "answer": 2,
    "explanation": "The Milinda Panha presents questions of the Indo-Greek king Menander (Milinda) answered by the Buddhist monk Nagasena."
  },
  {
    "id": "ancient-2026-03",
    "subject": "General Awareness",
    "question": "Kanchipuram was an important capital of which ancient South Indian dynasty?",
    "options": [
      "Cholas",
      "Pallavas",
      "Satavahanas",
      "Rashtrakutas"
    ],
    "answer": 1,
    "explanation": "Kanchipuram was a principal capital of the Pallavas; Mamallapuram is also associated with their monuments."
  },
  {
    "id": "ancient-2026-04",
    "subject": "General Awareness",
    "question": "Which Major Rock Edict of Ashoka discusses the Kalinga war and expresses remorse at its suffering?",
    "options": [
      "Major Rock Edict II",
      "Major Rock Edict V",
      "Major Rock Edict XII",
      "Major Rock Edict XIII"
    ],
    "answer": 3,
    "explanation": "Ashoka's Major Rock Edict XIII refers to the conquest of Kalinga and the human cost of war."
  },
  {
    "id": "ancient-2026-05",
    "subject": "General Awareness",
    "question": "The Hathigumpha inscription, found near Bhubaneswar, is chiefly associated with which ruler?",
    "options": [
      "Kharavela",
      "Rudradaman I",
      "Gautamiputra Satakarni",
      "Samudragupta"
    ],
    "answer": 0,
    "explanation": "The Hathigumpha inscription in Odisha records the achievements of Kharavela, a ruler of Kalinga."
  },
  {
    "id": "ancient-2026-06",
    "subject": "General Awareness",
    "question": "Which Harappan site is especially known for archaeological evidence of a ploughed field?",
    "options": [
      "Rakhigarhi",
      "Lothal",
      "Kalibangan",
      "Mohenjo-daro"
    ],
    "answer": 2,
    "explanation": "Kalibangan in present-day Rajasthan is associated with evidence of an ancient ploughed field."
  },
  {
    "id": "ancient-2026-07",
    "subject": "General Awareness",
    "question": "At which Indus Valley Civilisation site was the Great Bath discovered?",
    "options": [
      "Harappa",
      "Dholavira",
      "Banawali",
      "Mohenjo-daro"
    ],
    "answer": 3,
    "explanation": "The Great Bath is a well-known public structure at Mohenjo-daro."
  },
  {
    "id": "ancient-2026-08",
    "subject": "General Awareness",
    "question": "Which Harappan settlement is especially noted for its elaborate reservoirs and water-management system?",
    "options": [
      "Dholavira",
      "Chanhudaro",
      "Surkotada",
      "Harappa"
    ],
    "answer": 0,
    "explanation": "Dholavira, on Khadir island in Gujarat, is famous for its advanced water-management structures."
  },
  {
    "id": "ancient-2026-09",
    "subject": "General Awareness",
    "question": "Which Veda is generally regarded as the oldest and is primarily a collection of hymns?",
    "options": [
      "Atharvaveda",
      "Yajurveda",
      "Rigveda",
      "Samaveda"
    ],
    "answer": 2,
    "explanation": "The Rigveda is the oldest Veda and consists chiefly of hymns (suktas)."
  },
  {
    "id": "ancient-2026-10",
    "subject": "General Awareness",
    "question": "In the early Vedic context, what were 'Sabha' and 'Samiti'?",
    "options": [
      "Types of sacrificial fire",
      "Assemblies involved in public affairs",
      "Names of royal taxes",
      "Schools of Buddhist philosophy"
    ],
    "answer": 1,
    "explanation": "Sabha and Samiti were assemblies referred to in Vedic literature, though their precise roles varied."
  },
  {
    "id": "ancient-2026-11",
    "subject": "General Awareness",
    "question": "Which of the following is NOT included in the standard list of sixteen Mahajanapadas in the Anguttara Nikaya?",
    "options": [
      "Vajji",
      "Anga",
      "Kalinga",
      "Magadha"
    ],
    "answer": 2,
    "explanation": "Anga, Vajji and Magadha occur in the canonical sixteen-Mahajanapada list; Kalinga is not in that standard list."
  },
  {
    "id": "ancient-2026-12",
    "subject": "General Awareness",
    "question": "According to the traditional account, the Second Buddhist Council was held at which place?",
    "options": [
      "Rajagriha",
      "Vaishali",
      "Pataliputra",
      "Kundalvana"
    ],
    "answer": 1,
    "explanation": "Buddhist tradition places the Second Council at Vaishali, generally about a century after the Buddha's death."
  },
  {
    "id": "ancient-2026-13",
    "subject": "General Awareness",
    "question": "Which set correctly gives the 'Three Jewels' (Triratna) of Buddhism?",
    "options": [
      "Buddha, Dhamma and Sangha",
      "Veda, Yajna and Dharma",
      "Ahimsa, Satya and Asteya",
      "Brahma, Vishnu and Shiva"
    ],
    "answer": 0,
    "explanation": "The Buddhist Three Jewels are the Buddha, the Dhamma (teaching), and the Sangha (community)."
  },
  {
    "id": "ancient-2026-14",
    "subject": "General Awareness",
    "question": "According to Jain tradition, Mahavira was the:",
    "options": [
      "21st Tirthankara",
      "22nd Tirthankara",
      "23rd Tirthankara",
      "24th Tirthankara"
    ],
    "answer": 3,
    "explanation": "Mahavira is revered as the 24th Tirthankara of Jainism. Parshvanatha was the 23rd."
  },
  {
    "id": "ancient-2026-15",
    "subject": "General Awareness",
    "question": "On reaching which river did Alexander's soldiers refuse to march farther east in 326 BCE?",
    "options": [
      "Indus",
      "Beas (Hyphasis)",
      "Jhelum (Hydaspes)",
      "Ravi (Hydraotes)"
    ],
    "answer": 1,
    "explanation": "Alexander's forces refused to advance beyond the Hyphasis (Beas), prompting his return."
  },
  {
    "id": "ancient-2026-16",
    "subject": "General Awareness",
    "question": "Who wrote 'Indica' after serving as a Greek envoy to the court of Chandragupta Maurya?",
    "options": [
      "Fa-Hien",
      "Xuanzang",
      "Megasthenes",
      "Al-Biruni"
    ],
    "answer": 2,
    "explanation": "Megasthenes was a Greek envoy and the author associated with Indica, describing Mauryan India."
  },
  {
    "id": "ancient-2026-17",
    "subject": "General Awareness",
    "question": "Who composed the Prayaga (Allahabad) Prashasti that celebrates Samudragupta's conquests?",
    "options": [
      "Harisena",
      "Banabhatta",
      "Kalidasa",
      "Vishakhadatta"
    ],
    "answer": 0,
    "explanation": "Harisena, a court poet and official, composed the Sanskrit eulogy inscribed on the Allahabad Pillar."
  },
  {
    "id": "ancient-2026-18",
    "subject": "General Awareness",
    "question": "Which Gupta emperor is portrayed playing a veena on a celebrated type of his gold coins?",
    "options": [
      "Skandagupta",
      "Chandragupta I",
      "Kumaragupta I",
      "Samudragupta"
    ],
    "answer": 3,
    "explanation": "Some gold coins of Samudragupta depict him playing a stringed instrument, commonly described as a veena."
  },
  {
    "id": "ancient-2026-19",
    "subject": "General Awareness",
    "question": "The famous Junagadh rock inscription in Sanskrit, which also mentions the Sudarshana Lake, belongs to:",
    "options": [
      "Ashoka",
      "Rudradaman I",
      "Kanishka",
      "Harsha"
    ],
    "answer": 1,
    "explanation": "Rudradaman I's Junagadh inscription records repair of the Sudarshana Lake and is an important early Sanskrit inscription."
  },
  {
    "id": "ancient-2026-20",
    "subject": "General Awareness",
    "question": "The Nasik inscription issued by Gautami Balashri eulogises which Satavahana ruler?",
    "options": [
      "Hala",
      "Simuka",
      "Gautamiputra Satakarni",
      "Yajna Sri Satakarni"
    ],
    "answer": 2,
    "explanation": "Gautami Balashri's Nasik inscription praises her son, Gautamiputra Satakarni."
  },
  {
    "id": "ancient-2026-21",
    "subject": "General Awareness",
    "question": "The fifth-century phase of the Ajanta cave paintings received notable patronage from rulers of which dynasty?",
    "options": [
      "Vakataka",
      "Chalukya of Badami",
      "Rashtrakuta",
      "Pala"
    ],
    "answer": 0,
    "explanation": "Major fifth-century work at Ajanta is connected with Vakataka patronage, notably during Harishena's reign."
  },
  {
    "id": "ancient-2026-22",
    "subject": "General Awareness",
    "question": "Which Gupta ruler's reign broadly coincided with the visit of the Chinese Buddhist pilgrim Faxian to India?",
    "options": [
      "Chandragupta I",
      "Samudragupta",
      "Skandagupta",
      "Chandragupta II"
    ],
    "answer": 3,
    "explanation": "Faxian (Fa-Hien) visited India in the early fifth century CE, during the reign of Chandragupta II."
  },
  {
    "id": "ancient-2026-23",
    "subject": "General Awareness",
    "question": "The Sanskrit drama 'Mrichchhakatika' (The Little Clay Cart) is traditionally attributed to:",
    "options": [
      "Kalidasa",
      "Shudraka",
      "Bhasa",
      "Bhavabhuti"
    ],
    "answer": 1,
    "explanation": "Mrichchhakatika is traditionally attributed to Shudraka, though details of the historical author are debated."
  },
  {
    "id": "ancient-2026-24",
    "subject": "General Awareness",
    "question": "How many Mahapuranas are traditionally recognised in Hindu literature?",
    "options": [
      "12",
      "16",
      "18",
      "24"
    ],
    "answer": 2,
    "explanation": "The traditional count is 18 Mahapuranas. There are also traditionally 18 Upapuranas."
  },
  {
    "id": "ancient-2026-25",
    "subject": "General Awareness",
    "question": "Which early Tamil work is chiefly a treatise on Tamil grammar and poetics?",
    "options": [
      "Silappadikaram",
      "Manimekalai",
      "Pattinappalai",
      "Tolkappiyam"
    ],
    "answer": 3,
    "explanation": "Tolkappiyam is an early Tamil grammatical treatise, also discussing aspects of language and poetics."
  }
];
  const test = {
    id: 'ancient-test-2026-01',
    name: 'Ancient Test',
    type: 'section',
    subject: 'General Awareness',
    subjectIndex: 1,
    level: 'Moderate–Hard · 2026 shift-inspired',
    minutes: 15,
    marks: 50,
    questionCount: questions.length,
    isFeaturedPrep: true
  };
  if (data.catalog.some(item => item.id === test.id)) return;
  const getOriginalQuestions = data.getQuestions;
  data.getQuestions = current => current?.id === test.id
    ? questions.map(q => ({...q, options: [...q.options]}))
    : getOriginalQuestions(current);
  data.catalog.unshift(test);
})();
