import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { GET_CONTACTS, CONTACT_ERROR } from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.message);
      console.log(err);

      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        getContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
