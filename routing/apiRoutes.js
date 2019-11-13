const users = require("./../data/friends");

module.exports = function(app) {

    app.get("/api/friends", (request, response) => {
        response.json(users)
    });

    app.post("/api/friends", (request, reponse) => {

    });

};