import { GET_INDUSTRIES, INDUSTRY_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_INDUSTRIES:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case INDUSTRY_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
