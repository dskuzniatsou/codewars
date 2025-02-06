// 😱 DESCRIPTIONS
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// 🐱‍👤 TESTS
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
// });

// ✔ SOLUTION

//my solution

function twoSort(arr) {
    var str = arr[0];
    for (i = 0; i < arr.length; i++) { // setup loop to go through array of given length
        if (arr[i] < str) { // if arr[i] is greater than zero
            str = arr[i]; // add arr[i] to total
        }
    }
    return str.split('').join('***'); // return total
}

console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

//best practices
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }