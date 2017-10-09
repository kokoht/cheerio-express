var express = require('express')
var router = express.Router();
var kepriController = require('../controllers/kepriController')

router.get('/', kepriController.findAllKepri)
router.post('/', kepriController.fetchData, kepriController.createKepri)

module.exports = router
