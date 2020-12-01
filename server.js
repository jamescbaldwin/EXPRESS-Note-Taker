var express = require("express");

require('./routes/HTMLroutes')(app);
require('./routes/APIroutes')(app);

var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Application listening on PORT: ' + PORT);
});