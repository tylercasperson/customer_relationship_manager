import React, { useReducer } from 'react';
import axios from 'axios';
import BusinessContext from './businessContext';
import businessReducer from './businessReducer';
import {
  GET_BUSINESSES,
  GET_IMPORTANT_TO_BUSINESS,
  BUSINESS_ERROR,
} from '../types';

const BusinessState = (props) => {
  const initialState = {
    businesses: [],
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Get Businesses
  const getBusinesses = async () => {
    try {
      const res = await axios.get('/api/businesses');

      dispatch({
        type: GET_BUSINESSES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get Important to Businesses
  const getImportantToBusiness = async () => {
    try {
      const res = await axios.get('/api/importantToBusinesses');

      dispatch({
        type: GET_IMPORTANT_TO_BUSINESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log('hello');
      console.log(err.response.message);
      console.log(err);

      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses: state.businesses,
        getBusinesses,
        getImportantToBusiness,
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;
