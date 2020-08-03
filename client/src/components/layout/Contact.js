import React from 'react';

function Contact() {
  return (
    <div className='h-30 w-20 p-1 rounded-lg border-4 border-green-600 overflow-hidden'>
      <div className='flex'>
        <img src={'https://source.unsplash.com/random'} alt='contact' />
      </div>
      <p className='text-sm'>Name</p>
    </div>
  );
}

export default Contact;
