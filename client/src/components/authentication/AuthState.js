import React, { useReducer } from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../../context/Types';

// Create Initial State
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    user: null,
    loading: true,
    err: null
  };

  // State: Allows access to anything in the state
  // Dispatch: Allows to dispatch objects to the reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout User

  // Clear Errors

  // Return Provider to wrap the app with this context
  return (
    // Can access anything from other components
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.token,
        err: state.err
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
