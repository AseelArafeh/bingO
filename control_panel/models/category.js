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

catigorySchema.methods.insertNewCategory = (title) => {
    Book.nextCount(function(err, count) {

        if (err) {
            console.error(err);
            return;
        }

        let newCategory = new catigory();

        newCategory.title = title;

        newCategory.save(function(err, newCategory) {
            if (err) {
                return console.error(err);
            }
            console.log(newCategory.title + " saved to categories collection.");
        });
    });
}

let category = mongoose.model('category', catigorySchema, 'categoriesCollection')

catigorySchema.methods.removeCategory = (self) => {
    category.deleteOne({ id: self.id });
    self.save(function(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
}

catigorySchema.methods.updateCategoryTitle = (self, newTitle) => {
    self.title = newTitle;
    self.save(function(err) {
        if (err) {
            console.error(err);
            return 1;
        }
        return 0;
    });
}

module.exports = category;