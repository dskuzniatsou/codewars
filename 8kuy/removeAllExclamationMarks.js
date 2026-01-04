// // 😱 DESCRIPTIONS

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// 🐱‍👤 TESTS
// describe('tests', function() {

//     const { assert } = require("chai");

//     function doTest(input, expected) {
//         const actual = remove(input);
//         assert.strictEqual(actual, expected, `for string:\n"${input}"\n`);
//     }

//     it("It should work for basic tests", function() {
//         doTest("Hi!", "Hi")
//         doTest("Hi!!!", "Hi")
//         doTest("!Hi", "!Hi")
//         doTest("!Hi!", "!Hi")
//         doTest("Hi! Hi!", "Hi! Hi")
//         doTest("Hi", "Hi")
//     });
// });


// ✔ SOLUTION
//my solution
function remove(string) {  
  return string.replace(/\!+$/, '');
}
console.log(remove("Hi! Hi!!!"));

// best practices
// function remove(s)
// {
//     while(s && s.slice(-1) == "!") 
//     { 
//         s = s.slice(0,-1) 
//     }
//     return s;
// }