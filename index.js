const express = require("express");
const bodyParser = require("body-parser");
const SVG = require("svg.js");
const app = express();
const staticAssets = express.static(__dirname + '/public');

const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');

app.use("/public", staticAssets);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});