// 😱 DESCRIPTIONS

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(duplicateCount(""), 0);
//     assert.strictEqual(duplicateCount("abcde"), 0);
//     assert.strictEqual(duplicateCount("aabbcde"), 2);
//     assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
//     assert.strictEqual(duplicateCount("Indivisibility"), 1)
//     assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
//   });
// });


// ✔ SOLUTION

// my solution
function duplicateCount(text){
   const map = {};
  
  // Считаем количество каждой буквы
  for (let char of text.toLowerCase()) {
    map[char] = (map[char] || 0) + 1;
  }

  // Считаем сколько букв имеют количество больше 1
  let count = 0;
  for (let key in map) {
    if (map[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount("aabBcde"));

//BEST PRACTICES
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }