//Requires filesystem
const fs = require('fs');
const router = require('express').Router();

//Handles the displaying of the previously saved notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(JSON.parse(data));
        };
    });
});

//Handles displaying the notes by id
router.get('/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const i = req.params.id
        if (req.params.id) {
            res.json(JSON.parse(data[i]));
        } else {
            console.log(err);
        };
    });
});

//Handles the deleting of a saved note by the delete button in the HTML
router.delete('/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.splice([{ where: { id: req.params.id } }], 1);

            fs.writeFile('./db/db.json',
                JSON.stringify(parsedNotes),
                (err) => {
                    if (err) { return console.log(err) }
                    res.status(200).end()
                });
        };
    });
});

//Handles the adding of a new note by the save button in the HTML
router.post('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
            const newNote = {
                ...req.body,
                id: Date.now() - Math.floor(Math.random())
            }
            parsedNotes.push(newNote);

            fs.writeFile('./db/db.json',
                JSON.stringify(parsedNotes),
                (err) => {
                    if (err) { return console.log(err) }
                    res.status(200).end()
                });
        };
    });
});

//Export the router
module.exports = router