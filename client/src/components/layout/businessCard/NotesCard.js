import React from 'react';

const NotesCard = (props) => {
  return (
    <div className='max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-yellow-300 w-full h-40 shadow-xl'>
        Notes go here...{props.notes}
      </div>
    </div>
  );
};

export default NotesCard;
