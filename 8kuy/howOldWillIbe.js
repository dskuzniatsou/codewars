// // 😱 DESCRIPTIONS

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// it("Example test cases", function() {
//   assert.strictEqual(calculateAge(2012, 2016),"You are 4 years old.");
//   assert.strictEqual(calculateAge(1989, 2016),"You are 27 years old.");
//   assert.strictEqual(calculateAge(2000, 2090),"You are 90 years old.");
//   assert.strictEqual(calculateAge(2000, 1990),"You will be born in 10 years.");
//   assert.strictEqual(calculateAge(3400, 3400),"You were born this very year!"); 
//   assert.strictEqual(calculateAge(900, 2900),"You are 2000 years old.");
//   assert.strictEqual(calculateAge(2010, 1990),"You will be born in 20 years.");
//   assert.strictEqual(calculateAge(2010, 1500),"You will be born in 510 years.");
//   assert.strictEqual(calculateAge(2011, 2012),"You are 1 year old.");
//   assert.strictEqual(calculateAge(2000, 1999),"You will be born in 1 year.");
// })



// ✔ SOLUTION
//my solution
function  calculateAge(a,b) {  
 if (a===b){
  return "You were born this very year!"
 } else if (a>b){
  return `You will be born in ${a-b} ${a-b>1? 'years': 'year'}.`
 } else {
  return `You are ${b-a} ${b-a>1? 'years': 'year'} old.`
 }
}


console.log(calculateAge(3400, 3400));

// best practices
// function  calculateAge(m, n) {
// 	if(m == n) return 'You were born this very year!';
//   var year = Math.abs(m-n) == 1 ? 'year' : 'years';
//   if(m < n) return "You are "+(n-m)+' '+year+' old.';
//   if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
// }