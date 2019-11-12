let path = require("path");

module.exports = function (app) {
    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/html/home.html"));
    });

    app.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/html/survey.html"));
    });

    app.get("/style.css", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/css/style.css"))
    });
};