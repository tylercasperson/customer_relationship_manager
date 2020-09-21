import React, { useReducer } from 'react';
import axios from 'axios';
import PlaceholderContext from './placeholderContext';
import placeholderReducer from './placeholderReducer';
import {
  GET_PLACEHOLDERS,
  CREATE_PLACEHOLDER,
  UPDATE_PLACEHOLDER,
  DELETE_PLACEHOLDER,
  PLACEHOLDER_ERROR,
} from '../types';

const PlaceholderState = (props) => {
  const initialState = {
    placeholders: [],
    placeholderError: [],
  };

  const [state, dispatch] = useReducer(placeholderReducer, initialState);

  // Get Placeholders
  const getPlaceholders = async () => {
    try {
      const res = await axios.get('/api/placeholders');

      dispatch({
        type: GET_PLACEHOLDERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLACEHOLDER_ERROR,
        payload: err.response,
      });
    }
  };

  // Get Single Placeholder
  const getSinglePlaceholder = async (id) => {
    try {
      const res = await axios.get(`/api/placeholders/${id}`);

      dispatch({
        type: GET_PLACEHOLDERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLACEHOLDER_ERROR,
        payload: err.response,
      });
    }
  };

  // Add Placeholder
  const createPlaceholder = async (placeholder) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/placeholders', placeholder, config);

      dispatch({
        type: CREATE_PLACEHOLDER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLACEHOLDER_ERROR,
        payload: err,
      });
    }
  };

  // Update Placeholder
  const updatePlaceholder = async (placeholder) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/placeholders/${placeholder.id}`,
        placeholder,
        config
      );

      dispatch({
        type: UPDATE_PLACEHOLDER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLACEHOLDER_ERROR,
        payload: err,
      });
    }
  };

  // Delete Placeholder
  const deletePlaceholder = async (id) => {
    try {
      await axios.delete(`/api/placeholders/${id}`);

      dispatch({
        type: DELETE_PLACEHOLDER,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PLACEHOLDER_ERROR,
        payload: err,
      });
    }
  };

  return (
    <PlaceholderContext.Provider
      value={{
        placeholders: state.placeholders,
        placeholderError: state.placeholderError,
        getPlaceholders,
        getSinglePlaceholder,
        deletePlaceholder,
        createPlaceholder,
        updatePlaceholder,
      }}
    >
      {props.children}
    </PlaceholderContext.Provider>
  );
};

export default PlaceholderState;
