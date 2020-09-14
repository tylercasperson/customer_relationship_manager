import React, { useRef } from 'react';

const Events = (props) => {
  const specials = useRef('');

  const eventSpecials = () => {
    console.log(specials.current.classList);
    specials.current.classList.remove('hidden');
    console.log(specials.current.classList);
  };

  const atEvent = () => {};

  const eventLocation = () => {};

  return (
    <div className='relative h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-scroll'>
      <div className='flex h-32 w-full'>
        <div className='flex content-center w-7/12 self-center overflow-scroll'>
          <div className='w-48 mx-auto text-center'>
            {props.event}

            {/* <div class-Name ='text-gray-600 text-sm'>30% Discount preshow</div> */}
          </div>
        </div>

        <div className='absolute right-0 w-5/12'>
          <div className='flex h-32'>
            <button
              onClick={eventSpecials}
              className='bg-green-300 hover:bg-green-500 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
            >
              Event Specials
            </button>
            <button
              onClick={atEvent}
              className='bg-orange-400 hover:bg-orange-600 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
            >
              At the event
            </button>
            <button
              onClick={eventLocation}
              className='bg-yellow-400 hover:bg-yellow-600 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
            >
              Event Location
            </button>
          </div>
        </div>
      </div>

      <div className='hidden' ref={specials}></div>

      <hr className='border-1 border-black my-2' />
    </div>
  );
};

export default Events;
