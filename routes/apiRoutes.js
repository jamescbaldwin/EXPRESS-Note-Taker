const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");


module.exports = function (app) { 

    app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")));

    app.post("/api/notes", function (req, res) {
        let newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };

        let oldNote = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))
        oldNote.push(newNote)
        fs.writeFileSync("./db/db.json", JSON.stringify(oldNote))
        res.json(oldNote)
    });

    app.delete("/api/notes/:id", function (req, res) {
        let noteId = req.params.id
        let oldNote = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))
        const filteredNote = oldNote.filter(oldNote => oldNote.id != noteId)
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredNote))
        res.send(filteredNote)
    });
}