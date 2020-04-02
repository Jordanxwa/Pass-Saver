import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import WebsiteContext from './WebsiteContext';
import WebsiteReducer from './WebsiteReducer';
import {
  ADD_WEBSITE,
  DELETE_WEBSITE,
  UPDATE_WEBSITE,
  FILTER_WEBSITE,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_FILTER
} from '../Types';

// Create Initial State
const WebsiteState = props => {
  const initialState = {
    websites: [
      {
        id: 1,
        website: 'Facebook.com',
        username: 'BobFace',
        password: 'facebook123'
      },
      {
        id: 2,
        website: 'Amazon.com',
        username: 'JohnAmaz',
        password: 'amazon123'
      },
      {
        id: 3,
        website: 'Ebay.com',
        username: 'KateEbs',
        password: 'ebay123'
      }
    ],
    // For Edits
    current: null,
    // For Filter
    filtered: null
  };

  // State: Allows access to anything in the state
  // Dispatch: Allows to dispatch objects to the reducer
  const [state, dispatch] = useReducer(WebsiteReducer, initialState);

  // Add Website
  const addWebsite = website => {
    // Add Id
    website.id = uuid.v4;
    dispatch({ type: ADD_WEBSITE, payload: website });
  };

  // Delete Website
  const deleteWebsite = id => {
    dispatch({ type: DELETE_WEBSITE, payload: id });
  };

  // Set Current Website
  const setCurrent = website => {
    dispatch({ type: SET_CURRENT, payload: website });
  };

  // Clear Current Website
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Website
  const updateWebsite = website => {
    dispatch({ type: UPDATE_WEBSITE, payload: website });
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
        addWebsite,
        deleteWebsite,
        setCurrent,
        clearCurrent,
        updateWebsite,
        filterWebsites,
        clearFilter
      }}
    >
      {props.children}
    </WebsiteContext.Provider>
  );
};

export default WebsiteState;
