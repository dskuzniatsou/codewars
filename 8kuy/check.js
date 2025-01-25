// 😱 DESCRIPTIONS
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// 🐱‍👤 TESTS
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);


// ✔ SOLUTION

// my solution

function check(a, x) {
    for (let index = 0; index < a.length; index++) {
       if (a[index] == x) {
        return true
       }  
    }return false
}
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log (check([101, 45, 75, 105, 99], 75));

//Best Practices

// function check(a,x){
//     return a.includes(x);
//   };

//   const check = (a,x) => a.includes(x);