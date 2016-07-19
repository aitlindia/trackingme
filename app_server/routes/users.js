var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrlUsers.index);
router.get('/new', ctrlUsers.new);

module.exports = router;
