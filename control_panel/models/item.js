const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const mongoosePaginate = require('mongoose-paginate-v2');

const itemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
});

itemSchema.plugin(mongoosePaginate);

itemSchema.plugin(autoIncrement.plugin, {
    model: 'item',
    field: 'id',
    startAt: 0,
    increment: 1
});

itemSchema.methods.updateItem = (self, newTitle, newImage, newCategoryId) => {
    let query = { id: self.id };
    let update = { title = newTitle, image = newImage, categoryId = newCategoryId };
    item.findOneAndUpdate(query, update, options, callback);
}

let item = mongoose.model('item', itemSchema, 'itemsCollection');

module.exports = item;