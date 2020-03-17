let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let About = require('./../models/about');

router.post('/about/update', (req, res, next) => {

    About.findById(req.body._id, (err, about) => {
        if (err) throw err;
        about.updateAbout(about, req.body.title, reg.body.description, reg.body.date);
        res.redirect('/about');
    });

});

module.exports = router;