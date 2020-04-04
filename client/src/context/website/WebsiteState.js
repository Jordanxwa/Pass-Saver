import React, { useReducer } from 'react';
import axios from 'axios';
import WebsiteContext from './WebsiteContext';
import WebsiteReducer from './WebsiteReducer';
import {
  ADD_WEBSITE,
  GET_WEBSITES,
  CLEAR_WEBSITES,
  DELETE_WEBSITE,
  UPDATE_WEBSITE,
  FILTER_WEBSITE,
  WEBSITE_ERROR,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_FILTER
} from '../Types';

// Create Initial State
const WebsiteState = props => {
  const initialState = {
    websites: [],
    // For Edits
    current: null,
    // For Filter
    filtered: null,
    //Error
    error: null
  };

  // State: Allows access to anything in the state
  // Dispatch: Allows to dispatch objects to the reducer
  const [state, dispatch] = useReducer(WebsiteReducer, initialState);

  // Get Websites
  const getWebsites = async () => {
    try {
      // Make post req to back-end
      const res = await axios.get('./api/websites');

      // Gets all websites from that user
      dispatch({ type: GET_WEBSITES, payload: res.data });
    } catch (error) {
      dispatch({ type: WEBSITE_ERROR, payload: error.response.msg });
    }
  };

  // Add Website
  const addWebsite = async website => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      // Make post req to back-end
      const res = await axios.post('./api/websites', website, config);

      dispatch({ type: ADD_WEBSITE, payload: res.data });
    } catch (error) {
      dispatch({ type: WEBSITE_ERROR, payload: error.response.msg });
    }
  };

  // Update Website
  const updateWebsite = async website => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      // Make post req to back-end
      const res = await axios.put(
        `./api/websites/${website._id}`,
        website,
        config
      );

      dispatch({ type: UPDATE_WEBSITE, payload: res.data });
    } catch (error) {
      dispatch({ type: WEBSITE_ERROR, payload: error.response.msg });
    }
  };

  // Delete Website
  const deleteWebsite = async id => {
    try {
      // Make delete req to back-end
      await axios.delete(`./api/websites/${id}`);

      dispatch({ type: DELETE_WEBSITE, payload: id });
    } catch (error) {
      dispatch({ type: WEBSITE_ERROR, payload: error.response.msg });
    }
  };

  // Clear Websites
  const clearWebsites = () => {
    dispatch({ type: CLEAR_WEBSITES });
  };

  // Set Current Website
  const setCurrent = website => {
    dispatch({ type: SET_CURRENT, payload: website });
  };

  // Clear Current Website
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Website
  const filterWebsites = inputVal => {
    dispatch({ type: FILTER_WEBSITE, payload: inputVal });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Return Provider to wrap the app with this context
  return (
    // Can access anything from other components
    <WebsiteContext.Provider
      value={{
        websites: state.websites,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addWebsite,
        deleteWebsite,
        setCurrent,
        clearCurrent,
        updateWebsite,
        filterWebsites,
        clearFilter,
        getWebsites,
        clearWebsites
      }}
    >
      {props.children}
    </WebsiteContext.Provider>
  );
};

export default WebsiteState;
