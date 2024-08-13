import React from 'react';
import logo from '../assets/logo.png';
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Subscription Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-xl font-semibold mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-2 rounded-l-md border-none text-black focus:outline-none"
            />
            <button className="bg-blue-500 p-2 rounded-r-md text-white flex items-center justify-center">
              <IoMdSend size={20} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h1 className="text-xl font-semibold mb-2">Support</h1>
          <p className="mb-1">111 Bijoy Sarani, Dhaka, Bangladesh</p>
          <p className="mb-1">exclusive@gmail.com</p>
          <p>+88995-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h1 className="text-xl font-semibold mb-2">Account</h1>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Order History</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Track My Order</a></li>
            <li><a href="#" className="hover:underline">Privacy & Cookies</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-xl font-semibold mb-2">Quick Links</h1>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
