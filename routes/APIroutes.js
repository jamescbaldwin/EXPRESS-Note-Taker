const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");

let noteList = [];
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
            res.json(noteList);
        });
    });

    app.get('/api/notes/:id', function (req, res) {
        res.json(noteList[req.params.id]);
    });

    app.delete('/api/notes/:id', function (req, res) {
        let filteredNotes = noteList.filter(i => (i.id !== req.params.id));
        noteList = filteredNotes
        fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes), function(err) {
            if (err) throw err;
            res.json(noteList)
        });
        console.log('Successfully deleted note containing id: ', + req.params.id)
    });
};
