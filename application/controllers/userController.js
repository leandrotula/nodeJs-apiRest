const mongoose = require('mongoose')
const userModel = mongoose.model('usermodel')

let findAll = (req, res) => {

    userModel.find((err, user) => {

        if (err) {
            res.status(404)
        }
        res.json(user)
    })
}

module.exports = {
    findAll
}