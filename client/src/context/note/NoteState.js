import React, { useReducer } from 'react';
import axios from 'axios';
import NoteContext from './noteContext';
import noteReducer from './noteReducer';
import {
  GET_NOTES,
  COUNT_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  NOTE_ERROR,
} from '../types';

const NoteState = (props) => {
  const initialState = {
    notes: [],
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  // Get Notes
  const getNotes = async () => {
    try {
      const res = await axios.get('/api/notes');

      dispatch({
        type: GET_NOTES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: NOTE_ERROR,
        payload: err.response,
      });
    }
  };

  // ???????? If I cant get this to work then I want it deleted
  // Count Notes
  const countNotes = async (businessId) => {
    try {
      const res = await axios.get('/api/notes/:' + businessId);

      dispatch({
        type: COUNT_NOTES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: NOTE_ERROR,
        payload: err.response,
      });
    }
  };

  // Delete Note
  const deleteNote = async (noteId) => {
    // console.log(noteId);
    // console.log(...noteId);
    console.log('start');
    try {
      await axios.delete(`/api/notes/${noteId}`);
      console.log('try');
      console.log(noteId);

      dispatch({
        type: DELETE_NOTE,
        payload: noteId,
      });
    } catch (err) {
      console.log('error');
      dispatch({
        type: NOTE_ERROR,
        payload: err,
      });
      console.log('error');
      console.log(noteId);
      console.log(err);
    }
    // dispatch({ type: DELETE_NOTE, payload: id });
    console.log('finish');
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        getNotes,
        countNotes,
        deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
