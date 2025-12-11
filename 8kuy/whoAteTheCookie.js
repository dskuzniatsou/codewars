// // 😱 DESCRIPTIONS
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe('Example tests', () => {
//   it('should return correct messages for given inputs', () => {
//     assert.strictEqual(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
//     assert.strictEqual(cookie(26), "Who ate the last cookie? It was Monica!");
//     assert.strictEqual(cookie(2.3), "Who ate the last cookie? It was Monica!");
//     assert.strictEqual(cookie(true), "Who ate the last cookie? It was the dog!");
//   });
// });
// ;


// ✔ SOLUTION
//my solution
function cookie(x){
  return "Who ate the last cookie? It was " + (typeof x === "string"? "Zach": typeof x === 'number'? "Monica" : "the dog") + "!"
}
console.log(cookie(true));

// best practices
// function cookie(x) {
//   var t = typeof x
//   var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
//   return `Who ate the last cookie? It was ${who}!`
// }