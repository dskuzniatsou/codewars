// 😱 DESCRIPTIONS

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)





// 🐱‍👤 TESTS

// const { assert, config } = require("chai");
// config.truncateThreshold = 0;

// describe("isIsogram", function() {
//   it("Sample tests", function() {
//     tester("Dermatoglyphics", true );
//     tester("isogram", true );
//     tester("aba", false);
//     tester("moOse", false);
//     tester("isIsogram", false );
//     tester("", true);
//   });
//   const tester = (input, expected) => {
//     assert.strictEqual(isIsogram(input), expected, `Failed for input: "${input}"\n`);
//   }
// });


// ✔ SOLUTION

// my solution

function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram(""));


//Best Practices

// function isIsogram(str){
//   var i, j;
//   str = str.toLowerCase();
//   for(i = 0; i < str.length; ++i)
//     for(j = i + 1; j < str.length; ++j)
//       if(str[i] === str[j])
//         return false;
//   return true;
// }