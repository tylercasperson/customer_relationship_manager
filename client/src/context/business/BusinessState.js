import React, { useReducer } from 'react';
import axios from 'axios';
import BusinessContext from './businessContext';
import businessReducer from './businessReducer';
import {
  RESET_BUSINESSES,
  GET_BUSINESSES,
  GET_EVENT_ATTENDANCE,
  GET_IMPORTANT_TO_BUSINESS,
  BUSINESS_ERROR,
} from '../types';
import DisplayCard from '../../components/layout/businessCard/DisplayCard';

const BusinessState = (props) => {
  const initialState = {
    businesses: [],

    // contacts: [],
    // events: [],
    // industries: [],
    // services: [],
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Reset Businesses
  const resetBusinesses = async () => {
    try {
      const res = await axios.get('/api/businesses');

      dispatch({
        type: RESET_BUSINESSES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response,
      });
    }
  };

  // Get Businesses
  const getBusinesses = async () => {
    try {
      const res = await axios.get('/api/businesses');
      console.log(res);
      dispatch({
        type: GET_BUSINESSES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response,
      });
    }
  };

  const getEventAttandance = async (id) => {
    try {
      const res = await axios.get(`/api/businesses/${id}`);

      dispatch({
        type: GET_EVENT_ATTENDANCE,
        payload: res.data.map(
          (coordinator) =>
            coordinator.eventAttendance.map(
              (attendees) => attendees.business
            )[0]
        ),
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response,
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
      console.log(err.response);
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
        resetBusinesses,
        getBusinesses,
        getEventAttandance,
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;
