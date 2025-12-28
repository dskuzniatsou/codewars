// // 😱 DESCRIPTIONS

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m should be natural numbers (positive integers). Otherwise, see the examples in your language about how to handle invalid input values.
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("should test", () => {
//     assert.strictEqual(sumMul(0,0),"INVALID");
//     assert.strictEqual(sumMul(2,9),20);
//     assert.strictEqual(sumMul(4,-7),"INVALID");
//   });
// });



// ✔ SOLUTION
//my solution
function sumMul(n,m){
if(n<=0||m<=0) {
  return "INVALID"}
  else {
    let count =  Math.floor((m-1)/n)
    return n*count* (count+1)/2
  }

}
console.log(sumMul(0,9));

// best practices
// function sumMul(n,m){
//   if (n >= m) return "INVALID";

// var sum = 0;
//   for (var i = n; i < m; i+=n) {
//     sum += i;
//   }
//   return sum;
// }