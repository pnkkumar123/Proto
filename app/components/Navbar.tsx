"use client";  

import React, { useState } from 'react';
import Link from 'next/link';  
import { AiOutlineUser } from 'react-icons/ai';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';  
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(3);

  // Functions to add or remove items
  const addItem = () => {
    setItemCount(prevCount => prevCount + 1);
  };

  const removeItem = () => {
    setItemCount(prevCount => Math.max(prevCount - 1, 0));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <span className="text-white bg-black">KALO</span>FY
        </div>

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

        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={() => setShowSearch(!showSearch)} 
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full mt-2 right-0 w-[200px] p-2 border rounded-lg shadow-md focus:outline-none"
                style={{ zIndex: 1000 }}
              />
            )}
          </div>

          <AiOutlineUser className="text-gray-600 text-2xl cursor-pointer" />

          <div className="relative">
            <IoBagHandleOutline className="text-gray-600 text-2xl cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>

          <div className="md:hidden">
            {!isMobileMenuOpen ? (
              <FaBars
                className="text-gray-600 text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            ) : (
              <FaTimes
                className="text-gray-600 text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </div>
        </div>
      </div>

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

      {/* Optional buttons to test item count */}
      <div className="mt-4 flex space-x-2">
        <button hidden onClick={addItem} className="bg-blue-500 text-white px-2 py-1 rounded">
          Add Item
        </button>
        <button hidden onClick={removeItem} className="bg-red-500 text-white px-2 py-1 rounded">
          Remove Item
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
