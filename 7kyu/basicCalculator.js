// 😱 DESCRIPTIONS

// Write a function called that takes 3 values. The first and third values are numbers. The second value is a character.

// If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null / None (Python) / throw an ArgumentException (C#).
// (2,"+", 4) --> 6
// (6,"-", 1.5) --> 4.5
// (-4,"*", 8) --> -32
// (49,"/", -7) --> -7
// (8,"m", 2) --> null
// (4,"/",0) --> null

// 🐱‍👤 TESTS


// describe("Tests", function() {
//     const { assert } = require('chai');

//     it("sample tests", function() {
//         doTest(3.2,"+", 8, 11.2);
//         doTest(3.2,"-", 8, -4.8);
//         doTest(3.2,"/", 8, 0.4);
//         doTest(3.2,"*", 8, 25.6);
//         doTest(-3,"+", 0, -3);
//         doTest(-3,"-", 0, -3);
//         doTest(-3,"/", 0, null);
//         doTest(-2, "/", -2, 1);
//         doTest(-3,"*", 0, 0);
//         doTest(-3,"w", 0, null);
//     });

//     function doTest(a, op, b, expected) {
//         const message = `${a} "${op}" ${b}\n \n`;
//         const actual = calculate(a, op, b);
//         if (expected === null)
//             assert.isNull(actual, message);
//         else
//             assert.approximately(actual, expected, 1e-6, message);
//     }
// });

// ✔ SOLUTION

// my solution
function calculate(a, operator, b) {

switch (operator) {
  case '+':
    return a+b
     case '-':
    return a-b
 case '*':
    return a*b
     case '/':
    return b!==0? a/b: null
  default:
   return null
    break;
}
   
}
console.log(calculate(-3,"w", 3));

//Best Practices
// function calculate(num1, operation, num2) {
//   var ops = {
//     '+': function(x, y) { return x + y; },
//     '-': function(x, y) { return x - y; },
//     '*': function(x, y) { return x * y; },
//     '/': function(x, y) { return y === 0 ? null : x / y; }
//   };
//   return (ops[operation] || function() { return null; })(num1, num2);
// }