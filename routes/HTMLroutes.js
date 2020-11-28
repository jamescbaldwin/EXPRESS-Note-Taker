//path dependency enables us to get correct file for our html
var path = require("path");

module.exports = function(app) {
    //html GET requests
    //when users "vist" a page
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //if no matching route is found, we default to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};