import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        className={`p-3 m-4 opacity-75 text-gray-800 ${alert.type}`}
      >
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
