import React, { useState } from 'react';
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import flagImage from '../../assets/eng1.png';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-2 bg-white text-black shadow-md">
        {/* Logo */}
        <div>
          <img src={logoImage} alt="Logo" className="h-8" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <ul className="flex space-x-8">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
            <li className="hover:text-gray-500 cursor-pointer">Sign Up</li>
          </ul>
        </div>

        {/* Search Bar and Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="border border-gray-300 rounded-full p-2 flex items-center">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="px-3 py-1.5 rounded-md outline-none w-[330px]"
            />
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <CiSearch className="text-black" />
            </button>
          </div>
          <button className="bg-red-500 p-2 rounded-full hover:bg-red-600">
            <CiHeart className="text-white" />
          </button>
          <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600">
            <MdOutlineShoppingCart className="text-white" />
          </button>
          <div className="flex items-center space-x-2">
            <img src={flagImage} alt="English" className="h-5 w-5" />
            <p>English</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
            <li className="hover:text-gray-500 cursor-pointer">Sign Up</li>
            <div className="border border-gray-300 rounded-full p-2 flex items-center">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="px-3 py-1.5 rounded-md outline-none w-full"
              />
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                <CiSearch className="text-black" />
              </button>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                <CiHeart className="text-white" />
              </button>
              <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600">
                <MdOutlineShoppingCart className="text-white" />
              </button>
              <div className="flex items-center space-x-2">
                <img src={flagImage} alt="English" className="h-5 w-5" />
                <p>English</p>
              </div>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
