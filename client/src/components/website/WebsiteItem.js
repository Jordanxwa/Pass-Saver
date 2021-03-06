import React, { useContext } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
import PropTypes from 'prop-types';

function WebsiteItem({ website }) {
  const websiteContext = useContext(WebsiteContext);

  const { deleteWebsite, setCurrent, clearCurrent } = websiteContext;

  // Delete Function
  const onDelete = () => {
    deleteWebsite(website._id);
    clearCurrent();
  };

  return (
    <div className='card bg-light  align-items-center mt-2 p-2 mb-3'>
      <h3 className='text-center text-dark pb-3'>Account</h3>

      <h5 className='text-dark'>
        <span class={{ float: 'left', paddingRight: 20 }}>
          <i class='fas fa-laptop pr-1'></i>
        </span>
        <span className='text-center'>{website.website}</span>
      </h5>

      <h5 className='text-dark'>
        <span class={{ float: 'left', paddingRight: 20 }}>
          <i class='fas fa-user pr-1'></i>
        </span>
        <span className='text-center'>{website.username}</span>
      </h5>

      <h5 className='text-dark'>
        <span class={{ float: 'left', paddingRight: 20 }}>
          <i class='fas fa-key pr-1'></i>
        </span>
        <span className='text-center'>{website.password}</span>
      </h5>
      <div>
        <span className='pr-1'>
          <button
            type='button'
            className='btn btn-sm btn-outline-dark '
            onClick={() => setCurrent(website)}
          >
            Edit
          </button>
        </span>
        <button
          type='button'
          className='btn btn-sm btn-outline-danger'
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

WebsiteItem.propTypes = {
  website: PropTypes.object.isRequired
};

export default WebsiteItem;
