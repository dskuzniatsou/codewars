// 😱 DESCRIPTIONS

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.



// 🐱‍👤 TESTS

// assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

// ✔ SOLUTION

// my solution

function toNumberArray(stringarray) {
    let numberArray = []
    for (let i = 0; i < stringarray.length; i++) {
        numberArray.push(parseFloat(stringarray[i]))
    }
    return numberArray
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));


//Best Practices
// function toNumberArray(stringarray)
// {
//   return stringarray.map(parseFloat);
// }