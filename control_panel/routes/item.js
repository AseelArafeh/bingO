let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let Item = require('./../models/item');

const itemPPage = 10;

// middleware to check if admin is logged in
isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/admin/login');
}

// create new item or update already exist item.
router.post('/items/createNewItemOrUpdate', isAuthenticated, (req, res, next) => {

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

// remove exist item by its id.
router.get('/items/removeItem:id', isAuthenticated, (req, res, next) => {

    let idItem = req.params.id;

    Item.remove({ id: idItem }, (err) => {
        if (err) {
            return console.error(err);
        }
        res.redirect('/items');
    });
});

//modifire for exist items.
router.get('/items/modifier/:id', isAuthenticated, (req, res, next) => {

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

router.get('/items/page/:id', (req, res, next) => {

    let idPage = req.params.id;

    const options = {
        page: idPage,
        limit: itemPPage,
    };

    Item.paginate({}, options, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('pages/items', { items: result.docs });
    });
});

module.exports = router;