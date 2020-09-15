import {
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_ATTENDANCE_TO_EVENT,
  DELETE_EVENT,
  EVENT_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };

    case DELETE_ATTENDANCE_TO_EVENT:
      return {
        ...state,
        events: state.events.filter(
          (event, business) =>
            event.id !== action.payload[0] && business.id !== action.payload[1]
        ),
        loading: false,
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        loading: false,
      };
    case EVENT_ERROR:
      return {
        ...state,
        eventError: action.payload,
      };
    default:
      return state;
  }
};
