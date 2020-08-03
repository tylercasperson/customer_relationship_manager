import React from 'react';

function Product() {
  return (
    <div className='w-24 rounded-lg border-4 border-green-600 overflow-hidden'>
      <div className='flex'>
        <img src={'https://source.unsplash.com/random'} alt='contact' />
      </div>
      <p className='text-sm'>Name</p>
      <p className='text-sm'>Price</p>
    </div>
  );
}

export default Product;
