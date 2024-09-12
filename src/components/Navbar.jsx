import React, { useState } from 'react';
import Logo from '/images/logo.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const Navbar = () => {
  // State to control the sidebar menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <nav className='shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>

          {/* Sidebar Toggle Button for Mobile (Hamburger Menu on the left) */}
          <div className='md:hidden'>
            <button className='text-gray-500' onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
          </div>

          {/* Logo Section */}
          <div className='flex items-center'>
            <NavLink to="/" className="flex items-center">
              <img src={Logo} className='w-16' alt="Logo" />
              <div className='font-bold p-2 text-purple-500 text-xl sm:text-2xl'>
                <span>Super Market</span>
              </div>
            </NavLink>
          </div>

          {/* Cart Section for Mobile and Desktop (Cart on the right) */}
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <NavLink to="/cart" className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket">
                  <path d="M15 11l-1 9" />
                  <path d="M19 11l-4-7" />
                  <path d="M2 11h20" />
                  <path d="M3.5 11l1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                  <path d="M4.5 15.5h15" />
                  <path d="M5 11l4-7" />
                  <path d="M9 11l1 9" />
                </svg>
                <span className='absolute top-0 right-0 bg-purple-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </NavLink>
            </div>

            {/* Login Button for Desktop */}
            <div className='hidden md:flex'>
              <NavLink to="/login" className="hover:bg-gray-200 p-1 rounded-full">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className={`fixed inset-0 z-50 flex`}>
          <div className='bg-white w-64 sm:w-80 h-full shadow-xl p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img src={Logo} className='w-12 h-12' alt="Logo" />
                <span className='text-purple-500 font-bold text-xl ml-2'>Super Market</span>
              </div>
              <button onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className='mt-6'>
              <NavLink to="/signin" className='block border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-center py-3 rounded-full mb-4 transition-all duration-300' onClick={toggleSidebar}>
                เข้าสู่ระบบ
              </NavLink>
              <NavLink to="/signup" className='block bg-purple-500 text-white hover:bg-purple-600 text-center py-3 rounded-full transition-all duration-300' onClick={toggleSidebar}>
                ลงทะเบียน
              </NavLink>
            </div>
          </div>

          {/* Background overlay */}
          <div className='flex-1 bg-black bg-opacity-50' onClick={toggleSidebar}></div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
