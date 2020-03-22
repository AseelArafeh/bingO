// This file enable us adding admin to the database
// Run this file separately once
// node addingAdmin.js 

const db = require('../config/database');
const admin = require('../models/admin');

let newAdmin = new admin();
newAdmin.adminName = "admin";
newAdmin.password = newAdmin.hashPassword("admin");

newAdmin.save(function (err, aaa) {
    if (err) return console.error(err);
    console.log(aaa.adminName + " saved to admins collection.");
  });