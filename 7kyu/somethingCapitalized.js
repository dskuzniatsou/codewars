// 😱 DESCRIPTIONS

// No Story

// No Description

// Only by Thinking and Testing

// Look at the results of the testcases, and guess the code!
// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe('Example tests', function() {
//   it('should work for basic examples', function() {
//     assert.strictEqual(testit(""), "");
//     assert.strictEqual(testit("a"), "A");
//     assert.strictEqual(testit("b"), "B");
//     assert.strictEqual(testit("a a"), "A A");
//     assert.strictEqual(testit("a b"), "A B");
//     assert.strictEqual(testit("a b c"), "A B C");
//   });
// });


// ✔ SOLUTION

// my solution
function testit(s){
//   return s.toUpperCase()
   return s.replace(/\b\w*\b/g, word => {
    if (word.length < 2) return word.toUpperCase();
    return word.slice(0, -1) + word.slice(-1).toUpperCase();
  });
}
console.log(testit("a d"));

//Best Practices
// const testit = s => s.replace(/.\b/g, c => c.toUpperCase())