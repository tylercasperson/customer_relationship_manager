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

  // Add Note
  const createNote = async (note) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      console.log(note);
      console.log(config);

      const res = await axios.post('/api/notes', note, config);

      console.log(res);

      console.log(note);
      console.log(config);
      console.log(res.data);

      dispatch({
        type: CREATE_NOTE,
        payload: res.data,
      });
      console.log(res);
      console.log(res.data);
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err,
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

  // Update Note
  const updateNote = async (note) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/notes/${note.id}`, note, config);

      dispatch({
        type: UPDATE_NOTE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err,
      });
    }
  };

  // Delete Note
  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`/api/notes/${noteId}`);

      dispatch({
        type: DELETE_NOTE,
        payload: noteId,
      });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err,
      });
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        getNotes,
        countNotes,
        deleteNote,
        createNote,
        updateNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
