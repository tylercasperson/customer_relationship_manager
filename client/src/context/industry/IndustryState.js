import React, { useReducer } from 'react';
import axios from 'axios';
import IndustryContext from './industryContext';
import industryReducer from './industryReducer';
import { GET_INDUSTRIES, INDUSTRY_ERROR } from '../types';

const IndustryState = (props) => {
  const initialState = {
    industries: [],
  };

  const [state, dispatch] = useReducer(industryReducer, initialState);

  // Get Industries
  const getIndustries = async () => {
    try {
      const res = await axios.get('/api/industries');

      dispatch({
        type: GET_INDUSTRIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.message);
      console.log(err);

      dispatch({
        type: INDUSTRY_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <IndustryContext.Provider
      value={{
        industries: state.industries,
        getIndustries,
      }}
    >
      {props.children}
    </IndustryContext.Provider>
  );
};

export default IndustryState;
