const billNumber = require('shortid')
const Product = require('../Model/ProductModel')
const orderData = require('../Model/OrderModel')
const fs = require('fs')
const pdf = require('pdf-creator-node')
const path = require('path')
const option = require('../helper/options')


class Order{
  
   constructor(){
          this.order={};
          this.order.BillNumber=billNumber()
   }

  
   cart = function(productArray,total){
         this.order.total = total;
         
           this.order.cart = productArray;
          
           
   }

   deliveryDetails = function(deliveryDetails){
      this.order.DeliveryDetails = deliveryDetails;
   }

   transactionDetails = function(transactionDetails){
      this.order.TrasactionDetails = transactionDetails;
   }

   saveOrder = async function(){
      const orderConfirm = await orderData.create(this.order);
      return orderConfirm
   }

   // printBill = async function(){
   //          const html = fs.readFileSync(path.join(__dirname,'../views/template.html'),'utf-8');
   //          const filename = ''+this.order.BillNumber+'.pdf'
            
   //          var cart = this.order.cart
   //          var billno = this.order.BillNumber
   //          var total = this.order.total
          
   //          const obj = {
   //               billno,
   //               cart,
   //               total,
   //               date:new Date()
   //          }
            
   //          const document = {
   //             html:html,
   //             data:{
   //                products:obj
   //             },
   //             path:"./docs/"+this.order.BillNumber+".pdf",
                  
   //             type: "",
   //          };

   //          await pdf.create(document,option).then(res => {
   //              console.log(res)
   //          }).catch(error => {
   //             console.log(error)
   //          })

   //          const filepath = 'docs/'+filename;
            
   //          return filepath;
   // }

   newOrders = async function() {
      console.log(await orderData.find().sort({ "DeliveryDetails.OrderDate": -1 }))
   }

   oldOrders = async function() {
      console.log(await orderData.find().sort({ "DeliveryDetails.OrderDate": 1 }))
   }

   showNotDelivered = async function() {
      console.log(await orderData.where("DeliveryDetails.Delivered").equals(false))
   }

   searchByPlace = async function(key) {
      console.log(await orderData.find({
         $or:[
            {"DeliveryDetails.DeliveryAddress.addressLine1":{$regex:key}},
            {"DeliveryDetails.DeliveryAddress.addressLine2":{$regex:key}},
            {"DeliveryDetails.DeliveryAddress.city":{$regex:key}},
            {"DeliveryDetails.DeliveryAddress.state":{$regex:key}},
            {"DeliveryDetails.DeliveryAddress.country":{$regex:key}}
            
         ]
      }))
   }

   searchByName= async function(key) {
      console.log( await orderData.find(
         {"DeliveryDetails.Name":{$regex:key}}
      ))
   }
  
   findBydate = async function(key) {
      console.log(await orderData.find(
         {OrderDate:key}))
   }

   findByBillNo = async function(key){
      console.log(await orderData.find(
         {BillNumber:key}))
   }
}

module.exports = Order