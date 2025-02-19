// 😱 DESCRIPTIONS
// The Problem
// James is a DJ at a local radio station. As it's getting to the top of the hour, he needs to find a song to play that will be short enough to fit in before the news block. He's got a database of songs that he'd like you to help him filter in order to do that.

// What To Do
// Create longestPossible(longest_possible in python and ruby) helper function that takes 1 integer argument which is a maximum length of a song in seconds.

// songs is an array of objects which are formatted as follows:

// {artist: 'Artist', title: 'Title String', playback: '04:30'}
// You can expect playback value to be formatted exactly like above.

// Output should be a title of the longest song from the database that matches the criteria of not being longer than specified time. If there's no songs matching criteria in the database, return false.



// 🐱‍👤 TESTS

// Test.assertEquals(longestPossible(215), "For Reasons Unknown")

// ✔ SOLUTION

// my solution
function longestPossible(maxLength) {
  let longestSong = null;
  let longestDuration = 0;
  
  songs.forEach(song => {
      let [minutes, seconds] = song.playback.split(':').map(Number);
      let duration = minutes * 60 + seconds;
      
      if (duration <= maxLength && duration > longestDuration) {
          longestDuration = duration;
          longestSong = song.title;
      }
  });
  
  return longestSong || false;
}

console.log(longestPossible(215));




//BEST PRACTICES
// function longestPossible(play) {
//   let res = songs.filter(el => el.playback.slice(0,2) * 60 + +el.playback.slice(-2) <= play)
//                  .sort((a,b) => b.playback > a.playback ? 1 : -1);
//   return res.length ? res[0].title : false;
// }