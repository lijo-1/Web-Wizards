const Footer = () => {
    return (
        <div className="bg-mint-blue px-10 pt-16 pb-10 " id="Footer">
            <div className='max-w-[1020px] mx-auto flex justify-between'>
                <div>
                    <p className="font-bold text-black text-2xl">Farm Fresh</p>
                    <p className="font-semibold text-black text-md mt-5">Address: 1762 School House Road</p>
                    <p className="font-semibold text-black text-md ">Call Us: 1233-777</p>
                    <p className="font-semibold text-black text-md ">Email: farmfresh@contact.com</p>
                </div>
                <div>
                <p className="font-semibold text-black text-xl">Useful Links</p>
                    <p className="font-normal text-black text-md mt-5">Categories</p>
                    <p className="font-normal text-black text-md ">Products</p>
                    <p className="font-normal text-black text-md ">Cart</p>
                </div>
            </div>
            <div className="max-w-[1020px] mx-auto flex justify-between mt-10 items-center">
                <p className="text-xs">© 2022, All rights reserved</p>
                <img className="object-fit w-[150px]" src="src\images\Socialmedia-icons.png" alt="" />
            </div>
        </div>
    );
}

export default Footer;