const express = require("express");
const router = express.Router();
const passport = require('passport');
const ProductData = require('../controller/Product');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destFolder = path.join(__dirname, '.', 'uploads', 'images');
        cb(null, destFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });

//----------------------------------API-----------------------------------------------
//-------------------------------Auth routes------------------------------------------
router.get('/', (req, res, next) => {
    res.render('listOrders.ejs');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/admin/',
        failureRedirect: '/admin/login',
        failureFlash: true
    })
);

router.get('/addproduct', (req, res, next) => {
    res.render('addproducts');
});

router.post('/addproduct', upload.single("product_images"), async (req, res, next) => {
    const product = new ProductData();
    const newProduct = {
        productName: req.body.product_name,
        productCost: req.body.product_cost,
        description: req.body.product_description
    };
    console.log(req.body.product_name);
    // Do something with the newProduct data, like saving it to the database
});

//----------------------------New Product---------------------------------------------
//------------------------------------------------------------------------------------

//----------------------------Update Product------------------------------------------
//------------------------------------------------------------------------------------

//-----------------------------Fetch Products--------------------------------------------------
//---------------------------------------------------------------------------------------------

//------------------------------Delete Product-------------------------------------------------
//----------------------------------------------------------------------------------------------

module.exports = router;
