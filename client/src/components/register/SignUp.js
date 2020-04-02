import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
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
    console.log('Register!');
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
          />
        </div>

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
