// 😱 DESCRIPTIONS
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// 🐱‍👤 TESTS
// assert.deepEqual(actual, expected, `isVow(${JSON.stringify(input)}) returned an incorrect answer\n`);
// }

// it("Sample Tests", () => {
//   doTest([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//   doTest([101,121,110,113,113,103,121,121,101,107,103], ["e",121,110,113,113,103,121,121,"e",107,103]);
// });


// ✔ SOLUTION

// my solution

function isVow(a){
  const str={
    97: "a",  
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',}

    return a.map(code => str[code] ?? code);

}

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));


//Best Practices
//first
// function isVow(a){
//   for (var i=0, l=a.length; i<l; ++i)
//   {
//     var char = String.fromCharCode(a[i])
//     if ('aeiou'.indexOf(char) !== -1)
//     a[i] = char;
//   }
  
//   return a;
// }
// //second
// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)