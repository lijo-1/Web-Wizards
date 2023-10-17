const Categories = () => {

    const productlist = [
        {
            name: 'Peach',
            quantity: '20 Items',
            imageUrl:"src/images/image 3.png",
            bgcol:'#FEEFEA'
        },
        {
            name: 'Vegetables',
            quantity: '30 Items',
            imageUrl:"src/images/image 4.png",
            bgcol:'#FFF3FF'
        },
        {
            name: 'Strawberry',
            quantity: '10 Items',
            imageUrl:"src/images/image 5.png",
            bgcol:'#ECFFEC'
        },
        {
            name: 'Apple',
            quantity: '15 Items',
            imageUrl:"src/images/image 6.png",
            bgcol:'#F2FCE4'
        },
        {
            name: 'Orange',
            quantity: '12 Items',
            imageUrl:"src/images/image 7.png",
            bgcol:'#FEEFEA'
        },
        {
            name: 'Potato',
            quantity: '15 Items',
            imageUrl:"src/images/image 8.png",
            bgcol:'#ECFFEC'        
        },
        // Add more product data as needed
    ];

    return (
        <div className="bg-white px-10 pt-16 pb-20 " id="Categories">
            <div className='max-w-[1020px] mx-auto '>
                <h2 className='text-black font-bold text-xl font-Noto md:text-2xl'>Explore Categories</h2>
                <div className='grid grid-cols-12 gap-4 mt-10'>
                    {productlist.map((product, index) => (
                        <div
                            className={`relative group shadow-lg font-Noto font-semibold hover:cursor-pointer text-black col-span-6 md:col-span-3 lg:col-span-2 lg:hover:bg-gray-400  `} 
                            style={{ backgroundColor: `${product.bgcol}` }}
                            key={index}
                        >
                            <img className='mx-auto object-cover w-[101px] h-[101px]' src={product.imageUrl} alt={product.name} />

                            <div className='p-3 text-center'>
                                <h3>{product.name}</h3>
                                <p className='font-medium text-sm pb-2'>{product.quantity}</p>
                                {/* Add more product details here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;