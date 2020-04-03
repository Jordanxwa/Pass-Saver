import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authentication/AuthContext';
import AlertContext from '../../context/alert/AlertContext';

function SignUp(props) {
  const authContext = useContext(AuthContext);

  const alertContext = useContext(AlertContext);

  // Destructuring
  const { register, error, clearErrors, isAuth } = authContext;

  const { setAlert } = alertContext;

  useEffect(() => {
    // If Auth is true
    if (isAuth) {
      // Redirect to homepage
      props.history.push('/');
    }

    if (error === 'This user already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuth, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Destructuring
  const { name, email, password } = user;

  // On Change Function
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Submit Function
  const onSubmit = e => {
    e.preventDefault();

    register({
      name,
      email,
      password
    });
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            autoComplete='email'
            className='form-control'
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
            minLength='6'
          />
        </div>

        <input
          type='submit'
          value='Sign Up'
          className='btn btn-block btn-dark'
        />
        <h5 className='text-center'>Already have an account? Login!</h5>
        <Link to='/login'>
          <button className='btn btn-block btn-light'>Login</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
