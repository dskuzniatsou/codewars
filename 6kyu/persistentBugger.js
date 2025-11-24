// 😱 DESCRIPTIONS
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Persistent Bugger.", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(persistence(39),3);
//     assert.strictEqual(persistence(4),0);
//     assert.strictEqual(persistence(25),2);
//     assert.strictEqual(persistence(999),4);
//   });
// });


// ✔ SOLUTION

// my solution
function persistence(num) {

let count = 0
while (num>=10) {
    num = num.toString().split('').map(Number).reduce((a,b)=>a*b,1)
count = count+1
}
   return count
}




console.log(persistence(999));

//BEST PRACTICES
// const persistence = num => {
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }