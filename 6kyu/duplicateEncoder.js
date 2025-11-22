// 😱 DESCRIPTIONS

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!




// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"),"(((");
//     assert.strictEqual(duplicateEncode("recede"),"()()()");
//     assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//     assert.strictEqual(duplicateEncode("(( @"),"))((");
//   });
// });


// ✔ SOLUTION

// my solution

function duplicateEncode(word){
    const map = {};
  
  // Считаем количество каждой буквы
  for (let char of word.toLowerCase()) {
    map[char] = (map[char] || 0) + 1;
  }

  let result = '';
  for (let char of word.toLowerCase()) {
   result += map[char] > 1 ? ')' : '(';

  }
  return result
}


console.log(duplicateEncode("Success"));

//BEST PRACTICES
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }