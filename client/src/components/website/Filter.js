import React, { useContext, useEffect, useRef } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';

function Filter() {
  const websiteContext = useContext(WebsiteContext);
  const inputVal = useRef('');

  useEffect(() => {
    // If filtered is equal to null
    if (websiteContext.filtered === null) {
      // Set current val to nothing
      inputVal.current.val = '';
    }
  });

  // On Change Function
  const onChange = e => {
    // If input value doesn't equal nothing
    if (inputVal.current.value !== '') {
      // Filter through the targeted value
      websiteContext.filterWebsites(e.target.value);
    } else {
      // Else clear filter
      websiteContext.clearFilter();
    }
  };
  return (
    <form>
      <div className='form-group'>
        <input
          className='form-control'
          ref={inputVal}
          type='text'
          placeholder='Account Filter'
          onChange={onChange}
        />
      </div>
    </form>
  );
}

export default Filter;
