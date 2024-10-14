"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const LetsCompare: React.FC = () => {
  // State to manage the selected column
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);

  // Comparison features
  const features = [
    'AI Meal Generation',
    'Nutritional Value',
    'Ingredient Sourcing',
    'Taste and Culinary Experience',
    'Packaging and Sustainability',
    'Customer Support',
    'Meal Variety',
    'Dietary Restrictions',
  ];

  // Click handler for table headers
  const handleHeaderClick = (column: string) => {
    setSelectedColumn(column);
  };

  // Function to determine the background color of the column
  const getColumnBgColor = (column: string) => {
    return selectedColumn === column ? 'bg-pink-600 text-white' : '';
  };

  const slides = [
    {
      src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Seared steak",
      title: "Seared steak with smoky chimichurri and garlic broccoli mash",
      description: "A delicious grilled chicken dish served with savory couscous and herbs.",
      calories: 325,
      fat: 14,
      carbs: 55,
      protein: 10,
    },
    {
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "African Cuisine",
      title: "Grilled African spiced chicken with couscous",
      description: "A delicious grilled chicken dish served with savory couscous and herbs.",
      calories: 400,
      fat: 12,
      carbs: 60,
      protein: 30,
    },
    {
      src: "https://images.pexels.com/photos/8230017/pexels-photo-8230017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Healthy Salad",
      title: "Fresh garden salad with vinaigrette dressing",
      description: "A light salad made with fresh vegetables and a tangy vinaigrette.",
      calories: 200,
      fat: 8,
      carbs: 25,
      protein: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Let's Compare</h2>
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Comparison Table */}
        <div className="w-full lg:w-2/3">
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr className={`bg-gray-100`}>
                <th className="text-left text-lg font-semibold p-4">FEATURES</th>
                <th
                  className={`text-left text-lg font-semibold p-4 cursor-pointer ${getColumnBgColor('Kalofy')}`}
                  onClick={() => handleHeaderClick('Kalofy')}
                >
                  KALOFY
                </th>
                <th
                  className={`text-left text-lg font-semibold p-4 cursor-pointer ${getColumnBgColor('Industry')}`}
                  onClick={() => handleHeaderClick('Industry')}
                >
                  INDUSTRY
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`border-t`}>
                  <td className="p-4 text-lg">{feature}</td>
                  <td className={`p-4 ${getColumnBgColor('Kalofy')}`}>
                    <div className="flex justify-center">
                      {selectedColumn === 'Kalofy' ? (
                        <span className="text-white">
                          <FaCheckCircle size={24} />
                        </span>
                      ) : (
                        <span className="text-red-600">
                          <FaTimes size={24} />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className={`p-4 ${getColumnBgColor('Industry')}`}>
                    <div className="flex justify-center">
                      {selectedColumn === 'Industry' ? (
                        <span className="text-white">
                          <FaCheckCircle size={24} />
                        </span>
                      ) : (
                        <span className="text-red-600">
                          <FaTimes size={24} />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Food Image with Nutritional Info */}
        <div className="relative w-full lg:w-1/3">
          {/* Description above image */}
          <div className="absolute top-20 right-0 left-0 bg-white overflow-hidden shadow-lg p-4 rounded-lg z-10 flex flex-col justify-between max-w-xs mx-auto">
            <div>
              <h3 className="font-semibold text-sm mb-2">{slides[currentSlide].title}</h3>
              <p className="text-gray-600 text-sm mb-2">{slides[currentSlide].description}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <div>
                <p>Fat</p>
                <p className="text-sm font-semibold">{slides[currentSlide].fat}g</p>
              </div>
              <div>
                <p>Carbs</p>
                <p className="text-sm font-semibold">{slides[currentSlide].carbs}g</p>
              </div>
              <div>
                <p>Protein</p>
                <p className="text-sm font-semibold">{slides[currentSlide].protein}g</p>
              </div>
            </div>
          </div>

          {/* Food Image */}
          <div className="relative mt-16">
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              width={1000}
              height={1000}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsCompare;
