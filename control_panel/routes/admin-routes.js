const express = require('express')
const router = express.Router()
const admin = require('../models/admin')
const passport = require('passport')

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
router.get('/profile', (req,res)=> {
    res.render('admin/profile', {
        success: req.flash('success')
    })
})

// logout admin
router.get('/logout', (req,res)=> {
    res.json('logout admin')
})

module.exports = router