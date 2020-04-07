import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../context/authentication/AuthContext';
import WebsiteContext from '../context/website/WebsiteContext';

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const websiteContext = useContext(WebsiteContext);

  // Destructuring
  const { isAuth, logout } = authContext;
  const { clearWebsites } = websiteContext;

  //User Logout Function
  const userLogout = () => {
    logout();
    clearWebsites();
  };

  return (
    <div className='navbar bg-dark mb-3'>
      <h1 className='text-light'>
        <i className={icon} /> {title}
      </h1>
      <div>
        {/* If Auth is true display a logout btn */}
        {isAuth ? (
          <a onClick={userLogout} href='login'>
            <button className='btn btn-dark'>Logout</button>
          </a>
        ) : (
          ''
        )}
      </div>
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
