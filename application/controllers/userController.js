require("../models/userModel")
const mongoose = require('mongoose')
const UserModel = mongoose.model('UserModel')

let findAll = (req, res) => {

    UserModel.find((err, user) => {

        if (err) {
            res.status(500).json({
                error: err
            })
            return;
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

        if (err) res.status(500).json({
            error: err
        })
        res.status(201).json(userToSave)

    })
}

let findById = (req, res) => {
    UserModel.findById(req.params.id, (err, user) => {

        if (err) {
            res.status(500).json({
                error: err
            })
        }

        if (!user) {
            res.status(404).json({
                id: req.params.id,
                error: {
                    message: "user not found"
                }
            })
            return;
        }

        res.status(200).json(user);

    });
}

let deleteById = (req, res) => {

    UserModel.findById(req.params.id,  (err, user) => {

        if (err) res.status(500).json({
            error: err
        })

        if (!user) {
            res.status(404).json({
                id: req.params.id,
                error: {
                    message: "user not found"
                }
            })
        }

        user.remove((err) => {
            if (err) res.status(500).json({
                error: err
            })

            res.status(200).json({
                id: req.params.id
            })
        })
    })
}

let update = (req, res) => {

    UserModel.findById(req.params.id, (err, user) => {

        if (err) {
            res.status(500).json({
                error: err
            })
        }

        if (!user) {
            res.status(404).json({
                id: req.params.id,
                error: {
                    message: "user not found"
                }
            })

            return
        }

        user.name = req.body.name
        user.lastName = req.body.lastName
        user.email = req.body.email

        user.save((err) => {

            if (err) res.status(500).json({
                error: err
            })
            res.status(200).json(user)

        })
    })

}

let changeState = (req, res) => {

    UserModel.findById(req.params.id,  (err, user) => {

        if (err) res.status(500).json({
            error: err
        })

        if (!user) {
            res.status(404).json({
                id: req.params.id,
                error: {
                    message: "user not found"
                }
            })
        }

        user.state = false

        user.save((err) => {

            if (err) res.status(500).json({
                error: err
            })
            res.status(200).json(user)

        })
    })
}

module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update,
    changeState
}