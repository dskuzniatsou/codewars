// 😱 DESCRIPTIONS
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// 🐱‍👤 TESTS
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
//     })
//   })
// ✔ SOLUTION
//my solution
const drink = {
    Children: "drink toddy",
    Teens: "drink coke",
    Young : "drink beer",
    Adults: "drink whisky"
}

function peopleWithAgeDrink(old) {

  return old>=21? drink.Adults: old>=18? drink.Young : old>=14? drink.Teens: drink.Children
};

console.log(peopleWithAgeDrink(22));

//best practices
 
// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"