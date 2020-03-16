const express = require('express')
const router = express.Router()
const admin = require('../models/admin')

//  login admin view 
router.get('/login', (req,res)=> {
    res.render('admin/login')
})

// login post request 
router.post('/login', (req,res)=> {
    console.log(req.body)
    res.json('login in admin ... ')
})

// profile 
router.get('/profile', (req,res)=> {
    res.render('admin/profile')
})

// logout admin
router.get('/logout', (req,res)=> {
    res.json('logout admin')
})

module.exports = router