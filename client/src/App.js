import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/website/Alerts';
import SignUp from './components/register/SignUp';
import LogIn from './components/register/Login';
import SetAuthToken from './utility/SetAuthToken';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateroute/PrivateRoute';
import WebsiteState from './context/website/WebsiteState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/authentication/AuthState';

// Set Token Globally
if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <WebsiteState>
        <AlertState>
          <Router>
            <div>
              <Navbar />
              <div className='container'>
                <Alert />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/login' component={LogIn} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </WebsiteState>
    </AuthState>
  );
}

export default App;
