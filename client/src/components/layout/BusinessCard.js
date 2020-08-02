import React from 'react';

const BusinessCard = (props) => {
  return (
    <div className='businessCard col s12 m7'>
      <div className='card horizontal'>
        <div className='card-image'>
          <img
            src='https://lorempixel.com/100/190/nature/6'
            className='businessImage'
            alt='businessLogo'
          />
        </div>

        <div className='card-stacked'>
          <h4 className='header businessName'>
            <img
              src={require('../images/company-enterprise.png')}
              alt='logo'
              className='logo'
            />{' '}
            Business Name
          </h4>

          <div className='card-description'>
            <p className='businessSlogan'>
              Introduction to the business or possibly the business slogan.
            </p>
            <div className='industryBadges'>
              <span className='badge red'>
                <a href='#!' className='industryLink'>
                  Industry
                </a>
              </span>
              <span className='badge green'>
                {' '}
                <a href='#!' className='industryLink'>
                  Industry
                </a>
              </span>
              <span className='badge grey'>
                {' '}
                <a href='#!' className='industryLink'>
                  Industry
                </a>
              </span>
            </div>
          </div>
          <div className='card-action'>
            <a href='#!'>Company Webpage</a>
            <a href='#!'>
              <i className='fab fa-youtube'></i>
            </a>
            <a href='#!'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#!'>
              <i className='fab fa-amazon'></i>
            </a>

            <i className='material-icons info'>info</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
