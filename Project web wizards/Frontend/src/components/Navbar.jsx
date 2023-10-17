import { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { RiMenuFill } from 'react-icons/ri'
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleClick = () => {
    history.push('/click');
  };

  return (
    <div>
      <div className="z-50 sticky top-0 w-full" >
        <nav
          className={`grid grid-cols-12 max-w-[1100px] mx-auto font-Noto items-center px-5 py-2 ${scrolling || navbarOpen ? 'bg-black shadow-md' : ''}`}
        >
          {/* Large Screen Menu */}
          <ul className={`${scrolling ? 'text-white' : 'text-black'} font-medium text-xs hidden md:flex md:col-start-1 md:col-end-5 lg:text-base`}>
            <li className="p-3 ">
              <Link to="Products" spy={true} smooth={true} offset={-70} duration={200} className='cursor-pointer pb-1 hover:border-b-2 border-emerald' >Products</Link>
            </li>
            <li className="p-3 ">
              <Link to="Categories" spy={true} smooth={true} offset={-70} duration={200} className='cursor-pointer pb-1 hover:border-b-2 border-emerald'>Categories</Link>
            </li>
            <li className="p-3 ">
              <Link to="Footer" className='cursor-pointer pb-1 hover:border-b-2 border-emerald'>Contact Us</Link>
            </li>
          </ul>
          <h1 className={`text-center col-start-1 col-end-6 font-bold text-xl md:inline-block md:col-start-6 md:col-end-8 md:text-xl lg:text-2xl ${scrolling || navbarOpen ? 'text-white' : 'text-sea-green'} `}>
            FarmFresh
          </h1>

          <div className='col-start-11 col-end-13 flex items-center md:ml-6 md:col-start-12 md:col-end-13 lg:ml-14 lg:col-start-12 lg:col-end-13'>
            <RiShoppingCartFill onClick={handleClick} className={`w-5 h-10 mr-4 cursor-pointer  ${scrolling || navbarOpen ? 'fill-white' : ' fill-black'}`} />
            {navbarOpen ? (
              <RiCloseLine
                className='w-6 h-10 cursor-pointer fill-white lg:w-8'
                onClick={toggleNav}
              />
            ) : (
              <RiMenuFill
                className={`w-5 h-10 cursor-pointer ${scrolling ? 'fill-white' : ' fill-black'} md:hidden lg:hidden`}
                onClick={toggleNav}
              />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-40 flex justify-center items-center w-screen h-screen  fixed bg-black text-white text-2xl  ${navbarOpen ? 'block' : 'hidden'}`}
      >
        <ul className="">
          <li className="font-semibold">
            <Link to="Products" spy={true} smooth={true} offset={-70} duration={200} className='cursor-pointer hover:border-b border-sea-green' onClick={toggleNav}>Products</Link>
          </li>
          <li className="font-semibold">
            <Link to="Categories" spy={true} smooth={true} offset={-70} duration={200} className='cursor-pointer hover:border-b border-sea-green' onClick={toggleNav}>Categories</Link>
          </li>
          <li className="font-semibold">
            <Link to="Footer" className='cursor-pointer hover:border-b border-sea-green' onClick={toggleNav}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
