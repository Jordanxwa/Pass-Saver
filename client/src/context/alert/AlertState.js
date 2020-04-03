import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../Types';

// Create Initial State
const AlertState = props => {
  const initialState = [];

  // State: Allows access to anything in the state
  // Dispatch: Allows to dispatch objects to the reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    const id = uuid.v4;
    dispatch({ type: SET_ALERT, payload: { type, msg } });

    // Remove alert after 2 sec
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
  };

  // Return Provider to wrap the app with this context
  return (
    // Can access anything from other components
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
