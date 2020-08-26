import React, { useReducer } from 'react';
import axios from 'axios';
import ServiceContext from './serviceContext';
import serviceReducer from './serviceReducer';
import { GET_SERVICES, SERVICE_ERROR } from '../types';

const ServiceState = (props) => {
  const initialState = {
    services: [],
  };

  const [state, dispatch] = useReducer(serviceReducer, initialState);

  // Get Industries
  const getServices = async () => {
    try {
      const res = await axios.get('/api/services');

      dispatch({
        type: GET_SERVICES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.message);
      console.log(err);

      dispatch({
        type: SERVICE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        services: state.services,
        getServices,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;
