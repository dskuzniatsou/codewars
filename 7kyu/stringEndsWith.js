// 😱 DESCRIPTIONS

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false
// 🐱‍👤 TESTS

// const { assert, config } = require('chai');
// config.truncateThreshold = 0;

// describe("solution", function() {
//   it("Sample Tests", function() {
//     tester('abcde', 'cde', true);
//     tester('abcde', 'abc', false);
//     tester('empty ending', '', true);
//     tester('', 'empty string', false);
//     tester('', '', true);
//   });

//   function tester(str, ending, expected) {
//     const err_msg = `Failed for inputs:\n- str: "${str}"\n- ending: "${ending}"\n\n`;
//     assert.strictEqual(solution(str, ending), expected, err_msg);
//   };
// });


// ✔ SOLUTION

// my solution
function solution(str, ending){
if ((str)&& (ending=== '')){
return true
 
} else {
  return  str.slice(-ending.length)===ending
}
 
}

console.log(solution('empty ending', ''));

//Best Practices
// function solution(str, ending){
//   return str.endsWith(ending);
// }