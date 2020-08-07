import React from 'react';

const CustomerReports = () => {
  return (
    <div className='block h-64 w-128 bg-indigo-300 shadow-lg rounded-lg overflow-hidden'>
      <div className='flex'>
        <h5 className='p-2 text-gray-900'>Report Name</h5>
        <div className='px-3'></div>
        <div className='p-2 text-black text-sm'>Brief decription</div>
      </div>
      <div className='w-11/12 h-1 bg-gray-600'></div>
    </div>
  );
};

export default CustomerReports;
