"use client";
import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    title: "Fresh, Nutritious Meals Delivered Directly to your Door",
    description: "Healthy fresh, nutritious meals crafted for your well-being—savor delicious, balanced dishes that make healthy eating simple and enjoyable.",
    imageUrl: "https://images.pexels.com/photos/7535151/pexels-photo-7535151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Delicious Meals for Every Lifestyle",
    description: "Whether you’re vegetarian, vegan, or gluten-free, we have something that’s right for you.",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-indigo-900 h-[500px] relative">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 text-white text-4xl bg-gray-700 p-3 rounded-full hover:bg-gray-500"
      >
        &#10094;
      </button>

      {/* Slide Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 lg:px-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-white space-y-4 lg:space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{slides[currentIndex].title}</h1>
          <p className="text-base md:text-lg">{slides[currentIndex].description}</p>
          <button className="bg-transparent border border-white text-white w-32 px-4 py-2 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-lg mb-4 lg:mb-0">
          <Image
            src={slides[currentIndex].imageUrl}
            
            alt="Food image"
            className="w-full h-auto object-cover rounded-lg lg:hidden" // Hidden on large screens
          />
        </div>
      </div>

      {/* Image Section for Larger Screens */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden rounded-lg">
        <Image
          src={slides[currentIndex].imageUrl}
          alt="Food image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 text-white text-4xl bg-gray-700 p-3 rounded-full hover:bg-gray-500"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
