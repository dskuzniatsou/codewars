// // 😱 DESCRIPTIONS

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// 🐱‍👤 TESTS
// const chai = require('chai');
// const assert = chai.assert;

// describe("Basic Tests", () => {
  
//   it("multiply(10)", () => {
//     assert.strictEqual(multiply(10), 250);
//   });
  
//   it("multiply(0)", () => {
//     assert.strictEqual(multiply(0), 0);
//   });
  
//   it("multiply(-2)", () => {
//     assert.strictEqual(multiply(-2), -10);
//   });
// });
// ✔ SOLUTION
//my solution
function multiply(number){
  return number * Math.pow(5,Math.abs(number).toString().length)
  //your code here
}
console.log(multiply(-2));

// best practices
// const superImportant = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const constructNumber = function(number) {
//   const result = [];
//   for (let i = 0; i < number.length; i++) {
//     result.unshift(superImportant[superImportant.lastIndexOf(Number(number[i]))]);
//   }
//   let output = result.reverse();
//   if (typeof output == "object") {
//     output = output.join("");
//   }
//   if (typeof output == "string") {
//     output = this.global.Number(output);
//   }
//   if (typeof output == "number") {
//     return output;
//   }
// };
// var ᅟ000   =   this  ;
// var ᅟ001   = ᅟ000.global;
// var ᅟ002   = ᅟ001  .ᅟ000  =  this  ;
// var ᅟ003   = ᅟ002  .ᅟ000  .  global  .  Math;
// var ㅤ004   =   (ㅤㅤ) => ㅤㅤ << constructNumber("192") * ( constructNumber("1") / constructNumber("192") ) /ㅤㅤ*ㅤㅤ/ constructNumber("192") + + - - constructNumber("2") - constructNumber("4") + - - constructNumber("2");
// var ㅤ005   = ㅤ004  (  (  constructNumber("5")  >>  constructNumber("0")  *  constructNumber("3")  +  constructNumber("192")  )  )  ;
// var ㅤ006   =   (ﾠ) => ﾠ* constructNumber("5") ** (ᅟ003  .  abs(ﾠ) + "" )  .  length ;

// let multiply = function(numberThatWillBeMultiplied) {
//   return funtionThatWillDoSomethingImportant(numberThatWillBeMultiplied);
// }
// function funtionThatWillDoSomethingImportant(superImportantParameterThatWillBeUsedByASuperImportantFunctionThatWillDoSomethingImportant) {
//   const newNumber   = ㅤ004(superImportantParameterThatWillBeUsedByASuperImportantFunctionThatWillDoSomethingImportant) + constructNumber("0") + constructNumber("0") + constructNumber("0") + constructNumber("0") + constructNumber("0");
//   multiply = function(newNumberThatWillBeMultiplied) {
//     let ㅤlet   =   5;
//     let ㅤconst = ㅤlet  +ㅤlet;
//     return ㅤ006(ㅤ004(newNumberThatWillBeMultiplied)  ) + ㅤconst    - ㅤlet    - ㅤlet    +    - ㅤconst    +    + ㅤconst   ;
//   }
//   const result = multiply(newNumber);
//   multiply = function(numberThatWillBeMultiplied) {
//     return funtionThatWillDoSomethingImportant(numberThatWillBeMultiplied);
//   }
//   return result;
// };