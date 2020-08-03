import React from 'react';

const SocialLinks = () => {
  return (
    <div className='flex item-center justify-between'>
      <button>
        <i className='far fa-address-book'></i>
      </button>
      <button>
        <i className='fas fa-sitemap'></i>
      </button>
      <button>
        <i className='fas fa-store'></i>
      </button>
      <button>
        <i className='far fa-sticky-note'></i>
      </button>
      <button>
        <i className='fas fa-chart-line'></i>
      </button>
      <button>
        <i className='far fa-handshake'></i>
      </button>
    </div>
  );
};

export default SocialLinks;
