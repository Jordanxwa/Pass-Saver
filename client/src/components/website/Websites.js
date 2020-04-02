import React, { useContext } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
import WebsiteItem from './WebsiteItem';

function Websites() {
  // Will have access to any state or actions from this context
  const websiteContext = useContext(WebsiteContext);

  //Destructuring
  const { websites, filtered } = websiteContext;

  return (
    <div>
      {/* If filtered isn't empty, map through the Website Item Name */}
      {filtered !== null
        ? filtered.map(website => (
            <WebsiteItem key={website.id} website={website} />
          ))
        : // Else show the websites
          websites.map(website => (
            <WebsiteItem key={website.id} website={website} />
          ))}
    </div>
  );
}

export default Websites;
