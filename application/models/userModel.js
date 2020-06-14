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

module.exports = mongoose.model('usermodel', userSchema);

