const mongoose = require('mongoose')
const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

let about = mongoose.model('about', aboutSchema, 'aboutsCollection')

module.exports = about