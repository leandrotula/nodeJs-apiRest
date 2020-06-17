require("../models/userModel")
const mongoose = require('mongoose')
const UserModel = mongoose.model('UserModel')

let findAll = (req, res) => {

    UserModel.find({state: true}, 'name lastName email')
        .exec((err, user) => {

            if (err) res.status(500).json({
                error: err
            })

            res.status(200).json(user)

        });

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

    let id = req.params.id;

   UserModel.findByIdAndRemove(id, (err, user ) => {

       if (err) {
           res.status(500).json({
               error: err
           })
           return;
       }

       res.status(200).json(user);
   })
}

let update = (req, res) => {

    let id = req.params.id;
    let body = req.body;

    UserModel.findByIdAndUpdate(id, body, {new : true, runValidators: true},(err, user) => {

        if (err) {
            res.status(500).json({
                error: err
            })
            return;
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

        res.status(200).json(user)
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