import React from 'react';

const InternalLinks = (props) => {
  return (
    <div className='flex px-3 py-1 item-center justify-between'>
      <button onClick={props.home}>
        <i className='fas fa-home'></i>
      </button>
      <button onClick={props.address}>
        <i className='far fa-address-book'></i>
      </button>
      <button onClick={props.agreement}>
        <i className='far fa-handshake'></i>
      </button>
      <button onClick={props.notes}>
        <i className='far fa-sticky-note'></i>
      </button>
      <button onClick={props.contactsToUse}>
        <i className='fas fa-sitemap'></i>
      </button>
      <button onClick={props.events}>
        <i className='fas fa-store'></i>
      </button>
      <button>
        <i className='fas fa-chart-line'></i>
      </button>
      <button onClick={props.social}>
        <img
          className='h-5'
          src={require('../../images/social.png')}
          alt='network'
        />
      </button>
    </div>
  );
};

export default InternalLinks;
