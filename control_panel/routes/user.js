let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let User = require('./../models/user');

router.get('/users/page/:id', (req, res, next) => {

    let idPage = req.params.id;

    const options = {
        page: idPage,
        limit: 10,
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