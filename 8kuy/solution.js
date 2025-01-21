// 😱 DESCRIPTIONS

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 🐱‍👤 TESTS
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');


// ✔ SOLUTION

// my solution
function solution(str) {
    let newString = '';
    for (let index = str.length - 1; index >= 0; index--) {
        newString += str[index];
    }
    return newString;
}
console.log(solution(''));

//Best Practices

// function solution(str){
//     return str.split('').reverse().join('');  
//   }