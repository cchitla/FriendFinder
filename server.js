const path = require("path");
const express = require("express");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded( { extended:true } ));
app.use(express.static("public"));


htmlRoutes(app);
// apiRoutes(app);

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    
})