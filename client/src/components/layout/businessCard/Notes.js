import React from 'react';
import SocialLinks from './SocialLinks';

const CustomerNotes = (props) => {
  return (
    <div className='max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-yellow-300 w-full h-40 shadow-xl'>
        Notes go here...{props.notes}
      </div>
      <SocialLinks />
    </div>
  );
};

export default CustomerNotes;
