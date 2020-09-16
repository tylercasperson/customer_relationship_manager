import {
  GET_EVENT_SPECIALS,
  CREATE_EVENT_SPECIAL,
  UPDATE_EVENT_SPECIAL,
  DELETE_EVENT_SPECIAL,
  EVENT_SPECIAL_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_EVENT_SPECIALS:
      return {
        ...state,
        eventSpecials: action.payload,
        loading: false,
      };
    case CREATE_EVENT_SPECIAL:
      console.log(action.type);
      return {
        ...state,
        eventSpecials: [...state.eventSpecials, action.payload],
        loading: false,
      };
    case UPDATE_EVENT_SPECIAL:
      return {
        ...state,
        eventSpecials: state.eventSpecials.map((eventSpecial) =>
          eventSpecial.id === action.payload.id ? action.payload : eventSpecial
        ),
      };
    case DELETE_EVENT_SPECIAL:
      return {
        ...state,
        eventSpecials: state.eventSpecials.filter(
          (eventSpecial) => eventSpecial.id !== action.payload
        ),
        loading: false,
      };
    case EVENT_SPECIAL_ERROR:
      return {
        ...state,
        eventSpecialError: action.payload,
      };
    default:
      return state;
  }
};
