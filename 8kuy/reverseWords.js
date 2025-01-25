// 😱 DESCRIPTIONS
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// 🐱‍👤 TESTS
// assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
// assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
// assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
// assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
// assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
// assert.strictEqual(reverseWords(""                             ),  "")


// ✔ SOLUTION

// my solution
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