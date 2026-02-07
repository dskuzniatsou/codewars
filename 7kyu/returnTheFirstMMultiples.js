// 😱 DESCRIPTIONS
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]
// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Example tests", () => {
//   it("should pass example test", () => {
//     assert.deepEqual(multiples(3, 5), [5, 10, 15]);
//   });
// });

// ✔ SOLUTION

// my solution
function multiples(m, n){
  let arr=[]
  for (let i = 1; i <=m; i++){
    arr.push(n*i)
  
  }
  return arr
}
console.log( multiples(3, 5));

//Best Practices
// function multiples(m, n){
// 	return Array.from(Array(m), (_v, i) => (i + 1) * n);
// }
