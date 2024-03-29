const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

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

// for adding admin
adminSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
// for login
adminSchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password,hash);
};


let admin = mongoose.model('admin', adminSchema, 'adminsCollection');

module.exports = admin;