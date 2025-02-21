// 😱 DESCRIPTIONS
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// 🐱‍👤 TESTS
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 

// ✔ SOLUTION
function grow(x) {
    return x.reduce((gr, el) => gr * el, 1)
}

console.log(grow([2, 2, 2, 2, 2, 2]));

//code variations best practices
// const grow=x=> x.reduce((a,b) => a*b);