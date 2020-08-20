import React from 'react';

const Introduction = (props) => {
  return (
    <div className='flex h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='w-1/3 bg-cover'>
        <img src={'https://source.unsplash.com/random'} alt='businessCard' />
      </div>
      <div className='p-4'>
        <h1 className='text-gray-900 font-bold text-2xl'>
          {props.businessName}
        </h1>
        <h5 className='text-gray-900 text-l'>{props.slogan}</h5>
        <h5 className='text-gray-900 text-l'>{props.tagLine}</h5>
        <div className='mt-2 text-gray-600 text-m'>{props.introduction}</div>
        <div className='flex align-center mt-2'>{props.rating}</div>
        {props.industries}
      </div>
    </div>
  );
};

export default Introduction;
