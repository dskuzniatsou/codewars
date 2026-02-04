// 😱 DESCRIPTIONS
// Our counter prototype is broken. Can you spot, what's wrong here?

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe('test counter', function() {
//   var counter = new Counter();

//   it('initialize', function() {
//     Test.assertEquals(counter.getValue(), 0, 'Initial counter value must be 0');
//   });
  
//   it('increase', function() {
//     counter.increase();
//     Test.assertEquals(counter.getValue(), 1, 'Counter value must be increased');
//   });
  
//   it('reset', function() {
//     counter.reset();
//     Test.assertEquals(counter.getValue(), 0, 'Counter value must be 0 after reset');
//   });
// });
// ✔ SOLUTION

// my solution
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue  = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};
const counter = new Counter()
console.log(counter.getValue());

// best practices
// first
// class Counter {
// 	constructor() {
//   	this.value = 0;
//   }
  
//   increase() {
//     this.value++;
//   };

//   getValue() {
//     return this.value;
//   };

//   reset() {
//     this.value = 0;
//   };
// }
// second
// function Counter() {
//   this.value = 0;
// }

// Counter.prototype = {
//   increase : function(){this.value++;},
//   getValue : function(){ return this.value;},
//   reset : function(){this.value = 0;}
// };