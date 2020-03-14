const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bingoDB', (err)=> {

    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...')
    }
})