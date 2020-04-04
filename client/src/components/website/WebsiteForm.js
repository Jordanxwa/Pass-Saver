import React, { useState, useContext, useEffect } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';

function WebsiteForm() {
  const websiteContext = useContext(WebsiteContext);

  useEffect(() => {
    // If current doesn't equal null
    if (websiteContext.current !== null) {
      // Set Website to whatever is in the current
      setWebsite(websiteContext.current);
    } else {
      setWebsite({
        website: '',
        username: '',
        password: ''
      });
    }
  }, [websiteContext, websiteContext.current]);

  const [Website, setWebsite] = useState({
    website: '',
    username: '',
    password: ''
  });

  // Destructuring
  const { website, username, password } = Website;

  // On Change Function
  const onChange = e =>
    // Copy the state | Get name and match it to value
    setWebsite({ ...Website, [e.target.name]: e.target.value });

  // On Submit Function
  const onSubmit = e => {
    e.preventDefault();

    // If current equals null
    if (websiteContext.current === null) {
      // Add Website
      websiteContext.addWebsite(Website);
    } else {
      // Update Website
      websiteContext.updateWebsite(Website);
    }
    // Clear form after submission
    toUndo();
  };

  // Clear All Function
  const toUndo = () => {
    websiteContext.clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <h2 className='text-light text-center'>
          {websiteContext.current ? 'Edit Account' : 'Add Account'}
        </h2>
        <input
          type='text'
          name='website'
          placeholder='Website'
          className='form-control'
          value={website}
          onChange={onChange}
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          className='form-control'
          value={username}
          onChange={onChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          className='form-control'
          value={password}
          onChange={onChange}
        />
        <div>
          <input
            type='submit'
            value={websiteContext.current ? 'Update Account' : 'Add Account'}
            className='btn btn-block btn-dark'
          />
        </div>
        {websiteContext.current && (
          <div>
            <button className='btn btn-block btn-light' onClick={toUndo}>
              Done
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default WebsiteForm;
