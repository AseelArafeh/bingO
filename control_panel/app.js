const express = require("express");
const app = express();
const hbs = require('express-handlebars');
const db = require('./config/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

// bring hbs template
app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutDir: __dirname + "/views/layouts"
}));
app.set('view engine', 'hbs');
app.use(express.static('assets'));

// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// bring static
app.use(express.static('node_modules'));

// session and flash config
app.use(session({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 15} // 15 minutes
}))
app.use(flash());
 
// bring passport 
app.use(passport.initialize());
app.use(passport.session());

//store admin object to use anywhere
app.get('*', (req,res,next)=> {
    res.locals.admin = req.admin || null
    next()
})

app.get('/', (req,res)=> {
    res.render('pages/home');
});

// bring pages routes
const pages = require('./routes/page-routes');
app.use('/pages', pages); 
 
// bring admin routes
const admin = require('./routes/admin-routes');
app.use('/admin', admin);


// listen to port 3000
app.listen(3000, ()=> {
    console.log('app is wokring on port 3000')
})
