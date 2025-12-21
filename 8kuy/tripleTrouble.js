// // 😱 DESCRIPTIONS

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
//     assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
//     assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
//     assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 
//     assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
//   });
// })




// ✔ SOLUTION
//my solution
function tripleTrouble(one, two, three){
  let result = ''
  for (let i = 0; i < one.length; i++) {
   result+=one[i]+two[i]+three[i]
    
  }
return result
}
console.log(tripleTrouble("LLh","euo","xtr"));

// best practices
// function tripleTrouble(one, two, three){
//   return one.replace(/./g,(v,i)=>v+two[i]+three[i])
//  }