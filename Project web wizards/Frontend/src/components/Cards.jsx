const Cards = () => {
    return (
        <div className="bg-white px-10 pt-10 pb-20 " id="Cards">
            <div className='max-w-[1020px] mx-auto '>
                <div className='grid grid-cols-12 gap-2 mt-10'>
                    <div className=" px-10 bg-pink col-start-1 col-end-13 lg:col-span-6 flex items-center h-[350px]">
                        <div>
                            <p className="text-2xl font-bold font-Noto">Free Delivery</p><br /><p className="text-gray-600 font-normal">Shop for above Rs.500 and get free delivery anywhere</p>
                            <button className='p-3 mt-5 text-center font-Noto text-white rounded-md shadow-lg text-sm col-start-1 col-end-5  bg-jade hover:bg-sea-green'>
                                Shop Now
                            </button>
                        </div>
                        <img className="w-[184px] h-[289px] object-cover" src="src\images\Offer1-img.png" alt="" />
                    </div>
                    <div className="bg-blue pl-10 col-start-1 col-end-13 lg:col-span-6 flex items-center h-[350px]">
                        <div>
                            <p className="text-2xl font-bold font-Noto">Organic Food</p><br /><p className="text-gray-600">Save up to 60% off on your first order</p>
                            <button className='p-3 mt-5 text-center font-Noto text-white rounded-md shadow-lg text-sm col-start-1 col-end-5  bg-jade hover:bg-sea-green'>
                                Order Now
                            </button>
                        </div>
                        <img className="w-[275px] h-[258px]" src="src\images\Offer2-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
