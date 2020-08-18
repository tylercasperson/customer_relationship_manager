import React from 'react';

const ContactReports = (props) => {
  return (
    <div className='block h-64 w-128 bg-indigo-300 shadow-lg rounded-lg overflow-hidden'>
      <div className='flex'>
        <h5 className='p-2 text-gray-900 w-4/12'>Report Name</h5>
        <div className='px-3'></div>
        <div className='p-2 text-black w-5/12'>Brief decription</div>
      </div>
      <div className='w-11/12 h-1 bg-gray-600'></div>
      {props.contactReports}
    </div>
  );
};

export default ContactReports;
