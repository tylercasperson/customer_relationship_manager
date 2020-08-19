import React from 'react';

function Product(props) {
  return (
    <div className='p-3 w-20'>
      <img src={'https://source.unsplash.com/random'} alt='contact' />
      <p className='text-sm w-auto'>{props.productName}</p>
      <p className='text-sm'>{props.price}</p>
    </div>
  );
}

export default Product;
