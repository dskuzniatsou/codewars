// 😱 DESCRIPTIONS

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(expandedForm(12), '10 + 2');
//     assert.strictEqual(expandedForm(42), '40 + 2');
//     assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
//   });
// });



// ✔ SOLUTION

// my solution
function expandedForm(num) {
   let str = num.toString()
   let l = str.length
   let res=''
   let sym=' + '
   for (let i = 0; i < l-1; i++) {
    if (str[i]!=="0") {
       res+=str[i]*Math.pow(10,l-i-1)+sym 
    }
    
    
   }
   return str[l-1]!="0" ? res+str[l-1]: res.slice(0,-2)
   
}



console.log(expandedForm(9000000));

//BEST PRACTICES
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");