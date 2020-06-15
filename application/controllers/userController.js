require("../models/userModel")
const mongoose = require('mongoose')
const UserModel = mongoose.model('UserModel')

let findAll = (req, res) => {

    UserModel.find((err, user) => {

        if (err) {
            res.status(404)
        }
        res.json(user)
    })
}

let save = (req, res) => {

    let userToSave = new UserModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email
    });

    userToSave.save(function (err) {

        if (err) res.status(500)
        res.status(201).json(userToSave)

    })
}

module.exports = {
    findAll,
    save
}