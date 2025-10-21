// 😱 DESCRIPTIONS

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// 🐱‍👤 TESTS
// const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });

// ✔ SOLUTION

// my solution
function getCount(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches?matches.length:0
}
console.log(getCount("aadabra"));

//Best Practices
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }


// function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }