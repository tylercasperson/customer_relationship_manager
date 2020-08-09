import React from 'react';

const SocialLinks = (props) => {
  return (
    <div className='flex px-3 py-2 item-center justify-between'>
      <a href='https://www.youtube.com/'>
        <i className='fab fa-youtube'></i>
      </a>
      <a href='https://twitter.com/'>
        <i className='fab fa-twitter'></i>
      </a>
      <a href='https://www.amazon.com/'>
        <i className='fab fa-amazon'></i>
      </a>
      <a href='https://www.facebook.com/'>
        <i className='fab fa-facebook-square'></i>
      </a>
      <a href='https://www.instagram.com/'>
        <i className='fab fa-instagram'></i>
      </a>
      <a href='https://www.linkedin.com/'>
        <i className='fab fa-linkedin'></i>
      </a>
      <a href='https://www.tiktok.com/'>
        <i className='fab fa-tiktok'></i>
      </a>
      <a href='https://www.whatsapp.com/'>
        <i className='fab fa-whatsapp'></i>
      </a>
    </div>
  );
};

export default SocialLinks;
