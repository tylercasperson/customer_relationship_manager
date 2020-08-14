import React from 'react';
import Industry from './Industry';

const BusinessCard = () => {
  return (
    <div className='flex h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='w-3/12 bg-cover'>
        <img src={'https://source.unsplash.com/random'} alt='businessCard' />
      </div>
      <div className='w-7/12 p-4'>
        <h1 className='text-gray-900 font-bold text-2xl'>Business Name</h1>
        <p className='mt-2 text-gray-600 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          exercitationem fuga id nam quia Lorem ipsum dolor sit amet consectetur
          adipisicing elit In odit exercitationem fuga id nam quia
        </p>
        <div className='flex align-center mt-2'>
          <i className='px-1 fas fa-star'></i>
          <i className='px-1 fas fa-star'></i>
          <i className='px-1 fas fa-star'></i>
          <i className='px-1 fas fa-star-half-alt'></i>
          <i className='px-1 far fa-star'></i>
        </div>
        <Industry />
      </div>
    </div>
  );
};

export default BusinessCard;
