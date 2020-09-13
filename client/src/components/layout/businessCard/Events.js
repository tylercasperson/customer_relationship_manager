import React from 'react';

const Events = (props) => {
  return (
    <div className='flex h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-scroll'>
      <div className='flex h-32 w-full'>
        <div className='block w-48 text-center'>
          {props.event}

          {/* <div className='text-gray-600 text-sm'>30% Discount preshow</div> */}
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
