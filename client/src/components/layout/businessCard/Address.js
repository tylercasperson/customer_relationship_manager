import React from 'react';

const Address = (props) => {
  return (
    <div className='h-64 w-128 bg-black bg-contain flex max-w-md shadow-lg rounded-lg overflow-hidden'>
      <div className='w-4/12 bg-cover'>
        <img src={'https://source.unsplash.com/random'} alt='businessCard' />
      </div>
      <div className='w-10/12 p-4'>
        <h1 className='text-white font-bold text-2xl'>{props.businessName}</h1>
        <br />
        <div className='mt-2 text-white text-sm'>{props.address1}</div>
        <div className='mt-2 text-white text-sm'>{props.address2}</div>
        <div className='flex'>
          <div className='mt-2 text-white text-sm'>{props.city}, </div>
          <div className='px-2 mt-2 text-white text-sm'> {props.state}</div>
          <div className='mt-2 text-white text-sm'> {props.zip}</div>
        </div>
        <div className='mt-2 text-white text-sm'> {props.country}</div>
        <div className='mt-2 text-white text-sm'>{props.contactInfo}</div>
      </div>
    </div>
  );
};

export default Address;
