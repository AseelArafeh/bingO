const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let user = mongoose.model('user', userSchema, 'usersCollection')

module.exports = user