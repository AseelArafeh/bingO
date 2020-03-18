const express = require('express')
const router = express.Router()
const admin = require('../models/admin')
const passport = require('passport')

// middleware to check if admin is logged in
isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/admin/login')
}

//  login admin view 
router.get('/login', (req,res)=> {
    res.render('admin/login', {
        error: req.flash('error')
    })
})

// login post request 
router.post('/login',
    passport.authenticate('local.login', {
        successRedirect: '/pages/home',
        failureRedirect: '/admin/login',
        failureFlash: true })
    );


// profile 
router.get('/profile', isAuthenticated, (req,res)=> {
    res.render('admin/profile', {
        success: req.flash('success')
    })
})

// logout admin
router.get('/logout', (req,res)=> {
    req.logout();
    res.redirect('/admin/login');
})

module.exports = router