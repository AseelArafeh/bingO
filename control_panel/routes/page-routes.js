const express = require("express")
const router = express.Router()
 
router.get('/', (req,res)=> {
    res.render('pages/home');
});

router.get('/home', (req,res)=> {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/categories', (req,res)=> {
    res.render('pages/categories');
});

router.get('/items', (req,res)=> {
    res.render('pages/items');
});

router.get('/users', (req, res)=> {
    res.render('pages/users');
});


module.exports = router;