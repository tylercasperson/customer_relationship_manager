import React, { useContext, useEffect } from 'react';
import BusinessContext from '../../../context/business/businessContext';

const Address = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, getBusinesses } = businessContext;

  const { businessName, address, city, state, phoneNumber } = businesses;

  useEffect(() => {
    getBusinesses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='h-64 w-128 bg-black bg-contain flex max-w-md shadow-lg rounded-lg overflow-hidden'>
      <div className='w-4/12 bg-cover'>
        <img src={'https://source.unsplash.com/random'} alt='businessCard' />
      </div>
      <div className='w-10/12 p-4'>
        <h1 className='text-white font-bold text-2xl'>{businessName}</h1>
        <div className='mt-2 text-white text-sm'>{address}</div>
        <div className='mt-2 text-white text-sm'>Address Line 2</div>
        <div className='flex'>
          <div className='mt-2 text-white text-sm'>{city}</div>
          <div className='mt-2 text-white text-sm'>, </div>
          {'  '}
          <div className='mt-2 text-white text-sm'> {state}</div>
        </div>
        <div className='mt-2 text-white text-sm'>Email</div>
        <div className='mt-2 text-white text-sm'>{phoneNumber}</div>
      </div>
    </div>
  );
};

export default Address;
