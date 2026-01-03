// // 😱 DESCRIPTIONS

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
//     assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
//   });
// });


// ✔ SOLUTION
//my solution
function usdcny(usd) {
  const CNY = 6.75
  return (usd*CNY).toFixed(2) + " Chinese Yuan"
}
console.log(usdcny(15));

// best practices
// usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;