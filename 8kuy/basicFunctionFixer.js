// 😱 DESCRIPTIONS
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?



// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe('fix add five', () => {
//   it('fixed tests', () => {
//     Test.assertEquals(addFive(5), 10)
//     Test.assertEquals(addFive(0), 5)
//     Test.assertEquals(addFive(-5), 0)
//   })
// })
// ✔ SOLUTION
//my solution

function addFive(num) {
  
  return num+5
}
console.log(addFive(5));

//best practices
 
// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }