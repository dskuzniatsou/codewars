// 😱 DESCRIPTIONS

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 🐱‍👤 TESTS

// const { assert, config } = require('chai');
// config.truncateThreshold = 0;

// describe("XO", function() {
//   it("Sample tests", function() {
//     tester('xo', true);
//     tester('XO', true);
//     tester('xxxoo', false);
//     tester("xxOo", true);
//     tester('', true, 'Empty string contains equal amount of x and o');
//   });
//   const tester = (input, expected, msg) => {
//     assert.strictEqual(XO(input), expected, `Failed for input: "${input}"${msg ? "\n\n" + msg : ''}\n`);
//   };
// });

// ✔ SOLUTION

// my solution
function XO(str) {
 
  str = str.toLowerCase()
    
  const xCount = str.split('').filter(c => c === 'x').length
  const oCount = str.split('').filter(c => c === 'o').length
  return xCount === oCount
}


console.log(XO('XO'));


//Best Practices

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }