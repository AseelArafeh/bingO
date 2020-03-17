const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);

const categorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    }
})

categorySchema.plugin(autoIncrement.plugin, {
    model: 'category',
    field: 'id',
    startAt: 0,
    increment: 1
});

let category = mongoose.model('category', catigorySchema, 'categoriesCollection')

module.exports = category;