import { GET_BUSINESSES, BUSINESS_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
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
