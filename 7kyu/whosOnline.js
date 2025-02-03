// 😱 DESCRIPTIONS

// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// 🐱‍👤 TESTS

// it('Example test one of each', function () {
//   friends = [{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]
//   Test.assertDeepEquals(whosOnline(friends), {
//     online: ['David'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }, 'Wrong result for example one of each')
// })

// it('Example test no one online', function () {
//   friends = [{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]

//   Test.assertDeepEquals(whosOnline(friends), {
//     offline: ['Lucy'],
//     away: ['Bob']
//   }, 'Wrong result for example no one online')

// ✔ SOLUTION

// my solution
const whosOnline = (friends) => {
  if (friends.length === 0) return {};

  const finalOutput = { online: [], offline: [], away: [] };

  for (let i = 0; i < friends.length; i++) {
    let friendObj = friends[i];
    if (friendObj["status"] === "offline") {
      finalOutput["offline"].push(friendObj["username"]);
    } else if (
      friendObj["status"] === "online" &&
      friendObj["lastActivity"] <= 10
    ) {
      finalOutput["online"].push(friendObj["username"]);
    } else {
      finalOutput["away"].push(friendObj["username"]);
    }
  }

  for (let key in finalOutput) {
    if (finalOutput[key].length === 0) {
      delete finalOutput[key];
    }
  }
  return finalOutput;
};

//BEST PRACTICES
// const whosOnline = (friends) => {
//   let output = {};
//   friends.forEach(e => {
//       let status = e.status;
//       if(status === 'online' && e.lastActivity > 10) status = 'away';
//       let temp = output[status];
//       if(output[status]) {
//           output[status].push(e.username);
//       }
//       else {
//           output[status] = [e.username];
//       }
//   });
//   return output;
// }