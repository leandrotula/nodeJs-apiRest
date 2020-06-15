const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model('UserModel', userSchema);

module.exports = mongoose

