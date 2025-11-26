// 😱 DESCRIPTIONS
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (
// a
// p
// +
// b
// p
// +
// 1
// +
// c
// p
// +
// 2
// +
// d
// p
// +
// 3
// +
// .
// .
// .
// )
// =
// n
// ∗
// k
// (a 
// p
//  +b 
// p+1
//  +c 
// p+2
//  +d 
// p+3
//  +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


// 🐱‍👤 TESTS
// const assert = require("chai").assert;

// describe("digPow", () => {
//   it("digPow(89, 1) should return 1", () => {
//     assert.strictEqual(digPow(89, 1), 1, `Incorrect answer for digPow(89, 1)`);
//   });

//   it("digPow(92, 1) should return -1", () => {
//     assert.strictEqual(digPow(92, 1), -1, `Incorrect answer for digPow(92, 1)`);
//   });

//   it("digPow(46288, 3) should return 51", () => {
//     assert.strictEqual(digPow(46288, 3), 51, `Incorrect answer for digPow(46288, 3)`);
//   });
// });


// ✔ SOLUTION

// my solution
function digPow(n, p){
   const arr = n.toString().split('').map(Number)
   let result = []

for (let i = 0; i < arr.length; i++) {
   
    result.push( arr[i]**(p+i))
}
 if (result.reduce((sum, n) => sum+n,0 )%n===0){
 return result.reduce((sum, n) => sum+n,0 )/n
 } else {
return -1
 }

}


console.log(digPow(92, 1) );

//BEST PRACTICES
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }