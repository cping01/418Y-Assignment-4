const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
    type: Date,
    default: Date.now
    }
});

// export model
module.exports = User = mongoose.model('users', UserSchema);