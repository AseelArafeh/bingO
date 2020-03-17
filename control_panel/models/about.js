const mongoose = require('mongoose');

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
});

aboutSchema.methods.updateAboutTitle = (self, newTitle) => {
    self.title = newTitle;
    self.save(function(err, about) {
        if (err) {
            console.error(err);
            return 1;
        }
    })
    return 0;
}

itemaboutSchema.methods.updateAboutDescription = (self, newDescription) => {
    self.description = newDescription;
    self.save(function(err, about) {
        if (err) {
            console.error(err);
            return 1;
        }
    })
    return 0;
}

aboutSchema.methods.updateAboutDate = (self, newDate) => {
    self.date = newDate;
    self.save(function(err, about) {
        if (err) {
            console.error(err);
            return 1;
        }
    })
    return 0;
}

aboutSchema.methods.updateAbout = (self, newTitle, newDescription, newDate) => {
    self.updateAboutTitle(self, newTitle);
    self.updateAboutDescription(self, newDescription);
    self.updateAboutDate(self, newDate);
}

let about = mongoose.model('about', aboutSchema, 'aboutsCollection')

module.exports = about;