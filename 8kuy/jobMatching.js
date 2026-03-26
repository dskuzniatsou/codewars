// // 😱 DESCRIPTIONS

// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.



// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// let candidate1 = { minSalary: 120000 },
//     job1 = { maxSalary: 130000 },
//     job2 = { maxSalary: 80000 };
    
// Test.assertEquals(match(candidate1, job1), true);
// Test.assertEquals(match(candidate1, job2), false);
//   });
// });




// ✔ SOLUTION
//my solution

function match(candidate, job) {
 if (!candidate.hasOwnProperty('minSalary') || !job.hasOwnProperty('maxSalary')) {
    throw new Error("Missing salary information");
  }
  
  // Calculate candidate's effective minimum (with 10% flexibility)
  const effectiveMin = candidate.minSalary * 0.9;
  
  return effectiveMin <= job.maxSalary;
}
console.log(match(candidate1, job1));

// best practices
// const match = (candidate, job) => {
//   if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
//   return job.maxSalary >= (candidate.minSalary * .9);
// };