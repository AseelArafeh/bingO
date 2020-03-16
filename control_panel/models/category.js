const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

let category = mongoose.model('category', catigorySchema, 'categoriesCollection')

module.exports = category