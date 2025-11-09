 // 😱 DESCRIPTIONS
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"


// 🐱‍👤 TESTS
// const {assert,config} = require("chai");

// describe("Get Planet Name By ID", function() {
//   it("Sample Tests", function() {
//     assert.equal(getPlanetName(2), 'Venus');
//     assert.equal(getPlanetName(5), 'Jupiter');
//     assert.equal(getPlanetName(3), 'Earth');
//   });
// });

// ✔ SOLUTION

// my solution
function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
      default:
        return "uncorrect number"
  }
  
  return name;
}


console.log(getPlanetName(6));

// best practices

// function getPlanetName(id){
//   return {
//     1: 'Mercury',
//     2: 'Venus',
//     3: 'Earth',
//     4: 'Mars',
//     5: 'Jupiter',
//     6: 'Saturn',
//     7: 'Uranus',
//     8: 'Neptune'
//   }[id]
// }