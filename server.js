var fs = require("fs");
var path = require("path");
var routes = require("./routes/routes");
var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));

app.use(routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Application listening on PORT: ' + PORT);
});