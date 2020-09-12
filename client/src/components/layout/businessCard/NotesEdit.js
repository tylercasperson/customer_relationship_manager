import React, { useContext, useEffect } from 'react';
import NoteContext from '../../../context/note/noteContext';

const NotesEdit = (props) => {
  const noteContext = useContext(NoteContext);
  const { notes, id, getNotes, countNotes, deleteNote } = noteContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const removeNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className='relative h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-yellow-300 h-full w-full px-2 py-2 shadow-xl'>
        {notes.length === undefined
          ? null
          : notes
              .filter(
                (businessNote) =>
                  businessNote.businessId === props.businessMatch
              )
              .map((businessNote) => (
                <div key={businessNote.id}>
                  {/* remove the below lines after crud is complete */}
                  {businessNote.id}
                  {'   '}
                  <input
                    type='text'
                    defaultValue={businessNote.note}
                    className='bg-yellow-300 w-10/12'
                  />
                  <button onClick={() => removeNote(businessNote.id)}>
                    <i className='fas fa-trash-alt absolute right-0 px-3'></i>
                  </button>
                </div>
              ))}

        <input
          type='text'
          className='bg-yellow-200 w-full'
          placeholder='New notes go here'
        />

        <button
          className='bg-green-300 hover:bg-green-500 p-2 rounded-lg absolute bottom-0 right-0 m-4'
          // onClick={props.clickSave}
        >
          <i className='fas fa-save'></i> Save
        </button>
      </div>
    </div>
  );
};

export default NotesEdit;
