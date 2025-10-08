// 😱 DESCRIPTIONS
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"
//TEST
//   it("should be one of the four colors", function() {
//     let ghost = new Ghost();
//     let yourGhostColor = ghost.color;
//     assert.include(['white', 'yellow', 'purple', 'red'], yourGhostColor);
//     assert.strictEqual(ghost.color, yourGhostColor, "Ghosts should not change color");

// ✔ SOLUTION

// my solution

let Ghost = function() {
  this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random()*4)]// your code goes here
};



//Best Practices

// var Ghost = function() {
//   var colors = ["white", "yellow", "purple", "red"];
//   var colorIndex = Math.floor(Math.random() * (colors.length));
//   this.color = colors[colorIndex];
// };