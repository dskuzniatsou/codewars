// 😱 DESCRIPTIONS

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// 🐱‍👤 TESTS

// let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
// let players = ex_names.map((n) => new Player(n));

// describe("fixed tests", function(){
//   it("should find the correct goose", function(){
//     assert.strictEqual(duckDuckGoose(players, 1),  "a");
//     assert.strictEqual(duckDuckGoose(players, 3),  "c");
//     assert.strictEqual(duckDuckGoose(players, 10), "z");
//     assert.strictEqual(duckDuckGoose(players, 20), "z");
//     assert.strictEqual(duckDuckGoose(players, 30), "z");
//     assert.strictEqual(duckDuckGoose(players, 18), "g");
//     assert.strictEqual(duckDuckGoose(players, 28), "g");
//     assert.strictEqual(duckDuckGoose(players, 12), "b");
//     assert.strictEqual(duckDuckGoose(players, 2),  "b");
//     assert.strictEqual(duckDuckGoose(players, 7),  "f");



// ✔ SOLUTION

// my solution
// let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
// let players = ex_names.map((n) => new Player(n));



function duckDuckGoose(players, goose) {
  const index = (goose-1) % players.length;
  return players[index].name
}


//Best Practices
// function duckDuckGoose(players, goose) {
  
//   return players[(goose-1)%players.length].name
// }