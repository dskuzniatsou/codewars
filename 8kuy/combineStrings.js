// // 😱 DESCRIPTIONS

// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// With "James" as the first name and "Stevens" as the last name should return "James Stevens"

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
//   });
// });



// ✔ SOLUTION
//my solution
function combineNames(first, last){
  return first + ' ' + last

}
console.log(combineNames('James', 'Stevens'));

// // best practices
// const combineNames = (...names) => names.join(' ');

// const combineNames = (a, b) => `${a} ${b}`;