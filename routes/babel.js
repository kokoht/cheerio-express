var express = require('express')
var router = express.Router();
var babelController = require('../controllers/babelController')

router.get('/', babelController.findAllBabel)
router.post('/', babelController.fetchData, babelController.createBabel)

module.exports = router
