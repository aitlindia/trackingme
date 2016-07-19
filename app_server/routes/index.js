var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/locaiton/review/new', ctrlLocations.addReview);

/* other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
