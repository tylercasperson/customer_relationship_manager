import React, { useContext, useEffect } from 'react';
import NoteContext from '../../../context/note/noteContext';

const Notes = (props) => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes } = noteContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='relative h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div
        className='bg-yellow-300 h-full w-full px-2 py-2 shadow-xl'
        placeholder='Notes go here...'
      >
        {notes.length === undefined
          ? null
          : notes.filter(
              (businessNote) => businessNote.businessId === props.businessMatch
            ).length === 0
          ? 'Notes go here...'
          : notes
              .filter(
                (businessNote) =>
                  businessNote.businessId === props.businessMatch
              )
              .map((businessNote) => (
                <div key={businessNote.id} onClick={props.clickEdit}>
                  {businessNote.note}
                </div>
              ))}

        <div className='absolute bottom-0 right-0'>
          <button
            className='bg-green-300 hover:bg-green-500 p-2 rounded-lg m-4'
            onClick={props.clickEdit}
          >
            <i className='fas fa-edit'></i> Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
