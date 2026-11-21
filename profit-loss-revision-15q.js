/* Profit & Loss — 15-question revision set based on handwritten study notes.
   Uses the main CGL Arena test engine, not a standalone exam interface. */
(function(){'use strict';
const D=window.CGL_DATA;if(!D)return;
const ID='profit-loss-revision-15q';
if(D.catalog.some(t=>t.id===ID))return;
const rawQuestions=[
{t:'Selling price changes',q:'If the selling price of an article is doubled, the profit becomes 7 times its original value. What is the original profit percentage?',o:['12.5%','16⅔%','20%','25%'],a:2,e:'Let original SP = S, CP = C. 2S − C = 7(S − C), so 6C = 5S. Therefore S/C = 6/5 and original profit = 20%.'},
{t:'Selling price changes',q:'When the selling price of an article is doubled, the profit becomes 3 times the original profit. Find the original profit percentage.',o:['50%','75%','100%','125%'],a:2,e:'2S − C = 3(S − C) gives S = 2C. Thus profit = C, or 100% of CP.'},
{t:'Selling price changes',q:'If the selling price of an article is doubled, the profit becomes 10 times its original profit. The original profit percentage is:',o:['10%','11⅑%','12.5%','15%'],a:2,e:'2S − C = 10(S − C), giving 9C = 8S; S/C = 9/8. Profit = 1/8 of CP = 12.5%.'},
{t:'Equal selling prices',q:'A man sells two articles at the same selling price. On one he loses 15%, on the other he gains 10%. During the whole transaction he incurs a net loss of ₹90. What is the cost price of the second article (the profitable one)?',o:['₹900','₹956.25','₹1,050','₹1,125'],a:1,e:'Let common SP = S. CP₁ = 20S/17 and CP₂ = 10S/11. Total CP − 2S = 90 implies (16/187)S = 90. Hence S = ₹1,051.875 and CP₂ = S/1.10 = ₹956.25.'},
{t:'Equal selling prices',q:'Two articles are sold for the same price. The first is sold at 20% loss and the second at 60% profit. If their cost prices differ by ₹3,200, find the selling price of each.',o:['₹3,840','₹4,800','₹5,120','₹6,400'],a:2,e:'Equal SP means 80% of CP₁ = 160% of CP₂, so CP₁:CP₂ = 2:1. Their difference is ₹3,200, so CP₁ = ₹6,400. SP = 80% × 6,400 = ₹5,120.'},
{t:'Equal selling prices',q:'Two articles are sold at the same selling price, one at 15% profit and the other at 13% loss. What is the approximate net result?',o:['0.94% loss','1% profit','2% loss','0.94% profit'],a:0,e:'Let each SP = ₹10,005. CP₁ = 10005/1.15 = ₹8,700, CP₂ = 10005/0.87 = ₹11,500. Total CP = ₹20,200 and SP = ₹20,010. Loss = 190/20,200 × 100 ≈ 0.94%.'},
{t:'Equal cost prices',q:'Two items have the same cost price. One is sold at 12% profit and the other at 8% loss. What is the overall profit or loss percentage?',o:['2% profit','2% loss','4% profit','No profit, no loss'],a:0,e:'If each costs ₹100, combined CP = ₹200, combined SP = 112 + 92 = ₹204. Profit = ₹4/₹200 = 2%.'},
{t:'Equal cost prices',q:'Articles X and Y have equal cost prices. X is sold at 20% profit and Y is sold for ₹126 less than X. If the total profit is 14%, find the cost price of each article.',o:['₹900','₹1,000','₹1,050','₹1,200'],a:2,e:'Equal CPs imply average profit = 14%. So Y earns 8% profit, since (20 + 8)/2 = 14. Difference between SPs = 12% of CP = ₹126. CP = 126/0.12 = ₹1,050.'},
{t:'Quantity-based profit/loss',q:'A trader purchases 9 apples for ₹7. He sells n apples for ₹2 and incurs a loss of 14 2/7%. What is n?',o:['2','3','4','5'],a:1,e:'Loss 14 2/7% = 1/7, so SP is 6/7 of CP. CP/apple = ₹7/9, so SP/apple = ₹2/3. Therefore ₹2 buys 3 apples.'},
{t:'Quantity-based profit/loss',q:'A shopkeeper sells 60 pens and suffers a loss equal to the selling price of 20 pens. Find the loss percentage.',o:['20%','25%','33⅓%','40%'],a:1,e:'Let SP per pen = ₹1. Total SP = 60, loss = 20, so total CP = 80. Loss percentage = 20/80 × 100 = 25%.'},
{t:'Quantity-based profit/loss',q:'A fruit seller buys 20 apples for ₹400 and sells them at ₹264 per dozen. What is his profit percentage?',o:['8%','10%','12%','15%'],a:1,e:'CP/apple = ₹400/20 = ₹20; SP/apple = ₹264/12 = ₹22. Profit = ₹2 on ₹20 = 10%.'},
{t:'Equal profit and loss amounts',q:'The profit made by selling an article for ₹400 equals the loss incurred by selling it for ₹300. Find its cost price.',o:['₹325','₹340','₹350','₹375'],a:2,e:'400 − CP = CP − 300. Thus 2CP = ₹700 and CP = ₹350.'},
{t:'Profit-to-loss ratio',q:'An article sold for ₹1,200 gives a profit 29 times the loss incurred if it were sold for ₹600. Find the profit percentage at ₹1,200.',o:['87.5%','90%','93 17/31%','96%'],a:2,e:'1200 − CP = 29(CP − 600). So 30CP = 18,600, CP = ₹620. Profit = ₹580, and profit% = 580/620 × 100 = 93 17/31%.'},
{t:'Successive transactions',q:'A trader sells an article to A at 20% profit. A sells it to B at 10% loss, and B sells it to C at 5% profit. If C pays ₹1,134, what was the trader’s original cost price?',o:['₹900','₹1,000','₹1,050','₹1,100'],a:1,e:'Final price = original CP × 1.20 × 0.90 × 1.05 = CP × 1.134. Therefore CP = 1134/1.134 = ₹1,000.'},
{t:'Mixed overall profit',q:'A merchant buys two watches for ₹9,000 each. He sells the first at 10% loss. At what price must he sell the second to earn 18% profit overall?',o:['₹12,960','₹13,140','₹13,320','₹14,040'],a:1,e:'Total CP = ₹18,000. Required total SP at 18% profit = ₹21,240. First SP = ₹9,000 × 0.90 = ₹8,100. Second SP = 21,240 − 8,100 = ₹13,140.'}
];
const questions=rawQuestions.map((q,i)=>({
  id:ID+'-q'+String(i+1).padStart(2,'0'),
  subject:'Quantitative Aptitude',
  topic:'Profit & Loss · '+q.t,
  question:q.q,
  options:[...q.o],
  answer:q.a,
  explanation:q.e,
}));
const test={
  id:ID,
  name:'Profit & Loss · Revision 15Q',
  type:'section',
  subject:'Quantitative Aptitude',
  subjectIndex:2,
  level:'Moderate · Handwritten notes revision',
  minutes:25,
  marks:15,
  questionCount:15,
  pointsPerCorrect:1,
  penaltyPerWrong:0,
  isRevision:true,
  isFeaturedPrep:true,
  practiceSource:'study-notes-revision'
};
const original=D.getQuestions;
D.getQuestions=function(t){
  return t?.id===ID
    ?questions.map(q=>({...q,options:[...q.options]}))
    :original(t);
};
D.catalog.unshift(test);
})();
