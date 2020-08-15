import React, { useContext, useEffect } from 'react';
import BusinessContext from '../../../context/business/businessContext';

const AddressCard = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, getBusinesses } = businessContext;

  const { businessName, address, city, state, phoneNumber } = businesses;

  useEffect(() => {
    getBusinesses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='bg-gray-400 px-3 py-6'>
      <div className='bg-black flex max-w-md shadow-lg rounded-lg overflow-hidden'>
        <div className='w-1/3 bg-cover'>
          <img src={'https://source.unsplash.com/random'} alt='businessCard' />
        </div>
        <div className='w-2/3 p-4'>
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
          <div className='mt-2 text-white text-sm'>
            {businesses.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
