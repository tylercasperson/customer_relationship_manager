import React from 'react';
import gearsLogo from '../images/service-provider.png';
import enterpriseLogo from '../images/company-enterprise.png';

function NavBar() {
  return (
    <nav>
      <div className='nav-wrapper light-blue'>
        <a className='brand-logo center logoDiv' href='#!'>
          <img src={enterpriseLogo} alt='logo' className='logo' /> Business
          Relationship Manager{' '}
          <img src={gearsLogo} alt='logo' className='logo' />
        </a>

        <ul className='left hide-on-med-and-down'>
          <li>
            <a href='#!'>Business</a>
          </li>
          <li>
            <a href='#!'>Contacts</a>
          </li>
          <li>
            <a href='#!'>Reports</a>
          </li>
        </ul>

        <ul className='right hide-on-med-and-down'>
          <li>
            <a href='#!'>Profile</a>
          </li>
          <li>
            <a href='#!'>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
