async (req,res,next)=>{
    order.cart([
       {
         "productId": "1",
         "productName": "Product A",
         "productCost": 19.99,
         "description": "Description for Product A",
         "image": "product-a.jpg",
         
       },
       {
         "productId": "2",
         "productName": "Product B",
         "productCost": 24.99,
         "description": "Description for Product B",
         "image": "product-b.jpg",
         
       }
     ],20000);

       order.deliveryDetails({
           "Name": "John Doe",
           "MobileNumber": "123-456-7890",
           "EmailAddress": "johndoe@example.com",
           "DeliveryAddress": {
             "addressLine1": "123 Main Street",
             "addressLine2": "Apt 4B",
             "city": "Anytown",
             "state": "California",
             "country": "United States"
           },
           "Date": "2023-10-03T00:00:00.000Z",
           "Delivered": false,
           "TrackLocation": "N/A",
           "Status": "Processing"
         }
         );

         console.log(await order.saveOrder());

  
  const filePath = await order.printBill();
  var arr = filePath.split('/')[1]
  fileName='Your_bill_'+arr
  

  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
  res.setHeader('Content-Type', 'application/pdf');


  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
  
}