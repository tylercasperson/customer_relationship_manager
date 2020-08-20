import React from 'react';

const Service = (props) => {
  return (
    <div className='inline-flex border-black border-2 rounded-lg bg-blue-600 text-center text-white p-1 m-2'>
      {props.serviceOffered}
    </div>
  );
};

export default Service;
