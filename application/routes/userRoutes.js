const {Router} = require('express')
const router =  Router()
const userController = require('../controllers/userController')

router.route('/')
    .get(userController.findAll)
    .post(userController.save)

module.exports = router