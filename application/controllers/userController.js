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

let findById = (req, res) => {
    UserModel.findById(req.params.id, (err, user) => {

        if (err) {
            res.status(500)
        }

        res.status(200).json(user);

    });
}

module.exports = {
    findAll,
    save,
    findById
}