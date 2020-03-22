const mongoose = require('mongoose')
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

itemSchema.plugin(autoIncrement.plugin, {
    model: 'item',
    field: 'id',
    startAt: 0,
    increment: 1
});

itemSchema.methods.insertNewCategory = (title, image, categoryId) => {
    Book.nextCount(function(err, count) {

        if (err) {
            console.error(err);
            return;
        }

        let newItem = new item();

        newItem.title = title;
        newItem.image = image;
        newItem.categoryId = categoryId;

        newItem.save(function(err, newItem) {
            if (err) {
                return console.error(err);
            }
            console.log(newItem.title + " saved to items collection.");
        });
    });
}

itemSchema.methods.removeItem = (dItem) => {
    item.deleteOne({ id: dItem.id });
    dItem.save(function(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
}

itemSchema.methods.updateItemTitle = (uItem, newTitle, newImage, newCategoryId) => {
    let query = { id: uItem.id };
    let update = { title = newTitle, image = newImage, categoryId = newCategoryId };
    item.findOneAndUpdate(query, update, options, callback)
}

let item = mongoose.model('item', itemSchema, 'itemsCollection')

module.exports = item;