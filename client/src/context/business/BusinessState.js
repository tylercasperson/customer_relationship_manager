import React, { useReducer } from 'react';
import axios from 'axios';
import BusinessContext from './businessContext';
import businessReducer from './businessReducer';
import { GET_BUSINESSES, BUSINESS_ERROR } from '../types';

const BusinessState = (props) => {
  const initialState = {
    businesses: [
      {
        businessName: 'laudic',
        address1: '262 Oxford Drive',
        city: 'Palm Harbor',
        state: 'FL',
        zip: '34683',
      },
      {
        businessName: 'plape',
        address1: '795 Smith Dr.',
        city: 'Hallandale',
        state: 'FL',
        zip: '33009',
      },
      {
        businessName: 'premicious',
        address1: '8882 Bishop St.',
        city: 'Royersford',
        state: 'PA',
        zip: '19468',
      },
    ],
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Get Businesses
  const getBusinesses = async () => {
    try {
      const res = await axios.get('/api/businesses/1');

      dispatch({
        type: GET_BUSINESSES,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
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
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;
