let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let Item = require('./../models/item');

router.post('/items/createNewItemOrUpdate', (req, res, next) => {

    if (req.body.id === "") {

        Book.nextCount(function(err, count) {

            if (err) {
                console.error(err);
                return;
            }

            let newItem = new Item();

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
    } else {
        Item.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        });
    }

    res.redirect('/items');
});

router.get('/items/removeItem:id', (req, res, next) => {

    let idItem = req.params.id;

    Item.remove({ id: idItem }, (err) => {
        if (err) {
            return console.error(err);
        }
        res.redirect('/items');
    });
});

router.get('/items/modifier/:id', (req, res, next) => {

    let idItme = req.params.id;

    Item.findOne({ id: idItem }, (err, item) => {
        if (err) {
            console.error(err);
            return 1;
        }
        res.render('itmeForm', { item: item });
        return 0;
    });
});

module.exports = router;