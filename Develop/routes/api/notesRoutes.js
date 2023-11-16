const fs = require('fs');
const router = require('express').Router();

//Handles the displaying of the previously saved notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
});

//Handles displaying the notes by id
router.get('/:id', (req,res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const i = req.params.id
        if (req.params.id) {
           res.json(JSON.parse(data[i])); 
        } else {
            console.log(err);
        }
    });
});


//Handles the adding of a new note by the save button in the HTML
//However, the page requires reloading
router.post('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(req.body);

            fs.writeFile('./db/db.json',
                JSON.stringify(parsedNotes),
                (err) => { console.log(err) });
        }
    });
});


//Handles the deleting of a saved note by the delete button in the HTML
//However, the page requires reloading
router.delete('/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (req.params.id) {
            const parsedNotes = JSON.parse(data);
            parsedNotes.splice(req.params.id, 1);

            fs.writeFile('./db/db.json',
                JSON.stringify(parsedNotes),
                (err) => { console.log(err) });
        } else {
            console.log(err);
        }
    });
});
module.exports = router