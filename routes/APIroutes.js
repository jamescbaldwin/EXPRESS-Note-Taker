const db = require("../db/db.json");
const fs = require("fs");

//Routing
module.exports = function (app) {
    app.get('api/notes', function (req, res) {
        noteList = JSON.parse(fs.readFileSync('./db/db.json'))
        res.json(noteList);
    });

    app.post('api/notes', function (req, res) {
        let postedNote = {
            id: Math.floor(MAth.random()*1000),
            title: req.body.title,
            text: req.body.text
        }
    
        console.log(postedNote);
        noteList.push(postedNote);
    
        fs.writeFileSync('./db./db.json', JSON.stringify(noteList), function(err) {
            if (err) throw err;
            res.json(noteList)
        })
    });
}