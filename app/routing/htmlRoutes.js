let path = require("path");

module.exports = function (app) {
    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "./../public/home.html"));
    });

    app.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
};