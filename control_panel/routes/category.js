let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let Category = require('./../models/category');

router.post('/categories/createNewCategoryOrUpdate', (req, res, next) => {

    if (req.body.id === "") {

        Category.nextCount(function(err, count) {

            if (err) {
                console.error(err);
                return;
            }

            let newCategory = new Category();

            newCategory.title = reg.body.title;

            newCategory.save(function(err, newCategory) {
                if (err) {
                    return console.error(err);
                }
                console.log(newCategory.title + " saved to categories collection.");
            });
        });
    } else {
        Category.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        });
    }

    res.redirect('/categories');
});

router.get('/categories/removeCategory:id', (req, res, next) => {

    let idCategory = req.params.id;

    Category.remove({ id: idCategory }, (err) => {
        if (err) {
            return console.error(err);
        }
        res.redirect('/categories');
    });
});

router.get('/categories/modifier/:id', (req, res, next) => {

    let idCategory = req.params.id;

    Category.findOne({ id: idCategory }, (err, category) => {
        if (err) {
            console.error(err);
            return 1;
        }
        res.render('categoryForm', { category: category });
        return 0;
    });
});

module.exports = router;