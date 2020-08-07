import React from 'react';

const Events = () => {
  return (
    <div className='flex h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-hidden'>
      <div className='flex h-32 w-full'>
        <img
          className='h-32 w-16'
          src={'https://source.unsplash.com/random'}
          alt='businessCard'
        />
        <div className='block w-48 text-center'>
          <h5 className='text-gray-900'>Trade Show ABC</h5>

          <div className='text-gray-600 text-sm'>9/5/2020 to 9/10/2020</div>
          <div className='text-gray-600 text-sm'>9am to 8pm</div>
          <div className='text-gray-600 text-sm'>Booth 510</div>
          <div className='text-gray-600 text-sm'>30% Discount preshow</div>
        </div>

        <button className='bg-teal-400 w-16 text-black text-xs font-bold rounded'>
          Products
        </button>
        <button className='bg-green-300 w-16 text-black flex-wrap text-xs font-bold rounded'>
          Event Specials
        </button>
        <button className='bg-orange-500 w-16 text-black flex-wrap text-xs font-bold rounded'>
          Contacts attending
        </button>
      </div>
    </div>
  );
};

export default Events;
