let users = [
  {
    "name": "User1",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
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
  },
  {
    "name": "user3",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      4,
      3,
      3,
      2,
      5,
      1,
      2,
      3,
      4,
      1
    ]
  },
  {
    "name": "User2",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
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
];

let newUser = {
  "name": "newUser",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
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

function compareScores(newUser) {
  let matchArr = [];

  users.forEach(element => {
    let score = 0;
    for (let i = 0; i < newUser.scores.length; i++) {
      let diff = Math.abs(element.scores[i] - newUser.scores[i])
      score += diff;
    };
    let compared = { name: element.name, score: score };
    matchArr.push(compared);

  });

  let sortedUsers = matchArr.sort( (a, b) => a.score > b.score ? 1 : -1 );
  console.table(sortedUsers);
  //display sortedUsers[0] in modal
};

compareScores(newUser);