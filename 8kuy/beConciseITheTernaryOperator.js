// // 😱 DESCRIPTIONS
// Be Concise I - The Ternary Operator
// You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)
// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Example tests", () => {
//   it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
//     tester(9  , "You're a(n) kid"     );
//     tester(10 , "You're a(n) kid"     );
//     tester(11 , "You're a(n) kid"     );
//     tester(12 , "You're a(n) kid"     );
//     tester(13 , "You're a(n) teenager");
//     tester(14 , "You're a(n) teenager");
//     tester(15 , "You're a(n) teenager");
//     tester(16 , "You're a(n) teenager");
//     tester(17 , "You're a(n) teenager");
//     tester(18 , "You're a(n) adult"   );
//     tester(19 , "You're a(n) adult"   );
//     tester(63 , "You're a(n) adult"   );
//     tester(64 , "You're a(n) adult"   );
//     tester(65 , "You're a(n) elderly" );
//     tester(66 , "You're a(n) elderly" );
//     tester(100, "You're a(n) elderly" );
//   });
// });

// function tester(age, expected) {
//   const actual = describeAge(age);
//   assert.strictEqual(actual, expected, `Testing for age = ${age}\n\n`);
// }


// ✔ SOLUTION
//my solution

function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
 return "You're a(n) " + (age>=65? "elderly": age>=18? "adult": age>=13? "teenager": 'kid')
//   return "You're a(n) " + age<=12? "kid" :age<=17?"teenager" : age<=64? "adult": "elderly"
}

console.log(describeAge(9));

// best practices
// function describeAge(age) {
//   return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
// }