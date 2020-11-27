const path = require("path");
const fs = require("fs");
const express = require("express");
const { Router } = require("express");
const PORT = process.env.PORT || 8000

var noteList = [];

//API Routes

router.get('api/notes', function (req, res) {
    noteList = JSON.parse(fs.readFileSync('./db/db.json'))
    res.json(noteList);
});

router.get('api/notes/:id', function (req, res) {
    res.json(notes[req.params.id]);
});

router.post('api/notes', function (req, res) {
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

router.delete('/api/noteList/:id', function (req, res) {
    let postedNotes = noteList.filter(i => (i.id != req.params.id));
    noteList = postedNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(postedNotes), function(err) {
        if (err) throw err
        res.json(postedNotes)
    })
    console.log('Successfully deleted note containing id ' + req.params.id);
});

//VIEW Routes
router.get('/notes', function (req, res) {
    res.sendFile(path.join(_dirname, '...public/notes.html'));
});

router.get('/', function (req, res) {
    res.sendFile(path.join(_dirname, '...public/index.html'));
});

module.exports = router;