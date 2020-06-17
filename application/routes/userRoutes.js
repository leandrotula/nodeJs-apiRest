const {Router} = require('express')
const router =  Router()
const userController = require('../controllers/userController')

router.route('/')
    .get(userController.findAll)
    .post(userController.save)

router.route('/:id')
    .get(userController.findById)
    .delete(userController.changeState)
    .put(userController.update)

module.exports = router