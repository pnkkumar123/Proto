"use client";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import Image from 'next/image';
import { useState } from 'react';

const KitchenSchedule = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-0">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Kitchen Schedule</h1>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Left Side: Video Player */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
          <video
            src="https://cdn.pixabay.com/video/2024/09/24/233024_large.mp4" // replace with your actual video source
            controls
            className="rounded-lg shadow-lg w-full"
            onPlay={handleVideoPlay}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Middle: Text and Icons */}
        <div className="w-full lg:w-1/3 text-center lg:text-left lg:mx-8 py-8 lg:py-0">
          <p className="mb-4 text-sm md:text-base">Optimize your Kitchen Workflow and Delivery Schedules Effortlessly</p>
          <ul className="text-left space-y-3">
            <li className="flex items-center space-x-2">
              <FaRegCheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-sm md:text-base">Deliveries available Monday to Saturday with customizable time slots, ensuring convenience</span>
            </li>
            <li className="flex items-center space-x-2">
              <GoXCircle className="h-6 w-6 text-pink-500" />
              <span className="text-sm md:text-base">No deliveries on Sunday, providing a day for rest and preparation</span>
            </li>
            <li className="flex items-center space-x-2">
              <GoXCircle className="h-6 w-6 text-pink-500" />
              <span className="text-sm md:text-base">Choose delivery times available each day except Sunday.</span>
            </li>
          </ul>

          {/* Delivery Days Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6 flex-wrap">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="flex flex-col items-center">
                <FaRegCheckCircle className="h-8 w-8 text-green-500" />
                <span className="text-xs md:text-sm">{day}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <GoXCircle className="h-8 w-8 text-pink-500" />
              <span className="text-xs md:text-sm">Sun</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/3 lg:ml-8 relative overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7535151/pexels-photo-7535151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // replace with your actual image path
            alt="Food image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg" // Removed translate for mobile responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default KitchenSchedule;
