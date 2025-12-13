// // 😱 DESCRIPTIONS

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(getRealFloor( 1),  0);
//     assert.strictEqual(getRealFloor( 5),  4);
//     assert.strictEqual(getRealFloor(15), 13);
//     assert.strictEqual(getRealFloor(-2), -2);
//   });
// });





// ✔ SOLUTION
//my solution
function getRealFloor(n) {
  return n<1? n: n<13? n-1 :n-2
}
console.log(getRealFloor( 14));

// best practices
// function getRealFloor(n) {
//   // Less than 1, return n
//   if (n <= 0) return n;
  
//   return n - (n >= 13 ? 2 : 1);
// }