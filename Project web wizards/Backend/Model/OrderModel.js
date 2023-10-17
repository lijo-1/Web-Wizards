const mongoose = require('mongoose')

const DeliveryAddress = new mongoose.Schema({
    addressLine1:String,
    addressLine2:String,
    city:String,
    state:{
        type:String,
        default:()=>{return "Tamil Nadu"}
    },
    country:{
        type:String,
        default:()=>{return "India"}
    }
})

const DeliveryDetails = new mongoose.Schema({
    Name:String,
    MobileNumber:String,
    EmailAddress:String,
    DeliveryAddress:DeliveryAddress,
    Date:Date,
    Delivered:Boolean,
    TrackLocation:String,
    Status:String
})

const TrasactionDetails = new mongoose.Schema({
    id:String,
    Amt:Number,
    Status:String
})


const OrderSchema = new mongoose.Schema(
    {
        BillNumber:String,
        OrderDate:Date,
        cart:[],
        Total:Number,
        DeliveryDetails:DeliveryDetails,
        TrasactionDetails:TrasactionDetails,
        cashOnDelivery:Boolean
    }
);

module.exports = mongoose.model("Orders",OrderSchema)