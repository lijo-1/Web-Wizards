const express = require("express");
const path = require("path")
const app = express();
const mongoose = require("mongoose");
const flash = require('express-flash')
const passport = require('passport')
const adminRoutes = require('./Router/adminRoutes')
const buyerRoutes = require('./Router/buyerRoutes')
const staffRoutes = require('./Router/staffRoutes')
const session = require('express-session')
const upload = require('express-fileupload')
const initializePassport = require('./controller/auth')
app.use(express.static('./Images/ProductImages'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(upload())
mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce").then(()=>{console.log("Connected successfully");});
initializePassport(passport)
app.use(flash())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.static('./uploads'))
app.use(session({
    secret:'onlineShopping',
    cookie:{maxAge:30000},
    saveUninitialized:false,
}))

app.use(passport.initialize())

app.use(passport.session())

app.use('/buyer',buyerRoutes);

app.use('/admin',adminRoutes);

app.use('/staff',staffRoutes);

app.listen(8000);
