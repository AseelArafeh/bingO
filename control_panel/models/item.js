const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: ture
    }
})

let item = mongoose.model('item', itemSchema, 'itemsCollection')

module.exports = item