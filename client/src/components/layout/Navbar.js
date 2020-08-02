import React from 'react';
import gearsLogo from '../images/service-provider.png';
import enterpriseLogo from '../images/company-enterprise.png';

function Navbar() {
  return (
    <nav className='justify-start flex bg-blue-400 px-8 pt-2 shadow-md'>
      <div className='flex'>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Home
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Business
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Contacts
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3'
          href='#!'
        >
          Reports
        </a>
      </div>

      <div className='-mb-px flex w-full justify-center'>
        <img
          className='h-12 px-3 py-1'
          src={enterpriseLogo}
          alt='enterpriseLogo'
        />
        <div className='py-2'>Business Relationship Manager</div>
        <img className='h-12 px-3 py-1' src={gearsLogo} alt='gearsLogo' />
      </div>

      <div className='justify-end -mb-px flex'>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Profile
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
