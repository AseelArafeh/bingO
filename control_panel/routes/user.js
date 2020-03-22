let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let User = require('./../models/user');

const itmePPage = 10;

// middleware to check if admin is logged in
isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/admin/login');
}

router.get('/users/page/:id', isAuthenticated, (req, res, next) => {

    let idPage = req.params.id;

    const options = {
        page: idPage,
        limit: itmePPage,
    };

    User.paginate({}, options, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('pages/users', { users: result.docs });
    });
});

module.exports = router;