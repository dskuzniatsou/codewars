// 😱 DESCRIPTIONS

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// n
// 3
// n 
// 3
//  , the cube above will have volume of 
// (
// n
// −
// 1
// )
// 3
// (n−1) 
// 3
//   and so on until the top which will have a volume of 
// 1
// 3
// 1 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// n
// 3
// +
// (
// n
// −
// 1
// )
// 3
// +
// (
// n
// −
// 2
// )
// 3
// +
// .
// .
// .
// +
// 1
// 3
// =
// m
// n 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// 🐱‍👤 TESTS

// const { assert } = require('chai');

// it("Basic tests",function() {
//   assert.strictEqual(findNb(4183059834009), 2022)
//   assert.strictEqual(findNb(24723578342962), -1)
//   assert.strictEqual(findNb(135440716410000), 4824)
//   assert.strictEqual(findNb(40539911473216), 3568)
// })


// ✔ SOLUTION

// my solution
function findNb(m) {
   let s = Math.sqrt(m);
  // s must be integer because sum of cubes is a perfect square
  if (!Number.isInteger(s)) return -1;
  
  // Solve n(n+1)/2 = s => n^2 + n - 2s = 0
  let d = Math.sqrt(1 + 8 * s);
  if (!Number.isInteger(d)) return -1;
  
  let n = (-1 + d) / 2;
  if (!Number.isInteger(n)) return -1;
  
  // Optional verification (to catch floating point errors)
  let sum = (n * (n + 1) / 2) ** 2;
  return sum === m ? n : -1;
}




console.log(findNb(40539911473216));

//BEST PRACTICES
// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }