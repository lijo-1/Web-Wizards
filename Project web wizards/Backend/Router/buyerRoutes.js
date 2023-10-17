const express = require("express")
const mongoose = require("mongoose")
const Order = require('../controller/order')
const router = express.Router()
const PDFDocument = require('pdfkit');
const fs = require('fs');
const order = new Order();
const OrderData = require('../Model/OrderModel')
const product = require('../controller/Product')

const products = new product()

//---------------------------API for the displaying the products to the customers----------------------------
router.get('/products',
          
    //--------------------------------------------------------

   async (req,res) => {
             
       const productData = await    products.fetchAllProducts();
       console.log(productData)
       res.send(productData)
       
   }




    //--------------------------------------------------------
);
//-------------------------------------------------------------------------------------------------------------


module.exports = router