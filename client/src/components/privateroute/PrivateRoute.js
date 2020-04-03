import React, { useContext } from 'react';
import AuthContext from '../../context/authentication/AuthContext';
import { Route, Redirect } from 'react-router-dom';

// Destructuring for private routes
function PrivateRoute({ component: Component, ...rest }) {
  const authContext = useContext(AuthContext);

  // Destructuring
  const { isAuth, loading } = authContext;
  return (
    // Extra Props | if user isn't auth & done loading redirect to login page, else load Component and props within
    <Route
      {...rest}
      render={props =>
        !isAuth && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PrivateRoute;
