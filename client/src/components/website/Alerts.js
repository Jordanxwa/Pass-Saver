import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert.length > 0 &&
    alertContext.alert.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.msg}
      </div>
    ))
  );
}

export default Alert;
