
import { useState } from "react";
import { useEffect } from "react";
const Prod = () => {
    const [products, setProducts] = useState([])

    const productlist = [
        {
            tag:"Vegetable",
            name: 'Raddish',
            imageUrl: "src/images/Rectangle 19.png",
            price:100
        },
        {
            tag:"Vegetable",
            name: 'Potato',
            quantity: '30 Items',
            imageUrl: "src/images/Rectangle 19-1.png",
            price:100
        },
        {   
            tag:"Fruit",
            name: 'Tomato',
            quantity: '10 Items',
            imageUrl: "src/images/Rectangle 19-2.png",
            price:100
        },
        {
            tag:"Vegetable",
            name: 'Brocolli',
            quantity: '15 Items',
            imageUrl: "src/images/Rectangle 19-3.png",
            price:100
        },
        {
            tag:"Vegetable",
            name: 'Green Beans',
            quantity: '12 Items',
            imageUrl: "src/images/Rectangle 19-4.png",
            price:100
        },
        // Add more product data as needed
    ];

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://127.0.0.1:8000/buyer/products");
    //             const data = await response.json();
    //             console.log(data);
    //             setProducts([...data])
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };
    
    //     fetchData(); // Call the asynchronous function inside useEffect
    
    // }, [products.id]);

    // console.log(products)
    

    return (
        <div className="bg-white px-10 pt-16 pb-20" id="Products">
            <div className='max-w-[1020px] mx-auto '>
                <h2 className='text-black font-bold text-xl font-Noto md:text-2xl'>Featured Products</h2>
                <div className='grid grid-cols-12 gap-2 mt-10'>
                    {productlist.map((product, index) => (
                        <div
                            className={`relative group bg-white  rounded-md shadow-xl font-Noto font-semibold text-black col-span-6 md:col-span-3 lg:col-span-3  lg:hover:opacity-80`}
                            key={index}
                        >
                            <img className="mx-auto w-[200px] h-[130px] object-cover" src={product.imageUrl} alt={product.name} />

                            <div className='px-5 pt-5'>
                                <p className="text-sm font-normal text-gray-400">{product.tag}</p>
                                <h3>{product.name}</h3>
                                {/* <p className='font-medium text-sm pb-2'>[{product.quantity}]</p> */}
                                <div className="flex justify-between py-4 items-center">
                                    <p className='font-medium '>Rs.{product.price}</p>
                                    <button className='p-2 text-center text-white rounded-md shadow-lg text-sm col-start-1 col-end-5  bg-jade hover:bg-sea-green 
                                lg:hidden lg:w-auto lg:p-3 lg:mt-0
                                lg:group-hover:block lg:absolute lg:z-10 lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]'>
                                        Add to cart
                                    </button>
                                </div>
                                {/* Add more product details here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Prod;
