import React from 'react';

const InternalLinks = (props) => {
  return (
    <div className='flex item-center justify-between'>
      <button onClick={props.address}>
        <i className='far fa-address-book'></i>
      </button>
      <button onClick={props.agreement}>
        <i className='far fa-handshake'></i>
      </button>
      <button onClick={props.notes}>
        <i className='far fa-sticky-note'></i>
      </button>
      <button>
        <i className='fas fa-sitemap'></i>
      </button>
      <button>
        <i className='fas fa-store'></i>
      </button>
      <button>
        <i className='fas fa-chart-line'></i>
      </button>
    </div>
  );
};

export default InternalLinks;
