import React from 'react';

const SocialLinks = () => {
  return (
    <div className='flex item-center justify-between mt-3'>
      <a className='py-2' href='#!'>
        <i className='fab fa-youtube'></i>
      </a>
      <a className='py-2' href='#!'>
        <i className='fab fa-twitter'></i>
      </a>
      <a className='py-2' href='#!'>
        <i className='fab fa-amazon'></i>
      </a>
      <a className='py-2' href='#!'>
        <i className='fab fa-facebook-square'></i>
      </a>
      <a className='py-2' href='#!'>
        <i className='fab fa-instagram'></i>
      </a>
      <a className='py-2' href='#!'>
        <i className='fab fa-linkedin'></i>
      </a>
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
