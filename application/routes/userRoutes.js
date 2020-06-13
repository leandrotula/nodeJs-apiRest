const {Router} = require('express')

const router =  Router()
const data = require('../../users.json')
const _ = require('underscore')

router.get('/', (req, res) => {
    res.json(data)
})

router.get('/:id', (req, res) => {

    let userId = req.params.id;

    let userFound = _.find(data, user => user.id == userId)

    if (!userFound) {
        res.status(404)
    }
    res.json(userFound)
})

module.exports = router