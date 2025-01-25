// 😱 DESCRIPTIONS
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


// 🐱‍👤 TESTS
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

// ✔ SOLUTION

// my solution
function booleanToString(b){
   return b.toString() //your code here
  }
console.log(booleanToString(false));

// best practices
// function booleanToString(b){
//     return b ? 'true' : 'false';
//   }