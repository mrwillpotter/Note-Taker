//Requires the express plugin
const router = require('express').Router();

//Requires the apiRoutes javascript file to handle the URL route
const apiRoutes = require('./api');

//Sets the URL to use the apiRoute javascript
router.use('/api', apiRoutes);

//Exports the router
module.exports = router;
