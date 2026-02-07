// 😱 DESCRIPTIONS
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// 🐱‍👤 TESTS

// const {assert, config} = require("chai");
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//   });
// });

// ✔ SOLUTION

// my solution
function moveZeros(arr) {
  let without = arr.filter(num => num!==0)
  let target = arr.filter (num => num===0)
  return without.concat(target)
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

//BEST PRACTICES
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }