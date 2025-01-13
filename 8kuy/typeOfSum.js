// 😱 DESCRIPTIONS
// Return the type of the sum of the two arguments

// 🐱‍👤 TESTS
//   testIt(12,        1,         'number');
  // testIt('d',       1,         'string');
  // testIt(1,         'a',       'string');
  // testIt('dd',      '',        'string');
  // testIt(true,      1,         'number');
  // testIt('s',       false,     'string');
  // testIt(null,      1,         'number');
  // testIt('s',       null,      'string');
  // testIt(null,      undefined, 'number');
  // testIt(undefined, 're',      'string');
  // testIt(undefined, true,      'number');
  // testIt(null,      false,     'number');

// ✔ SOLUTION

// my solution
function typeOfSum(a, b) {
  return typeof (a+b);
}
   console.log( typeOfSum(null, false));
   
// best practices

// const typeOfSum = (a, b) => typeof(a + b);