import React, { useReducer } from 'react';
import axios from 'axios';
import EventSpecialContext from './eventSpecialContext';
import eventSpecialReducer from './eventSpecialReducer';
import {
  GET_EVENT_SPECIALS,
  CREATE_EVENT_SPECIAL,
  UPDATE_EVENT_SPECIAL,
  DELETE_EVENT_SPECIAL,
  EVENT_SPECIAL_ERROR,
} from '../types';

const EventSpecialState = (props) => {
  const initialState = {
    eventSpecials: [],
    eventSpecialError: [],
  };

  const [state, dispatch] = useReducer(eventSpecialReducer, initialState);

  // Get All Event Specials
  const getEventSpecials = async () => {
    try {
      const res = await axios.get('/api/eventSpecials');

      dispatch({
        type: GET_EVENT_SPECIALS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err.response,
      });
    }
  };

  // Get Business Event Specials
  const getBusinessEventSpecials = async (eventId) => {
    try {
      const res = await axios.get(`/api/eventSpecials/${eventId}`);

      dispatch({
        type: GET_EVENT_SPECIALS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err.response,
      });
    }
  };

  // Add Event Special
  const createEventSpecial = async (eventSpecial) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/eventSpecials', eventSpecial, config);

      dispatch({
        type: CREATE_EVENT_SPECIAL,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err,
      });
    }
  };

  // Update Event Special
  const updateEventSpecial = async (eventSpecial) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/eventSpecials/${eventSpecial.id}`,
        eventSpecial,
        config
      );

      dispatch({
        type: UPDATE_EVENT_SPECIAL,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err,
      });
    }
  };

  // Delete Event Special
  const deleteEventSpecial = async (eventSpecialId) => {
    try {
      await axios.delete(`/api/eventSpecials/${eventSpecialId}`);

      dispatch({
        type: DELETE_EVENT_SPECIAL,
        payload: eventSpecialId,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err,
      });
    }
  };

  // Delete All Event Special at event
  const deleteAllEventSpecialAtEvent = async (eventId) => {
    try {
      await axios.delete(`/api/eventSpecials/${eventId}`);

      dispatch({
        type: DELETE_EVENT_SPECIAL,
        payload: eventId,
      });
    } catch (err) {
      dispatch({
        type: EVENT_SPECIAL_ERROR,
        payload: err,
      });
    }
  };

  return (
    <EventSpecialContext.Provider
      value={{
        eventSpecials: state.eventSpecials,
        eventSpecialError: state.eventSpecialError,
        getEventSpecials,
        getBusinessEventSpecials,
        updateEventSpecial,
        createEventSpecial,
        deleteEventSpecial,
        deleteAllEventSpecialAtEvent,
      }}
    >
      {props.children}
    </EventSpecialContext.Provider>
  );
};

export default EventSpecialState;
