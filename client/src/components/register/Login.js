import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authentication/AuthContext';
import AlertContext from '../../context/alert/AlertContext';

function LogIn(props) {
  const authContext = useContext(AuthContext);

  const alertContext = useContext(AlertContext);

  // Destructuring
  const { login, error, clearErrors, isAuth } = authContext;

  useEffect(() => {
    // If Auth is true
    if (isAuth) {
      // Redirect to homepage
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuth, props.history]);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // Destructuring
  const { email, password } = user;

  // On Change Function
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Submit Function
  const onSubmit = e => {
    e.preventDefault();

    login({
      email,
      password
    });
  };

  return (
    <div className='container mt-4'>
      <div className='form-container'>
        <h1 className='text-center signText'>We'll Remember For You.</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              className='form-control'
              autoComplete='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              autoComplete='current-password'
              value={password}
              onChange={onChange}
              required
            />
          </div>

          <input
            type='submit'
            value='Log In'
            className='btn btn-block btn-dark mt-4'
          />

          <h5 className='text-center optionTxt'>
            Don't have an account? Sign Up!
          </h5>
          <Link to='/signup'>
            <button className='btn btn-block btn-light'>Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
