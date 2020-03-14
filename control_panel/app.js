const express = require("express");
const app = express();
const hbs = require('express-handlebars');

app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutDir: __dirname + "/views/layouts/"
}));
app.set('view engine', 'hbs');
 

app.get('/', (req,res)=> {
    res.render('pages/home');
});
app.get('/home', (req,res)=> {
    res.render('pages/home');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/categories', (req,res)=> {
    res.render('pages/categories');
});
app.get('/items', (req,res)=> {
    res.render('pages/items');
});
app.get('/login', (req,res)=> {
    res.render('pages/login');
});
app.get('/profile', (req,res)=> {
    res.render('pages/profile');
});
app.get('/users', (req,res)=> {
    res.render('pages/users');
});

/*
// bringg events routes
const events = require('./routes/event-routes')
app.use('/events', events) 
 */

// listen to port 3000
app.listen(3000, ()=> {
    console.log(' app is wokring on port 3000')
})