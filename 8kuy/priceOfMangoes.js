// // 😱 DESCRIPTIONS

// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

// Examples
// # 🥭 : Paid mango
// # 🆓 : Free mango

// Quantity = 2
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; no mango for free
// # 🥭🥭

// Quantity = 3
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; +1 mango for free
// # 🥭🥭🆓

// Quantity = 5
// Price = 3
// Total cost ==> 12   
// # Paid 4 mangoes for $3 per unit = $12; +1 mango for free
// # 🥭🥭🆓   🥭🥭

// Quantity = 9
// Price = 5
// Total cost ==> 30   
// # Paid 6 mangoes for $5 per unit =

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.strictEqual(mango(3, 3), 6)
//     assert.strictEqual(mango(9, 5), 30)
//   });
// });


// ✔ SOLUTION
//my solution
function mango(quantity, price){
return (quantity-Math.floor(quantity/3))*price
}
console.log(mango(9, 5));

// best practices
// function mango(quantity, price){
//   let freeMangos = Math.floor(quantity / 3);
// return (quantity - freeMangos) * price;
// }