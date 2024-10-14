import React from 'react';

const Tape: React.FC = () => {
  return (
    <div className='flex justify-center items-center w-full h-14 bg-pink-200'>
      <div className='text-pink-500 text-center flex flex-row'>
        Enjoy a total of 
        <h5 className='font-bold text-pink-700'>$75 off</h5> throughout your 4 meals! 
        <p className='text-black font-bold underline'>Show Details</p>
      </div>
    </div>
  );
};

export default Tape;
