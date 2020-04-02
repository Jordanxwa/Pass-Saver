import React from 'react';
import Websites from './website/Websites';
import WebsiteForm from '../components/website/WebsiteForm';
import Filter from '../components/website/Filter';

function Home() {
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
