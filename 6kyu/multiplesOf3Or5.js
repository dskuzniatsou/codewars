// 😱 DESCRIPTIONS

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// 🐱‍👤 TESTS

// it(`n=${n}`, () => {  
//   let actual = solution(n)
//   assert.strictEqual(actual, expected)
// })
// }

// describe("basic tests", function(){
// test(10,23)
// ✔ SOLUTION

// my solution
function solution(n) {
    if (n < 0) return 0;
  
    const sumDivisibleBy = (k) => {
      const p = Math.floor((n - 1) / k);
      return k * p * (p + 1) / 2;
    };
  
    return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
  }

console.log(solution(16));

//BEST PRACTICES
// не работает с большими числами!!!!!!
// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }