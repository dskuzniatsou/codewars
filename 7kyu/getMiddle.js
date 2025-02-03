// 😱 DESCRIPTIONS

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// 🐱‍👤 TESTS

//   it("Sample Tests", function() {
//   doTest("test", "es");
//   doTest("testing", "t");
//   doTest("middle", "dd");
//   doTest("A", "A");

// ✔ SOLUTION

// my solution

function getMiddle(s) {

  return s.substr((s.length - 1) / 2, 2 - s.length % 2);
}
console.log(getMiddle("trstbfxbtqanutqsdxciiqpTkuubwitxmckcrfsiblvpypf"));


//Best Practices
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }