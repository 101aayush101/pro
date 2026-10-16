/* Ancient Test v2: 25 original questions, styled from PUBLIC candidate recollections up to 16 October 2026. Not official/verified SSC 2026 questions. Keep the v1 bank intact for historical attempt review. */
(function(){
'use strict';
const data=window.CGL_DATA;
if(!data)return;
const previous=data.catalog.find(t=>t.id==='ancient-test-2026-01');
if(previous){previous.isFeaturedPrep=false;previous.name='Ancient Test · Original (16 Oct)';}
const rows=[
 [
  "Burzahom, reported in the 16 October shift recollections, is best known in Neolithic archaeology for which feature?",
  [
   "Pit dwellings dug into the ground",
   "Harappan dockyard",
   "Monolithic Buddhist caves",
   "Rock-cut Pallava rathas"
  ],
  0,
  "Burzahom in Kashmir is famous for Neolithic pit dwellings. It is not a Harappan urban centre.",
  "Direct factual",
  "16 Oct"
 ],
 [
  "A candidate recall mentioned a Neolithic site in Tamil Nadu. Which of the following is correctly associated with Tamil Nadu?",
  [
   "Burzahom",
   "Paiyampalli",
   "Chirand",
   "Koldihwa"
  ],
  1,
  "Paiyampalli is an excavated Neolithic and later Megalithic site in Tamil Nadu. ASI Chennai lists its 1964–65 excavation.",
  "Direct factual",
  "16 Oct"
 ],
 [
  "Which site is situated on Khadir Island in the Rann of Kachchh and is known for elaborate water management?",
  [
   "Banawali",
   "Ropar",
   "Dholavira",
   "Alamgirpur"
  ],
  2,
  "Dholavira is a Harappan city on Khadir Island in Gujarat; UNESCO documents its reservoirs and water-management system.",
  "Direct factual",
  "Archaeology variant"
 ],
 [
  "The rock shelters containing extensive prehistoric paintings at Bhimbetka are located in which state?",
  [
   "Uttar Pradesh",
   "Maharashtra",
   "Odisha",
   "Madhya Pradesh"
  ],
  3,
  "Bhimbetka, a prehistoric rock-shelter complex, is in Madhya Pradesh.",
  "Direct factual",
  "Prehistory variant"
 ],
 [
  "Which script used in the north-western part of the subcontinent in early historical times was generally written from right to left?",
  [
   "Kharoshthi",
   "Brahmi",
   "Grantha",
   "Sharada"
  ],
  0,
  "Kharoshthi normally runs right to left, unlike early Brahmi, which generally runs left to right.",
  "Direct factual",
  "Early-history variant"
 ],
 [
  "The Mathura school of early Indian sculpture is particularly associated with the use of:",
  [
   "Black basalt from the Deccan",
   "Reddish spotted sandstone",
   "Makrana white marble",
   "Chunar sandstone only"
  ],
  1,
  "Mathura sculpture commonly employed locally available mottled red sandstone.",
  "Direct factual",
  "9 Oct art-school variant"
 ],
 [
  "The Aihole inscription celebrating Pulakeshin II was composed by which court poet?",
  [
   "Harisena",
   "Banabhatta",
   "Ravikirti",
   "Dandin"
  ],
  2,
  "Ravikirti composed the Aihole inscription of the Chalukya ruler Pulakeshin II.",
  "Direct factual",
  "Deccan-inscriptions variant"
 ],
 [
  "Consider these statements: 1. Burzahom is associated with pit dwellings. 2. Paiyampalli is situated in Gujarat. 3. Dholavira has evidence of reservoirs. Which are correct?",
  [
   "1 and 2 only",
   "2 and 3 only",
   "1, 2 and 3",
   "1 and 3 only"
  ],
  3,
  "Statements 1 and 3 are correct. Paiyampalli is in Tamil Nadu, not Gujarat.",
  "Statements",
  "16 Oct + archaeology"
 ],
 [
  "With reference to Gandhara and Mathura art, consider: 1. Gandhara sculpture exhibits Hellenistic influence. 2. The Mathura school produced images exclusively of the Buddha. Which is/are correct?",
  [
   "1 only",
   "2 only",
   "Both 1 and 2",
   "Neither 1 nor 2"
  ],
  0,
  "Gandhara shows strong Hellenistic influence. Mathura produced Buddhist, Jain and Brahmanical sculptures, so 2 is false.",
  "Statements",
  "9 Oct"
 ],
 [
  "Regarding Mamallapuram, consider: 1. The famous rathas are monolithic monuments. 2. The Shore Temple is carved from a single boulder like the rathas. Which is/are correct?",
  [
   "2 only",
   "1 only",
   "Both",
   "Neither"
  ],
  1,
  "The rathas are hewn from single rocks; the Shore Temple is a structural Pallava temple, not a monolith.",
  "Statements",
  "15 Oct"
 ],
 [
  "Consider: 1. In the Panchayatana layout, four subsidiary shrines are arranged around a principal shrine. 2. 'Mandapa' means the innermost chamber housing the deity. Which is/are correct?",
  [
   "2 only",
   "Both",
   "1 only",
   "Neither"
  ],
  2,
  "Panchayatana has a principal shrine and four subsidiary shrines. The garbhagriha, not mandapa, houses the main deity.",
  "Statements",
  "10 Oct"
 ],
 [
  "Consider: 1. Both Nagara and Dravida architectural features occur at Pattadakal. 2. The Aihole inscription is associated with Pulakeshin II. Choose the correct option.",
  [
   "1 only",
   "2 only",
   "Neither",
   "Both 1 and 2"
  ],
  3,
  "Both statements are correct. Pattadakal demonstrates northern and southern styles, and Aihole records Pulakeshin II.",
  "Statements",
  "10–16 Oct architecture"
 ],
 [
  "Consider: 1. Early Brahmi inscriptions are generally written left to right. 2. Kharoshthi inscriptions are generally written left to right. Which is/are correct?",
  [
   "1 only",
   "2 only",
   "Both",
   "Neither"
  ],
  0,
  "Brahmi generally runs left to right; Kharoshthi generally runs right to left.",
  "Statements",
  "Script variant"
 ],
 [
  "Which inscription–associated-person pair is INCORRECTLY matched?",
  [
   "Allahabad Pillar Prashasti — Kalidasa",
   "Aihole inscription — Ravikirti",
   "Hathigumpha inscription — Kharavela",
   "Junagadh Sanskrit inscription — Rudradaman I"
  ],
  0,
  "The Allahabad/Prayaga Prashasti was composed by Harisena, not Kalidasa. Other associations are correct.",
  "Pair matching",
  "Inscriptions variant"
 ],
 [
  "Which ancient work–author pair is INCORRECTLY matched?",
  [
   "Harshacharita — Banabhatta",
   "Rajatarangini — Kalhana",
   "Brihat Samhita — Varahamihira",
   "Mudrarakshasa — Shudraka"
  ],
  3,
  "Mudrarakshasa is attributed to Vishakhadatta. Shudraka is traditionally associated with Mrichchhakatika.",
  "Pair matching",
  "Text-author variant"
 ],
 [
  "Select the INCORRECT archaeological site–feature pair.",
  [
   "Sanchi — Great Stupa",
   "Lothal — dock-like basin",
   "Kalibangan — ploughed field",
   "Burzahom — Great Bath of the Harappans"
  ],
  3,
  "The Great Bath is at Mohenjo-daro. Burzahom is a Neolithic site associated with pit dwellings.",
  "Pair matching",
  "16 Oct site variants"
 ],
 [
  "Which dynasty–associated centre pair is INCORRECT?",
  [
   "Pallava — Kanchipuram",
   "Early Chalukya — Badami",
   "Satavahana — Nalanda",
   "Vakataka — Ajanta"
  ],
  2,
  "Nalanda's famous monastery complex is associated especially with the Gupta and later periods, not the Satavahanas. The other associations are correct.",
  "Pair matching",
  "Dynasty-centre variant"
 ],
 [
  "Identify the INCORRECT school of art–region pair.",
  [
   "Gandhara — North-western subcontinent",
   "Mathura — Uttar Pradesh region",
   "Amaravati — Andhra region",
   "Sarnath — Tamil Nadu"
  ],
  3,
  "Sarnath is in Uttar Pradesh, near Varanasi. The remaining regional associations are correct.",
  "Pair matching",
  "9 Oct art schools"
 ],
 [
  "Which ruler–monument association is INCORRECT?",
  [
   "Ashoka — Kailasa Temple at Ellora",
   "Rajasimha Pallava — Shore Temple",
   "Rajaraja I — Brihadisvara Temple at Thanjavur",
   "Narasimhavarman I — Mamallapuram monolithic rathas"
  ],
  0,
  "The Kailasa Temple at Ellora is a Rashtrakuta monument generally associated with Krishna I, not Ashoka.",
  "Pair matching",
  "15–16 Oct architecture"
 ],
 [
  "A temple has a prominent curvilinear shikhara crowned by an amalaka. Which broad style does this most strongly indicate?",
  [
   "Dravida",
   "Nagara",
   "Gothic",
   "Indo-Saracenic"
  ],
  1,
  "A curvilinear shikhara with an amalaka is characteristic of the Nagara temple tradition.",
  "Architecture",
  "16 Oct Nagara"
 ],
 [
  "A temple complex places four subsidiary shrines near the corners around the main central shrine. Which layout is described?",
  [
   "Trikuta",
   "Ekakuta",
   "Panchayatana",
   "Vihara"
  ],
  2,
  "Panchayatana is the five-shrine arrangement: principal sanctuary and four subsidiary shrines.",
  "Architecture",
  "10 Oct Panchayatana"
 ],
 [
  "The Papanatha Temple at Pattadakal displays an interplay of which two architectural traditions?",
  [
   "Persian and Mughal",
   "Stupa and Chaitya",
   "Indo-Greek and Roman",
   "Nagara and Dravida"
  ],
  3,
  "CCRT describes both Nagara and Dravida features in the Papanatha Temple at Pattadakal.",
  "Architecture",
  "10–16 Oct mixed styles"
 ],
 [
  "Which of the following is an example of the later structural-temple phase of Pallava architecture rather than a monolithic ratha?",
  [
   "Kailasanatha Temple, Kanchipuram",
   "Dharmaraja Ratha, Mamallapuram",
   "Arjuna Ratha, Mamallapuram",
   "Draupadi Ratha, Mamallapuram"
  ],
  0,
  "The Kailasanatha Temple at Kanchipuram is a structural Pallava temple. The named rathas at Mamallapuram are monolithic.",
  "Architecture",
  "15 Oct Mamallapuram"
 ],
 [
  "Arrange these in chronological order (earliest to latest): 1. Gupta imperial ascendancy 2. Mahajanapada period 3. Kushana rule 4. Mauryan Empire.",
  [
   "4, 2, 3, 1",
   "2, 4, 3, 1",
   "2, 3, 4, 1",
   "3, 2, 4, 1"
  ],
  1,
  "Mahajanapadas (c. 6th century BCE) preceded Mauryas (4th–2nd BCE), then Kushanas (mainly 1st–3rd centuries CE) and Gupta imperial ascendancy (4th century CE).",
  "Chronology",
  "Chronology variant"
 ],
 [
  "Arrange the following monuments/major artistic phases from earliest to latest: 1. Brihadisvara Temple at Thanjavur 2. Ashokan core of Sanchi Stupa 3. Vakataka-period paintings at Ajanta 4. Pallava Shore Temple at Mamallapuram.",
  [
   "3, 2, 4, 1",
   "2, 4, 3, 1",
   "2, 3, 4, 1",
   "4, 2, 3, 1"
  ],
  2,
  "Sanchi's Mauryan core dates to about 3rd century BCE; Ajanta's major Vakataka paintings to 5th century CE; Shore Temple to early 8th; Brihadisvara to early 11th century.",
  "Chronology",
  "15–16 Oct art chronology"
 ]
];
const questions=rows.map((r,i)=>({id:'ancient-v2-'+String(i+1).padStart(2,'0'),subject:'General Awareness',question:r[0],options:r[1],answer:r[2],explanation:r[3],pattern:r[4],reportedTheme:r[5]}));
const test={id:'ancient-test-2026-02',name:'Ancient Test',type:'section',subject:'General Awareness',subjectIndex:1,level:'Hard · 2026 shift-inspired',minutes:15,marks:50,questionCount:25,isFeaturedPrep:true,topic:'Ancient Indian History',method:'Original variants; public memory-based trends through 16 October 2026'};
const oldGet=data.getQuestions;
data.getQuestions=t=>t?.id===test.id?questions.map(q=>({...q,options:[...q.options]})):oldGet(t);
if(!data.catalog.some(t=>t.id===test.id))data.catalog.unshift(test);
})();
