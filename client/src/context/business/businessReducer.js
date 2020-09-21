import {
  RESET_BUSINESSES,
  GET_BUSINESSES,
  GET_EVENT_ATTENDANCE,
  GET_IMPORTANT_TO_BUSINESS,
  BUSINESS_ERROR,
} from '../types';

export default (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case RESET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
        loading: false,
      };
    case GET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
        loading: false,
      };
    case GET_EVENT_ATTENDANCE:
      return {
        ...state,
        businesses: action.payload[0],
        loading: false,
      };
    // case LAST_EVENT_FILTERED:
    //   localStorage.getItem(filteredEvent);
    //   return {};
    case GET_IMPORTANT_TO_BUSINESS:
      return {
        ...state,
        importantItems: action.payload,
        loading: false,
      };
    case BUSINESS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
