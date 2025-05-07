// 😱 DESCRIPTIONS
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// 🐱‍👤 TESTS
// assert.deepEqual(actual, ["apple 5", "ban 3"]);
//   });
//   it(`Testing for "you will win"`, () => assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"]));


// ✔ SOLUTION

// my solution
function addLength(str) {
   let arrStr=str.split(' ')
let newArrStr = []
    for (let index = 0; index < arrStr.length; index++) {
        const element = arrStr[index].length;
         newArrStr.push(arrStr[index]+" " + element)        
    }
    return newArrStr
    }
    



console.log(addLength('you will win'));

// best practices

//   function addLength(str){
//     return str.split(" ").map( word => `${word} ${word.length}`)
//   }