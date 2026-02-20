//  😱 DESCRIPTIONS
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five()));   //  must return 35
// four(plus(nine()));     //  must return 13
// eight(minus(three()));  //  must return 5
// six(dividedBy(two()));  //  must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
//     assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
//     assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
//     assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
//   });
// });



// ✔ SOLUTION

// my solution
function zero(op) { return op ? op(0) : 0; }
function one(op) { return op ? op(1) : 1; }
function two(op) { return op ? op(2) : 2; }
function three(op) { return op ? op(3) : 3; }
function four(op) { return op ? op(4) : 4; }
function five(op) { return op ? op(5) : 5; }
function six(op) { return op ? op(6) : 6; }
function seven(op) { return op ? op(7) : 7; }
function eight(op) { return op ? op(8) : 8; }
function nine(op) { return op ? op(9) : 9; }

function plus(right) {
  return function(left) {
    return left + right;
  };
}

function minus(right) {
  return function(left) {
    return left - right;
  };
}

function times(right) {
  return function(left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function(left) {
    return Math.floor(left / right);
  };
}

console.log(four (plus     (nine ())));

//BEST PRACTICES
// const zero = a => a ? a(0) : 0
// const one = a => a ? a(1) : 1
// const two = a => a ? a(2) : 2
// const three = a => a ? a(3) : 3
// const four = a => a ? a(4) : 4
// const five = a => a ? a(5) : 5
// const six = a => a ? a(6) : 6
// const seven = a => a ? a(7) : 7
// const eight = a => a ? a(8) : 8
// const nine = a => a ? a(9) : 9

// const plus = a => b => a + b
// const minus = a => b => b - a
// const dividedBy = a => b => Math.floor(b / a)
// const times = a => b => a * b