// 😱 DESCRIPTIONS

// The function is supposed to check if the input is undefined, but it is not working correctly. Can you fix the code ?
// 🐱‍👤 TESTS
// describe('Tests', function() {
//     const {assert} = require('chai');

//     it('Sample Tests', function() {
//         assert.isTrue(isUndefined(undefined));
//         assert.isFalse(isUndefined(0));
//         assert.isFalse(isUndefined(null));
//         assert.isFalse(isUndefined(NaN));
//         assert.isFalse(isUndefined('undefined'));
//         assert.isFalse(isUndefined(''));
//         assert.isFalse(isUndefined({}));
//         assert.isFalse(isUndefined([]));
//         assert.isFalse(isUndefined({valueOf() {return undefined;}}));
//     });
// });
// ✔ SOLUTION

// my solution
function isUndefined(value) {
    return value === undefined;
}
console.log(isUndefined('undefined'));

//Best Practices
// const isUndefined=value=>typeof(value)==='undefined';