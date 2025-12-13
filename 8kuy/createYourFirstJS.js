// // 😱 DESCRIPTIONS

// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line (don't forget to put the str in the parentheses).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// 🐱‍👤 TESTS
// const { assert } = require('chai');
// describe("Tests", () => {
//   it("test", () => {
//     assert.isFunction(helloWorld, "function helloWorld is not defined")
//     helloWorld();
//   });
// });




// ✔ SOLUTION
//my solution
function helloWorld() {
  const str = "Hello World!"
  console.log(str)
}
helloWorld()
// console.log(helloWorld());

// best practices
// helloWorld = function() {
//   var str = "Hello World!";
//   console.log( str );
// }