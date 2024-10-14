"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const SubscribeSection = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleClick = (index: number) => {
    // If the clicked section is already active, set it to null (toggle effect)
    setActiveSection(activeSection === index ? null : index);
  };
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Subscribe for Section</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Follow Us Section */}
      <div
        className={`p-6 rounded-lg text-center cursor-pointer ${
          activeSection === 0 ? 'bg-blue-500 text-white' : 'bg-purple-100'
        }`}
        onClick={() => handleClick(0)}
      >
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <p className="text-sm text-gray-500 mb-4">
          Follow Us for Tasty Updates and Culinary Inspiration
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="#"><FaGoogle className="h-8 w-8" /></Link>
          <Link href="#"><FaTiktok className="h-8 w-8" /></Link>
          <Link href="#"><FaInstagram className="h-8 w-8" /></Link>
          <Link href="#"><FaTwitter className="h-8 w-8" /></Link>
          <Link href="#"><FaPinterest className="h-8 w-8" /></Link>
          <Link href="#"><FaYoutube className="h-8 w-8" /></Link>
        </div>
      </div>

      {/* Subscribe Section */}
      <div
        className={`p-6 rounded-lg text-center cursor-pointer ${
          activeSection === 1 ? 'bg-blue-500 text-white' : 'bg-purple-100'
        }`}
        onClick={() => handleClick(1)}
      >
        <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
        <p className="text-sm mb-4">
          Be the first to know about the latest product news & get exclusive offers.
        </p>
        <form className="flex items-center justify-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="px-4 py-2 rounded-md w-2/3 text-gray-800"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md">Subscribe</button>
        </form>
      </div>

      {/* From the Blog Section */}
      <div
        className={`p-6 rounded-lg text-center cursor-pointer ${
          activeSection === 2 ? 'bg-blue-500 text-white' : 'bg-purple-100'
        }`}
        onClick={() => handleClick(2)}
      >
        <h3 className="text-lg font-semibold mb-2">From The Blog</h3>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <Image
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image path
            alt="Blog Image"
            width={80}
            height={80}
            className="rounded-md mb-4 md:mr-4 md:mb-0"
          />
          <div className="text-left">
            <p className="text-sm text-gray-500">
              Embarking on a 1-week low-carb diet can lead to a range of effects on the body and mind...
            </p>
            <span className="text-sm text-gray-400">21 Aug 2024 08:30am</span>
          </div>
        </div>
      </div>
    </div>

      {/* Footer Links */}
      <div className="flex flex-row items-center mt-12 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-black">
          <span className="text-white font-bold bg-black">KALO</span>FY
        </div>
        <p className="mt-2 text-center">Your <span className="text-blue-600 font-semibold">macros</span>, your way</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left text-sm text-gray-500 mt-6">
          <div className="flex flex-col items-center md:items-start">
            
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
            <a href="#">Subscribe</a>
            <a href="#">Follow Us</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800 mb-2">How it works</h4>
            <a href="#">Testimonials</a>
            <a href="#">Kitchen And Delivery Schedule</a>
            <a href="#">Let's Compare</a>
            <a href="#">Why Choose Us</a>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800 mb-2">Partnerships & Affiliates</h4>
            <a href="#">Sustainability</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQs</a>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h3 className="font-semibold text-black text-center">We Accept</h3>
          <div className="flex justify-center space-x-2 mt-2">
            <Image src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Visa" width={40} height={25} />
            <Image src="https://images.pexels.com/photos/5239818/pexels-photo-5239818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mastercard" width={40} height={25} />
            <Image src="https://images.pexels.com/photos/4968638/pexels-photo-4968638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Amex" width={40} height={25} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 ml-[-20] text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center">
        <p>&copy; 2023 Kalofy. All Rights Reserved.</p>
        <Link href="#" className="mt-2 md:mt-0 md:ml-2">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default SubscribeSection;
