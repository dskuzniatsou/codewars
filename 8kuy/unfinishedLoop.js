// // 😱 DESCRIPTIONS

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


// 🐱‍👤 TESTS
// describe("Fix Timmys Counter", function() {
//     const chai = require("chai"), { assert } = chai;
//     chai.config.truncateThreshold = 0;

//     it("Sample Tests", function() {
//         assert.deepEqual(createArray(1),[1]);
//         assert.deepEqual(createArray(2),[1,2]);
//         assert.deepEqual(createArray(3),[1,2,3]);
//         assert.deepEqual(createArray(4),[1,2,3,4]);
//         assert.deepEqual(createArray(5),[1,2,3,4,5]);
//     });
// });
// ✔ SOLUTION
//my solution
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;counter++) {
        newArray.push(counter);
    }
    return newArray;
}
console.log(createArray(5));

// best practices
// function saleHotdogs(n){
//   return n*(n<5?100:n<10?95:90);
// }