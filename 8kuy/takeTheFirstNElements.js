// // 😱 DESCRIPTIONS

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Sample Tests", function(){
//   it("should work for sample tests", function(){
//     Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
//   });
// });



// ✔ SOLUTION
//my solution
function take(arr, n) {
  return arr.slice(0,n)
}
console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

// best practices
// function take(arr, n) {
//   return arr.filter((elem, i) => i < n )
// }