// 😱 DESCRIPTIONS
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });


// ✔ SOLUTION

// my solution
function solution(str){
    if(str==='') {
        return []
    }
   return str.match(/.{1,2}/g).map(s=>s.length===2? s: s+'_')
}


console.log(solution(""));

//BEST PRACTICES
// function solution(s){
//    return (s+"_").match(/.{2}/g)||[]
// }