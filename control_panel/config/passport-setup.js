const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const admin = require('../models/admin')

// saving admin object in the session

passport.serializeUser(function(admin, done) {
    done(null, admin.id);
  });

  passport.deserializeUser(function(id, done) {
    admin.findById(id, function(err, admin) {
      done(err, admin);
    });
  });

//login strategy

passport.use('local.login', new localStrategy({
  usernameField : 'adminName',
  passwordField: 'password',
  passReqToCallback: true
}, (req,username,password, done)=> {

  //find admin
  admin.findOne({adminName: username}, (err,admin)=> {

      if (err) {
          return done(null, false, req.flash('error', 'Something wrong happened'))
      } 
      if(!admin) {
          return done(null, false, req.flash('error', 'admin was not found'))
      }
      if (admin) {
          if (admin.comparePasswords(password, admin.password)) {

              return done(null,admin, req.flash('success', ' welcome back'))

          } else {
              return done(null,false, req.flash('error', ' password is wrong'))

          }
      }
  })
}))