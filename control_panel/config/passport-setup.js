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

