// 😱 DESCRIPTIONS
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// 🐱‍👤 TESTS
// assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
// assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
// assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
// assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
// assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);


// ✔ SOLUTION

// my solution

function fixTheMeerkat(arr) {
  let newArr=[]
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    newArr.unshift(element)
    
  }
  return newArr
 }


console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));

// best practices
// function fixTheMeerkat(arr) {
//   return arr.reverse();
// }