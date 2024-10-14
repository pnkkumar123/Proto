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
      <div className="ml-6 flex-1 text-center">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="mt-4 text-gray-700">&quot;{text}&quot;</p>
        <div className="flex items-center justify-center mt-4">
          <div className='flex flex-col'>
            <div>
              <Image 
                src={imageUrl} 
                alt={name} 
                width={40} 
                height={40} 
                className="rounded-full h-5 w-5" 
              />
            </div>
            <div className="flex text-yellow-400">
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <span key={index}>★</span>
              ))}
              {rating % 1 !== 0 && <span>☆</span>}
            </div>
          </div>
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
