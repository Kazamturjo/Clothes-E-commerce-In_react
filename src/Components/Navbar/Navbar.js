import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Pages/Product/Cards';
import Cart from '../Cart/Cart';

const Navbar = ({cart,setCart}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.cart-toggle-button') && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isCartOpen]);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };



  useEffect(() => {
    try {
      const storedData = localStorage.getItem('cart');
      if (storedData) {
        setCart(JSON.parse(storedData));
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
  
      setCart([]);
    }
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <nav className={`bg-gray-800 p-4 transition-all duration-300 ${isScrolled > 0 ? 'fixed top-0 left-0 w-full z-50 bg-orange-300 text-black' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to='/' className="text-white lg:text-4xl text-2xl font-bold">#Never give up</Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden relative">
          <button
            className={`block absolute right-52 top-4 lg:hidden ease-in-out rounded-sm border-stroke text-white shadow-sm transition-transform duration-300 border transform`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Responsive Navigation */}
        <div className={`md:flex items-center space-x-4 text-white fixed top-0 right-0 h-screen bg-gray-800 z-50 p-11 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className='text-white space-y-5'>
            <li className='hover:text-blue-500'>Tshirt</li>
            <li className='hover:text-blue-500'>Hoddie</li>
            <li className='hover:text-blue-500'>Jacket</li>
          </ul>
        </div>

        {/* Search Input */}
        
        <div className="md:flex hidden items-center flex-grow justify-center">
        <Link to='shop'>
        <div className="relative" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
      <ul className='text-white mr-4 md:mr-20 cursor-pointer'>
        Shop
        {isHovered && (
          <ul className="absolute top-4 w-[500px] h-96 p-4 rounded-lg  pt-6 bg-gray-800 text-white py-2 mt-2 space-y-2">
            <li className='hover:text-blue-500'>Tshirt</li>
            <li className='hover:text-blue-500'>Hoddie </li>
            <li className='hover:text-blue-500'>Jacket</li>
          </ul>
        )}
      </ul>
    </div>
    </Link>
    <div className='relative'>

    
          <input
            type="text"
            placeholder="Search"
            className={`bg-gray-700 text-white px-3 py-1 md:w-[700px] h-11 ${isScrolled ? 'bg-white':""}` }
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link to='/product'>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white absolute top-2 right-2">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
</svg>
</Link>
</div>

        </div>

        <div className="flex items-center gap-2 2xsm:gap-4">
        <button
        onClick={handleToggleCart}
        className={`relative transition-transform duration-500 transform ${
          isCartOpen ? 'bg-blue-500' : 'bg-gray-500'
        } hover:bg-blue-600 p-2 rounded-full cart-toggle-button`}
        aria-label="Toggle Cart"
      >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
    <span className="absolute bg-blue-400 text-white rounded-full -top-3 -right-3 w-4 h-6 text-center">
          {cart?.length}
        </span>
  </button>
  {isCartOpen && (
        <div className="transition-all duration-300 ease-in-out">
          <Cart cart={cart} setCart={setCart} onClose={handleCloseCart} />
        </div>
      )}
</div>
      </div>
    </nav>
  );
};

export default Navbar;
