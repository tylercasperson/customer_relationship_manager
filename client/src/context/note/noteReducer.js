import {
  GET_NOTES,
  COUNT_NOTES,
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
    case COUNT_NOTES:
      return {
        ...state,
        countNotes: action.payload,
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
        notes: action.payload,
        loading: false,
      };

    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       (contact) => contact._id !== action.payload
    //     ),
    //     loading: false,
    //   };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        loading: false,
      };
    case NOTE_ERROR:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
