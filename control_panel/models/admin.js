const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let admin = mongoose.model('admin', adminSchema, 'adminsCollection')

module.exports = admin