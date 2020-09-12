import React from 'react';

const NoteEditItem = (props) => {
  return (
    <div>
      <input
        type='text'
        defaultValue={props.default}
        className='bg-yellow-300 w-10/12'
      />
      <button onClick={props.deleteItem}>
        <i className='fas fa-trash-alt absolute right-0 px-3'></i>
      </button>
    </div>
  );
};

export default NoteEditItem;
