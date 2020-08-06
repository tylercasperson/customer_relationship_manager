import React from 'react';
import InternalLinks from './InternalLinks';

const SocialLinks = (props) => {
  return (
    <div className='flex px-3 py-2 item-center justify-between'>
      <a href='#!'>
        <i className='fab fa-youtube'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-twitter'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-amazon'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-facebook-square'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-instagram'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-linkedin'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-tiktok'></i>
      </a>
      <a href='#!'>
        <i className='fab fa-whatsapp'></i>
      </a>
    </div>
  );
};

export default SocialLinks;
