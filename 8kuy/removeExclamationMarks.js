// 😱 DESCRIPTIONS
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// 🐱‍👤 TESTS
// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");

// ✔ SOLUTION
//my solution

function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
}
console.log(removeExclamationMarks("Hello!!! World!"));

//best practices
// function removeExclamationMarks(s) {
//     return s.split('!').join('');
//   }