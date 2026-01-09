// // 😱 DESCRIPTIONS
// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.closeTo(converter(10), 3.54, 0.01)
//     assert.closeTo(converter(20), 7.08, 0.01)
//     assert.closeTo(converter(30), 10.62, 0.01)
//   });
// });


// ✔ SOLUTION
//my solution
 var Gallon = 4.54609188 
var Mile = 1.609344 
function converter (mpg) {
    const result = mpg/Gallon*Mile
 return Number(result.toFixed(2)) //code to convert miles per imperial gallon to kilometers per liter
}

console.log(converter(30));

// best practices
// var LITRES_PER_GALLON = 4.54609188;
// var KILOMETERS_PER_MILE = 1.609344;
// function converter (mpg) {
//   return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
// }