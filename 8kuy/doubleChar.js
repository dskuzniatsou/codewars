// 😱 DESCRIPTIONS
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// 🐱‍👤 TESTS
// Test.assertEquals(doubleChar("abcd"), "aabbccdd");
// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
// Test.assertEquals(doubleChar("1337"), "11333377");
// Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
// Test.assertEquals(doubleChar("123456"), "112233445566");
// Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");


// ✔ SOLUTION

// my solution
function doubleChar(str) {
  return str.split('').map(letter => letter + letter).join(''); // Your code here
}
console.log(doubleChar("1337"));

// // best practices
// function doubleChar(str) {
// 	var word = '';
//   for (var i = 0; i < str.length; i++){
//   	word = word + str[i] + str[i];
//   };
//   return word;
// };

// function doubleChar(str) {
//   return str.replace(/(.)/g, "$1$1")
// }