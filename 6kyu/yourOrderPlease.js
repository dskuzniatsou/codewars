// 😱 DESCRIPTIONS
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// 🐱‍👤 TESTS
// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });

// ✔ SOLUTION

// my solution
function order(words){
    let result=[]
    words = words.split(' ')
for (let i = 0; i < words.length; i++) {
   if(words[i].includes('1')){
result[0] = words[i]
   }  else if (words[i].includes('2')){
    result[1] = words[i]
   } else if (words[i].includes('3')){
    result[2] = words[i]
   } else if (words[i].includes('4')){
    result[3] = words[i]
   } else if (words[i].includes('5')){
    result[4] = words[i]
   } else if (words[i].includes('6')){
    result[5] = words[i]
   } else if (words[i].includes('7')){
    result[6] = words[i]
   } else if (words[i].includes('8')){
    result[7] = words[i]
   } else if (words[i].includes('9')){
    result[8] = words[i]
   } 
}
return result.join(' ')
}


console.log(order("") );

//BEST PRACTICES
// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }   