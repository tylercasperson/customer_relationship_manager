import React from 'react';

const ContactsToUse = () => {
  return (
    <div className='flex h-64 w-128 bg-green-200 shadow-lg rounded-lg overflow-hidden'>
      <img
        className='h-20 p-2'
        src={'https://source.unsplash.com/random'}
        alt='businessCard'
      />
      <div className='block text-center p-1'>
        <h5 className='text-gray-900'>Operations Manager</h5>
        <div className='text-gray-600 text-sm'>Sara Kindrix</div>
        <div className='text-gray-600 text-sm'>skindrix@gmail.com</div>
      </div>
    </div>
  );
};

export default ContactsToUse;
