// // 😱 DESCRIPTIONS
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(validateUsr('asddsa'), true);
//     assert.strictEqual(validateUsr('a'), false);
//     assert.strictEqual(validateUsr('Hass'), false);
//     assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
//     assert.strictEqual(validateUsr(''), false);
//     assert.strictEqual(validateUsr('____'), true);
//     assert.strictEqual(validateUsr('012'), false);
//     assert.strictEqual(validateUsr('0123'), true);
//     assert.strictEqual(validateUsr('1234567890abcdefg'), false);
//     assert.strictEqual(validateUsr('p1pp1'), true);
//     assert.strictEqual(validateUsr('asd43 34'), false);
//     assert.strictEqual(validateUsr('asd43_34'), true);
//     assert.strictEqual(validateUsr('abcd'), true);
//   });
// });

// ✔ SOLUTION
//my solution
function validateUsr(username) {
  const res =  /^[a-z0-9_]{4,16}$/.test(username)//regex here/.test(username)
  return res;
}
console.log(validateUsr('asddsa'));

// best practices
// function validateUsr(username) {
//   /**
//     - `^`        Start from the beginning of the string.
//     - `[]`       Allow any character specified, including...
//     - `a-z`      anything from a to z,
//     - `0-9`      anything from 0 to 9,
//     - `_`        and underscore.
//     - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
//     - `$`        End the string right after specified amount of allowed characters is given.
//   */
//   const validator = /^[a-z0-9_]{4,16}$/;
  
//   return validator.test(username);
// }