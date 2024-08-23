import React from 'react';

function Card({ mainImage, mainText, secondaryImage, secondaryImageText, text }) {
  return (
    <section>
      <div>
        <img src={mainImage} alt={mainText ? mainText : 'Main image'} className='w-96 h-auto' />
      </div>
      <div>
        <div className='flex bg-white rounded-lg relative bottom-10 left-10 shadow-lg shadow-gray-500'>
          <img src={secondaryImage} alt={secondaryImageText?secondaryImageText:'logo'} className='rounded-full w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500' />
          <div className='my-auto font-semibold pl-4 text-xl p-3 rounded-lg'>
            {text ? text : 'hello user'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
