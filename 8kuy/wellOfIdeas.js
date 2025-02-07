// 😱 DESCRIPTIONS
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// 🐱‍👤 TESTS
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

// ✔ SOLUTION

//my solution
function well(x) {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            count += 1
        }
    }
    let result
    if (count === 0) {
        return result = 'Fail!';
    } else if (count === 1 || count === 2) {
        return result = 'Publish!';
    } else if(count > 2) {
        return result = 'I smell a series!';
    }
}
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));

//best practices
// function well(x) {
//     switch (x.filter(i => i === 'good').length) {
//       case 0:
//         return 'Fail!'
//       case 1:
//       case 2:
//         return 'Publish!'
//       default:
//         return 'I smell a series!'
//     }
//   }