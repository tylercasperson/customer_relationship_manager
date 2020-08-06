import React from 'react';

const NotesCard = (props) => {
  return (
    <div className='flex h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-yellow-300 h-full w-full px-2 py-2 shadow-xl'>
        Notes go here...{props.notes}
      </div>
    </div>
  );
};

export default NotesCard;
