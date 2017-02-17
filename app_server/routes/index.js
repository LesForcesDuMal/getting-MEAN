var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var labsix = require('../controllers/labsix');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/pageone', labsix.pageone);
router.get('/pagetwo', labsix.pagetwo);

module.exports = router;
