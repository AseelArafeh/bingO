let express = require('express');
let router = express.Router();

let mongoose = require('./../config/database');
let About = require('./../models/about');

// middleware to check if admin is logged in
isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/admin/login')
}

// save updates on about us infos.
router.post('/about/update', isAuthenticated, (req, res, next) => {

    About.findById(req.body._id, (err, about) => {
        if (err) throw err;
        about.updateAbout(about, req.body.title, reg.body.description, reg.body.date);
        res.redirect('/about');
    });

});

module.exports = router;