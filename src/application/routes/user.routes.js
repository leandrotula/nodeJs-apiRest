const {Router} = require('express')
const router =  Router()
const userController = require('../controllers/user.controller')

router.route('/')
     .get(userController.getAll)
     .post(userController.saveUser)

router.route('/:id')
    .get(userController.get)
    .delete(userController.delete)
    .put(userController.update)

module.exports = router