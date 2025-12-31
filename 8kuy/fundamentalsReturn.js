// // 😱 DESCRIPTIONS

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b
// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(add(1,2),3)
//     assert.strictEqual(multiply(1,2),2)
//     assert.strictEqual(divide(2,1),2)
//     assert.strictEqual(mod(1,2),1)
//     assert.strictEqual(exponent(1,2),1)
//     assert.strictEqual(subt(1,2),-1)
//   })
// })



// ✔ SOLUTION
//my solution
function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return Math.abs(a-b)
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}
console.log(exponent(1,2));

// best practices
// const add = (a, b) => a + b;
// const subt = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const mod = (a, b) => a % b;
// const exponent = (a, b) => a ** b;