var path = require("path");
var fs = require("fs");
var router = require("express").Router(); 

let noteList = [];

router.get('/api/notes', function (req, res) {
        baseData = JSON.parse(fs.readFileSync("./db/db.json"))
        res.json(baseData);
    });

router.post("/api/notes", function (req, res) {
        var newNote = {
            id: Math.floor(Math.random()*1000),
            title: req.body.title,
            text: req.body.text
        }

        noteList.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(noteList), (err) =>{
            if (err) throw err;
            res.json(noteList);
        });
    });

router.get("/api/notes/:id", function(req, res) {
    res.json(noteList[req.params.id]);
});

router.delete("/api/notes/:id", function (req, res) {
        let filteredNotes = noteList.filter(i => (i.id !== req.params.id));
        noteList = filteredNotes
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), (err) => {
            if (err) throw err;
            res.json(filteredNotes)
        })
    });

router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index/html"));
    });


module.exports = router;