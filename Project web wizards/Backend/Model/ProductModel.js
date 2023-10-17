const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        productId:String,
        productName:String,
        productCost:Number,
        description:String,
        image:String,
    
    }
);

module.exports = mongoose.model("Products",ProductSchema)