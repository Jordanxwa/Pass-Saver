import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
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
    console.log('Log In!');
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Login</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={email}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            value={password}
            onChange={onChange}
          />
        </div>

        <input
          type='submit'
          value='Log In'
          className='btn btn-block btn-dark'
        />

        <h5 className='text-center'>Don't have an account? Sign Up!</h5>
        <Link to='/signup'>
          <button className='btn btn-block btn-light'>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
