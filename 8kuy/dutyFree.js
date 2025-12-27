// // 😱 DESCRIPTIONS

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(dutyFree(12, 50, 1000), 166);
//     assert.strictEqual(dutyFree(17, 10, 500), 294);
//     assert.strictEqual(dutyFree(24, 35, 3000), 357);   
//   });
// })



// ✔ SOLUTION
//my solution
function dutyFree(normPrice, discount, hol){
return Math.floor(100*hol/(normPrice*discount))
}
console.log(dutyFree(24, 35, 3000));

// best practices
// function dutyFree(normPrice, discount, hol){
//   return(Math.floor(hol / normPrice / discount * 100))
// }