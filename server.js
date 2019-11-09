let path = require("path");
let express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded( { extended:true } ));
app.use(express.static("public"));
