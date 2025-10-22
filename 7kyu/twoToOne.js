// 😱 DESCRIPTIONS

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// 🐱‍👤 TESTS

// const Test = require('@codewars/test-compat');

// describe("longest",function() {
// it("Basic tests",function() {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//     Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//     Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
// })})

// ✔ SOLUTION

// my solution
function longest(s1, s2) {
//  const str = `${s1}${s2}`; // соединяем без пробела
  return [...new Set(s1+s2)].sort().join('');
  // your code
}
console.log(longest("arere", "yestheyarehere"));


//BEST PRACTICES
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')