import React, { useContext, useEffect } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
import WebsiteItem from './WebsiteItem';

function Websites() {
  // Will have access to any state or actions from this context
  const websiteContext = useContext(WebsiteContext);

  //Destructuring
  const { websites, filtered, getWebsites, loading } = websiteContext;

  useEffect(() => {
    getWebsites();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* If filtered isn't empty, map through the Website Item Name */}
      {filtered !== null
        ? filtered.map(website => (
            <WebsiteItem key={website._id} website={website} />
          ))
        : // Else show the websites
          websites.map(website => (
            <WebsiteItem key={website._id} website={website} />
          ))}
    </div>
  );
}

export default Websites;
