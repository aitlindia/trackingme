var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

//locations
router.get('/locations', ctrlLocations.locationsList);
router.get('/location/:locationid', ctrlLocations.location);
router.post('/locations', ctrlLocations.locationsCreate);

module.exports = router;