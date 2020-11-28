var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/HTMLroutes')(app);
require('./routes/APIroutes')(app);

app.listen(PORT, function () {
    console.log('Application listening on PORT: ' + PORT);
});