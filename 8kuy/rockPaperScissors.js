// 😱 DESCRIPTIONS
// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.
// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

// Examples:
// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe('rock paper scissors', function() {
//   const getMsg = (n) => `Player ${n} won!`;

//   it('player 1 win', function() {
//     Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//     Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//     Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//   });

//   it('player 2 win', function() {
//     Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//     Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//     Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//   });

//   it('draw', function() {
//     Test.assertEquals(rps('rock', 'rock'), 'Draw!');
//     Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
//     Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//   });
// });

// ✔ SOLUTION

// my solution

const rps = (p1, p2) => {
  if (p1===p2){
    return 'Draw!'
  } else if ((p1 === 'rock')&(p2 === 'scissors')||((p1 === 'scissors')&(p2 === 'paper'))||((p1 === 'paper')&(p2 === 'rock'))) {
    return `Player 1 won!`
  } else {
    return `Player 2 won!`
  }
};

console.log(rps('paper', 'scissors'));

// // best practices
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };


// const rps = (p1, p2) => {
//   var map = {
//     'rock': 'scissors',
//     'scissors': 'paper',
//     'paper': 'rock'
//   };
  
//   if (p1 == p2) {
//     return 'Draw!';
//   } else {
//     return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
//   }
// };