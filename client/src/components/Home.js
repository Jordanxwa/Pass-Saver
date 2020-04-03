import React, { useContext, useEffect } from 'react';
import Websites from './website/Websites';
import WebsiteForm from '../components/website/WebsiteForm';
import Filter from '../components/website/Filter';
import AuthContext from '../context/authentication/AuthContext';

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // Will look at token, validate it and put user into state
    authContext.loadUser();
  });

  return (
    <div className='row'>
      <div className='col-6'>
        <WebsiteForm />
      </div>
      <div className='col-6'>
        <Filter />
        <Websites />
      </div>
    </div>
  );
}

export default Home;
