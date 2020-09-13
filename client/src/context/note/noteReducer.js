import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  NOTE_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        loading: false,
      };
    case NOTE_ERROR:
      return {
        ...state,
        noteError: action.payload,
      };
    default:
      return state;
  }
};
