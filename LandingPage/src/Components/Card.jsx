import React from 'react';

function Card({ mainImage, mainText, secondaryImage, secondaryImageText, text }) {
  return (
    <section className='flex flex-col items-center p-4 md:p-6'>
      <div className='mb-4'>
        <img 
          src={mainImage} 
          alt={mainText ? mainText : 'Main image'} 
          className='w-full md:w-96 h-auto rounded-lg'
        />
      </div>
      <div className='flex flex-col items-center bg-white rounded-lg shadow-lg shadow-gray-500 p-4'>
        <img 
          src={secondaryImage} 
          alt={secondaryImageText ? secondaryImageText : 'Secondary image'} 
          className='rounded-full w-16 h-16 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'
        />
        <div className='mt-2 text-center font-semibold text-xl md:text-lg'>
          {text ? text : 'hello user'}
        </div>
      </div>
    </section>
  );
}

export default Card;
