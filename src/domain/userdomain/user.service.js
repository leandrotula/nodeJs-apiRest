require("../model/userModel")
const mongoose = require('mongoose')
const UserModel = mongoose.model('UserModel')

class UserService {

    async findAll() {

        return await UserModel.find({state: true}, 'name lastName email')
            .exec();

    }

    async save(body) {

        let userToSave = new UserModel({
            name: body.name,
            lastName: body.lastName,
            email: body.email
        });

        return await userToSave.save();
    }

    async findById(id) {

        return await UserModel.findById(id);

    }

    async deleteById(id) {

        return await UserModel.findByIdAndRemove(id);
    }

    async update(id, body) {

        return await UserModel.findByIdAndUpdate(id, body, {new: true, runValidators: true});
    }
}

module.exports = UserService