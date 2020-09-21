import {
  GET_PLACEHOLDERS,
  CREATE_PLACEHOLDER,
  UPDATE_PLACEHOLDER,
  DELETE_PLACEHOLDER,
  PLACEHOLDER_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PLACEHOLDERS:
      return {
        ...state,
        placeholders: action.payload,
        loading: false,
      };
    case CREATE_PLACEHOLDER:
      return {
        ...state,
        placeholders: [...state.placeholders, action.payload],
        loading: false,
      };
    case UPDATE_PLACEHOLDER:
      return {
        ...state,
        placeholders: state.placeholders.map((holder) =>
          holder.id === action.payload.id ? action.payload : holder
        ),
      };
    case DELETE_PLACEHOLDER:
      return {
        ...state,
        placeholders: state.placeholder.filter(
          (placeholder) => placeholder.id !== action.payload
        ),
        loading: false,
      };
    case PLACEHOLDER_ERROR:
      return {
        ...state,
        placeholderError: action.payload,
      };
    default:
      return state;
  }
};
