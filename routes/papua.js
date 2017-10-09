var express = require('express')
var router = express.Router();
var papuaController = require('../controllers/papuaController')

router.get('/', papuaController.findAllPapua)
router.post('/', papuaController.fetchData, papuaController.createPapua)

module.exports = router
