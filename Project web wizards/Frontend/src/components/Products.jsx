
import { data } from "autoprefixer";
import { useState } from "react";
import { useEffect } from "react";
const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/buyer/products");
                const data = await response.json();
                console.log(data);
                setProducts([...data])
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
    
        fetchData(); // Call the asynchronous function inside useEffect
    
    }, [products.id]);
    

    console.log(products)

    return (
        <div className="bg-white px-10 pt-16 pb-20" id="Products">
            <div className='max-w-[1020px] mx-auto '>
                <h2 className='text-black font-bold text-lg font-Noto md:text-2xl'>Featured Products</h2>
                <div className='grid grid-cols-5 gap-4 mt-10'>
                    {products.map((product, index) => (
                        <div
                            className={`relative group bg-white  rounded-md shadow-xl font-Noto font-semibold text-green-950 col-span-6 md:col-span-3 lg:col-span-2 lg:hover:bg-gray-400 `}
                            key={index}
                        >
                            <img className='mx-auto w-[224px] h-[144px] object-fit' src="src\images\Rectangle 19-1.png" alt={product.name} />

                            <div className='p-3 text-center'>
                                <h3>{product.name}</h3>
                                <p className='font-medium text-sm pb-2'>[{product.quantity}]</p>
                                <p className='font-medium '>Rs.{product.price}</p>
                                <button className='w-full mt-4 p-2 text-center text-white rounded-md shadow-lg text-sm col-start-1 col-end-5  bg-jade hover:bg-sea-green 
                                lg:hidden lg:w-auto lg:p-3 lg:mt-0
                                lg:group-hover:block lg:absolute lg:z-10 lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]'>
                                    Add to cart
                                </button>

                                {/* Add more product details here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
