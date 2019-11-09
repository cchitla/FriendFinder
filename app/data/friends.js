/* 
save user data as object:

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.


*/

let users = [
  {
    "name":"User1",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"User2",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        2,
        5,
        3,
        4,
        5,
        3,
        2,
        4,
        3,
        2
      ]
  }
];

let newUser = {
  "name":"newUser",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      4,
      3,
      3,
      2,
      5,
      1,
      2,
      3,
      4,
      2
    ]
};

function compareScores (newUser) {
  console.log(`New User: ${newUser.scores}`);
  
  users.forEach(element => {
    let score = 0;
    for (let i = 0; i < newUser.scores.length; i++) {
      // at each [i], find greater number, subtract less from it, store the difference
      let max = Math.max(element.scores[i], newUser.scores[i]);
      let min = Math.min(element.scores[i], newUser.scores[i]);
      let diff = max - min;
      score += diff;    
    };
    let avg = score/10;
    console.log(`average: ${avg}`);
    
    console.log("=======");
    
  });
};

compareScores(newUser);
