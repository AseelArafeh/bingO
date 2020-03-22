const express = require("express")
const router = express.Router()

// middleware to check if admin is logged in
isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/admin/login')
}

router.get('/', (req,res)=> {
    res.render('pages/home');
});

router.get('/home', isAuthenticated, (req,res)=> {
    res.render('pages/home');
});

router.get('/about', isAuthenticated, (req, res) => {
    res.render('pages/about');
});

router.get('/categories', isAuthenticated, (req,res)=> {
    res.render('pages/categories');
});

router.get('/items', isAuthenticated, (req,res)=> {
    res.render('pages/items');
});

router.get('/users', isAuthenticated, (req, res)=> {
    res.render('pages/users');
});


module.exports = router;