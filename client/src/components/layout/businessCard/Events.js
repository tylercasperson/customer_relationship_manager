import React from 'react';

const Events = () => {
  return (
    <div className='flex h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-hidden'>
      <div className='flex h-32 w-full'>
        <div className='block w-48 text-center'>
          <h5 className='text-gray-900'>Trade Show ABC</h5>

          <div className='text-gray-600 text-sm'>9/5/2020 to 9/10/2020</div>
          <div className='text-gray-600 text-sm'>9am to 8pm</div>
          <div className='text-gray-600 text-sm'>Booth 510</div>
          <div className='text-gray-600 text-sm'>30% Discount preshow</div>
        </div>

        <div className='flex w-8/12'>
          <button className='bg-teal-400 px-2 w-auto text-black flex-wrap text-xs font-bold rounded'>
            Products
          </button>
          <button className='bg-green-300 w-auto text-black flex-wrap text-xs font-bold rounded'>
            Event Specials
          </button>
          <button className='bg-orange-500 w-auto text-black flex-wrap text-xs font-bold rounded'>
            Contacts attending
          </button>
          <button className='bg-yellow-500 w-auto text-black flex-wrap text-xs font-bold rounded'>
            Event Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
