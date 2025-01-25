// 😱 DESCRIPTIONS
// Write a function which converts the input string to uppercase.

// 🐱‍👤 TESTS
// assert.strictEqual(makeUpperCase(""),           "");
// assert.strictEqual(makeUpperCase("hello"), "HELLO");
// assert.strictEqual(makeUpperCase("Hello"), "HELLO");
// assert.strictEqual(makeUpperCase("HELLO"), "HELLO");

// ✔ SOLUTION

// my solution
function makeUpperCase(str) {
  return str.toUpperCase() // Code here
}
console.log(makeUpperCase(""));

// best practices
// const makeUpperCase = str => str.toUpperCase();