const ProductData = require("../Model/ProductModel")
const productId = require('uuid')
class Product{
    
    //adds a new product to the database, 'newProduct' is a object
    addProduct = async function(newProduct){
        newProduct.productId = productId();
        console.log(newProduct.productId);
        const product = await ProductData.create(newProduct);
        return product;
    }
    
    //fetches all products
    fetchAllProducts = async function(){
        const product = await ProductData.find();
        return product;
    }

    //fetch specific product
    fetchProducts = async function(id){
             const product = await ProductData.where("productId").equals(id);
             return product;
    }

    //we can update the product
    updateProduct = async function(id,updatedProduct){
        const product = await ProductData.replaceOne({productId:id},updatedProduct);
        return product;
    }

    //deletes the product
    deleteProduct = async function(id){
        const product = await ProductData.deleteMany({productId:id});
        return product;
    }

}
module.exports=Product;