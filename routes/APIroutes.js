const db = require("../db/db.json");
const fs = require("fs");

//Routing
module.exports = function (app) {
    app.get("api/notes", function (req, res) {
        noteList = JSON.parse(fs.readFileSync('./db/db.json'))
        res.json(db);
    });

    app.post("api/notes", function (req, res) {
        db.push(req.body);
        db.forEach((obj, i) => {
            obj.id = i +1
        });

        fs.writeFile("./db./db.json", JSON.stringify(db), function () {
            res.json(db);
        });
    });

    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
        db.splice(id -1, 1);
        db.forEach((obj, i) => {
            obj.id = i + 1;
        });
        fs.writeFile("./db/db.json", JSON.stringify(db), function () {
            res.json(db);
        });
    });
};
