"use client";  

import React, { useState } from 'react';
import Link from 'next/link';  
import { AiOutlineUser } from 'react-icons/ai';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';  // Added hamburger and close icon
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  // State to toggle search input field
  const [showSearch, setShowSearch] = useState(false);
  
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for item count
  const [itemCount, setItemCount] = useState(3); // Initialize item count

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <span className="text-white bg-black">KALO</span>FY
        </div>

        {/* Regular Navbar Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-700 hover:text-blue-600" href="/">
            Recepie Generation
          </Link>
          <Link className="text-gray-700 hover:text-blue-600" href="/courses">
            Calculate Your Macros
          </Link>
          <Link className="text-gray-700 hover:text-blue-600" href="/classes">
            How It Works
          </Link>
        </div>

        {/* Icons and Search Button */}
        <div className="flex items-center space-x-4">
          {/* Toggle search input field */}
          <div className="relative">
            <FaSearch
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={() => setShowSearch(!showSearch)} // Toggle search
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full mt-2 right-0 w-[200px] p-2 border rounded-lg shadow-md focus:outline-none"
                style={{ zIndex: 1000 }} // Ensure it's visible above other elements
              />
            )}
          </div>

          {/* User Icon */}
          <AiOutlineUser className="text-gray-600 text-2xl cursor-pointer" />

          {/* Shopping Bag Icon with item count */}
          <div className="relative">
            <IoBagHandleOutline className="text-gray-600 text-2xl cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>

          {/* Hamburger Icon for mobile (shown only on mobile) */}
          <div className="md:hidden">
            {!isMobileMenuOpen ? (
              <FaBars
                className="text-gray-600 text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)} // Open the mobile menu
              />
            ) : (
              <FaTimes
                className="text-gray-600 text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible only on small screens when hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <Link className="block text-gray-700 hover:text-blue-600 py-2" href="/">
            Recepie Generation
          </Link>
          <Link className="block text-gray-700 hover:text-blue-600 py-2" href="/courses">
            Calculate Your Macros
          </Link>
          <Link className="block text-gray-700 hover:text-blue-600 py-2" href="/classes">
            How It Works
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
