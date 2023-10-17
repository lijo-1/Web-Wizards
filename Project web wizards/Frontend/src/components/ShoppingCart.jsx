import React, { useState } from 'react';

const ShoppingCart = () => {
    const [subtotal, setSubtotal] = useState(0);

    // Assuming you have a list of products with their prices, for example:
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        // ...more products
    ];

    // Calculate subtotal based on the product prices
    const calculateSubtotal = () => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        // setSubtotal(total);
    };

    // Call calculateSubtotal when the component is rendered to calculate the initial subtotal
    calculateSubtotal();

    return (
        <div className="bg-white px-10 pt-16 pb-20 " id="Categories">
            <div className='max-w-[1020px] mx-auto '>
            <h2 className='text-black font-bold text-xl font-Noto md:text-2xl'>Shopping Cart</h2>
                <div className='grid grid-col-12 p-10'>
                    <h1 className='col-start-1 col-end-6'>Product</h1>
                    <h1 className='col-start-6 col-end-8 ml-[-50px]'>Price</h1>
                    <h1 className='col-start-8 col-end-13 ml-[-10px]'>Total</h1>
                </div>
                {products.map(product => (
                    <div key={product.id} className='grid grid-col-12 p-5'>
                        <img className='col-start-1 col-end-6' src={product.img} alt="" />
                        <h1 className='col-start-6 col-end-8'>Rs. {product.price}</h1>
                        <h1 className='col-start-8 col-end-13'>Rs. {product.price}</h1>
                    </div>
                ))}
                <div className='grid  grid-col-12 grid-col-12 p-10'>
                    <p className='col-end-3'>SubTotal: Rs. {subtotal}</p>
                </div>
            </div>
        </div>
     );
}

export default ShoppingCart;
