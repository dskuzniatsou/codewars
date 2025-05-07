// 😱 DESCRIPTIONS
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// 🐱‍👤 TESTS
// assert.deepEqual(sorter(['Algebra', 'History', 'Geometry', 'English']),
// ['Algebra', 'English', 'Geometry', 'History']);
// });
// it("Capitalization", () => { 
// assert.deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
// ['Algebra', 'english', 'Geometry', 'history']);
// });
// it("Symbols", () => { 
// assert.deepEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']),
// ['$istory', '**english', 'Alg#bra', 'Geom^try']);


// ✔ SOLUTION

// my solution

// function sorter(textbooks) {

// // return textbooks.sort((a,b)=> a.toLowerCase.localeCompare(b,{sensitivity: 'base'}))
    
//   }
  // function sorter(textbooks) {
  //   return textbooks.sort((a, b) => {
  //     const isSymbol = str => /^[^a-zA-Z]/.test(str); // начинается ли НЕ с буквы
  
  //     const aIsSym = isSymbol(a);
  //     const bIsSym = isSymbol(b);
  
  //     if (aIsSym && !bIsSym) return -1; // спецсимволы раньше
  //     if (!aIsSym && bIsSym) return 1;
  
  //     // сравниваем по алфавиту без учёта регистра
  //     return a.toLowerCase().localeCompare(b.toLowerCase());
  //   });
  // }

  function sorter(textbooks) {
    return textbooks.sort((a, b) => {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();
      if (lowerA < lowerB) return -1;
      if (lowerA > lowerB) return 1;
      return 0;
    });
  }

console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));

//Best Practices

// function sorter(arr) {
//   return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
// }