import React from 'react';

const ContactsToUse = (props) => {
  return (
    <div className='flex h-64 overflow-y-auto w-128 bg-green-200 shadow-lg rounded-lg'>
      <div className='block text-center mx-auto w-9/12'>
        {props.contactsToUse}
      </div>
    </div>
  );
};

export default ContactsToUse;
