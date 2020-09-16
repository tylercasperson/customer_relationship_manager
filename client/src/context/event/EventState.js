import React, { useReducer } from 'react';
import axios from 'axios';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import {
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_ATTENDANCE_TO_EVENT,
  DELETE_EVENT,
  EVENT_ERROR,
} from '../types';

const EventState = (props) => {
  const initialState = {
    events: [],
    eventError: [],
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  //   Get Events
  const getEvents = async () => {
    try {
      const res = await axios.get('/api/events');

      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response,
      });
    }
  };

  //   Get events that businesses attend
  const getEventsForBusinesses = async (eventId) => {
    console.log(eventId);
    try {
      const res = await axios.get(`/api/events/${eventId}`);
      console.log(res.data);

      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response,
      });
    }
  };

  // Get Business specific events
  const getBusinessEvents = async (businessId) => {
    console.log(businessId);
    try {
      const res = await axios.get(`/api/events/${businessId}`);

      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response,
      });
    }
  };

  // Add Event
  const createEvent = async (event) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/events', event, config);

      dispatch({
        type: CREATE_EVENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err,
      });
    }
  };

  // Update Event
  const updateEvent = async (event) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/events/${event.id}`, event, config);

      dispatch({
        type: UPDATE_EVENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err,
      });
    }
  };

  // Delete attendance to the Event
  const deleteAttendanceToEvent = async (eventId, businessId) => {
    try {
      await axios.delete(`/api/events/${eventId}/${businessId}`);

      dispatch({
        type: DELETE_ATTENDANCE_TO_EVENT,
        payload: eventId,
        businessId,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err,
      });
    }
  };

  // Delete the Event
  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/events/${eventId}`);

      dispatch({
        type: DELETE_EVENT,
        payload: eventId,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err,
      });
    }
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        eventError: state.eventError,
        getEvents,
        getEventsForBusinesses,
        getBusinessEvents,
        createEvent,
        updateEvent,
        deleteAttendanceToEvent,
        deleteEvent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
