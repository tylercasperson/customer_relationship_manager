import React from 'react';

const Industry = (props) => {
  return (
    <div className='inline-flex item-center justify-between mt-3'>
      <div className='bg-green-800 m-1 p-1 text-white text-xs font-bold rounded'>
        {props.industry}
      </div>
    </div>
  );
};

export default Industry;
