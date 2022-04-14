const express = require('express');
const router = express.Router();
const indexController = require('../controller/index')
const validator = require('../validator/mainValidation')




router.get('/', indexController.index)
router.get('/create', indexController.create)
router.post('/create', validator.create(), indexController.create_post)
router.get('/goin/:id' , indexController.goIn)
router.get('/remove/:id' , indexController.remove.bind(indexController))

router.get('/go' , indexController.go)




module.exports = router;