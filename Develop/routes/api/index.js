
//Requires the express plugin
const router = require('express').Router();

//Requires the notesRoutes javascript file to handle the URL route
const notesRoutes = require('./notesRoutes');

//Sets the URL to use the notesRoute javascript
router.use('/notes', notesRoutes);

//Exports the router
module.exports = router;
