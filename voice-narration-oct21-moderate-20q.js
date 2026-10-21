/* Original SSC CGL-style Voice and Narration practice. Not official 2026 PYQs. */
(function(){
'use strict';
const D=window.CGL_DATA;if(!D)return;
const ID='voice-narration-oct21-moderate-20q';
if(D.catalog.some(t=>t.id===ID))return;
const questions=[
  {
    "id": "voice-narration-oct21-moderate-20q-q01",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Present perfect passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: The committee has postponed the meeting until Friday.",
    "options": [
      "The meeting had been postponed until Friday by the committee.",
      "The meeting has been postponed until Friday by the committee.",
      "The meeting has postponed until Friday by the committee.",
      "The meeting have been postponed until Friday by the committee."
    ],
    "answer": 1,
    "explanation": "Present perfect passive: has/have + been + past participle. Meeting is singular, so 'has been postponed'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q02",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Perfect continuous narration",
    "difficulty": "moderate",
    "question": "Select the correct indirect form: Rita said to me, \"I have been reading this book since Monday.\"",
    "options": [
      "Rita told me that she had been reading that book since Monday.",
      "Rita told me that she has been reading this book since Monday.",
      "Rita said me that she had been reading that book since Monday.",
      "Rita told me that she was reading that book since Monday."
    ],
    "answer": 0,
    "explanation": "Reporting verb 'said to' becomes 'told'; present perfect continuous changes to past perfect continuous, and 'this' normally becomes 'that' when reported from a different context."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q03",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Interrogative passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: Why did the clerk reject your application?",
    "options": [
      "Why your application was rejected by the clerk?",
      "Why had your application been rejected by the clerk?",
      "Why was your application rejected by the clerk?",
      "Why did your application be rejected by the clerk?"
    ],
    "answer": 2,
    "explanation": "A simple-past question becomes 'Why + was/were + object + V3?'. Retain interrogative word order."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q04",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Yes-no questions",
    "difficulty": "moderate",
    "question": "Select the correct indirect speech: He said to me, \"Are you attending the interview tomorrow?\"",
    "options": [
      "He asked me that I was attending the interview the following day.",
      "He asked me whether was I attending the interview the following day.",
      "He asked me if I am attending the interview tomorrow.",
      "He asked me whether I was attending the interview the following day."
    ],
    "answer": 3,
    "explanation": "Yes/no questions take 'if/whether' and statement word order. Present continuous changes to past continuous; tomorrow becomes the following day."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q05",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Past continuous passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: They were repairing the bridge when the storm began.",
    "options": [
      "The bridge had been repaired when the storm began.",
      "The bridge was being repaired when the storm began.",
      "The bridge was repaired when the storm began.",
      "The bridge had been being repaired when the storm began."
    ],
    "answer": 1,
    "explanation": "Past continuous passive is was/were + being + V3. The first action was ongoing when the storm began."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q06",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "WH question narration",
    "difficulty": "hard",
    "question": "Select the correct indirect form: The teacher said to the boys, \"Why were you making so much noise?\"",
    "options": [
      "The teacher asked the boys why were they making so much noise.",
      "The teacher asked the boys why they were making so much noise.",
      "The teacher asked the boys why they had been making so much noise.",
      "The teacher told the boys why they had made so much noise."
    ],
    "answer": 2,
    "explanation": "WH-interrogatives use statement order; past continuous is normally backshifted to past perfect continuous."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q07",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Negative perfect passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: Nobody has opened these files since Monday.",
    "options": [
      "These files have not been opened since Monday.",
      "These files have been not opened since Monday.",
      "These files had not opened since Monday.",
      "These files have not being opened since Monday."
    ],
    "answer": 0,
    "explanation": "Negative present perfect passive: have + not + been + V3. Omit the unspecified agent 'nobody'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q08",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Negative requests",
    "difficulty": "easy",
    "question": "Select the correct indirect speech: She said to the receptionist, \"Please don't reveal my address.\"",
    "options": [
      "She requested the receptionist to not revealing her address.",
      "She requested the receptionist that she did not reveal her address.",
      "She asked the receptionist that her address should not reveal.",
      "She requested the receptionist not to reveal her address."
    ],
    "answer": 3,
    "explanation": "A negative polite request uses requested/asked + object + not to + V1; my becomes her."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q09",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Modal perfect passive",
    "difficulty": "hard",
    "question": "Change into passive voice: You ought to have informed the manager of the delay.",
    "options": [
      "The manager ought to be informed of the delay.",
      "The manager ought to have been informed of the delay.",
      "The manager ought to had been informed of the delay.",
      "The manager ought to have informed of the delay."
    ],
    "answer": 1,
    "explanation": "Perfect modal-like construction: ought to + have + been + V3."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q10",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Must for obligation",
    "difficulty": "moderate",
    "question": "Select the correct indirect form: The doctor said to me, \"You must take the medicine twice a day.\"",
    "options": [
      "The doctor told me that I must have taken the medicine twice a day.",
      "The doctor said me to take the medicine twice a day.",
      "The doctor told me that I had to take the medicine twice a day.",
      "The doctor told me that I had taken the medicine twice a day."
    ],
    "answer": 2,
    "explanation": "In past reporting of an obligation, 'must' commonly changes to 'had to'. This does not mean 'had taken'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q11",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Causative let passive",
    "difficulty": "hard",
    "question": "Change into passive voice: The coach let the players leave early.",
    "options": [
      "The players were allowed to leave early by the coach.",
      "The players were let to leave early by the coach.",
      "The players were allowed leaving early by the coach.",
      "The players had let to leave early by the coach."
    ],
    "answer": 0,
    "explanation": "For causative 'let' meaning permission, a natural passive uses 'were allowed to + V1'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q12",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Future perfect narration",
    "difficulty": "moderate",
    "question": "Select the correct indirect form: Amit said, \"I will have finished the report by Friday.\"",
    "options": [
      "Amit said that he will have finished the report by Friday.",
      "Amit said that he would have finish the report by Friday.",
      "Amit said that he had finished the report by Friday.",
      "Amit said that he would have finished the report by Friday."
    ],
    "answer": 3,
    "explanation": "Future perfect 'will have + V3' normally becomes 'would have + V3' after a past reporting verb."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q13",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Causative make passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: The police made the suspect sign the document.",
    "options": [
      "The suspect was made sign the document by the police.",
      "The suspect was made to sign the document by the police.",
      "The suspect is made to sign the document by the police.",
      "The suspect had made to sign the document by the police."
    ],
    "answer": 1,
    "explanation": "Causative 'made + object + V1' becomes 'was/were made + to + V1'. Past 'made' requires past 'was'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q14",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Exclamations",
    "difficulty": "moderate",
    "question": "Select the correct indirect form: She said, \"What a wonderful performance this is!\"",
    "options": [
      "She exclaimed with admiration that that was a wonderful performance.",
      "She asked what a wonderful performance that was.",
      "She exclaimed with admiration that it was a wonderful performance.",
      "She told that it is a wonderful performance."
    ],
    "answer": 2,
    "explanation": "Convert the exclamation to an asserted clause, using 'exclaimed with admiration that'; 'is' backshifts to 'was'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q15",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Future perfect passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: They will have completed the inspection by noon.",
    "options": [
      "The inspection will have been completed by noon.",
      "The inspection will be completed by noon.",
      "The inspection will have completed by noon.",
      "The inspection would have been completing by noon."
    ],
    "answer": 0,
    "explanation": "Future perfect passive: will + have + been + V3."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q16",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Suggestion with let us",
    "difficulty": "hard",
    "question": "Select the correct indirect form: She said to him, \"Let us discuss the matter after lunch.\"",
    "options": [
      "She ordered him to discuss the matter after lunch.",
      "She suggested him to discuss the matter after lunch.",
      "She told him that they had discussed the matter after lunch.",
      "She suggested that they should discuss the matter after lunch."
    ],
    "answer": 3,
    "explanation": "An inclusive 'Let us...' suggestion can become 'suggested that they should + V1'. 'Suggested him to' is not standard."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q17",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Reporting verb passive",
    "difficulty": "moderate",
    "question": "Change into passive voice: People believe that the painting is genuine.",
    "options": [
      "The painting believed to be genuine.",
      "The painting is believed to be genuine.",
      "The painting has believed to be genuine.",
      "It is believed that the painting was genuine."
    ],
    "answer": 1,
    "explanation": "Impersonal reporting structure: 'The painting is believed to be genuine'. The present tense of the claim is preserved."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q18",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Universal truth narration",
    "difficulty": "easy",
    "question": "Select the correct indirect speech: The professor said, \"Light travels faster than sound.\"",
    "options": [
      "The professor said that light had travelled faster than sound.",
      "The professor asked whether light travels faster than sound.",
      "The professor said that light travels faster than sound.",
      "The professor said that light was travelling faster than sound."
    ],
    "answer": 2,
    "explanation": "A scientific universal truth keeps the present simple even after 'said'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q19",
    "subject": "English Comprehension",
    "kind": "Voice",
    "topic": "Phrasal verb passive",
    "difficulty": "hard",
    "question": "Change into passive voice: Who is looking after the children?",
    "options": [
      "By whom are the children being looked after?",
      "By whom are the children looked after?",
      "By whom were the children being looked after?",
      "Who are being looked after the children?"
    ],
    "answer": 0,
    "explanation": "Present continuous passive of a phrasal verb retains its particle: 'are being looked after'."
  },
  {
    "id": "voice-narration-oct21-moderate-20q-q20",
    "subject": "English Comprehension",
    "kind": "Narration",
    "topic": "Present reporting verb",
    "difficulty": "moderate",
    "question": "Select the correct indirect form: Meera says to Arjun, \"I cannot solve the problem.\"",
    "options": [
      "Meera told Arjun that she could not solve the problem.",
      "Meera tells Arjun that she cannot solve the problem.",
      "Meera tells Arjun that I cannot solve the problem.",
      "Meera says Arjun that she could not solve the problem."
    ],
    "answer": 1,
    "explanation": "The reporting verb is present ('says'), so there is no automatic tense or modal backshift. 'I' refers to Meera, so use 'she'."
  }
];
const test={id:ID,name:'Voice & Narration · Moderate SSC CGL · 20Q',type:'section',subject:'English Comprehension',subjectIndex:3,level:'Moderate · SSC-style',minutes:12,marks:40,questionCount:20,isFeaturedPrep:true,topic:'10 Active–Passive + 10 Direct–Indirect questions; tense, causative verbs, modals, interrogatives, requests and reporting verbs',practiceSource:'20 original, editorially checked SSC CGL-style questions; NOT exact 2026 SSC shift PYQs.'};
const previous=D.getQuestions;
D.getQuestions=function(t){return t&&t.id===ID?questions.map(q=>({...q,options:q.options.slice()})):previous(t)};
D.catalog.unshift(test);
})();
