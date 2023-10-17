import React from 'react';

const Hero = () => {
    return (
        <div className="grid grid-cols-12 items-center w-full h-[290px] md:h-[477px] bg-mint-blue">
            <div className="z-10 col-start-3 ml-[-20px] col-end-10 text-slate-700 text-7xl font-bold tracking-tight w-full max-md:max-w-full max-md:text-4xl  row-start-1 row-end-2">
                <p>Nature's Finest<br></br>Farm's Best</p>
                <p className='text-xl font-medium tracking-normal mt-3 md:text-2xl'>Cultivating Health.Growing Happiness</p>
            </div>
            <img className="row-start-1 row-end-2 col-start-5 col-end-13 w-[600px]
            md:col-start-8 ml-11" src="src\images\Hreo-img.png" alt="" />
        </div>
    );
}

export default Hero;
