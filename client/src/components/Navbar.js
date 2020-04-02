import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
  return (
    <div className='navbar bg-light'>
      <h1 className='text-dark'>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Pass Saver',
  icon: 'fas fa-lock'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
