// // 😱 DESCRIPTIONS

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(lowercaseCount("abc"), 3);
// Test.assertEquals(lowercaseCount("abcABC123"), 3);
// Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
// Test.assertEquals(lowercaseCount(""), 0)
// Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
// Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
//   });
// });

// ✔ SOLUTION
//my solution
function lowercaseCount(str){
  const matches = str.match(/[a-z]/g)
   return matches ? matches.length : 0;
}
console.log(lowercaseCount("abcABC123"));

// best practices
// function lowercaseCount(str){
//     return (str.match(/[a-z]/g) || []).length
// }

// function lowercaseCount(str){
//     return str.replace(/[^a-z]/g, "").length;
// }