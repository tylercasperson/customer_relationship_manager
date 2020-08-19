import React from 'react';

function Contact(props) {
  return (
    <div className='w-20 p-2 rounded-lg'>
      <img src={'https://source.unsplash.com/random'} alt='contact' />

      <p className='text-sm'>{props.contactName}</p>
    </div>
  );
}

export default Contact;
