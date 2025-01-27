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
  str.replace(/./g, '$&$&')// Your code here
}

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
  // let arrWords = str.split(" ");
  // let reverseArray = arrWords.reverse()
  //  return reverseArray.join(" "); // reverse those words
}
console.log(reverseWords("row row row your boat"));

// best practices
// function reverseWords(str){
//   var reverse = [];
//   var words = str.split(" ");
//   for(let i=words.length-1; i>=0; i--){
//     reverse.push(words[i]);
    
//   }
//   return reverse.join(" ")
// }