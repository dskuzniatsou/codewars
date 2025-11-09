// 😱 DESCRIPTIONS
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Example Tests", function() {

//   it("one", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//   });

//   it("two", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//   });

//   it("ten", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//   });

// });



// ✔ SOLUTION

//my solution

var humanYearsCatYearsDogYears = function(humanYears) {
    const firstYear = 15
    const secondYear = firstYear + 9
    const nextCatYear = 4
    const nextDogYear = 5
    let catYears
    let dogYears
 if (humanYears===1){
    catYears = firstYear
    dogYears = firstYear
    
 } else if (humanYears===2) {
    catYears = secondYear
    dogYears = secondYear
 } else {
    catYears = secondYear + (humanYears-2)*nextCatYear
    dogYears = secondYear + (humanYears-2)*nextDogYear
 }

  return [humanYears,catYears,dogYears];
}


console.log(humanYearsCatYearsDogYears(10))

//best practices
// function humanYearsCatYearsDogYears(humanYears) {
//   switch (humanYears) {
//     case 1:
//       return [1, 15, 15]
//     case 2:
//       return [2, 24, 24];
//     default:
//       return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
//   }
// }
