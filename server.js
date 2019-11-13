const path = require("path");
const express = require("express");

let users = require("./data/friends");
const htmlRoutes = require("./routing/htmlRoutes");
const apiRoutes = require("./routing/apiRoutes");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});


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

  let sortedUsers = matchArr.sort((a, b) => a.score > b.score ? 1 : -1);

  users.push(newUser);
  return sortedUsers[0];
};


app.post("/api/friends", (request, response) => {
  let matchedUser = compareScores(request.body);
  response.json(matchedUser);
});
