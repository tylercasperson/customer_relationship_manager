import { GET_CONTACTS, CONTACT_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
