import React from 'react';

function Contact() {
  return (
    <div className='w-32 rounded-lg border-4 border-green-600 overflow-hidden'>
      <div className='flex'>
        <img src={'https://source.unsplash.com/random'} alt='contact' />
      </div>
      <p className='text-sm'>Name</p>
      <p className='text-sm'>Department</p>
    </div>
  );
}

export default Contact;
