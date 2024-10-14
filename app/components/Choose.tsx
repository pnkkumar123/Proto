"use client"
import React from 'react';
import { PiCookingPotFill } from "react-icons/pi";
import { FaEarthAsia } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";

const Choose: React.FC = () => {
  const data = [
    {
      title: 'Only Quality Ingredients',
      description: 'Our Focus on Plant rich',
      icon: <PiCookingPotFill size={80} /> 
    },
    {
      title: 'Source for Sustainability',
      description: 'Nutrient rich',
      icon: <FaEarthAsia size={80} />
    },
    {
      title: 'No Gluten',
      description: 'Vegan',
      icon: <LuVegan size={80} />
    }
  ];

  return (
    <div className='mb-10 px-4'>
      <div className="text-center">
        <h2 className="text-2xl md:text-xl font-bold">Why Choose Us</h2>
        <p className="text-blue-400">Features and benefits of Kalofy</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start mt-6 gap-6 md:gap-12"> {/* Stack cards on mobile and arrange in a row on larger screens */}
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"> {/* Added padding and rounded corners */}
            <div>{item.icon}</div> {/* Icon */}
            <div className="text-center mt-2"> {/* Centered text with top margin */}
              <h5 className="font-bold text-black text-lg md:text-xl">{item.title}</h5> {/* Responsive title size */}
              <p className="text-black text-sm md:text-base">{item.description}</p> {/* Responsive description size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
