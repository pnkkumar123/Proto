"use client";
import Image from 'next/image';

type TestimonialProps = {
  name: string;
  role: string;
  rating: number;
  text: string;
  imageUrl: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, role, rating, text, imageUrl }) => {
  return (
    <div className="flex items-center bg-purple-100 p-8 w-full h-80 rounded-lg shadow-md mx-auto">
      <div className="ml-20">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={700} 
          height={600} 
          className="rounded-full h-80 w-80" 
        />
      </div>
      <div className="ml-6 flex-1 text-center"> {/* Use flex-1 to take the remaining space */}
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="mt-4 text-gray-700">"{text}"</p>
        <div className="flex flex-col items-center mt-4"> {/* Centered container for rating and image */}
          <div className="flex items-center justify-center">
            <Image 
              src={imageUrl} 
              alt={name} 
              width={40} 
              height={40} 
              className="rounded-full h-10 w-10" // Adjusted size for the small image
            />
            <div className="flex text-yellow-400 ml-2"> {/* Added margin for spacing */}
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <span key={index}>★</span>
              ))}
              {rating % 1 !== 0 && <span>☆</span>}
            </div>
          <span className="mt-2 text-gray-600">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
