import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/register/SignUp';
import LogIn from './components/register/Login';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebsiteState from './context/website/WebsiteState';
import AuthState from './components/authentication/AuthState';

function App() {
  return (
    <AuthState>
      <WebsiteState>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/login' component={LogIn} />
              </Switch>
            </div>
          </div>
        </Router>
      </WebsiteState>
    </AuthState>
  );
}

export default App;
