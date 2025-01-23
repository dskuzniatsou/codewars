// 😱 DESCRIPTIONS
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// 🐱‍👤 TESTS
//    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");

// ✔ SOLUTION
//my solution

function abbrevName(name){
const separate = name.split(' ');
return (separate[0].charAt(0) + "." + separate[1].charAt(0)).toUpperCase()
}
console.log(abbrevName("Sam Harris"));

//best practices
 
// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }