const express = require("express");
const app = express();
const hbs = require('express-handlebars');
const db = require('./config/database')

app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutDir: __dirname + "/views/layouts"
}));
app.set('view engine', 'hbs');
app.use(express.static('assets'));

app.get('/', (req,res)=> {
    res.render('pages/home');
});

// bring pages routes
const pages = require('./routes/page-routes')
app.use('/pages', pages) 
 
// bring admin routes
const admin = require('./routes/admin-routes')
app.use('/admin', admin)


// listen to port 3000
app.listen(3000, ()=> {
    console.log(' app is wokring on port 3000')
})