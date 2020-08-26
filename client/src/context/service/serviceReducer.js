import { GET_SERVICES, SERVICE_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    case SERVICE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
