// 😱 DESCRIPTIONS
// Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

// Write a function to help Bob with this calculation.
// 🐱‍👤 TESTS
// const { assert } = require('chai')

// describe("Tests", () => {
//   it("Example tests", () => {
//     assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
//     assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);
//   });
// });


// ✔ SOLUTION
//my solution

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

console.log(Kata.getVolumeOfCuboid(6,2,5));

//best practices
 
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     if (length>0 && width>0 && height>0){  /*Check all the values to be positive*/
//       let volume = length * width * height; /*Multiply the three dimensions*/
//       return volume /*Return the result*/
//     } else {
//       console.log("Check out the values, there is a negative or 0.") /*Make them check the values */
//     }
//   }
// }