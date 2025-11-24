// 😱 DESCRIPTIONS

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
//     assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//   });
// });

// ✔ SOLUTION

// my solution
function toCamelCase(str){
    if (str===''){return ''}
str=str.replace(/[^a-z,A-Z]/g, ' ').split(' ')
const first = str.slice(0,1)
console.log(first);

return first.concat(str.slice(1).map(word => word[0].toUpperCase()+word.slice(1) )).join('')

}



console.log(toCamelCase("the_stealth_warrior"));

//BEST PRACTICES
// function toCamelCase(str){
//       var regExp=/[-_]\w/ig;
//       return str.replace(regExp,function(match){
//             return match.charAt(1).toUpperCase();
//        });
// }

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }